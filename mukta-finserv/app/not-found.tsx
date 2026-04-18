import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { Filigree } from "@/components/shared/Filigree";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-bg-primary">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.14) 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-(--content-max) flex-col items-center justify-center px-(--content-gutter) py-24 text-center">
        <Filigree size={140} />
        <EyebrowLabel align="center" className="mt-8">
          Error 404
        </EyebrowLabel>
        <h1 className="font-display mt-6 max-w-3xl text-[clamp(3rem,7vw+1rem,6rem)] leading-[1.02] tracking-tight text-ink">
          This page has drifted off course.
        </h1>
        <p className="font-body mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
          The link you followed may be outdated, or the page has moved to a new
          home. Let us guide you back to solid ground.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" withArrow size="lg">
            Return Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Speak With a Partner
          </Button>
        </div>
        <div className="mt-16 border-t border-gold-500/15 pt-8">
          <p className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
            Where to next
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-body text-sm text-ink">
            <li>
              <Link
                href="/services"
                className="transition-colors hover:text-gold-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/calculators"
                className="transition-colors hover:text-gold-300"
              >
                Calculators
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="transition-colors hover:text-gold-300"
              >
                Quarterly Notes
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="transition-colors hover:text-gold-300"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
