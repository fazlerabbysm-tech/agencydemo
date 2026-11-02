"use client";

import { motion } from "framer-motion";

const works = [
  {
    no: "01",
    title: "Aurora Goods",
    cat: "Catalog System · 500 SKUs · 2025",
    image:
      "https://picsum.photos/seed/cuttingedger-work-ecommerce/1200/1440",
  },
  {
    no: "02",
    title: "Maison Noir",
    cat: "Color Protocol · 12 Touchpoints · 2025",
    image:
      "https://picsum.photos/seed/cuttingedger-work-color/1200/1440",
  },
  {
    no: "03",
    title: "ECHO Motors",
    cat: "CGI Launch Film · Zero Shoot · 2024",
    image:
      "https://picsum.photos/seed/cuttingedger-work-cgi/1200/1440",
  },
  {
    no: "04",
    title: "Agency Collective",
    cat: "White-Label · 200+ Assets · 2024",
    image:
      "https://picsum.photos/seed/cuttingedger-work-whitelabel/1200/1440",
  },
];

export default function WorkShowcase() {
  // Triple for a longer seamless loop
  const loop = [...works, ...works, ...works];

  return (
    <section
      id="work"
      className="relative bg-black text-white py-8 sm:py-12 md:py-14 lg:py-16 overflow-hidden"
    >
      {/* Header */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 mb-6 sm:mb-8 md:mb-10">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            ( 05 ) — Selected Work
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50 hidden sm:block">
            04 featured · Auto-rotating
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
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex w-max marquee-track-right-slow items-center gap-3 sm:gap-4 md:gap-6 px-2 sm:px-3 md:px-5">
          {loop.map((w, i) => (
            <WorkCard key={i} work={w} />
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
          className="group inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-black px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-[11px] sm:text-xs md:text-sm font-medium tracking-wide uppercase transition-colors duration-300"
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

function WorkCard({ work }: { work: (typeof works)[number] }) {
  return (
    <article className="group relative shrink-0 w-[78vw] sm:w-[330px] md:w-[380px]">
      <div className="relative aspect-[5/6] md:aspect-[5/6] overflow-hidden bg-neutral-900">
        <img
          src={work.image}
          alt={`${work.title} — ${work.cat}`}
          loading="eager"
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
          }}
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        {/* Top row: index + play hint */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-5 right-3 sm:right-5 flex items-center justify-between">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-white/80">
            {work.no} / 04
          </span>
          <span className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full border border-white/40 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black transition-colors duration-300">
            <svg
              width="7"
              height="9"
              viewBox="0 0 10 12"
              fill="currentColor"
              aria-hidden="true"
              className="sm:hidden"
            >
              <path d="M0 0 L10 6 L0 12 Z" />
            </svg>
            <svg
              width="8"
              height="10"
              viewBox="0 0 10 12"
              fill="currentColor"
              aria-hidden="true"
              className="hidden sm:block md:hidden"
            >
              <path d="M0 0 L10 6 L0 12 Z" />
            </svg>
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="currentColor"
              aria-hidden="true"
              className="hidden md:block"
            >
              <path d="M0 0 L10 6 L0 12 Z" />
            </svg>
          </span>
        </div>

        {/* Bottom: title only */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-7">
          <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-none">
            {work.title}
          </h3>
          <p className="mt-1.5 sm:mt-2 md:mt-3 font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] uppercase text-white/60">
            {work.cat}
          </p>
        </div>
      </div>
    </article>
  );
}
