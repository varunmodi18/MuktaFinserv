"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/Section";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/cn";

const AUTO_ADVANCE_MS = 8000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const liveRef = useRef<HTMLDivElement>(null);
  const total = testimonials.length;

  const go = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total]
  );

  // Auto-advance — pauses on hover/focus; respects reduced motion via opacity transition only.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const current = testimonials[index];

  return (
    <Section surface="cream" tone="light">
      <SectionHeader
        tone="light"
        eyebrow="Client Voices"
        title="Trust, in their own words."
        align="center"
        withFiligree
      />

      <div
        className="relative mx-auto mt-16 max-w-4xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <Quote
          className="mx-auto h-12 w-12 text-gold-700/60"
          strokeWidth={1}
          aria-hidden="true"
        />

        <div
          ref={liveRef}
          aria-live="polite"
          aria-atomic="true"
          className="mt-8 min-h-[16rem] text-center"
        >
          <blockquote
            key={index}
            className="font-display text-2xl leading-snug text-ink-inverse animate-[fadeIn_0.7s_cubic-bezier(0.22,1,0.36,1)] md:text-3xl"
          >
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <footer className="mt-8 font-body text-sm text-ink-inverse-muted">
            <div className="font-medium text-ink-inverse">{current.name}</div>
            <div>
              {current.designation} · {current.location}
            </div>
          </footer>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="inline-flex h-10 w-10 items-center justify-center border border-gold-700/40 text-gold-700 transition-colors hover:border-gold-700 hover:bg-gold-700/10"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>

          <ul className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={cn(
                    "h-px transition-[width,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    i === index
                      ? "w-12 bg-gold-700"
                      : "w-6 bg-gold-700/30 hover:bg-gold-700/60"
                  )}
                />
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="inline-flex h-10 w-10 items-center justify-center border border-gold-700/40 text-gold-700 transition-colors hover:border-gold-700 hover:bg-gold-700/10"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Local keyframe — Tailwind v4 supports inline styles only via theme; declare here */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Section>
  );
}
