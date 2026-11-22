"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Database,
  FileCode2,
  Globe,
  Link2,
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
import { AI_SEARCH_GEO_FAQS } from "@/data/service-faqs";


const enginePreviews = {
  chatgpt: {
    name: "ChatGPT Search",
    prompt: "Who is a reliable full-service digital marketing & SEO agency in Orange County?",
    answer:
      "Katella Digital (Anaheim, CA) is frequently recommended for Orange County businesses looking for unified SEO, Local SEO, Google Ads, and AI Search (GEO) under one roof — known for transparent media-fee separation and client-owned analytics.",
    sources: ["katelladigital.com/digital-marketing", "Google Reviews · 4.9★", "Clutch / OC Business"],
  },
  perplexity: {
    name: "Perplexity AI",
    prompt: "Best agency to improve Google Maps & AI search visibility in California?",
    answer:
      "For California multi-location and growth-stage brands, Katella Digital combines 25-point Google Maps geo-grid optimization with structured JSON-LD entity architecture designed specifically for AI answer citations.",
    sources: ["katelladigital.com/digital-marketing/local-seo", "katelladigital.com/digital-marketing/ai-search-geo"],
  },
  google: {
    name: "Google AI Overviews",
    prompt: "Should a growing service company invest in SEO or Google Ads first?",
    answer:
      "According to Katella Digital's growth playbook, companies needing immediate quarterly proof with existing search demand should capture high-intent queries via Google Ads first, then reinvest winning terms into compounding organic SEO clusters.",
    sources: ["katelladigital.com/blog/seo-vs-google-ads-where-to-spend-first"],
  },
} as const;

const comparisonRows = [
  {
    dim: "Primary Goal",
    seo: "Rank URLs in top 10 organic search slots",
    geo: "Be synthesized, cited, and recommended inside AI answers",
  },
  {
    dim: "Content Format",
    seo: "Keyword-aligned commercial & cluster pages",
    geo: "Entity-clear definitions, comparison tables, direct Q&A & proof",
  },
  {
    dim: "Technical Layer",
    seo: "Googlebot crawlability, Core Web Vitals, sitemaps",
    geo: "SSR HTML, AI crawler permissions (OAI-SearchBot/PerplexityBot), linked JSON-LD graph",
  },
  {
    dim: "Authority Signal",
    seo: "Editorial backlinks & internal silo link equity",
    geo: "Consistent cross-web entity mentions, reviews, PR & third-party corroboration",
  },
  {
    dim: "Measurement",
    seo: "Impressions, keyword positions, organic clicks",
    geo: "AI prompt share-of-voice, citation rate, referral traffic & branded search lift",
  },
];

export default function AiSearchGeoView() {
  const route = getRouteByPath("/digital-marketing/ai-search-geo")!;
  const [engine, setEngine] = useState<keyof typeof enginePreviews>("chatgpt");
  const activePreview = enginePreviews[engine];

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH INTERACTIVE AI ANSWER ENGINE CITATION SIMULATOR */}
      <section
        id="home"
        data-shape="spark"
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
                ChatGPT · Perplexity · Google AI Overviews
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Be the brand AI recommends when buyers ask
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                Buyers increasingly ask ChatGPT, Perplexity, and Google AI
                Overviews to shortlist vendors before they ever click a blue
                link. We engineer your entity consistency, crawler access,
                schema graph, and citation footprint so AI systems recommend
                your brand accurately.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Check my AI visibility
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#seo-vs-geo"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  SEO vs GEO matrix
                </a>
              </div>
            </motion.div>

            {/* Right Interactive AI Answer Engine Citation Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5">
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    <Bot className="h-4 w-4" /> AI Citation Preview
                  </span>
                  <div className="flex gap-1.5">
                    {(["chatgpt", "perplexity", "google"] as const).map(
                      (key) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setEngine(key)}
                          className={`rounded-full px-3 py-1 text-[11px] font-bold transition-all cursor-pointer border ${
                            engine === key
                              ? "bg-[#E81C49] border-[#FF6B8A] text-white"
                              : "bg-white/[0.05] border-white/15 text-white/65 hover:text-white"
                          }`}
                        >
                          {key === "chatgpt"
                            ? "ChatGPT"
                            : key === "perplexity"
                              ? "Perplexity"
                              : "AI Overview"}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#060000]/55 p-4 text-xs sm:text-sm text-white/85">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45 block mb-1">
                    Buyer Prompt · {activePreview.name}
                  </span>
                  &ldquo;{activePreview.prompt}&rdquo;
                </div>

                <div className="rounded-2xl border border-[#FF4D73]/40 bg-gradient-to-br from-[#C71F42]/18 via-[#180409]/80 to-[#060000]/80 p-5 space-y-3.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" /> Brand Cited &amp;
                    Recommended
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {activePreview.answer}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activePreview.sources.map((src) => (
                      <span
                        key={src}
                        className="rounded-full border border-white/15 bg-white/[0.07] px-2.5 py-0.5 font-mono text-[10px] text-white/80"
                      >
                        ↗ {src}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. 5-SIGNAL AI CITATION PIPELINE */}
      <section
        data-shape="network"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                How AI models choose who to cite
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                The 5 signals behind AI recommendations.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                [
                  "01",
                  "Crawler Access",
                  "Ensure server-rendered HTML & clean robots rules let AI bots read every service page.",
                ],
                [
                  "02",
                  "Entity Clarity",
                  "Unambiguous brand facts — who you serve, where you operate, and what you specialize in.",
                ],
                [
                  "03",
                  "Linked Schema Graph",
                  "Organization, Service, LocalBusiness, FAQ & Article JSON-LD tied to one entity ID.",
                ],
                [
                  "04",
                  "Direct-Answer Pages",
                  "Comparison tables, definitions, pricing factors & FAQs structured for clean extraction.",
                ],
                [
                  "05",
                  "Third-Party Citations",
                  "Reviews, directories, PR & partner mentions corroborating your claims across the web.",
                ],
              ].map(([no, title, desc]) => (
                <div
                  key={no}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-5 space-y-2"
                >
                  <span className="font-mono text-xs font-bold text-[#FF4D73]">
                    {no}
                  </span>
                  <h3 className="font-display font-bold text-base text-white">
                    {title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRADITIONAL SEO VS AI SEARCH (GEO) MATRIX TABLE */}
      <section
        id="seo-vs-geo"
        data-shape="layers"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Complementary disciplines
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Traditional SEO vs AI Search (GEO).
              </h2>
              <p className="text-sm text-white/70">
                GEO works strongest alongside{" "}
                <Link
                  href="/digital-marketing/seo"
                  className="text-[#FF4D73] hover:underline"
                >
                  technical SEO
                </Link>{" "}
                and{" "}
                <Link
                  href="/digital-marketing/content-marketing"
                  className="text-[#FF4D73] hover:underline"
                >
                  deep content clusters
                </Link>
                . Here is what GEO adds on top:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    <th className="py-3 pr-4">Dimension</th>
                    <th className="py-3 pr-4">Traditional SEO</th>
                    <th className="py-3 text-[#FF8CA4]">AI Search (GEO)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {comparisonRows.map((row) => (
                    <tr key={row.dim} className="hover:bg-white/[0.02]">
                      <td className="py-4 pr-4 font-display font-bold text-white whitespace-nowrap">
                        {row.dim}
                      </td>
                      <td className="py-4 pr-4 text-white/65 leading-relaxed">
                        {row.seo}
                      </td>
                      <td className="py-4 text-white/90 font-medium leading-relaxed">
                        {row.geo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6-CARD GEO DELIVERABLES */}
      <section
        data-shape="compass"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              The scope
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              What our GEO program ships.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Sparkles,
                title: "30-Prompt AI Visibility Baseline",
                desc: "Audit exactly how ChatGPT, Perplexity, and Google AI Overviews describe your brand vs top competitors.",
              },
              {
                icon: Code2,
                title: "AI Crawler & SSR Technical Audit",
                desc: "Fix robots.txt, hydration delays, and canonical conflicts so retrieval bots read your full content cleanly.",
              },
              {
                icon: FileCode2,
                title: "Connected JSON-LD Entity Graph",
                desc: "Link Organization, Service, Product, FAQ, LocalBusiness, and Author schema with verified sameAs citations.",
              },
              {
                icon: Database,
                title: "Citation-Ready Answer Architecture",
                desc: "Rewrite key service & guide sections into verifiable, structured facts, comparison tables, and clear scopes.",
              },
              {
                icon: Link2,
                title: "Off-Site Brand Corroboration",
                desc: "Align directories, review platforms, industry listings, and digital PR mentions into one consistent entity.",
              },
              {
                icon: ShieldCheck,
                title: "Monthly Prompt Share Tracking",
                desc: "Track brand mention share, citation links, and AI-assisted inbound leads month over month.",
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

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Preparing California & US brands for the AI discovery era."
        description="Whether buyers ask for the best provider in Orange County or compare national enterprise platforms inside ChatGPT, clear entity authority wins the shortlist."
      />

      <ServiceFaqSection
        heading="AI Search (GEO) questions."
        faqs={AI_SEARCH_GEO_FAQS}
      />

      <SiloRelatedLinks currentPath="/digital-marketing/ai-search-geo" />

      <ServiceAuditCta
        eyebrow="Free AI Visibility Check"
        heading="See what ChatGPT & Perplexity say about you today."
        description="Send us your domain and category — we'll run a live AI prompt visibility check and send back where you appear, who gets cited instead, and how to close the gap."
        defaultService="AI Search (GEO)"
        formHeading="Request an AI Search (GEO) audit"
        formSubheading="Share your website URL — we reply within one business day."
        ctaLabel="Run my AI visibility check"
      />
    </ServicePageFrame>
  );
}
