"use client";

import { motion } from "framer-motion";

const services = [
  {
    no: "01",
    title: "Brand Identity",
    desc: "Logos, type, voice, and the systems that hold them together.",
    image:
      "https://picsum.photos/seed/cuttingedger-svc-1/900/1125?grayscale",
  },
  {
    no: "02",
    title: "Art Direction",
    desc: "Photography, set design, and the mood that defines a campaign.",
    image:
      "https://picsum.photos/seed/cuttingedger-svc-2/900/1125?grayscale",
  },
  {
    no: "03",
    title: "Digital Experience",
    desc: "Websites and products engineered with the precision of an architect.",
    image:
      "https://picsum.photos/seed/cuttingedger-svc-3/900/1125?grayscale",
  },
  {
    no: "04",
    title: "Motion & Film",
    desc: "Title sequences, brand films, and the rhythm between frames.",
    image:
      "https://picsum.photos/seed/cuttingedger-svc-4/900/1125?grayscale",
  },
  {
    no: "05",
    title: "Editorial Design",
    desc: "Print, books, and magazines made for the slow second look.",
    image:
      "https://picsum.photos/seed/cuttingedger-svc-5/900/1125?grayscale",
  },
  {
    no: "06",
    title: "Strategy",
    desc: "Positioning, naming, and the words that make a brand legible.",
    image:
      "https://picsum.photos/seed/cuttingedger-svc-6/900/1125?grayscale",
  },
];

export default function Services() {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...services, ...services];

  return (
    <section
      id="services"
      className="relative bg-white text-black py-16 sm:py-24 md:py-36 overflow-hidden border-t border-black/10"
    >
      {/* Header */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 mb-10 sm:mb-14 md:mb-20">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-black/50">
            ( 04 ) — Capabilities
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-black/50 hidden sm:block">
            Auto-rotating · Hover to pause
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-[-0.02em] leading-[0.92] text-[12vw] sm:text-[9vw] lg:text-[6.5vw]"
        >
          What can we
          <br />
          <span className="font-light italic">help you with?</span>
        </motion.h2>
      </div>

      {/* Auto-rotating service cards marquee */}
      <div className="marquee-pause relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max marquee-track-left-slow">
          {loop.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <article className="group relative shrink-0 w-[78vw] sm:w-[420px] md:w-[460px] mx-2 sm:mx-3 md:mx-4">
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
        <img
          src={service.image}
          alt={service.title}
          loading="eager"
          className="h-full w-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Number badge */}
        <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-white/80">
            {service.no} / 06
          </span>
          <span className="h-2 w-2 rounded-full bg-white/80 group-hover:scale-150 transition-transform duration-300" />
        </div>

        {/* Title + desc */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7 text-white">
          <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-none">
            {service.title}
          </h3>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-[15px] text-white/70 max-w-[280px] leading-relaxed">
            {service.desc}
          </p>
          <div className="mt-3 sm:mt-5 inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors">
            <span>Explore</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
