"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { Filigree } from "@/components/shared/Filigree";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("[app/error]", error);
    }
  }, [error]);

  return (
    <section className="relative isolate overflow-hidden bg-bg-primary">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-(--content-max) flex-col items-center justify-center px-(--content-gutter) py-24 text-center">
        <Filigree size={120} />
        <EyebrowLabel align="center" className="mt-8">
          A Momentary Pause
        </EyebrowLabel>
        <h1 className="font-display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw+1rem,4.5rem)] leading-[1.05] tracking-tight text-ink">
          Something didn&rsquo;t load as it should.
        </h1>
        <p className="font-body mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
          We&rsquo;ve logged the issue. Try again — or take the scenic route
          home while we look into it.
        </p>
        {error.digest ? (
          <p className="font-body mt-4 text-xs text-ink-muted/70">
            Reference: <span className="text-gold-300">{error.digest}</span>
          </p>
        ) : null}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            withArrow
            size="lg"
            onClick={() => unstable_retry()}
          >
            Try Again
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Return Home
          </Button>
        </div>
      </div>
    </section>
  );
}
