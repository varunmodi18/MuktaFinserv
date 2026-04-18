import type { Metadata } from "next";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { FaqSearch } from "@/components/faq/FaqSearch";
import { CTABand } from "@/components/home/CTABand";
import { JsonLd } from "@/components/shared/JsonLd";
import { faqs } from "@/lib/faq";
import { buildMetadata } from "@/lib/seo";
import { faqPageJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description:
    "Clear answers to the questions clients actually ask — about our firm, investing, taxation, NRI services, and insurance.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold-500/15 bg-bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 20% 10%, rgba(212,175,55,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-28 pb-20 md:pt-36 md:pb-24">
          <EyebrowLabel>Reference</EyebrowLabel>
          <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.75rem,5vw+1rem,5.5rem)] leading-[1.02] tracking-tight text-ink">
            Frequently Asked.
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink-muted md:text-xl">
            The questions clients most often raise, answered plainly. If
            something is missing here, write to us — we will add it.
          </p>
        </div>
      </section>

      {/* Search + Groups */}
      <section className="border-b border-gold-500/15 bg-bg-secondary">
        <div className="mx-auto w-full max-w-4xl px-(--content-gutter) py-20 md:py-28">
          <FaqSearch items={faqs} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
