import { NextRequest, NextResponse } from "next/server";
import { recordContactLead } from "@/lib/admin-store";
import { sendTransactionalEmail } from "@/lib/email-engine";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      service,
      details,
      mathAnswer,
      mathExpected,
      turnstileToken,
    } = body;

    // 1. Verify math captcha
    if (parseInt(mathAnswer, 10) !== mathExpected) {
      return NextResponse.json(
        { success: false, error: "Math verification failed." },
        { status: 400 }
      );
    }

    // 2. Verify Cloudflare Turnstile (if configured)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && turnstileToken) {
      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: turnstileToken,
          }),
        }
      );
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return NextResponse.json(
          { success: false, error: "Security verification failed." },
          { status: 400 }
        );
      }
    }

    // 3. Validate required fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !service?.trim() ||
      !details?.trim()
    ) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = String(phone).trim();
    const cleanService = String(service).trim();
    const cleanDetails = String(details).trim();

    // 4. Persist lead to /admin Leads Inbox
    try {
      await recordContactLead({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        service: cleanService,
        details: cleanDetails,
        source: "katelladigital.com",
      });
    } catch (storageErr) {
      console.error("Lead storage warning:", storageErr);
    }

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(cleanPhone);
    const safeService = escapeHtml(cleanService);
    const safeDetails = escapeHtml(cleanDetails);

    const companyEmail =
      process.env.CONTACT_EMAIL ||
      process.env.SENDER_EMAIL ||
      "info@katelladigital.com";

    // --- EMAIL 1: Company Lead Notification (to info@katelladigital.com) ---
    const leadHtml = `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:24px 12px;background:#f6eef0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #ead8dd;">
    <div style="background:linear-gradient(120deg,#060000 0%,#2F000A 38%,#9A0E28 74%,#C71F42 100%);padding:24px 28px;">
      <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#FF8CA4;font-weight:700;">KATELLA DIGITAL · NEW WEBSITE LEAD</p>
      <h2 style="margin:6px 0 0 0;color:#ffffff;font-size:21px;font-weight:800;">${safeName} — ${safeService}</h2>
    </div>
    <div style="padding:26px 28px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:9px 0;font-weight:700;color:#6f4d56;width:110px;border-bottom:1px solid #f2e5e8;">Name</td><td style="padding:9px 0;color:#16070b;border-bottom:1px solid #f2e5e8;">${safeName}</td></tr>
        <tr><td style="padding:9px 0;font-weight:700;color:#6f4d56;border-bottom:1px solid #f2e5e8;">Email</td><td style="padding:9px 0;color:#16070b;border-bottom:1px solid #f2e5e8;"><a href="mailto:${safeEmail}" style="color:#C71F42;text-decoration:none;font-weight:600;">${safeEmail}</a></td></tr>
        <tr><td style="padding:9px 0;font-weight:700;color:#6f4d56;border-bottom:1px solid #f2e5e8;">Phone</td><td style="padding:9px 0;color:#16070b;border-bottom:1px solid #f2e5e8;">${safePhone}</td></tr>
        <tr><td style="padding:9px 0;font-weight:700;color:#6f4d56;border-bottom:1px solid #f2e5e8;">Service</td><td style="padding:9px 0;color:#C71F42;font-weight:700;border-bottom:1px solid #f2e5e8;">${safeService}</td></tr>
      </table>
      <p style="margin:20px 0 8px 0;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#6f4d56;">Project Goals &amp; Details</p>
      <div style="background:#fdf4f6;border-left:3px solid #E81C49;padding:16px 18px;border-radius:0 10px 10px 0;white-space:pre-wrap;color:#1f0a0f;font-size:14px;line-height:1.65;">${safeDetails}</div>
      <p style="margin:20px 0 0 0;color:#7e5d66;font-size:12px;">
        Submitted: ${new Date().toISOString()} &middot; Hit Reply to email ${safeName} directly, or open <strong>/admin</strong> to manage this lead.
      </p>
    </div>
  </div>
</body>
</html>`;

    // --- EMAIL 2: Branded Auto-Reply Confirmation (to visitor) ---
    const autoReplyHtml = `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:24px 12px;background:#f6eef0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #ead8dd;">
    <div style="background:linear-gradient(120deg,#060000 0%,#2F000A 38%,#9A0E28 74%,#C71F42 100%);padding:28px 32px;text-align:left;">
      <p style="margin:0;font-size:11px;letter-spacing:2.4px;text-transform:uppercase;color:#FF8CA4;font-weight:700;">KATELLA DIGITAL</p>
      <h1 style="margin:8px 0 0 0;color:#ffffff;font-size:22px;font-weight:800;">We received your message, ${safeName}.</h1>
    </div>
    <div style="padding:28px 32px;color:#241116;font-size:15px;line-height:1.7;">
      <p style="margin:0 0 14px 0;">Thank you for reaching out to <strong>Katella Digital</strong>! Our senior strategy team has received your inquiry about <strong style="color:#C71F42;">${safeService}</strong> and is reviewing your goals.</p>
      <p style="margin:0 0 10px 0;font-weight:700;">What happens next:</p>
      <ul style="margin:0 0 18px 0;padding-left:20px;line-height:1.85;color:#3d2027;">
        <li>A senior strategist reviews your project within 1 business day</li>
        <li>We follow up personally to schedule a focused discovery call</li>
        <li>You receive a clear, tailored growth roadmap &amp; timeline</li>
      </ul>
      <p style="margin:0 0 18px 0;">Need to add anything? Just reply directly to this email.</p>
      <div style="margin-top:22px;padding-top:16px;border-top:1px solid #f0e2e6;font-size:12px;color:#6f4d56;">
        <strong style="color:#16070b;">Katella Digital</strong> · Anaheim, Orange County, CA<br />
        Email: ${escapeHtml(companyEmail)} &middot; Web: katelladigital.com
      </div>
    </div>
  </div>
</body>
</html>`;

    // 5. Send via Resend API / Brevo API (automatic failover between both)
    const leadSend = await sendTransactionalEmail({
      to: companyEmail,
      toName: "Katella Digital Leads",
      subject: `New Lead: ${cleanName} — ${cleanService}`,
      html: leadHtml,
      replyToEmail: cleanEmail,
    });

    if (!leadSend.ok) {
      console.error("Lead notification email error:", leadSend.error);
      return NextResponse.json(
        {
          success: false,
          error: `Failed to send. Please email us directly at ${companyEmail}`,
        },
        { status: 500 }
      );
    }

    const autoReplySend = await sendTransactionalEmail({
      to: cleanEmail,
      toName: cleanName,
      subject: `We received your inquiry, ${cleanName} — Katella Digital`,
      html: autoReplyHtml,
      replyToEmail: companyEmail,
    });

    if (!autoReplySend.ok) {
      console.error("Auto-reply email warning:", autoReplySend.error);
    }

    return NextResponse.json({
      success: true,
      provider: leadSend.provider,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
