"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function InsightsSection() {
  const latestPosts = blogPosts.slice(0, 6);

  return (
    <section
      id="insights"
      data-shape="network"
      data-ax="0.78"
      data-ay="0.50"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
              Insights
            </p>
            <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.06] text-3xl sm:text-4xl lg:text-[46px] text-white">
              Thinking out loud<span className="text-[#E81C49]">.</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-white/80 hover:text-white transition-colors shrink-0"
          >
            All articles
            <ArrowRight className="h-4 w-4 text-[#FF4D73]" />
          </Link>
        </div>

        {/* 6-article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0204]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-[#060000]/80 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-medium text-white/90">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between gap-5 bg-[#060000]/35 backdrop-blur-xl border-t border-white/10">
                  <div>
                    <p className="font-mono text-[11px] text-white/45 mb-2.5">
                      {post.date} · {post.readTime}
                    </p>
                    <h3 className="font-display font-bold text-lg text-white leading-snug tracking-tight group-hover:text-[#FF4D73] transition-colors">
                      {post.title}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80 group-hover:text-white">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73] transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
