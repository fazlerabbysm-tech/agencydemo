"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookMarked,
  FileSpreadsheet,
  Grid3X3,
  Layers,
  Layout,
  Palette,
  Presentation,
  Share2,
  Type,
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
import { BRAND_IDENTITY_FAQS } from "@/data/service-faqs";


const colorTokens = [
  { name: "Obsidian Ink", hex: "#060000", role: "Primary Canvas" },
  { name: "Velvet Wine", hex: "#2F000A", role: "Deep Surface" },
  { name: "Crimson Core", hex: "#9A0E28", role: "Brand Anchor" },
  { name: "Signal Rose", hex: "#E81C49", role: "Interactive CTA" },
  { name: "Warm Ivory", hex: "#FDF5F7", role: "Light Mode Paper" },
];

export default function BrandIdentityView() {
  const route = getRouteByPath("/branding/brand-identity")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH LIVE DESIGN TOKEN & TYPE SPECIMEN CARD */}
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
                Color · Typography · Guidelines · Editable Collateral
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                A visual system built to survive every touchpoint
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                Color palettes, typography hierarchies, iconography, UI kits,
                and editable real-world templates crafted as one cohesive
                operating system — built on top of{" "}
                <Link
                  href="/branding/brand-strategy"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  brand strategy
                </Link>{" "}
                and engineered to scale straight into{" "}
                <Link
                  href="/web-development/ui-ux"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  web &amp; product UI
                </Link>
                .
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Request an identity proposal
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <Link
                  href="/branding/logo-design"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  Just need Logo Design?
                </Link>
              </div>
            </motion.div>

            {/* Right Live Brand Specimen Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    Living Identity Specimen · v1.0
                  </span>
                  <span className="font-mono text-[10px] text-white/50">
                    WCAG AA Verified
                  </span>
                </div>

                {/* Color Swatch Strip */}
                <div className="grid grid-cols-5 gap-2">
                  {colorTokens.map((c) => (
                    <div key={c.hex} className="space-y-1.5">
                      <div
                        className="h-14 rounded-xl border border-white/20"
                        style={{ backgroundColor: c.hex }}
                      />
                      <p className="font-mono text-[9px] text-white/85 truncate">
                        {c.hex}
                      </p>
                      <p className="text-[9px] text-white/45 truncate">
                        {c.role}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Typography Specimen */}
                <div className="kd-glass-tile rounded-2xl p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-white/50">
                    <span className="inline-flex items-center gap-1.5">
                      <Type className="h-3.5 w-3.5 text-[#FF4D73]" /> Type Scale
                    </span>
                    <span>Plus Jakarta · Inter · JetBrains Mono</span>
                  </div>
                  <p className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    Aa Bb Cc · 0123456789
                  </p>
                  <p className="text-xs text-white/70">
                    Crisp geometric display headlines paired with ultra-legible
                    UI body copy and technical mono metadata.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. 6 REAL-WORLD EDITABLE TOUCHPOINTS */}
      <section
        data-shape="layers"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-3xl mb-8 space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
              Applications &amp; collateral
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Editable templates your team actually uses — never flattened
              mockups.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Layout,
                title: "Digital & Web UI Kit",
                desc: "Figma components, dark/light tokens, button states, and card systems ready for web engineering.",
              },
              {
                icon: Presentation,
                title: "Sales & Investor Pitch Decks",
                desc: "Master slide layouts, KPI charts, and case-study frames your sales team can customize in minutes.",
              },
              {
                icon: Share2,
                title: "Social & Paid Ad Templates",
                desc: "Modular carousel, Reel cover, and comparison ad templates keeping every campaign instantly recognizable.",
              },
              {
                icon: FileSpreadsheet,
                title: "Stationery & Proposals",
                desc: "Business cards, email signatures, quote PDFs, and invoice headers aligned to one visual standard.",
              },
              {
                icon: Grid3X3,
                title: "Signage, Packaging & Merch",
                desc: "Print-ready CMYK/Pantone specifications, dielines, vehicle wraps, and exhibition display layouts.",
              },
              {
                icon: BookMarked,
                title: "Comprehensive Brand Book",
                desc: "Clear do's and don'ts covering clear-space, color ratios, typography rules, and tone of voice.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3.5"
                >
                  <div className="kd-icon-box h-11 w-11 rounded-2xl flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 5-STEP "FROM BRIEF TO ROLLOUT" PROCESS */}
      <section
        data-shape="orbit"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              The method
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              From brief to real-world rollout.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              [
                "01",
                "Brief & audit",
                "Audit every existing touchpoint to pinpoint inconsistencies and define where the identity must perform.",
              ],
              [
                "02",
                "Applied directions",
                "Present 2–3 distinct directions shown applied across real web, mobile, ad, and collateral frames.",
              ],
              [
                "03",
                "Build the system",
                "Expand the chosen direction into accessible color tokens, type scales, grids, iconography & templates.",
              ],
              [
                "04",
                "Guidelines & handover",
                "Deliver master vectors, Figma kit, brand book, and run a live walkthrough with your team.",
              ],
              [
                "05",
                "Rollout support",
                "Stay beside your team during your first real web launch, signage print, or campaign flight.",
              ],
            ].map(([no, t, d]) => (
              <div
                key={no}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-5 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#FF4D73]">
                    {no}
                  </span>
                  <Palette className="h-4 w-4 text-white/25" />
                </div>
                <h3 className="font-display font-bold text-base text-white">
                  {t}
                </h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Cohesive visual identities built in Orange County, scaled nationwide."
        description="We partner with founders and marketing teams across Anaheim, Irvine, LA, and the US to build visual systems that stand up to enterprise scrutiny."
      />

      <ServiceFaqSection
        heading="Brand identity questions."
        faqs={BRAND_IDENTITY_FAQS}
      />

      <SiloRelatedLinks currentPath="/branding/brand-identity" />

      <ServiceAuditCta
        eyebrow="Elevate every touchpoint"
        heading="Ready for a brand identity your whole team can run with?"
        description="Tell us where your current visual brand feels fragmented — we'll propose a clean identity scope, timeline, and fixed-fee quote."
        defaultService="Brand Strategy & Identity"
        formHeading="Request a brand identity proposal"
        formSubheading="Share your website or current deck — we reply within 1 business day."
        ctaLabel="Get identity proposal"
      />
    </ServicePageFrame>
  );
}
