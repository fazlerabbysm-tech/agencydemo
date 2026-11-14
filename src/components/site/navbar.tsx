"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  action: "service" | "about" | "section";
  slug?: string;
  href?: string;
}

const navItems: NavItem[] = [
  { label: "UI/UX Design", action: "service", slug: "ui-ux" },
  { label: "Motion Graphics", action: "service", slug: "motion-graphics" },
  { label: "Digital Marketing", action: "service", slug: "digital-marketing" },
  { label: "Web & App Dev", action: "service", slug: "web-app-dev" },
  { label: "About", action: "about" },
];

interface NavbarProps {
  variant?: "home" | "service";
  onBack?: () => void;
  scrollContainerId?: string;
  onOpenService?: (slug: string) => void;
  onOpenPortfolio?: (slug: string) => void;
  onOpenCaseStudy?: (slug: string) => void;
  onOpenContact?: () => void;
}

export default function Navbar({
  variant = "home",
  onBack,
  scrollContainerId,
  onOpenService,
  onOpenPortfolio,
  onOpenCaseStudy,
  onOpenContact,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (variant === "home") {
      const onScroll = () => setScrolled(window.scrollY > 24);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    } else {
      const el = document.getElementById(scrollContainerId || "service-page-scroll");
      if (!el) return;
      const onScroll = () => setScrolled(el.scrollTop > 24);
      onScroll();
      el.addEventListener("scroll", onScroll, { passive: true });
      return () => el.removeEventListener("scroll", onScroll);
    }
  }, [variant, scrollContainerId]);

  const onDark = !scrolled && !open;

  const handleNavClick = (item: NavItem) => {
    setOpen(false);
    if (item.action === "service" && item.slug) {
      if (variant === "service" && onBack) {
        onBack();
        setTimeout(() => onOpenService?.(item.slug!), 100);
      } else {
        onOpenService?.(item.slug!);
      }
    } else if (item.action === "about") {
      if (variant === "service" && onBack) {
        onBack();
        setTimeout(() => {
          const el = document.querySelector("#about") || document.querySelector("#top");
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector("#about") || document.querySelector("#top");
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        onDark
          ? "bg-transparent border-b border-transparent"
          : "bg-[#060000]/85 backdrop-blur-md border-b border-[#3a1518]"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            if (variant === "service" && onBack) {
              e.preventDefault();
              onBack();
            }
          }}
          className="flex items-center gap-2 group shrink-0"
        >
          <span
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 group-hover:scale-150 ${
              onDark ? "bg-[#C71F42]" : "bg-[#C71F42]"
            }`}
          />
          <span
            className={`font-display font-bold tracking-tight text-base sm:text-lg md:text-xl transition-colors duration-300 ${
              onDark ? "text-white" : "text-white"
            }`}
          >
            Katella <span className="font-light">Digital</span>
          </span>
        </a>

        {/* Desktop nav — 5 items, no dropdowns */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`text-xs lg:text-sm font-medium tracking-wide uppercase relative group transition-colors duration-300 cursor-pointer ${
                onDark ? "text-white/90 hover:text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full bg-[#C71F42]" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => {
              if (variant === "service" && onBack) {
                onBack();
                setTimeout(() => onOpenContact?.(), 100);
              } else {
                onOpenContact?.();
              }
            }}
            className={`group inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 text-xs lg:text-sm font-medium tracking-wide uppercase border transition-colors duration-300 cursor-pointer ${
              "bg-[#C71F42] text-white border-[#C71F42] hover:bg-transparent hover:text-[#C71F42]"
            }`}
          >
            Get a Quote
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden h-10 w-10 flex items-center justify-center transition-colors duration-300 ${
            onDark ? "text-white" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#060000] border-t border-[#3a1518]"
          >
            <div className="px-5 sm:px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-xl font-display font-medium tracking-tight text-white text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  if (variant === "service" && onBack) {
                    onBack();
                    setTimeout(() => onOpenContact?.(), 100);
                  } else {
                    onOpenContact?.();
                  }
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-[#C71F42] text-white px-5 py-3 text-sm font-medium tracking-wide uppercase"
              >
                Get a Quote →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
