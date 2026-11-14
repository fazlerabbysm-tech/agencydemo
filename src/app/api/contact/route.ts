import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, details, mathAnswer, mathExpected, turnstileToken } = body;

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
    if (!name?.trim() || !phone?.trim() || !service?.trim() || !details?.trim()) {
      return NextResponse.json({ success: false, error: "All fields are required." }, { status: 400 });
    }

    // 4. Send email via Brevo (SendinBlue) API
    const brevoApiKey = process.env.BREVO_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "info@katella.digital";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #C71F42; border-bottom: 2px solid #C71F42; padding-bottom: 10px;">
          New Contact Form Submission — Katella Digital
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
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

    const emailText = `
New Contact Form Submission — Katella Digital

Name: ${name}
Phone: ${phone}
Service: ${service}

Project Details:
${details}

---
Submitted: ${new Date().toISOString()}
From: katelladigital.com
    `.trim();

    if (brevoApiKey) {
      const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          sender: {
            name: "Katella Digital",
            email: "info@katella.digital",
          },
          to: [
            {
              email: contactEmail,
              name: "Katella Digital",
            },
          ],
          replyTo: {
            email: "info@katella.digital",
            name: "Katella Digital",
          },
          subject: `New Lead: ${name} — ${service}`,
          htmlContent: emailHtml,
          textContent: emailText,
        }),
      });

      if (!brevoRes.ok) {
        const errorText = await brevoRes.text();
        console.error("Brevo error:", errorText);
        return NextResponse.json(
          { success: false, error: "Failed to send email. Please try again or contact us directly." },
          { status: 500 }
        );
      }
    } else {
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log(emailText);
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
