"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/cn";
import { faqCategories, type FaqCategory, type FaqItem } from "@/lib/faq";

type Props = {
  items: FaqItem[];
};

type Filter = FaqCategory | "All";

export function FaqSearch({ items }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Filter>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (category !== "All" && item.category !== category) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    });
  }, [items, query, category]);

  // Group filtered items by category for display
  const grouped = useMemo(() => {
    const map = new Map<FaqCategory, FaqItem[]>();
    for (const item of filtered) {
      const list = map.get(item.category) ?? [];
      list.push(item);
      map.set(item.category, list);
    }
    return faqCategories
      .map((c) => ({ category: c, items: map.get(c) ?? [] }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  const categories = ["All", ...faqCategories] as const;

  return (
    <div className="space-y-12">
      {/* Search */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted"
          strokeWidth={1.25}
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions and answers..."
          aria-label="Search frequently asked questions"
          className="w-full border border-gold-500/25 bg-bg-primary py-5 pl-14 pr-5 font-body text-lg text-ink placeholder:text-ink-muted/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
        />
      </div>

      {/* Category chips */}
      <div
        role="tablist"
        aria-label="Filter by category"
        className="flex flex-wrap gap-2 border-y border-gold-500/15 py-6"
      >
        {categories.map((c) => {
          const isActive = category === c;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={isActive}
              onClick={() => setCategory(c)}
              className={cn(
                "border px-4 py-2 font-caption text-[0.68rem] tracking-[0.18em] uppercase transition-colors",
                isActive
                  ? "border-gold-500 bg-gold-500/10 text-gold-100"
                  : "border-gold-500/20 text-ink-muted hover:border-gold-500/60 hover:text-gold-100",
              )}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Results */}
      {grouped.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-body text-lg text-ink-muted">
            No answers found for &ldquo;{query}&rdquo;.
          </p>
          <p className="mt-3 font-body text-sm text-ink-muted">
            Try a different phrasing, or write to us directly.
          </p>
        </div>
      ) : (
        <div className="space-y-16">
          {grouped.map((group) => (
            <section key={group.category}>
              <h2 className="font-caption text-[0.72rem] tracking-[0.22em] uppercase text-gold-300">
                {group.category}
              </h2>
              <ul className="mt-6 divide-y divide-gold-500/15 border-y border-gold-500/15">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <details className="group py-6">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                        <span className="font-display text-xl leading-snug text-ink transition-colors group-hover:text-gold-100 md:text-2xl">
                          {item.question}
                        </span>
                        <ChevronDown
                          className="mt-1.5 h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300 group-open:rotate-180"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </summary>
                      <div className="mt-5 pr-10 font-body text-[1.02rem] leading-relaxed text-ink-muted">
                        {item.answer}
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
