"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  Cloud,
  Cpu,
  Database,
  Lock,
  Plug,
  Server,
  ShieldCheck,
  Terminal,
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
import { WEB_APPS_FAQS } from "@/data/service-faqs";


const stackLayers = [
  { no: "01", icon: Terminal, layer: "Presentation Layer", tech: "Next.js App Router · React 19 · Strict TypeScript" },
  { no: "02", icon: Lock, layer: "Auth & Permissions", tech: "HTTP-Only Signed Sessions · RBAC Roles · Rate Limits" },
  { no: "03", icon: Database, layer: "Data & State", tech: "PostgreSQL / Upstash Redis · Zero-Downtime Migrations" },
  { no: "04", icon: Plug, layer: "Integrations & Webhooks", tech: "Stripe · HubSpot · Brevo · Resend · Custom REST APIs" },
  { no: "05", icon: Cloud, layer: "Edge Hosting & CI/CD", tech: "Vercel / AWS · Automated Typecheck, Lint & Monitoring" },
];

export default function WebAppsView() {
  const route = getRouteByPath("/web-development/web-applications")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH FULL-STACK ARCHITECTURE BLUEPRINT CARD */}
      <section
        id="home"
        data-shape="network"
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
                Client Portals · Quote Calculators · SaaS MVPs · APIs
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Custom web software built around your real workflow
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                When off-the-shelf SaaS tools force your team into clunky
                workarounds, we engineer clean, maintainable TypeScript web
                applications — wired straight into your{" "}
                <Link
                  href="/campaigns/crm-automation"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  CRM &amp; automation
                </Link>{" "}
                and{" "}
                <Link
                  href="/web-development/ui-ux"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  brand design system
                </Link>
                .
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Scope a web application
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right Full-Stack Blueprint Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    Production Stack Blueprint
                  </span>
                  <span className="font-mono text-[10px] text-emerald-300">
                    Type-Safe End-to-End
                  </span>
                </div>
                {stackLayers.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.no}
                      className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-3.5 flex items-center gap-3.5"
                    >
                      <div className="kd-icon-box h-9 w-9 shrink-0 rounded-xl flex items-center justify-center">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display font-bold text-sm text-white">
                          {s.layer}
                        </p>
                        <p className="font-mono text-[11px] text-white/60 truncate">
                          {s.tech}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. 4 HIGH-ROI WEB APPLICATION ARCHETYPES */}
      <section
        data-shape="layers"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              What we build
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Four custom web builds that pay for themselves quickly.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: Calculator,
                title: "Interactive Quote & ROI Calculators",
                desc: "Embed instant pricing, savings, or sizing tools inside your landing pages that double lead capture and pre-qualify buyers before sales calls.",
              },
              {
                icon: ShieldCheck,
                title: "Client & Partner Portals",
                desc: "Give clients secure login access to deliverables, invoices, live campaign metrics, approvals, and project milestones under your brand.",
              },
              {
                icon: Server,
                title: "Internal Ops & CRM Dashboards",
                desc: "Replace error-prone spreadsheets with fast role-based admin workspaces syncing leads, inventory, dispatch, and automated email/SMS workflows.",
              },
              {
                icon: Cpu,
                title: "B2B SaaS MVPs & Customer Tools",
                desc: "Launch investor-ready software products in 6–10 weeks with Stripe subscriptions, clean API architecture, and automated CI checks.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 sm:p-7 space-y-3.5"
                >
                  <div className="kd-icon-box h-11 w-11 rounded-2xl flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
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
        heading="Full-stack web engineering for Orange County & US companies."
        description="We engineer reliable web tools, portals, and SaaS platforms for ambitious teams across Southern California and nationwide."
      />

      <ServiceFaqSection
        heading="Web application questions."
        faqs={WEB_APPS_FAQS}
      />

      <SiloRelatedLinks currentPath="/web-development/web-applications" />

      <ServiceAuditCta
        eyebrow="Technical scoping"
        heading="Have a web tool, portal, or calculator in mind?"
        description="Tell us the core workflow you want automated — we'll reply with an honest stack recommendation, phased v1 scope, and fixed milestone estimate."
        defaultService="Web & Mobile Applications"
        formHeading="Request a technical scoping call"
        formSubheading="Describe your workflow — our lead engineers reply within 1 business day."
        ctaLabel="Scope my web app"
      />
    </ServicePageFrame>
  );
}
