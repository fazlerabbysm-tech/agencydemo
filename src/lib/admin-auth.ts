import crypto from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "kd_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "katella2026";
}

function getSigningSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    crypto
      .createHash("sha256")
      .update(`katella-digital-session:${getAdminPassword()}`)
      .digest("hex")
  );
}

export function isDefaultPasswordActive(): boolean {
  return !process.env.ADMIN_PASSWORD;
}

export function verifyAdminPassword(candidate: string): boolean {
  const expected = getAdminPassword();
  const a = crypto.createHash("sha256").update(candidate).digest();
  const b = crypto.createHash("sha256").update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

export function createAdminSessionToken(): string {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS;
  const payload = `admin.${expiresAt}`;
  const sig = crypto
    .createHmac("sha256", getSigningSecret())
    .update(payload)
    .digest("hex");
  return `${payload}.${sig}`;
}

export function verifyAdminSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [role, expStr, providedSig] = parts;
  if (role !== "admin") return false;

  const expiresAt = Number(expStr);
  if (!Number.isFinite(expiresAt) || expiresAt < Math.floor(Date.now() / 1000)) {
    return false;
  }

  const payload = `${role}.${expStr}`;
  const expectedSig = crypto
    .createHmac("sha256", getSigningSecret())
    .update(payload)
    .digest("hex");

  const a = Buffer.from(providedSig, "utf8");
  const b = Buffer.from(expectedSig, "utf8");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return verifyAdminSessionToken(token);
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  };
}

export function createUnsubscribeToken(email: string): string {
  const normalized = email.trim().toLowerCase();
  return crypto
    .createHmac("sha256", getSigningSecret())
    .update(`unsub:${normalized}`)
    .digest("hex")
    .slice(0, 32);
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  const expected = createUnsubscribeToken(email);
  const a = Buffer.from(token, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
