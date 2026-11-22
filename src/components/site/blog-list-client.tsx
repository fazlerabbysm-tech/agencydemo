"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

const categories = [
  "All",
  "AI Search (GEO)",
  "Marketing",
  "Branding",
  "Web & Tech",
  "Strategy",
] as const;

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const featured = posts.find((p) => p.featured) || posts[0];
  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Featured Article Glass Card */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group kd-obsidian-card kd-obsidian-card-hover rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/75 via-transparent to-transparent" />
            <span className="absolute top-5 left-5 rounded-full bg-[#E81C49] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
              Featured
            </span>
          </div>

          <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between gap-6 bg-[#060000]/35 backdrop-blur-xl">
            <div className="space-y-4">
              <p className="font-mono text-xs text-[#FF4D73]">
                {featured.category} · {featured.readTime} · {featured.date}
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight tracking-tight group-hover:text-[#FF4D73] transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {featured.excerpt}
              </p>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white text-[#060000] group-hover:bg-white/90 px-5 py-2.5 text-sm font-semibold transition-colors">
                Read the article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2.5">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all cursor-pointer border ${
                isSelected
                  ? "bg-white text-[#060000] border-white"
                  : "kd-glass-tile text-white/75 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      {filtered.length === 0 ? (
        <div className="kd-obsidian-card rounded-2xl p-10 text-center text-white/60 text-sm">
          No articles in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/75 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-[#060000]/75 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-medium text-white/90">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-5 bg-[#060000]/35 backdrop-blur-xl border-t border-white/10">
                <div className="space-y-2.5">
                  <p className="font-mono text-[11px] text-white/45">
                    {post.date} · {post.readTime}
                  </p>
                  <h3 className="font-display font-bold text-lg text-white leading-snug tracking-tight group-hover:text-[#FF4D73] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80 group-hover:text-white">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73] transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
