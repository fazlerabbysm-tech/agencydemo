"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Compass,
  FileText,
  Layers,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import BrandMarquee from "@/components/site/marquee";
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
import { DIGITAL_MARKETING_FAQS } from "@/data/service-faqs";


const channels = [
  {
    icon: Search,
    title: "SEO & Organic Search",
    desc: "Technical foundations, search architecture, and commercial content engineered to own non-branded buyer demand.",
    href: "/digital-marketing/seo",
  },
  {
    icon: Target,
    title: "Google Ads & Paid Search",
    desc: "High-intent search, Shopping, and PMax campaigns engineered around qualified pipeline and net margin — not empty clicks.",
    href: "/digital-marketing/google-ads",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Cross-channel paid acquisition across Meta, TikTok, YouTube, LinkedIn, and Google held to one deduplicated CPA.",
    href: "/digital-marketing/performance-marketing",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Topic clusters, buyer guides, and comparison assets written in real customer language to power organic and sales.",
    href: "/digital-marketing/content-marketing",
  },
  {
    icon: Sparkles,
    title: "AI Search Optimization (GEO)",
    desc: "Structured entity clarity, schema graphs, and citation authority so ChatGPT, Perplexity, and AI Overviews recommend you.",
    href: "/digital-marketing/ai-search-geo",
  },
  {
    icon: Layers,
    title: "CRO & Landing Pages",
    desc: "Sub-second campaign landing pages, server-side conversion tracking, and weekly A/B tests that multiply existing traffic.",
    href: "/web-development/ui-ux",
  },
];

const decisionRoutes = [
  {
    scenario:
      "Your budget is focused, you need proof this quarter, and buyers already search for what you sell.",
    guidance:
      "Capture existing high-intent demand first. Paid search meets buyers at the exact moment of need and returns real acquisition costs within weeks — before funding slower compounding channels.",
    cta: "Google Ads Management",
    href: "/digital-marketing/google-ads",
  },
  {
    scenario:
      "The same clicks cost more every year, and you want to own that demand rather than rent it forever.",
    guidance:
      "Build compounding organic authority once your offer converts. Technical SEO, clean hub-and-spoke architecture, and commercial pages lower your blended CAC quarter after quarter.",
    cta: "SEO Agency in California",
    href: "/digital-marketing/seo",
  },
  {
    scenario:
      "Revenue comes from local catchments — clinics, showrooms, regional service territories, or multi-location branches.",
    guidance:
      "National campaigns waste spend outside your service radius. Lock down Google Business Profiles, review velocity, NAP consistency, and branch landing pages to dominate the Google Map Pack.",
    cta: "Local SEO & Google Maps",
    href: "/digital-marketing/local-seo",
  },
  {
    scenario:
      "You sell a high-ticket or B2B offer where committees research for weeks before booking a call.",
    guidance:
      "Ads alone rarely close considered purchases. Own every research question, comparison, and objection through structured topic clusters so you are already the trusted benchmark on the shortlist.",
    cta: "Content Marketing Agency",
    href: "/digital-marketing/content-marketing",
  },
  {
    scenario:
      "Your product is visual or fast-moving, and buyers need to discover your category inside social feeds.",
    guidance:
      "When demand must be created rather than captured, creative velocity and clean server-side attribution decide everything across Meta, TikTok, YouTube, and LinkedIn.",
    cta: "Performance Marketing",
    href: "/digital-marketing/performance-marketing",
  },
];

const revenueBars = [
  { mo: "Sep", pct: 34 },
  { mo: "Oct", pct: 46 },
  { mo: "Nov", pct: 54 },
  { mo: "Dec", pct: 66 },
  { mo: "Jan", pct: 74 },
  { mo: "Feb", pct: 86 },
  { mo: "Mar", pct: 100 },
];

const journeyRows = [
  {
    stage: "1. Discovery",
    happens:
      "A buyer discovers your brand via Google search, Maps, AI answers, paid social, or editorial guides.",
    responsibility:
      "Match search intent cleanly and route visitors to a fast, offer-aligned landing page.",
    monitor: "Traffic source, query intent quality, landing-page engagement.",
  },
  {
    stage: "2. Enquiry",
    happens:
      "The visitor submits a quote form, books a call, phones in, or starts a WhatsApp chat.",
    responsibility:
      "Eliminate form friction, capture UTMs cleanly, and fire instant lead notifications.",
    monitor: "Form completion rate, call volume, source attribution accuracy.",
  },
  {
    stage: "3. Qualification",
    happens:
      "Your team evaluates budget fit, service territory, timeline, and decision authority.",
    responsibility:
      "Respond within 5 minutes, score lead fit in CRM, and tag disqualified reasons.",
    monitor: "Speed-to-lead, MQL-to-SQL rate, disqualification themes.",
  },
  {
    stage: "4. Sales Follow-up",
    happens:
      "Qualified prospects move into discovery calls, audits, proposals, and negotiation.",
    responsibility:
      "Maintain structured follow-up sequences and record every pipeline stage change.",
    monitor: "Show rate, proposal velocity, deal stage conversion.",
  },
  {
    stage: "5. Customer & Feedback Loop",
    happens:
      "Deals close won or lost — feeding real revenue outcomes back into marketing bids.",
    responsibility:
      "Push offline closed-won conversions back to Google & Meta Ads so algorithms learn real value.",
    monitor: "Closed-won revenue, true CAC, payback period, LTV by channel.",
  },
];

export default function DigitalMarketingView() {
  const route = getRouteByPath("/digital-marketing")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH LIVE CAMPAIGN PERFORMANCE DASHBOARD */}
      <section
        id="home"
        data-shape="growth-arrow"
        data-ax="0.74"
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
              className="lg:col-span-7 space-y-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Anaheim · Orange County · Nationwide US
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[64px] text-white text-balance">
                Digital marketing agency that multiplies your revenue
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                Data-driven growth marketing for ambitious California and US
                brands. We scale qualified pipeline through{" "}
                <Link
                  href="/digital-marketing/seo"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  SEO
                </Link>
                ,{" "}
                <Link
                  href="/digital-marketing/google-ads"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  Google Ads
                </Link>
                ,{" "}
                <Link
                  href="/digital-marketing/performance-marketing"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  paid social
                </Link>
                , and{" "}
                <Link
                  href="/digital-marketing/ai-search-geo"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  AI Search (GEO)
                </Link>{" "}
                — tracking only what moves your bottom line: qualified leads,
                pipeline, and net ROI.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Grow with us
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#channels"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  What we do
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3.5 pt-3 max-w-lg">
                {[
                  { val: "4.8x", lbl: "Average ROAS" },
                  { val: "+312%", lbl: "Avg. revenue lift" },
                  { val: "9+ yrs", lbl: "Driving growth" },
                ].map((k) => (
                  <div
                    key={k.lbl}
                    className="kd-glass-tile rounded-2xl p-3.5 sm:p-4"
                  >
                    <p className="font-display font-extrabold text-xl sm:text-2xl text-white tabular-nums">
                      {k.val}
                    </p>
                    <p className="text-[11px] text-white/60 mt-0.5">{k.lbl}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Live Campaign Performance Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                      Campaign Performance
                    </p>
                    <p className="font-display font-bold text-base text-white mt-0.5">
                      Apex Solar CA · Q1 Attribution
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 font-mono text-xs font-bold text-emerald-300">
                    +312% ▲
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2.5">
                  {[
                    { k: "Spend", v: "$84k" },
                    { k: "Conv.", v: "1,240" },
                    { k: "CTR", v: "6.2%" },
                    { k: "ROAS", v: "4.8x" },
                  ].map((m) => (
                    <div
                      key={m.k}
                      className="kd-glass-tile rounded-xl p-2.5 text-center"
                    >
                      <p className="font-mono text-[10px] uppercase text-white/50">
                        {m.k}
                      </p>
                      <p className="font-display font-extrabold text-sm sm:text-base text-white mt-0.5 tabular-nums">
                        {m.v}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 7-Month Revenue Lift Bar Chart */}
                <div className="kd-glass-tile rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono uppercase tracking-[0.14em] text-white/60">
                      Attributed Revenue · Last 7 Mo
                    </span>
                    <span className="text-[#FF4D73] font-semibold">
                      Blended Pipeline
                    </span>
                  </div>
                  <div className="grid grid-cols-7 gap-2 items-end h-32 pt-3">
                    {revenueBars.map((b, i) => (
                      <div
                        key={b.mo}
                        className="flex flex-col items-center gap-1.5 h-full justify-end"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${b.pct}%` }}
                          transition={{ duration: 0.65, delay: 0.15 + i * 0.06 }}
                          className="w-full rounded-t-lg"
                          style={{
                            background:
                              i === revenueBars.length - 1
                                ? "linear-gradient(180deg, #FF4D73 0%, #C71F42 100%)"
                                : "linear-gradient(180deg, rgba(232,28,73,0.65) 0%, rgba(154,14,40,0.35) 100%)",
                          }}
                        />
                        <span className="font-mono text-[10px] text-white/50">
                          {b.mo}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Channel Chips */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px]">
                  <div className="flex flex-wrap gap-1.5">
                    {["Search", "SEO", "Paid Social", "GEO", "CRM"].map(
                      (ch) => (
                        <span
                          key={ch}
                          className="rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-0.5 text-white/75 font-mono text-[10px]"
                        >
                          {ch}
                        </span>
                      )
                    )}
                  </div>
                  <span className="font-mono text-[11px] text-emerald-300 font-semibold">
                    1,240 leads ▲
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      {/* 2. CHANNELS THAT WORK TOGETHER (DIRECT SILO HUB LINKS) */}
      <section
        id="channels"
        data-shape="spark"
        data-ax="0.78"
        data-ay="0.50"
        className="py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              What we do
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Channels that work together.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <Link
                  key={ch.title}
                  href={ch.href}
                  className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-4">
                    <div className="kd-icon-box h-12 w-12 rounded-2xl flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF4D73] transition-colors">
                      {ch.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 group-hover:text-white">
                    Explore {ch.title.split(" ")[0]}{" "}
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#FF4D73]" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BUILT ON OUTCOMES (KPI RETENTION & ACCOUNTABILITY GAUGES) */}
      <section
        data-shape="bars"
        data-ax="0.22"
        data-ay="0.52"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                  Built on outcomes
                </p>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-[1.08]">
                  We&apos;re measured by your growth.
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  No vanity impressions. We tie every dollar of media spend to
                  qualified pipeline, closed revenue, and real customer
                  acquisition cost — reported clearly every month.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  {[
                    ["Goal-led", "Every sprint tied to revenue KPIs."],
                    ["Always testing", "Weekly creative & landing tests."],
                    ["Organic + paid", "Compounding search + immediate ads."],
                    ["Transparent", "100% client-owned ad accounts."],
                  ].map(([t, d]) => (
                    <div key={t} className="kd-glass-tile rounded-xl p-3">
                      <p className="font-semibold text-white">{t}</p>
                      <p className="text-white/60 mt-0.5">{d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                {[
                  { pct: 96, label: "Client retention" },
                  { pct: 88, label: "Quarterly goals hit" },
                  { pct: 100, label: "Ad spend transparency" },
                  { pct: 94, label: "Attribution clarity" },
                ].map((g) => (
                  <div
                    key={g.label}
                    className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
                  >
                    <p className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                      {g.pct}%
                    </p>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FF3363] to-[#C71F42]"
                        style={{ width: `${g.pct}%` }}
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-white/65">
                      {g.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEEP EDITORIAL ESSAY: WHAT A DIGITAL MARKETING AGENCY ACTUALLY DOES */}
      <section
        data-shape="layers"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                The commercial reality
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                What a digital marketing agency actually does.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-sm sm:text-base text-white/75 leading-relaxed">
              <p>
                A true digital marketing agency is accountable for the
                commercial route between a stranger and a paying customer — not
                for defending one isolated platform dashboard. That means owning
                the hard questions single-channel vendors avoid: which channels
                deserve your budget this quarter, which have stopped earning it,
                what a qualified lead is truly worth against your gross margin,
                and where demand leaks between the ad click and the sales call.
              </p>
              <p>
                <strong className="text-white">What the scope covers:</strong>{" "}
                channel strategy and budget allocation, campaign build and
                weekly optimization, conversion-engineered ad creative and
                landing pages, server-side analytics, and full-funnel reporting.{" "}
                <strong className="text-white">What it does not cover:</strong>{" "}
                your core pricing, fulfillment quality, or the sales call itself
                — marketing amplifies a strong offer; it cannot disguise a
                broken one. Major builds like a full{" "}
                <Link
                  href="/web-development"
                  className="text-[#FF4D73] hover:underline"
                >
                  website rebuild
                </Link>{" "}
                or{" "}
                <Link
                  href="/branding"
                  className="text-[#FF4D73] hover:underline"
                >
                  brand identity overhaul
                </Link>{" "}
                are scoped transparently rather than hidden inside retainer
                padding.
              </p>
              <p>
                Choosing an integrated agency over a single freelancer buys
                cross-channel pattern recognition: search, paid social, content,
                analytics, and creative sit inside one team — so when a channel
                saturates, budget shifts immediately without tearing down the
                working relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. START WITH THE DECISION, NOT THE CHANNEL (5 SILO ROUTER CARDS) */}
      <section
        id="decision"
        data-shape="compass"
        data-ax="0.22"
        data-ay="0.50"
        className="py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-3xl mb-10 space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
              Start with the decision, not the channel
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Which channel earns your budget first?
            </h2>
            <p className="text-sm sm:text-base text-white/70">
              Buying cycle, existing search demand, gross margin, and budget
              size decide the right starting order — not agency trends. Follow
              the scenario that matches your business right now:
            </p>
          </div>

          <div className="space-y-4">
            {decisionRoutes.map((d, idx) => (
              <div
                key={d.href}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-5 flex items-start gap-4">
                  <span className="kd-icon-box h-10 w-10 shrink-0 rounded-xl flex items-center justify-center font-mono text-xs font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white leading-snug">
                    {d.scenario}
                  </h3>
                </div>
                <p className="lg:col-span-4 text-sm text-white/70 leading-relaxed">
                  {d.guidance}
                </p>
                <div className="lg:col-span-3 flex lg:justify-end">
                  <Link
                    href={d.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[#FF4D73]/45 bg-[#C71F42]/20 hover:bg-[#E81C49] px-5 py-2.5 text-xs font-bold text-white transition-colors"
                  >
                    {d.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE SCALE (5-STEP PROCESS) + PRICING MODELS */}
      <section
        data-shape="orbit"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              How we work
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-8">
              How we scale your business.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                ["01", "Audit", "Analyze accounts, funnels, tracking & competitors."],
                ["02", "Strategy", "Map channels, target CPA, budgets & quarterly goals."],
                ["03", "Launch", "Ship tracking, campaigns & conversion landing pages."],
                ["04", "Optimize", "Test fresh creative weekly & cut wasted spend."],
                ["05", "Report", "One executive report tied directly to pipeline & ROI."],
              ].map(([no, title, desc]) => (
                <div
                  key={no}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-5 space-y-2.5"
                >
                  <span className="font-mono text-xs text-[#FF4D73]">{no}</span>
                  <h3 className="font-display font-bold text-lg text-white">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Pricing Models */}
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Transparent commercial structure
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                How digital marketing is priced — with zero hidden spend fees.
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Our management fee and your media budget are always quoted on
                two separate lines, so increasing ad spend never quietly
                inflates what you pay us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  tag: "Ongoing growth across 2+ channels",
                  title: "Monthly Retainer",
                  body: "One predictable monthly fee with an itemized scope: active channels, creative testing velocity, SEO/content output, and consolidated executive reporting. Re-evaluated every quarter.",
                },
                {
                  tag: "Defined deliverable with an end date",
                  title: "Fixed-Scope Project",
                  body: "Priced once and shipped cleanly: a technical SEO audit, Google Ads restructure, GA4 + CRM attribution build, or high-converting landing page suite your team can run afterwards.",
                },
                {
                  tag: "Established accounts with clean tracking",
                  title: "Performance-Linked",
                  body: "A lean base retainer plus upside tied to qualified leads or verified ROAS — offered once end-to-end CRM and server-side conversion tracking are cleanly verified.",
                },
              ].map((m) => (
                <div
                  key={m.title}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF4D73]">
                    {m.tag}
                  </p>
                  <h3 className="font-display font-bold text-xl text-white">
                    {m.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Southern California Market Playbook */}
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Regional market intelligence
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Winning competitive California markets plays by different rules.
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                High-CPC metros like Orange County, Los Angeles, and San Diego
                punish generic imported playbooks. Nine years scaling regional
                and national brands taught us four levers that change the math:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Vertical video is the creative default, not an extra",
                  body: "Attention sits inside mobile feeds first. We brief short vertical hooks from day one alongside our social & paid media tracks.",
                  href: "/digital-marketing/social-media-management",
                  linkText: "Social Media Management →",
                },
                {
                  title: "Hyper-local Map Pack beats broad geo-targeting",
                  body: "In dense counties, buyers convert inside Google Maps before opening ten tabs. Clean branch profiles and 25-point geo-grids win cheap high-intent calls.",
                  href: "/digital-marketing/local-seo",
                  linkText: "Local SEO & Google Maps →",
                },
                {
                  title: "AI answers now intercept early vendor research",
                  body: "Buyers ask ChatGPT and Google AI Overviews to shortlist agencies and providers before clicking ads. Entity clarity and linked schema capture that demand early.",
                  href: "/digital-marketing/ai-search-geo",
                  linkText: "AI Search Optimization (GEO) →",
                },
                {
                  title: "Landing page speed directly lowers your paid CPC",
                  body: "In $15–$80 click auctions, cutting load time under 1 second and matching message intent lifts Quality Score and slashes acquisition cost.",
                  href: "/web-development/ui-ux",
                  linkText: "CRO Landing Pages & UI/UX →",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#FF4D73] hover:underline"
                  >
                    {card.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONNECTED CUSTOMER JOURNEY TABLE (ENQUIRY TO CUSTOMER) */}
      <section
        data-shape="target"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                From enquiry to customer
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Build a connected customer journey.
              </h2>
              <p className="text-sm text-white/70">
                Clicks mean nothing if leads stall in an inbox. We connect{" "}
                <Link
                  href="/campaigns/crm-automation"
                  className="text-[#FF4D73] hover:underline"
                >
                  CRM &amp; automation pipelines
                </Link>{" "}
                directly to your ad platforms so marketing and sales share one
                source of truth.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF4D73]">
                    <th className="py-3 pr-4">Journey Stage</th>
                    <th className="py-3 pr-4">What Happens</th>
                    <th className="py-3 pr-4">Business Responsibility</th>
                    <th className="py-3">What to Monitor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {journeyRows.map((row) => (
                    <tr key={row.stage} className="hover:bg-white/[0.02]">
                      <td className="py-4 pr-4 font-display font-bold text-white whitespace-nowrap">
                        {row.stage}
                      </td>
                      <td className="py-4 pr-4 text-white/75 leading-relaxed">
                        {row.happens}
                      </td>
                      <td className="py-4 pr-4 text-white/75 leading-relaxed">
                        {row.responsibility}
                      </td>
                      <td className="py-4 text-white/65 leading-relaxed">
                        {row.monitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 6-STEP STRUCTURED ONBOARDING */}
      <section
        data-shape="compass"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Getting started
            </p>
            <h2 className="font-display font-bold text-3xl text-white">
              A structured first 30 days.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              [
                "01",
                "Business discovery",
                "Deep dive into margins, high-value services, service areas, and current bottlenecks.",
              ],
              [
                "02",
                "Goals & priorities",
                "Lock target CPA, revenue milestones, and immediate wins vs 6-month compounding work.",
              ],
              [
                "03",
                "Access & ownership",
                "Delegate partner access to analytics, ad accounts, and CRM — you keep 100% ownership.",
              ],
              [
                "04",
                "Audit & baseline",
                "Uncover wasted ad spend, crawl blockers, and tracking leaks before changing bids.",
              ],
              [
                "05",
                "Action plan & SLAs",
                "Agree deliverables, weekly check-ins, and approval owners so zero tasks fall through.",
              ],
              [
                "06",
                "Launch & review",
                "Deploy verified tracking, live campaigns, and early signal reviews before scaling.",
              ],
            ].map(([no, title, desc]) => (
              <div
                key={no}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#FF4D73]">
                    {no}
                  </span>
                  <Compass className="h-4 w-4 text-white/30" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="A digital marketing agency built for California & nationwide growth."
        description="From Anaheim, Irvine, and Newport Beach to Los Angeles, San Diego, and nationwide US markets, we run integrated SEO, Google Ads, paid social, and AI Search programs built around measurable revenue."
      />

      <ServiceFaqSection
        heading="Digital marketing questions."
        faqs={DIGITAL_MARKETING_FAQS}
      />

      <SiloRelatedLinks currentPath="/digital-marketing" />

      <ServiceAuditCta
        eyebrow="Let's grow"
        heading="Ready to scale, measurably?"
        description="Tell us your commercial goals and current channels. Our strategists will come back within one business day with an honest audit and customized growth roadmap."
        defaultService="Digital Marketing & SEO"
        formHeading="Get a free growth plan"
        formSubheading="Share your goals — a senior strategist replies within one business day."
        ctaLabel="Get my free growth plan"
      />
    </ServicePageFrame>
  );
}
