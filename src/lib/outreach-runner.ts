import {
  generateId,
  getTodayKey,
  readAdminDb,
  writeAdminDb,
  type AdminDatabase,
  type DailyProviderUsage,
  type OutreachProspect,
  type OutreachSendLog,
} from "@/lib/admin-store";
import { renderPersonalizedEmail, sendOutreachEmail } from "@/lib/email-engine";

export type BatchMode = "auto" | "followups" | "new";

export interface BatchRunResult {
  sent: number;
  failed: number;
  dryRun: number;
  sentToday: number;
  brevoSentToday: number;
  resendSentToday: number;
  dailyLimit: number;
  remainingToday: number;
  hasMoreDue: boolean;
  logs: OutreachSendLog[];
}

export function isFollowUpDue(prospect: OutreachProspect, nowMs: number): boolean {
  if (prospect.status !== "active") return false;
  if (prospect.stage < 1 || prospect.stage >= 4) return false;
  if (!prospect.nextFollowUpAt) return false;
  return new Date(prospect.nextFollowUpAt).getTime() <= nowMs;
}

export function countOutreachStats(db: AdminDatabase, nowMs = Date.now()) {
  const todayKey = getTodayKey();
  const sentToday = db.dailyCounts[todayKey] || 0;
  const providerUsage: DailyProviderUsage = db.dailyProviderCounts[todayKey] || {
    brevo: 0,
    resend: 0,
  };
  const brevoDailyLimit = Math.max(0, db.settings.brevoDailyLimit ?? 300);
  const resendDailyLimit = Math.max(0, db.settings.resendDailyLimit ?? 100);
  const dailyLimit = Math.max(
    1,
    db.settings.sendProvider === "auto"
      ? brevoDailyLimit + resendDailyLimit
      : db.settings.dailyLimit || 400
  );

  let queuedNew = 0;
  let dueFollowUps = 0;
  let activeInSequence = 0;
  let completed = 0;
  let replied = 0;
  let unsubscribed = 0;

  for (const p of db.prospects) {
    if (p.status === "replied") {
      replied++;
    } else if (p.status === "unsubscribed") {
      unsubscribed++;
    } else if (p.status === "completed" || p.stage >= 4) {
      completed++;
    } else if (p.status === "active") {
      if (p.stage === 0) {
        queuedNew++;
      } else {
        activeInSequence++;
        if (isFollowUpDue(p, nowMs)) {
          dueFollowUps++;
        }
      }
    }
  }

  return {
    todayKey,
    sentToday,
    brevoSentToday: providerUsage.brevo,
    resendSentToday: providerUsage.resend,
    brevoDailyLimit,
    resendDailyLimit,
    dailyLimit,
    remainingToday: Math.max(0, dailyLimit - sentToday),
    queuedNew,
    dueFollowUps,
    activeInSequence,
    completed,
    replied,
    unsubscribed,
    totalProspects: db.prospects.length,
  };
}

export async function runOutreachBatch(options?: {
  mode?: BatchMode;
  batchSize?: number;
}): Promise<BatchRunResult> {
  const mode: BatchMode = options?.mode || "auto";
  const requestedBatch = Math.min(Math.max(options?.batchSize || 15, 1), 25);

  const db = await readAdminDb();
  const todayKey = getTodayKey();
  const brevoCap = Math.max(0, db.settings.brevoDailyLimit ?? 300);
  const resendCap = Math.max(0, db.settings.resendDailyLimit ?? 100);
  const dailyLimit = Math.max(
    1,
    db.settings.sendProvider === "auto"
      ? brevoCap + resendCap
      : db.settings.dailyLimit || 400
  );

  let sentToday = db.dailyCounts[todayKey] || 0;
  const todayUsage: DailyProviderUsage = db.dailyProviderCounts[todayKey] || {
    brevo: 0,
    resend: 0,
  };
  db.dailyProviderCounts[todayKey] = todayUsage;

  const remainingQuota = Math.max(0, dailyLimit - sentToday);

  if (remainingQuota === 0) {
    return {
      sent: 0,
      failed: 0,
      dryRun: 0,
      sentToday,
      brevoSentToday: todayUsage.brevo,
      resendSentToday: todayUsage.resend,
      dailyLimit,
      remainingToday: 0,
      hasMoreDue: false,
      logs: [],
    };
  }

  const nowMs = Date.now();
  const dueFollowUps = db.prospects.filter((p) => isFollowUpDue(p, nowMs));
  const queuedNew = db.prospects.filter(
    (p) => p.status === "active" && p.stage === 0
  );

  let eligible: OutreachProspect[] = [];
  if (mode === "followups") {
    eligible = dueFollowUps;
  } else if (mode === "new") {
    eligible = queuedNew;
  } else {
    eligible = db.settings.autoFollowUpEnabled
      ? [...dueFollowUps, ...queuedNew]
      : [...queuedNew];
  }

  const countToSend = Math.min(requestedBatch, remainingQuota, eligible.length);
  const targets = eligible.slice(0, countToSend);

  let sent = 0;
  let failed = 0;
  let dryRun = 0;
  const runLogs: OutreachSendLog[] = [];

  for (const prospect of targets) {
    const nextStep = (prospect.stage + 1) as 1 | 2 | 3 | 4;
    const template =
      db.templates.find((t) => t.step === nextStep) || db.templates[0];
    if (!template) continue;

    const rendered = renderPersonalizedEmail(template, prospect, db.settings);
    const result = await sendOutreachEmail({
      to: prospect.email,
      toName: prospect.firstName || prospect.businessName,
      subject: rendered.subject,
      html: rendered.html,
      text: rendered.text,
      settings: db.settings,
      todayUsage,
    });

    const sentAt = new Date().toISOString();
    const logEntry: OutreachSendLog = {
      id: generateId("log"),
      prospectId: prospect.id,
      prospectEmail: prospect.email,
      businessName: prospect.businessName,
      step: nextStep,
      subject: rendered.subject,
      provider: result.provider,
      status: result.ok
        ? result.provider === "dry-run"
          ? "dry-run"
          : "sent"
        : "failed",
      error: result.error,
      sentAt,
    };

    runLogs.push(logEntry);
    db.logs.unshift(logEntry);

    if (result.ok) {
      sent++;
      if (result.provider === "dry-run") {
        dryRun++;
      } else if (result.provider === "brevo") {
        todayUsage.brevo++;
      } else if (result.provider === "resend") {
        todayUsage.resend++;
      }
      sentToday++;
      db.dailyCounts[todayKey] = sentToday;

      prospect.stage = nextStep;
      prospect.lastSentAt = sentAt;
      prospect.lastError = undefined;

      if (nextStep >= 4) {
        prospect.status = "completed";
        prospect.nextFollowUpAt = undefined;
      } else {
        const followingTemplate = db.templates.find(
          (t) => t.step === ((nextStep + 1) as 2 | 3 | 4)
        );
        const delayDays = Math.max(1, followingTemplate?.delayDays ?? 3);
        prospect.nextFollowUpAt = new Date(
          Date.now() + delayDays * 24 * 60 * 60 * 1000
        ).toISOString();
      }
    } else {
      failed++;
      prospect.lastError = result.error;
    }
  }

  await writeAdminDb(db);

  const remainingToday = Math.max(0, dailyLimit - sentToday);
  const stillEligible = eligible.length - targets.length;

  return {
    sent,
    failed,
    dryRun,
    sentToday,
    brevoSentToday: todayUsage.brevo,
    resendSentToday: todayUsage.resend,
    dailyLimit,
    remainingToday,
    hasMoreDue: remainingToday > 0 && stillEligible > 0,
    logs: runLogs,
  };
}
