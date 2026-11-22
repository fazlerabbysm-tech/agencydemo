"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Component,
  Eye,
  Figma,
  Layers,
  MousePointerClick,
  Smartphone,
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
import { UI_UX_FAQS } from "@/data/service-faqs";


export default function UiUxView() {
  const route = getRouteByPath("/web-development/ui-ux")!;
  const [stage, setStage] = useState<"wireframe" | "hifi">("hifi");

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH INTERACTIVE WIREFRAME → HIGH-FIDELITY UI SWITCHER */}
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
                UX Audits · Figma Prototypes · Design Systems · CRO
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Interfaces engineered for clarity, speed, and conversion
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                We turn confusing funnels into frictionless digital experiences
                — from UX audits and clickable Figma prototypes to accessible
                component systems ready for{" "}
                <Link
                  href="/web-development"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  Next.js engineering
                </Link>{" "}
                and{" "}
                <Link
                  href="/digital-marketing/performance-marketing"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  paid campaign scaling
                </Link>
                .
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Request a UX teardown
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right Interactive Wireframe vs High-Fi Conversion UI Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3.5">
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    <Figma className="h-4 w-4" /> Interactive Design Stage
                  </span>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => setStage("wireframe")}
                      className={`rounded-full px-3 py-1 text-[11px] font-bold border transition-all cursor-pointer ${
                        stage === "wireframe"
                          ? "bg-white text-[#060000] border-white"
                          : "bg-white/[0.05] border-white/15 text-white/65"
                      }`}
                    >
                      01 Wireframe
                    </button>
                    <button
                      type="button"
                      onClick={() => setStage("hifi")}
                      className={`rounded-full px-3 py-1 text-[11px] font-bold border transition-all cursor-pointer ${
                        stage === "hifi"
                          ? "bg-[#E81C49] text-white border-[#FF6B8A]"
                          : "bg-white/[0.05] border-white/15 text-white/65"
                      }`}
                    >
                      02 High-Fi UI
                    </button>
                  </div>
                </div>

                {stage === "wireframe" ? (
                  <div className="rounded-2xl border border-dashed border-white/25 bg-[#060000]/50 p-5 space-y-4 font-mono">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-24 rounded bg-white/15" />
                      <div className="flex gap-2">
                        <div className="h-3 w-12 rounded bg-white/10" />
                        <div className="h-3 w-12 rounded bg-white/10" />
                      </div>
                    </div>
                    <div className="space-y-2 pt-2">
                      <div className="h-3 w-36 rounded bg-white/20" />
                      <div className="h-7 w-full rounded bg-white/15" />
                      <div className="h-7 w-4/5 rounded bg-white/15" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="h-16 rounded-lg border border-dashed border-white/20 flex items-center justify-center text-[10px] text-white/50">
                        Proof #1
                      </div>
                      <div className="h-16 rounded-lg border border-dashed border-white/20 flex items-center justify-center text-[10px] text-white/50">
                        Proof #2
                      </div>
                      <div className="h-16 rounded-lg border border-dashed border-white/20 flex items-center justify-center text-[10px] text-white/50">
                        Primary CTA
                      </div>
                    </div>
                    <p className="text-[11px] text-white/55">
                      Structural hierarchy &amp; CTA placement validated before
                      a single color or font is applied.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-[#FF4D73]/45 bg-gradient-to-br from-[#C71F42]/22 via-[#180409]/85 to-[#060000]/90 p-5 space-y-4">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-mono uppercase tracking-[0.16em] text-[#FF8CA4]">
                        Conversion-Ready Component
                      </span>
                      <span className="rounded-full bg-emerald-500/20 border border-emerald-400/45 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                        +42% Form Lift
                      </span>
                    </div>
                    <p className="font-display font-extrabold text-xl text-white leading-snug">
                      Clear offer above the fold. Instant trust proof. Zero
                      visual friction.
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="kd-glass-tile rounded-xl p-3">
                        <span className="font-bold text-white block">4.9★</span>
                        <span className="text-[10px] text-white/60">Trust</span>
                      </div>
                      <div className="kd-glass-tile rounded-xl p-3">
                        <span className="font-bold text-white block">24h</span>
                        <span className="text-[10px] text-white/60">SLA</span>
                      </div>
                      <div className="rounded-xl bg-[#E81C49] p-3 font-bold text-white flex items-center justify-center">
                        Book CTA →
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. 6-PART CONVERSION UI/UX DELIVERABLES */}
      <section
        data-shape="layers"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              UX &amp; conversion craft
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              How we eliminate drop-off across every screen.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Eye,
                title: "Funnel & Heatmap Audits",
                desc: "Identify exact scroll drop-offs, dead clicks, and form abandonment before redesigning.",
              },
              {
                icon: Layers,
                title: "Information Architecture",
                desc: "Logical navigation and page flow guiding prospects cleanly from curiosity to inquiry.",
              },
              {
                icon: MousePointerClick,
                title: "CRO Landing Pages",
                desc: "Dedicated campaign landing pages matching ad promise, proof hierarchy, and friction-free forms.",
              },
              {
                icon: Smartphone,
                title: "Mobile Thumb-Zone Design",
                desc: "Over 70% of ad traffic lands on mobile — every tap target, sticky bar, and form is designed mobile-first.",
              },
              {
                icon: Component,
                title: "Tokenized Figma Design Systems",
                desc: "Reusable buttons, cards, modals, and dark/light tokens that keep engineering velocity high.",
              },
              {
                icon: Sparkles,
                title: "Interactive Prototypes & Handoff",
                desc: "Clickable prototypes plus clean dev specs, spacing rules, and hover/focus motion guidelines.",
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
        heading="Conversion-led UI/UX design for Orange County & US products."
        description="We partner with SaaS founders, e-commerce leaders, and service brands across California to turn leaking pages into high-converting digital storefronts."
      />

      <ServiceFaqSection
        heading="UI/UX design questions."
        faqs={UI_UX_FAQS}
      />

      <SiloRelatedLinks currentPath="/web-development/ui-ux" />

      <ServiceAuditCta
        eyebrow="Free UX teardown"
        heading="Want to see where visitors drop off on your site?"
        description="Send us your primary landing page URL — we'll send back 3 concrete UX and conversion wins you can test immediately."
        defaultService="UI/UX Design"
        formHeading="Request a free UX teardown"
        formSubheading="Share your URL — our product designers reply within 1 business day."
        ctaLabel="Get my UX teardown"
      />
    </ServicePageFrame>
  );
}
