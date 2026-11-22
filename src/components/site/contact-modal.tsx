"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ShieldCheck,
  Loader2,
  User,
  Mail,
  Phone,
  MessageSquare,
  Check,
} from "lucide-react";
import ServiceSelect from "@/components/site/service-select";

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
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [mathQ, setMathQ] = useState({ a: 3, b: 5, answer: "" });
  const [mathVerified, setMathVerified] = useState(false);

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      const a = Math.floor(Math.random() * 8) + 2;
      const b = Math.floor(Math.random() * 8) + 1;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMathQ({ a, b, answer: "" });
      setMathVerified(false);
      setTurnstileToken(null);

      if (!document.getElementById("cf-turnstile-script")) {
        const script = document.createElement("script");
        script.id = "cf-turnstile-script";
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        script.onload = () => setTurnstileLoaded(true);
        document.head.appendChild(script);
      } else {
        setTurnstileLoaded(true);
      }
    } else {
      setStatus("idle");
      setErrorMsg("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open && turnstileLoaded && typeof window !== "undefined") {
      // @ts-ignore
      if (window.turnstile) {
        const t = setTimeout(() => {
          const container = document.getElementById("cf-turnstile-container");
          if (container) {
            container.innerHTML = "";
            // @ts-ignore
            window.turnstile.render(container, {
              sitekey:
                process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                "0x4AAAAAAGA9ybOPDfkQVn6e",
              callback: (token: string) => setTurnstileToken(token),
              "expired-callback": () => setTurnstileToken(null),
              "error-callback": () => setTurnstileToken(null),
              theme: "dark",
            });
          }
        }, 250);
        return () => clearTimeout(t);
      }
    }
  }, [open, turnstileLoaded]);

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
          ...(turnstileToken ? { turnstileToken } : {}),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setForm({ name: "", email: "", phone: "", service: "", details: "" });
        }, 2600);
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
    "flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#060000]/60 backdrop-blur-xl px-3.5 py-2.5 transition-all focus-within:border-[#E81C49] focus-within:bg-[#140308]/80 focus-within:shadow-[0_0_0_3px_rgba(232,28,73,0.16)]";
  const labelClass =
    "block font-mono text-[10px] tracking-[0.18em] uppercase text-white/55 mb-1.5";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 overflow-y-auto"
          style={{
            background: "rgba(6, 0, 0, 0.78)",
            backdropFilter: "blur(12px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 14 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 12 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl rounded-3xl overflow-visible border border-white/18 shadow-[0_32px_90px_rgba(0,0,0,0.85),0_0_60px_rgba(199,31,66,0.22)]"
            style={{
              background:
                "linear-gradient(145deg, rgba(24, 4, 10, 0.94) 0%, rgba(8, 1, 3, 0.96) 100%)",
              backdropFilter: "blur(24px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Branded crimson gradient header strip */}
            <div
              className="relative rounded-t-3xl px-6 sm:px-7 pt-6 pb-5 border-b border-white/12 overflow-hidden"
              style={{
                background:
                  "linear-gradient(120deg, rgba(6,0,0,0.92) 0%, rgba(47,0,10,0.88) 42%, rgba(154,14,40,0.72) 78%, rgba(199,31,66,0.65) 100%)",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF8CA4]">
                    Katella Digital · Free Strategy Review
                  </p>
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight mt-1">
                    Start your growth project
                    <span className="text-[#FF4D73]">.</span>
                  </h2>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">
                    A senior strategist replies personally within 24 hours.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close contact modal"
                  className="h-9 w-9 shrink-0 rounded-full border border-white/20 bg-[#060000]/45 flex items-center justify-center text-white/75 hover:bg-white hover:text-[#060000] transition-colors cursor-pointer"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {status === "success" ? (
              <div className="px-7 py-14 text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-[#FF3363] to-[#9A0E28] flex items-center justify-center shadow-[0_12px_36px_rgba(232,28,73,0.5)]">
                  <Check size={30} className="text-white stroke-[2.5]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Message received!
                </h3>
                <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
                  We&apos;ve sent a confirmation email and assigned your inquiry
                  to a senior strategist. Expect a reply within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="px-6 sm:px-7 py-6 space-y-4"
              >
                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <div className={fieldShell}>
                      <User className="h-4 w-4 text-white/40 shrink-0" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
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

                {/* Phone & Custom Service Dropdown row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      Phone{" "}
                      <span className="text-white/35 normal-case">
                        (optional)
                      </span>
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

                {/* Project Details */}
                <div>
                  <label className={labelClass}>Project Details *</label>
                  <div className="flex items-start gap-2.5 rounded-xl border border-white/15 bg-[#060000]/60 backdrop-blur-xl px-3.5 py-3 transition-all focus-within:border-[#E81C49] focus-within:bg-[#140308]/80 focus-within:shadow-[0_0_0_3px_rgba(232,28,73,0.16)]">
                    <MessageSquare className="h-4 w-4 text-white/40 shrink-0 mt-0.5" />
                    <textarea
                      required
                      rows={3}
                      value={form.details}
                      onChange={(e) =>
                        setForm({ ...form, details: e.target.value })
                      }
                      placeholder="Share your website URL, growth targets, and ideal timeline..."
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Verification row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div
                    className={`inline-flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 transition-colors ${
                      mathVerified
                        ? "border-[#E81C49]/60 bg-[#C71F42]/18"
                        : "border-white/15 bg-[#060000]/60"
                    }`}
                  >
                    <span className="font-mono text-xs text-white/80">
                      Quick check: {mathQ.a} + {mathQ.b} =
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
                  <div id="cf-turnstile-container" className="min-h-[20px]" />
                </div>

                {status === "error" && (
                  <p className="rounded-xl border border-[#FF4D73]/40 bg-[#C71F42]/15 px-3.5 py-2 text-xs text-[#FF9AB0]">
                    {errorMsg}
                  </p>
                )}

                {/* Luminous Crimson Branded Submit Button */}
                <button
                  type="submit"
                  disabled={!canSubmit || status === "submitting"}
                  className={`w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full font-bold text-sm tracking-tight transition-all duration-200 ${
                    canSubmit && status !== "submitting"
                      ? "kd-cta-glow text-white cursor-pointer"
                      : "bg-white/10 border border-white/12 text-white/35 cursor-not-allowed"
                  }`}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending your inquiry...
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry &amp; Get Free Audit</span>
                      <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                        <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                      </span>
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
