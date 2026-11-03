"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "9+", label: "Years of marketing experience" },
  { value: "100+", label: "Successful campaigns delivered" },
  { value: "250", label: "Trusting clients & partners" },
  { value: "3", label: "Major regions covered" },
];

const values = [
  { title: "Think First", desc: "Strategy before tactics. We dig into your data, market, and audience before we touch a single creative asset." },
  { title: "Digital by Nature", desc: "Born digital, built for the modern consumer journey. From search to social to immersive experiences." },
  { title: "Local Insight", desc: "Deep understanding of regional markets, culture, and consumer behavior — with global standards of execution." },
  { title: "True Partnership", desc: "We don't just deliver campaigns. We embed with your team, learn your business, and grow with you." },
  { title: "Results That Matter", desc: "Every campaign is tied to business outcomes — revenue, leads, market share — not vanity metrics." },
  { title: "Full-Service", desc: "Strategy, creative, media, digital, content, and analytics — all under one roof, all working together." },
];

export default function StatsValues() {
  return (
    <>
      {/* ============ STATS ============ */}
      <section className="relative bg-[#0a0a0a] py-16 md:py-24 border-t border-[#2a2a2a]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center md:text-left border-l-2 border-[#46E2E2] pl-4 md:pl-6"
              >
                <div className="font-display font-bold text-5xl md:text-7xl tracking-tight text-[#46E2E2]">
                  {s.value}
                </div>
                <div className="mt-2 text-sm md:text-base text-white/60 leading-relaxed">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE BELIEVE ============ */}
      <section className="relative bg-[#111111] py-20 md:py-32 border-t border-[#2a2a2a] overflow-hidden">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-10 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#46E2E2]"
          >
            What we believe
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display font-bold tracking-[-0.02em] leading-[1.1] text-2xl md:text-4xl lg:text-5xl text-white/90"
          >
            We don&apos;t just launch campaigns. We build the gravity that
            pulls customers toward your brand — and{" "}
            <span className="text-[#46E2E2]">keeps them in orbit.</span>
          </motion.h2>
        </div>
      </section>

      {/* ============ OUR VALUES ============ */}
      <section className="relative bg-[#0a0a0a] py-16 md:py-24 border-t border-[#2a2a2a]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#46E2E2]"
          >
            Our Values
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-4xl md:text-6xl lg:text-7xl text-white mb-12 md:mb-16"
          >
            What drives
            <br />
            <span className="font-light italic text-[#46E2E2]">us forward.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 md:p-8 border border-[#2a2a2a] rounded-lg hover:border-[#46E2E2] transition-all duration-300"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-[#46E2E2]/60">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display font-bold text-xl md:text-2xl tracking-tight text-white group-hover:text-[#46E2E2] transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
