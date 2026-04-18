import { Check } from "lucide-react";

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-10">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center border border-gold-500/40 text-gold-500"
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <span className="font-body text-[0.98rem] leading-relaxed text-ink">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
