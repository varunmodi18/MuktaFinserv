import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/Section";
import { servicesSummary } from "@/content/services-summary";

export function ServicesGrid() {
  return (
    <Section surface="primary" tone="dark" id="services">
      <SectionHeader
        eyebrow="Our Services"
        title="Comprehensive solutions for every goal."
        intro="Eight practice areas, one team, one accountability. Each service stands alone — and works in concert with the others."
      />

      <ul className="mt-16 grid grid-cols-1 gap-px bg-gold-500/15 sm:grid-cols-2 lg:grid-cols-4">
        {servicesSummary.map(({ slug, label, blurb, Icon }) => (
          <li key={slug}>
            <a
              href={`/services/${slug}`}
              className="group flex h-full flex-col gap-6 bg-bg-primary p-8 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-bg-secondary"
            >
              <div className="flex items-start justify-between">
                <Icon
                  className="h-10 w-10 text-gold-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <ArrowUpRight
                  className="h-4 w-4 text-ink-muted opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:opacity-100"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-display text-2xl leading-tight text-ink group-hover:text-gold-100">
                {label}
              </h3>
              <p className="font-body text-[0.95rem] leading-relaxed text-ink-muted">
                {blurb}
              </p>
              <span className="mt-auto font-body text-[0.8rem] tracking-[0.18em] uppercase text-gold-300">
                Learn More
                <span className="ml-2 inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
