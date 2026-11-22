"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  Compass,
  FileText,
  GitBranch,
  Layers,
  PenTool,
  Repeat,
  Sparkles,
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
import { CONTENT_MARKETING_FAQS } from "@/data/service-faqs";


const clusterPieces = [
  {
    role: "Sub-question",
    title: "What actually drives total project cost & ROI?",
  },
  {
    role: "Timeline",
    title: "How long does implementation take from kickoff to launch?",
  },
  {
    role: "Comparison",
    title: "In-house hire vs specialist agency: full cost breakdown",
  },
  {
    role: "Objection",
    title: "Why the cheapest proposal usually costs more inside 6 months",
  },
  {
    role: "Case study",
    title: "One finished California client rollout, start to finish",
  },
];

const tocItems = [
  ["01", "A cluster, worked through", "#cluster"],
  ["02", "What content marketing really is", "#definition"],
  ["03", "Buyer language vs corporate fluff", "#copy-test"],
  ["04", "What we publish (6 departments)", "#departments"],
  ["05", "How the work runs", "#cadence"],
  ["06", "Questions", "#faq"],
];

export default function ContentMarketingView() {
  const route = getRouteByPath("/digital-marketing/content-marketing")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE EDITORIAL HERO WITH "IN THIS ISSUE" TABLE OF CONTENTS */}
      <section
        id="home"
        data-shape="layers"
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
                Editorial Strategy · Topic Clusters · Sales Enablement
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[64px] text-white text-balance">
                The unit of work is the cluster, not the article
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                We build the editorial engine behind your organic search, AI
                visibility, and paid acquisition: complete topic maps, pillar
                pages, comparison guides, and interview-led thought leadership
                written in the exact words buyers use before they call.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Request a topic map
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#cluster"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  See a cluster mapped
                </a>
              </div>
            </motion.div>

            {/* Right Magazine-Style "In This Issue" TOC Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-white/12 pb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF4D73] font-bold">
                    In this issue
                  </span>
                  <BookOpen className="h-4 w-4 text-white/50" />
                </div>

                <ul className="divide-y divide-white/10">
                  {tocItems.map(([no, title, href]) => (
                    <li key={no}>
                      <a
                        href={href}
                        className="group py-3 flex items-center justify-between gap-3 text-sm text-white/80 hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[#FF4D73]">
                            {no}
                          </span>
                          <span className="font-medium">{title}</span>
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-white/35 group-hover:text-[#FF4D73] group-hover:translate-x-0.5 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE TOPIC CLUSTER HUB-AND-SPOKE VISUAL DIAGRAM */}
      <section
        id="cluster"
        data-shape="network"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12 space-y-8">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                A cluster, worked through
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                One topic, mapped in full before writing a word.
              </h2>
              <p className="text-sm sm:text-base text-white/70">
                Every supporting piece links up to the pillar, and the pillar
                links back down to each supporting piece — concentrating link
                juice and stopping your own pages from competing for the same
                query.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Pillar Hub Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-[#FF4D73]/55 bg-gradient-to-br from-[#C71F42]/28 via-[#1e050b]/85 to-[#060000]/90 p-7 space-y-3 shadow-[0_0_38px_rgba(232,28,73,0.22)]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E81C49] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    <GitBranch className="h-3 w-3" /> Central Pillar Page
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-snug">
                    How much does commercial growth marketing cost in California?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    Owns the head commercial query, summarizes every decision
                    factor, and routes internal links cleanly across all 5
                    supporting cluster pieces.
                  </p>
                </div>
              </div>

              {/* Supporting Spokes */}
              <div className="lg:col-span-7 space-y-3">
                {clusterPieces.map((sp, i) => (
                  <div
                    key={sp.title}
                    className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-4 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF8CA4] rounded-md border border-[#FF4D73]/35 bg-[#C71F42]/18 px-2.5 py-1 shrink-0">
                        {sp.role}
                      </span>
                      <p className="font-display font-semibold text-sm text-white">
                        {sp.title}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-white/45 shrink-0">
                      ↔ Link #{i + 1} to Pillar
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEFINITION ESSAY + BUYER LANGUAGE VS CORPORATE FLUFF COMPARISON */}
      <section
        id="definition"
        data-shape="prism"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-8">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                The definition
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                Content is not a channel beside the others — it is the fuel they
                burn.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-white/75 leading-relaxed">
              <p>
                Content marketing earns buyer trust with substantive material
                people genuinely search for and share — pricing guides,
                comparisons, calculators, teardowns, and case breakdowns —
                rather than renting attention one click at a time.
              </p>
              <p>
                Every cluster we brief powers three channels simultaneously: the
                pillar earns organic visibility alongside our{" "}
                <Link
                  href="/digital-marketing/seo"
                  className="text-[#FF4D73] hover:underline"
                >
                  SEO architecture
                </Link>
                , answers conversational queries for{" "}
                <Link
                  href="/digital-marketing/ai-search-geo"
                  className="text-[#FF4D73] hover:underline"
                >
                  AI Search (GEO)
                </Link>
                , and doubles as the retargeting asset behind{" "}
                <Link
                  href="/digital-marketing/performance-marketing"
                  className="text-[#FF4D73] hover:underline"
                >
                  paid social campaigns
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Copy Quality Side-by-Side Comparison */}
          <div
            id="copy-test"
            className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6"
          >
            <div className="max-w-2xl space-y-1.5">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Written from buyer reality
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Nobody types &ldquo;integrated turnkey solutions&rdquo; into
                Google.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-[#FF4D73]/40 bg-[#C71F42]/12 p-6 space-y-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF9AB0] font-bold">
                  <X className="h-4 w-4" /> Generic Agency Filler
                </span>
                <p className="text-sm text-white/70 italic leading-relaxed">
                  &ldquo;In today&apos;s rapidly evolving digital landscape,
                  leveraging holistic omnichannel synergies is essential to
                  empower modern enterprises toward scalable transformation.&rdquo;
                </p>
                <p className="text-xs text-white/50">
                  Zero search intent match. Zero proof. Readers close the tab
                  in 4 seconds.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-6 space-y-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-300 font-bold">
                  <Check className="h-4 w-4" /> Katella Buyer-Language Editorial
                </span>
                <p className="text-sm text-white/90 leading-relaxed">
                  &ldquo;If your Google Ads CPA jumped 40% this year, check two
                  settings before blaming the market: brand exclusions inside
                  Performance Max and whether Smart Bidding is optimizing for
                  spam form fills.&rdquo;
                </p>
                <p className="text-xs text-emerald-200/80">
                  Matches real search phrasing, earns bookmarks, gets cited by
                  AI search, and books sales calls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6 EDITORIAL DEPARTMENTS (01–06) + 4-STEP FREQUENCY-BADGED CADENCE */}
      <section
        id="departments"
        data-shape="spark"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              What we publish
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-8">
              The six editorial departments.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Compass,
                  no: "01",
                  title: "Editorial Strategy & Topic Maps",
                  desc: "Built backwards from the buying committee — what prospects must believe before signing, prioritized by pipeline impact.",
                },
                {
                  icon: GitBranch,
                  no: "02",
                  title: "Pillar Pages & Topic Clusters",
                  desc: "Deep anchor guides plus interconnected supporting pieces engineered to own entire commercial categories.",
                },
                {
                  icon: PenTool,
                  no: "03",
                  title: "Interview-Led Thought Leadership",
                  desc: "Point-of-view essays, teardowns, and industry benchmarks ghostwritten from 40-minute interviews with your experts.",
                },
                {
                  icon: FileText,
                  no: "04",
                  title: "Comparison & Pricing Pages",
                  desc: "Honest 'vs', alternatives, and cost-breakdown pages that capture high-intent evaluators right before demo booking.",
                },
                {
                  icon: Sparkles,
                  no: "05",
                  title: "Lead Magnets & Sales Assets",
                  desc: "Checklists, interactive ROI templates, and one-page case briefs that convert traffic and arm your sales team.",
                },
                {
                  icon: Layers,
                  no: "06",
                  title: "Multi-Channel Atomization",
                  desc: "One researched pillar fuels organic SEO, LinkedIn carousels, email nurture sequences, and paid ad angles.",
                },
              ].map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.no}
                    className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="kd-icon-box h-11 w-11 rounded-2xl flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs text-[#FF4D73]">
                        {d.no}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {d.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4-Step Cadence with Frequency Tags */}
          <div id="cadence">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              How the work runs
            </p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
              Brief first. Always.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                [
                  "01",
                  "Once, up front",
                  "Audit & topic map",
                  "Audit existing content, competitor rankings, and sales-call questions to produce a prioritized cluster roadmap.",
                ],
                [
                  "02",
                  "Once, then maintained",
                  "Briefs & voice guide",
                  "Every piece gets a structured brief — target reader, angle, evidence, internal links, and CTA — plus a shared voice guide.",
                ],
                [
                  "03",
                  "Every cycle",
                  "Write, edit & publish",
                  "Specialist writers draft, a second editor verifies accuracy, and we publish with schema and internal links wired.",
                ],
                [
                  "04",
                  "Monthly",
                  "Measure, refresh & expand",
                  "Review cluster impressions, rankings, and assisted conversions — refreshing slipping winners and launching the next cluster.",
                ],
              ].map(([no, freq, title, desc]) => (
                <div
                  key={no}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-[#FF4D73]">
                      {no}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] border border-white/15 px-2.5 py-0.5 font-mono text-[10px] text-white/75">
                      <Repeat className="h-2.5 w-2.5 text-[#FF4D73]" /> {freq}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    {title}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Read across California & nationwide."
        description="A deep buyer guide written once scales across every US city without extra media spend — making topic clusters the highest-leverage compounding asset in your marketing mix."
      />

      <ServiceFaqSection
        heading="Content marketing questions."
        faqs={CONTENT_MARKETING_FAQS}
      />

      <SiloRelatedLinks currentPath="/digital-marketing/content-marketing" />

      <ServiceAuditCta
        eyebrow="Start with the map"
        heading="Tell us the topic you want to own."
        description="Name the core subject your buyers research before hiring you — we will send back the exact pillar-and-cluster blueprint we would build first."
        defaultService="Content Marketing"
        formHeading="Request a sample topic cluster map"
        formSubheading="Share your core category — a strategist replies within one business day."
        ctaLabel="Build my topic map"
      />
    </ServicePageFrame>
  );
}
