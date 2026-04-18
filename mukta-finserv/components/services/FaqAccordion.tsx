import { ChevronDown } from "lucide-react";
import type { ServiceFaq } from "@/lib/services";

/**
 * Uses native <details> / <summary> for accessibility + zero JS.
 * Chevron rotates via CSS on [open].
 */
export function FaqAccordion({ items }: { items: ServiceFaq[] }) {
  return (
    <ul className="divide-y divide-gold-500/15 border-y border-gold-500/15">
      {items.map((faq) => (
        <li key={faq.q}>
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
              <h3 className="font-display text-xl leading-snug text-ink group-open:text-gold-100 md:text-2xl">
                {faq.q}
              </h3>
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-gold-500/40 text-gold-500 transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-gold-500/10 group-open:rotate-180 group-open:border-gold-500"
              >
                <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </summary>
            <p className="mt-4 max-w-3xl font-body text-[0.95rem] leading-relaxed text-ink-muted md:text-base">
              {faq.a}
            </p>
          </details>
        </li>
      ))}
    </ul>
  );
}
