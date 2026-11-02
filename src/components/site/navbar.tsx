"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When at the very top (hero) the navbar sits on a black background,
  // so everything flips to white. Once the user scrolls past the hero
  // (or opens the mobile menu), it switches back to the white/black scheme.
  const onDark = !scrolled && !open;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        onDark
          ? "bg-transparent border-b border-transparent"
          : "bg-white/85 backdrop-blur-md border-b border-black/10"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo — white when at top (over black hero), black when scrolled */}
        <a href="#top" className="flex items-center gap-2 group">
          <span
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 group-hover:scale-150 ${
              onDark ? "bg-white" : "bg-black"
            }`}
          />
          <span
            className={`font-display font-bold tracking-tight text-base sm:text-lg md:text-xl transition-colors duration-300 ${
              onDark ? "text-white" : "text-black"
            }`}
          >
            CUTTING<span className="font-light">EDGER</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs lg:text-sm font-medium tracking-wide uppercase relative group transition-colors duration-300 ${
                onDark ? "text-white/90 hover:text-white" : "text-black/80 hover:text-black"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                  onDark ? "bg-white" : "bg-black"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className={`group inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 text-xs lg:text-sm font-medium tracking-wide uppercase border transition-colors duration-300 ${
              onDark
                ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
                : "bg-black text-white border-black hover:bg-white hover:text-black"
            }`}
          >
            Start a project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden h-10 w-10 flex items-center justify-center transition-colors duration-300 ${
            onDark ? "text-white" : "text-black"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-black/10"
          >
            <div className="px-5 sm:px-6 py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-display font-medium tracking-tight text-black"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-black text-white px-5 py-3 text-sm font-medium tracking-wide uppercase"
              >
                Start a project →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
