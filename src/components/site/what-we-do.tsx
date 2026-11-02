"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section
      id="about"
      className="relative bg-white text-black py-16 sm:py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10">
        {/* Section label */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 md:mb-20">
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-black/50">
            ( 03 ) — Approach
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-black/50 hidden sm:block">
            Monochrome by design
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Visual image — left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/5] w-full overflow-hidden bg-neutral-100 group">
              <img
                src="https://picsum.photos/seed/cuttingedger-studio/1200/1500?grayscale"
                alt="Creative studio workspace in monochrome"
                className="h-full w-full object-cover grayscale transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.backgroundColor = "#1a1a1a";
                }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
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
              className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-[12vw] sm:text-[8vw] lg:text-[5.5vw]"
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
              className="mt-6 sm:mt-10 md:mt-12 text-base sm:text-lg md:text-xl text-black/70 leading-relaxed max-w-2xl"
            >
              We build brands, films, and digital products with the discipline
              of a Swiss typographer and the patience of a film editor. Every
              decision is reduced to its essentials — light, contrast, rhythm —
              until only the idea remains.
            </motion.p>

            {/* Stats */}
            <div className="mt-10 sm:mt-14 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-6 border-t border-black/10 pt-8 sm:pt-10">
              {[
                { n: "08", l: "Years of practice" },
                { n: "120+", l: "Projects shipped" },
                { n: "24", l: "Industry awards" },
                { n: "∞", l: "Cups of black coffee" },
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
                  <div className="font-display font-light text-4xl sm:text-5xl md:text-6xl tracking-tight">
                    {s.n}
                  </div>
                  <div className="mt-2 text-[11px] sm:text-xs md:text-sm text-black/60 uppercase tracking-wide">
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
              className="mt-10 sm:mt-12 md:mt-16 group inline-flex items-center gap-3 text-sm sm:text-base font-medium border-b border-black pb-1 hover:gap-5 transition-all duration-300"
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
