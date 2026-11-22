"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Compass,
  Crosshair,
  MessageSquareText,
  Sparkles,
  Users,
  X,
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
import { BRAND_STRATEGY_FAQS } from "@/data/service-faqs";


const positioningBeforeAfter = [
  {
    area: "Homepage Headline",
    commodity: '"Innovative Digital Solutions Tailored To Your Business Needs"',
    positioned: '"Full-Funnel Revenue Marketing for Multi-Location Orange County Clinics"',
  },
  {
    area: "Value Proof",
    commodity: '"We pride ourselves on customer service and quality excellence."',
    positioned: '"Dedicated 25-point Map Pack tracking + 100% client-owned ad accounts."',
  },
  {
    area: "Sales Conversation",
    commodity: "Prospects ask for 3 quotes and pick the cheapest vendor.",
    positioned: "Prospects arrive pre-sold on your specialty and ask about start dates.",
  },
];

export default function BrandStrategyView() {
  const route = getRouteByPath("/branding/brand-strategy")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH BRAND POSITIONING CANVAS */}
      <section
        id="home"
        data-shape="compass"
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
                Positioning · Messaging · Competitive Whitespace
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Win the category before you spend a dollar on ads
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                When buyers can&apos;t tell you apart from five competitors in
                five seconds, they default to price. We uncover your sharpest
                market position, buyer language, and proof architecture so every
                page and campaign closes at higher margins.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Book a strategy sprint
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <Link
                  href="/branding/brand-identity"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  Next step: Brand Identity
                </Link>
              </div>
            </motion.div>

            {/* Right Positioning Formula Canvas */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                  The Katella Positioning Canvas
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    {
                      icon: Users,
                      k: "01 · Buyer Truth",
                      v: "Exact pain, trigger event & internal objection",
                    },
                    {
                      icon: Crosshair,
                      k: "02 · Category Gap",
                      v: "What entrenched competitors ignore or overcomplicate",
                    },
                    {
                      icon: Sparkles,
                      k: "03 · Unfair Proof",
                      v: "Specific mechanism, outcomes & guarantees only you own",
                    },
                    {
                      icon: MessageSquareText,
                      k: "04 · Verbal Voice",
                      v: "Sharp copy rules powering web, decks, SEO & ads",
                    },
                  ].map((b) => {
                    const Icon = b.icon;
                    return (
                      <div
                        key={b.k}
                        className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-4 space-y-2"
                      >
                        <div className="kd-icon-box h-9 w-9 rounded-xl flex items-center justify-center">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF8CA4]">
                          {b.k}
                        </p>
                        <p className="text-xs text-white/80 leading-relaxed">
                          {b.v}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="rounded-2xl border border-[#FF4D73]/50 bg-[#C71F42]/20 p-4 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF9AB0]">
                    Resulting Output
                  </p>
                  <p className="font-display font-bold text-base text-white mt-0.5">
                    Unmistakable Category-of-One Market Position
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. COMMODITY COPY VS POSITIONED BRAND MATRIX */}
      <section
        data-shape="layers"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Why positioning pays immediately
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Commodity messaging vs sharp brand positioning.
              </h2>
              <p className="text-sm text-white/70">
                Clear positioning feeds directly into{" "}
                <Link
                  href="/digital-marketing/content-marketing"
                  className="text-[#FF4D73] hover:underline"
                >
                  content clusters
                </Link>{" "}
                and{" "}
                <Link
                  href="/campaigns"
                  className="text-[#FF4D73] hover:underline"
                >
                  advertising campaigns
                </Link>
                .
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    <th className="py-3 pr-4">Touchpoint</th>
                    <th className="py-3 pr-4 text-[#FF9AB0]">
                      Generic Commodity Brand
                    </th>
                    <th className="py-3 text-emerald-300">
                      Strategically Positioned Brand
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {positioningBeforeAfter.map((row) => (
                    <tr key={row.area} className="hover:bg-white/[0.02]">
                      <td className="py-4 pr-4 font-display font-bold text-white whitespace-nowrap">
                        {row.area}
                      </td>
                      <td className="py-4 pr-4 text-white/65">
                        <span className="inline-flex items-start gap-2">
                          <X className="h-4 w-4 text-[#FF4D73] shrink-0 mt-0.5" />
                          <span>{row.commodity}</span>
                        </span>
                      </td>
                      <td className="py-4 text-white/90 font-medium">
                        <span className="inline-flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{row.positioned}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4-WEEK STRATEGY SPRINT */}
      <section
        data-shape="orbit"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              The 3-week sprint
            </p>
            <h2 className="font-display font-bold text-3xl text-white">
              Fast, operational strategy — zero 90-page shelfware.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              [
                "Week 1",
                "Customer & Competitor Discovery",
                "Audit your top 8 competitors' claims, review sales recordings, and interview core stakeholders.",
              ],
              [
                "Week 2",
                "Positioning & Messaging Architecture",
                "Lock your single-minded market wedge, ICP value propositions, and objection-killing proof points.",
              ],
              [
                "Week 3",
                "Playbook & Live Copy Handoff",
                "Deliver your operational Brand Strategy Playbook plus homepage, pitch deck, and ad messaging hooks.",
              ],
            ].map(([wk, title, desc]) => (
              <div
                key={wk}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#FF4D73]">
                    {wk}
                  </span>
                  <Compass className="h-4 w-4 text-white/30" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Sharpening competitive positioning for Orange County & US leaders."
        description="Whether entering a crowded California category or scaling nationwide B2B, clear positioning turns marketing from an expense into a moat."
      />

      <ServiceFaqSection
        heading="Brand strategy questions."
        faqs={BRAND_STRATEGY_FAQS}
      />

      <SiloRelatedLinks currentPath="/branding/brand-strategy" />

      <ServiceAuditCta
        eyebrow="Positioning sprint"
        heading="Ready to stop sounding like every competitor?"
        description="Share your website and top 3 competitors — we'll send back an honest read on where your messaging blends in and how to carve out unmistakable whitespace."
        defaultService="Brand Strategy & Identity"
        formHeading="Book a brand strategy consultation"
        formSubheading="Tell us your market & goals — we reply within one business day."
        ctaLabel="Request strategy sprint"
      />
    </ServicePageFrame>
  );
}
