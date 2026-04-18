import Link from "next/link";
import { Calculator } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/Section";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { Button } from "@/components/ui/Button";
import {
  CardLink,
  CardEyebrow,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Breadcrumb } from "./Breadcrumb";
import { FeatureList } from "./FeatureList";
import { PersonaCards } from "./PersonaCards";
import { FaqAccordion } from "./FaqAccordion";
import type { ServiceDetail } from "@/lib/services";
import { servicesSummary } from "@/content/services-summary";

export function ServiceTemplate({ service }: { service: ServiceDetail }) {
  const Icon = servicesSummary.find((s) => s.slug === service.slug)?.Icon;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold-500/15 bg-bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 75% 20%, rgba(212,175,55,0.14) 0%, transparent 55%)",
          }}
        />
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-28 pb-20 md:pt-36 md:pb-28">
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: service.label },
            ]}
          />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <EyebrowLabel>{service.eyebrow}</EyebrowLabel>
              <h1 className="font-display mt-6 text-[clamp(2.75rem,5vw+1rem,5rem)] leading-[1.02] tracking-tight text-ink">
                {service.label}
              </h1>
              <p className="font-body mt-8 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
                {service.heroIntro}
              </p>
            </div>
            {Icon ? (
              <div className="lg:col-span-4">
                <div className="flex h-full items-start justify-end">
                  <div className="inline-flex h-28 w-28 items-center justify-center border border-gold-500/40 bg-bg-secondary md:h-36 md:w-36">
                    <Icon
                      className="h-12 w-12 text-gold-500 md:h-16 md:w-16"
                      strokeWidth={1}
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <Section surface="primary" tone="dark">
        <SectionHeader eyebrow="What We Offer" title="The scope of work." />
        <div className="mt-16">
          <FeatureList items={service.whatWeOffer} />
        </div>
      </Section>

      {/* Who It's For */}
      <Section surface="secondary" tone="dark">
        <SectionHeader
          eyebrow="Who It's For"
          title="Four clients we serve well."
        />
        <div className="mt-16">
          <PersonaCards personas={service.personas} />
        </div>
      </Section>

      {/* Process */}
      <Section surface="primary" tone="dark">
        <SectionHeader
          eyebrow="Our Process"
          title="How the engagement runs."
        />
        <ol className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {service.process.map((step) => (
            <li key={step.numeral} className="flex flex-col gap-4">
              <div className="flex h-14 w-14 items-center justify-center border border-gold-500/40 bg-bg-secondary">
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
      </Section>

      {/* Related Calculators (optional) */}
      {service.relatedCalculators && service.relatedCalculators.length > 0 ? (
        <Section surface="secondary" tone="dark">
          <SectionHeader
            eyebrow="Tools"
            title="Model the numbers yourself."
            intro="Plain calculators for the questions that come up first — no sign-in required."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.relatedCalculators.map((calc) => (
              <CardLink
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                ariaLabel={calc.label}
              >
                <Calculator
                  className="h-8 w-8 text-gold-500"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <CardEyebrow className="mt-6 block">Calculator</CardEyebrow>
                <CardTitle className="mt-3 text-xl">{calc.label}</CardTitle>
                <CardDescription className="mt-3">
                  {calc.description}
                </CardDescription>
              </CardLink>
            ))}
          </div>
        </Section>
      ) : null}

      {/* FAQs */}
      <Section surface="primary" tone="dark">
        <SectionHeader
          eyebrow="Questions"
          title="The ones we get most often."
        />
        <div className="mt-16">
          <FaqAccordion items={service.faqs} />
        </div>
      </Section>

      {/* CTA band */}
      <section className="relative isolate overflow-hidden border-t border-gold-500/15 bg-bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-(--content-gutter) py-(--section-pad-y) text-center">
          <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl">
            Speak with an advisor about{" "}
            <span className="text-gold-300">{service.label.toLowerCase()}</span>.
          </h2>
          <p className="font-body mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            A thirty-minute discovery call — no obligation, no product pitch.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Schedule a Consultation
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Other Services
            </Button>
          </div>
          <Link
            href="/services"
            className="mt-8 font-body text-xs tracking-[0.18em] uppercase text-ink-muted transition-colors hover:text-gold-300"
          >
            ← All Services
          </Link>
        </div>
      </section>
    </>
  );
}
