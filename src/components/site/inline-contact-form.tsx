"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Building2,
  Calendar,
  DollarSign,
  ShieldCheck,
  Loader2,
  User,
  Mail,
  Phone,
  MessageSquare,
  Check,
} from "lucide-react";
import ServiceSelect from "@/components/site/service-select";

interface InlineContactFormProps {
  defaultService?: string;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  showQualificationFields?: boolean;
}

const BUDGET_OPTIONS = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $40k",
  "$40k+",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "This quarter",
  "Next 6 months",
  "Just exploring",
];

export default function InlineContactForm({
  defaultService = "",
  heading = "Tell us about your project",
  subheading = "We usually reply within one business day with a clear plan and next steps.",
  ctaLabel = "Send message",
  showQualificationFields = false,
}: InlineContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    service: defaultService || "",
    details: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [mathQ, setMathQ] = useState({ a: 3, b: 4, answer: "" });
  const [mathVerified, setMathVerified] = useState(false);

  useEffect(() => {
    const a = Math.floor(Math.random() * 8) + 2;
    const b = Math.floor(Math.random() * 8) + 1;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMathQ({ a, b, answer: "" });
  }, []);

  const checkMath = (val: string) => {
    const num = parseInt(val, 10);
    setMathQ((prev) => ({ ...prev, answer: val }));
    setMathVerified(num === mathQ.a + mathQ.b);
  };

  const canSubmit =
    Boolean(form.name.trim()) &&
    Boolean(form.email.trim()) &&
    Boolean(form.service) &&
    Boolean(form.details.trim()) &&
    mathVerified;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setErrorMsg("");

    const metaLines: string[] = [];
    if (form.company.trim()) metaLines.push(`Company: ${form.company.trim()}`);
    if (form.budget) metaLines.push(`Budget Range: ${form.budget}`);
    if (form.timeline) metaLines.push(`Timeline: ${form.timeline}`);
    const enrichedDetails = metaLines.length
      ? `${metaLines.join(" | ")}\n\n${form.details.trim()}`
      : form.details.trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone.trim() || "Not provided",
          service: form.service,
          details: enrichedDetails,
          mathAnswer: mathQ.answer,
          mathExpected: mathQ.a + mathQ.b,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          budget: "",
          timeline: "",
          service: defaultService || "",
          details: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const fieldShell =
    "kd-field-shell flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#060000]/60 backdrop-blur-xl px-4 py-3 transition-all focus-within:border-[#E81C49] focus-within:bg-[#140308]/80 focus-within:shadow-[0_0_0_3px_rgba(232,28,73,0.16)]";
  const labelClass =
    "block font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 mb-1.5";

  return (
    <div className="kd-obsidian-card rounded-3xl overflow-visible relative">
      {/* Branded crimson satin header band */}
      <div
        className="kd-keep-dark rounded-t-3xl px-6 sm:px-8 lg:px-10 pt-7 pb-6 border-b border-white/12"
        style={{
          background:
            "linear-gradient(120deg, rgba(6,0,0,0.88) 0%, rgba(47,0,10,0.8) 45%, rgba(154,14,40,0.58) 82%, rgba(199,31,66,0.5) 100%)",
        }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF8CA4] mb-1.5">
          Direct Inquiry · 24h Response
        </p>
        <h3 className="font-display font-bold text-2xl sm:text-[26px] text-white tracking-tight">
          {heading}
        </h3>
        <p className="mt-1.5 text-sm text-white/70 leading-relaxed">
          {subheading}
        </p>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        {status === "success" ? (
          <div className="kd-glass-tile rounded-2xl p-8 text-center space-y-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-gradient-to-br from-[#FF3363] to-[#9A0E28] flex items-center justify-center shadow-[0_12px_36px_rgba(232,28,73,0.45)]">
              <Check className="h-7 w-7 text-white stroke-[2.5]" />
            </div>
            <h4 className="font-display font-bold text-2xl text-white">
              Thanks — message sent!
            </h4>
            <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              We&apos;ve received your inquiry and sent a confirmation email. A
              senior strategist will follow up within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setMathVerified(false);
                setMathQ((prev) => ({ ...prev, answer: "" }));
              }}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.06] hover:bg-white/[0.14] px-5 py-2 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <div className={fieldShell}>
                  <User className="h-4 w-4 text-white/40 shrink-0" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Alex Carter"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Work Email *</label>
                <div className={fieldShell}>
                  <Mail className="h-4 w-4 text-white/40 shrink-0" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Phone{" "}
                  <span className="normal-case text-white/35">(optional)</span>
                </label>
                <div className={fieldShell}>
                  <Phone className="h-4 w-4 text-white/40 shrink-0" />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+1 (714) 555-0194"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Service *</label>
                <ServiceSelect
                  value={form.service}
                  onChange={(val) => setForm({ ...form, service: val })}
                />
              </div>
            </div>

            {showQualificationFields && (
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>
                    Company / Website{" "}
                    <span className="normal-case text-white/35">(optional)</span>
                  </label>
                  <div className={fieldShell}>
                    <Building2 className="h-4 w-4 text-white/40 shrink-0" />
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder="Acme Corp · acme.com"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      <span className="inline-flex items-center gap-1">
                        <DollarSign className="h-3 w-3 text-[#FF4D73]" />
                        Budget Range
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {BUDGET_OPTIONS.map((opt) => {
                        const active = form.budget === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() =>
                              setForm({
                                ...form,
                                budget: active ? "" : opt,
                              })
                            }
                            className={`rounded-lg px-2.5 py-1.5 text-[11px] font-semibold border transition-all cursor-pointer ${
                              active
                                ? "bg-[#E81C49] border-[#FF6B8A] text-white"
                                : "border-white/15 bg-[#060000]/55 text-white/75 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-[#FF4D73]" />
                        How Soon?
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {TIMELINE_OPTIONS.map((opt) => {
                        const active = form.timeline === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() =>
                              setForm({
                                ...form,
                                timeline: active ? "" : opt,
                              })
                            }
                            className={`rounded-lg px-2.5 py-1.5 text-[11px] font-semibold border transition-all cursor-pointer ${
                              active
                                ? "bg-[#E81C49] border-[#FF6B8A] text-white"
                                : "border-white/15 bg-[#060000]/55 text-white/75 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className={labelClass}>Project Goals &amp; Details *</label>
              <div className="kd-field-shell flex items-start gap-2.5 rounded-xl border border-white/15 bg-[#060000]/60 backdrop-blur-xl px-4 py-3 transition-all focus-within:border-[#E81C49] focus-within:bg-[#140308]/80 focus-within:shadow-[0_0_0_3px_rgba(232,28,73,0.16)]">
                <MessageSquare className="h-4 w-4 text-white/40 shrink-0 mt-0.5" />
                <textarea
                  required
                  rows={4}
                  value={form.details}
                  onChange={(e) =>
                    setForm({ ...form, details: e.target.value })
                  }
                  placeholder="Tell us about your business goals, website URL, timeline, and budget range..."
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <div
                className={`inline-flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 transition-colors ${
                  mathVerified
                    ? "border-[#E81C49]/60 bg-[#C71F42]/18"
                    : "border-white/15 bg-[#060000]/55"
                }`}
              >
                <span className="font-mono text-xs text-white/80">
                  Verify: {mathQ.a} + {mathQ.b} =
                </span>
                <input
                  type="number"
                  value={mathQ.answer}
                  onChange={(e) => checkMath(e.target.value)}
                  placeholder="?"
                  aria-label="Math verification answer"
                  className="w-12 bg-transparent border-b border-white/30 text-center text-sm font-semibold text-white focus:border-[#FF4D73] focus:outline-none"
                />
                {mathVerified && (
                  <ShieldCheck className="h-4 w-4 text-[#FF4D73]" />
                )}
              </div>

              <button
                type="submit"
                disabled={!canSubmit || status === "submitting"}
                className={`inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold tracking-tight transition-all ${
                  canSubmit && status !== "submitting"
                    ? "kd-cta-glow text-white cursor-pointer"
                    : "bg-white/10 border border-white/12 text-white/35 cursor-not-allowed"
                }`}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <span>{ctaLabel}</span>
                    <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                  </>
                )}
              </button>
            </div>

            {status === "error" && (
              <p className="rounded-xl border border-[#FF4D73]/40 bg-[#C71F42]/15 px-4 py-2.5 text-xs text-[#FF9AB0]">
                {errorMsg}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
