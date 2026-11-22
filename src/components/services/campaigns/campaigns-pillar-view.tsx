"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Film,
  Megaphone,
  Radio,
  Sparkles,
  Target,
  Tv,
  Workflow,
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
import { CAMPAIGNS_FAQS } from "@/data/service-faqs";


const launchStack = [
  { step: "01", channel: "Big Creative Idea & Hero Film", role: "Stop-scroll concept & modular hooks", icon: Sparkles },
  { step: "02", channel: "YouTube, CTV & Paid Social", role: "High-reach market demand creation", icon: Tv },
  { step: "03", channel: "Google Search & Retargeting", role: "Capture surging branded & category intent", icon: Target },
  { step: "04", channel: "Dedicated Campaign Landing Page", role: "Offer-matched conversion experience", icon: Radio },
  { step: "05", channel: "CRM Automation & Attribution", role: "Instant follow-up & closed-revenue ROI", icon: Workflow },
];

export default function CampaignsPillarView() {
  const route = getRouteByPath("/campaigns")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH INTEGRATED LAUNCH COMMAND CARD */}
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
                Launch Campaigns · Video Production · CRM Revenue Ops
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Integrated campaigns engineered to own the moment
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                One unifying creative concept deployed across video, paid
                social, search, YouTube, dedicated landing pages, and{" "}
                <Link
                  href="/campaigns/crm-automation"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  automated CRM follow-up
                </Link>{" "}
                — built to turn launches and peak seasons into measurable
                revenue spikes.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Plan your campaign
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right Integrated Launch Stack Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    Omnichannel Launch Blueprint
                  </span>
                  <Megaphone className="h-4 w-4 text-white/50" />
                </div>
                {launchStack.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-3.5 flex items-center gap-3.5"
                    >
                      <div className="kd-icon-box h-9 w-9 shrink-0 rounded-xl flex items-center justify-center">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display font-bold text-sm text-white">
                          {item.step} · {item.channel}
                        </p>
                        <p className="text-xs text-white/60">{item.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      {/* 2. SILO PARTNER CARDS: VIDEO PRODUCTION & CRM AUTOMATION */}
      <section
        data-shape="layers"
        data-ax="0.22"
        data-ay="0.50"
        className="py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Core campaign engines
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Creative production meets revenue operations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/campaigns/video-production"
              className="group kd-obsidian-card kd-obsidian-card-hover rounded-3xl p-7 sm:p-9 flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <div className="kd-icon-box h-12 w-12 rounded-2xl flex items-center justify-center">
                  <Film className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#FF4D73] transition-colors">
                  Video &amp; Brand Production
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  One strategic shoot engineered to produce your hero brand
                  film, client case proofs, and 12+ modular vertical hooks for
                  paid social and YouTube.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/85 group-hover:text-white">
                Explore Video Production{" "}
                <ArrowUpRight className="h-4 w-4 text-[#FF4D73]" />
              </span>
            </Link>

            <Link
              href="/campaigns/crm-automation"
              className="group kd-obsidian-card kd-obsidian-card-hover rounded-3xl p-7 sm:p-9 flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <div className="kd-icon-box h-12 w-12 rounded-2xl flex items-center justify-center">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#FF4D73] transition-colors">
                  CRM &amp; Marketing Automation
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Instant 5-minute lead routing, automated multi-step email/SMS
                  follow-ups, HubSpot/Salesforce pipelines, and closed-loop
                  revenue attribution back to your ad platforms.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/85 group-hover:text-white">
                Explore CRM &amp; Automation{" "}
                <ArrowUpRight className="h-4 w-4 text-[#FF4D73]" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 4-STAGE CAMPAIGN EXECUTION */}
      <section
        data-shape="orbit"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Campaign cadence
            </p>
            <h2 className="font-display font-bold text-3xl text-white">
              Concept, produce, launch, prove ROI.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["Week 1", "Campaign Brief & Insight", "Lock offer hook, target audience segments, channel mix & KPI targets."],
              ["Week 2", "Big Idea & Storyboards", "Approve campaign headline, hero visual concept, ad scripts & landing wireframe."],
              ["Week 3–4", "Asset Production & Funnel QA", "Produce video, motion, static variants, dedicated landing page & CRM routing."],
              ["Launch Run", "Live Pacing & Lift Wrap-Up", "Daily spend optimization, creative rotation & executive revenue wrap-up."],
            ].map(([wk, t, d]) => (
              <div
                key={wk}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#FF4D73]">
                    {wk}
                  </span>
                  <BarChart3 className="h-4 w-4 text-white/25" />
                </div>
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
        heading="High-impact launch campaigns across Southern California & the US."
        description="We coordinate creative production, media buying, and CRM capture for product launches, seasonal surges, and regional brand expansions."
      />

      <ServiceFaqSection
        heading="Advertising campaign questions."
        faqs={CAMPAIGNS_FAQS}
      />

      <SiloRelatedLinks currentPath="/campaigns" />

      <ServiceAuditCta
        eyebrow="Launch with momentum"
        heading="Planning a product launch or major seasonal push?"
        description="Tell us your launch date, offer, and target market — we'll come back with an integrated creative, media, and conversion blueprint."
        defaultService="Advertising Campaigns"
        formHeading="Brief your next advertising campaign"
        formSubheading="Share your launch window & goals — we reply within 1 business day."
        ctaLabel="Plan my campaign"
      />
    </ServicePageFrame>
  );
}
