import { Section, SectionHeader } from "@/components/shared/Section";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <Section surface="secondary" tone="dark">
      <SectionHeader
        eyebrow="How We Work"
        title="A measured five-step practice."
        intro="From the first call to the annual deep-dive, every engagement runs on the same disciplined cadence."
      />

      <div className="relative mt-20">
        {/* Horizontal connector line — desktop */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden h-px bg-gold-500/30 lg:block"
        />

        <ol className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step) => (
            <li key={step.numeral} className="relative flex flex-col gap-4">
              {/* Numeral node */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-gold-500/40 bg-bg-secondary">
                <span className="font-stat text-xl text-gold-500">
                  {step.numeral}
                </span>
              </div>
              <h3 className="font-display text-2xl leading-tight text-ink">
                {step.title}
              </h3>
              <p className="font-body text-[0.95rem] leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
