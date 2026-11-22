import { NextRequest, NextResponse } from "next/server";
import { verifyUnsubscribeToken } from "@/lib/admin-auth";
import { readAdminDb, writeAdminDb } from "@/lib/admin-store";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = (searchParams.get("email") || "").trim().toLowerCase();
  const token = (searchParams.get("token") || "").trim();

  if (!email || !token || !verifyUnsubscribeToken(email, token)) {
    return new NextResponse(
      renderPage(
        "Invalid unsubscribe link",
        "This unsubscribe link appears invalid or expired. Reply directly to our email and we will remove your address immediately."
      ),
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  try {
    const db = await readAdminDb();
    let updated = false;
    for (const p of db.prospects) {
      if (p.email.toLowerCase() === email) {
        p.status = "unsubscribed";
        p.nextFollowUpAt = undefined;
        updated = true;
      }
    }
    if (updated) {
      await writeAdminDb(db);
    }
  } catch (err) {
    console.error("Unsubscribe update error:", err);
  }

  return new NextResponse(
    renderPage(
      "You've been unsubscribed",
      `${email} has been removed from Katella Digital follow-up emails. You will not receive any further outreach from this sequence.`
    ),
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

function renderPage(title: string, message: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>${title} — Katella Digital</title>
</head>
<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:linear-gradient(120deg,#060000 0%,#2F000A 35%,#9A0E28 70%,#C71F42 100%);color:#ffffff;">
  <div style="max-width:480px;width:100%;background:rgba(12,2,5,0.84);border:1px solid rgba(255,255,255,0.16);border-radius:22px;padding:36px 32px;text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.5);">
    <p style="margin:0 0 12px 0;font-size:11px;letter-spacing:2.4px;text-transform:uppercase;color:#FF8CA4;font-weight:700;">KATELLA DIGITAL</p>
    <h1 style="margin:0 0 12px 0;font-size:24px;font-weight:800;">${title}</h1>
    <p style="margin:0 0 24px 0;font-size:14px;line-height:1.65;color:rgba(255,255,255,0.75);">${message}</p>
    <a href="/" style="display:inline-block;padding:11px 22px;border-radius:999px;background:#ffffff;color:#060000;font-size:13px;font-weight:700;text-decoration:none;">Return to Katella Digital</a>
  </div>
</body>
</html>`;
}
