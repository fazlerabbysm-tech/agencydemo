"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; action: "service" | "portfolio" | "casestudy"; slug: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Work",
    href: "#work",
    dropdown: [
      { label: "Aurora Goods", action: "portfolio", slug: "aurora-goods" },
      { label: "Maison Noir", action: "portfolio", slug: "maison-noir" },
      { label: "ECHO Motors", action: "portfolio", slug: "echo-motors" },
      { label: "Agency Collective", action: "portfolio", slug: "agency-collective" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "E-commerce Catalog", action: "service", slug: "ecommerce" },
      { label: "Color Protocol", action: "service", slug: "color" },
      { label: "CGI & Virtual Production", action: "service", slug: "cgi" },
      { label: "White-Label", action: "service", slug: "whitelabel" },
    ],
  },
  {
    label: "Portfolio",
    href: "#work",
    dropdown: [
      { label: "Aurora Goods — Case Study", action: "casestudy", slug: "aurora-goods" },
      { label: "Maison Noir — Case Study", action: "casestudy", slug: "maison-noir" },
      { label: "ECHO Motors — Case Study", action: "casestudy", slug: "echo-motors" },
      { label: "Agency Collective — Case Study", action: "casestudy", slug: "agency-collective" },
    ],
  },
  { label: "FAQ", href: "#faq" },
];

interface NavbarProps {
  variant?: "home" | "service";
  onBack?: () => void;
  scrollContainerId?: string;
  onOpenService?: (slug: string) => void;
  onOpenPortfolio?: (slug: string) => void;
  onOpenCaseStudy?: (slug: string) => void;
}

export default function Navbar({
  variant = "home",
  onBack,
  scrollContainerId,
  onOpenService,
  onOpenPortfolio,
  onOpenCaseStudy,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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

  const handleDropdownItem = (action: string, slug: string) => {
    setOpenDropdown(null);
    setOpen(false);
    if (action === "service" && onOpenService) onOpenService(slug);
    else if (action === "portfolio" && onOpenPortfolio) onOpenPortfolio(slug);
    else if (action === "casestudy" && onOpenCaseStudy) onOpenCaseStudy(slug);
  };

  const handleSectionClick = (href: string) => {
    setOpen(false);
    setOpenDropdown(null);
    if (variant === "service" && onBack) {
      onBack();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
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
          : "bg-white/85 backdrop-blur-md border-b border-black/10"
      }`}
      onMouseLeave={() => setOpenDropdown(null)}
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
          className="flex items-center gap-2 group"
        >
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
            CUTTING <span className="font-light">EDGER</span>
          </span>
        </a>

        {/* Desktop nav with dropdowns */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.dropdown ? item.label : null)}
            >
              <button
                onClick={() => item.href && handleSectionClick(item.href)}
                className={`text-xs lg:text-sm font-medium tracking-wide uppercase flex items-center gap-1 transition-colors duration-300 cursor-pointer ${
                  onDark ? "text-white/90 hover:text-white" : "text-black/80 hover:text-black"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Dropdown */}
              {item.dropdown && (
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[220px] rounded-lg border shadow-xl overflow-hidden ${
                        onDark
                          ? "bg-black/90 backdrop-blur-md border-white/15"
                          : "bg-white border-black/10"
                      }`}
                    >
                      {item.dropdown.map((d) => (
                        <button
                          key={d.slug}
                          onClick={() => handleDropdownItem(d.action, d.slug)}
                          className={`w-full text-left px-4 py-2.5 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
                            onDark
                              ? "text-white/80 hover:bg-white hover:text-black"
                              : "text-black/80 hover:bg-black hover:text-white"
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href={variant === "service" ? undefined : "#contact"}
            onClick={(e) => {
              if (variant === "service") {
                e.preventDefault();
                const contactEl = document.getElementById("contact-page");
                const scrollEl = document.getElementById("service-page-scroll");
                if (contactEl && scrollEl) {
                  scrollEl.scrollTo({
                    top: contactEl.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }
            }}
            className={`group inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 text-xs lg:text-sm font-medium tracking-wide uppercase border transition-colors duration-300 cursor-pointer ${
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-black/10"
          >
            <div className="px-5 sm:px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/40 mb-2">
                        {item.label}
                      </p>
                      <div className="flex flex-col gap-2 pl-3 mb-2">
                        {item.dropdown.map((d) => (
                          <button
                            key={d.slug}
                            onClick={() => handleDropdownItem(d.action, d.slug)}
                            className="text-left text-base font-display font-medium tracking-tight text-black/80 hover:text-black"
                          >
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        if (variant === "service" && onBack) {
                          onBack();
                          setTimeout(() => {
                            const el = document.querySelector(item.href!);
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }
                      }}
                      className="text-2xl font-display font-medium tracking-tight text-black"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  setOpen(false);
                  if (variant === "service") {
                    const contactEl = document.getElementById("contact-page");
                    const scrollEl = document.getElementById("service-page-scroll");
                    if (contactEl && scrollEl) {
                      scrollEl.scrollTo({
                        top: contactEl.offsetTop - 80,
                        behavior: "smooth",
                      });
                    }
                  }
                }}
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
