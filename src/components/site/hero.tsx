"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    image: "https://picsum.photos/seed/cuttingedger-hero-ecommerce/1920/1080",
    kicker: "01 — E-commerce Catalog Optimization",
    title: "Catalogs that\nsell themselves.",
    subtitle:
      "Studio-grade product imagery and listing systems for digital storefronts",
  },
  {
    image: "https://picsum.photos/seed/cuttingedger-hero-color/1920/1080",
    kicker: "02 — Color Standardization Protocol",
    title: "One color,\nevery surface.",
    subtitle:
      "Pantone-precise color systems calibrated across screen, print, and product",
  },
  {
    image: "https://picsum.photos/seed/cuttingedger-hero-cgi/1920/1080",
    kicker: "03 — Virtual Production & CGI Studio",
    title: "Worlds built\nin pixels.",
    subtitle:
      "Real-time virtual sets and photoreal CGI for film, brand, and product",
  },
  {
    image: "https://picsum.photos/seed/cuttingedger-hero-whitelabel/1920/1080",
    kicker: "04 — White-Label Agency Extension",
    title: "Your studio,\nour hands.",
    subtitle:
      "Embedded production capacity that ships under your brand, not ours",
  },
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    []
  );

  // Preload all slide images on mount
  useEffect(() => {
    slides.forEach((s, i) => {
      const img = new Image();
      img.onload = () => setLoaded((p) => ({ ...p, [i]: true }));
      img.onerror = () => setLoaded((p) => ({ ...p, [i]: false }));
      img.src = s.image;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[600px] sm:min-h-[640px] w-full overflow-hidden bg-black text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image slider — full color */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            opacity: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 6, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slides[index].image})`,
              backgroundColor: "#0a0a0a",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Loading skeleton */}
      {!loaded[0] && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
      )}

      {/* Dark gradient overlays for legibility (keeps UI B&W while images are color) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Slide indicators (right) */}
      <div className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className="group flex items-center gap-3"
          >
            <span
              className={`text-xs font-mono tabular-nums transition-opacity ${
                i === index ? "opacity-100" : "opacity-40 group-hover:opacity-80"
              }`}
            >
              0{i + 1}
            </span>
            <span className="relative h-px w-10 bg-white/30 overflow-hidden">
              {i === index && (
                <motion.span
                  key={index + "-bar"}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  className="absolute inset-0 bg-white origin-left"
                />
              )}
            </span>
          </button>
        ))}
      </div>

      {/* Main copy */}
      <div className="relative z-10 h-full mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 flex flex-col justify-end pb-24 sm:pb-28 md:pb-32 pt-20 md:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <p className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase text-white/70 mb-4 sm:mb-6">
              {slides[index].kicker}
            </p>
            <h1 className="font-display font-bold tracking-[-0.02em] leading-[0.92] text-[11vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5rem] xl:text-[8.5rem] break-words">
              {slides[index].title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-white/70 max-w-md">
              {slides[index].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Bottom row: CTA + counter */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex items-end justify-between gap-4 sm:gap-6">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-black pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full hover:bg-black hover:text-white border border-white transition-colors duration-300"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">
              Get Started
            </span>
            <span className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <ArrowUpRight size={16} strokeWidth={2} className="sm:hidden" />
              <ArrowUpRight size={18} strokeWidth={2} className="hidden sm:block" />
            </span>
          </a>

          <div className="hidden sm:flex items-baseline gap-2 font-mono text-sm tabular-nums text-white/80">
            <span className="text-3xl md:text-5xl font-display font-light">
              0{index + 1}
            </span>
            <span className="text-white/40">/ 0{slides.length}</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 sm:h-8 w-px bg-white/40"
        />
      </div>
    </section>
  );
}
