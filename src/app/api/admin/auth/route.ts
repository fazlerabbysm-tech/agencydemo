import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  createAdminSessionToken,
  getSessionCookieOptions,
  isAdminAuthenticated,
  isDefaultPasswordActive,
  verifyAdminPassword,
} from "@/lib/admin-auth";
import { getIntegrationStatus } from "@/lib/admin-store";

export async function GET() {
  const authenticated = await isAdminAuthenticated();
  return NextResponse.json({
    authenticated,
    defaultPasswordActive: isDefaultPasswordActive(),
    integrations: authenticated ? getIntegrationStatus() : undefined,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { password?: string };
    const password = String(body.password || "");
    if (!password || !verifyAdminPassword(password)) {
      return NextResponse.json(
        { success: false, error: "Invalid admin password." },
        { status: 401 }
      );
    }

    const token = createAdminSessionToken();
    const res = NextResponse.json({
      success: true,
      integrations: getIntegrationStatus(),
    });
    res.cookies.set(ADMIN_COOKIE_NAME, token, getSessionCookieOptions());
    return res;
  } catch {
    return NextResponse.json(
      { success: false, error: "Login request failed." },
      { status: 400 }
    );
  }
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_COOKIE_NAME, "", {
    ...getSessionCookieOptions(),
    maxAge: 0,
  });
  return res;
}
