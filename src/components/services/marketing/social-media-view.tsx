"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Film,
  Flame,
  Grid,
  Heart,
  MessageSquare,
  Share2,
  Sparkles,
  Users,
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
import { SOCIAL_MEDIA_FAQS } from "@/data/service-faqs";


const contentMix = [
  {
    pct: 40,
    label: "Authority & Education",
    desc: "Carousels, founder POVs & myth-busting reels that earn saves and shares.",
    color: "from-[#FF3363] to-[#C71F42]",
  },
  {
    pct: 30,
    label: "Short-Form Vertical Video",
    desc: "Hook-engineered Reels, TikToks & Shorts built for non-follower discovery.",
    color: "from-[#E81C49] to-[#9A0E28]",
  },
  {
    pct: 20,
    label: "Social Proof & Case Wins",
    desc: "Before/after transformations, client clips & real numbers that build trust.",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    pct: 10,
    label: "Direct Offer & Conversion",
    desc: "Clear CTAs driving DM inquiries, bookings, and landing page visits.",
    color: "from-amber-400 to-amber-600",
  },
];

const platformPlaybook = [
  {
    platform: "Instagram",
    role: "Brand storefront & local trust proof",
    format: "Reels, editorial carousels, interactive Stories",
    cadence: "4–5x / week + daily Stories",
    kpi: "Saves, profile visits, DM inquiries",
  },
  {
    platform: "TikTok",
    role: "High-velocity organic reach & trend discovery",
    format: "Native 15–45s vertical video with 2-sec hooks",
    cadence: "4–7x / week",
    kpi: "3-sec hold rate, completion rate, shares",
  },
  {
    platform: "LinkedIn",
    role: "B2B executive authority & deal pipeline",
    format: "Founder POVs, PDF breakdowns, case teardowns",
    cadence: "3–5x / week",
    kpi: "Decision-maker comments, profile views, inbound DMs",
  },
  {
    platform: "YouTube Shorts",
    role: "Search-indexed evergreen video discovery",
    format: "Repurposed high-retention vertical explainers",
    cadence: "3–4x / week",
    kpi: "Watch retention, subscriber lift, site clicks",
  },
];

export default function SocialMediaView() {
  const route = getRouteByPath("/digital-marketing/social-media-management")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH LIVE SOCIAL GRID & REELS VELOCITY MOCKUP */}
      <section
        id="home"
        data-shape="heart"
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
                Strategy · Short-Form Reels · Community · Paid Boost
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Social content engineered to earn attention — and convert it
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                We don&apos;t post generic filler just to keep a calendar green.
                Every Reel, carousel, motion piece, and daily reply is built to
                compound brand recall, spark real conversations, and turn
                followers into inbound leads.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Request a social audit
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#playbook"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  Platform playbook
                </a>
              </div>
            </motion.div>

            {/* Right Curated Social Grid & Engagement Velocity Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FF3363] to-[#9A0E28] flex items-center justify-center font-display font-extrabold text-white text-sm">
                      KD
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm text-white">
                        @yourbrand
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                        Managed Editorial Feed · 30-Day Lift
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 font-mono text-xs font-bold text-emerald-300">
                    +284% Reach
                  </span>
                </div>

                {/* 3x2 Visual Feed Tile Grid */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { type: "Reel", stat: "48.2K", label: "Hook Breakdown" },
                    { type: "Carousel", stat: "1,420", label: "Saves · Guide" },
                    { type: "Proof", stat: "3.8x", label: "Client Result" },
                    { type: "Reel", stat: "31.9K", label: "Behind Scenes" },
                    { type: "Motion", stat: "19.4K", label: "Product Demo" },
                    { type: "CTA", stat: "94 DMs", label: "Offer Trigger" },
                  ].map((tile) => (
                    <div
                      key={tile.label}
                      className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-3.5 aspect-square flex flex-col justify-between"
                    >
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF8CA4]">
                        {tile.type}
                      </span>
                      <div>
                        <p className="font-display font-extrabold text-base sm:text-lg text-white tabular-nums">
                          {tile.stat}
                        </p>
                        <p className="text-[10px] text-white/60 truncate">
                          {tile.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-1 text-center text-xs">
                  <div className="kd-glass-tile rounded-xl py-2.5 px-2">
                    <Heart className="h-3.5 w-3.5 text-[#FF4D73] mx-auto mb-1" />
                    <span className="font-bold text-white">6.4%</span>
                    <span className="block text-[10px] text-white/50">
                      Eng. Rate
                    </span>
                  </div>
                  <div className="kd-glass-tile rounded-xl py-2.5 px-2">
                    <Share2 className="h-3.5 w-3.5 text-[#FF4D73] mx-auto mb-1" />
                    <span className="font-bold text-white">3.2x</span>
                    <span className="block text-[10px] text-white/50">
                      Shares/Post
                    </span>
                  </div>
                  <div className="kd-glass-tile rounded-xl py-2.5 px-2">
                    <MessageSquare className="h-3.5 w-3.5 text-emerald-400 mx-auto mb-1" />
                    <span className="font-bold text-white">142</span>
                    <span className="block text-[10px] text-white/50">
                      Monthly DMs
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. 40 / 30 / 20 / 10 CONTENT PILLAR MIX VISUAL */}
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
                Editorial balance
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                The 40 / 30 / 20 / 10 social content formula.
              </h2>
              <p className="text-sm text-white/70">
                Feeds that only pitch get muted; feeds that only entertain never
                sell. Every monthly calendar balances reach, authority, proof,
                and conversion — powered by our in-house{" "}
                <Link
                  href="/campaigns/video-production"
                  className="text-[#FF4D73] hover:underline"
                >
                  video production
                </Link>{" "}
                and{" "}
                <Link
                  href="/branding/motion-graphics"
                  className="text-[#FF4D73] hover:underline"
                >
                  motion graphics
                </Link>{" "}
                teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contentMix.map((m) => (
                <div
                  key={m.label}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-5 space-y-3"
                >
                  <p className="font-display font-extrabold text-3xl text-white tabular-nums">
                    {m.pct}%
                  </p>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                      style={{ width: `${m.pct * 2}%` }}
                    />
                  </div>
                  <h3 className="font-display font-bold text-base text-white">
                    {m.label}
                  </h3>
                  <p className="text-xs text-white/65 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM ROLE PLAYBOOK TABLE */}
      <section
        id="playbook"
        data-shape="layers"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-2xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Channel playbook
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Each platform plays a distinct role.
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF4D73]">
                    <th className="py-3 pr-4">Platform</th>
                    <th className="py-3 pr-4">Primary Role</th>
                    <th className="py-3 pr-4">Hero Formats</th>
                    <th className="py-3 pr-4">Cadence</th>
                    <th className="py-3">Success KPI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {platformPlaybook.map((row) => (
                    <tr key={row.platform} className="hover:bg-white/[0.02]">
                      <td className="py-4 pr-4 font-display font-bold text-white whitespace-nowrap">
                        {row.platform}
                      </td>
                      <td className="py-4 pr-4 text-white/80">{row.role}</td>
                      <td className="py-4 pr-4 text-white/70">{row.format}</td>
                      <td className="py-4 pr-4 font-mono text-xs text-white/70 whitespace-nowrap">
                        {row.cadence}
                      </td>
                      <td className="py-4 text-emerald-300/90 font-medium">
                        {row.kpi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6-CARD A-TO-Z SCOPE + 5-STEP PROCESS */}
      <section
        data-shape="orbit"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Complete management
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-8">
              Handled from A to Z.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Calendar,
                  title: "Social Strategy & Calendar",
                  desc: "Monthly editorial roadmaps aligned to launches, seasonal spikes, and audience questions.",
                },
                {
                  icon: Film,
                  title: "In-House Reels & Content Creation",
                  desc: "Short-form video editing, carousels, photography direction, and scroll-stopping captions.",
                },
                {
                  icon: Users,
                  title: "Active Community Management",
                  desc: "Daily replies, DM qualification, and comment engagement that turn browsers into booked calls.",
                },
                {
                  icon: Flame,
                  title: "Trend-Jacking & Timely Hooks",
                  desc: "Fast turnaround reactive formats capturing cultural moments while they are peaking.",
                },
                {
                  icon: Grid,
                  title: "Visual Grid & Brand Cohesion",
                  desc: "Unmistakable feed art direction aligned tightly to your brand identity system.",
                },
                {
                  icon: BarChart3,
                  title: "Growth & Attribution Reporting",
                  desc: "Monthly breakdowns of retention, saves, DM leads, and winning posts ready for paid boost.",
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

          {/* 5-Step Social Rhythm */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              How we run your channels
            </p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
              Listen, plan, create, publish, grow.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                ["01", "Listen", "Audit audience behavior, competitors & winning hooks."],
                ["02", "Plan", "Approve next month's visual grid & Reel scripts early."],
                ["03", "Create", "Produce sharp vertical videos, carousels & captions."],
                ["04", "Publish", "Schedule consistently & manage daily DMs and comments."],
                ["05", "Grow", "Boost top organic winners & scale what drives leads."],
              ].map(([no, t, d]) => (
                <div
                  key={no}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-5 space-y-2"
                >
                  <span className="font-mono text-xs font-bold text-[#FF4D73]">
                    {no}
                  </span>
                  <h4 className="font-display font-bold text-lg text-white">
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
        heading="Social storytelling built for California & national audiences."
        description="We help local hospitality, consumer, healthcare, and B2B brands across Orange County and the US stand out in crowded feeds with editorial precision."
      />

      <ServiceFaqSection
        heading="Social media management questions."
        faqs={SOCIAL_MEDIA_FAQS}
      />

      <SiloRelatedLinks currentPath="/digital-marketing/social-media-management" />

      <ServiceAuditCta
        eyebrow="Upgrade your feed"
        heading="Let's turn your social channels into a growth engine."
        description="Send us your Instagram, TikTok, or LinkedIn handles — we'll reply with 3 specific content and conversion improvements you can apply immediately."
        defaultService="Social Media Management"
        formHeading="Request a free social channel audit"
        formSubheading="Share your handles & goals — we reply within one business day."
        ctaLabel="Audit my social channels"
      />
    </ServicePageFrame>
  );
}
