"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Code2,
  FileSearch,
  GitBranch,
  Globe,
  Link2,
  Search,
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
import { SEO_FAQS } from "@/data/service-faqs";


const crawlPipeline = [
  { no: "01", title: "Crawl", desc: "Googlebot can actually reach every important URL without traps." },
  { no: "02", title: "Index", desc: "Clean canonicals & robots rules allow Google to store the right version." },
  { no: "03", title: "Render", desc: "Core Web Vitals & SSR ensure bots see what real visitors see." },
  { no: "04", title: "Rank", desc: "Only after steps 1–3 clear do relevance, content & authority win." },
];

const intentQueries = {
  commercial: [
    { q: "digital marketing agency orange county", tag: "Commercial" },
    { q: "technical seo audit services", tag: "Commercial" },
    { q: "b2b ecommerce seo agency california", tag: "Commercial" },
    { q: "best nextjs web development agency", tag: "Comparison" },
  ],
  research: [
    { q: "seo vs google ads where to spend first", tag: "Decision" },
    { q: "how long does technical seo take to work", tag: "Informational" },
    { q: "how to fix crawl budget and canonical issues", tag: "Technical" },
    { q: "does internal linking improve organic rankings", tag: "Architecture" },
  ],
};

const seoTracks = [
  {
    label: "Technical Fixes & Indexation",
    startPct: 2,
    widthPct: 42,
    note: "Weeks 1–12 · Fast impression lift",
    color: "from-[#FF4D73] to-[#C71F42]",
  },
  {
    label: "On-Page Architecture & New Topic Clusters",
    startPct: 16,
    widthPct: 68,
    note: "Months 2–9 · Non-branded rankings & leads",
    color: "from-[#E81C49] to-[#9A0E28]",
  },
  {
    label: "Digital PR, Citations & Compounding Authority",
    startPct: 28,
    widthPct: 72,
    note: "Months 3–12+ · Competitive category dominance",
    color: "from-emerald-400 to-emerald-600",
  },
];

export default function SeoView() {
  const route = getRouteByPath("/digital-marketing/seo")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH PAID AD VS EARNED ORGANIC SERP PREVIEW */}
      <section
        id="home"
        data-shape="target"
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
              className="lg:col-span-7 space-y-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Organic Search · Technical SEO · Topic Architecture
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[64px] text-white text-balance">
                Earn the result. Don&apos;t rent it
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                We build the technical foundations, siloed URL architecture, and
                commercial content that put California and US brands in front of
                buyers already searching for what they sell — organic traffic
                that compounds into qualified pipeline every single month.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Get a free SEO audit
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  See our work
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3.5 pt-2 max-w-lg">
                {[
                  { val: "9+ yrs", lbl: "In organic search" },
                  { val: "250+", lbl: "Sites audited & scaled" },
                  { val: "0%", lbl: "Rented click dependency" },
                ].map((k) => (
                  <div
                    key={k.lbl}
                    className="kd-glass-tile rounded-2xl p-3.5 sm:p-4"
                  >
                    <p className="font-display font-extrabold text-xl sm:text-2xl text-white">
                      {k.val}
                    </p>
                    <p className="text-[11px] text-white/60 mt-0.5">{k.lbl}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Mock SERP Card: Paid Ad vs Earned Organic Result */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-4">
                {/* Search Bar Mock */}
                <div className="rounded-full border border-white/15 bg-[#060000]/65 px-4 py-2.5 flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <Search className="h-4 w-4 text-[#FF4D73] shrink-0" />
                  <span className="truncate font-medium">
                    seo agency in orange county california
                  </span>
                </div>

                {/* Dimmed Sponsored Ad Slot */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 opacity-60 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="rounded border border-white/25 px-1.5 py-0.5 font-mono text-[9px] uppercase text-white/70">
                      Sponsored
                    </span>
                    <span className="text-[11px] text-white/50">
                      competitor-ad.com
                    </span>
                  </div>
                  <p className="text-xs text-white/65 leading-relaxed">
                    The paid slots above are rented per click — the moment
                    budget pauses, visibility vanishes. (Covered on our{" "}
                    <Link
                      href="/digital-marketing/google-ads"
                      className="underline text-white/85"
                    >
                      Google Ads page
                    </Link>
                    .)
                  </p>
                </div>

                {/* Highlighted Earned Organic #1 Result */}
                <div className="rounded-2xl border border-[#FF4D73]/55 bg-gradient-to-br from-[#C71F42]/20 via-[#1a050a]/80 to-[#060000]/80 p-5 space-y-2 shadow-[0_0_32px_rgba(232,28,73,0.22)]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-white/75 truncate">
                      katelladigital.com › digital-marketing › seo
                    </span>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-400/45 px-2.5 py-0.5 text-[10px] font-bold uppercase text-emerald-300 shrink-0">
                      Earned #1
                    </span>
                  </div>
                  <p className="font-display font-bold text-base sm:text-lg text-white">
                    SEO Agency in California — Compounding Organic Growth
                  </p>
                  <p className="text-xs text-white/75 leading-relaxed">
                    Technical SEO, siloed internal linking, commercial keyword
                    architecture, and revenue-attributed reporting across Orange
                    County &amp; nationwide.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUNDATION: 4-STEP CRAWL → INDEX → RENDER → RANK STRIP */}
      <section
        data-shape="layers"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
                The foundation
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Ranking is the last step, not the first.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {crawlPipeline.map((s) => (
                <div
                  key={s.no}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-5 space-y-2"
                >
                  <span className="font-mono text-xs font-bold text-[#FF4D73]">
                    {s.no}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-white">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUMBERED 01–04 EDITORIAL DEFINITION ESSAY */}
      <section
        data-shape="compass"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                The definition
              </p>
              <h2 className="font-display font-bold text-3xl text-white leading-tight">
                What a technical &amp; commercial SEO agency actually does.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {[
                {
                  no: "01",
                  body: "SEO — search engine optimization — earns unpaid buyer traffic instead of renting every visit. It works by removing whatever blocks Google from crawling, rendering, and trusting your site, mapping the exact commercial queries your customers type, and building pages that answer those queries better than anyone ranking today.",
                },
                {
                  no: "02",
                  body: "The fastest gains usually begin before a single blog post is published: resolving crawl traps, duplicate canonicals, bloated JavaScript rendering, Core Web Vitals bottlenecks, and missing structured data. Next comes information architecture — a hierarchical URL and hub-and-spoke internal linking structure that tells Google unambiguously which page owns which topic.",
                },
                {
                  no: "03",
                  body: "Without clear URL ownership, every new post you publish quietly cannibalizes your commercial service pages. We map every primary keyword to one canonical URL, link supporting guides directly back into revenue pages, and pair structured schema so both Google Search and AI engines recognize your entity.",
                },
                {
                  no: "04",
                  body: "This page covers national and regional organic visibility. Branch-level Google Maps rankings live on our Local SEO page, AI answer engine citations live on our AI Search (GEO) page, and immediate sponsored search slots are managed under Google Ads. Everything is measured in Search Console, GA4, and your CRM.",
                },
              ].map((p) => (
                <div
                  key={p.no}
                  className="kd-obsidian-card rounded-2xl p-6 flex items-start gap-4"
                >
                  <span className="font-mono text-xs font-bold text-[#FF4D73] pt-1 shrink-0">
                    {p.no}
                  </span>
                  <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
              <div className="flex flex-wrap gap-3 pt-2 text-xs">
                <Link
                  href="/digital-marketing/local-seo"
                  className="rounded-full border border-white/15 bg-white/[0.05] hover:border-[#FF4D73]/60 px-4 py-2 text-white/85 hover:text-white transition-colors"
                >
                  Need Google Maps Map Pack? → Local SEO
                </Link>
                <Link
                  href="/digital-marketing/ai-search-geo"
                  className="rounded-full border border-white/15 bg-white/[0.05] hover:border-[#FF4D73]/60 px-4 py-2 text-white/85 hover:text-white transition-colors"
                >
                  Want ChatGPT &amp; AI Overviews? → AI Search (GEO)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMERCIAL VS RESEARCH BUYER-INTENT KEYWORD MATRIX */}
      <section
        data-shape="spark"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Keyword architecture
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Two search intents. Two distinct page types.
              </h2>
              <p className="text-sm text-white/70">
                Commercial service pages capture ready-to-buy searchers;
                supporting research guides capture buyers comparing options and
                pass internal link authority directly to your money pages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="kd-glass-tile rounded-2xl p-6 space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF4D73] font-bold">
                  High-Intent Commercial Queries → Service Pages
                </p>
                <div className="space-y-2.5">
                  {intentQueries.commercial.map((item) => (
                    <div
                      key={item.q}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#060000]/45 px-4 py-2.5 text-xs sm:text-sm"
                    >
                      <span className="text-white font-medium">{item.q}</span>
                      <span className="rounded-full bg-[#C71F42]/25 border border-[#FF4D73]/40 px-2.5 py-0.5 font-mono text-[10px] text-[#FF9AB0] shrink-0">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="kd-glass-tile rounded-2xl p-6 space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300 font-bold">
                  Research &amp; Evaluation Queries → Cluster Guides
                </p>
                <div className="space-y-2.5">
                  {intentQueries.research.map((item) => (
                    <div
                      key={item.q}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#060000]/45 px-4 py-2.5 text-xs sm:text-sm"
                    >
                      <span className="text-white font-medium">{item.q}</span>
                      <span className="rounded-full bg-emerald-500/18 border border-emerald-400/40 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300 shrink-0">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 6-CARD SEO SCOPE */}
      <section
        data-shape="network"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              The scope
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              What the SEO retainer covers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Code2,
                title: "Technical SEO",
                desc: "Crawl & indexation audits, Core Web Vitals, canonical governance, XML sitemaps, redirect cleanup, and structured JSON-LD schema.",
              },
              {
                icon: FileSearch,
                title: "Commercial Keyword Strategy",
                desc: "Revenue-prioritized keyword research mapped cleanly to buyer intent — zero fluff traffic, zero cannibalization.",
              },
              {
                icon: Search,
                title: "On-Page Optimization",
                desc: "Titles, headings, semantic copy, FAQ schema, and conversion modules engineered around one clear primary query per URL.",
              },
              {
                icon: GitBranch,
                title: "Silo Architecture & Internal Links",
                desc: "Parent-to-child URL hierarchies and contextual hub-and-spoke internal linking that concentrate authority on revenue pages.",
              },
              {
                icon: Link2,
                title: "Digital PR & Earned Authority",
                desc: "Credible editorial mentions, partner links, and industry citations — never toxic link farms that trigger core update penalties.",
              },
              {
                icon: BarChart3,
                title: "Pipeline & Revenue Reporting",
                desc: "Search Console, GA4, rank tracking, and CRM lead attribution consolidated into one monthly executive report.",
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

      {/* 6. FIRST 12 MONTHS COMPOUNDING TIMELINE VISUAL */}
      <section
        data-shape="bars"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                First twelve months
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                SEO compounds — here is when each track lands.
              </h2>
              <p className="text-sm text-white/70">
                Technical fixes lift crawl &amp; impressions early; topic
                clusters drive meaningful ranking and lead gains across months
                3–6; digital PR &amp; authority cement long-term category moats.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              {/* Month Axis */}
              <div className="grid grid-cols-5 font-mono text-[11px] text-white/50 border-b border-white/10 pb-2">
                <span>Month 0</span>
                <span>Month 3</span>
                <span>Month 6</span>
                <span>Month 9</span>
                <span className="text-right">Month 12+</span>
              </div>

              {seoTracks.map((t) => (
                <div key={t.label} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                    <span className="font-display font-bold text-white">
                      {t.label}
                    </span>
                    <span className="font-mono text-[11px] text-white/55">
                      {t.note}
                    </span>
                  </div>
                  <div className="h-3.5 w-full rounded-full bg-white/[0.06] relative overflow-hidden">
                    <div
                      className={`absolute top-0 bottom-0 rounded-full bg-gradient-to-r ${t.color}`}
                      style={{
                        left: `${t.startPct}%`,
                        width: `${t.widthPct}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. 4-STEP METHOD ("Audit, map, ship, repeat.") */}
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
              Audit, map, ship, repeat.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              [
                "01",
                "Audit & baseline",
                "Full crawl, Search Console & GA4 pull, and competitor gap benchmark ordered strictly by revenue impact — not a bloated 200-page export.",
              ],
              [
                "02",
                "Keyword map & architecture",
                "Assign every money term to one canonical URL, plan supporting clusters, and map internal links before writing begins.",
              ],
              [
                "03",
                "Fix & publish",
                "Ship technical fixes alongside your engineers (or our Next.js team), then publish optimized commercial and cluster pages in priority order.",
              ],
              [
                "04",
                "Measure & compound",
                "Monthly pipeline reporting plus a rolling optimization backlog that doubles down on pages climbing into page-one positions.",
              ],
            ].map(([no, title, desc]) => (
              <div
                key={no}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#FF4D73]">
                    {no}
                  </span>
                  <Globe className="h-4 w-4 text-white/30" />
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
        heading="One index, every California & national buyer."
        description="Whether your buyers search from Anaheim, Irvine, Los Angeles, or across the United States, clean technical architecture and deep topical authority earn durable market share."
      />

      <ServiceFaqSection heading="SEO questions." faqs={SEO_FAQS} />

      <SiloRelatedLinks currentPath="/digital-marketing/seo" />

      <ServiceAuditCta
        eyebrow="Start with the audit"
        heading="Let's see what's holding your rankings back."
        description="Send us your domain and the commercial terms you want to own. We will come back with the exact technical blockers and architecture opportunities we find."
        defaultService="Digital Marketing & SEO"
        formHeading="Get a free technical SEO audit"
        formSubheading="Share your domain & goals — a senior SEO strategist replies within 1 business day."
        ctaLabel="Send me the SEO audit"
      />
    </ServicePageFrame>
  );
}
