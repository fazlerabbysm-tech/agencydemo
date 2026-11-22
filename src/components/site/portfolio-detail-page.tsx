"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { portfolioDetails, type PortfolioDetail } from "@/data/portfolio";
import { getRouteBySlug } from "@/lib/service-routes";

interface Props {
  project: PortfolioDetail;
}

export default function PortfolioDetailPage({ project }: Props) {
  const servicePath =
    getRouteBySlug(project.serviceSlug)?.path || `/services`;
  const otherProjects = portfolioDetails.filter((p) => p.slug !== project.slug);
  const currentIndex = portfolioDetails.findIndex((p) => p.slug === project.slug);
  const prevProject =
    portfolioDetails[(currentIndex - 1 + portfolioDetails.length) % portfolioDetails.length];
  const nextProject = portfolioDetails[(currentIndex + 1) % portfolioDetails.length];

  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#060000] text-white pt-20 md:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.heroImage})`,
            backgroundColor: "#060000",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060000] via-black/30 to-[#060000]/60" />

        <div className="relative z-10 mx-auto max-w-[1200px] w-full px-5 sm:px-6 md:px-10 py-16 md:py-24">
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-[#C71F42] mb-6">
            {project.no} — Portfolio
          </p>
          <h1 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-[10vw] md:text-[6vw] lg:text-[5vw] break-words">
            {project.title}
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-white/80 max-w-2xl">
            {project.subtitle}
          </p>

          <div className="mt-8 sticky bottom-4 z-20 md:relative md:bottom-auto md:z-auto">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-[#C71F42] text-black pl-6 pr-2 py-2 rounded-full hover:bg-transparent hover:text-[#C71F42] border border-[#C71F42] transition-colors duration-300 shadow-lg md:shadow-none"
            >
              <span className="text-sm font-medium tracking-wide uppercase">Start a similar project</span>
              <span className="h-10 w-10 rounded-full bg-black text-[#C71F42] flex items-center justify-center group-hover:bg-[#C71F42] group-hover:text-black transition-colors duration-300">
                <ArrowUpRight size={18} strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PROJECT SNAPSHOT ============ */}
      <section className="bg-[#1a0a0e] py-12 md:py-16 border-b border-[#3a1518]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#C71F42] mb-2">Client</p>
              <p className="font-display font-bold text-lg md:text-xl text-white">{project.client}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#C71F42] mb-2">Industry</p>
              <p className="font-display font-bold text-lg md:text-xl text-white">{project.industry}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#C71F42] mb-2">Year</p>
              <p className="font-display font-bold text-lg md:text-xl text-white">{project.year}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#C71F42] mb-2">Services</p>
              <div className="flex flex-col gap-1">
                {project.services.map((s) => (
                  <Link
                    key={s}
                    href={servicePath}
                    className="text-left text-sm md:text-base text-white/70 hover:text-[#C71F42] underline underline-offset-2 decoration-[#C71F42]/30 hover:decoration-[#C71F42] transition-colors"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-white/60">
            {" "}
            <Link
              href={servicePath}
              className="underline underline-offset-4 hover:text-[#C71F42] font-medium"
            >
              Explore {project.services[0]} →
            </Link>
          </p>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section className="bg-[#060000] text-white py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">Overview</span>
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
      <section className="bg-[#1a0a0e] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">
            Visual gallery
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10 text-white">
            The work, up close
          </h2>

          <div className="space-y-6 md:space-y-8">
            {project.gallery.slice(0, 3).map((img, i) => (
              <figure key={i}>
                <div className="relative aspect-[16/9] overflow-hidden bg-[#2a0a10] ring-1 ring-inset ring-[#3a1518]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1344}
                    height={768}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="my-10 md:my-12 bg-[#C71F42] text-black py-8 md:py-10 px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-display font-bold text-xl md:text-2xl tracking-tight">Like this? Let&apos;s talk.</p>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-black text-[#C71F42] pl-5 pr-1.5 py-1.5 rounded-full hover:bg-transparent hover:text-black border border-black transition-colors duration-300"
            >
              <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">Start a project</span>
              <span className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#C71F42] text-black flex items-center justify-center group-hover:bg-black group-hover:text-[#C71F42] transition-colors">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CREDITS ============ */}
      <section className="bg-[#060000] text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">Credits</span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10">
            The team behind it
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {project.credits.map((c, i) => (
              <div key={i} className="border-t border-[#3a1518] pt-4">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C71F42] mb-1">{c.role}</p>
                <p className="font-display font-bold text-lg md:text-xl tracking-tight">{c.name}</p>
              </div>
            ))}
          </div>
          <Link
            href={`/case-studies/${project.slug}`}
            className="mt-10 inline-flex items-center gap-3 border border-[#C71F42]/40 hover:bg-[#C71F42] hover:text-black px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors duration-300"
          >
            Read the full case study
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ============ RELATED PROJECTS ============ */}
      <section className="bg-[#1a0a0e] py-16 md:py-24 border-b border-[#3a1518]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]">
            {project.relatedTitle}
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10 text-white">
            More work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {otherProjects.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group text-left">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#2a0a10] mb-4 ring-1 ring-inset ring-[#3a1518] group-hover:ring-[#C71F42] transition-colors">
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl tracking-tight text-white">{p.title}</h3>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                  {p.industry} · {p.year}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-white/60 group-hover:text-[#C71F42] border-b border-[#C71F42]/40 group-hover:border-[#C71F42] pb-0.5 transition-all">
                  View project
                  <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>

          {/* Next / Previous */}
          <div className="mt-12 flex items-center justify-between gap-4 border-t border-[#3a1518] pt-8">
            <Link href={`/portfolio/${prevProject.slug}`} className="group flex items-center gap-3 text-left">
              <span className="h-10 w-10 rounded-full border border-[#C71F42]/40 flex items-center justify-center group-hover:bg-[#C71F42] group-hover:text-black transition-colors">
                <ArrowLeft size={16} />
              </span>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">Previous</p>
                <p className="font-display font-bold text-sm md:text-base text-white">{prevProject.title}</p>
              </div>
            </Link>
            <Link href={`/portfolio/${nextProject.slug}`} className="group flex items-center gap-3 text-right">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">Next</p>
                <p className="font-display font-bold text-sm md:text-base text-white">{nextProject.title}</p>
              </div>
              <span className="h-10 w-10 rounded-full border border-[#C71F42]/40 flex items-center justify-center group-hover:bg-[#C71F42] group-hover:text-black transition-colors">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/50">
            <Link href="/#work" className="underline underline-offset-4 hover:text-[#C71F42] font-medium">
              View all work
            </Link>
          </p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="contact-portfolio" className="bg-[#060000] text-white py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 md:px-10 text-center">
          <h2 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl">
            {project.ctaTitle}
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60">
            Tell us about your project — we&apos;ll respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-[#C71F42] text-black pl-6 pr-2 py-2 rounded-full hover:bg-transparent hover:text-[#C71F42] border border-[#C71F42] transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">Start a similar project</span>
              <span className="h-10 w-10 rounded-full bg-black text-[#C71F42] flex items-center justify-center group-hover:bg-[#C71F42] group-hover:text-black transition-colors">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
