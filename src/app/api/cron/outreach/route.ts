import { NextRequest, NextResponse } from "next/server";
import { runOutreachBatch } from "@/lib/outreach-runner";

export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers.get("authorization");

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Run safe automated follow-up + outreach batch within Vercel timeout window
  const result = await runOutreachBatch({
    mode: "auto",
    batchSize: 25,
  });

  return NextResponse.json({
    ok: true,
    ranAt: new Date().toISOString(),
    ...result,
  });
}
