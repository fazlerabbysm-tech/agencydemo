import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  generateId,
  readAdminDb,
  writeAdminDb,
} from "@/lib/admin-store";
import {
  fetchBrevoListContacts,
  fetchBrevoLists,
} from "@/lib/email-engine";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await fetchBrevoLists();
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await req.json()) as {
      listId?: number;
      listName?: string;
    };
    const listId = Number(body.listId);
    if (!Number.isFinite(listId) || listId <= 0) {
      return NextResponse.json(
        { error: "Valid Brevo listId is required." },
        { status: 400 }
      );
    }

    const synced = await fetchBrevoListContacts(listId);
    if (!synced.ok) {
      return NextResponse.json(
        { error: synced.error || "Failed to fetch Brevo contacts." },
        { status: 502 }
      );
    }

    const db = await readAdminDb();
    const existingByEmail = new Map(
      db.prospects.map((p) => [p.email.toLowerCase(), p])
    );

    let added = 0;
    let updated = 0;
    const now = new Date().toISOString();

    for (const c of synced.contacts) {
      const existing = existingByEmail.get(c.email);
      if (existing) {
        // Refresh missing personalization fields without resetting follow-up stage
        let changed = false;
        if (!existing.firstName && c.firstName) {
          existing.firstName = c.firstName;
          changed = true;
        }
        if (!existing.businessName && c.businessName) {
          existing.businessName = c.businessName;
          changed = true;
        }
        if (!existing.businessType && c.businessType) {
          existing.businessType = c.businessType;
          changed = true;
        }
        if (!existing.problem && c.problem) {
          existing.problem = c.problem;
          changed = true;
        }
        if (!existing.city && c.city) {
          existing.city = c.city;
          changed = true;
        }
        if (!existing.website && c.website) {
          existing.website = c.website;
          changed = true;
        }
        if (changed) updated++;
      } else {
        db.prospects.push({
          id: generateId("pr"),
          email: c.email,
          firstName: c.firstName,
          businessName: c.businessName,
          businessType: c.businessType,
          problem: c.problem,
          city: c.city,
          website: c.website,
          brevoListId: listId,
          brevoListName: body.listName || `Brevo List #${listId}`,
          stage: 0,
          status: "active",
          createdAt: now,
        });
        added++;
      }
    }

    db.settings.activeBrevoListId = listId;
    db.settings.activeBrevoListName = body.listName || `Brevo List #${listId}`;
    await writeAdminDb(db);

    return NextResponse.json({
      success: true,
      fetched: synced.contacts.length,
      added,
      updated,
      totalProspects: db.prospects.length,
    });
  } catch (err) {
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Brevo synchronization failed.",
      },
      { status: 500 }
    );
  }
}
