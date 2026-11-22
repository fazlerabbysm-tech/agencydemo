import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  generateId,
  getDefaultTemplates,
  getIntegrationStatus,
  readAdminDb,
  writeAdminDb,
  type EmailTemplateStep,
  type OutreachProspect,
  type OutreachSettings,
  type ProspectStatus,
} from "@/lib/admin-store";
import { renderPersonalizedEmail, sendOutreachEmail } from "@/lib/email-engine";
import {
  countOutreachStats,
  runOutreachBatch,
  type BatchMode,
} from "@/lib/outreach-runner";

export const maxDuration = 60;

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = await readAdminDb();
  const stats = countOutreachStats(db);

  return NextResponse.json({
    stats,
    prospects: db.prospects,
    templates: db.templates,
    settings: db.settings,
    logs: db.logs.slice(0, 120),
    integrations: getIntegrationStatus(),
  });
}

type OutreachActionPayload =
  | {
      action: "add_prospect";
      prospect: {
        email: string;
        firstName?: string;
        businessName?: string;
        businessType?: string;
        problem?: string;
        city?: string;
        website?: string;
      };
    }
  | {
      action: "import_prospects";
      rows: Array<{
        email: string;
        firstName?: string;
        businessName?: string;
        businessType?: string;
        problem?: string;
        city?: string;
        website?: string;
      }>;
    }
  | {
      action: "update_prospect";
      id: string;
      status?: ProspectStatus;
      stage?: 0 | 1 | 2 | 3 | 4;
      firstName?: string;
      businessName?: string;
      businessType?: string;
      problem?: string;
      city?: string;
    }
  | {
      action: "delete_prospect";
      id: string;
    }
  | {
      action: "save_templates";
      templates: EmailTemplateStep[];
    }
  | {
      action: "reset_templates";
    }
  | {
      action: "save_settings";
      settings: Partial<OutreachSettings>;
    }
  | {
      action: "preview_email";
      step: 1 | 2 | 3 | 4;
      templateOverride?: EmailTemplateStep;
      prospectId?: string;
    }
  | {
      action: "send_test";
      toEmail: string;
      step: 1 | 2 | 3 | 4;
      templateOverride?: EmailTemplateStep;
      prospectId?: string;
    }
  | {
      action: "send_batch";
      mode?: BatchMode;
      batchSize?: number;
    };

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const payload = (await req.json()) as OutreachActionPayload;

    if (payload.action === "send_batch") {
      const result = await runOutreachBatch({
        mode: payload.mode || "auto",
        batchSize: payload.batchSize || 15,
      });
      return NextResponse.json({ success: true, ...result });
    }

    const db = await readAdminDb();

    if (payload.action === "add_prospect") {
      const email = String(payload.prospect?.email || "").trim().toLowerCase();
      if (!email || !email.includes("@")) {
        return NextResponse.json(
          { error: "A valid email address is required." },
          { status: 400 }
        );
      }
      if (db.prospects.some((p) => p.email.toLowerCase() === email)) {
        return NextResponse.json(
          { error: "This email is already in your outreach list." },
          { status: 409 }
        );
      }

      const newProspect: OutreachProspect = {
        id: generateId("pr"),
        email,
        firstName: (payload.prospect.firstName || "").trim(),
        businessName: (payload.prospect.businessName || "").trim(),
        businessType: (payload.prospect.businessType || "").trim(),
        problem: (payload.prospect.problem || "").trim(),
        city: (payload.prospect.city || "").trim(),
        website: (payload.prospect.website || "").trim(),
        stage: 0,
        status: "active",
        createdAt: new Date().toISOString(),
      };
      db.prospects.unshift(newProspect);
      await writeAdminDb(db);
      return NextResponse.json({ success: true, prospect: newProspect });
    }

    if (payload.action === "import_prospects") {
      const rows = Array.isArray(payload.rows) ? payload.rows : [];
      const existingSet = new Set(db.prospects.map((p) => p.email.toLowerCase()));
      let added = 0;
      const now = new Date().toISOString();

      for (const row of rows) {
        const email = String(row.email || "").trim().toLowerCase();
        if (!email || !email.includes("@") || existingSet.has(email)) continue;
        existingSet.add(email);
        db.prospects.push({
          id: generateId("pr"),
          email,
          firstName: (row.firstName || "").trim(),
          businessName: (row.businessName || "").trim(),
          businessType: (row.businessType || "").trim(),
          problem: (row.problem || "").trim(),
          city: (row.city || "").trim(),
          website: (row.website || "").trim(),
          stage: 0,
          status: "active",
          createdAt: now,
        });
        added++;
      }

      await writeAdminDb(db);
      return NextResponse.json({
        success: true,
        added,
        total: db.prospects.length,
      });
    }

    if (payload.action === "update_prospect") {
      const target = db.prospects.find((p) => p.id === payload.id);
      if (!target) {
        return NextResponse.json(
          { error: "Prospect not found." },
          { status: 404 }
        );
      }
      if (payload.status) {
        target.status = payload.status;
        if (payload.status === "replied" || payload.status === "unsubscribed") {
          target.nextFollowUpAt = undefined;
        }
      }
      if (typeof payload.stage === "number") {
        target.stage = payload.stage;
        if (payload.stage === 0) {
          target.nextFollowUpAt = undefined;
          target.status = "active";
        }
      }
      if (typeof payload.firstName === "string")
        target.firstName = payload.firstName.trim();
      if (typeof payload.businessName === "string")
        target.businessName = payload.businessName.trim();
      if (typeof payload.businessType === "string")
        target.businessType = payload.businessType.trim();
      if (typeof payload.problem === "string")
        target.problem = payload.problem.trim();
      if (typeof payload.city === "string") target.city = payload.city.trim();

      await writeAdminDb(db);
      return NextResponse.json({ success: true, prospect: target });
    }

    if (payload.action === "delete_prospect") {
      db.prospects = db.prospects.filter((p) => p.id !== payload.id);
      await writeAdminDb(db);
      return NextResponse.json({ success: true });
    }

    if (payload.action === "save_templates") {
      if (!Array.isArray(payload.templates) || payload.templates.length !== 4) {
        return NextResponse.json(
          { error: "All 4 sequence templates are required." },
          { status: 400 }
        );
      }
      db.templates = payload.templates.map((t, i) => ({
        step: (i + 1) as 1 | 2 | 3 | 4,
        label: String(t.label || `Step ${i + 1}`),
        delayDays: i === 0 ? 0 : Math.max(1, Number(t.delayDays) || 3),
        subject: String(t.subject || ""),
        headline: String(t.headline || ""),
        body: String(t.body || ""),
        ctaText: String(t.ctaText || "Schedule a Call"),
        ctaUrl: String(t.ctaUrl || "https://katelladigital.com/contact"),
      }));
      await writeAdminDb(db);
      return NextResponse.json({ success: true, templates: db.templates });
    }

    if (payload.action === "reset_templates") {
      db.templates = getDefaultTemplates();
      await writeAdminDb(db);
      return NextResponse.json({ success: true, templates: db.templates });
    }

    if (payload.action === "save_settings") {
      const s = payload.settings || {};
      db.settings = {
        ...db.settings,
        dailyLimit:
          typeof s.dailyLimit === "number"
            ? Math.min(Math.max(1, Math.round(s.dailyLimit)), 2000)
            : db.settings.dailyLimit,
        sendProvider:
          s.sendProvider === "smtp" || s.sendProvider === "brevo"
            ? s.sendProvider
            : db.settings.sendProvider,
        senderName:
          typeof s.senderName === "string" && s.senderName.trim()
            ? s.senderName.trim()
            : db.settings.senderName,
        senderEmail:
          typeof s.senderEmail === "string" && s.senderEmail.trim()
            ? s.senderEmail.trim()
            : db.settings.senderEmail,
        replyToEmail:
          typeof s.replyToEmail === "string" && s.replyToEmail.trim()
            ? s.replyToEmail.trim()
            : db.settings.replyToEmail,
        autoFollowUpEnabled:
          typeof s.autoFollowUpEnabled === "boolean"
            ? s.autoFollowUpEnabled
            : db.settings.autoFollowUpEnabled,
      };
      await writeAdminDb(db);
      return NextResponse.json({ success: true, settings: db.settings });
    }

    if (payload.action === "preview_email" || payload.action === "send_test") {
      const template =
        payload.templateOverride ||
        db.templates.find((t) => t.step === payload.step) ||
        db.templates[0];

      const sampleProspect =
        (payload.prospectId &&
          db.prospects.find((p) => p.id === payload.prospectId)) ||
        db.prospects[0] || {
          email: "owner@apexdentaloc.com",
          firstName: "David",
          businessName: "Apex Dental Group",
          businessType: "Cosmetic Dental Clinic",
          problem:
            "ranking on page 2 of Google Maps and missing an instant booking funnel on mobile",
          city: "Anaheim, CA",
          website: "apexdentaloc.com",
        };

      const rendered = renderPersonalizedEmail(
        template,
        sampleProspect,
        db.settings
      );

      if (payload.action === "preview_email") {
        return NextResponse.json({
          success: true,
          subject: rendered.subject,
          html: rendered.html,
          text: rendered.text,
          sampleBusiness: sampleProspect.businessName,
        });
      }

      const toEmail = String(payload.toEmail || "").trim();
      if (!toEmail || !toEmail.includes("@")) {
        return NextResponse.json(
          { error: "Enter a valid destination email for the test send." },
          { status: 400 }
        );
      }

      const sendRes = await sendOutreachEmail({
        to: toEmail,
        toName: "Test Preview",
        subject: `[TEST] ${rendered.subject}`,
        html: rendered.html,
        text: rendered.text,
        settings: db.settings,
      });

      return NextResponse.json({
        success: sendRes.ok,
        provider: sendRes.provider,
        error: sendRes.error,
      });
    }

    return NextResponse.json({ error: "Unknown action." }, { status: 400 });
  } catch (err) {
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Outreach request failed.",
      },
      { status: 500 }
    );
  }
}
