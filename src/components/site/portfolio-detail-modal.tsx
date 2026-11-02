"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { portfolioDetails, type PortfolioDetail } from "@/data/portfolio";
import Navbar from "@/components/site/navbar";

interface Props {
  slug: string | null;
  onClose: () => void;
  onSwitchProject: (slug: string) => void;
  onOpenService: (slug: string) => void;
}

export default function PortfolioDetailModal({
  slug,
  onClose,
  onSwitchProject,
  onOpenService,
}: Props) {
  const project = portfolioDetails.find((p) => p.slug === slug);

  // Lock body scroll when page is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      const el = document.getElementById("portfolio-page-scroll");
      if (el) el.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-white"
        >
          {/* === HOMEPAGE NAVBAR (same as homepage) === */}
          <Navbar
            variant="service"
            onBack={onClose}
            scrollContainerId="portfolio-page-scroll"
          />

          {/* === SCROLLABLE PAGE CONTENT === */}
          <motion.div
            id="portfolio-page-scroll"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-screen overflow-y-auto"
          >
            <PortfolioContent
              key={project.slug}
              project={project}
              onSwitchProject={onSwitchProject}
              onOpenService={onOpenService}
              onClose={onClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PortfolioContent({
  project,
  onSwitchProject,
  onOpenService,
  onClose,
}: {
  project: PortfolioDetail;
  onSwitchProject: (slug: string) => void;
  onOpenService: (slug: string) => void;
  onClose: () => void;
}) {
  const otherProjects = portfolioDetails.filter((p) => p.slug !== project.slug);
  const currentIndex = portfolioDetails.findIndex((p) => p.slug === project.slug);
  const prevProject = portfolioDetails[(currentIndex - 1 + portfolioDetails.length) % portfolioDetails.length];
  const nextProject = portfolioDetails[(currentIndex + 1) % portfolioDetails.length];

  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.heroImage})`,
            backgroundColor: "#0a0a0a",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

        <div className="relative z-10 mx-auto max-w-[1200px] w-full px-5 sm:px-6 md:px-10 py-16 md:py-24 pt-28 md:pt-36">
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-white/70 mb-6">
            {project.no} — Portfolio
          </p>
          <h1 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-[10vw] md:text-[6vw] lg:text-[5vw] break-words">
            {project.title}
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-white/80 max-w-2xl">
            {project.subtitle}
          </p>

          {/* Start a similar project — sticky on mobile */}
          <div className="mt-8 sticky bottom-4 z-20 md:relative md:bottom-auto md:z-auto">
            <a
              href="#contact-portfolio"
              className="group inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full hover:bg-black hover:text-white border border-white transition-colors duration-300 shadow-lg md:shadow-none"
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Start a similar project
              </span>
              <span className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <ArrowUpRight size={18} strokeWidth={2} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ PROJECT SNAPSHOT ============ */}
      <section className="bg-white py-12 md:py-16 border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-2">Client</p>
              <p className="font-display font-bold text-lg md:text-xl">{project.client}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-2">Industry</p>
              <p className="font-display font-bold text-lg md:text-xl">{project.industry}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-2">Year</p>
              <p className="font-display font-bold text-lg md:text-xl">{project.year}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-2">Services</p>
              <div className="flex flex-col gap-1">
                {project.services.map((s) => (
                  <button
                    key={s}
                    onClick={() => onOpenService(project.serviceSlug)}
                    className="text-left text-sm md:text-base text-black/70 hover:text-black underline underline-offset-2 decoration-black/30 hover:decoration-black transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-black/60">
           {" "}
            <button
              onClick={() => onOpenService(project.serviceSlug)}
              className="underline underline-offset-4 hover:text-black font-medium"
            >
              Explore {project.services[0]} →
            </button>
          </p>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            Overview
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[1.05] text-3xl md:text-5xl lg:text-6xl mb-8">
            {project.overviewTitle}
          </h2>
          {project.overviewText.map((para, i) => (
            <p key={i} className="text-base md:text-lg text-white/70 leading-relaxed mb-6 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ============ VISUAL GALLERY ============ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-black/50">
            Visual gallery
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10">
            The work, up close
          </h2>

          <div className="space-y-6 md:space-y-8">
            {/* Show only the first 3 images, then the "Like this? Let's talk" strip, then stop */}
            {project.gallery.slice(0, 3).map((img, i) => (
              <figure key={i}>
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1344}
                    height={768}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/50">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Mid-gallery strip: "Like this? Let's talk" — gallery ends here, no more images after */}
          <div className="my-10 md:my-12 bg-black text-white py-8 md:py-10 px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-display font-bold text-xl md:text-2xl tracking-tight">
              Like this? Let&apos;s talk.
            </p>
            <a
              href="#contact-portfolio"
              className="group inline-flex items-center gap-3 bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full hover:bg-transparent hover:text-white border border-white transition-colors duration-300"
            >
              <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">
                Start a project
              </span>
              <span className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ CREDITS ============ */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            Credits
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10">
            The team behind it
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {project.credits.map((c, i) => (
              <div key={i} className="border-t border-white/15 pt-4">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">
                  {c.role}
                </p>
                <p className="font-display font-bold text-lg md:text-xl tracking-tight">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#contact-portfolio"
            className="mt-10 inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-black px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors duration-300"
          >
            Read the full case study
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ============ RELATED PROJECTS ============ */}
      <section className="bg-white py-16 md:py-24 border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-black/50">
            {project.relatedTitle}
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10">
            More work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {otherProjects.map((p) => (
              <button
                key={p.slug}
                onClick={() => onSwitchProject(p.slug)}
                className="group text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-4">
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-black/50">
                  {p.industry} · {p.year}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-black/60 group-hover:text-black border-b border-black/30 group-hover:border-black pb-0.5 transition-all">
                  View project
                  <ArrowRight size={12} />
                </p>
              </button>
            ))}
          </div>

          {/* Next / Previous */}
          <div className="mt-12 flex items-center justify-between gap-4 border-t border-black/10 pt-8">
            <button
              onClick={() => onSwitchProject(prevProject.slug)}
              className="group flex items-center gap-3 text-left"
            >
              <span className="h-10 w-10 rounded-full border border-black/30 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowLeft size={16} />
              </span>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40">Previous</p>
                <p className="font-display font-bold text-sm md:text-base">{prevProject.title}</p>
              </div>
            </button>
            <button
              onClick={() => onSwitchProject(nextProject.slug)}
              className="group flex items-center gap-3 text-right"
            >
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40">Next</p>
                <p className="font-display font-bold text-sm md:text-base">{nextProject.title}</p>
              </div>
              <span className="h-10 w-10 rounded-full border border-black/30 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

          <p className="mt-8 text-sm text-black/50">
            <button onClick={onClose} className="underline underline-offset-4 hover:text-black font-medium">
              View all work
            </button>
          </p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="contact-portfolio" className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 md:px-10 text-center">
          <h2 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl">
            {project.ctaTitle}
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60">
            Tell us about your project — we&apos;ll respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@cuttingedger.co"
              className="group inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full hover:bg-transparent hover:text-white border border-white transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Start a similar project
              </span>
              <span className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-white text-black border-t border-black/10">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12 md:gap-8">
            <div className="col-span-2 md:col-span-5">
              <a href="#top" onClick={(e) => { e.preventDefault(); onClose(); }} className="flex items-center gap-2 group mb-5">
                <span className="h-2.5 w-2.5 bg-black rounded-full transition-transform group-hover:scale-150" />
                <span className="font-bold tracking-tight text-lg md:text-xl">
                  CUTTING <span className="font-light">EDGER</span>
                </span>
              </a>
              <p className="text-black/60 text-sm md:text-base max-w-sm leading-relaxed">
                E-commerce catalogs, color protocols, virtual production & CGI,
                and white-label agency extension. Four services, one studio,
                relentless precision.
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4 sm:mb-5">
                Work
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {portfolioDetails.map((p) => (
                  <li key={p.slug}>
                    <button
                      onClick={() => onSwitchProject(p.slug)}
                      className="text-sm md:text-base text-black/80 hover:text-black relative inline-block group text-left"
                    >
                      {p.title}
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

        <div className="px-5 sm:px-6 md:px-10 pb-6 sm:pb-8">
          <div className="font-bold tracking-[-0.04em] leading-none text-[11vw] md:text-[14vw] lg:text-[13vw] text-black select-none">
            CUTTING EDGER
          </div>
        </div>

        <div className="border-t border-black/10">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 py-5 sm:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase text-black/40">
            <span>© 2026 Cuttingedger — Berlin</span>
            <span>Made in monochrome</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
