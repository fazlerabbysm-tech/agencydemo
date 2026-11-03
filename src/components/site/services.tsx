"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    no: "01",
    slug: "ecommerce",
    title: "E-commerce Catalog Optimization",
    desc: "Studio-grade product imagery, listing architecture, and conversion-driven catalog systems for digital storefronts.",
    image: "/images/svc-ecommerce.jpg",
  },
  {
    no: "02",
    slug: "color",
    title: "Color Standardization Protocol",
    desc: "Precise color systems — Pantone, ICC profiles, and brand palettes calibrated across every screen, print, and surface.",
    image: "/images/svc-color.jpg",
  },
  {
    no: "03",
    slug: "cgi",
    title: "Virtual Production & CGI Studio",
    desc: "Real-time virtual sets, photoreal CGI, and unreal environments built for film, brand, and product worlds.",
    image: "/images/svc-cgi.jpg",
  },
  {
    no: "04",
    slug: "whitelabel",
    title: "White-Label Agency Extension",
    desc: "Embedded production for agencies — design, dev, and motion capacity that ships under your brand, not ours.",
    image: "/images/svc-whitelabel.jpg",
  },
];

interface Props {
  onServiceClick?: (slug: string) => void;
}

export default function Services({ onServiceClick }: Props) {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...services, ...services];

  return (
    <section
      id="services"
      className="relative bg-[#0a0a0a] text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden border-t border-[#2a2a2a]"
    >
      {/* Header */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 mb-8 sm:mb-10 md:mb-12">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            ( 04 ) — Capabilities
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50 hidden sm:block">
            Click a service to explore · Auto-rotating
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-[-0.02em] leading-[0.92] text-[11vw] sm:text-[9vw] lg:text-[4.5vw] break-words"
        >
          What can we
          <br />
          <span className="font-light italic">help you with?</span>
        </motion.h2>
      </div>

      {/* Auto-rotating service cards marquee */}
      <div className="marquee-pause relative">
        <div className="flex w-max marquee-track-left-slow">
          {loop.map((s, i) => (
            <ServiceCard
              key={i}
              service={s}
              total={services.length}
              onClick={onServiceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  total,
  onClick,
}: {
  service: (typeof services)[number];
  total: number;
  onClick?: (slug: string) => void;
}) {
  const padTotal = String(total).padStart(2, "0");
  return (
    <article
      className="group relative shrink-0 w-[78vw] sm:w-[360px] md:w-[400px] mx-2 sm:mx-3 md:mx-4 cursor-pointer"
      onClick={() => onClick?.(service.slug)}
    >
      {/* Glass card container with backdrop blur */}
      <div className="relative aspect-[5/6] overflow-hidden bg-[#0a0a0a] rounded-2xl border border-[#2a2a2a] backdrop-blur-sm transition-all duration-500 group-hover:border-[#46E2E2]/50 group-hover:shadow-[0_0_40px_rgba(70,226,226,0.15)]">
        {/* Top-edge glass highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#46E2E2]/30 to-transparent z-20" />

        {/* Image */}
        <img
          src={service.image}
          alt={service.title}
          loading="eager"
          className="h-full w-full object-cover opacity-70 transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-90"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
          }}
        />

        {/* Glass overlay — semi-transparent dark with blur */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/20 backdrop-blur-[2px]" />

        {/* Teal glow on hover (radial) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#46E2E2]/10 to-transparent" />

        {/* Number badge */}
        <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-10">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#46E2E2] bg-[#0a0a0a]/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#2a2a2a]">
            {service.no} / {padTotal}
          </span>
          <span className="h-2 w-2 rounded-full bg-[#46E2E2] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(70,226,226,0.6)]" />
        </div>

        {/* Title + Explore */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7 text-white z-10">
          <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight leading-[1.05] group-hover:text-[#46E2E2] transition-colors duration-300">
            {service.title}
          </h3>
          <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-white/50 group-hover:text-[#46E2E2] transition-colors duration-300">
            <span>Explore</span>
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
