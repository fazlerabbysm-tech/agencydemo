"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clapperboard,
  Film,
  Layers,
  MonitorPlay,
  Play,
  Smartphone,
  Sparkles,
  Zap,
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
import { MOTION_GRAPHICS_FAQS } from "@/data/service-faqs";


const formatMatrix = [
  {
    ratio: "9:16",
    use: "Reels, TikTok & Shorts",
    spec: "1080×1920 · 60fps · Caption-safe zones",
    icon: Smartphone,
  },
  {
    ratio: "4:5 / 1:1",
    use: "Meta & LinkedIn Feeds",
    spec: "1080×1350 · Silent-first kinetic type",
    icon: Layers,
  },
  {
    ratio: "16:9",
    use: "YouTube & Hero Explainers",
    spec: "4K Master · Broadcast sound mix",
    icon: MonitorPlay,
  },
  {
    ratio: "JSON",
    use: "Web & App Lottie UI",
    spec: "<80 KB vector · Zero LCP drag",
    icon: Zap,
  },
];

export default function MotionGraphicsView() {
  const route = getRouteByPath("/branding/motion-graphics")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH ASPECT-RATIO & DELIVERY SPEC MATRIX */}
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
                Product Explainers · Paid Ad Hooks · Brand Motion Systems
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Motion built to win the first two seconds of the scroll
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                Static graphics get scrolled past in milliseconds. We craft
                kinetic brand systems, product UI explainers, and modular
                vertical ad animations designed directly alongside our{" "}
                <Link
                  href="/digital-marketing/performance-marketing"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  Performance Marketing
                </Link>{" "}
                and{" "}
                <Link
                  href="/campaigns/video-production"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  Video Production
                </Link>{" "}
                teams.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Brief a motion project
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right Multi-Format Delivery Spec Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    Multi-Ratio Production Matrix
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-300">
                    <Play className="h-3 w-3 fill-current" /> 60fps Masters
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {formatMatrix.map((f) => {
                    const Icon = f.icon;
                    return (
                      <div
                        key={f.ratio}
                        className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-4 space-y-2.5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="kd-icon-box h-9 w-9 rounded-xl flex items-center justify-center">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="font-mono text-xs font-bold text-[#FF8CA4]">
                            {f.ratio}
                          </span>
                        </div>
                        <p className="font-display font-bold text-sm text-white">
                          {f.use}
                        </p>
                        <p className="font-mono text-[10px] text-white/55">
                          {f.spec}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. 4 MOTION DISCIPLINES + 4-STEP STORYBOARD-TO-MASTER PIPELINE */}
      <section
        data-shape="spark"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Motion disciplines
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-8">
              What our motion studio crafts.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Film,
                  title: "Product & SaaS Explainers",
                  desc: "Turn complex dashboards, flows, and services into crystal-clear 60-second stories that convert.",
                },
                {
                  icon: Sparkles,
                  title: "Paid Social Ad Variations",
                  desc: "Modular 3-second hook swaps engineered for Meta, TikTok, and YouTube conversion testing.",
                },
                {
                  icon: Clapperboard,
                  title: "Logo Stingers & Broadcast Kits",
                  desc: "Animated logo intros, lower thirds, and kinetic title templates for every brand video.",
                },
                {
                  icon: Zap,
                  title: "Web & UI Micro-Animations",
                  desc: "Lightweight Lottie and interactive vector animations elevating SaaS and marketing pages.",
                },
              ].map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3.5"
                  >
                    <div className="kd-icon-box h-11 w-11 rounded-2xl flex items-center justify-center">
                      <Icon className="h-5 w-5" />
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

          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Production workflow
            </p>
            <h3 className="font-display font-bold text-2xl text-white mb-6">
              Script, styleframes, animate, master.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ["01", "Script & Hook Map", "Lock the 2-second opener, pacing beats & conversion CTA."],
                ["02", "Styleframes", "Approve static key visual frames aligned tightly to your brand identity."],
                ["03", "Animation & Sound", "Smooth kinetic easing, custom SFX, voiceover & captioning."],
                ["04", "Multi-Ratio Delivery", "Export 9:16, 4:5, 16:9 & Lottie masters ready to launch."],
              ].map(([no, t, d]) => (
                <div key={no} className="kd-glass-tile rounded-2xl p-5 space-y-2">
                  <span className="font-mono text-xs font-bold text-[#FF4D73]">
                    {no}
                  </span>
                  <h4 className="font-display font-bold text-base text-white">
                    {t}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Motion design crafted in Anaheim for modern digital feeds."
        description="We produce high-craft animation packs for Orange County, Los Angeles, and nationwide US brands competing in fast-moving feeds."
      />

      <ServiceFaqSection
        heading="Motion graphics questions."
        faqs={MOTION_GRAPHICS_FAQS}
      />

      <SiloRelatedLinks currentPath="/branding/motion-graphics" />

      <ServiceAuditCta
        eyebrow="Bring your brand into motion"
        heading="Ready to ship scroll-stopping motion creative?"
        description="Tell us what you're launching — an explainer, a paid ad pack, or a brand motion kit — and we'll return a clear scope and turnaround plan."
        defaultService="Motion Graphics"
        formHeading="Brief your motion graphics project"
        formSubheading="Share your goals & formats — we reply within one business day."
        ctaLabel="Request motion quote"
      />
    </ServicePageFrame>
  );
}
