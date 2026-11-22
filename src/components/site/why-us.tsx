"use client";

import { motion } from "framer-motion";
import { Compass, Flame, TrendingUp } from "lucide-react";

const pillars = [
  {
    no: "01",
    icon: Compass,
    title: "Market-first strategy",
    desc: "We don't launch on guesswork. Every engagement starts with deep buyer research, competitor benchmarking, and positioning clarity grounded in real demand.",
  },
  {
    no: "02",
    icon: Flame,
    title: "Data-driven creativity",
    desc: "We merge art direction with performance science — testing creative hooks, visual hierarchy, and landing-page conversion before scaling your media budget.",
  },
  {
    no: "03",
    icon: TrendingUp,
    title: "Built to grow",
    desc: "Every campaign, website, and funnel we ship is engineered to generate qualified pipeline, lower acquisition cost, and compound revenue — not just win likes.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      data-shape="target"
      data-ax="0.80"
      data-ay="0.52"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="max-w-3xl mb-12 sm:mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
            Why Katella Digital
          </p>
          <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.08] text-3xl sm:text-4xl lg:text-[46px] text-white">
            A creative agency in California built for measurable market impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.no}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="h-11 w-11 rounded-xl bg-[#C71F42]/18 border border-[#C71F42]/35 flex items-center justify-center text-[#FF4D73]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-white/35">
                      {item.no}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-white/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
