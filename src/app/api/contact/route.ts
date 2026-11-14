import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, details, mathAnswer, mathExpected, turnstileToken } = body;

    // 1. Verify math captcha
    if (parseInt(mathAnswer, 10) !== mathExpected) {
      return NextResponse.json({ success: false, error: "Math verification failed." }, { status: 400 });
    }

    // 2. Verify Cloudflare Turnstile
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && turnstileToken) {
      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
        }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return NextResponse.json({ success: false, error: "Security verification failed." }, { status: 400 });
      }
    }

    // 3. Validate required fields
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !service?.trim() || !details?.trim()) {
      return NextResponse.json({ success: false, error: "All fields are required." }, { status: 400 });
    }

    // 4. Send emails via Brevo API
    const brevoApiKey = process.env.BREVO_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "info@katella.digital";

    // --- EMAIL 1: To us (lead notification) ---
    const leadHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #C71F42; border-bottom: 2px solid #C71F42; padding-bottom: 10px;">
          New Contact Form Submission — Katella Digital
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${email}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td style="padding: 8px 0;">${service}</td></tr>
        </table>
        <h3 style="color: #333; margin-top: 20px;">Project Details:</h3>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${details}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #888; font-size: 12px;">
          Submitted: ${new Date().toISOString()}<br>
          From: katelladigital.com contact form
        </p>
      </div>
    `;

    // --- EMAIL 2: Auto-reply to user (confirmation) ---
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #060000;">
        <div style="text-align: center; padding: 30px 0;">
          <h1 style="color: #C71F42; font-size: 28px; margin: 0; letter-spacing: -1px;">KATELLA DIGITAL</h1>
          <p style="color: #888; font-size: 12px; letter-spacing: 4px; text-transform: uppercase; margin-top: 5px;">Full-Service Marketing Agency</p>
        </div>
        <div style="background: #1a0a0e; border: 1px solid #3a1518; border-radius: 12px; padding: 30px;">
          <h2 style="color: #fff; font-size: 22px; margin: 0 0 15px 0;">Hi ${name},</h2>
          <p style="color: #aaa; font-size: 15px; line-height: 1.7;">
            Thank you for reaching out to Katella Digital! We've received your inquiry about
            <strong style="color: #C71F42;">${service}</strong> and our team is already reviewing your project details.
          </p>
          <p style="color: #aaa; font-size: 15px; line-height: 1.7; margin-top: 15px;">
            Here's what happens next:
          </p>
          <ul style="color: #aaa; font-size: 15px; line-height: 1.8; padding-left: 20px;">
            <li>We'll review your project within 24 hours</li>
            <li>A senior team member will reach out to schedule a discovery call</li>
            <li>We'll prepare a tailored proposal based on your goals</li>
          </ul>
          <p style="color: #aaa; font-size: 15px; line-height: 1.7; margin-top: 15px;">
            Need to talk sooner? Call us or reply to this email and we'll prioritize your inquiry.
          </p>
          <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #3a1518;">
            <p style="color: #666; font-size: 13px; margin: 5px 0;">📞 ${phone}</p>
            <p style="color: #666; font-size: 13px; margin: 5px 0;">✉️ info@katella.digital</p>
            <p style="color: #666; font-size: 13px; margin: 5px 0;">📍 Anaheim, Orange County, CA</p>
          </div>
        </div>
        <div style="text-align: center; padding: 20px 0;">
          <p style="color: #555; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">
            Katella Digital — Driving Growth, Engineered.
          </p>
        </div>
      </div>
    `;

    if (brevoApiKey) {
      // Send Email 1: Lead notification to us
      // Use katelladigital@gmail.com as sender (active in Brevo, no brevosend.com wrapper)
      // To: katelladigital@gmail.com (direct Gmail delivery)
      // BCC: info@katella.digital for backup
      const leadRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          sender: { name: "Katella Digital", email: "katelladigital@gmail.com" },
          to: [{ email: "katelladigital@gmail.com", name: "Katella Digital" }],
          bcc: [{ email: contactEmail, name: "Katella Digital" }],
          replyTo: { email: "info@katella.digital", name: "Katella Digital" },
          subject: `New Lead: ${name} — ${service}`,
          htmlContent: leadHtml,
        }),
      });

      if (!leadRes.ok) {
        const errorText = await leadRes.text();
        console.error("Brevo lead email error:", errorText);
        return NextResponse.json(
          { success: false, error: "Failed to send. Please email us directly at info@katella.digital" },
          { status: 500 }
        );
      }

      // Send Email 2: Auto-reply to user
      // Use katelladigital@gmail.com as sender (Gmail-verified, won't go to spam)
      // Reply-to: info@katella.digital (user replies to our official address)
      const autoReplyRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          sender: { name: "Katella Digital", email: "katelladigital@gmail.com" },
          to: [{ email: email, name: name }],
          replyTo: { email: "info@katella.digital", name: "Katella Digital" },
          subject: `We received your message, ${name}!`,
          htmlContent: autoReplyHtml,
        }),
      });

      if (!autoReplyRes.ok) {
        const errorText = await autoReplyRes.text();
        console.error("Brevo auto-reply error:", errorText);
        // Don't fail the whole request — lead email was sent successfully
      }
    } else {
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Service: ${service}`);
      console.log(`Details: ${details}`);
      console.log("==============================");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
// Contact form env vars updated
