import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { siteConfig } from "@/lib/site-config";

export type LeadStatus = "new" | "contacted" | "qualified" | "won" | "archived";

export interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
  status: LeadStatus;
  notes: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

export type ProspectStatus =
  | "active"
  | "completed"
  | "replied"
  | "unsubscribed"
  | "bounced";

export interface OutreachProspect {
  id: string;
  email: string;
  firstName: string;
  businessName: string;
  businessType: string;
  problem: string;
  city: string;
  website: string;
  brevoListId?: number;
  brevoListName?: string;
  /** 0 = queued, 1 = initial sent, 2 = FU #1 sent, 3 = FU #2 sent, 4 = FU #3 (final) sent */
  stage: 0 | 1 | 2 | 3 | 4;
  status: ProspectStatus;
  lastSentAt?: string;
  nextFollowUpAt?: string;
  lastError?: string;
  createdAt: string;
}

export interface EmailTemplateStep {
  step: 1 | 2 | 3 | 4;
  label: string;
  delayDays: number;
  subject: string;
  headline: string;
  body: string;
  ctaText: string;
  ctaUrl: string;
}

export type SendProviderMode = "auto" | "brevo" | "resend";

export interface OutreachSettings {
  dailyLimit: number;
  brevoDailyLimit: number;
  resendDailyLimit: number;
  sendProvider: SendProviderMode;
  senderName: string;
  senderEmail: string;
  replyToEmail: string;
  autoFollowUpEnabled: boolean;
  activeBrevoListId?: number;
  activeBrevoListName?: string;
}

export interface DailyProviderUsage {
  brevo: number;
  resend: number;
}

export interface OutreachSendLog {
  id: string;
  prospectId: string;
  prospectEmail: string;
  businessName: string;
  step: 1 | 2 | 3 | 4;
  subject: string;
  provider: "brevo" | "resend" | "dry-run";
  status: "sent" | "failed" | "dry-run";
  error?: string;
  sentAt: string;
}

export interface AdminDatabase {
  leads: ContactLead[];
  prospects: OutreachProspect[];
  templates: EmailTemplateStep[];
  settings: OutreachSettings;
  dailyCounts: Record<string, number>;
  dailyProviderCounts: Record<string, DailyProviderUsage>;
  logs: OutreachSendLog[];
}

export interface IntegrationStatus {
  storageMode: "upstash-redis" | "local-file";
  brevoConfigured: boolean;
  resendConfigured: boolean;
  cronSecretConfigured: boolean;
  customAdminPassword: boolean;
}

const REDIS_DB_KEY = "katella:admin:db:v1";

export function getDefaultTemplates(): EmailTemplateStep[] {
  return [
    {
      step: 1,
      label: "Email 1 — Personalized Initial Outreach",
      delayDays: 0,
      subject: "Quick idea for {{business_name}} ({{business_type}})",
      headline: "Spotted a quick growth opportunity for {{business_name}}",
      body: `Hi {{first_name}},

I was looking at {{business_name}} today and noticed a specific gap that often holds back {{business_type}} companies in {{city}}:

→ {{problem}}

At Katella Digital, we help {{business_type}} brands fix this directly by pairing conversion-focused web design, Local SEO, AI Search (GEO), and high-intent paid campaigns — without bloated agency retainers.

I put together 3 quick, tailored ideas specifically for {{business_name}} that you can implement right away (even with your current team).

Would you be open to me sending over a short 2-minute breakdown?`,
      ctaText: "Book a 15-Min Growth Audit",
      ctaUrl: `${siteConfig.url}/contact`,
    },
    {
      step: 2,
      label: "Follow-up #1 — Value Reminder",
      delayDays: 3,
      subject: "Re: Quick idea for {{business_name}}",
      headline: "Following up on {{business_name}}",
      body: `Hi {{first_name}},

Just bumping this to the top of your inbox in case it got buried this week.

For {{business_type}} businesses dealing with {{problem}}, even fixing the top 2 conversion bottlenecks usually lifts qualified leads within the first 30 days.

If it's helpful, reply "send it" and I'll share the quick audit notes we drafted for {{business_name}} — zero obligation.`,
      ctaText: "View Our Results",
      ctaUrl: `${siteConfig.url}/portfolio`,
    },
    {
      step: 3,
      label: "Follow-up #2 — Proof & Case Insight",
      delayDays: 4,
      subject: "How similar {{business_type}} brands solved this",
      headline: "Real numbers from brands in your space",
      body: `Hi {{first_name}},

Wanted to share one quick insight before I step back.

We recently helped growth-focused service and consumer brands facing the exact same challenge — {{problem}} — increase qualified inbound pipeline by 3x+ by aligning their search visibility, landing experience, and paid media under one roof.

If growing {{business_name}} is on your radar this quarter, I'd love to show you the exact roadmap we'd recommend.`,
      ctaText: "Explore Katella Digital",
      ctaUrl: `${siteConfig.url}/services`,
    },
    {
      step: 4,
      label: "Follow-up #3 — Polite Breakup (Final)",
      delayDays: 5,
      subject: "Should I close the file for {{business_name}}?",
      headline: "Last note from Katella Digital",
      body: `Hi {{first_name}},

I haven't heard back, so I'll assume improving {{problem}} isn't a top priority for {{business_name}} right now — and I don't want to crowd your inbox.

I'll close out your file on our end for now. Whenever you're ready to scale {{business_name}} with a dedicated digital growth partner, just reply to this email anytime and we'll pick right up.

Wishing you and the {{business_name}} team a strong quarter ahead!`,
      ctaText: "Start a Conversation Anytime",
      ctaUrl: `${siteConfig.url}/contact`,
    },
  ];
}

export function getDefaultSettings(): OutreachSettings {
  return {
    dailyLimit: 400,
    brevoDailyLimit: 300,
    resendDailyLimit: 100,
    sendProvider: "auto",
    senderName: process.env.SENDER_NAME || "Katella Digital",
    senderEmail:
      process.env.SENDER_EMAIL ||
      process.env.CONTACT_EMAIL ||
      "info@katelladigital.com",
    replyToEmail: process.env.CONTACT_EMAIL || "info@katelladigital.com",
    autoFollowUpEnabled: true,
  };
}

export function createEmptyDb(): AdminDatabase {
  return {
    leads: [],
    prospects: [],
    templates: getDefaultTemplates(),
    settings: getDefaultSettings(),
    dailyCounts: {},
    dailyProviderCounts: {},
    logs: [],
  };
}

function getRedisCredentials(): { url: string; token: string } | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "";
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || "";
  if (url && token) return { url: url.replace(/\/$/, ""), token };
  return null;
}

export function getIntegrationStatus(): IntegrationStatus {
  return {
    storageMode: getRedisCredentials() ? "upstash-redis" : "local-file",
    brevoConfigured: Boolean(process.env.BREVO_API_KEY),
    resendConfigured: Boolean(process.env.RESEND_API_KEY),
    cronSecretConfigured: Boolean(process.env.CRON_SECRET),
    customAdminPassword: Boolean(process.env.ADMIN_PASSWORD),
  };
}

function getLocalDbPath(): string {
  if (process.env.VERCEL) {
    return "/tmp/katella-admin-db.json";
  }
  return path.join(process.cwd(), ".data", "katella-admin-db.json");
}

function hydrateDb(raw: Partial<AdminDatabase> | null): AdminDatabase {
  const base = createEmptyDb();
  if (!raw || typeof raw !== "object") return base;
  const rawSettings = raw.settings as Partial<OutreachSettings> | undefined;
  const validProvider: SendProviderMode =
    rawSettings?.sendProvider === "brevo" ||
    rawSettings?.sendProvider === "resend" ||
    rawSettings?.sendProvider === "auto"
      ? rawSettings.sendProvider
      : "auto";

  return {
    leads: Array.isArray(raw.leads) ? raw.leads : base.leads,
    prospects: Array.isArray(raw.prospects) ? raw.prospects : base.prospects,
    templates:
      Array.isArray(raw.templates) && raw.templates.length === 4
        ? raw.templates
        : base.templates,
    settings: {
      ...base.settings,
      ...(rawSettings || {}),
      sendProvider: validProvider,
    },
    dailyCounts:
      raw.dailyCounts && typeof raw.dailyCounts === "object"
        ? raw.dailyCounts
        : {},
    dailyProviderCounts:
      raw.dailyProviderCounts && typeof raw.dailyProviderCounts === "object"
        ? raw.dailyProviderCounts
        : {},
    logs: Array.isArray(raw.logs) ? raw.logs : [],
  };
}

export async function readAdminDb(): Promise<AdminDatabase> {
  const redis = getRedisCredentials();
  if (redis) {
    try {
      const res = await fetch(
        `${redis.url}/get/${encodeURIComponent(REDIS_DB_KEY)}`,
        {
          headers: { Authorization: `Bearer ${redis.token}` },
          cache: "no-store",
        }
      );
      if (res.ok) {
        const json = (await res.json()) as { result?: string | null };
        if (json.result) {
          return hydrateDb(JSON.parse(json.result) as Partial<AdminDatabase>);
        }
      }
      return createEmptyDb();
    } catch (err) {
      console.error("Upstash Redis read error:", err);
      return createEmptyDb();
    }
  }

  const filePath = getLocalDbPath();
  try {
    const content = await fs.readFile(filePath, "utf8");
    return hydrateDb(JSON.parse(content) as Partial<AdminDatabase>);
  } catch {
    return createEmptyDb();
  }
}

export async function writeAdminDb(db: AdminDatabase): Promise<void> {
  const compactDb: AdminDatabase = {
    ...db,
    logs: db.logs.slice(0, 500),
  };
  const serialized = JSON.stringify(compactDb);

  const redis = getRedisCredentials();
  if (redis) {
    const res = await fetch(
      `${redis.url}/set/${encodeURIComponent(REDIS_DB_KEY)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redis.token}`,
          "Content-Type": "text/plain",
        },
        body: serialized,
      }
    );
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Upstash Redis write failed: ${text}`);
    }
    return;
  }

  const filePath = getLocalDbPath();
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, serialized, "utf8");
}

export function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function generateId(prefix: string): string {
  return `${prefix}_${crypto.randomBytes(6).toString("hex")}`;
}

export async function recordContactLead(input: {
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
  source?: string;
}): Promise<ContactLead> {
  const db = await readAdminDb();
  const now = new Date().toISOString();
  const lead: ContactLead = {
    id: generateId("lead"),
    name: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    service: input.service.trim(),
    details: input.details.trim(),
    status: "new",
    notes: "",
    source: input.source || "website-contact-form",
    createdAt: now,
    updatedAt: now,
  };
  db.leads.unshift(lead);
  await writeAdminDb(db);
  return lead;
}
