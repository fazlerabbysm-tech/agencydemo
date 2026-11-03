"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What kind of work do you take on?",
    a: "We're a full-service marketing agency. Strategy, brand development, creative production, media planning and buying, digital marketing (SEO, SEM, social), content creation, and analytics. We work with brands across industries — from startups to enterprises.",
  },
  {
    q: "Why should we choose Katella Digital?",
    a: "We don't just execute tactics. We start with strategy, understand your business goals, and build integrated campaigns that drive measurable growth. Every campaign is tied to business outcomes — revenue, leads, market share — not vanity metrics.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "We start with a discovery call to understand your goals, market, and audience. Then we build a strategy and proposal within a week. Most campaigns launch within 2-4 weeks of approval. Retainer clients get ongoing strategy, creative, and optimization.",
  },
  {
    q: "How much does a project cost?",
    a: "Project-based work is scoped per engagement after the first call. Retainer relationships start at $5,000/month and scale with scope. We send a fixed proposal before any contract — no hourly billing, no surprises.",
  },
  {
    q: "Do you work with clients remotely?",
    a: "Yes. We work with clients across multiple regions. We meet in person for kickoff and major presentations, and work synchronously over video for everything in between. Our team is distributed but tightly coordinated.",
  },
  {
    q: "Can we see case studies before reaching out?",
    a: "Of course. Our portfolio shows selected work. Write to us with a sentence about your project and we'll send a tailored deck — including case studies under NDA we can't publish publicly.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-[#0a0a0a] text-white py-20 sm:py-24 md:py-36 border-t border-[#2a2a2a]"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 sm:mb-12 md:mb-20">
          <span className="font-mono text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            ( 06 ) — Questions
          </span>
          <span className="font-mono text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50 hidden sm:block">
            Still curious? Write to us.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold tracking-[-0.02em] leading-[0.92] text-[11vw] sm:text-[9vw] lg:text-[5.5vw] lg:sticky lg:top-28 break-words"
            >
              Frequent
              <br />
              <span className="font-light italic">questions.</span>
            </motion.h2>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-7">
            <div className="border-t border-[#2a2a2a]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-[#2a2a2a]">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full py-5 sm:py-6 md:py-7 flex items-center gap-3 sm:gap-5 md:gap-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-white/40 tabular-nums shrink-0">
                        0{i + 1}
                      </span>
                      <span className="flex-1 font-display font-medium text-base sm:text-lg md:text-2xl tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {f.q}
                      </span>
                      <span
                        className={`shrink-0 h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-[#2a2a2a] flex items-center justify-center transition-all duration-300 ${
                          isOpen ? "bg-[#46E2E2] text-black rotate-45" : ""
                        }`}
                      >
                        <Plus size={14} strokeWidth={2} className="sm:hidden" />
                        <Plus size={16} strokeWidth={2} className="hidden sm:block" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 sm:pb-7 md:pb-8 pl-8 sm:pl-10 md:pl-12 pr-9 sm:pr-12 md:pr-14 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Contact nudge — inverted (teal accent on dark section) */}
            <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 md:p-8 bg-[#46E2E2] text-black">
              <div>
                <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-black/60">
                  Didn&apos;t find it?
                </p>
                <p className="mt-2 font-display text-lg sm:text-xl md:text-2xl tracking-tight">
                  Write to us directly.
                </p>
              </div>
              <a
                href="mailto:hello@katelladigital.com"
                className="inline-flex items-center gap-2 border border-black/40 hover:bg-black hover:text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              >
                hello@katelladigital.com →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
