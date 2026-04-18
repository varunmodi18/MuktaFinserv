"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { postCategories, type PostCategory, type PostSummary } from "@/lib/insights";
import { PostCard } from "./PostCard";

type Props = {
  posts: PostSummary[];
};

export function CategoryFilter({ posts }: Props) {
  const [active, setActive] = useState<PostCategory | "All">("All");

  const visible = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((p) => p.category === active);
  }, [posts, active]);

  const categories = ["All", ...postCategories] as const;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter by category"
        className="flex flex-wrap gap-2 border-y border-gold-500/15 py-6"
      >
        {categories.map((c) => {
          const isActive = active === c;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(c)}
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

      {visible.length === 0 ? (
        <p className="mt-16 font-body text-center text-ink-muted">
          No posts in this category yet.
        </p>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
