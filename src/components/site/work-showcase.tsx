"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const works = [
  {
    no: "01",
    slug: "aurora-goods",
    title: "Aurora Goods",
    cat: "Catalog System · 500 SKUs · 2025",
    image: "/images/work-ecommerce.jpg",
  },
  {
    no: "02",
    slug: "maison-noir",
    title: "Maison Noir",
    cat: "Color Protocol · 12 Touchpoints · 2025",
    image: "/images/work-color.jpg",
  },
  {
    no: "03",
    slug: "echo-motors",
    title: "ECHO Motors",
    cat: "CGI Launch Film · Zero Shoot · 2024",
    image: "/images/work-cgi.jpg",
  },
  {
    no: "04",
    slug: "agency-collective",
    title: "Agency Collective",
    cat: "White-Label · 200+ Assets · 2024",
    image: "/images/work-whitelabel.jpg",
  },
];

interface Props {
  onWorkClick?: (slug: string) => void;
}

export default function WorkShowcase({ onWorkClick }: Props) {
  // Triple for a longer seamless loop
  const loop = [...works, ...works, ...works];

  return (
    <section
      id="work"
      className="relative bg-[#111111] text-white py-8 sm:py-12 md:py-14 lg:py-16 overflow-hidden border-t border-[#2a2a2a]"
    >
      {/* Header */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 mb-6 sm:mb-8 md:mb-10">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            ( 05 ) — Selected Work
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50 hidden sm:block">
            Click a project to explore · Auto-rotating
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-[-0.02em] leading-[0.92] text-[11vw] sm:text-[9vw] lg:text-[4.5vw] break-words"
        >
          Recent
          <br />
          <span className="font-light italic">work.</span>
        </motion.h2>
      </div>

      {/* Auto-rotating carousel — moves RIGHT (opposite direction to services) */}
      <div className="marquee-pause relative">
        <div className="flex w-max marquee-track-right-slow items-center gap-3 sm:gap-4 md:gap-6 px-2 sm:px-3 md:px-5">
          {loop.map((w, i) => (
            <WorkCard key={i} work={w} onClick={onWorkClick} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-end justify-between gap-4 sm:gap-6">
        <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-md">
          A complete archive lives in our studio. Below is what fit on a single
          strip of 35mm.
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 border border-[#46E2E2]/40 hover:bg-[#46E2E2] hover:text-black px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-[11px] sm:text-xs md:text-sm font-medium tracking-wide uppercase transition-colors duration-300"
        >
          View full archive
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}

function WorkCard({
  work,
  onClick,
}: {
  work: (typeof works)[number];
  onClick?: (slug: string) => void;
}) {
  return (
    <article
      className="group relative shrink-0 w-[78vw] sm:w-[330px] md:w-[380px] cursor-pointer"
      onClick={() => onClick?.(work.slug)}
    >
      {/* Glass card container with backdrop blur */}
      <div className="relative aspect-[5/6] overflow-hidden bg-[#0a0a0a] rounded-2xl border border-[#2a2a2a] backdrop-blur-sm transition-all duration-500 group-hover:border-[#46E2E2]/50 group-hover:shadow-[0_0_40px_rgba(70,226,226,0.15)]">
        {/* Top-edge glass highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#46E2E2]/30 to-transparent z-20" />

        {/* Image */}
        <img
          src={work.image}
          alt={`${work.title} — ${work.cat}`}
          loading="eager"
          className="h-full w-full object-cover opacity-70 transition-all duration-[1.4s] ease-out group-hover:scale-110 group-hover:opacity-90"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
          }}
        />

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/20 backdrop-blur-[2px]" />

        {/* Teal glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#46E2E2]/10 to-transparent" />

        {/* Top row: index + play hint */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#46E2E2] bg-[#0a0a0a]/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#2a2a2a]">
            {work.no} / 04
          </span>
          <span className="h-8 w-8 md:h-9 md:w-9 rounded-full border border-[#46E2E2]/40 flex items-center justify-center text-white/80 group-hover:bg-[#46E2E2] group-hover:text-black transition-colors duration-300 backdrop-blur-md">
            <svg width="8" height="10" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true" className="sm:hidden">
              <path d="M0 0 L10 6 L0 12 Z" />
            </svg>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true" className="hidden sm:block">
              <path d="M0 0 L10 6 L0 12 Z" />
            </svg>
          </span>
        </div>

        {/* Bottom: title */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7 text-white z-10">
          <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-none group-hover:text-[#46E2E2] transition-colors duration-300">
            {work.title}
          </h3>
          <p className="mt-2 font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] uppercase text-white/50">
            {work.cat}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-white/50 group-hover:text-[#46E2E2] transition-colors duration-300">
            <span>View project</span>
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </article>
  );
}
