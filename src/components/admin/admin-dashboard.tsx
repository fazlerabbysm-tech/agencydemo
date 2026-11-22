"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock,
  CloudDownload,
  Download,
  Eye,
  Inbox,
  KeyRound,
  Loader2,
  LogOut,
  Mail,
  MessageCircle,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Trash2,
  Upload,
  Users,
  X,
} from "lucide-react";
import type {
  ContactLead,
  EmailTemplateStep,
  IntegrationStatus,
  LeadStatus,
  OutreachProspect,
  OutreachSendLog,
  OutreachSettings,
} from "@/lib/admin-store";

interface OutreachStats {
  todayKey: string;
  sentToday: number;
  brevoSentToday: number;
  resendSentToday: number;
  brevoDailyLimit: number;
  resendDailyLimit: number;
  dailyLimit: number;
  remainingToday: number;
  queuedNew: number;
  dueFollowUps: number;
  activeInSequence: number;
  completed: number;
  replied: number;
  unsubscribed: number;
  totalProspects: number;
}

interface BrevoListItem {
  id: number;
  name: string;
  totalSubscribers: number;
}

type AdminTab = "leads" | "outreach" | "templates" | "logs" | "settings";

const LEAD_STATUS_OPTIONS: { value: LeadStatus; label: string; badge: string }[] = [
  { value: "new", label: "New", badge: "bg-[#E81C49]/25 text-[#FF8CA4] border-[#E81C49]/50" },
  { value: "contacted", label: "Contacted", badge: "bg-sky-500/20 text-sky-300 border-sky-400/40" },
  { value: "qualified", label: "Qualified", badge: "bg-amber-500/20 text-amber-300 border-amber-400/40" },
  { value: "won", label: "Won", badge: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40" },
  { value: "archived", label: "Archived", badge: "bg-white/10 text-white/50 border-white/15" },
];

const MERGE_TOKENS = [
  { token: "{{first_name}}", label: "First Name" },
  { token: "{{business_name}}", label: "Business Name" },
  { token: "{{business_type}}", label: "Business Type" },
  { token: "{{problem}}", label: "Business Problem" },
  { token: "{{city}}", label: "City" },
  { token: "{{website}}", label: "Website" },
];

function formatDateShort(iso?: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function stageLabel(p: OutreachProspect): { text: string; cls: string } {
  if (p.status === "replied") {
    return { text: "Replied", cls: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40" };
  }
  if (p.status === "unsubscribed") {
    return { text: "Unsubscribed", cls: "bg-white/10 text-white/45 border-white/15" };
  }
  if (p.status === "completed" || p.stage >= 4) {
    return { text: "Completed (3/3 FU)", cls: "bg-purple-500/20 text-purple-300 border-purple-400/40" };
  }
  if (p.stage === 0) {
    return { text: "Queued", cls: "bg-white/10 text-white/75 border-white/20" };
  }
  if (p.stage === 1) {
    return { text: "Initial Sent", cls: "bg-sky-500/20 text-sky-300 border-sky-400/40" };
  }
  return {
    text: `Follow-up ${p.stage - 1}/3`,
    cls: "bg-[#E81C49]/25 text-[#FF8CA4] border-[#E81C49]/45",
  };
}

function parseCsvText(raw: string): Array<{
  email: string;
  firstName: string;
  businessName: string;
  businessType: string;
  problem: string;
  city: string;
}> {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length === 0) return [];

  const splitLine = (line: string): string[] => {
    const out: string[] = [];
    let cur = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if (ch === "," && !inQuotes) {
        out.push(cur.trim());
        cur = "";
      } else {
        cur += ch;
      }
    }
    out.push(cur.trim());
    return out;
  };

  const firstRow = splitLine(lines[0]).map((c) => c.toLowerCase());
  const hasHeader = firstRow.some((c) => c.includes("email"));
  const startIdx = hasHeader ? 1 : 0;

  const findCol = (names: string[], fallback: number): number => {
    if (!hasHeader) return fallback;
    const idx = firstRow.findIndex((h) => names.some((n) => h.includes(n)));
    return idx >= 0 ? idx : fallback;
  };

  const iEmail = findCol(["email"], 0);
  const iName = findCol(["first", "name"], 1);
  const iBiz = findCol(["business_name", "company", "business"], 2);
  const iType = findCol(["type", "industry", "niche", "category"], 3);
  const iProblem = findCol(["problem", "issue", "pain", "gap"], 4);
  const iCity = findCol(["city", "location"], 5);

  const rows: Array<{
    email: string;
    firstName: string;
    businessName: string;
    businessType: string;
    problem: string;
    city: string;
  }> = [];

  for (let i = startIdx; i < lines.length; i++) {
    const cols = splitLine(lines[i]);
    const email = (cols[iEmail] || "").trim().toLowerCase();
    if (!email || !email.includes("@")) continue;
    rows.push({
      email,
      firstName: cols[iName] || "",
      businessName: cols[iBiz] || "",
      businessType: cols[iType] || "",
      problem: cols[iProblem] || "",
      city: cols[iCity] || "",
    });
  }

  return rows;
}

export default function AdminDashboard() {
  const [authLoading, setAuthLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [defaultPasswordActive, setDefaultPasswordActive] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [activeTab, setActiveTab] = useState<AdminTab>("leads");
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(
    null
  );

  // Data state
  const [leads, setLeads] = useState<ContactLead[]>([]);
  const [prospects, setProspects] = useState<OutreachProspect[]>([]);
  const [templates, setTemplates] = useState<EmailTemplateStep[]>([]);
  const [settings, setSettings] = useState<OutreachSettings | null>(null);
  const [stats, setStats] = useState<OutreachStats | null>(null);
  const [logs, setLogs] = useState<OutreachSendLog[]>([]);
  const [integrations, setIntegrations] = useState<IntegrationStatus | null>(
    null
  );
  const [refreshing, setRefreshing] = useState(false);

  // Leads filters & notes
  const [leadQuery, setLeadQuery] = useState("");
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>("all");
  const [expandedLeadId, setExpandedLeadId] = useState<string | null>(null);
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({});

  // Brevo & Outreach state
  const [brevoLists, setBrevoLists] = useState<BrevoListItem[]>([]);
  const [brevoConnected, setBrevoConnected] = useState(false);
  const [brevoError, setBrevoError] = useState("");
  const [selectedBrevoListId, setSelectedBrevoListId] = useState<string>("");
  const [syncingBrevo, setSyncingBrevo] = useState(false);

  const [prospectQuery, setProspectQuery] = useState("");
  const [showAddProspect, setShowAddProspect] = useState(false);
  const [showCsvModal, setShowCsvModal] = useState(false);
  const [csvText, setCsvText] = useState("");
  const [newProspect, setNewProspect] = useState({
    email: "",
    firstName: "",
    businessName: "",
    businessType: "",
    problem: "",
    city: "",
  });

  // Campaign runner state
  const [batchMode, setBatchMode] = useState<"auto" | "followups" | "new">("auto");
  const [batchTargetCount, setBatchTargetCount] = useState<number>(50);
  const [sendingCampaign, setSendingCampaign] = useState(false);
  const [campaignProgress, setCampaignProgress] = useState({
    sent: 0,
    failed: 0,
    dryRun: 0,
  });
  const stopRunnerRef = useRef(false);

  // Template editor & preview state
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);
  const [previewHtml, setPreviewHtml] = useState("");
  const [previewSubject, setPreviewSubject] = useState("");
  const [previewProspectId, setPreviewProspectId] = useState("");
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [testEmailTo, setTestEmailTo] = useState("");
  const [sendingTest, setSendingTest] = useState(false);
  const [savingTemplates, setSavingTemplates] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);

  // Quick preview modal for a prospect row
  const [modalPreview, setModalPreview] = useState<{
    subject: string;
    html: string;
    title: string;
  } | null>(null);

  const showToast = useCallback((type: "ok" | "err", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => {
      setToast((prev) => (prev?.msg === msg ? null : prev));
    }, 4500);
  }, []);

  const loadAllData = useCallback(async () => {
    setRefreshing(true);
    try {
      const [leadsRes, outreachRes, brevoRes] = await Promise.all([
        fetch("/api/admin/leads", { cache: "no-store" }),
        fetch("/api/admin/outreach", { cache: "no-store" }),
        fetch("/api/admin/brevo", { cache: "no-store" }),
      ]);

      if (leadsRes.status === 401 || outreachRes.status === 401) {
        setAuthenticated(false);
        return;
      }

      if (leadsRes.ok) {
        const d = (await leadsRes.json()) as { leads: ContactLead[] };
        setLeads(d.leads || []);
      }

      if (outreachRes.ok) {
        const d = (await outreachRes.json()) as {
          stats: OutreachStats;
          prospects: OutreachProspect[];
          templates: EmailTemplateStep[];
          settings: OutreachSettings;
          logs: OutreachSendLog[];
          integrations: IntegrationStatus;
        };
        setStats(d.stats);
        setProspects(d.prospects || []);
        setTemplates(d.templates || []);
        setSettings(d.settings);
        setLogs(d.logs || []);
        setIntegrations(d.integrations);
      }

      if (brevoRes.ok) {
        const b = (await brevoRes.json()) as {
          connected: boolean;
          lists: BrevoListItem[];
          error?: string;
        };
        setBrevoConnected(b.connected);
        setBrevoLists(b.lists || []);
        setBrevoError(b.error || "");
        if (b.lists?.length && !selectedBrevoListId) {
          setSelectedBrevoListId(String(b.lists[0].id));
        }
      }
    } catch {
      showToast("err", "Failed to load dashboard data.");
    } finally {
      setRefreshing(false);
    }
  }, [selectedBrevoListId, showToast]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/admin/auth", { cache: "no-store" });
        const data = (await res.json()) as {
          authenticated: boolean;
          defaultPasswordActive?: boolean;
          integrations?: IntegrationStatus;
        };
        if (!mounted) return;
        setAuthenticated(Boolean(data.authenticated));
        setDefaultPasswordActive(Boolean(data.defaultPasswordActive));
        if (data.integrations) setIntegrations(data.integrations);
      } finally {
        if (mounted) setAuthLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (authenticated) {
      void loadAllData();
    }
  }, [authenticated, loadAllData]);

  const activeTemplate = useMemo(
    () => templates.find((t) => t.step === activeStep) || templates[0],
    [templates, activeStep]
  );

  const refreshTemplatePreview = useCallback(
    async (step: 1 | 2 | 3 | 4, override?: EmailTemplateStep, prospectId?: string) => {
      setLoadingPreview(true);
      try {
        const res = await fetch("/api/admin/outreach", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "preview_email",
            step,
            templateOverride: override,
            prospectId: prospectId || undefined,
          }),
        });
        if (res.ok) {
          const d = (await res.json()) as { subject: string; html: string };
          setPreviewSubject(d.subject);
          setPreviewHtml(d.html);
        }
      } finally {
        setLoadingPreview(false);
      }
    },
    []
  );

  useEffect(() => {
    if (authenticated && activeTab === "templates" && activeTemplate) {
      const t = setTimeout(() => {
        void refreshTemplatePreview(
          activeStep,
          activeTemplate,
          previewProspectId
        );
      }, 250);
      return () => clearTimeout(t);
    }
  }, [
    authenticated,
    activeTab,
    activeStep,
    activeTemplate,
    previewProspectId,
    refreshTemplatePreview,
  ]);

  // Auth actions
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (res.ok && data.success) {
        setAuthenticated(true);
        setPasswordInput("");
      } else {
        setLoginError(data.error || "Invalid password.");
      }
    } catch {
      setLoginError("Network error while logging in.");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setAuthenticated(false);
  };

  // Lead actions
  const updateLead = async (
    id: string,
    patch: { status?: LeadStatus; notes?: string }
  ) => {
    const res = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...patch }),
    });
    if (res.ok) {
      const data = (await res.json()) as { lead: ContactLead };
      setLeads((prev) => prev.map((l) => (l.id === id ? data.lead : l)));
      showToast("ok", "Lead updated.");
    } else {
      showToast("err", "Could not update lead.");
    }
  };

  const deleteLead = async (id: string) => {
    const res = await fetch(`/api/admin/leads?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setLeads((prev) => prev.filter((l) => l.id !== id));
      showToast("ok", "Lead removed.");
    }
  };

  const exportLeadsCsv = () => {
    const header = "Name,Email,Phone,Service,Status,Date,Details\n";
    const esc = (s: string) => `"${String(s || "").replace(/"/g, '""')}"`;
    const body = leads
      .map((l) =>
        [l.name, l.email, l.phone, l.service, l.status, l.createdAt, l.details]
          .map(esc)
          .join(",")
      )
      .join("\n");
    const blob = new Blob([header + body], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `katella-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Brevo sync
  const handleSyncBrevo = async () => {
    if (!selectedBrevoListId) return;
    setSyncingBrevo(true);
    try {
      const listObj = brevoLists.find(
        (l) => String(l.id) === selectedBrevoListId
      );
      const res = await fetch("/api/admin/brevo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          listId: Number(selectedBrevoListId),
          listName: listObj?.name,
        }),
      });
      const d = (await res.json()) as {
        success?: boolean;
        fetched?: number;
        added?: number;
        updated?: number;
        error?: string;
      };
      if (res.ok && d.success) {
        showToast(
          "ok",
          `Synced ${d.fetched} contacts from Brevo (${d.added} new, ${d.updated} updated).`
        );
        await loadAllData();
      } else {
        showToast("err", d.error || "Brevo sync failed.");
      }
    } finally {
      setSyncingBrevo(false);
    }
  };

  // Prospect CRUD
  const handleAddProspect = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/outreach", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "add_prospect", prospect: newProspect }),
    });
    const d = (await res.json()) as { success?: boolean; error?: string };
    if (res.ok && d.success) {
      setNewProspect({
        email: "",
        firstName: "",
        businessName: "",
        businessType: "",
        problem: "",
        city: "",
      });
      setShowAddProspect(false);
      showToast("ok", "Prospect added to outreach queue.");
      await loadAllData();
    } else {
      showToast("err", d.error || "Could not add prospect.");
    }
  };

  const handleImportCsv = async () => {
    const rows = parseCsvText(csvText);
    if (rows.length === 0) {
      showToast("err", "No valid email rows found in CSV.");
      return;
    }
    const res = await fetch("/api/admin/outreach", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "import_prospects", rows }),
    });
    const d = (await res.json()) as {
      success?: boolean;
      added?: number;
      error?: string;
    };
    if (res.ok && d.success) {
      setCsvText("");
      setShowCsvModal(false);
      showToast("ok", `Imported ${d.added} new prospects.`);
      await loadAllData();
    } else {
      showToast("err", d.error || "Import failed.");
    }
  };

  const updateProspect = async (
    id: string,
    patch: { status?: OutreachProspect["status"]; stage?: 0 | 1 | 2 | 3 | 4 }
  ) => {
    const res = await fetch("/api/admin/outreach", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "update_prospect", id, ...patch }),
    });
    if (res.ok) {
      showToast("ok", "Prospect status updated.");
      await loadAllData();
    }
  };

  const deleteProspect = async (id: string) => {
    const res = await fetch("/api/admin/outreach", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete_prospect", id }),
    });
    if (res.ok) {
      setProspects((prev) => prev.filter((p) => p.id !== id));
      showToast("ok", "Prospect deleted.");
    }
  };

  const openProspectEmailPreview = async (p: OutreachProspect) => {
    const nextStep = Math.min(4, p.stage + 1) as 1 | 2 | 3 | 4;
    const res = await fetch("/api/admin/outreach", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "preview_email",
        step: nextStep,
        prospectId: p.id,
      }),
    });
    if (res.ok) {
      const d = (await res.json()) as { subject: string; html: string };
      setModalPreview({
        title: `${p.businessName || p.email} — Step ${nextStep}`,
        subject: d.subject,
        html: d.html,
      });
    }
  };

  // Safe micro-batch daily campaign sender (never times out on Vercel!)
  const handleRunCampaign = async () => {
    if (sendingCampaign) return;
    setSendingCampaign(true);
    stopRunnerRef.current = false;
    setCampaignProgress({ sent: 0, failed: 0, dryRun: 0 });

    let totalSent = 0;
    let totalFailed = 0;
    let totalDryRun = 0;
    const targetCap = Math.min(
      Math.max(1, batchTargetCount),
      stats?.remainingToday ?? 400
    );

    try {
      while (!stopRunnerRef.current && totalSent + totalFailed < targetCap) {
        const chunk = Math.min(15, targetCap - (totalSent + totalFailed));
        const res = await fetch("/api/admin/outreach", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "send_batch",
            mode: batchMode,
            batchSize: chunk,
          }),
        });
        if (!res.ok) {
          showToast("err", "Batch send stopped due to server error.");
          break;
        }
        const d = (await res.json()) as {
          sent: number;
          failed: number;
          dryRun: number;
          remainingToday: number;
          hasMoreDue: boolean;
        };
        totalSent += d.sent;
        totalFailed += d.failed;
        totalDryRun += d.dryRun;
        setCampaignProgress({
          sent: totalSent,
          failed: totalFailed,
          dryRun: totalDryRun,
        });

        if (!d.hasMoreDue || d.remainingToday <= 0 || d.sent + d.failed === 0) {
          break;
        }
      }

      if (totalSent === 0 && totalFailed === 0) {
        showToast(
          "err",
          "No eligible prospects due right now (or daily 400 limit reached)."
        );
      } else if (totalDryRun > 0) {
        showToast(
          "ok",
          `Simulated ${totalSent} emails (Dry-Run mode — connect Brevo or Resend API key to send live).`
        );
      } else {
        showToast(
          "ok",
          `Campaign finished: ${totalSent} sent${totalFailed ? `, ${totalFailed} failed` : ""}.`
        );
      }
      await loadAllData();
    } finally {
      setSendingCampaign(false);
    }
  };

  // Template actions
  const updateTemplateField = (
    field: keyof EmailTemplateStep,
    value: string | number
  ) => {
    setTemplates((prev) =>
      prev.map((t) => (t.step === activeStep ? { ...t, [field]: value } : t))
    );
  };

  const insertTokenInBody = (token: string) => {
    if (!activeTemplate) return;
    updateTemplateField("body", `${activeTemplate.body} ${token}`);
  };

  const handleSaveTemplates = async () => {
    setSavingTemplates(true);
    try {
      const res = await fetch("/api/admin/outreach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save_templates", templates }),
      });
      if (res.ok) {
        showToast("ok", "All 4 sequence templates saved.");
      } else {
        showToast("err", "Failed to save templates.");
      }
    } finally {
      setSavingTemplates(false);
    }
  };

  const handleResetTemplates = async () => {
    const res = await fetch("/api/admin/outreach", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "reset_templates" }),
    });
    if (res.ok) {
      const d = (await res.json()) as { templates: EmailTemplateStep[] };
      setTemplates(d.templates);
      showToast("ok", "Templates reset to Katella Digital defaults.");
    }
  };

  const handleSendTest = async () => {
    if (!testEmailTo.trim() || !activeTemplate) return;
    setSendingTest(true);
    try {
      const res = await fetch("/api/admin/outreach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "send_test",
          toEmail: testEmailTo.trim(),
          step: activeStep,
          templateOverride: activeTemplate,
          prospectId: previewProspectId || undefined,
        }),
      });
      const d = (await res.json()) as {
        success?: boolean;
        provider?: string;
        error?: string;
      };
      if (res.ok && d.success) {
        showToast(
          "ok",
          d.provider === "dry-run"
            ? "Test simulated (Dry-Run — add Brevo or Resend API key to send real email)."
            : `Test email sent via ${d.provider?.toUpperCase()} to ${testEmailTo}!`
        );
      } else {
        showToast("err", d.error || "Test email failed.");
      }
    } finally {
      setSendingTest(false);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;
    setSavingSettings(true);
    try {
      const res = await fetch("/api/admin/outreach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save_settings", settings }),
      });
      if (res.ok) {
        showToast("ok", "Outreach settings saved.");
        await loadAllData();
      } else {
        showToast("err", "Could not save settings.");
      }
    } finally {
      setSavingSettings(false);
    }
  };

  const filteredLeads = useMemo(() => {
    const q = leadQuery.trim().toLowerCase();
    return leads.filter((l) => {
      if (leadStatusFilter !== "all" && l.status !== leadStatusFilter) {
        return false;
      }
      if (!q) return true;
      return (
        l.name.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        l.service.toLowerCase().includes(q) ||
        l.details.toLowerCase().includes(q)
      );
    });
  }, [leads, leadQuery, leadStatusFilter]);

  const filteredProspects = useMemo(() => {
    const q = prospectQuery.trim().toLowerCase();
    if (!q) return prospects;
    return prospects.filter(
      (p) =>
        p.email.toLowerCase().includes(q) ||
        p.businessName.toLowerCase().includes(q) ||
        p.businessType.toLowerCase().includes(q) ||
        p.problem.toLowerCase().includes(q) ||
        p.firstName.toLowerCase().includes(q)
    );
  }, [prospects, prospectQuery]);

  const newLeadsCount = useMemo(
    () => leads.filter((l) => l.status === "new").length,
    [leads]
  );

  // Loading state
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#FF4D73]" />
      </div>
    );
  }

  // Login Screen
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5 py-16">
        <div className="kd-obsidian-card kd-keep-dark w-full max-w-md rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2 text-center">
            <div className="h-12 w-12 mx-auto rounded-2xl bg-gradient-to-br from-[#FF3363] to-[#9A0E28] flex items-center justify-center shadow-[0_12px_32px_rgba(232,28,73,0.45)]">
              <KeyRound className="h-6 w-6 text-white" />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#FF8CA4] pt-2">
              Katella Digital · Command Center
            </p>
            <h1 className="font-display font-extrabold text-2xl text-white tracking-tight">
              Leads &amp; Email Outreach Admin
            </h1>
            <p className="text-xs text-white/65 leading-relaxed">
              Sign in to manage inbound website leads, sync Brevo lists, and run
              personalized 400/day outreach campaigns.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 mb-1.5">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter dashboard password"
                className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#E81C49] focus:outline-none"
              />
            </div>

            {loginError && (
              <p className="rounded-xl border border-[#FF4D73]/40 bg-[#C71F42]/20 px-3.5 py-2 text-xs text-[#FF9AB0]">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              disabled={loggingIn}
              className="kd-cta-glow w-full rounded-full py-3.5 text-sm font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              {loggingIn ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Verifying...
                </>
              ) : (
                <>
                  <ShieldCheck className="h-4 w-4" /> Unlock Dashboard
                </>
              )}
            </button>
          </form>

          {defaultPasswordActive && (
            <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 p-3.5 text-[11px] text-amber-200/90 leading-relaxed">
              <strong>Setup Mode:</strong> Default password is{" "}
              <code className="rounded bg-black/40 px-1.5 py-0.5 text-white">
                katella2026
              </code>
              . Set <code className="text-white">ADMIN_PASSWORD</code> in Vercel
              Environment Variables before going live.
            </div>
          )}

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-white/55 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to katelladigital.com
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const dailyPct = stats
    ? Math.min(100, Math.round((stats.sentToday / stats.dailyLimit) * 100))
    : 0;

  return (
    <div className="kd-keep-dark min-h-screen pb-16">
      {/* Top Admin Bar */}
      <header className="sticky top-0 z-40 border-b border-white/12 bg-[#080103]/90 backdrop-blur-2xl">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/"
              className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#FF3363] to-[#9A0E28] flex items-center justify-center text-white font-display font-extrabold text-sm shrink-0"
              title="Back to website"
            >
              K
            </Link>
            <div className="truncate">
              <p className="font-display font-bold text-sm sm:text-base text-white tracking-tight truncate">
                Katella Digital{" "}
                <span className="text-[#FF4D73]">Command Center</span>
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 hidden sm:block">
                Leads CRM · Brevo Sync · 400/Day Domain Outreach &amp; 3-Step
                Auto Follow-up
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => void loadAllData()}
              disabled={refreshing}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] px-3.5 py-1.5 text-xs font-medium text-white transition-colors cursor-pointer"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`}
              />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] px-3.5 py-1.5 text-xs font-medium text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Site</span>
            </Link>

            <button
              type="button"
              onClick={() => void handleLogout()}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#FF4D73]/35 bg-[#C71F42]/18 hover:bg-[#C71F42]/35 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 max-w-md">
          <div
            className={`rounded-2xl border px-4 py-3 text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-2xl flex items-center gap-2.5 ${
              toast.type === "ok"
                ? "border-emerald-400/40 bg-[#071810]/95 text-emerald-200"
                : "border-[#FF4D73]/50 bg-[#23040b]/95 text-[#FFB3C3]"
            }`}
          >
            {toast.type === "ok" ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            ) : (
              <X className="h-4 w-4 text-[#FF4D73] shrink-0" />
            )}
            <span>{toast.msg}</span>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-7 space-y-6">
        {/* Top KPI Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="kd-obsidian-card rounded-2xl p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
              Website Leads
            </p>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-display font-extrabold text-3xl text-white tabular-nums">
                {leads.length}
              </span>
              {newLeadsCount > 0 && (
                <span className="rounded-full bg-[#E81C49]/25 border border-[#E81C49]/50 px-2.5 py-0.5 text-[10px] font-bold text-[#FF8CA4]">
                  {newLeadsCount} new
                </span>
              )}
            </div>
          </div>

          <div className="kd-obsidian-card rounded-2xl p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
              Sent Today
            </p>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="font-display font-extrabold text-3xl text-white tabular-nums">
                {stats?.sentToday ?? 0}
              </span>
              <span className="text-xs text-white/50">
                / {stats?.dailyLimit ?? 400}
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#FF3363] to-[#C71F42] transition-all"
                style={{ width: `${dailyPct}%` }}
              />
            </div>
            <p className="mt-1.5 font-mono text-[10px] text-white/50">
              Brevo {stats?.brevoSentToday ?? 0}/{stats?.brevoDailyLimit ?? 300}{" "}
              · Resend {stats?.resendSentToday ?? 0}/
              {stats?.resendDailyLimit ?? 100}
            </p>
          </div>

          <div className="kd-obsidian-card rounded-2xl p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
              Due Follow-ups
            </p>
            <p className="mt-2 font-display font-extrabold text-3xl text-[#FF4D73] tabular-nums">
              {stats?.dueFollowUps ?? 0}
            </p>
            <p className="mt-1 text-[11px] text-white/50">
              Auto 3-step queue
            </p>
          </div>

          <div className="kd-obsidian-card rounded-2xl p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
              Outreach List
            </p>
            <p className="mt-2 font-display font-extrabold text-3xl text-white tabular-nums">
              {stats?.totalProspects ?? 0}
            </p>
            <p className="mt-1 text-[11px] text-white/50">
              {stats?.queuedNew ?? 0} queued new
            </p>
          </div>

          <div className="kd-obsidian-card rounded-2xl p-5 col-span-2 lg:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
              Replied / Done
            </p>
            <p className="mt-2 font-display font-extrabold text-3xl text-emerald-400 tabular-nums">
              {stats?.replied ?? 0}
              <span className="text-sm font-medium text-white/45 ml-2">
                / {stats?.completed ?? 0} done
              </span>
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/12 pb-3">
          {(
            [
              { id: "leads", label: `Leads Inbox (${leads.length})`, icon: Inbox },
              {
                id: "outreach",
                label: `Email Outreach (${prospects.length})`,
                icon: Send,
              },
              {
                id: "templates",
                label: "Templates & 3-Step Follow-up",
                icon: Sparkles,
              },
              { id: "logs", label: `Send Logs (${logs.length})`, icon: Activity },
              { id: "settings", label: "API & Domain Mail", icon: Settings },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  active
                    ? "bg-[#E81C49] border-[#FF6B8A] text-white shadow-[0_8px_26px_rgba(232,28,73,0.45)]"
                    : "bg-white/[0.05] border-white/12 text-white/70 hover:text-white hover:bg-white/[0.1]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ==================== TAB 1: LEADS INBOX ==================== */}
        {activeTab === "leads" && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5 flex-1">
                <div className="relative flex-1 min-w-[220px] max-w-md">
                  <Search className="h-4 w-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={leadQuery}
                    onChange={(e) => setLeadQuery(e.target.value)}
                    placeholder="Search leads by name, email, service..."
                    className="w-full rounded-xl border border-white/15 bg-[#060000]/60 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#E81C49] focus:outline-none"
                  />
                </div>
                <select
                  value={leadStatusFilter}
                  onChange={(e) => setLeadStatusFilter(e.target.value)}
                  className="rounded-xl border border-white/15 bg-[#0e0205] px-3.5 py-2.5 text-xs font-semibold text-white focus:border-[#E81C49] focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  {LEAD_STATUS_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={exportLeadsCsv}
                disabled={leads.length === 0}
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.06] hover:bg-white/[0.12] px-4 py-2 text-xs font-semibold text-white transition-colors cursor-pointer disabled:opacity-40"
              >
                <Download className="h-3.5 w-3.5" /> Export Leads CSV
              </button>
            </div>

            {filteredLeads.length === 0 ? (
              <div className="kd-obsidian-card rounded-3xl p-12 text-center space-y-3">
                <Inbox className="h-10 w-10 text-[#FF4D73] mx-auto opacity-80" />
                <h2 className="font-display font-bold text-xl text-white">
                  No contact submissions yet
                </h2>
                <p className="text-sm text-white/60 max-w-md mx-auto">
                  Whenever a visitor submits the Contact Form or Service Inquiry
                  form on katelladigital.com, their full lead details will
                  appear right here automatically.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredLeads.map((lead) => {
                  const statusMeta =
                    LEAD_STATUS_OPTIONS.find((o) => o.value === lead.status) ||
                    LEAD_STATUS_OPTIONS[0];
                  const expanded = expandedLeadId === lead.id;
                  const noteVal =
                    noteDrafts[lead.id] !== undefined
                      ? noteDrafts[lead.id]
                      : lead.notes;

                  return (
                    <div
                      key={lead.id}
                      className="kd-obsidian-card rounded-2xl p-5 sm:p-6 space-y-4"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3 className="font-display font-bold text-lg text-white">
                              {lead.name}
                            </h3>
                            <span
                              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${statusMeta.badge}`}
                            >
                              {statusMeta.label}
                            </span>
                            <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 text-[11px] text-white/80">
                              {lead.service}
                            </span>
                          </div>
                          <p className="text-xs text-white/60">
                            {lead.email} · {lead.phone} ·{" "}
                            {formatDateShort(lead.createdAt)}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <select
                            value={lead.status}
                            onChange={(e) =>
                              void updateLead(lead.id, {
                                status: e.target.value as LeadStatus,
                              })
                            }
                            className="rounded-lg border border-white/15 bg-[#0e0205] px-3 py-1.5 text-xs font-semibold text-white cursor-pointer"
                          >
                            {LEAD_STATUS_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>

                          <a
                            href={`mailto:${lead.email}?subject=${encodeURIComponent(
                              `Re: Your ${lead.service} inquiry — Katella Digital`
                            )}`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.06] hover:bg-white/[0.14] px-3 py-1.5 text-xs font-medium text-white"
                          >
                            <Mail className="h-3.5 w-3.5 text-[#FF4D73]" />{" "}
                            Email
                          </a>

                          {lead.phone && lead.phone !== "Not provided" && (
                            <a
                              href={`https://wa.me/${lead.phone.replace(
                                /[^\d]/g,
                                ""
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-[#25D366]/40 bg-[#25D366]/15 hover:bg-[#25D366]/25 px-3 py-1.5 text-xs font-medium text-emerald-200"
                            >
                              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                            </a>
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              setExpandedLeadId(expanded ? null : lead.id)
                            }
                            className="rounded-lg border border-white/15 bg-white/[0.06] hover:bg-white/[0.14] px-3 py-1.5 text-xs font-medium text-white cursor-pointer"
                          >
                            {expanded ? "Hide Notes" : "Notes"}
                          </button>

                          <button
                            type="button"
                            onClick={() => void deleteLead(lead.id)}
                            aria-label="Delete lead"
                            className="h-8 w-8 rounded-lg border border-white/12 bg-white/[0.04] hover:border-[#FF4D73]/60 hover:bg-[#C71F42]/20 flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-[#060000]/45 p-4 text-sm text-white/80 whitespace-pre-wrap leading-relaxed">
                        {lead.details}
                      </div>

                      {expanded && (
                        <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                          <input
                            type="text"
                            value={noteVal}
                            onChange={(e) =>
                              setNoteDrafts((prev) => ({
                                ...prev,
                                [lead.id]: e.target.value,
                              }))
                            }
                            placeholder="Add internal follow-up notes (call outcome, budget, next step)..."
                            className="flex-1 rounded-xl border border-white/15 bg-[#060000]/60 px-3.5 py-2 text-xs text-white placeholder:text-white/35 focus:border-[#E81C49] focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              void updateLead(lead.id, { notes: noteVal })
                            }
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#E81C49] hover:bg-[#ff2b59] px-4 py-2 text-xs font-bold text-white cursor-pointer"
                          >
                            <Save className="h-3.5 w-3.5" /> Save Note
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ==================== TAB 2: EMAIL OUTREACH & BREVO SYNC ==================== */}
        {activeTab === "outreach" && (
          <div className="space-y-6">
            {/* Top Dual Control Panels: Brevo List Sync + Daily 400/Day Campaign Runner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Brevo Sync Card */}
              <div className="lg:col-span-5 kd-obsidian-card rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF8CA4]">
                      Brevo API Contact Sync
                    </p>
                    <h2 className="font-display font-bold text-lg text-white mt-0.5">
                      Pull Personalized Lists from Brevo
                    </h2>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                      brevoConnected
                        ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-300"
                        : "border-amber-400/40 bg-amber-500/15 text-amber-200"
                    }`}
                  >
                    {brevoConnected ? "Connected" : "API Pending"}
                  </span>
                </div>

                {brevoConnected ? (
                  <div className="space-y-3">
                    <select
                      value={selectedBrevoListId}
                      onChange={(e) => setSelectedBrevoListId(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-[#0e0205] px-3.5 py-2.5 text-sm text-white focus:border-[#E81C49] focus:outline-none"
                    >
                      {brevoLists.map((list) => (
                        <option key={list.id} value={list.id}>
                          {list.name} ({list.totalSubscribers} contacts)
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={() => void handleSyncBrevo()}
                      disabled={syncingBrevo || !selectedBrevoListId}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-white/90 text-[#060000] px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {syncingBrevo ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Syncing
                          Brevo Contacts...
                        </>
                      ) : (
                        <>
                          <CloudDownload className="h-4 w-4" /> Sync Selected
                          List from Brevo
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="rounded-xl border border-white/12 bg-[#060000]/50 p-4 text-xs text-white/70 leading-relaxed space-y-2">
                    <p>
                      {brevoError ||
                        "Add BREVO_API_KEY in Vercel Environment Variables to fetch your Brevo contact lists automatically."}
                    </p>
                    <p className="text-white/50">
                      Maps Brevo attributes:{" "}
                      <code className="text-[#FF8CA4]">
                        FIRSTNAME, BUSINESS_NAME/COMPANY, BUSINESS_TYPE/INDUSTRY,
                        PROBLEM/PAIN_POINT, CITY
                      </code>
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowAddProspect((v) => !v)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/18 bg-white/[0.06] hover:bg-white/[0.14] px-3.5 py-1.5 text-xs font-semibold text-white cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5 text-[#FF4D73]" /> Add Prospect
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCsvModal(true)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/18 bg-white/[0.06] hover:bg-white/[0.14] px-3.5 py-1.5 text-xs font-semibold text-white cursor-pointer"
                  >
                    <Upload className="h-3.5 w-3.5 text-[#FF4D73]" /> Bulk CSV
                    Import
                  </button>
                </div>
              </div>

              {/* Daily Campaign Runner (400/day Domain Mail + 3 Follow-ups) */}
              <div className="lg:col-span-7 kd-obsidian-card rounded-3xl p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF8CA4]">
                      Daily Domain Mail Dispatcher · 3-Step Auto Follow-up
                    </p>
                    <h2 className="font-display font-bold text-lg text-white mt-0.5">
                      Send Personalized Outreach Campaign
                    </h2>
                  </div>

                  <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-white/80">
                    Remaining Today:{" "}
                    <strong className="text-[#FF4D73]">
                      {stats?.remainingToday ?? 400}
                    </strong>{" "}
                    / {stats?.dailyLimit ?? 400}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1">
                      Queue Mode
                    </label>
                    <select
                      value={batchMode}
                      onChange={(e) =>
                        setBatchMode(
                          e.target.value as "auto" | "followups" | "new"
                        )
                      }
                      className="w-full rounded-xl border border-white/15 bg-[#0e0205] px-3 py-2.5 text-xs font-semibold text-white"
                    >
                      <option value="auto">
                        Auto (Follow-ups + New Queue)
                      </option>
                      <option value="followups">
                        Due Follow-ups Only ({stats?.dueFollowUps ?? 0})
                      </option>
                      <option value="new">
                        New Prospects Only ({stats?.queuedNew ?? 0})
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1">
                      Emails to Send This Run
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={stats?.remainingToday || 400}
                      value={batchTargetCount}
                      onChange={(e) =>
                        setBatchTargetCount(
                          Math.max(1, Number(e.target.value) || 1)
                        )
                      }
                      className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-3 py-2.5 text-xs font-semibold text-white"
                    />
                  </div>

                  <div className="flex items-end">
                    {sendingCampaign ? (
                      <button
                        type="button"
                        onClick={() => {
                          stopRunnerRef.current = true;
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/20 px-4 py-2.5 text-xs font-bold text-amber-200 cursor-pointer"
                      >
                        <Pause className="h-4 w-4" /> Stop Batch
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => void handleRunCampaign()}
                        disabled={(stats?.remainingToday ?? 0) <= 0}
                        className="kd-cta-glow w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-white cursor-pointer disabled:opacity-40"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" /> Send
                        Campaign Batch
                      </button>
                    )}
                  </div>
                </div>

                {sendingCampaign && (
                  <div className="rounded-xl border border-[#E81C49]/40 bg-[#C71F42]/15 px-4 py-3 flex items-center justify-between text-xs text-white">
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin text-[#FF4D73]" />
                      Streaming safe micro-batches (15/chunk)...
                    </span>
                    <span className="font-mono font-bold">
                      Sent: {campaignProgress.sent} · Failed:{" "}
                      {campaignProgress.failed}
                    </span>
                  </div>
                )}

                <p className="text-[11px] text-white/55 leading-relaxed">
                  Sending via{" "}
                  <strong className="text-white">
                    {integrations?.brevoConfigured &&
                    integrations?.resendConfigured
                      ? "Brevo API (300/day) + Resend API (100/day) Auto-Split"
                      : integrations?.brevoConfigured
                        ? "Brevo API (add RESEND_API_KEY for +100/day)"
                        : integrations?.resendConfigured
                          ? "Resend API (add BREVO_API_KEY for +300/day)"
                          : "Dry-Run Simulation (add BREVO_API_KEY & RESEND_API_KEY in Vercel)"}
                  </strong>{" "}
                  · Verified domain sender · Follow-ups #1, #2, and #3 schedule
                  automatically and stop immediately on reply or unsubscribe.
                </p>
              </div>
            </div>

            {/* Inline Add Single Prospect Form */}
            {showAddProspect && (
              <form
                onSubmit={handleAddProspect}
                className="kd-obsidian-card rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-white">
                    Add Personalized Business Prospect
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowAddProspect(false)}
                    className="text-white/50 hover:text-white cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="email"
                    required
                    value={newProspect.email}
                    onChange={(e) =>
                      setNewProspect({ ...newProspect, email: e.target.value })
                    }
                    placeholder="Email * (owner@company.com)"
                    className="rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2.5 text-xs text-white placeholder:text-white/35"
                  />
                  <input
                    type="text"
                    value={newProspect.firstName}
                    onChange={(e) =>
                      setNewProspect({
                        ...newProspect,
                        firstName: e.target.value,
                      })
                    }
                    placeholder="First Name (e.g. Sarah)"
                    className="rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2.5 text-xs text-white placeholder:text-white/35"
                  />
                  <input
                    type="text"
                    required
                    value={newProspect.businessName}
                    onChange={(e) =>
                      setNewProspect({
                        ...newProspect,
                        businessName: e.target.value,
                      })
                    }
                    placeholder="Business Name * (e.g. Apex Dental)"
                    className="rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2.5 text-xs text-white placeholder:text-white/35"
                  />
                  <input
                    type="text"
                    required
                    value={newProspect.businessType}
                    onChange={(e) =>
                      setNewProspect({
                        ...newProspect,
                        businessType: e.target.value,
                      })
                    }
                    placeholder="Business Type * (e.g. Cosmetic Dentist)"
                    className="rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2.5 text-xs text-white placeholder:text-white/35"
                  />
                  <input
                    type="text"
                    value={newProspect.city}
                    onChange={(e) =>
                      setNewProspect({ ...newProspect, city: e.target.value })
                    }
                    placeholder="City (e.g. Anaheim, CA)"
                    className="rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2.5 text-xs text-white placeholder:text-white/35"
                  />
                  <input
                    type="text"
                    required
                    value={newProspect.problem}
                    onChange={(e) =>
                      setNewProspect({
                        ...newProspect,
                        problem: e.target.value,
                      })
                    }
                    placeholder="Observed Problem * (e.g. slow mobile site & no Maps SEO)"
                    className="rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2.5 text-xs text-white placeholder:text-white/35"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#E81C49] hover:bg-[#ff2b59] px-5 py-2 text-xs font-bold text-white cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add to Queue
                  </button>
                </div>
              </form>
            )}

            {/* Prospects Table */}
            <div className="kd-obsidian-card rounded-3xl p-5 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#FF4D73]" /> Outreach Queue (
                  {filteredProspects.length})
                </h3>
                <div className="relative w-full sm:w-72">
                  <Search className="h-3.5 w-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={prospectQuery}
                    onChange={(e) => setProspectQuery(e.target.value)}
                    placeholder="Search business, niche, email..."
                    className="w-full rounded-xl border border-white/15 bg-[#060000]/60 pl-9 pr-3 py-2 text-xs text-white placeholder:text-white/35 focus:border-[#E81C49] focus:outline-none"
                  />
                </div>
              </div>

              {filteredProspects.length === 0 ? (
                <div className="py-12 text-center text-sm text-white/55">
                  No prospects yet. Sync a list from Brevo, import a CSV, or add
                  your first business prospect above.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/12 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                        <th className="py-3 pr-4">Business &amp; Contact</th>
                        <th className="py-3 pr-4">Business Type &amp; Problem</th>
                        <th className="py-3 pr-4">Sequence Stage</th>
                        <th className="py-3 pr-4">Next Follow-up</th>
                        <th className="py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/8 text-xs">
                      {filteredProspects.slice(0, 100).map((p) => {
                        const st = stageLabel(p);
                        return (
                          <tr
                            key={p.id}
                            className="hover:bg-white/[0.03] transition-colors"
                          >
                            <td className="py-3.5 pr-4 align-top">
                              <p className="font-semibold text-white">
                                {p.businessName || "Unnamed Business"}
                              </p>
                              <p className="text-white/60">
                                {p.firstName ? `${p.firstName} · ` : ""}
                                {p.email}
                              </p>
                              {p.city && (
                                <p className="text-[11px] text-white/40">
                                  {p.city}
                                </p>
                              )}
                            </td>
                            <td className="py-3.5 pr-4 align-top max-w-sm">
                              {p.businessType && (
                                <span className="inline-block rounded-md bg-white/[0.07] border border-white/12 px-2 py-0.5 text-[10px] font-semibold text-[#FF8CA4] mb-1">
                                  {p.businessType}
                                </span>
                              )}
                              <p className="text-white/75 line-clamp-2 leading-relaxed">
                                {p.problem || "General digital growth audit"}
                              </p>
                            </td>
                            <td className="py-3.5 pr-4 align-top">
                              <span
                                className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold whitespace-nowrap ${st.cls}`}
                              >
                                {st.text}
                              </span>
                              {p.lastError && (
                                <p className="text-[10px] text-[#FF8CA4] mt-1 max-w-[180px] truncate">
                                  {p.lastError}
                                </p>
                              )}
                            </td>
                            <td className="py-3.5 pr-4 align-top text-white/60 whitespace-nowrap">
                              {p.nextFollowUpAt ? (
                                <span className="inline-flex items-center gap-1">
                                  <Clock className="h-3 w-3 text-[#FF4D73]" />
                                  {formatDateShort(p.nextFollowUpAt)}
                                </span>
                              ) : (
                                "—"
                              )}
                            </td>
                            <td className="py-3.5 text-right align-top">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() =>
                                    void openProspectEmailPreview(p)
                                  }
                                  title="Preview personalized email"
                                  className="h-7 w-7 rounded-lg border border-white/15 bg-white/[0.05] hover:bg-white/[0.15] flex items-center justify-center text-white/75 cursor-pointer"
                                >
                                  <Eye className="h-3.5 w-3.5" />
                                </button>
                                {p.status !== "replied" && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      void updateProspect(p.id, {
                                        status: "replied",
                                      })
                                    }
                                    title="Mark as Replied (stops follow-ups)"
                                    className="h-7 w-7 rounded-lg border border-emerald-400/35 bg-emerald-500/15 hover:bg-emerald-500/30 flex items-center justify-center text-emerald-300 cursor-pointer"
                                  >
                                    <Check className="h-3.5 w-3.5" />
                                  </button>
                                )}
                                {p.stage > 0 && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      void updateProspect(p.id, {
                                        stage: 0,
                                        status: "active",
                                      })
                                    }
                                    title="Reset to Queued"
                                    className="h-7 w-7 rounded-lg border border-white/15 bg-white/[0.05] hover:bg-white/[0.15] flex items-center justify-center text-white/65 cursor-pointer"
                                  >
                                    <RotateCcw className="h-3.5 w-3.5" />
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={() => void deleteProspect(p.id)}
                                  title="Delete prospect"
                                  className="h-7 w-7 rounded-lg border border-white/12 bg-white/[0.04] hover:border-[#FF4D73]/50 hover:bg-[#C71F42]/20 flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== TAB 3: TEMPLATES & 3-STEP FOLLOW-UP ==================== */}
        {activeTab === "templates" && activeTemplate && (
          <div className="space-y-5">
            {/* Step Selector Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {templates.map((t) => (
                  <button
                    key={t.step}
                    type="button"
                    onClick={() => setActiveStep(t.step)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold border transition-all cursor-pointer ${
                      activeStep === t.step
                        ? "bg-white text-[#060000] border-white"
                        : "bg-white/[0.05] border-white/15 text-white/75 hover:text-white"
                    }`}
                  >
                    {t.step === 1
                      ? "1. Initial Outreach"
                      : `${t.step}. Follow-up #${t.step - 1} (+${t.delayDays}d)`}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => void handleResetTemplates()}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.12] px-3.5 py-2 text-xs font-semibold text-white/80 cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Reset Defaults
                </button>
                <button
                  type="button"
                  onClick={() => void handleSaveTemplates()}
                  disabled={savingTemplates}
                  className="kd-cta-glow inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-bold text-white cursor-pointer"
                >
                  {savingTemplates ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Save className="h-3.5 w-3.5" />
                  )}
                  Save All 4 Templates
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Editor */}
              <div className="lg:col-span-6 kd-obsidian-card rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display font-bold text-base text-white">
                    {activeTemplate.label}
                  </h3>
                  {activeStep > 1 && (
                    <div className="flex items-center gap-2 text-xs text-white/75">
                      <span>Send after</span>
                      <input
                        type="number"
                        min={1}
                        max={30}
                        value={activeTemplate.delayDays}
                        onChange={(e) =>
                          updateTemplateField(
                            "delayDays",
                            Math.max(1, Number(e.target.value) || 1)
                          )
                        }
                        className="w-14 rounded-lg border border-white/20 bg-[#060000]/70 px-2 py-1 text-center font-bold text-white"
                      />
                      <span>days</span>
                    </div>
                  )}
                </div>

                {/* Clickable Personalization Tokens */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1.5">
                    Click to insert personalized token
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {MERGE_TOKENS.map((m) => (
                      <button
                        key={m.token}
                        type="button"
                        onClick={() => insertTokenInBody(m.token)}
                        className="rounded-lg border border-[#FF4D73]/35 bg-[#C71F42]/18 hover:bg-[#C71F42]/35 px-2.5 py-1 text-[11px] font-mono text-[#FFB0C1] cursor-pointer"
                      >
                        {m.token}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={activeTemplate.subject}
                    onChange={(e) =>
                      updateTemplateField("subject", e.target.value)
                    }
                    className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2.5 text-sm text-white focus:border-[#E81C49] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1">
                    Branded Banner Headline
                  </label>
                  <input
                    type="text"
                    value={activeTemplate.headline}
                    onChange={(e) =>
                      updateTemplateField("headline", e.target.value)
                    }
                    className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2.5 text-sm text-white focus:border-[#E81C49] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1">
                    Personalized Email Body (lines starting with → become
                    crimson highlight callouts)
                  </label>
                  <textarea
                    rows={10}
                    value={activeTemplate.body}
                    onChange={(e) => updateTemplateField("body", e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-3 text-sm text-white leading-relaxed focus:border-[#E81C49] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1">
                      CTA Button Label
                    </label>
                    <input
                      type="text"
                      value={activeTemplate.ctaText}
                      onChange={(e) =>
                        updateTemplateField("ctaText", e.target.value)
                      }
                      className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1">
                      CTA Destination URL
                    </label>
                    <input
                      type="url"
                      value={activeTemplate.ctaUrl}
                      onChange={(e) =>
                        updateTemplateField("ctaUrl", e.target.value)
                      }
                      className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Right Live Branded HTML Preview + Test Send */}
              <div className="lg:col-span-6 kd-obsidian-card rounded-3xl p-6 flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF8CA4]">
                      Live Branded Email Preview
                    </p>
                    <p className="text-xs text-white/80 font-semibold mt-0.5 truncate max-w-md">
                      Subject: {previewSubject || activeTemplate.subject}
                    </p>
                  </div>

                  {prospects.length > 0 && (
                    <select
                      value={previewProspectId}
                      onChange={(e) => setPreviewProspectId(e.target.value)}
                      className="rounded-lg border border-white/15 bg-[#0e0205] px-2.5 py-1.5 text-xs text-white max-w-[200px]"
                    >
                      <option value="">Sample Business</option>
                      {prospects.slice(0, 30).map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.businessName || p.email}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                <div className="relative flex-1 min-h-[460px] rounded-2xl overflow-hidden border border-white/15 bg-[#f6eef0]">
                  {loadingPreview && (
                    <div className="absolute top-3 right-3 z-10 rounded-full bg-[#060000]/80 px-2.5 py-1 text-[10px] text-white flex items-center gap-1">
                      <Loader2 className="h-3 w-3 animate-spin" /> Rendering
                    </div>
                  )}
                  <iframe
                    title="Branded Email Preview"
                    srcDoc={previewHtml}
                    sandbox=""
                    className="w-full h-[500px] border-0"
                  />
                </div>

                {/* Send Test Email */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <input
                    type="email"
                    value={testEmailTo}
                    onChange={(e) => setTestEmailTo(e.target.value)}
                    placeholder="Send test preview to your email..."
                    className="flex-1 rounded-xl border border-white/15 bg-[#060000]/65 px-3.5 py-2.5 text-xs text-white placeholder:text-white/35 focus:border-[#E81C49] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => void handleSendTest()}
                    disabled={sendingTest || !testEmailTo.trim()}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white hover:bg-white/90 text-[#060000] px-4 py-2.5 text-xs font-bold cursor-pointer disabled:opacity-40"
                  >
                    {sendingTest ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <Send className="h-3.5 w-3.5" />
                    )}
                    Send Test Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: ACTIVITY & SEND LOGS ==================== */}
        {activeTab === "logs" && (
          <div className="kd-obsidian-card rounded-3xl p-6 space-y-4">
            <h2 className="font-display font-bold text-lg text-white">
              Outreach Dispatch Logs
            </h2>
            {logs.length === 0 ? (
              <p className="text-sm text-white/55 py-10 text-center">
                No outreach emails dispatched yet.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-white/12 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                      <th className="py-2.5 pr-4">Time</th>
                      <th className="py-2.5 pr-4">Recipient</th>
                      <th className="py-2.5 pr-4">Step</th>
                      <th className="py-2.5 pr-4">Subject</th>
                      <th className="py-2.5 pr-4">Provider</th>
                      <th className="py-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8">
                    {logs.map((log) => (
                      <tr key={log.id} className="hover:bg-white/[0.03]">
                        <td className="py-3 pr-4 text-white/55 whitespace-nowrap">
                          {formatDateShort(log.sentAt)}
                        </td>
                        <td className="py-3 pr-4">
                          <p className="font-semibold text-white">
                            {log.businessName || log.prospectEmail}
                          </p>
                          <p className="text-white/50">{log.prospectEmail}</p>
                        </td>
                        <td className="py-3 pr-4 whitespace-nowrap">
                          <span className="rounded-md bg-white/[0.07] px-2 py-0.5 text-[10px] font-bold text-white/80">
                            {log.step === 1
                              ? "Initial"
                              : `Follow-up #${log.step - 1}`}
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-white/80 max-w-xs truncate">
                          {log.subject}
                        </td>
                        <td className="py-3 pr-4 font-mono uppercase text-[10px] text-white/60">
                          {log.provider}
                        </td>
                        <td className="py-3">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                              log.status === "sent"
                                ? "bg-emerald-500/20 text-emerald-300"
                                : log.status === "dry-run"
                                  ? "bg-amber-500/20 text-amber-200"
                                  : "bg-[#E81C49]/25 text-[#FF8CA4]"
                            }`}
                          >
                            {log.status}
                          </span>
                          {log.error && (
                            <p className="text-[10px] text-[#FF8CA4] mt-0.5">
                              {log.error}
                            </p>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ==================== TAB 5: API & DOMAIN MAIL SETTINGS ==================== */}
        {activeTab === "settings" && settings && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <form
              onSubmit={handleSaveSettings}
              className="lg:col-span-7 kd-obsidian-card rounded-3xl p-6 sm:p-8 space-y-5"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF8CA4]">
                  Domain Email &amp; Quota Controls
                </p>
                <h2 className="font-display font-bold text-xl text-white mt-1">
                  Outreach Delivery Settings
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 mb-1.5">
                    Delivery Mode (Verified Domain APIs)
                  </label>
                  <select
                    value={settings.sendProvider}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        sendProvider: e.target.value as
                          | "auto"
                          | "brevo"
                          | "resend",
                      })
                    }
                    className="w-full rounded-xl border border-white/15 bg-[#0e0205] px-4 py-2.5 text-sm text-white"
                  >
                    <option value="auto">
                      Auto-Split: Brevo + Resend Combined (Recommended · 400/day)
                    </option>
                    <option value="brevo">Brevo API Only</option>
                    <option value="resend">Resend API Only</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 mb-1.5">
                    Brevo Daily Limit
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={5000}
                    value={settings.brevoDailyLimit}
                    onChange={(e) => {
                      const v = Math.max(0, Number(e.target.value) || 0);
                      setSettings({
                        ...settings,
                        brevoDailyLimit: v,
                        dailyLimit: v + settings.resendDailyLimit,
                      });
                    }}
                    className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-4 py-2.5 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 mb-1.5">
                    Resend Daily Limit
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={5000}
                    value={settings.resendDailyLimit}
                    onChange={(e) => {
                      const v = Math.max(0, Number(e.target.value) || 0);
                      setSettings({
                        ...settings,
                        resendDailyLimit: v,
                        dailyLimit: settings.brevoDailyLimit + v,
                      });
                    }}
                    className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-4 py-2.5 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 mb-1.5">
                    Sender Display Name
                  </label>
                  <input
                    type="text"
                    value={settings.senderName}
                    onChange={(e) =>
                      setSettings({ ...settings, senderName: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-4 py-2.5 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 mb-1.5">
                    Verified Domain Sender Email
                  </label>
                  <input
                    type="email"
                    value={settings.senderEmail}
                    onChange={(e) =>
                      setSettings({ ...settings, senderEmail: e.target.value })
                    }
                    placeholder="info@katelladigital.com"
                    className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-4 py-2.5 text-sm text-white"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 mb-1.5">
                    Company Reply-To Email
                  </label>
                  <input
                    type="email"
                    value={settings.replyToEmail}
                    onChange={(e) =>
                      setSettings({ ...settings, replyToEmail: e.target.value })
                    }
                    placeholder="info@katelladigital.com"
                    className="w-full rounded-xl border border-white/15 bg-[#060000]/65 px-4 py-2.5 text-sm text-white"
                  />
                </div>
              </div>

              <label className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] p-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoFollowUpEnabled}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      autoFollowUpEnabled: e.target.checked,
                    })
                  }
                  className="h-4 w-4 accent-[#E81C49]"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Enable 3-Step Automated Follow-ups
                  </p>
                  <p className="text-xs text-white/55">
                    Prioritizes due Follow-ups #1, #2, and #3 before sending new
                    initial emails.
                  </p>
                </div>
              </label>

              <button
                type="submit"
                disabled={savingSettings}
                className="kd-cta-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white cursor-pointer"
              >
                {savingSettings ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                Save Settings
              </button>
            </form>

            {/* Right API Integration Health Panel */}
            <div className="lg:col-span-5 kd-obsidian-card rounded-3xl p-6 sm:p-8 space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF8CA4]">
                Environment &amp; API Health
              </p>
              <h3 className="font-display font-bold text-lg text-white">
                Connected Services
              </h3>

              <div className="space-y-2.5 text-xs">
                {[
                  {
                    label: "Brevo API (Lists + 300/day Send)",
                    ok: Boolean(integrations?.brevoConfigured),
                    env: "BREVO_API_KEY",
                  },
                  {
                    label: "Resend API (100/day + Lead Alerts)",
                    ok: Boolean(integrations?.resendConfigured),
                    env: "RESEND_API_KEY",
                  },
                  {
                    label: "Persistent Database (Upstash Redis)",
                    ok: integrations?.storageMode === "upstash-redis",
                    env: "UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN",
                  },
                  {
                    label: "Daily Auto Follow-up Cron",
                    ok: Boolean(integrations?.cronSecretConfigured),
                    env: "CRON_SECRET",
                  },
                  {
                    label: "Custom Admin Password",
                    ok: Boolean(integrations?.customAdminPassword),
                    env: "ADMIN_PASSWORD, ADMIN_SESSION_SECRET",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/12 bg-[#060000]/45 p-3.5 flex items-start justify-between gap-3"
                  >
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="font-mono text-[10px] text-white/45 mt-0.5">
                        {item.env}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                        item.ok
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-amber-500/20 text-amber-200"
                      }`}
                    >
                      {item.ok ? "Live" : "Pending"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bulk CSV Import Modal */}
      {showCsvModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowCsvModal(false)}
        >
          <div
            className="kd-obsidian-card kd-keep-dark w-full max-w-xl rounded-3xl p-6 sm:p-7 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg text-white">
                Bulk CSV Import Prospects
              </h3>
              <button
                type="button"
                onClick={() => setShowCsvModal(false)}
                className="text-white/60 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-white/65 leading-relaxed">
              Paste CSV rows with columns:{" "}
              <code className="text-[#FF8CA4]">
                email,first_name,business_name,business_type,problem,city
              </code>
            </p>
            <textarea
              rows={8}
              value={csvText}
              onChange={(e) => setCsvText(e.target.value)}
              placeholder={`email,first_name,business_name,business_type,problem,city\nowner@apexdental.com,Sarah,Apex Dental,Dental Clinic,"slow mobile site and missing Google Maps top 3",Anaheim CA`}
              className="w-full rounded-xl border border-white/15 bg-[#060000]/70 p-3.5 font-mono text-xs text-white placeholder:text-white/30 focus:border-[#E81C49] focus:outline-none"
            />
            <div className="flex justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowCsvModal(false)}
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/75 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => void handleImportCsv()}
                className="kd-cta-glow rounded-full px-5 py-2 text-xs font-bold text-white cursor-pointer"
              >
                Import Prospects
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Prospect Email Preview Modal */}
      {modalPreview && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setModalPreview(null)}
        >
          <div
            className="kd-obsidian-card kd-keep-dark w-full max-w-2xl rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-white/12 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF8CA4]">
                  {modalPreview.title}
                </p>
                <p className="text-sm font-bold text-white truncate">
                  {modalPreview.subject}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalPreview(null)}
                className="text-white/65 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe
              title="Prospect Email Preview"
              srcDoc={modalPreview.html}
              sandbox=""
              className="w-full h-[520px] border-0 bg-[#f6eef0]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
