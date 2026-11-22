"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function FinalCTA() {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <section
      id="contact"
      data-shape="rocket"
      data-ax="0.76"
      data-ay="0.52"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl overflow-hidden border border-white/20 bg-[#060000]/75 backdrop-blur-2xl shadow-[0_28px_90px_rgba(0,0,0,0.7)]"
        >
          {/* Bespoke crimson light-ribbon backdrop */}
          <img
            src="/images/home-cta-backdrop.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060000]/92 via-[#150207]/78 to-[#2F000A]/55" />

          <div className="relative z-10 px-7 sm:px-12 lg:px-16 py-14 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left high-impact headline & irresistible CTA */}
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-4">
                Let&apos;s grow together
              </p>
              <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[1.04] text-3xl sm:text-5xl lg:text-[54px] text-white">
                Ready to grow your business? Let&apos;s talk
                <span className="text-[#FF3363]">.</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">
                Tell us your revenue goals — we&apos;ll bring the marketing
                strategy, SEO &amp; AI search systems, paid campaigns, and
                conversion engineering to make them happen.
              </p>

              {/* High-contrast magnetic CTA row */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={openContact}
                  className="kd-cta-glow group inline-flex items-center gap-3 rounded-full text-white px-8 py-4 text-sm sm:text-base font-bold tracking-tight cursor-pointer"
                >
                  <span>Start Your Project Now</span>
                  <span className="h-7 w-7 rounded-full bg-white text-[#C71F42] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 shadow-sm">
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                  </span>
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.08] hover:bg-white/[0.16] hover:border-white/45 text-white px-6 py-4 text-sm font-semibold transition-all duration-200 backdrop-blur-xl"
                >
                  Book Free Strategy Call
                </Link>
              </div>

              {/* Friction-removing micro-trust guarantees */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-white/70">
                {[
                  "Free 20-min growth audit",
                  "Reply within 24 hours",
                  "No long-term lock-in",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-[#FF3363]/25 border border-[#FF3363]/60 flex items-center justify-center text-[#FF6B8A]">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right frosted glass instant-action summary card */}
            <div className="lg:col-span-5">
              <div className="kd-glass-tile rounded-2xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/12 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                      Fast-track response
                    </p>
                    <p className="font-display font-bold text-lg text-white mt-0.5">
                      Talk directly with a strategist
                    </p>
                  </div>
                  <span className="h-10 w-10 rounded-xl bg-[#E81C49]/25 border border-[#FF4D73]/40 flex items-center justify-center text-[#FF6B8A] shrink-0">
                    <Clock className="h-5 w-5" />
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/25 px-4 py-3 text-white/90 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-[#FF4D73] shrink-0" />
                    <span className="truncate font-medium">
                      {siteConfig.email}
                    </span>
                  </a>
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/25 px-4 py-3 text-white/90 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-[#FF4D73] shrink-0" />
                    <span className="font-medium">{siteConfig.phone}</span>
                  </a>
                </div>

                <p className="text-xs text-white/55 leading-relaxed">
                  {siteConfig.address.short} · {siteConfig.hours}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
