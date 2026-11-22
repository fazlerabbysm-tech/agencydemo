"use client";

import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "Listen",
    desc: "We study your market, audit your competitors, and map how your ideal buyers research and decide.",
  },
  {
    no: "02",
    title: "Think",
    desc: "We craft a focused marketing strategy, channel plan, and messaging architecture backed by real data.",
  },
  {
    no: "03",
    title: "Design",
    desc: "We design scroll-stopping visuals, brand systems, and campaign creative that command attention.",
  },
  {
    no: "04",
    title: "Build",
    desc: "We engineer sub-second websites, landing pages, tracking pipelines, and conversion funnels built to sell.",
  },
  {
    no: "05",
    title: "Launch",
    desc: "We deploy integrated campaigns across search, social, AI discovery, and regional media for maximum reach.",
  },
  {
    no: "06",
    title: "Grow",
    desc: "We measure pipeline attribution, cut wasted spend, iterate creative weekly, and scale what drives revenue.",
  },
];

export default function HomeProcess() {
  return (
    <section
      id="process"
      data-shape="orbit"
      data-ax="0.22"
      data-ay="0.50"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="max-w-3xl mb-12 sm:mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
            How we think
          </p>
          <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.06] text-3xl sm:text-4xl lg:text-[46px] text-white">
            A clear path from strategy to business growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs tracking-[0.18em] text-[#FF4D73]">
                    {step.no}
                  </span>
                  <span className="h-px flex-1 mx-4 bg-white/10" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2.5 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
