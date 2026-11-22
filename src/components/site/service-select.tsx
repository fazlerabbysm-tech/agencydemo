"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Layers } from "lucide-react";

export interface ServiceOptionGroup {
  group: string;
  options: string[];
}

export const contactServiceGroups: ServiceOptionGroup[] = [
  {
    group: "Marketing & Growth",
    options: [
      "Digital Marketing & SEO",
      "Local SEO (Google Maps)",
      "Google Ads & Paid Search",
      "Performance Marketing",
      "AI Search (GEO)",
      "Content Marketing",
      "Social Media Management",
    ],
  },
  {
    group: "Brand & Creative",
    options: [
      "Brand Strategy & Identity",
      "Logo Design",
      "Motion Graphics",
    ],
  },
  {
    group: "Web & Apps",
    options: [
      "Web & App Development",
      "UI/UX Design",
      "E-commerce Development",
      "Web & Mobile Applications",
    ],
  },
  {
    group: "Campaigns & Systems",
    options: [
      "Advertising Campaigns",
      "Video & Brand Production",
      "CRM & Marketing Automation",
      "Other / Not sure yet",
    ],
  },
];

interface ServiceSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function ServiceSelect({
  value,
  onChange,
  placeholder = "Choose a service...",
}: ServiceSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 cursor-pointer backdrop-blur-xl border ${
          open
            ? "kd-service-trigger-open bg-[#140308]/85 border-[#E81C49] shadow-[0_0_0_3px_rgba(232,28,73,0.18)]"
            : "bg-[#060000]/60 border-white/15 hover:border-white/30"
        }`}
      >
        <span className="flex items-center gap-2.5 min-w-0">
          <Layers
            className={`h-4 w-4 shrink-0 transition-colors ${
              value || open ? "text-[#FF4D73]" : "text-white/40"
            }`}
          />
          <span
            className={`truncate ${
              value ? "text-white font-medium" : "text-white/40"
            }`}
          >
            {value || placeholder}
          </span>
        </span>

        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-[#FF4D73]" : "text-white/50"
          }`}
        />
      </button>

      {/* Custom branded dark-crimson glass dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            role="listbox"
            className="kd-service-dropdown absolute left-0 right-0 mt-2 z-50 rounded-2xl border border-white/18 bg-[#0b0104]/96 backdrop-blur-2xl shadow-[0_24px_64px_rgba(0,0,0,0.85),0_0_28px_rgba(199,31,66,0.2)] overflow-hidden"
          >
            {/* Top crimson gradient hairline */}
            <div
              aria-hidden="true"
              className="h-[2px] w-full"
              style={{
                background:
                  "linear-gradient(90deg, #2F000A 0%, #9A0E28 40%, #E81C49 75%, #FF4D73 100%)",
              }}
            />

            <div className="max-h-64 overflow-y-auto p-2 space-y-2.5">
              {contactServiceGroups.map((grp) => (
                <div key={grp.group}>
                  <p className="px-3 pt-1.5 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]/85">
                    {grp.group}
                  </p>
                  <div className="space-y-0.5">
                    {grp.options.map((opt) => {
                      const selected = value === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          role="option"
                          aria-selected={selected}
                          onClick={() => {
                            onChange(opt);
                            setOpen(false);
                          }}
                          className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-[13px] transition-all cursor-pointer ${
                            selected
                              ? "bg-gradient-to-r from-[#C71F42]/35 via-[#9A0E28]/25 to-transparent text-white font-semibold border border-[#E81C49]/40"
                              : "text-white/75 hover:text-white hover:bg-white/[0.07] border border-transparent"
                          }`}
                        >
                          <span className="truncate">{opt}</span>
                          {selected && (
                            <span className="h-4 w-4 rounded-full bg-[#E81C49] text-white flex items-center justify-center shrink-0">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
