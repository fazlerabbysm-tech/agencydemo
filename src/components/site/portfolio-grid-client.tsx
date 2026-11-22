"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioDetail } from "@/data/portfolio";

export default function PortfolioGridClient({
  projects,
}: {
  projects: PortfolioDetail[];
}) {
  const featured = projects.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featured.map((project) => (
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
  );
}
