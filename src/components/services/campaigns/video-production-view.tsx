"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Film,
  Layers,
  Scissors,
  Sparkles,
  Video,
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
import { VIDEO_PRODUCTION_FAQS } from "@/data/service-faqs";


const multiplicationOutputs = [
  { count: "1×", title: "Hero Brand / Product Film", spec: "16:9 4K · Homepage & Sales Decks" },
  { count: "3×", title: "Client Proof Case Stories", spec: "16:9 & 1:1 · Trust & Mid-Funnel" },
  { count: "12×", title: "Vertical Paid Ad Hook Cuts", spec: "9:16 · Meta, TikTok & Shorts Tests" },
  { count: "6×", title: "Retargeting & FAQ Clips", spec: "15–30s · Objection Closers" },
];

export default function VideoProductionView() {
  const route = getRouteByPath("/campaigns/video-production")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH 1-SHOOT MODULAR ASSET MULTIPLICATION MATRIX */}
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
                Brand Films · Client Proof · Modular Ad Suites
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                One strategic shoot. A quarter of converting video assets
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                We produce marketing-led commercial video engineered around
                funnel placement — pairing cleanly with our{" "}
                <Link
                  href="/branding/motion-graphics"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  motion graphics
                </Link>{" "}
                and{" "}
                <Link
                  href="/digital-marketing/performance-marketing"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  paid social testing
                </Link>{" "}
                teams so every frame drives pipeline.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Plan a modular shoot
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right 1-Shoot Multiplication Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    1-Shoot Asset Multiplication
                  </span>
                  <span className="rounded-full bg-[#E81C49]/25 border border-[#FF4D73]/45 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#FF8CA4]">
                    22+ Deliverables
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {multiplicationOutputs.map((m) => (
                    <div
                      key={m.title}
                      className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-4 space-y-2"
                    >
                      <span className="font-display font-extrabold text-2xl text-[#FF4D73]">
                        {m.count}
                      </span>
                      <p className="font-display font-bold text-sm text-white">
                        {m.title}
                      </p>
                      <p className="font-mono text-[10px] text-white/55">
                        {m.spec}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. 4 VIDEO FORMATS + 3-PHASE PRODUCTION PIPELINE */}
      <section
        data-shape="bolt"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Film, title: "Homepage Hero Films", desc: "60-second authority stories explaining your edge above the fold." },
              { icon: Video, title: "Client Case Studies", desc: "Authentic customer proof videos that accelerate high-ticket closes." },
              { icon: Sparkles, title: "Paid Ad Hook Suites", desc: "Multiple 3-second openers shot modularly for high-ROAS A/B testing." },
              { icon: Scissors, title: "Post, Color & Motion", desc: "Tight pacing, branded kinetic captions, color grade, and clean sound mix." },
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

          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Efficient production flow
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
              Script, capture, multiply.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: Clapperboard, wk: "Week 1", title: "Funnel Scripting & Hook Matrix", desc: "Map every video to a funnel stage and write modular 3-second hook variations." },
                { icon: Camera, wk: "Week 2", title: "Pre-Production & Capture", desc: "Shot lists, interview prep, lighting direction, and clean dual-aspect filming." },
                { icon: Layers, wk: "Week 3–4", title: "Editorial, Motion & Multi-Ratio Delivery", desc: "Deliver hero film, vertical paid ads, social clips, and captioned masters." },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.wk} className="kd-glass-tile rounded-2xl p-6 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#FF4D73]">
                        {s.wk}
                      </span>
                      <Icon className="h-4 w-4 text-white/30" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {s.desc}
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
        heading="Commercial brand video across Orange County, LA & nationwide."
        description="On-site shoots across Southern California and studio-guided remote productions for US teams who want video assets engineered to convert."
      />

      <ServiceFaqSection
        heading="Video production questions."
        faqs={VIDEO_PRODUCTION_FAQS}
      />

      <SiloRelatedLinks currentPath="/campaigns/video-production" />

      <ServiceAuditCta
        eyebrow="Scope your shoot"
        heading="Ready for video creative built to convert?"
        description="Tell us where your videos will live — homepage, YouTube, Meta/TikTok ads, or sales decks — and we'll propose a modular production package."
        defaultService="Video & Brand Production"
        formHeading="Request a video production brief"
        formSubheading="Share your campaign goals — we reply within one business day."
        ctaLabel="Get video quote"
      />
    </ServicePageFrame>
  );
}
