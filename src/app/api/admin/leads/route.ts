import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  readAdminDb,
  writeAdminDb,
  type LeadStatus,
} from "@/lib/admin-store";

const VALID_STATUSES: LeadStatus[] = [
  "new",
  "contacted",
  "qualified",
  "won",
  "archived",
];

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const db = await readAdminDb();
  return NextResponse.json({ leads: db.leads });
}

export async function PATCH(req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = (await req.json()) as {
      id?: string;
      status?: LeadStatus;
      notes?: string;
    };
    if (!body.id) {
      return NextResponse.json({ error: "Lead ID required" }, { status: 400 });
    }

    const db = await readAdminDb();
    const lead = db.leads.find((l) => l.id === body.id);
    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    if (body.status && VALID_STATUSES.includes(body.status)) {
      lead.status = body.status;
    }
    if (typeof body.notes === "string") {
      lead.notes = body.notes;
    }
    lead.updatedAt = new Date().toISOString();

    await writeAdminDb(db);
    return NextResponse.json({ success: true, lead });
  } catch {
    return NextResponse.json({ error: "Update failed" }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Lead ID required" }, { status: 400 });
    }

    const db = await readAdminDb();
    const before = db.leads.length;
    db.leads = db.leads.filter((l) => l.id !== id);
    if (db.leads.length === before) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    await writeAdminDb(db);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Delete failed" }, { status: 400 });
  }
}
