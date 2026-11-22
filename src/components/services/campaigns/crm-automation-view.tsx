"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  Check,
  Clock,
  Database,
  GitMerge,
  Mail,
  RefreshCw,
  Workflow,
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
import { CRM_AUTOMATION_FAQS } from "@/data/service-faqs";


const speedWaterfall = [
  { t: "00:00", title: "Lead Submits Form or Ad", desc: "UTMs, GCLID/FBCLID & service interest captured automatically." },
  { t: "00:05", title: "CRM Record & Owner Assigned", desc: "Deal created cleanly in HubSpot/CRM with zero manual copy-paste." },
  { t: "00:15", title: "Instant Alert & Branded Reply", desc: "Rep pinged via Slack/SMS + prospect receives booking link immediately." },
  { t: "Day 1–14", title: "Smart Follow-up Sequence", desc: "Multi-step nurture runs automatically — halting the instant they reply." },
  { t: "Closed-Won", title: "Offline Revenue Synced to Ads", desc: "Real deal value sent back to Google & Meta Ads to train Smart Bidding." },
];

const manualVsAuto = [
  { dim: "First Response Time", manual: "6–48 hours sitting in a shared inbox", auto: "Under 60 seconds with instant booking link" },
  { dim: "Follow-up Consistency", manual: "Reps stop after 1 unanswered call", auto: "Automated 3–5 touch sequence stopping on reply" },
  { dim: "Source Attribution", manual: '"How did you hear about us?" guesswork', auto: "100% UTM + click-ID capture tied to revenue" },
  { dim: "Ad Platform Learning", manual: "Bids optimize for spam & unqualified fills", auto: "Offline CRM deal values train Google & Meta AI" },
];

export default function CrmAutomationView() {
  const route = getRouteByPath("/campaigns/crm-automation")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH SPEED-TO-LEAD 5-MINUTE WATERFALL CARD */}
      <section
        id="home"
        data-shape="orbit"
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
                HubSpot · Speed-to-Lead · Email/SMS Flows · Closed-Loop ROI
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Stop losing paid leads inside slow manual follow-up
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                Generating leads with{" "}
                <Link
                  href="/digital-marketing/google-ads"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  Google Ads
                </Link>{" "}
                and{" "}
                <Link
                  href="/digital-marketing/performance-marketing"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  Performance Marketing
                </Link>{" "}
                is only half the battle. We wire clean CRM pipelines, instant
                lead routing, automated nurture flows, and closed-loop revenue
                sync so every qualified lead turns into booked revenue.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Audit my lead pipeline
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right Speed-to-Lead Waterfall Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    <Clock className="h-3.5 w-3.5" /> Automated Speed-to-Lead Flow
                  </span>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/45 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                    Closed-Loop
                  </span>
                </div>
                {speedWaterfall.map((w) => (
                  <div
                    key={w.t}
                    className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-3.5 flex items-start gap-3.5"
                  >
                    <span className="rounded-lg bg-[#C71F42]/25 border border-[#FF4D73]/45 px-2.5 py-1 font-mono text-[10px] font-bold text-[#FF8CA4] shrink-0 min-w-[74px] text-center">
                      {w.t}
                    </span>
                    <div>
                      <p className="font-display font-bold text-sm text-white">
                        {w.title}
                      </p>
                      <p className="text-xs text-white/65 mt-0.5">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MANUAL INBOX VS AUTOMATED REVENUE OPS COMPARISON TABLE */}
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
                Pipeline transformation
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Manual lead handling vs automated revenue ops.
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    <th className="py-3 pr-4">Stage</th>
                    <th className="py-3 pr-4 text-[#FF9AB0]">Manual Process</th>
                    <th className="py-3 text-emerald-300">
                      Katella Automated System
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {manualVsAuto.map((row) => (
                    <tr key={row.dim} className="hover:bg-white/[0.02]">
                      <td className="py-4 pr-4 font-display font-bold text-white whitespace-nowrap">
                        {row.dim}
                      </td>
                      <td className="py-4 pr-4 text-white/65">
                        <span className="inline-flex items-start gap-2">
                          <X className="h-4 w-4 text-[#FF4D73] shrink-0 mt-0.5" />
                          <span>{row.manual}</span>
                        </span>
                      </td>
                      <td className="py-4 text-white/90 font-medium">
                        <span className="inline-flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{row.auto}</span>
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

      {/* 3. 4 CORE CRM & AUTOMATION PILLARS */}
      <section
        data-shape="network"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Database, title: "CRM Setup & Hygiene", desc: "Clean HubSpot, Pipedrive, or Salesforce stages built around how your team actually sells." },
              { icon: BellRing, title: "Instant Lead Routing", desc: "Territory & round-robin assignment with instant SMS/Slack alerts and calendar booking links." },
              { icon: Mail, title: "Email & SMS Nurture", desc: "Branded onboarding, quote follow-ups, re-engagement, and review-generation sequences." },
              { icon: RefreshCw, title: "Offline Ad Attribution", desc: "Push real qualified & closed-won CRM deals back into Google & Meta Ads automatically." },
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
        heading="Revenue automation connecting Orange County & US sales teams."
        description="We wire clean CRM, email/SMS automation, and closed-loop ad attribution so marketing spend and sales follow-up operate as one system."
      />

      <ServiceFaqSection
        heading="CRM & automation questions."
        faqs={CRM_AUTOMATION_FAQS}
      />

      <SiloRelatedLinks currentPath="/campaigns/crm-automation" />

      <ServiceAuditCta
        eyebrow="Fix pipeline leaks"
        heading="Ready to connect every ad click directly to closed revenue?"
        description="Tell us which CRM and ad platforms you use today — we'll map out a clean speed-to-lead and closed-loop attribution plan."
        defaultService="CRM & Marketing Automation"
        formHeading="Request a CRM & automation audit"
        formSubheading="Share your current stack — we reply within one business day."
        ctaLabel="Audit my CRM funnel"
      />
    </ServicePageFrame>
  );
}
