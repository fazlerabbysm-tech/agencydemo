"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Ban,
  BarChart3,
  Check,
  DollarSign,
  Filter,
  Gauge,
  Layers,
  MousePointerClick,
  ShieldCheck,
  Target,
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
import { GOOGLE_ADS_FAQS } from "@/data/service-faqs";


const wasteAuditRows = [
  {
    area: "Keyword Match Types",
    waste: "Unguarded Broad Match spending on job seekers, DIY queries & out-of-area clicks.",
    katella: "Exact & tightly themed Phrase Match backed by 500+ negative keywords from week one.",
  },
  {
    area: "Performance Max (PMax)",
    waste: "Inflated ROAS driven by bidding on your own brand name instead of new customers.",
    katella: "Brand exclusions enforced, asset groups segmented by margin, and search term auditing.",
  },
  {
    area: "Conversion Tracking",
    waste: "Optimizing Smart Bidding on button clicks or unqualified spam form fills.",
    katella: "Enhanced Conversions + offline CRM qualified-lead uploads back into Google Ads.",
  },
  {
    area: "Landing Page Experience",
    waste: "Sending every search ad to a slow homepage with 12 distracting nav links.",
    katella: "Sub-second message-matched landing pages lifting Quality Score to 8–10/10.",
  },
  {
    area: "Geographic Targeting",
    waste: '"Presence or interest" default leaking budget outside your service territory.',
    katella: 'Strict "Presence only" radius & ZIP bid adjustments weighted by regional close rate.',
  },
];

export default function GoogleAdsView() {
  const route = getRouteByPath("/digital-marketing/google-ads")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH LIVE SEARCH AUCTION & QUALITY SCORE SIMULATOR */}
      <section
        id="home"
        data-shape="bolt"
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
                Paid Search · Google Shopping · Offline CRM Bidding
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Buy the demand that&apos;s ready to close — cut everything else
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                Most Google Ads accounts don&apos;t have a traffic problem —
                they have a waste problem. We engineer tightly segmented Search,
                Shopping, and YouTube campaigns tied directly to your CRM so
                Google&apos;s algorithm bids for signed revenue, not cheap junk
                leads.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Request a Google Ads audit
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#waste-audit"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  See the 5 budget leaks
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3.5 pt-2 max-w-lg">
                {[
                  { val: "-38%", lbl: "Avg. wasted spend cut" },
                  { val: "9/10", lbl: "Target Quality Score" },
                  { val: "2–4 wks", lbl: "To qualified pipeline" },
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

            {/* Right Bespoke Auction & Quality Score Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                      Search Auction Architecture
                    </p>
                    <p className="font-display font-bold text-base text-white mt-0.5">
                      Higher Quality Score = Lower CPC
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/45 px-3 py-1 font-mono text-xs font-bold text-emerald-300">
                    QS 9 / 10
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      step: "01 · Exact Commercial Query",
                      val: "[commercial solar installer orange county]",
                      pct: 94,
                    },
                    {
                      step: "02 · Message-Matched Ad Copy",
                      val: "Dynamic keyword relevance + callout proof",
                      pct: 91,
                    },
                    {
                      step: "03 · Sub-Second Dedicated Landing Page",
                      val: "0.7s LCP · Instant quote form + call tracking",
                      pct: 96,
                    },
                    {
                      step: "04 · Offline CRM Conversion Feedback",
                      val: "Qualified deals pushed back to Smart Bidding",
                      pct: 100,
                    },
                  ].map((row) => (
                    <div
                      key={row.step}
                      className="kd-glass-tile rounded-xl p-3.5 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#FF8CA4]">
                          {row.step}
                        </span>
                        <span className="font-mono text-[11px] font-bold text-emerald-300">
                          {row.pct}%
                        </span>
                      </div>
                      <p className="text-xs text-white/85 font-medium">
                        {row.val}
                      </p>
                      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#FF3363] to-emerald-400"
                          style={{ width: `${row.pct}%` }}
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

      {/* 2. 3-TIER SEARCH INTENT PYRAMID */}
      <section
        data-shape="prism"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Intent tiering
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Not every click deserves the same bid.
              </h2>
              <p className="text-sm text-white/70">
                We separate your budget strictly by buyer readiness so
                high-margin purchase intent never gets starved by research
                browsers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  tier: "TIER 1 · CAPTURE FIRST",
                  badge: "60–70% Budget",
                  title: "Ready-to-Buy Commercial Intent",
                  examples:
                    '"emergency HVAC repair Anaheim", "enterprise CRM implementation agency", SKU Shopping feeds',
                  note: "Highest close rate and fastest payback. Isolated exact/phrase campaigns with dedicated landing pages.",
                },
                {
                  tier: "TIER 2 · EXPAND PROFITABLY",
                  badge: "25–30% Budget",
                  title: "Comparison & Pricing Research",
                  examples:
                    '"best commercial solar financing CA", "HubSpot vs Salesforce cost", category comparisons',
                  note: "High-intent committees evaluating vendors. Captured with comparison landing pages and retargeting.",
                },
                {
                  tier: "TIER 3 · BLOCKED BY DEFAULT",
                  badge: "0% Wasted Spend",
                  title: "Broad Noise & Non-Buyer Queries",
                  examples:
                    '"free templates", "jobs", "how to DIY", out-of-territory cities, competitor support logins',
                  note: "Aggressively excluded via shared negative lists audited every week so budget stays pure.",
                },
              ].map((t) => (
                <div
                  key={t.tier}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF4D73]">
                      {t.tier}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 font-mono text-[10px] text-white/80">
                      {t.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {t.title}
                  </h3>
                  <p className="rounded-xl bg-[#060000]/45 border border-white/10 p-3 font-mono text-[11px] text-white/75 leading-relaxed">
                    {t.examples}
                  </p>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                    {t.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACCOUNT WASTE AUDIT TABLE */}
      <section
        id="waste-audit"
        data-shape="bars"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                The waste audit
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Where most Google Ads accounts bleed budget — and how we fix it.
              </h2>
              <p className="text-sm text-white/70">
                Pair clean search capture with our{" "}
                <Link
                  href="/web-development/ui-ux"
                  className="text-[#FF4D73] hover:underline"
                >
                  CRO landing page design
                </Link>{" "}
                and{" "}
                <Link
                  href="/campaigns/crm-automation"
                  className="text-[#FF4D73] hover:underline"
                >
                  CRM offline conversion sync
                </Link>{" "}
                to turn paid search into your most predictable revenue lever.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    <th className="py-3 pr-4">Account Lever</th>
                    <th className="py-3 pr-4 text-[#FF9AB0]">
                      Common Leak We Find
                    </th>
                    <th className="py-3 text-emerald-300">
                      Katella Digital Standard
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {wasteAuditRows.map((row) => (
                    <tr key={row.area} className="hover:bg-white/[0.02]">
                      <td className="py-4 pr-4 font-display font-bold text-white whitespace-nowrap">
                        {row.area}
                      </td>
                      <td className="py-4 pr-4 text-white/65 leading-relaxed">
                        <span className="inline-flex items-start gap-2">
                          <X className="h-4 w-4 text-[#FF4D73] shrink-0 mt-0.5" />
                          <span>{row.waste}</span>
                        </span>
                      </td>
                      <td className="py-4 text-white/85 leading-relaxed">
                        <span className="inline-flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{row.katella}</span>
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

      {/* 4. 6-CARD GOOGLE ADS SCOPE + 90-DAY STABILIZATION CURVE */}
      <section
        data-shape="growth-arrow"
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
              Full-stack Google Ads management.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Target,
                  title: "High-Intent Search Campaigns",
                  desc: "Tightly themed exact & phrase ad groups engineered for relevance, high CTR, and lower cost per click.",
                },
                {
                  icon: Layers,
                  title: "Google Shopping & PMax Control",
                  desc: "Clean Merchant Center feeds, margin-based SKU segmentation, and strict brand exclusion rules.",
                },
                {
                  icon: Ban,
                  title: "Weekly Search Term & Negative Hygiene",
                  desc: "Human weekly reviews blocking irrelevant queries before they drain another dollar.",
                },
                {
                  icon: MousePointerClick,
                  title: "Ad Copy & Extension Testing",
                  desc: "Structured RSA headline tests, sitelinks, callouts, and structured snippets built around buyer objections.",
                },
                {
                  icon: ShieldCheck,
                  title: "Enhanced & Offline CRM Tracking",
                  desc: "Server-side GTM, call tracking, and closed-won deal values synced back to Google Ads bidding.",
                },
                {
                  icon: Gauge,
                  title: "90-Day Scaling Sprints",
                  desc: "Days 1–14 stop waste, Days 15–45 calibrate bidding on real leads, Days 46–90 scale winning campaigns profitably.",
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

          {/* 90-Day Scaling Strip */}
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              90-Day Stabilization &amp; Scale
            </p>
            <h3 className="font-display font-bold text-2xl text-white mb-6">
              How we take an account from messy to predictable.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  phase: "Days 1–14 · Stop the Bleed",
                  icon: Filter,
                  desc: "Audit search terms, fix broken GA4/call tracking, enforce location & brand guardrails, and cut non-converting spend immediately.",
                },
                {
                  phase: "Days 15–45 · Calibrate & Test",
                  icon: BarChart3,
                  desc: "Launch restructured intent ad groups, message-matched landing pages, and offline CRM conversion feedback loops.",
                },
                {
                  phase: "Days 46–90 · Scale Winners",
                  icon: DollarSign,
                  desc: "Shift budget into top-margin keywords & ZIP codes, expand into YouTube/Shopping remarketing, and feed winning terms into SEO.",
                },
              ].map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.phase}
                    className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
                  >
                    <div className="kd-icon-box h-10 w-10 rounded-xl flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-display font-bold text-base text-white">
                      {p.phase}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Precision search capture across Orange County, California & nationwide."
        description="We tailor ZIP-level bid adjustments, local call extensions, and regional landing pages so every paid click matches the exact territories you serve."
      />

      <ServiceFaqSection
        heading="Google Ads questions."
        faqs={GOOGLE_ADS_FAQS}
      />

      <SiloRelatedLinks currentPath="/digital-marketing/google-ads" />

      <ServiceAuditCta
        eyebrow="Free account audit"
        heading="Let's see how much spend you can recover this week."
        description="Give us read-only access to your Google Ads account (or share your target market) and we'll send back a written breakdown of wasted spend and immediate CPA wins."
        defaultService="Google Ads & Paid Search"
        formHeading="Request a free Google Ads audit"
        formSubheading="Tell us your target CPA or monthly budget — we reply within 1 business day."
        ctaLabel="Audit my Google Ads"
      />
    </ServicePageFrame>
  );
}
