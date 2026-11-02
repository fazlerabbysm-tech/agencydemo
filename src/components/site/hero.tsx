"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);

  // Ensure video plays (browsers may block autoplay with sound)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      v.play().catch(() => {
        v.muted = true;
        v.play().catch(() => {});
      });
    };
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
    return () => v.removeEventListener("loadeddata", tryPlay);
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[600px] sm:min-h-[640px] w-full overflow-hidden bg-black text-white"
    >
      {/* Background showreel video — represents all 4 services */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80&auto=format&fit=crop"
        onCanPlay={() => setVideoReady(true)}
        onLoadedData={() => setVideoReady(true)}
      >
        {/* Creative production showreel — video editing / post production / studio work */}
        <source
          src="https://assets.mixkit.co/videos/4791/4791-1080.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/4791/4791-720.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/4789/4789-720.mp4"
          type="video/mp4"
        />
      </video>

      {/* Loading skeleton while video buffers */}
      {!videoReady && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
      )}

      {/* Dark gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Main copy — all text at the bottom, header area stays completely clean */}
      <div className="relative z-10 h-full mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 flex flex-col justify-end pb-24 sm:pb-28 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase text-white/70 mb-4 sm:mb-6"
          >
            ✦ Studio Showreel — Four Services, One Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-[-0.02em] leading-[0.92] text-[11vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5rem] xl:text-[8.5rem] break-words"
          >
            We build
            <br />
            <span className="font-light italic">visual worlds.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-white/70 max-w-xl"
          >
            E-commerce catalogs, color protocols, virtual production & CGI, and
            white-label agency extension — all under one studio.
          </motion.p>
        </motion.div>

        {/* Bottom row: CTA + sound toggle + showreel hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-12 md:mt-16 flex items-end justify-between gap-4 sm:gap-6"
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

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Sound toggle — moved here from top, so header area stays clean */}
            <button
              onClick={toggleMute}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition-colors duration-300"
              aria-label={muted ? "Unmute showreel" : "Mute showreel"}
            >
              {muted ? <VolumeX size={14} className="sm:hidden" /> : <Volume2 size={14} className="sm:hidden" />}
              {muted ? <VolumeX size={16} className="hidden sm:block" /> : <Volume2 size={16} className="hidden sm:block" />}
            </button>

            <div className="hidden sm:flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-white/60">
              <span className="h-px w-8 bg-white/30" />
              <span>Playing showreel</span>
            </div>
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
