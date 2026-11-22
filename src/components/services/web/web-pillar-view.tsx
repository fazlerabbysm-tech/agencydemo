"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Gauge,
  Globe,
  Layout,
  Plug,
  Rocket,
  SearchCheck,
  ShoppingBag,
  Smartphone,
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
import { WEB_DEV_FAQS } from "@/data/service-faqs";


const lighthouseScores = [
  { label: "Performance", score: 99 },
  { label: "Accessibility", score: 100 },
  { label: "Best Practices", score: 100 },
  { label: "Technical SEO", score: 100 },
];

const webSpecialties = [
  {
    icon: Layout,
    title: "UI/UX & Conversion Design",
    desc: "Wireframes, Figma component libraries, and CRO landing experiences built around buyer clarity.",
    href: "/web-development/ui-ux",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Development",
    desc: "Fast Shopify, headless Next.js, and WooCommerce storefronts engineered for mobile checkout lift.",
    href: "/web-development/ecommerce",
  },
  {
    icon: Cpu,
    title: "Web Applications & Portals",
    desc: "Custom quote calculators, client dashboards, SaaS MVPs, and CRM-integrated web tools.",
    href: "/web-development/web-applications",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform React Native & Flutter iOS/Android apps built with shared TypeScript backends.",
    href: "/web-development/mobile-apps",
  },
];

export default function WebPillarView() {
  const route = getRouteByPath("/web-development")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH LIGHTHOUSE 100/100 CORE WEB VITALS GAUGE */}
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
              className="lg:col-span-6 space-y-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Next.js · Headless Commerce · UI/UX · Web &amp; Mobile Apps
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Sub-second websites engineered to rank and convert
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                A slow template silently taxes every SEO page and paid ad click
                you buy. We design and engineer custom Next.js websites,
                e-commerce storefronts, and web &amp; mobile applications wired
                directly into your{" "}
                <Link
                  href="/digital-marketing/seo"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  SEO architecture
                </Link>{" "}
                and{" "}
                <Link
                  href="/campaigns/crm-automation"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  CRM pipelines
                </Link>
                .
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Scope your web build
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#included"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  What&apos;s included
                </a>
              </div>
            </motion.div>

            {/* Right Lighthouse Core Web Vitals Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                      Production Engineering Standard
                    </p>
                    <p className="font-display font-bold text-base text-white mt-0.5">
                      Core Web Vitals &amp; Lighthouse Audit
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/45 px-3 py-1 font-mono text-xs font-bold text-emerald-300">
                    Edge SSG
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {lighthouseScores.map((s) => (
                    <div
                      key={s.label}
                      className="kd-glass-tile rounded-2xl p-4 text-center space-y-2"
                    >
                      <div className="h-14 w-14 mx-auto rounded-full border-4 border-emerald-400/80 bg-emerald-500/15 flex items-center justify-center font-mono font-extrabold text-base text-emerald-300">
                        {s.score}
                      </div>
                      <p className="text-[11px] font-semibold text-white/85">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2.5 text-center">
                  {[
                    ["0.6s", "Largest Paint (LCP)"],
                    ["0.00", "Layout Shift (CLS)"],
                    ["100%", "Client Code Ownership"],
                  ].map(([v, l]) => (
                    <div key={l} className="kd-glass-tile rounded-xl p-3">
                      <p className="font-mono font-bold text-sm text-white">
                        {v}
                      </p>
                      <p className="text-[10px] text-white/55 mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      {/* 2. 4 SILO SPECIALTY CARDS */}
      <section
        data-shape="spark"
        data-ax="0.22"
        data-ay="0.50"
        className="py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Engineering practices
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Choose the build matched to your business model.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {webSpecialties.map((sp) => {
              const Icon = sp.icon;
              return (
                <Link
                  key={sp.href}
                  href={sp.href}
                  className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-4">
                    <div className="kd-icon-box h-12 w-12 rounded-2xl flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#FF4D73] transition-colors">
                      {sp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      {sp.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/85 group-hover:text-white">
                    Explore {sp.title}{" "}
                    <ArrowUpRight className="h-4 w-4 text-[#FF4D73]" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHAT A WEBSITE PROJECT ACTUALLY INCLUDES (6-PART ARCHITECTURE) */}
      <section
        id="included"
        data-shape="compass"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              End-to-end scope
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              What a website project actually includes.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Globe,
                title: "Discovery & SEO Sitemap",
                desc: "Map buyer journeys, URL silos, and page hierarchy directly to the commercial keywords your customers search.",
              },
              {
                icon: Layout,
                title: "UX Wireframes & Visual Design",
                desc: "Desktop and mobile layouts designed around conversion clarity, accessibility, and unmistakable brand craft.",
              },
              {
                icon: Code2,
                title: "Clean Next.js Engineering",
                desc: "Strict TypeScript, static/SSR pre-rendering, image optimization, and zero bloated third-party page builders.",
              },
              {
                icon: SearchCheck,
                title: "Technical SEO & AI Schema Setup",
                desc: "Titles, canonicals, JSON-LD entity graphs, XML sitemaps, and 301 redirect maps ready on launch day.",
              },
              {
                icon: Plug,
                title: "CRM, Analytics & Ad Tracking",
                desc: "GA4, server-side pixels, HubSpot/Salesforce lead sync, Stripe payments, and booking tools wired & verified.",
              },
              {
                icon: Rocket,
                title: "Launch, QA & Full Handover",
                desc: "Zero-downtime DNS cutover, SSL, cross-device QA, team training, and 100% repository & hosting ownership.",
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
        heading="Web & product engineering from Orange County to nationwide teams."
        description="Our Anaheim engineering team partners with Southern California and US companies to replace slow legacy sites with conversion-ready digital flagships."
      />

      <ServiceFaqSection
        heading="Web development questions."
        faqs={WEB_DEV_FAQS}
      />

      <SiloRelatedLinks currentPath="/web-development" />

      <ServiceAuditCta
        eyebrow="Start your build"
        heading="Ready for a site that loads in under a second and sells?"
        description="Share your current URL or project requirements — we'll reply within one business day with a clear technical recommendation, sitemap outline, and fixed-scope quote."
        defaultService="Web & App Development"
        formHeading="Request a web development proposal"
        formSubheading="Tell us what you're building — our engineering leads reply within 1 business day."
        ctaLabel="Get web proposal"
      />
    </ServicePageFrame>
  );
}
