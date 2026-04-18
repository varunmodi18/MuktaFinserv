"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { newsletterSchema, type NewsletterData } from "@/lib/contact";
import { submitNewsletter } from "@/app/contact/actions";
import { cn } from "@/lib/cn";

type Tone = "dark" | "light";

export function NewsletterForm({ tone = "dark" }: { tone?: Tone }) {
  const [isPending, startTransition] = useTransition();
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState,
    reset,
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(data: NewsletterData) {
    setServerError(null);
    startTransition(async () => {
      const result = await submitNewsletter(data);
      if (!result.ok) {
        setServerError(result.message ?? "Subscription failed. Try again.");
        return;
      }
      setDone(true);
      reset();
    });
  }

  if (done) {
    return (
      <p
        className={cn(
          "inline-flex items-center gap-2 font-body text-sm",
          tone === "dark" ? "text-gold-100" : "text-ink-inverse",
        )}
      >
        <Check className="h-4 w-4 text-gold-500" strokeWidth={2} aria-hidden="true" />
        Added. Look for our next quarterly note in your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@example.com"
          className={cn(
            "flex-1 border px-4 py-3 font-body text-sm placeholder:text-ink-muted/50 focus:outline-none focus:ring-1 focus:ring-gold-500",
            tone === "dark"
              ? "border-gold-500/30 bg-bg-primary text-ink"
              : "border-ink-inverse/20 bg-transparent text-ink-inverse",
            formState.errors.email && "border-red-400/60",
          )}
          {...register("email")}
        />
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "inline-flex items-center justify-center border px-6 py-3 font-caption text-[0.72rem] tracking-[0.2em] uppercase transition-colors",
            "border-gold-500 bg-gold-500 text-bg-primary hover:bg-gold-400 disabled:opacity-60",
          )}
        >
          {isPending ? "Adding…" : "Subscribe"}
        </button>
      </div>
      {formState.errors.email ? (
        <p className="mt-2 font-body text-xs text-red-300">
          {formState.errors.email.message}
        </p>
      ) : null}
      {serverError ? (
        <p className="mt-2 font-body text-xs text-red-300">{serverError}</p>
      ) : null}
    </form>
  );
}
