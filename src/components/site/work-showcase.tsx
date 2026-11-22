"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioDetails } from "@/data/portfolio";

export default function WorkShowcase() {
  const featuredWork = portfolioDetails.slice(0, 6);

  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
              Selected work
            </p>
            <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.06] text-3xl sm:text-4xl lg:text-[46px] text-white">
              Campaigns &amp; projects that drive real results.
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-white/80 hover:text-white transition-colors shrink-0"
          >
            All projects
            <ArrowRight className="h-4 w-4 text-[#FF4D73]" />
          </Link>
        </div>

        {/* 6-card portfolio showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWork.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0204]">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} — ${project.subtitle}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/85 via-[#060000]/15 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-[#060000]/80 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-medium text-white/85">
                    {project.services[0]}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between gap-5 bg-[#060000]/35 backdrop-blur-xl border-t border-white/10">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white tracking-tight group-hover:text-[#FF4D73] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                      {project.industry} · {project.year}
                    </span>
                    <span className="h-9 w-9 rounded-full bg-white text-[#060000] group-hover:bg-[#E81C49] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
