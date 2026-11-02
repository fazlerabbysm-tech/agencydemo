"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What kind of work do you take on?",
    a: "E-commerce catalog optimization, color standardization protocols, virtual production & CGI, and white-label production for agencies. We take on roughly twelve projects a year — small enough to know every client by name, large enough to staff a senior team on every brief.",
  },
  {
    q: "Why black and white only?",
    a: "Constraint is a feature. Working in monochrome forces every decision through the same filter — hierarchy, contrast, rhythm — and exposes anything that isn't earning its place. Colour, when we do reach for it, lands harder because of what came before.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Each service runs differently. E-commerce catalogs take 4–6 weeks per 100 SKUs. Color protocols take 2–3 weeks of audit + system design. CGI productions are scoped per scene. White-label runs on monthly retainer. You'll work directly with senior specialists in each — no account layer.",
  },
  {
    q: "How much does a project cost?",
    a: "Pricing scales with scope. Catalog optimization is per-SKU, color protocols are flat-rate, CGI is per-scene, and white-label is monthly retainer. We send a fixed proposal after the first call — no hourly billing, no surprises.",
  },
  {
    q: "Do you work with clients remotely?",
    a: "Yes. About half of our clients are remote. We meet in person for the kickoff and the final presentation, and work synchronously over video for everything in between. Our studio is in Berlin; clients are everywhere.",
  },
  {
    q: "Can we see a full case study before reaching out?",
    a: "Of course. The site shows a curated four. Write to us with a sentence about your project and we'll send a tailored deck — including work under NDA we can't publish here.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-black text-white py-20 sm:py-24 md:py-36 border-t border-white/10"
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
            <div className="border-t border-white/15">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-white/15">
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
                        className={`shrink-0 h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${
                          isOpen ? "bg-white text-black rotate-45" : ""
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

            {/* Contact nudge */}
            <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 md:p-8 bg-black text-white">
              <div>
                <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/50">
                  Didn&apos;t find it?
                </p>
                <p className="mt-2 font-display text-lg sm:text-xl md:text-2xl tracking-tight">
                  Write to us directly.
                </p>
              </div>
              <a
                href="mailto:hello@cuttingedger.co"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white hover:text-black px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              >
                hello@cuttingedger.co →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
