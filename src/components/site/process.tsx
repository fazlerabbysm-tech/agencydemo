"use client";

import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "Listen",
    desc: "We start with a long conversation. Your history, your appetite for risk, the audience you're really trying to reach — no briefs, just questions, until we hear the truth underneath.",
    duration: "Week 1",
  },
  {
    no: "02",
    title: "Define",
    desc: "We turn the conversation into a single page: the problem, the audience, the one idea everything else will orbit. You sign it. We don't move until you do.",
    duration: "Week 1 — 2",
  },
  {
    no: "03",
    title: "Design",
    desc: "Three directions, never more. We present them in person, defend the choices, and listen for which one keeps you up at night. That's the one we keep.",
    duration: "Week 3 — 6",
  },
  {
    no: "04",
    title: "Deliver",
    desc: "Production, files, guidelines, training. We hand over a system your team can run with — and we stay on call for the first ninety days after launch.",
    duration: "Week 7 — 10",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative bg-white text-black py-24 md:py-36 border-t border-black/10"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 md:mb-20">
          <span className="font-mono text-[11px] md:text-xs tracking-[0.25em] uppercase text-black/50">
            ( 06 ) — Method
          </span>
          <span className="font-mono text-[11px] md:text-xs tracking-[0.25em] uppercase text-black/50 hidden sm:block">
            10 weeks · 4 phases
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-[-0.02em] leading-[0.92] text-[10vw] sm:text-[8vw] lg:text-[6.5vw] mb-14 md:mb-20"
        >
          Our process,
          <br />
          <span className="font-light italic">unhurried.</span>
        </motion.h2>

        {/* Single-line horizontal timeline */}
        <div className="relative">
          {/* Horizontal connecting line — hidden on mobile (stacks vertically) */}
          <div className="hidden md:block absolute top-[3.25rem] left-0 right-0 h-px bg-black/15" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 lg:gap-10">
            {steps.map((s, i) => (
              <ProcessStep key={s.no} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative md:flex md:flex-col md:h-full"
    >
      {/* Top row: node + duration */}
      <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-0 md:mb-7">
        {/* Node dot — sits on the horizontal line on desktop */}
        <div className="hidden md:block relative">
          <div className="relative h-8 flex items-center">
            <span className="h-3 w-3 rounded-full bg-black ring-4 ring-white relative z-10" />
          </div>
        </div>

        {/* Mobile: number + dot inline */}
        <div className="md:hidden flex items-center gap-3 mb-2">
          <span className="h-3 w-3 rounded-full bg-black" />
          <span className="font-display font-light text-3xl leading-none tracking-tighter text-black/90">
            {step.no}
          </span>
        </div>

        {/* Duration chip */}
        <span className="inline-block font-mono text-[11px] tracking-[0.25em] uppercase text-black/50 md:mt-0">
          {step.duration}
        </span>
      </div>

      {/* Big number — desktop only, hidden on mobile (shown above) */}
      <div className="hidden md:block font-display font-light text-7xl lg:text-8xl leading-none tracking-tighter text-black/90 mb-5 mt-2">
        {step.no}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-none">
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-4 md:mt-5 text-sm md:text-[15px] text-black/70 leading-relaxed">
        {step.desc}
      </p>

      {/* Bottom border accent for visual rhythm */}
      <div className="hidden md:block mt-6 h-px w-12 bg-black/30" />
    </motion.div>
  );
}
