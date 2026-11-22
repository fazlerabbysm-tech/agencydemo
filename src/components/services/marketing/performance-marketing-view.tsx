"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Calculator,
  Layers,
  Repeat,
  ShieldCheck,
  Sparkles,
  TrendingUp,
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
import { PERFORMANCE_MARKETING_FAQS } from "@/data/service-faqs";


const spectrumChannels = [
  { name: "TikTok", role: "Creates demand", pct: 15 },
  { name: "YouTube", role: "Educates & builds desire", pct: 35 },
  { name: "Meta", role: "Rebuilds & retargets", pct: 55 },
  { name: "LinkedIn", role: "B2B & enterprise buying", pct: 75 },
  { name: "Google", role: "Captures active intent", pct: 95 },
];

const attributionClaims = [
  { platform: "Google Ads", claim: "Last click before checkout" },
  { platform: "Meta Ads", claim: "Retargeting carousel seen yesterday" },
  { platform: "TikTok Ads", claim: "Short vertical video watched last week" },
  { platform: "YouTube Ads", claim: "Brand discovery view 18 days ago" },
];

export default function PerformanceMarketingView() {
  const route = getRouteByPath("/digital-marketing/performance-marketing")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH 5-CHANNEL DEMAND CREATION-TO-CAPTURE SPECTRUM */}
      <section
        id="home"
        data-shape="growth-arrow"
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
                Meta · TikTok · YouTube · Google · LinkedIn
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Five platforms. One budget. One real number
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                We buy paid media across Google, Meta, TikTok, YouTube, and
                LinkedIn as one connected portfolio — held strictly to the three
                numbers that decide whether growth is worth buying: CAC, net
                ROAS, and payback period.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Request a paid media audit
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#attribution"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  How we fix attribution
                </a>
              </div>
            </motion.div>

            {/* Right Bespoke 5-Channel Funnel Spectrum */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="space-y-1 border-b border-white/10 pb-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    Where each channel sits
                  </p>
                  <p className="text-xs sm:text-sm text-white/70">
                    The same buyer meets your brand across multiple platforms —
                    so we manage them as one portfolio, never five siloed
                    accounts.
                  </p>
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                  <span>← Creates Demand</span>
                  <span>Captures Demand →</span>
                </div>

                <div className="space-y-3">
                  {spectrumChannels.map((ch) => (
                    <div
                      key={ch.name}
                      className="kd-glass-tile rounded-xl p-3.5 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-display font-bold text-white">
                          {ch.name}
                        </span>
                        <span className="text-white/70 text-xs">{ch.role}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/10 relative">
                        <div
                          className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-[#E81C49] border-2 border-white shadow-[0_0_12px_rgba(232,28,73,0.8)]"
                          style={{ left: `calc(${ch.pct}% - 7px)` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. "FOUR DASHBOARDS, ONE ORDER" ATTRIBUTION OVERLAP VISUALIZER */}
      <section
        id="attribution"
        data-shape="network"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12 space-y-8">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                The attribution problem
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Four dashboards, one actual order.
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Every ad platform claims credit for any conversion it touched.
                Add four platform reports together and your account looks 4x
                more profitable than your bank account — quietly funding the
                loudest dashboard instead of the channel driving real growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {attributionClaims.map((c) => (
                  <div
                    key={c.platform}
                    className="kd-glass-tile rounded-2xl p-4 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-white">
                        {c.platform}
                      </span>
                      <span className="rounded-full bg-[#C71F42]/25 border border-[#FF4D73]/45 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#FF9AB0]">
                        Claims +1 sale
                      </span>
                    </div>
                    <p className="text-xs text-white/65">{c.claim}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#FF4D73]/45 bg-[#C71F42]/18 p-6 text-center space-y-1">
                  <p className="font-display font-extrabold text-5xl text-[#FF8CA4] tabular-nums">
                    4
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/75">
                    Reported across ad platforms
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-400/45 bg-emerald-500/15 p-6 text-center space-y-1">
                  <p className="font-display font-extrabold text-5xl text-emerald-300 tabular-nums">
                    1
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/85">
                    Actually sold in CRM
                  </p>
                </div>
              </div>
            </div>

            {/* 3-Step Attribution Resolution */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-white/10">
              {[
                [
                  "01",
                  "Server-side tracking & Conversion APIs",
                  "Events fire cleanly from infrastructure you control, surviving iOS & cookie loss.",
                ],
                [
                  "02",
                  "Deduplicated against CRM or order ledger",
                  "Your finance system is the single source of truth — never an ad network UI.",
                ],
                [
                  "03",
                  "Incrementality & holdout testing",
                  "We verify what spend actually added rather than guessing from platform credit.",
                ],
              ].map(([no, t, d]) => (
                <div key={no} className="kd-glass-tile rounded-2xl p-5 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[#FF4D73]">
                    {no}
                  </span>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white">
                    {t}
                  </h3>
                  <p className="text-xs text-white/65 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. UNIT ECONOMICS GLOSSARY + TARGET CPA ARITHMETIC VISUAL */}
      <section
        data-shape="bars"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              [
                "CAC",
                "Customer Acquisition Cost",
                "Total media + creative cost required to win one real paying customer.",
              ],
              [
                "ROAS",
                "Return on Ad Spend",
                "Verified revenue generated for every dollar deployed in paid media.",
              ],
              [
                "LTV",
                "Lifetime Value",
                "Gross profit a customer generates across every repeat order, not only the first.",
              ],
              [
                "PAYBACK",
                "Payback Period",
                "How quickly a newly acquired customer earns back their acquisition cost.",
              ],
            ].map(([code, name, desc]) => (
              <div
                key={code}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-2.5"
              >
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#FF4D73]">
                  {code}
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {name}
                </h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Target CPA Arithmetic Card */}
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                The arithmetic
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                What a customer is allowed to cost.
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                We derive your channel split, testing budget, and weekly
                creative volume backwards from gross margin and payback — paired
                with organic compounding on our{" "}
                <Link
                  href="/digital-marketing/seo"
                  className="text-[#FF4D73] hover:underline"
                >
                  SEO
                </Link>{" "}
                and{" "}
                <Link
                  href="/digital-marketing/content-marketing"
                  className="text-[#FF4D73] hover:underline"
                >
                  Content Marketing
                </Link>{" "}
                tracks.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                <div className="kd-glass-tile rounded-2xl p-4 text-center">
                  <p className="font-mono text-[10px] uppercase text-white/50">
                    Input 01
                  </p>
                  <p className="font-display font-bold text-base text-white mt-1">
                    Gross Margin %
                  </p>
                </div>
                <div className="kd-glass-tile rounded-2xl p-4 text-center">
                  <p className="font-mono text-[10px] uppercase text-white/50">
                    Input 02
                  </p>
                  <p className="font-display font-bold text-base text-white mt-1">
                    Payback Window
                  </p>
                </div>
                <div className="rounded-2xl border border-[#FF4D73]/55 bg-[#C71F42]/20 p-4 text-center">
                  <p className="font-mono text-[10px] uppercase text-[#FF9AB0]">
                    Output Ceiling
                  </p>
                  <p className="font-display font-extrabold text-base text-white mt-1">
                    Target Max CPA
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="kd-glass-tile rounded-2xl p-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300 font-bold">
                    Higher Ceiling · Repeat Buyers
                  </span>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    Second and third orders carry the acquisition cost together,
                    lifting LTV and unlocking aggressive scale.
                  </p>
                </div>
                <div className="kd-glass-tile rounded-2xl p-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF8CA4] font-bold">
                    Strict Cap · Single-Purchase Offers
                  </span>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    First-order contribution margin must cover CAC cleanly — we
                    enforce strict spend caps to protect profit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6-CARD SCOPE + "THREE STEPS, THEN A WEEKLY LOOP" */}
      <section
        data-shape="orbit"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              The scope
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-8">
              What the performance retainer covers.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: TrendingUp,
                  title: "Cross-Channel Media Buying",
                  desc: "One unified team managing Google, Meta, TikTok, YouTube & LinkedIn — rebalanced weekly by marginal CPA.",
                },
                {
                  icon: ShieldCheck,
                  title: "Server-Side CAPI & CRM Sync",
                  desc: "Deduplicated server-side events, GA4 alignment, and offline closed-deal uploads back into ad algorithms.",
                },
                {
                  icon: Sparkles,
                  title: "Weekly Creative Testing Sprints",
                  desc: "Structured pipeline of hooks, UGC video, motion graphics, and comparison statics to beat ad fatigue.",
                },
                {
                  icon: Calculator,
                  title: "CAC, ROAS & LTV Modeling",
                  desc: "Margin-grounded scaling targets tracked by customer cohort and repeat-order payback.",
                },
                {
                  icon: Layers,
                  title: "Offer-Aligned Landing Pages & CRO",
                  desc: "Fast conversion landing pages, form testing, and checkout UX optimization that lift every ad dollar.",
                },
                {
                  icon: BarChart3,
                  title: "Revenue-Back Executive Reporting",
                  desc: "Monthly reporting starting from real pipeline & revenue, backed by incrementality holdout checks.",
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

          {/* Three steps, then a weekly loop */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              How the engagement runs
            </p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
              Three steps once — then a relentless weekly loop.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  no: "01",
                  tag: "Once",
                  title: "Audit accounts & tracking",
                  desc: "Inspect every pixel, CAPI event, and double-counted metric so we agree on one source of truth.",
                },
                {
                  no: "02",
                  tag: "Once",
                  title: "Model economics & media plan",
                  desc: "Lock target CPA from margin and payback first; derive channel mix and creative volume from it.",
                },
                {
                  no: "03",
                  tag: "Once",
                  title: "Build & launch cleanly",
                  desc: "Ship server-side tracking, landing pages, and batch-one creative before spending the first dollar.",
                },
                {
                  no: "04",
                  tag: "Repeats Weekly",
                  title: "Reallocate between channels",
                  desc: "Compare real CPA across all 5 platforms every week — shifting budget from expensive channels to winners.",
                  highlight: true,
                },
              ].map((step) => (
                <div
                  key={step.no}
                  className={`kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3 ${
                    step.highlight ? "border-[#FF4D73]/55" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#FF4D73]">
                      {step.no}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase ${
                        step.highlight
                          ? "bg-[#E81C49] text-white"
                          : "bg-white/[0.06] text-white/65"
                      }`}
                    >
                      {step.highlight && <Repeat className="h-3 w-3" />}
                      {step.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    {step.title}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Buying profitable attention across California & nationwide."
        description="Audience CPMs and platform habits vary sharply between Orange County, Los Angeles, and national markets — we structure and read campaigns per market rather than blurring averages."
      />

      <ServiceFaqSection
        heading="Performance marketing questions."
        faqs={PERFORMANCE_MARKETING_FAQS}
      />

      <SiloRelatedLinks currentPath="/digital-marketing/performance-marketing" />

      <ServiceAuditCta
        eyebrow="Start with the numbers"
        heading="Let's find your real acquisition number."
        description="Share access to your ad accounts and analytics and we'll send back a deduplicated breakdown of what your spend actually bought — in writing."
        defaultService="Performance Marketing"
        formHeading="Request a paid media & attribution audit"
        formSubheading="Tell us your active ad platforms — we reply within one business day."
        ctaLabel="Get my paid media audit"
      />
    </ServicePageFrame>
  );
}
