"use client";

import { useState, useEffect } from "react";
import { Send, ShieldCheck, Loader2 } from "lucide-react";

const serviceOptions = [
  "Digital Marketing & SEO",
  "AI Search (GEO)",
  "Google Ads & Performance Marketing",
  "Brand Strategy & Identity",
  "Social Media Management",
  "Web & App Development",
  "UI/UX Design",
  "Motion Graphics & Video",
  "CRM & Marketing Automation",
  "Advertising Campaigns",
  "Other / Not sure",
];

interface InlineContactFormProps {
  defaultService?: string;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
}

export default function InlineContactForm({
  defaultService = "",
  heading = "Tell us about your project",
  subheading = "We usually reply within one business day with a clear plan and next steps.",
  ctaLabel = "Send message",
}: InlineContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: form.phone.trim() || "Not provided",
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

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-[#060000]/55 backdrop-blur-md px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#E81C49] focus:outline-none transition-colors";
  const labelClass =
    "block font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 mb-1.5";

  return (
    <div className="kd-obsidian-card rounded-3xl p-6 sm:p-8 lg:p-10">
      <div className="mb-6">
        <h3 className="font-display font-bold text-2xl text-white tracking-tight">
          {heading}
        </h3>
        <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
          {subheading}
        </p>
      </div>

      {status === "success" ? (
        <div className="kd-glass-tile rounded-2xl p-8 text-center space-y-3">
          <div className="h-12 w-12 mx-auto rounded-full bg-[#C71F42]/20 border border-[#C71F42]/45 flex items-center justify-center text-[#FF4D73]">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h4 className="font-display font-bold text-xl text-white">
            Thanks — message sent!
          </h4>
          <p className="text-sm text-white/70 max-w-md mx-auto">
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
            className="mt-2 inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 hover:text-white cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Full Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Alex Carter"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Work Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="alex@company.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>
                Phone <span className="normal-case text-white/35">(optional)</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+1 (714) 555-0194"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Service *</label>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" className="bg-[#0d0205]">
                  Select a service...
                </option>
                {defaultService && !serviceOptions.includes(defaultService) && (
                  <option value={defaultService} className="bg-[#0d0205]">
                    {defaultService}
                  </option>
                )}
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0d0205]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Project Goals &amp; Details *</label>
            <textarea
              required
              rows={4}
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              placeholder="Tell us about your business goals, target market, timeline, and budget range..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#060000]/50 px-3.5 py-2.5">
              <span className="font-mono text-xs text-white/80">
                Verify: {mathQ.a} + {mathQ.b} =
              </span>
              <input
                type="number"
                value={mathQ.answer}
                onChange={(e) => checkMath(e.target.value)}
                placeholder="?"
                aria-label="Math verification answer"
                className="w-12 bg-transparent border-b border-white/25 text-center text-sm text-white focus:border-[#E81C49] focus:outline-none"
              />
              {mathVerified && (
                <ShieldCheck className="h-4 w-4 text-[#FF4D73]" />
              )}
            </div>

            <button
              type="submit"
              disabled={!canSubmit || status === "submitting"}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                canSubmit && status !== "submitting"
                  ? "bg-white text-[#060000] hover:bg-white/90 cursor-pointer"
                  : "bg-white/15 text-white/40 cursor-not-allowed"
              }`}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  {ctaLabel}
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </div>

          {status === "error" && (
            <p className="text-xs text-[#FF6B8A]">{errorMsg}</p>
          )}
        </form>
      )}
    </div>
  );
}
