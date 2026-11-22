import { siteConfig } from "@/lib/site-config";
import { createUnsubscribeToken } from "@/lib/admin-auth";
import type {
  DailyProviderUsage,
  EmailTemplateStep,
  OutreachProspect,
  OutreachSettings,
} from "@/lib/admin-store";

export interface BrevoListSummary {
  id: number;
  name: string;
  totalSubscribers: number;
}

export interface BrevoMappedContact {
  email: string;
  firstName: string;
  businessName: string;
  businessType: string;
  problem: string;
  city: string;
  website: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function interpolateTokens(
  input: string,
  prospect: Pick<
    OutreachProspect,
    "firstName" | "businessName" | "businessType" | "problem" | "city" | "website"
  >
): string {
  const firstName = prospect.firstName?.trim() || "there";
  const businessName = prospect.businessName?.trim() || "your business";
  const businessType = prospect.businessType?.trim() || "local service";
  const problem =
    prospect.problem?.trim() ||
    "turning search and website traffic into predictable qualified leads";
  const city = prospect.city?.trim() || "your local market";
  const website = prospect.website?.trim() || "your website";

  return input
    .replace(/\{\{\s*first_name\s*\}\}/gi, firstName)
    .replace(/\{\{\s*business_name\s*\}\}/gi, businessName)
    .replace(/\{\{\s*business_type\s*\}\}/gi, businessType)
    .replace(/\{\{\s*problem\s*\}\}/gi, problem)
    .replace(/\{\{\s*city\s*\}\}/gi, city)
    .replace(/\{\{\s*website\s*\}\}/gi, website);
}

export function renderPersonalizedEmail(
  template: EmailTemplateStep,
  prospect: Pick<
    OutreachProspect,
    "email" | "firstName" | "businessName" | "businessType" | "problem" | "city" | "website"
  >,
  settings: OutreachSettings
): { subject: string; html: string; text: string } {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url
  ).replace(/\/$/, "");
  const unsubToken = createUnsubscribeToken(prospect.email);
  const unsubscribeUrl = `${baseUrl}/api/unsubscribe?email=${encodeURIComponent(
    prospect.email
  )}&token=${encodeURIComponent(unsubToken)}`;

  const subject = interpolateTokens(template.subject, prospect);
  const headline = interpolateTokens(template.headline, prospect);
  const plainBody = interpolateTokens(template.body, prospect);
  const ctaText = interpolateTokens(template.ctaText, prospect);
  const ctaUrl = template.ctaUrl || `${baseUrl}/contact`;

  const paragraphsHtml = plainBody
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      const escaped = escapeHtml(trimmed).replace(/\n/g, "<br />");
      if (trimmed.startsWith("→") || trimmed.startsWith("- ")) {
        return `<div style="margin:18px 0;padding:16px 18px;border-left:3px solid #E81C49;background:#fdf4f6;border-radius:0 10px 10px 0;color:#2b0d14;font-size:15px;line-height:1.65;font-weight:600;">${escaped}</div>`;
      }
      return `<p style="margin:0 0 16px 0;color:#241116;font-size:15px;line-height:1.72;">${escaped}</p>`;
    })
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f6eef0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f6eef0;padding:28px 14px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #ead8dd;box-shadow:0 16px 42px rgba(47,0,10,0.08);">
          <!-- Katella Digital Crimson Satin Header -->
          <tr>
            <td style="background:linear-gradient(120deg,#060000 0%,#2F000A 38%,#9A0E28 74%,#C71F42 100%);padding:26px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display:inline-block;font-size:11px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:#FF8CA4;">
                      KATELLA DIGITAL
                    </span>
                    <h1 style="margin:8px 0 0 0;font-size:21px;line-height:1.3;font-weight:800;color:#ffffff;letter-spacing:-0.3px;">
                      ${escapeHtml(headline)}
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Personalized Content -->
          <tr>
            <td style="padding:30px 32px 24px 32px;">
              ${paragraphsHtml}

              <!-- Branded CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin:26px 0 22px 0;">
                <tr>
                  <td style="border-radius:999px;background:linear-gradient(135deg,#FF3363 0%,#E81C49 50%,#9A0E28 100%);">
                    <a href="${escapeHtml(ctaUrl)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:13px 26px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.2px;">
                      ${escapeHtml(ctaText)} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Personal Strategist Signature -->
              <div style="margin-top:26px;padding-top:18px;border-top:1px solid #f0e2e6;">
                <p style="margin:0;font-size:14px;font-weight:700;color:#16070b;">
                  ${escapeHtml(settings.senderName)}
                </p>
                <p style="margin:3px 0 0 0;font-size:12px;color:#6f4d56;">
                  Growth Strategy · SEO &amp; AI Search (GEO) · Paid Media · Web Engineering
                </p>
                <p style="margin:4px 0 0 0;font-size:12px;color:#9A0E28;">
                  <a href="${escapeHtml(baseUrl)}" style="color:#9A0E28;text-decoration:none;font-weight:600;">katelladigital.com</a>
                  &nbsp;&middot;&nbsp; Anaheim, Orange County, CA
                </p>
              </div>
            </td>
          </tr>

          <!-- Compliance Footer -->
          <tr>
            <td style="background:#faf4f5;padding:16px 32px;border-top:1px solid #f0e2e6;">
              <p style="margin:0;font-size:11px;line-height:1.6;color:#7e5d66;">
                You received this personalized note regarding ${escapeHtml(
                  prospect.businessName || "your business"
                )}. Not interested?
                <a href="${escapeHtml(unsubscribeUrl)}" style="color:#9A0E28;text-decoration:underline;">Unsubscribe in one click</a>
                and we won&apos;t follow up again.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `${headline}\n\n${plainBody}\n\n${ctaText}: ${ctaUrl}\n\n— ${settings.senderName}\nKatella Digital | ${baseUrl}\nUnsubscribe: ${unsubscribeUrl}`;

  return { subject, html, text };
}

export async function sendViaBrevoApi(params: {
  to: string;
  toName?: string;
  fromName: string;
  fromEmail: string;
  replyToEmail: string;
  subject: string;
  html: string;
  text?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return { ok: false, error: "BREVO_API_KEY not configured." };
  }
  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: params.fromName, email: params.fromEmail },
        to: [{ email: params.to, name: params.toName || undefined }],
        replyTo: { email: params.replyToEmail, name: params.fromName },
        subject: params.subject,
        htmlContent: params.html,
        ...(params.text ? { textContent: params.text } : {}),
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      return {
        ok: false,
        error: `Brevo API (${res.status}): ${errText.slice(0, 220)}`,
      };
    }
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Brevo API request failed",
    };
  }
}

export async function sendViaResendApi(params: {
  to: string;
  toName?: string;
  fromName: string;
  fromEmail: string;
  replyToEmail: string;
  subject: string;
  html: string;
  text?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, error: "RESEND_API_KEY not configured." };
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `${params.fromName} <${params.fromEmail}>`,
        to: [params.to],
        reply_to: params.replyToEmail,
        subject: params.subject,
        html: params.html,
        ...(params.text ? { text: params.text } : {}),
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      return {
        ok: false,
        error: `Resend API (${res.status}): ${errText.slice(0, 220)}`,
      };
    }
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Resend API request failed",
    };
  }
}

/**
 * Sends an email via Brevo API and/or Resend API with automatic daily quota split
 * (default: Brevo 300/day + Resend 100/day = 400/day) and automatic failover.
 */
export async function sendOutreachEmail(params: {
  to: string;
  toName?: string;
  subject: string;
  html: string;
  text?: string;
  settings: OutreachSettings;
  todayUsage?: DailyProviderUsage;
}): Promise<{
  ok: boolean;
  provider: "brevo" | "resend" | "dry-run";
  error?: string;
}> {
  const { to, toName, subject, html, text, settings, todayUsage } = params;

  const hasBrevo = Boolean(process.env.BREVO_API_KEY);
  const hasResend = Boolean(process.env.RESEND_API_KEY);

  if (!hasBrevo && !hasResend) {
    console.log(`[DRY-RUN OUTREACH] To: ${to} | Subject: ${subject}`);
    return { ok: true, provider: "dry-run" };
  }

  const fromName = settings.senderName || process.env.SENDER_NAME || "Katella Digital";
  const fromEmail =
    settings.senderEmail ||
    process.env.SENDER_EMAIL ||
    process.env.CONTACT_EMAIL ||
    "info@katelladigital.com";
  const replyToEmail =
    settings.replyToEmail || process.env.CONTACT_EMAIL || fromEmail;

  const brevoUsed = todayUsage?.brevo ?? 0;
  const resendUsed = todayUsage?.resend ?? 0;
  const brevoCap = Math.max(0, settings.brevoDailyLimit ?? 300);
  const resendCap = Math.max(0, settings.resendDailyLimit ?? 100);

  // Determine ordered provider candidates based on mode & remaining provider quota
  const order: Array<"brevo" | "resend"> = [];
  if (settings.sendProvider === "brevo") {
    if (hasBrevo) order.push("brevo");
    else if (hasResend) order.push("resend");
  } else if (settings.sendProvider === "resend") {
    if (hasResend) order.push("resend");
    else if (hasBrevo) order.push("brevo");
  } else {
    // Auto-Split mode: Brevo (up to 300/day) + Resend (up to 100/day) = 400/day
    const brevoHasRoom = hasBrevo && brevoUsed < brevoCap;
    const resendHasRoom = hasResend && resendUsed < resendCap;

    if (brevoHasRoom) order.push("brevo");
    if (resendHasRoom) order.push("resend");

    // If neither has quota left under split caps, still respect overall caller cap only if explicit
    if (order.length === 0) {
      return {
        ok: false,
        provider: hasBrevo ? "brevo" : "resend",
        error: "Both Brevo and Resend daily quotas are reached for today.",
      };
    }
  }

  let lastError = "Email delivery failed.";
  let lastProvider: "brevo" | "resend" = order[0];

  for (const provider of order) {
    lastProvider = provider;
    const res =
      provider === "brevo"
        ? await sendViaBrevoApi({
            to,
            toName,
            fromName,
            fromEmail,
            replyToEmail,
            subject,
            html,
            text,
          })
        : await sendViaResendApi({
            to,
            toName,
            fromName,
            fromEmail,
            replyToEmail,
            subject,
            html,
            text,
          });

    if (res.ok) {
      return { ok: true, provider };
    }
    lastError = res.error || lastError;
  }

  return { ok: false, provider: lastProvider, error: lastError };
}

/**
 * Shared transactional helper for website Contact Form notifications & visitor auto-replies.
 * Prefers Resend API (fast transactional delivery) and falls back automatically to Brevo API.
 */
export async function sendTransactionalEmail(params: {
  to: string;
  toName?: string;
  subject: string;
  html: string;
  replyToEmail?: string;
}): Promise<{
  ok: boolean;
  provider: "resend" | "brevo" | "dry-run";
  error?: string;
}> {
  const hasResend = Boolean(process.env.RESEND_API_KEY);
  const hasBrevo = Boolean(process.env.BREVO_API_KEY);

  const fromName = process.env.SENDER_NAME || "Katella Digital";
  const fromEmail =
    process.env.SENDER_EMAIL ||
    process.env.CONTACT_EMAIL ||
    "info@katelladigital.com";
  const replyToEmail =
    params.replyToEmail || process.env.CONTACT_EMAIL || fromEmail;

  if (!hasResend && !hasBrevo) {
    return { ok: true, provider: "dry-run" };
  }

  // Try Resend first, fail over to Brevo if needed
  if (hasResend) {
    const r = await sendViaResendApi({
      to: params.to,
      toName: params.toName,
      fromName,
      fromEmail,
      replyToEmail,
      subject: params.subject,
      html: params.html,
    });
    if (r.ok) return { ok: true, provider: "resend" };
    if (!hasBrevo) return { ok: false, provider: "resend", error: r.error };
  }

  const b = await sendViaBrevoApi({
    to: params.to,
    toName: params.toName,
    fromName,
    fromEmail,
    replyToEmail,
    subject: params.subject,
    html: params.html,
  });
  return { ok: b.ok, provider: "brevo", error: b.error };
}

export async function fetchBrevoLists(): Promise<{
  connected: boolean;
  lists: BrevoListSummary[];
  error?: string;
}> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return {
      connected: false,
      lists: [],
      error: "BREVO_API_KEY is not configured yet.",
    };
  }

  try {
    const res = await fetch(
      "https://api.brevo.com/v3/contacts/lists?limit=50&offset=0&sort=desc",
      {
        headers: {
          "api-key": apiKey,
          accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const text = await res.text();
      return {
        connected: false,
        lists: [],
        error: `Brevo error (${res.status}): ${text.slice(0, 200)}`,
      };
    }

    const data = (await res.json()) as {
      lists?: Array<{
        id: number;
        name: string;
        uniqueSubscribers?: number;
        totalSubscribers?: number;
      }>;
    };

    const lists: BrevoListSummary[] = (data.lists || []).map((item) => ({
      id: item.id,
      name: item.name,
      totalSubscribers: item.uniqueSubscribers ?? item.totalSubscribers ?? 0,
    }));

    return { connected: true, lists };
  } catch (err) {
    return {
      connected: false,
      lists: [],
      error: err instanceof Error ? err.message : "Failed to reach Brevo API",
    };
  }
}

function pickAttr(
  attrs: Record<string, unknown> | undefined,
  keys: string[]
): string {
  if (!attrs) return "";
  const lowerMap = new Map<string, unknown>();
  for (const [k, v] of Object.entries(attrs)) {
    lowerMap.set(k.toLowerCase(), v);
  }
  for (const key of keys) {
    const val = lowerMap.get(key.toLowerCase());
    if (typeof val === "string" && val.trim()) return val.trim();
  }
  return "";
}

export async function fetchBrevoListContacts(
  listId: number,
  maxContacts = 1500
): Promise<{ ok: boolean; contacts: BrevoMappedContact[]; error?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return { ok: false, contacts: [], error: "BREVO_API_KEY not configured." };
  }

  const collected: BrevoMappedContact[] = [];
  const pageSize = 500;
  let offset = 0;

  try {
    while (collected.length < maxContacts) {
      const res = await fetch(
        `https://api.brevo.com/v3/contacts/lists/${listId}/contacts?limit=${pageSize}&offset=${offset}`,
        {
          headers: {
            "api-key": apiKey,
            accept: "application/json",
          },
          cache: "no-store",
        }
      );

      if (!res.ok) {
        const text = await res.text();
        return {
          ok: false,
          contacts: [],
          error: `Brevo contacts error (${res.status}): ${text.slice(0, 200)}`,
        };
      }

      const data = (await res.json()) as {
        contacts?: Array<{
          email?: string;
          emailBlacklisted?: boolean;
          attributes?: Record<string, unknown>;
        }>;
      };

      const rows = data.contacts || [];
      for (const row of rows) {
        if (!row.email || row.emailBlacklisted) continue;
        const attrs = row.attributes;
        collected.push({
          email: row.email.trim().toLowerCase(),
          firstName: pickAttr(attrs, [
            "FIRSTNAME",
            "FNAME",
            "FIRST_NAME",
            "NAME",
            "CONTACT_NAME",
          ]),
          businessName: pickAttr(attrs, [
            "BUSINESS_NAME",
            "COMPANY",
            "COMPANY_NAME",
            "BUSINESS",
            "ORG",
          ]),
          businessType: pickAttr(attrs, [
            "BUSINESS_TYPE",
            "INDUSTRY",
            "NICHE",
            "CATEGORY",
            "VERTICAL",
          ]),
          problem: pickAttr(attrs, [
            "PROBLEM",
            "PAIN_POINT",
            "ISSUE",
            "WEBSITE_ISSUE",
            "CHALLENGE",
            "GAP",
            "NOTES",
          ]),
          city: pickAttr(attrs, ["CITY", "LOCATION", "STATE", "AREA"]),
          website: pickAttr(attrs, ["WEBSITE", "URL", "DOMAIN", "SITE"]),
        });
      }

      if (rows.length < pageSize) break;
      offset += pageSize;
    }

    return { ok: true, contacts: collected };
  } catch (err) {
    return {
      ok: false,
      contacts: [],
      error: err instanceof Error ? err.message : "Brevo sync failed",
    };
  }
}
