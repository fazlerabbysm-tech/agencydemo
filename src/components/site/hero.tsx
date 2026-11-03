"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-bridal.jpg",
    kicker: "01 — Studio Work",
    title: "Crafted with\nprecision.",
  },
  {
    image: "/images/hero-fashion.jpg",
    kicker: "02 — Creative Direction",
    title: "Stories in\nevery frame.",
  },
];

const SLIDE_DURATION = 4500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);

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
      {/* ===== Background image slider with smooth motion ===== */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{
            opacity: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 7, ease: "linear" },
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

      {/* Loading skeleton while first image loads */}
      {!loaded[0] && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
      )}

      {/* Subtle dark gradient — keeps text readable without overpowering the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />

      {/* ===== Slide indicators (right side, vertical) ===== */}
      <div className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-4">
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

      {/* ===== Minimal text — bottom aligned, image gets the focus ===== */}
      <div className="relative z-10 h-full mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 flex flex-col justify-end pb-20 sm:pb-24 md:pb-28 pt-28 sm:pt-32 md:pt-36">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* Minimal kicker */}
            <p className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-white/60 mb-3 sm:mb-4">
              {slides[index].kicker}
            </p>

            {/* Minimal title — 2 lines */}
            <h1 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-[11vw] sm:text-[9vw] md:text-[6vw] lg:text-[5.5rem] xl:text-[6.5rem] break-words">
              {slides[index].title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* CTA row — minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-8 md:mt-10 flex items-end justify-between gap-4 sm:gap-6"
        >
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

          {/* Slide counter */}
          <div className="flex items-baseline gap-2 font-mono text-sm tabular-nums text-white/80">
            <span className="text-2xl md:text-4xl font-display font-light">
              0{index + 1}
            </span>
            <span className="text-white/40">/ 0{slides.length}</span>
          </div>
        </motion.div>
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
