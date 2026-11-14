"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ShieldCheck, Loader2 } from "lucide-react";

const services = [
  "UI/UX Design",
  "Motion Graphics",
  "Digital Marketing",
  "Web & App Development",
  "Other / Not sure",
];

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [mathQ, setMathQ] = useState({ a: 0, b: 0, answer: "" });
  const [mathVerified, setMathVerified] = useState(false);

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      const a = Math.floor(Math.random() * 9) + 1;
      const b = Math.floor(Math.random() * 9) + 1;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMathQ({ a, b, answer: "" });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMathVerified(false);

      if (!document.getElementById("cf-turnstile-script")) {
        const script = document.createElement("script");
        script.id = "cf-turnstile-script";
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        script.onload = () => setTurnstileLoaded(true);
        document.head.appendChild(script);
      } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTurnstileLoaded(true);
      }
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus("idle");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setErrorMsg("");
    }
  }, [open]);

  useEffect(() => {
    if (open && turnstileLoaded && typeof window !== "undefined") {
      // @ts-ignore
      if (window.turnstile) {
        setTimeout(() => {
          const container = document.getElementById("cf-turnstile-container");
          if (container) {
            container.innerHTML = "";
            // @ts-ignore
            window.turnstile.render(container, {
              sitekey: "0x4AAAAAAGA9ybOPDfkQVn6e",
              callback: (token: string) => setTurnstileToken(token),
              "expired-callback": () => setTurnstileToken(null),
              "error-callback": () => setTurnstileToken(null),
              theme: "dark",
            });
          }
        }, 300);
      }
    }
  }, [open, turnstileLoaded]);

  const checkMath = (val: string) => {
    const num = parseInt(val, 10);
    setMathQ((prev) => ({ ...prev, answer: val }));
    setMathVerified(num === mathQ.a + mathQ.b);
  };

  // Phone is optional now
  const canSubmit =
    form.name.trim() &&
    form.email.trim() &&
    form.service &&
    form.details.trim() &&
    mathVerified &&
    turnstileToken;

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
          phone: form.phone || "Not provided",
          mathAnswer: mathQ.answer,
          mathExpected: mathQ.a + mathQ.b,
          turnstileToken,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setForm({ name: "", email: "", phone: "", service: "", details: "" });
        }, 2500);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const inputClass = "w-full bg-[#060000]/60 border border-[#3a1518] rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/25 focus:border-[#C71F42] focus:outline-none transition-colors";
  const labelClass = "text-[10px] font-mono tracking-[0.12em] uppercase text-white/40 mb-1.5 block";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{
            background: "rgba(6,0,0,0.7)",
            backdropFilter: "blur(8px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-2xl overflow-hidden"
            style={{
              background: "rgba(26,10,14,0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(199,31,66,0.25)",
              boxShadow: "0 8px 32px rgba(199,31,66,0.15), 0 0 60px rgba(199,31,66,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass top edge */}
            <div className="absolute inset-x-0 top-0 h-px" style={{
              background: "linear-gradient(to right, transparent, rgba(199,31,66,0.4), transparent)"
            }} />

            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <div>
                <h2 className="font-display font-bold text-lg text-white">Get in touch</h2>
                <p className="text-white/40 text-xs mt-0.5">We&apos;ll respond within 24 hours</p>
              </div>
              <button
                onClick={onClose}
                className="h-9 w-9 rounded-full flex items-center justify-center text-white/50 hover:bg-[#C71F42]/20 hover:text-[#C71F42] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {status === "success" ? (
              <div className="px-6 py-12 text-center">
                <div className="h-14 w-14 mx-auto rounded-full bg-[#C71F42]/20 flex items-center justify-center mb-4">
                  <ShieldCheck size={28} className="text-[#C71F42]" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-1">Message sent!</h3>
                <p className="text-white/50 text-sm">We&apos;ve sent a confirmation to your email. We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
                {/* Name — full width */}
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="John Doe" />
                </div>

                {/* Email — full width */}
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="john@company.com" />
                </div>

                {/* Phone — optional, full width */}
                <div>
                  <label className={labelClass}>Phone Number <span className="text-white/25 normal-case">(optional)</span></label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+1 (714) 555-0100" />
                </div>

                {/* Service — full width */}
                <div>
                  <label className={labelClass}>Service *</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputClass + " appearance-none cursor-pointer"}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23C71F42' stroke-width='1.5'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                    }}
                  >
                    <option value="" className="bg-[#1a0a0e]">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#1a0a0e]">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Details — full width */}
                <div>
                  <label className={labelClass}>Project Details *</label>
                  <textarea
                    required
                    rows={3}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className={inputClass + " resize-none"}
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                </div>

                {/* Math + Turnstile */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex items-center gap-2 bg-[#060000]/60 border border-[#3a1518] rounded-lg px-3 py-2">
                    <span className="text-white text-xs font-mono">{mathQ.a} + {mathQ.b} =</span>
                    <input type="number" value={mathQ.answer} onChange={(e) => checkMath(e.target.value)} className="w-12 bg-transparent border-b border-[#3a1518] text-white text-xs text-center focus:border-[#C71F42] focus:outline-none" placeholder="?" />
                    {mathVerified && <ShieldCheck size={14} className="text-[#C71F42]" />}
                  </div>
                  <div id="cf-turnstile-container" className="flex-1 min-h-[44px]" />
                </div>

                {status === "error" && <p className="text-xs text-red-400">{errorMsg}</p>}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!canSubmit || status === "submitting"}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-sm tracking-wide uppercase transition-all duration-300 ${
                    canSubmit && status !== "submitting"
                      ? "bg-[#C71F42] text-white hover:bg-[#9A0E28]"
                      : "bg-[#3a1518] text-white/25 cursor-not-allowed"
                  }`}
                >
                  {status === "submitting" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Send <Send size={14} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
