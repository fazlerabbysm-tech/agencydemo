"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface ContactFaqItem {
  q: string;
  a: string;
}

export default function ContactFaq({ faqs }: { faqs: ContactFaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={faq.q}
            className="kd-obsidian-card rounded-2xl overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
            >
              <span className="font-display font-semibold text-base sm:text-lg text-white">
                {faq.q}
              </span>
              <span className="h-8 w-8 shrink-0 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center text-white">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-4 border-t border-white/10 text-sm sm:text-[15px] text-white/70 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
