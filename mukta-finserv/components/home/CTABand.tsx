import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Filigree } from "@/components/shared/Filigree";
import { siteConfig } from "@/lib/site";

export function CTABand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden border-t border-gold-500/15 bg-bg-primary"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,175,55,0.10) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-(--content-gutter) py-(--section-pad-y) text-center">
        <Filigree size={120} />
        <h2
          id="cta-heading"
          className="font-display mt-8 text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl"
        >
          Begin a conversation
          <br />
          about your wealth.
        </h2>
        <p className="font-body mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
          A no-obligation discovery call — thirty minutes to understand your
          goals, your existing portfolio, and whether we are the right fit.
        </p>

        <div className="mt-10">
          <Button variant="primary" href="/contact" withArrow size="lg">
            Schedule a Consultation
          </Button>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
          <a
            href={siteConfig.contact.phoneHref}
            className="group inline-flex items-center gap-3 font-body text-sm text-gold-300 transition-colors hover:text-gold-100"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group inline-flex items-center gap-3 font-body text-sm text-gold-300 transition-colors hover:text-gold-100"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            <span>{siteConfig.contact.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
