import { Section, SectionHeader } from "@/components/shared/Section";
import { philosophyPillars } from "@/content/philosophy";

export function PhilosophyPillars() {
  return (
    <Section surface="cream" tone="light">
      <SectionHeader
        tone="light"
        eyebrow="Guiding Principles"
        title="Six commitments that shape every recommendation."
        intro="Stated plainly, applied without exception. These are the standards we hold ourselves to before we hold the work to anything else."
        align="center"
        withFiligree
      />

      <ol className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {philosophyPillars.map((p) => (
          <li key={p.numeral} className="flex flex-col gap-4 border-l border-gold-700/40 pl-6">
            <span className="font-stat text-3xl text-gold-700">{p.numeral}</span>
            <h3 className="font-display text-2xl leading-tight text-ink-inverse">
              {p.title}
            </h3>
            <p className="font-body text-[0.95rem] leading-relaxed text-ink-inverse-muted">
              {p.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
