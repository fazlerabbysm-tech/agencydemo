"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioDetail } from "@/data/portfolio";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "marketing", label: "Marketing & SEO" },
  { id: "brand", label: "Brand & Creative" },
  { id: "web", label: "Web & E-commerce" },
];

function getBucket(project: PortfolioDetail): string {
  if (
    project.serviceSlug === "digital-marketing" ||
    project.serviceSlug === "seo"
  ) {
    return "marketing";
  }
  if (
    project.serviceSlug === "brand-identity" ||
    project.serviceSlug === "motion-graphics"
  ) {
    return "brand";
  }
  return "web";
}

export default function PortfolioGridClient({
  projects,
}: {
  projects: PortfolioDetail[];
}) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => getBucket(p) === active);

  return (
    <div className="space-y-8">
      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2.5">
        {filters.map((f) => {
          const isSelected = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all cursor-pointer border ${
                isSelected
                  ? "bg-white text-[#060000] border-white"
                  : "kd-glass-tile text-white/75 hover:text-white hover:border-white/30"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Glass project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0204]">
              <img
                src={project.heroImage}
                alt={`${project.title} — ${project.subtitle}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/80 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-[#060000]/75 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-medium text-white/90">
                {project.services[0]}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between gap-5 bg-[#060000]/35 backdrop-blur-xl border-t border-white/10">
              <div>
                <h2 className="font-display font-bold text-xl text-white tracking-tight group-hover:text-[#FF4D73] transition-colors">
                  {project.title}
                </h2>
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
        ))}
      </div>
    </div>
  );
}
