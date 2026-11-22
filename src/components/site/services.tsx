"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Palette,
  Share2,
  Code2,
  Workflow,
  Megaphone,
  Film,
} from "lucide-react";

const homeServices = [
  {
    no: "01",
    title: "Digital Marketing & SEO",
    href: "/digital-marketing",
    icon: BarChart3,
    summary:
      "Targeted paid search, technical SEO, AI Search (GEO), and conversion content engineered to attract qualified buyers and drive measurable revenue growth.",
    tags: ["Google & Meta Ads", "SEO & Local SEO", "AI Search (GEO)", "Analytics & CRO"],
  },
  {
    no: "02",
    title: "Brand Strategy & Identity",
    href: "/branding",
    icon: Palette,
    summary:
      "Distinctive brand positioning, visual identity systems, and design languages that command authority and elevate every touchpoint across web, print, and ads.",
    tags: ["Brand Strategy", "Visual Identity", "Logo Systems", "Brand Guidelines"],
  },
  {
    no: "03",
    title: "Social Media Management",
    href: "/digital-marketing/social-media-management",
    icon: Share2,
    summary:
      "Consistent editorial calendars, short-form reels, community management, and paid social amplification built to grow engaged audiences that convert.",
    tags: ["Content Creation", "Channel Management", "Paid Social", "Monthly Reporting"],
  },
  {
    no: "04",
    title: "Web & App Development",
    href: "/web-development",
    icon: Code2,
    summary:
      "Sub-second marketing websites, conversion-focused e-commerce stores, and scalable web & mobile applications designed to turn traffic into paying customers.",
    tags: ["Next.js Websites", "UI/UX Design", "E-commerce", "Web & Mobile Apps"],
  },
  {
    no: "05",
    title: "CRM & Marketing Automation",
    href: "/campaigns/crm-automation",
    icon: Workflow,
    summary:
      "Smart CRM pipelines, lead attribution, lifecycle email/SMS sequences, and automated reporting that connect marketing spend directly to closed revenue.",
    tags: ["HubSpot & CRM Setup", "Lead Attribution", "Email & SMS Flows", "Sales Automation"],
  },
  {
    no: "06",
    title: "Advertising Campaigns",
    href: "/campaigns",
    icon: Megaphone,
    summary:
      "Integrated multi-channel launch campaigns — from concept and art direction to paid search, social, YouTube, and regional media buying for maximum impact.",
    tags: ["Campaign Strategy", "Creative Direction", "Media Buying", "ROAS Optimization"],
  },
  {
    no: "07",
    title: "Video & Motion Production",
    href: "/branding/motion-graphics",
    icon: Film,
    summary:
      "Scroll-stopping brand films, product animations, motion ads, and commercial video production crafted for modern vertical and widescreen feeds.",
    tags: ["Brand Films", "Motion Graphics", "Social Video Ads", "3D Product Visuals"],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = homeServices[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      id="services"
      data-shape="spark"
      data-ax="0.78"
      data-ay="0.52"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
              What we do
            </p>
            <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.06] text-3xl sm:text-4xl lg:text-[46px] text-white">
              Marketing services built to grow your business.
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-white/80 hover:text-white transition-colors shrink-0"
          >
            Explore all services
            <ArrowRight className="h-4 w-4 text-[#FF4D73]" />
          </Link>
        </div>

        {/* Interactive 01-07 list + sticky preview panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left 7 interactive service rows */}
          <div className="lg:col-span-7 space-y-2.5">
            {homeServices.map((svc, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={svc.no}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer border backdrop-blur-xl ${
                    isSelected
                      ? "kd-obsidian-card border-white/30 shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
                      : "bg-[#060000]/38 border-white/12 hover:border-white/24 hover:bg-[#060000]/52"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs tabular-nums ${
                          isSelected ? "text-[#FF4D73]" : "text-white/40"
                        }`}
                      >
                        {svc.no}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                        {svc.title}
                      </h3>
                    </div>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                        isSelected
                          ? "text-white translate-x-0.5"
                          : "text-white/35"
                      }`}
                    />
                  </div>

                  {isSelected && (
                    <div className="mt-3.5 pl-8 space-y-3">
                      <p className="text-sm text-white/70 leading-relaxed">
                        {svc.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {svc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white/85"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right sticky featured detail panel (SERVICE 0X / 07) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="kd-obsidian-card rounded-3xl p-7 sm:p-9 min-h-[380px] flex flex-col justify-between relative overflow-hidden">
              {/* Subtle top-right crimson satin sheen matching reference */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#C71F42]/25 blur-3xl"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.no}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex flex-col justify-between h-full space-y-8"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="h-12 w-12 rounded-2xl bg-[#E81C49] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(232,28,73,0.35)]">
                        <ActiveIcon className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/55">
                        SERVICE {active.no} / 07
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                      {active.title}
                    </h3>

                    <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                      {active.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      {active.tags.map((tag) => (
                        <div
                          key={tag}
                          className="kd-glass-tile rounded-xl px-3.5 py-2.5 text-xs font-medium text-white/85"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <Link
                      href={active.href}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-white/90 text-[#060000] px-5 py-2.5 text-sm font-semibold transition-colors"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent("open-contact-modal")
                        )
                      }
                      className="text-xs font-mono uppercase tracking-[0.16em] text-white/65 hover:text-white transition-colors cursor-pointer"
                    >
                      Get quote
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
