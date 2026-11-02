"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10">
        {/* Section label */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10">
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            ( 03 ) — Approach
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50 hidden sm:block">
            Monochrome by design
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Visual image — left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[5/6] w-full overflow-hidden bg-neutral-100 group">
              <img
                src="https://picsum.photos/seed/cuttingedger-studio-work/1200/1500"
                alt="Creative studio workspace"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.backgroundColor = "#1a1a1a";
                }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex items-end justify-between">
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/90 bg-black/40 backdrop-blur-sm px-2 sm:px-2.5 py-1">
                  Studio · 2026
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/90 bg-black/40 backdrop-blur-sm px-2 sm:px-2.5 py-1">
                  F2.8 / 1/250
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text content — right */}
          <div className="lg:col-span-7 lg:pl-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-[11vw] sm:text-[8vw] lg:text-[4.5vw] break-words"
            >
              What can we
              <br />
              <span className="italic font-light">do for you?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl"
            >
              We do four things, and we do them better than anyone: optimize
              e-commerce catalogs, standardize brand color across every surface,
              build virtual production worlds in CGI, and extend agency capacity
              under white-label. Four services, one studio, relentless precision.
            </motion.p>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8">
              {[
                { n: "04", l: "Core services" },
                { n: "120+", l: "Catalogs optimized" },
                { n: "24", l: "Color systems deployed" },
                { n: "60+", l: "CGI worlds built" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.05 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="font-display font-light text-3xl sm:text-4xl md:text-5xl tracking-tight">
                    {s.n}
                  </div>
                  <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-white/60 uppercase tracking-wide">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 sm:mt-10 md:mt-12 group inline-flex items-center gap-3 text-sm sm:text-base font-medium border-b border-white pb-1 hover:gap-5 transition-all duration-300"
            >
              Tell us about your project
              <ArrowUpRight
                size={18}
                className="sm:hidden transition-transform group-hover:rotate-45"
              />
              <ArrowUpRight
                size={20}
                className="hidden sm:block transition-transform group-hover:rotate-45"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
