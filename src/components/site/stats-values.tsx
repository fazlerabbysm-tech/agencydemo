"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const highlights = [
  {
    title: "Full-funnel alignment",
    desc: "SEO, AI Search (GEO), paid media, creative, and conversion engineering working inside one revenue roadmap.",
  },
  {
    title: "Strategy-led campaigns",
    desc: "Every creative move is measured against qualified leads, pipeline velocity, and real return on ad spend.",
  },
  {
    title: "Senior in-house execution",
    desc: "Seamless collaboration across strategists, designers, media buyers, and engineers — no handoff friction.",
  },
];

const stats = [
  { value: "9+ yrs", label: "Marketing & creative experience" },
  { value: "250+", label: "Clients & growth partners" },
  { value: "500+", label: "Campaigns & launches shipped" },
  { value: "50M+", label: "In measurable campaign reach" },
];

export default function StatsValues() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left narrative + 3 differentiators */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                  By the numbers
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.06] text-3xl sm:text-4xl lg:text-[46px] text-white">
                  Proof, not promises<span className="text-[#E81C49]">.</span>
                </h2>
              </div>

              <p className="text-base text-white/70 leading-relaxed">
                Over 9 years of driving business growth with marketing campaigns
                that perform — strategy, content, media buying, and web
                technology under one roof in Anaheim, Orange County.
              </p>

              <ul className="space-y-4 pt-2">
                {highlights.map((item) => (
                  <li key={item.title} className="flex items-start gap-3.5">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[#C71F42]/20 border border-[#C71F42]/45 flex items-center justify-center text-[#FF4D73]">
                      <Check className="h-3 w-3" />
                    </span>
                    <p className="text-sm text-white/70 leading-relaxed">
                      <strong className="text-white font-semibold">
                        {item.title}
                      </strong>{" "}
                      — {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right 2x2 KPI stat grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 flex flex-col justify-between min-h-[152px] sm:min-h-[176px]"
                >
                  <p className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight tabular-nums text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/60 leading-snug mt-4">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
