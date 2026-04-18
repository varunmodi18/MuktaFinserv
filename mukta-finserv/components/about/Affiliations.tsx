import { affiliations } from "@/content/about";

export function Affiliations() {
  return (
    <ul className="grid grid-cols-2 gap-px bg-gold-500/15 md:grid-cols-4">
      {affiliations.map((a) => (
        <li
          key={a.label}
          className="flex min-h-[9rem] flex-col items-center justify-center gap-2 bg-bg-primary p-6 text-center"
        >
          <span className="font-display text-2xl text-gold-300">
            {a.label}
          </span>
          <span className="font-body text-[0.7rem] tracking-[0.1em] uppercase text-ink-muted">
            {a.note}
          </span>
        </li>
      ))}
    </ul>
  );
}
