"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Plus, Calendar } from "lucide-react";
import type { ServiceDetail } from "@/data/services";

interface Props {
  service: ServiceDetail;
}

/**
 * Service detail page content. Refactored from the old modal:
 *  - Removed modal wrappers (Navbar / Footer / overlay)
 *  - Replaced all onClick callbacks with Next.js Link to real URLs
 *    /services/<slug>, /portfolio/<slug>, /case-studies/<slug>
 */
export default function ServiceDetailPage({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Other services — used in "Explore more" section
  const otherServices = [
    { slug: "ui-ux", name: "UI/UX Design", no: "01" },
    { slug: "motion-graphics", name: "Motion Graphics", no: "02" },
    { slug: "digital-marketing", name: "Digital Marketing", no: "03" },
    { slug: "web-app-dev", name: "Web & App Development", no: "04" },
  ].filter((s) => s.slug !== service.slug);

  // Portfolio projects that map to this service
  const servicePortfolioSlug: Record<string, string> = {
    "ui-ux": "aurora-goods",
    "motion-graphics": "echo-motors",
    "digital-marketing": "maison-noir",
    "web-app-dev": "agency-collective",
  };
  const caseStudySlug = servicePortfolioSlug[service.slug] || "aurora-goods";

  return (
    <div className="clear-both">
      {/* ============ HERO ============ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#060000] text-white pt-24 md:pt-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.problemImage})`,
            backgroundColor: "#060000",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060000] via-black/30 to-[#060000]/60" />

        <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 md:px-10 py-16 md:py-24">
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-[#C71F42] mb-6">
            {service.no} — {service.name}
          </p>
          <h1 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-[10vw] md:text-[6vw] lg:text-[5vw] break-words max-w-4xl">
            {service.heroTitle}
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
            {service.heroOutcome}
          </p>

          {/* Best for */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
              Best for:
            </span>
            {service.bestFor.map((b) => (
              <span
                key={b}
                className="text-xs md:text-sm px-3 py-1 rounded-full border border-[#C71F42]/40 text-white/80"
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-[#C71F42] text-black pl-6 pr-2 py-2 rounded-full hover:bg-transparent hover:text-[#C71F42] border border-[#C71F42] transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">Get a quote</span>
              <span className="h-10 w-10 rounded-full bg-black text-[#C71F42] flex items-center justify-center group-hover:bg-[#C71F42] group-hover:text-black transition-colors duration-300">
                <ArrowUpRight size={18} strokeWidth={2} />
              </span>
            </Link>
            <Link
              href="#work-modal"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-white/80 hover:text-[#C71F42] border-b border-[#C71F42]/40 hover:border-[#C71F42] pb-1 transition-all"
            >
              See examples
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/60">
            {service.notSureText} —{" "}
            <Link href="/#contact" className="underline underline-offset-4 hover:text-[#C71F42]">
              talk to us
            </Link>
          </p>
        </div>
      </section>

      {/* ============ PROBLEM ============ */}
      <section className="bg-[#1a0a0e] py-16 md:py-24 border-b border-[#3a1518]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">
                The problem
              </span>
              <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl text-white">
                {service.problemTitle}
              </h2>
              <ul className="mt-8 space-y-4">
                {service.problemPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C71F42]" />
                    <span className="text-base md:text-lg text-white/70 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#2a0a10]">
              <img
                src={service.problemImage}
                alt={service.problemTitle}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#3a1518]" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section className="bg-[#060000] text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">
            {service.includedTitle}
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-12">
            What you get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {service.subServices.map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#2a0a10] mb-5">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 font-mono text-xs tracking-[0.2em] text-[#C71F42]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm md:text-base text-white/60 leading-relaxed">{s.desc}</p>
                <Link
                  href="/#contact"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-white/60 hover:text-[#C71F42] transition-colors"
                >
                  Learn more
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="bg-[#1a0a0e] py-16 md:py-24 border-b border-[#3a1518]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">
                {service.processTitle}
              </span>
              <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10 text-white">
                Steps &amp; timeline
              </h2>
              <div className="space-y-6">
                {service.processSteps.map((p, i) => (
                  <div
                    key={i}
                    className={`flex gap-5 p-5 md:p-6 border border-[#3a1518] rounded-lg bg-[#060000] hover:border-[#C71F42] transition-colors ${
                      i === 0
                        ? "md:ml-0"
                        : i === 1
                        ? "md:ml-12"
                        : i === 2
                        ? "md:ml-24"
                        : "md:ml-36"
                    }`}
                  >
                    <span className="font-display font-light text-4xl md:text-5xl leading-none tracking-tighter text-[#C71F42]/50 shrink-0">
                      {p.step}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4 mb-1">
                        <h3 className="font-display font-bold text-lg md:text-xl tracking-tight text-white">
                          {p.title}
                        </h3>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 shrink-0">
                          {p.duration}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-white/60 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center gap-3 bg-[#C71F42] text-black px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-transparent hover:text-[#C71F42] border border-[#C71F42] transition-colors duration-300"
              >
                <Calendar size={16} />
                Book a discovery call
              </Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#2a0a10]">
              <img
                src={service.processImage}
                alt="Process"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#3a1518]" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELATED WORK ============ */}
      <section id="work-modal" className="bg-[#060000] text-white py-16 md:py-24 border-b border-[#3a1518]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">
            Related work
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-12">
            Recent {service.name.toLowerCase()} projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {service.relatedWork.map((w, i) => (
              <Link
                key={i}
                href={`/portfolio/${caseStudySlug}`}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#2a0a10] mb-4">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#3a1518]" />
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl tracking-tight">{w.title}</h3>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">{w.cat}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-white/60 hover:text-[#C71F42] border-b border-[#C71F42]/40 hover:border-[#C71F42] pb-0.5 transition-all">
                  View project
                  <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/50">
            See all {service.name.toLowerCase()} work —{" "}
            <Link href="/#work" className="underline underline-offset-4 hover:text-[#C71F42]">
              view full archive
            </Link>
          </p>
        </div>
      </section>

      {/* ============ CASE STUDY + TESTIMONIAL ============ */}
      <section className="bg-[#1a0a0e] text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Link href={`/case-studies/${caseStudySlug}`} className="block relative aspect-[4/3] overflow-hidden bg-[#2a0a10] group">
              <img
                src={service.caseStudyImage}
                alt="Case study"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
            </Link>
            <div>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">
                Case study
              </span>
              <div className="mt-4 font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none text-[#C71F42]">
                {service.caseStudyMetric}
              </div>
              <blockquote className="mt-8 text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-display font-light italic">
                &ldquo;{service.caseStudyQuote}&rdquo;
              </blockquote>
              <p className="mt-6 font-mono text-xs tracking-[0.2em] uppercase text-white/50">
                {service.caseStudyAuthor}
              </p>
              <Link
                href={`/case-studies/${caseStudySlug}`}
                className="mt-8 inline-flex items-center gap-3 border border-[#C71F42]/40 hover:bg-[#C71F42] hover:text-black px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              >
                Read the full case study
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-[#060000] py-16 md:py-24 border-b border-[#3a1518]">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">
            {service.faqTitle}
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10 text-white">
            Questions, answered
          </h2>
          <div className="border-t border-[#3a1518]">
            {service.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-[#3a1518]">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full py-5 md:py-6 flex items-center gap-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-xs tracking-[0.2em] text-white/40 shrink-0">0{i + 1}</span>
                    <span className="flex-1 font-display font-medium text-base md:text-xl tracking-tight text-white">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 h-8 w-8 md:h-9 md:w-9 rounded-full border border-[#C71F42]/40 flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "bg-[#C71F42] text-black rotate-45" : ""
                      }`}
                    >
                      <Plus size={14} strokeWidth={2} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 md:pb-7 pl-8 md:pl-12 pr-10 md:pr-14 text-sm md:text-base text-white/70 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-sm text-white/60">
            Still have questions?{" "}
            <Link href="/#contact" className="underline underline-offset-4 hover:text-[#C71F42] font-medium">
              Ask us directly
            </Link>
          </p>
        </div>
      </section>

      {/* ============ RELATED SERVICES ============ */}
      <section className="bg-[#1a0a0e] text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">
            Related services
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10">
            Explore more
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group text-left p-6 md:p-8 border border-[#3a1518] hover:border-[#C71F42] hover:bg-[#C71F42]/5 transition-all duration-300 rounded-lg"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C71F42]">{s.no}</span>
                <h3 className="mt-3 font-display font-bold text-xl md:text-2xl tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm text-white/60">Explore {s.name}</p>
                <ArrowRight size={20} className="mt-4 transition-transform group-hover:translate-x-2 text-[#C71F42]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section id="contact-page" className="bg-[#060000] py-16 md:py-24 border-t border-[#3a1518]">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <h2 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl text-white">
            Ready to start?
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60">
            Book a 30-minute call or send us your brief — we&apos;ll respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-[#C71F42] text-black pl-6 pr-2 py-2 rounded-full hover:bg-transparent hover:text-[#C71F42] border border-[#C71F42] transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">Book a call</span>
              <span className="h-10 w-10 rounded-full bg-black text-[#C71F42] flex items-center justify-center group-hover:bg-[#C71F42] group-hover:text-black transition-colors">
                <Calendar size={16} />
              </span>
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 border border-[#C71F42]/40 px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-[#C71F42] hover:text-black transition-colors duration-300"
            >
              Send your brief
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
