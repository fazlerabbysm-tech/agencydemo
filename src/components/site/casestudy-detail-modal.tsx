"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { caseStudyDetails, type CaseStudyDetail } from "@/data/caseStudies";
import Navbar from "@/components/site/navbar";

interface Props {
  slug: string | null;
  onClose: () => void;
  onSwitchCaseStudy: (slug: string) => void;
  onOpenService: (slug: string) => void;
  onOpenPortfolio?: (slug: string) => void;
}

export default function CaseStudyModal({
  slug,
  onClose,
  onSwitchCaseStudy,
  onOpenService,
  onOpenPortfolio,
}: Props) {
  const caseStudy = caseStudyDetails.find((c) => c.slug === slug);

  useEffect(() => {
    if (caseStudy) {
      document.body.style.overflow = "hidden";
      const el = document.getElementById("casestudy-page-scroll");
      if (el) el.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [caseStudy]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {caseStudy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-white"
        >
          <Navbar
            variant="service"
            onBack={onClose}
            scrollContainerId="casestudy-page-scroll"
            onOpenService={(s) => { onClose(); onOpenService(s); }}
            onOpenPortfolio={(s) => { onClose(); onOpenPortfolio?.(s); }}
            onOpenCaseStudy={(s) => { onClose(); onSwitchCaseStudy(s); }}
          />

          <motion.div
            id="casestudy-page-scroll"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-screen overflow-y-auto"
          >
            <CaseStudyContent
              key={caseStudy.slug}
              caseStudy={caseStudy}
              onSwitchCaseStudy={onSwitchCaseStudy}
              onOpenService={onOpenService}
              onClose={onClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseStudyContent({
  caseStudy,
  onSwitchCaseStudy,
  onOpenService,
  onClose,
}: {
  caseStudy: CaseStudyDetail;
  onSwitchCaseStudy: (slug: string) => void;
  onOpenService: (slug: string) => void;
  onClose: () => void;
}) {
  const otherCaseStudies = caseStudyDetails.filter((c) => c.slug !== caseStudy.slug);
  const currentIndex = caseStudyDetails.findIndex((c) => c.slug === caseStudy.slug);
  const prevCS = caseStudyDetails[(currentIndex - 1 + caseStudyDetails.length) % caseStudyDetails.length];
  const nextCS = caseStudyDetails[(currentIndex + 1) % caseStudyDetails.length];

  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1200px] w-full px-5 sm:px-6 md:px-10 py-16 md:py-24 pt-28 md:pt-36">
          {/* Client logo */}
          <div className="mb-6 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-white/10 border border-white/20 overflow-hidden flex items-center justify-center">
              <img
                src={caseStudy.clientLogo}
                alt={`${caseStudy.clientName} logo`}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-white/70">
              {caseStudy.clientName}
            </span>
          </div>

          {/* Result-led H1 title */}
          <h1 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-[9vw] md:text-[5vw] lg:text-[4.5vw] break-words max-w-4xl">
            {caseStudy.title}
          </h1>

          {/* 3-4 metrics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.metrics.map((m, i) => (
              <div key={i}>
                <div className="font-display font-bold text-2xl md:text-4xl tracking-tight">
                  {m.value}
                </div>
                <div className="mt-1 text-[10px] md:text-xs text-white/60 uppercase tracking-wide">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky CTA on mobile */}
          <div className="mt-8 sticky bottom-4 z-20 md:relative md:bottom-auto md:z-auto">
            <a
              href="#contact-casestudy"
              className="group inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full hover:bg-black hover:text-white border border-white transition-colors duration-300 shadow-lg md:shadow-none"
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                {caseStudy.ctaSticky}
              </span>
              <span className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <ArrowUpRight size={18} strokeWidth={2} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ SNAPSHOT SIDEBAR ============ */}
      <section className="bg-white py-10 md:py-14 border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-2">Client</p>
              <p className="font-display font-bold text-base md:text-lg">{caseStudy.snapshot.client}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-2">Industry</p>
              <p className="font-display font-bold text-base md:text-lg">{caseStudy.snapshot.industry}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-2">Services</p>
              <div className="flex flex-col gap-1">
                {caseStudy.snapshot.services.map((s) => (
                  <button
                    key={s}
                    onClick={() => onOpenService(caseStudy.serviceSlug)}
                    className="text-left text-sm text-black/70 hover:text-black underline underline-offset-2 decoration-black/30 hover:decoration-black transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-2">Timeline</p>
              <p className="font-display font-bold text-base md:text-lg">{caseStudy.snapshot.timeline}</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-black/60">
            {" "}
            <button
              onClick={() => onOpenService(caseStudy.serviceSlug)}
              className="underline underline-offset-4 hover:text-black font-medium"
            >
              Explore {caseStudy.snapshot.services[0]} →
            </button>
          </p>
        </div>
      </section>

      {/* ============ CHALLENGE ============ */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
                Challenge
              </span>
              <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[1.05] text-3xl md:text-5xl lg:text-6xl mb-8">
                {caseStudy.challengeTitle}
              </h2>
              {caseStudy.challengeText.map((p, i) => (
                <p key={i} className="text-base md:text-lg text-white/70 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
              <img
                src={caseStudy.challengeImage}
                alt={caseStudy.challengeTitle}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ APPROACH ============ */}
      <section className="bg-white py-16 md:py-24 border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 order-2 lg:order-1">
              <img
                src={caseStudy.approachImage}
                alt={caseStudy.approachTitle}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-black/50">
                Approach
              </span>
              <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[1.05] text-3xl md:text-5xl lg:text-6xl mb-8">
                {caseStudy.approachTitle}
              </h2>
              {caseStudy.approachText.map((p, i) => (
                <p key={i} className="text-base md:text-lg text-black/70 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE SHIPPED ============ */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            {caseStudy.shippedTitle}
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[1.05] text-3xl md:text-5xl lg:text-6xl mb-6">
            Deliverables & visuals
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-12">
            {caseStudy.shippedIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudy.shipItems.map((item, i) => (
              <div key={i}>
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <a
            href={caseStudy.liveProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-black px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors duration-300"
          >
            See the live project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* ============ RESULTS ============ */}
      <section className="bg-white py-16 md:py-24 border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-black/50">
            {caseStudy.resultsTitle}
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[1.05] text-3xl md:text-5xl lg:text-6xl mb-10">
            Before & after
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10">
            {caseStudy.resultsMetrics.map((m, i) => (
              <div key={i} className="border-t border-black/15 pt-4">
                <div className="font-display font-bold text-xl md:text-3xl tracking-tight">
                  {m.value}
                </div>
                <div className="mt-1 text-[10px] md:text-xs text-black/50 uppercase tracking-wide">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
            <img
              src={caseStudy.resultsImage}
              alt={caseStudy.resultsTitle}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Want these results? Book a call */}
          <div className="mt-10 bg-black text-white py-8 md:py-10 px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-display font-bold text-xl md:text-2xl tracking-tight">
              Want these results?
            </p>
            <a
              href="#contact-casestudy"
              className="group inline-flex items-center gap-3 bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full hover:bg-transparent hover:text-white border border-white transition-colors duration-300"
            >
              <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">
                Book a call
              </span>
              <span className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-10 text-center">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            Testimonial
          </span>
          <blockquote className="mt-6 font-display font-light italic text-xl md:text-3xl lg:text-4xl leading-relaxed text-white/90">
            &ldquo;{caseStudy.testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-display font-bold text-lg md:text-xl">{caseStudy.testimonial.name}</p>
            <p className="mt-1 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50">
              {caseStudy.testimonial.role}
            </p>
          </div>
          <a
            href="#contact-casestudy"
            className="mt-10 inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-black px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors duration-300"
          >
            Work with us
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ============ LEARNINGS ============ */}
      <section className="bg-white py-16 md:py-24 border-b border-black/10">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-black/50">
            Learnings
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[1.05] text-3xl md:text-5xl lg:text-6xl mb-8">
            {caseStudy.learningsTitle}
          </h2>
          {caseStudy.learningsText.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-black/70 leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ============ SERVICES USED ============ */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            Services used
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[1.05] text-3xl md:text-5xl lg:text-6xl mb-10">
            What we did
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.servicesUsed.map((s, i) => (
              <button
                key={i}
                onClick={() => onOpenService(caseStudy.serviceSlug)}
                className="group text-left p-6 md:p-8 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-black/50 transition-colors">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display font-bold text-lg md:text-xl tracking-tight">
                  {s}
                </h3>
                <p className="mt-2 text-sm text-white/60 group-hover:text-black/60 transition-colors">
                  Explore {s}
                </p>
                <ArrowRight size={20} className="mt-4 transition-transform group-hover:translate-x-2" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RELATED CASE STUDIES ============ */}
      <section className="bg-white py-16 md:py-24 border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-black/50">
            {caseStudy.relatedTitle}
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[1.05] text-3xl md:text-5xl lg:text-6xl mb-10">
            More case studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {otherCaseStudies.slice(0, 3).map((c) => (
              <button
                key={c.slug}
                onClick={() => onSwitchCaseStudy(c.slug)}
                className="group text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-4">
                  <img
                    src={c.clientLogo}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </div>
                <h3 className="font-display font-bold text-base md:text-lg tracking-tight">
                  {c.clientName}
                </h3>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-black/50">
                  {c.snapshot.industry}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-black/60 group-hover:text-black border-b border-black/30 group-hover:border-black pb-0.5 transition-all">
                  Read next case study
                  <ArrowRight size={12} />
                </p>
              </button>
            ))}
          </div>

          {/* Next / Previous */}
          <div className="mt-12 flex items-center justify-between gap-4 border-t border-black/10 pt-8">
            <button
              onClick={() => onSwitchCaseStudy(prevCS.slug)}
              className="group flex items-center gap-3 text-left"
            >
              <span className="h-10 w-10 rounded-full border border-black/30 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowLeft size={16} />
              </span>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40">Previous</p>
                <p className="font-display font-bold text-sm md:text-base">{prevCS.clientName}</p>
              </div>
            </button>
            <button
              onClick={() => onSwitchCaseStudy(nextCS.slug)}
              className="group flex items-center gap-3 text-right"
            >
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40">Next</p>
                <p className="font-display font-bold text-sm md:text-base">{nextCS.clientName}</p>
              </div>
              <span className="h-10 w-10 rounded-full border border-black/30 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="contact-casestudy" className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 md:px-10 text-center">
          <h2 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl">
            {caseStudy.ctaTitle}
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60">
            Book a 30-minute call or view all our case studies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@cuttingedger.co"
              className="group inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full hover:bg-transparent hover:text-white border border-white transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Book a call
              </span>
              <span className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <button
              onClick={onClose}
              className="group inline-flex items-center gap-3 border border-white/30 px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              View all case studies
            </button>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-white text-black border-t border-black/10">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
            <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12 md:gap-8">
              {/* Brand + tagline */}
              <div className="col-span-2 md:col-span-5">
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                  className="flex items-center gap-2 group mb-5"
                >
                  <span className="h-2.5 w-2.5 bg-black rounded-full transition-transform group-hover:scale-150" />
                  <span className="font-display font-bold tracking-tight text-lg md:text-xl">
                    CUTTING <span className="font-light">EDGER</span>
                  </span>
                </a>
                <p className="text-black/60 text-sm md:text-base max-w-sm leading-relaxed">
                  E-commerce catalogs, color protocols, virtual production & CGI,
                  and white-label agency extension. Four services, one studio,
                  relentless precision.
                </p>
              </div>

              {/* Link columns */}
              <div className="md:col-span-3">
                <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4 sm:mb-5">
                  Work
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {caseStudyDetails.map((c) => (
                    <li key={c.slug}>
                      <button
                        onClick={() => onSwitchCaseStudy(c.slug)}
                        className="text-sm md:text-base text-black/80 hover:text-black relative inline-block group text-left"
                      >
                        {c.clientName}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4 sm:mb-5">
                  Contact
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <a href="mailto:hello@cuttingedger.co" className="text-sm md:text-base text-black/80 hover:text-black transition-colors">
                      hello@cuttingedger.co
                    </a>
                  </li>
                  <li><a href="#" className="text-sm md:text-base text-black/80 hover:text-black transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-sm md:text-base text-black/80 hover:text-black transition-colors">LinkedIn</a></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4 sm:mb-5">
                  Studio
                </p>
                <p className="text-sm md:text-base text-black/80">Berlin, Germany</p>
                <p className="text-sm md:text-base text-black/80 mt-2">Mon — Fri, 9–18 CET</p>
              </div>
            </div>
          </div>

          {/* Mega wordmark — centered */}
          <div className="px-5 sm:px-6 md:px-10 pb-6 sm:pb-8">
            <div className="font-display font-bold tracking-[-0.04em] leading-none text-[11vw] md:text-[10vw] lg:text-[9vw] text-black select-none text-center">
              CUTTING EDGER
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-black/10">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 py-5 sm:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase text-black/40">
              <span>© 2026 Cutting Edger — Berlin</span>
              <span>Made in monochrome</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
