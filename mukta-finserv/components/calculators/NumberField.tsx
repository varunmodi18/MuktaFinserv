"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label: string;
  unit?: string;
  hint?: string;
  error?: string;
};

export const NumberField = forwardRef<HTMLInputElement, Props>(
  function NumberField({ label, unit, hint, error, className, id, ...rest }, ref) {
    const fieldId =
      id ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <label
          htmlFor={fieldId}
          className="font-caption text-[0.7rem] tracking-[0.2em] uppercase text-gold-300"
        >
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={fieldId}
            type="number"
            inputMode="decimal"
            className={cn(
              "w-full border border-gold-500/30 bg-bg-secondary px-4 py-3 font-body text-lg text-ink",
              "focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500",
              "transition-colors placeholder:text-ink-muted/50",
              error && "border-red-400/60 focus:border-red-400 focus:ring-red-400",
              unit && "pr-14",
            )}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={hint || error ? `${fieldId}-desc` : undefined}
            {...rest}
          />
          {unit ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-caption text-[0.72rem] tracking-[0.12em] uppercase text-ink-muted"
            >
              {unit}
            </span>
          ) : null}
        </div>
        {hint && !error ? (
          <p
            id={`${fieldId}-desc`}
            className="font-body text-xs text-ink-muted"
          >
            {hint}
          </p>
        ) : null}
        {error ? (
          <p
            id={`${fieldId}-desc`}
            className="font-body text-xs text-red-400"
          >
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);
