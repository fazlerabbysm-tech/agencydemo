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

    // 4. Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailContent = `
New Contact Form Submission — Katella Digital

Name: ${name}
Phone: ${phone}
Service: ${service}
Details: ${details}

---
Submitted: ${new Date().toISOString()}
    `.trim();

    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Katella Digital <noreply@katella.digital>",
          to: ["info@katella.digital"],
          subject: `New Lead: ${name} — ${service}`,
          text: emailContent,
        }),
      });

      if (!resendRes.ok) {
        console.error("Resend error:", await resendRes.text());
      }
    } else {
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log(emailContent);
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
