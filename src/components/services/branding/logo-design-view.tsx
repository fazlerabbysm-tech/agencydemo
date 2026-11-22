"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  FileCode,
  Grid,
  Maximize2,
  PenTool,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  RegionalCoverageBand,
  ServiceAuditCta,
  ServiceBreadcrumb,
  ServiceFaqSection,
  ServicePageFrame,
  ServiceWorkStrip,
  SiloRelatedLinks,
} from "@/components/services/service-shell";
import { getRouteByPath } from "@/lib/service-routes";
import { LOGO_DESIGN_FAQS } from "@/data/service-faqs";


const scaleTests = [
  { px: 96, use: "Signage" },
  { px: 64, use: "Packaging" },
  { px: 40, use: "Letterhead" },
  { px: 28, use: "App icon" },
  { px: 20, use: "Embroidery" },
  { px: 16, use: "Favicon" },
];

export default function LogoDesignView() {
  const route = getRouteByPath("/branding/logo-design")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH LOGO LOCKUP ANATOMY CARD */}
      <section
        id="home"
        data-shape="prism"
        data-ax="0.76"
        data-ay="0.46"
        className="pb-14 sm:pb-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <ServiceBreadcrumb route={route} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Optical Geometry · Lockup Systems · Vector Masters
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Marks engineered to hold from a billboard down to 16 pixels
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                A strong logo is not a trendy illustration — it is an instantly
                recognizable geometric signature that works in one color,
                embroiders cleanly, shines on dark &amp; light apps, and stays
                distinctive for a decade.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Commission a logo system
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <Link
                  href="/branding/brand-identity"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  Need full Brand Identity?
                </Link>
              </div>
            </motion.div>

            {/* Right Lockup System Specimen */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                  Complete Lockup Architecture
                </p>
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="kd-glass-tile rounded-2xl p-5 flex flex-col justify-between min-h-[120px]">
                    <span className="font-mono text-[9px] uppercase text-white/45">
                      Primary Horizontal
                    </span>
                    <div className="flex items-center gap-2.5">
                      <span className="h-8 w-8 rounded-lg bg-[#E81C49] flex items-center justify-center font-display font-extrabold text-white text-sm">
                        K
                      </span>
                      <span className="font-display font-extrabold text-base text-white tracking-tight">
                        KATELLA
                      </span>
                    </div>
                  </div>
                  <div className="kd-glass-tile rounded-2xl p-5 flex flex-col justify-between min-h-[120px]">
                    <span className="font-mono text-[9px] uppercase text-white/45">
                      Stacked Lockup
                    </span>
                    <div className="flex flex-col items-center gap-1">
                      <span className="h-8 w-8 rounded-lg bg-[#E81C49] flex items-center justify-center font-display font-extrabold text-white text-sm">
                        K
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.22em] text-white font-bold">
                        KATELLA
                      </span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white p-5 flex flex-col justify-between min-h-[110px]">
                    <span className="font-mono text-[9px] uppercase text-[#6f4d56]">
                      Light Surface Master
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="h-7 w-7 rounded-lg bg-[#C71F42] flex items-center justify-center font-display font-extrabold text-white text-xs">
                        K
                      </span>
                      <span className="font-display font-extrabold text-sm text-[#16070b]">
                        KATELLA
                      </span>
                    </div>
                  </div>
                  <div className="kd-glass-tile rounded-2xl p-5 flex flex-col justify-between min-h-[110px]">
                    <span className="font-mono text-[9px] uppercase text-white/45">
                      1-Color Monochrome
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="h-7 w-7 rounded-lg border border-white/80 flex items-center justify-center font-display font-extrabold text-white text-xs">
                        K
                      </span>
                      <span className="font-display font-bold text-sm text-white/90">
                        KATELLA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ICONIC "IT HAS TO HOLD AT SIXTEEN PIXELS" SCALE STRESS-TEST */}
      <section
        data-shape="target"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12 space-y-8">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Optical Stress Test
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                It has to hold at sixteen pixels.
              </h2>
              <p className="text-sm sm:text-base text-white/70">
                Before a single final file ships, every mark we craft passes
                optical legibility checks across all six real-world physical and
                digital scales:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
              {scaleTests.map((s) => (
                <div
                  key={s.px}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-5 flex flex-col items-center justify-between gap-4 min-h-[180px]"
                >
                  <div className="flex-1 flex items-center justify-center">
                    <div
                      className="rounded-xl bg-gradient-to-br from-[#FF3363] to-[#9A0E28] flex items-center justify-center font-display font-extrabold text-white shadow-[0_8px_24px_rgba(232,28,73,0.4)]"
                      style={{
                        width: `${s.px}px`,
                        height: `${s.px}px`,
                        fontSize: `${Math.max(9, Math.round(s.px * 0.44))}px`,
                      }}
                    >
                      K
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-xs font-bold text-[#FF4D73]">
                      {s.px}px
                    </p>
                    <p className="text-xs text-white/75 font-medium">{s.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DELIVERABLE FILE KIT + 4-STEP LOGO CRAFT */}
      <section
        data-shape="layers"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 kd-obsidian-card rounded-3xl p-7 sm:p-8 space-y-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF4D73]">
              Production Handover Kit
            </p>
            <h2 className="font-display font-bold text-2xl text-white">
              Every format ready for print, web, app &amp; signage.
            </h2>
            <ul className="space-y-2.5 text-sm text-white/80">
              {[
                "Vector masters (SVG, AI, EPS) with outlined & live typography",
                "CMYK, Pantone & RGB color variants (Full, White, Black)",
                "Horizontal, stacked & square icon-only lockup exports",
                "Browser favicon, Apple touch icon & social profile crops",
                "Clear-space, minimum size & misuse protection sheet",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#FF4D73] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Grid,
                title: "01 · Competitive Visual Audit",
                desc: "Map every mark in your category so your new symbol owns distinct visual territory.",
              },
              {
                icon: PenTool,
                title: "02 · Concept & Grid Construction",
                desc: "Hand-crafted vector geometry balanced optically — zero AI clip-art or generic stock icons.",
              },
              {
                icon: Maximize2,
                title: "03 · Real-World Context Testing",
                desc: "Test live on dark/light UIs, mobile headers, packaging, embroidery, and signage mockups.",
              },
              {
                icon: ShieldCheck,
                title: "04 · Full Copyright & Master Kit",
                desc: "100% copyright transfer with organized folders any printer or developer can use instantly.",
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
                >
                  <div className="kd-icon-box h-10 w-10 rounded-xl flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Distinctive logos designed in Orange County for lasting recall."
        description="Whether launching a new venture in Southern California or refreshing a legacy brand mark nationwide, every curve is engineered to endure."
      />

      <ServiceFaqSection
        heading="Logo design questions."
        faqs={LOGO_DESIGN_FAQS}
      />

      <SiloRelatedLinks currentPath="/branding/logo-design" />

      <ServiceAuditCta
        eyebrow="Start your mark"
        heading="Ready for a logo that looks unmistakable everywhere?"
        description="Share your brand name, industry, and where your logo lives most — we'll send back a clear timeline and fixed-fee logo system quote."
        defaultService="Logo Design"
        formHeading="Request a logo design quote"
        formSubheading="Tell us about your brand — we reply within one business day."
        ctaLabel="Get logo design quote"
      />
    </ServicePageFrame>
  );
}
