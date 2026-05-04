import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/shared/Section";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { DropCap } from "@/components/shared/DropCap";
import { FoundingTimeline } from "@/components/about/FoundingTimeline";
import { Affiliations } from "@/components/about/Affiliations";
import { TeamGrid } from "@/components/about/TeamGrid";
import { CTABand } from "@/components/home/CTABand";
import { extendedPillars } from "@/content/about";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Aparigraha Enterprises — a partner-led, referral-built private wealth practice with a long memory and a short list of conflicts.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero — editorial */}
      <section className="relative overflow-hidden border-b border-gold-500/15 bg-bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.14) 0%, transparent 55%)",
          }}
        />
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-28 pb-20 md:pt-36 md:pb-28">
          <EyebrowLabel>About Aparigraha Enterprises</EyebrowLabel>
          <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.75rem,5vw+1rem,5.5rem)] leading-[1.02] tracking-tight text-ink">
            Our Story
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <DropCap>
                Aparigraha Enterprises was founded on a simple, unfashionable
                conviction — that families deserve a practice, not a sales
                desk, and that good advice is paid for on time, not on product.
                We are a small firm by design. Relationships are partner-led,
                growth is referral-built, and the list of conflicts we run is
                deliberately short.
              </DropCap>
              <p className="mt-6 font-body text-base leading-relaxed text-ink-muted md:text-lg">
                In the years since, we have stayed narrow in our scope and deep
                in our craft. We publish our views, show our working, and tell
                clients the truth — including when the honest answer is that
                nothing in their portfolio needs changing.
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="border border-gold-500/20 bg-bg-secondary p-8">
                <h3 className="font-caption text-[0.7rem] tracking-[0.2em] uppercase text-gold-300">
                  At a Glance
                </h3>
                <dl className="mt-6 space-y-4 font-body text-sm text-ink">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Founded</dt>
                    <dd>200X</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Structure</dt>
                    <dd>Limited Liability Partnership</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Registration</dt>
                    <dd>AMFI-Registered MFD</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Model</dt>
                    <dd>Partner-led advisory</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Growth</dt>
                    <dd>Referral-only</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Founding Timeline */}
      <Section surface="primary" tone="dark">
        <SectionHeader
          eyebrow="Founding Timeline"
          title="A practice, built over time."
          intro="A condensed history — long enough to trust, short enough to remember."
        />
        <div className="mt-16">
          <FoundingTimeline />
        </div>
      </Section>

      {/* Philosophy (expanded) */}
      <Section surface="cream" tone="light">
        <SectionHeader
          tone="light"
          eyebrow="Philosophy"
          title="Ten commitments that shape every recommendation."
          intro="Stated plainly, applied without exception."
          align="center"
          withFiligree
        />
        <ol className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
          {extendedPillars.map((p) => (
            <li
              key={p.numeral}
              className="flex flex-col gap-3 border-l border-gold-700/40 pl-6"
            >
              <span className="font-stat text-3xl text-gold-700">
                {p.numeral}
              </span>
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

      {/* Full Team */}
      <Section surface="primary" tone="dark">
        <SectionHeader
          eyebrow="Our People"
          title="The full team."
          intro="A small group of partners and advisors. Each of them answers to you by name."
        />
        <div className="mt-16">
          <TeamGrid />
        </div>
      </Section>

      {/* Affiliations */}
      <Section surface="secondary" tone="dark">
        <SectionHeader
          eyebrow="Affiliations"
          title="Empanelled and registered."
          intro="The platforms, regulators, and intermediaries we work with — disclosed in full."
          align="center"
        />
        <div className="mt-16">
          <Affiliations />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
