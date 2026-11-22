"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  MapPin,
  Plus,
  Minus,
  Layers,
  Target,
  BarChart3,
  Zap,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import type { ServiceDetail } from "@/data/services";
import { serviceDetails } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site-config";
import BrandMarquee from "@/components/site/marquee";
import InlineContactForm from "@/components/site/inline-contact-form";

const scopeIcons = [Target, BarChart3, Zap, Layers, ShieldCheck, TrendingUp];

const decisionScenarios = [
  {
    id: "pipeline",
    label: "Need qualified leads fast",
    headline: "Start with high-intent capture & conversion landing pages.",
    summary:
      "When pipeline velocity is your immediate priority, we launch tightly segmented search & social campaigns paired with sub-second landing pages and CRM call tracking before expanding budget.",
    recommended: [
      "Audit wasted spend & conversion leaks in Week 1",
      "Launch dedicated message-matched static landing pages",
      "Sync offline CRM conversions back to ad platforms",
    ],
    timeline: "First qualified leads in 2–4 weeks",
  },
  {
    id: "authority",
    label: "Build compounding organic & AI reach",
    headline: "Own commercial search rankings and AI assistant citations.",
    summary:
      "If paid CPCs are squeezing margins, we build durable organic authority — combining technical SEO, Local Map Pack dominance, structured JSON-LD graphs, and answer-first GEO pages.",
    recommended: [
      "Technical crawl, speed & schema foundation cleanup",
      "Commercial pillar & city-level landing architecture",
      "ChatGPT, Perplexity & Google AI Overviews citation growth",
    ],
    timeline: "Compounding pipeline in 60–120 days",
  },
  {
    id: "conversion",
    label: "Fix weak conversion & attribution",
    headline: "Turn existing traffic into booked calls and measurable ROI.",
    summary:
      "You don't always need more traffic — often a slow site, unclear positioning, or slow lead follow-up is leaking half your revenue. We fix UX, speed, messaging, and CRM automation first.",
    recommended: [
      "Conversion UX & speed overhaul (95+ Lighthouse)",
      "Instant speed-to-lead routing & automated nurture flows",
      "Closed-loop executive dashboard tied to revenue",
    ],
    timeline: "Conversion lift within 30–45 days",
  },
];

const measurementStages = [
  {
    step: "01",
    title: "Discovery & Intent",
    desc: "Google Search, Local Maps, Paid Social, and AI Answers.",
  },
  {
    step: "02",
    title: "Sub-Second Landing",
    desc: "Static edge pages with clear proof and zero mobile lag.",
  },
  {
    step: "03",
    title: "Frictionless Capture",
    desc: "Branded forms, WhatsApp, and instant calendar routing.",
  },
  {
    step: "04",
    title: "CRM Attribution",
    desc: "Every lead tagged with campaign, keyword, and deal value.",
  },
  {
    step: "05",
    title: "Revenue Scale",
    desc: "Reinvest budget strictly into channels producing closed sales.",
  },
];

const onboarding30Days = [
  {
    no: "01",
    title: "Business discovery",
    desc: "Align on revenue targets, unit economics, ideal customer profiles, and sales bottlenecks.",
  },
  {
    no: "02",
    title: "Goals and priorities",
    desc: "Lock clear 30/60/90-day KPIs — qualified leads, CPA guardrails, and visibility milestones.",
  },
  {
    no: "03",
    title: "Access and infrastructure",
    desc: "Connect GA4, Search Console, ad accounts, CRM, and clean server-side conversion tracking.",
  },
  {
    no: "04",
    title: "Audit and baseline",
    desc: "Benchmark current rankings, AI citations, ad efficiency, site speed, and top 5 competitors.",
  },
  {
    no: "05",
    title: "Action plan & owners",
    desc: "Deliver a transparent sprint roadmap with clear deliverables, owners, and weekly check-ins.",
  },
  {
    no: "06",
    title: "Launch and review",
    desc: "Ship initial campaigns, pages, and creative tests — then review live evidence every week.",
  },
];

export default function ServiceDetailPage({
  service,
}: {
  service: ServiceDetail;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeDecision, setActiveDecision] = useState(0);

  const relatedServiceObjs = service.relatedServices
    .map((slug) => serviceDetails.find((s) => s.slug === slug))
    .filter((s): s is ServiceDetail => Boolean(s));

  const relatedGuides = blogPosts.slice(0, 3);
  const currentDecision = decisionScenarios[activeDecision];

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-20">
      {/* 01 — Hero (#home) */}
      <section
        id="home"
        data-shape="growth-arrow"
        data-ax="0.76"
        data-ay="0.46"
        className="pb-14 sm:pb-16 lg:pb-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/55 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/35" />
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/35" />
            <span className="text-[#FF4D73]">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7 space-y-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                {service.category} · {service.no}
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.04] text-3xl sm:text-5xl lg:text-[56px] text-white text-balance">
                {service.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                {service.heroOutcome}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {service.bestFor.map((item) => (
                  <span
                    key={item}
                    className="kd-glass-tile rounded-full px-3.5 py-1.5 text-xs font-medium text-white/85"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#service-contact"
                  className="kd-cta-glow group inline-flex items-center gap-2.5 rounded-full text-white px-7 py-3.5 text-sm font-bold transition-all"
                >
                  <span>Get a free growth plan</span>
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#060000]/45 hover:bg-[#060000]/75 text-white px-6 py-3.5 text-sm font-medium backdrop-blur-md transition-colors"
                >
                  See pricing models
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="kd-obsidian-card kd-obsidian-card-hover rounded-3xl overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={`${service.name} — Katella Digital`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-6 bg-[#060000]/40 backdrop-blur-xl border-t border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                      Proven outcome
                    </p>
                    <p className="font-display font-bold text-white text-base sm:text-lg mt-0.5">
                      {service.caseStudyMetric}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-white/60 text-right">
                    {service.deliverablesStarting}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02 — Client Logos Strip */}
      <BrandMarquee />

      {/* 03 — Channels / Capabilities That Work Together (#do) */}
      <section
        id="do"
        data-shape="spark"
        data-ax="0.22"
        data-ay="0.50"
        className="py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
              Integrated capabilities
            </p>
            <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-[44px] text-white">
              {service.includedTitle}.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.subServices.map((sub, i) => {
              const Icon = scopeIcons[i % scopeIcons.length];
              return (
                <motion.div
                  key={sub.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-7 flex flex-col justify-between gap-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="kd-icon-box h-11 w-11 rounded-xl flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-white/40">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 tracking-tight">
                      {sub.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — We're Measured By Your Growth (#results) */}
      <section
        id="results"
        data-shape="bars"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                  Performance proof
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white">
                  We&apos;re measured by your growth.
                </h2>
                <blockquote className="text-base text-white/75 leading-relaxed italic pt-2">
                  &ldquo;{service.caseStudyQuote}&rdquo;
                </blockquote>
                <p className="font-mono text-xs text-white/50">
                  — {service.caseStudyAuthor}
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                {[
                  { val: service.caseStudyMetric, lbl: "Featured client benchmark" },
                  { val: "95+", lbl: "Target Lighthouse Core Web Vitals" },
                  { val: "< 24h", lbl: "Dedicated strategist response SLA" },
                  { val: "100%", lbl: "Client ownership of accounts & data" },
                ].map((m) => (
                  <div
                    key={m.lbl}
                    className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 flex flex-col justify-between min-h-[138px]"
                  >
                    <p className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                      {m.val}
                    </p>
                    <p className="text-xs sm:text-sm text-white/60 mt-3">
                      {m.lbl}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — What a [Service] Agency Actually Does (#what) */}
      <section
        id="what"
        data-shape="target"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                  What actually moves the needle
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-3xl text-white">
                  {service.problemTitle}
                </h2>
              </div>
              <ul className="space-y-3.5">
                {service.problemPoints.map((point) => (
                  <li
                    key={point}
                    className="kd-glass-tile kd-obsidian-card-hover rounded-xl p-4 flex items-start gap-3.5 text-sm text-white/75 leading-relaxed"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#E81C49] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 kd-obsidian-card rounded-3xl p-7 sm:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                  The Katella difference
                </p>
                <h3 className="font-display font-bold text-2xl text-white">
                  What a {service.name.toLowerCase()} partner should actually
                  deliver.
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {service.notSureText}
                </p>
              </div>

              <button
                type="button"
                onClick={openModal}
                className="kd-cta-glow group inline-flex items-center justify-center gap-2.5 rounded-full text-white px-6 py-3.5 text-sm font-bold cursor-pointer"
              >
                <span>Request 20-min strategy audit</span>
                <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Start With the Decision, Not the Channel (#choose) */}
      <section
        id="choose"
        data-shape="prism"
        data-ax="0.78"
        data-ay="0.52"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12 space-y-8">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                Decision guide
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-4xl text-white">
                Start with the decision, not the channel.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {decisionScenarios.map((sc, idx) => {
                const active = idx === activeDecision;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => setActiveDecision(idx)}
                    className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                      active
                        ? "bg-[#E81C49] border-[#FF4D73] text-white shadow-[0_0_24px_rgba(232,28,73,0.45)] kd-badge-white-text"
                        : "kd-glass-tile text-white/75 hover:text-white hover:border-[#FF4D73]/50"
                    }`}
                  >
                    {sc.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentDecision.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="kd-glass-tile rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-7 space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    {currentDecision.timeline}
                  </p>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {currentDecision.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {currentDecision.summary}
                  </p>
                </div>

                <ul className="lg:col-span-5 space-y-3">
                  {currentDecision.recommended.map((rec) => (
                    <li
                      key={rec}
                      className="flex items-start gap-2.5 text-sm text-white/80"
                    >
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-[#C71F42]/25 border border-[#FF4D73]/50 flex items-center justify-center text-[#FF4D73] shrink-0">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 07 — How We Scale Your Business (#process) */}
      <section
        id="process"
        data-shape="orbit"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
              Execution rhythm
            </p>
            <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-4xl text-white">
              How we scale your business.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 flex flex-col justify-between gap-5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#FF4D73]">
                      {step.step}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 font-mono text-[10px] text-white/70">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Pricing & Engagement Models (#pricing) */}
      <section
        id="pricing"
        data-shape="bolt"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                  Transparent models
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-4xl text-white">
                  How {service.name.toLowerCase()} is priced.
                </h2>
              </div>
              <p className="text-sm text-white/65 max-w-md">
                {service.deliverablesScope}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {service.pricingModels.map((model, idx) => (
                <div
                  key={model.name}
                  className={`kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 ${
                    idx === 0 ? "border-[#FF4D73]/40" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                      {model.bestFor}
                    </p>
                    <h3 className="font-display font-bold text-xl text-white">
                      {model.name}
                    </h3>
                    <p className="font-display font-extrabold text-2xl text-white">
                      {model.starting}
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {model.desc}
                    </p>
                  </div>

                  <a
                    href="#service-contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:text-[#FF4D73] transition-colors"
                  >
                    Request tailored scope
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09 — Measurement Architecture & Connected Customer Journey (#measurement) */}
      <section
        id="measurement"
        data-shape="network"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-3xl mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
              Connected customer journey
            </p>
            <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-4xl text-white">
              Marketing decisions need reliable evidence.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {measurementStages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-5 flex flex-col justify-between gap-4"
              >
                <span className="font-mono text-xs text-[#FF4D73]">
                  {stage.step}
                </span>
                <div>
                  <h3 className="font-display font-bold text-base text-white mb-1.5">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-white/65 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — First 30 Days Marketing Onboarding (#onboarding) */}
      <section
        id="onboarding"
        data-shape="spark"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12">
            <div className="max-w-2xl mb-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                First 30 days
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-4xl text-white">
                A structured start to better marketing.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {onboarding30Days.map((item) => (
                <div
                  key={item.no}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 space-y-2.5"
                >
                  <span className="font-mono text-xs text-[#FF4D73]">
                    {item.no}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 — Serving Southern California & US Cities (#serving) */}
      <section
        id="serving"
        data-shape="globe"
        data-ax="0.22"
        data-ay="0.50"
        className="py-10 sm:py-12"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Regional &amp; national reach
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {service.name} for businesses across Southern California &amp;
                the US.
              </h2>
              <p className="text-sm text-white/65 leading-relaxed">
                Headquartered in Anaheim, Orange County — partnering with local
                leaders and national growth teams across every major US market.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...siteConfig.serviceAreas, "Nationwide US"].map((city) => (
                <span
                  key={city}
                  className="kd-glass-tile rounded-full px-3.5 py-1.5 text-xs font-medium text-white/85 inline-flex items-center gap-1.5"
                >
                  <Check className="h-3 w-3 text-[#FF4D73]" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12 — FAQ Accordion (#faq) */}
      <section
        id="faq"
        data-shape="target"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                FAQ
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-4xl text-white">
                {service.faqTitle}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <span className="font-display font-semibold text-base sm:text-lg text-white">
                        {faq.q}
                      </span>
                      <span className="h-8 w-8 shrink-0 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center text-white">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-sm sm:text-[15px] text-white/70 leading-relaxed border-t border-white/10 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 13 — Related Guides (#guides) */}
      <section
        id="guides"
        data-shape="network"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
                Playbooks &amp; guides
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-3xl text-white">
                {service.name} guides.
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-mono uppercase tracking-[0.18em] text-white/75 hover:text-white inline-flex items-center gap-1.5"
            >
              All articles <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedGuides.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between gap-4 bg-[#060000]/35 backdrop-blur-xl border-t border-white/10">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF4D73] mb-2">
                      {post.category} · {post.readTime}
                    </p>
                    <h3 className="font-display font-bold text-base text-white leading-snug group-hover:text-[#FF4D73] transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80">
                    Read guide <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14 — Work We're Proud Of (3 Flagship Projects) */}
      <section
        data-shape="bolt"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
                Proof in action
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-3xl text-white">
                Work we&apos;re proud of.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-xs font-mono uppercase tracking-[0.18em] text-white/75 hover:text-white inline-flex items-center gap-1.5"
            >
              All projects <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.relatedWork.map((w) => (
              <Link
                key={w.title}
                href={w.href || "/portfolio"}
                className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 bg-[#060000]/35 backdrop-blur-xl border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-[#FF4D73] transition-colors">
                      {w.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-1">{w.cat}</p>
                  </div>
                  <span className="h-8 w-8 rounded-full bg-white text-[#060000] group-hover:bg-[#E81C49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 15 — Related Services */}
      {relatedServiceObjs.length > 0 && (
        <section
          data-shape="prism"
          data-ax="0.22"
          data-ay="0.50"
          className="py-10 sm:py-12"
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-6">
              Related services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServiceObjs.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-5 flex flex-col justify-between gap-4"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {rel.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mt-1.5 group-hover:text-[#FF4D73] transition-colors">
                      {rel.name}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/75 group-hover:text-white">
                    Explore <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 16 — Ready to Grow, Measurably? (#service-contact) */}
      <section
        id="service-contact"
        data-shape="rocket"
        data-ax="0.22"
        data-ay="0.50"
        className="pt-12 sm:pt-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Start growing
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white">
                Ready to grow, measurably?
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Share your website and target goals. We&apos;ll audit your
                current setup and come back within one business day with
                practical recommendations tailored to {service.name}.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InlineContactForm
                defaultService={service.name}
                heading={`Get a free ${service.name} growth plan`}
                ctaLabel="Request free growth plan"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
