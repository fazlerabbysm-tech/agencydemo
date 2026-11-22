"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Film,
  Layers,
  Palette,
  PenTool,
  ShieldCheck,
  Sparkles,
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
import { BRANDING_FAQS } from "@/data/service-faqs";


const brandLayers = [
  {
    no: "01",
    icon: Compass,
    title: "Brand Strategy",
    desc: "Market positioning, audience truth, competitive whitespace, and core promise — agreed before design starts.",
    href: "/branding/brand-strategy",
  },
  {
    no: "02",
    icon: PenTool,
    title: "Logo Design",
    desc: "Precision-crafted marks, horizontal/stacked lockups, and monograms engineered to stay razor-sharp from 16px favicons to highway billboards.",
    href: "/branding/logo-design",
  },
  {
    no: "03",
    icon: Palette,
    title: "Visual Identity System",
    desc: "Accessible color systems, display/body type scales, grid geometry, photography art direction, and iconography — a cohesive system, not one file.",
    href: "/branding/brand-identity",
  },
  {
    no: "04",
    icon: Film,
    title: "Motion Identity & Graphics",
    desc: "Logo stingers, kinetic typography, product explainers, and paid-social motion templates that bring your brand alive in modern feeds.",
    href: "/branding/motion-graphics",
  },
  {
    no: "05",
    icon: Layers,
    title: "Brand Guidelines & Templates",
    desc: "Clear rules and editable Figma/Canva/deck templates so internal teams, printers, and web developers ship on-brand every single time.",
    href: "/branding/brand-identity",
  },
  {
    no: "06",
    icon: Sparkles,
    title: "Digital & Campaign Rollout",
    desc: "Seamless deployment directly into your Next.js website, paid social ads, email templates, and sales collateral.",
    href: "/web-development/ui-ux",
  },
];

export default function BrandingPillarView() {
  const route = getRouteByPath("/branding")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH BRAND ARCHITECTURE STACK */}
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
                Strategy · Identity · Logo Systems · Motion
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Strategy, identity, logo — built in that exact order
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                A memorable brand isn&apos;t decoration — it is commercial
                leverage. We craft positioning frameworks, unmistakably crisp
                identities, and scalable motion &amp; UI design systems that
                justify premium pricing and make every marketing dollar convert
                harder.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Start a brand project
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#layers"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  Explore brand layers
                </a>
              </div>
            </motion.div>

            {/* Right Interactive Brand Architecture Stack */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73] pb-1">
                  The Brand Architecture Stack
                </p>
                {[
                  {
                    lvl: "Layer 01",
                    title: "Positioning & Verbal Strategy",
                    sub: "Why buyers choose you over 10 lookalike competitors",
                    href: "/branding/brand-strategy",
                  },
                  {
                    lvl: "Layer 02",
                    title: "Logo Mark & Lockup Geometry",
                    sub: "Optical precision from 16px favicons to architectural signage",
                    href: "/branding/logo-design",
                  },
                  {
                    lvl: "Layer 03",
                    title: "Visual Identity & Guidelines",
                    sub: "Color tokens, typography scale, art direction & brand book",
                    href: "/branding/brand-identity",
                  },
                  {
                    lvl: "Layer 04",
                    title: "Motion Graphics & Kinetic Systems",
                    sub: "Scroll-stopping reels, logo stingers & animated explainers",
                    href: "/branding/motion-graphics",
                  },
                  {
                    lvl: "Layer 05",
                    title: "Web UI & Performance Campaign Rollout",
                    sub: "Deployed cleanly across site, ads, pitch decks & CRM emails",
                    href: "/web-development/ui-ux",
                  },
                ].map((item, i) => (
                  <Link
                    key={item.lvl}
                    href={item.href}
                    className="group kd-glass-tile kd-obsidian-card-hover rounded-2xl p-4 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="font-mono text-[11px] font-bold text-[#FF4D73] shrink-0">
                        0{i + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#FF4D73] transition-colors truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-white/60 truncate">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-[#FF4D73] shrink-0" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      {/* 2. RECOGNITION, VALUE & TRUST — BY DESIGN */}
      <section
        data-shape="heart"
        data-ax="0.22"
        data-ay="0.50"
        className="py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12 space-y-8">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Commercial brand equity
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Recognition, value &amp; trust — by design.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Sparkles,
                  title: "Instant Recognition",
                  desc: "Command attention in crowded feeds and search results so buyers remember you after a single impression.",
                },
                {
                  icon: TrendingUp,
                  title: "Pricing Power",
                  desc: "Cohesive brand authority lifts perceived value, defends margins, and moves you out of commodity price wars.",
                },
                {
                  icon: ShieldCheck,
                  title: "Lower Ad Costs",
                  desc: "High-trust visual presentation lifts click-through and landing-page conversion across Google & Meta Ads.",
                },
                {
                  icon: Layers,
                  title: "Team Consistency",
                  desc: "Documented systems and editable templates keep every proposal, landing page, and social post unified.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
                  >
                    <div className="kd-icon-box h-11 w-11 rounded-2xl flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bold Brand Pull-Quote Band */}
            <div className="rounded-2xl border border-[#FF4D73]/40 bg-gradient-to-r from-[#C71F42]/20 via-[#2F000A]/60 to-transparent p-6 sm:p-8">
              <p className="font-display font-bold text-lg sm:text-2xl text-white leading-snug max-w-4xl">
                &ldquo;Branding is your ultimate unfair advantage — the silent
                multiplier that turns a commodity service into the unmistakable
                category leader.&rdquo;
              </p>
            </div>

            {/* Launching New vs Rebranding Decision Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 space-y-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF4D73]">
                  Scenario 01 · Fresh Launch
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  Building a brand from zero
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  We lock positioning and target buyer language first, craft a
                  future-proof logo &amp; visual system, and hand over launch
                  templates so you enter the market looking established from day
                  one.
                </p>
              </div>
              <div className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 space-y-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                  Scenario 02 · Strategic Rebrand
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  Modernizing without losing hard-won equity
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  We audit what existing customers already recognize, preserve
                  your strongest trust cues, and stage the rollout cleanly
                  across web, ads, signage, and sales decks so revenue never
                  misses a beat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVERY LAYER OF A BRAND (DIRECT SILO HUB CARDS) */}
      <section
        id="layers"
        data-shape="spark"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Every layer of a brand
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Specialized branding disciplines, one cohesive roof.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {brandLayers.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.no}
                  href={item.href}
                  className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="kd-icon-box h-12 w-12 rounded-2xl flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs text-[#FF4D73]">
                        {item.no}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF4D73] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 group-hover:text-white">
                    Explore {item.title}{" "}
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#FF4D73]" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 4-STAGE BRANDING PROCESS */}
      <section
        data-shape="orbit"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Our branding process
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Discover, define, design, deliver.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              [
                "01",
                "Discover",
                "Stakeholder interviews, competitor visual audit, and buyer perception analysis.",
              ],
              [
                "02",
                "Define",
                "Positioning territory, messaging pillars, brand voice, and creative brief sign-off.",
              ],
              [
                "03",
                "Design",
                "Applied visual directions shown in real web, social, and collateral contexts — never bare moodboards.",
              ],
              [
                "04",
                "Deliver",
                "Complete master files, Figma design kit, editable templates, brand book, and rollout support.",
              ],
            ].map(([no, t, d]) => (
              <div
                key={no}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-[#FF4D73]">
                  {no}
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {t}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Brand systems crafted in Orange County for ambitious US brands."
        description="From Anaheim and Newport Beach to Los Angeles, San Diego, and remote growth teams nationwide, we build brands engineered to scale across digital and physical touchpoints."
      />

      <ServiceFaqSection
        heading="Branding questions."
        faqs={BRANDING_FAQS}
      />

      <SiloRelatedLinks currentPath="/branding" />

      <ServiceAuditCta
        eyebrow="Build a category leader"
        heading="Ready for a brand your market remembers?"
        description="Tell us whether you're launching fresh or repositioning an established company — we'll come back with a clear scope, timeline, and fixed-fee proposal."
        defaultService="Brand Strategy & Identity"
        formHeading="Start your branding brief"
        formSubheading="Share your brand goals — our creative directors reply within 1 business day."
        ctaLabel="Request branding proposal"
      />
    </ServicePageFrame>
  );
}
