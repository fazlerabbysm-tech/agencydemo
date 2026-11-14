"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ShieldCheck } from "lucide-react";

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

  // Math captcha
  const [mathQ, setMathQ] = useState({ a: 0, b: 0, answer: "" });
  const [mathVerified, setMathVerified] = useState(false);

  // Turnstile
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      // Generate math question
      const a = Math.floor(Math.random() * 9) + 1;
      const b = Math.floor(Math.random() * 9) + 1;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMathQ({ a, b, answer: "" });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMathVerified(false);

      // Load Turnstile script
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

  // Render Turnstile widget
  useEffect(() => {
    if (open && turnstileLoaded && typeof window !== "undefined") {
      // @ts-ignore
      if (window.turnstile) {
        setTimeout(() => {
          const container = document.getElementById("cf-turnstile-container");
          if (container) {
            container.innerHTML = ""; // Clear previous widget
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

  // Verify math answer
  const checkMath = (val: string) => {
    const num = parseInt(val, 10);
    setMathQ((prev) => ({ ...prev, answer: val }));
    setMathVerified(num === mathQ.a + mathQ.b);
  };

  const canSubmit =
    form.name.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-[#1a0a0e] border border-[#3a1518] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#3a1518]">
              <div>
                <h2 className="font-display font-bold text-xl text-white">Get in touch</h2>
                <p className="text-sm text-white/50 mt-1">We'll respond within 24 hours</p>
              </div>
              <button
                onClick={onClose}
                className="h-10 w-10 rounded-full border border-[#3a1518] flex items-center justify-center text-white/60 hover:bg-[#C71F42] hover:text-white hover:border-[#C71F42] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            {status === "success" ? (
              <div className="p-8 text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-[#C71F42]/20 flex items-center justify-center mb-4">
                  <ShieldCheck size={32} className="text-[#C71F42]" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Message sent!</h3>
                <p className="text-white/60 text-sm">We've sent a confirmation to {form.email}. We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="text-xs font-mono tracking-[0.15em] uppercase text-white/50 mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#060000] border border-[#3a1518] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C71F42] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-mono tracking-[0.15em] uppercase text-white/50 mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#060000] border border-[#3a1518] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C71F42] focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-mono tracking-[0.15em] uppercase text-white/50 mb-2 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#060000] border border-[#3a1518] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C71F42] focus:outline-none transition-colors"
                    placeholder="+1 (714) 555-0100"
                  />
                </div>

                {/* Service dropdown */}
                <div>
                  <label className="text-xs font-mono tracking-[0.15em] uppercase text-white/50 mb-2 block">
                    Service *
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#060000] border border-[#3a1518] rounded-lg px-4 py-3 text-white text-sm focus:border-[#C71F42] focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23C71F42' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                    }}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#1a0a0e]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Details */}
                <div>
                  <label className="text-xs font-mono tracking-[0.15em] uppercase text-white/50 mb-2 block">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className="w-full bg-[#060000] border border-[#3a1518] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C71F42] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                </div>

                {/* Math verification */}
                <div className="pt-2">
                  <label className="text-xs font-mono tracking-[0.15em] uppercase text-white/50 mb-2 block">
                    Human Verification *
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-[#060000] border border-[#3a1518] rounded-lg px-4 py-3">
                      <span className="text-white text-sm font-mono">
                        {mathQ.a} + {mathQ.b} =
                      </span>
                      <input
                        type="number"
                        value={mathQ.answer}
                        onChange={(e) => checkMath(e.target.value)}
                        className="w-16 bg-transparent border-b border-[#3a1518] text-white text-sm text-center focus:border-[#C71F42] focus:outline-none"
                        placeholder="?"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const a = Math.floor(Math.random() * 9) + 1;
                        const b = Math.floor(Math.random() * 9) + 1;
                        setMathQ({ a, b, answer: "" });
                        setMathVerified(false);
                      }}
                      className="text-xs text-white/40 hover:text-[#C71F42] transition-colors uppercase tracking-wide"
                    >
                      Refresh
                    </button>
                    {mathVerified && (
                      <ShieldCheck size={18} className="text-[#C71F42]" />
                    )}
                  </div>
                  <p className="text-[10px] text-white/30 mt-1.5">
                    Solve the math puzzle to verify you are human
                  </p>
                </div>

                {/* Cloudflare Turnstile */}
                <div className="pt-2">
                  <label className="text-xs font-mono tracking-[0.15em] uppercase text-white/50 mb-2 block">
                    Security Check
                  </label>
                  <div
                    id="cf-turnstile-container"
                    className="min-h-[65px]"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-sm text-red-400">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!canSubmit || status === "submitting"}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-medium text-sm tracking-wide uppercase transition-all duration-300 ${
                    canSubmit && status !== "submitting"
                      ? "bg-[#C71F42] text-white hover:bg-[#9A0E28]"
                      : "bg-[#3a1518] text-white/30 cursor-not-allowed"
                  }`}
                >
                  {status === "submitting" ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send
                      <Send size={14} />
                    </>
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
