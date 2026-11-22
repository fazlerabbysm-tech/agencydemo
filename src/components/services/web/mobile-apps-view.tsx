"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Check,
  CreditCard,
  Layers,
  Palette,
  Plug,
  Server,
  Smartphone,
  Store,
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
import { MOBILE_APPS_FAQS } from "@/data/service-faqs";


const costDrivers = [
  {
    no: "01",
    icon: Smartphone,
    title: "Screens & User Flows",
    desc: "A focused booking or loyalty companion app has far fewer states than a two-sided marketplace with chat and scheduling.",
  },
  {
    no: "02",
    icon: Server,
    title: "Backend & Admin Console",
    desc: "The cloud APIs, database, and web admin dashboard your team uses to manage users, content, push alerts, and orders.",
  },
  {
    no: "03",
    icon: Plug,
    title: "Third-Party Integrations",
    desc: "Apple Pay, Google Pay, Stripe, Google Maps, SMS/OTP, plus real-time links to your ERP, CRM, or POS.",
  },
  {
    no: "04",
    icon: Layers,
    title: "iOS, Android or Both",
    desc: "Shared cross-platform TypeScript/React Native or Flutter vs dual native Swift & Kotlin codebases.",
  },
  {
    no: "05",
    icon: Palette,
    title: "Custom UI & Motion Depth",
    desc: "Clean component-driven design system vs bespoke gesture interactions, micro-animations, and custom illustrations.",
  },
];

export default function MobileAppsView() {
  const route = getRouteByPath("/web-development/mobile-apps")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH CROSS-PLATFORM VS NATIVE DECISION CARD */}
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
              className="lg:col-span-6 space-y-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                iOS · Android · React Native · Flutter · ASO Growth
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Mobile apps people actually keep on their home screen
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                From loyalty &amp; commerce companions to booking platforms and
                connected B2B field apps, we design, engineer, launch, and grow
                iOS &amp; Android products paired with{" "}
                <Link
                  href="/digital-marketing/performance-marketing"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  user acquisition campaigns
                </Link>{" "}
                and{" "}
                <Link
                  href="/web-development/ui-ux"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  thumb-zone mobile UX
                </Link>
                .
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Scope your mobile app
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right Cross-Platform vs Native Decision Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                  Architecture Decision Guide
                </p>

                <div className="rounded-2xl border border-[#FF4D73]/50 bg-gradient-to-br from-[#C71F42]/20 to-[#060000]/80 p-5 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-display font-bold text-base text-white">
                      Cross-Platform (React Native / Flutter)
                    </h2>
                    <span className="rounded-full bg-[#E81C49] px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase text-white">
                      Recommended
                    </span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    One shared codebase shipping simultaneously to iOS &amp;
                    Android — fastest path to both stores with native 60fps UX
                    and half the ongoing maintenance cost.
                  </p>
                </div>

                <div className="kd-glass-tile rounded-2xl p-5 space-y-2">
                  <h3 className="font-display font-bold text-base text-white">
                    Native (Swift + Kotlin)
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Best reserved for hardware-intensive AR/Bluetooth, complex
                    offline media editing, or OS-exclusive apps with dedicated
                    dual-platform engineering teams.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[11px] pt-1">
                  {[
                    [CreditCard, "Apple & Google Pay"],
                    [Bell, "Smart Push & Loyalty"],
                    [Store, "App Store & ASO"],
                  ].map(([IconComp, label]) => {
                    const Icon = IconComp as typeof Bell;
                    return (
                      <div key={label as string} className="kd-glass-tile rounded-xl p-3 space-y-1">
                        <Icon className="h-4 w-4 text-[#FF4D73] mx-auto" />
                        <span className="block text-white/80 font-medium">
                          {label as string}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. "WHAT DRIVES THE COST OF AN APP" 5-LEVER TRANSPARENCY BREAKDOWN */}
      <section
        data-shape="bars"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-8">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Transparent scoping
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                What actually drives the cost of a mobile app.
              </h2>
              <p className="text-sm text-white/70">
                Any agency throwing out a number before checking these five
                levers is guessing. We break down every line cleanly during
                scoping:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {costDrivers.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.no}
                    className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="kd-icon-box h-10 w-10 rounded-xl flex items-center justify-center">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs text-[#FF4D73]">
                        {c.no}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-white">
                      {c.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4-PHASE APP DELIVERY TIMELINE */}
      <section
        data-shape="orbit"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              From concept to App Store
            </p>
            <h2 className="font-display font-bold text-3xl text-white">
              Four focused phases to launch.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["Week 1–2", "Product Scope & Feature Map", "Cut v1 bloat, define user roles, APIs, and retention milestones."],
              ["Week 3–4", "Interactive Mobile Prototype", "Click-test real iOS & Android prototypes in your hand before coding."],
              ["Week 5–10", "Engineering & TestFlight Beta", "Bi-weekly TestFlight & Play Console builds tested on real devices."],
              ["Week 11+", "Store Approval & Install Growth", "App Store/Play compliance, ASO listing & acquisition launch."],
            ].map(([wk, t, d]) => (
              <div
                key={wk}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-2.5"
              >
                <span className="font-mono text-xs font-bold text-[#FF4D73]">
                  {wk}
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
        heading="Mobile product engineering from Orange County to both App Stores."
        description="We partner with consumer, retail, hospitality, and service companies across Southern California and nationwide to build high-retention mobile apps."
      />

      <ServiceFaqSection
        heading="Mobile app development questions."
        faqs={MOBILE_APPS_FAQS}
      />

      <SiloRelatedLinks currentPath="/web-development/mobile-apps" />

      <ServiceAuditCta
        eyebrow="Start your app scope"
        heading="Ready to turn your app idea into a clear v1 roadmap?"
        description="Share your core app concept and target platforms — we'll come back with an honest cross-platform vs native recommendation, phased v1 scope, and realistic timeline."
        defaultService="Web & Mobile Applications"
        formHeading="Request a mobile app scoping session"
        formSubheading="Tell us your key features — our product leads reply within 1 business day."
        ctaLabel="Scope my mobile app"
      />
    </ServicePageFrame>
  );
}
