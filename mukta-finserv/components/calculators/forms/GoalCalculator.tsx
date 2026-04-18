"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NumberField } from "../NumberField";
import { ResultPanel } from "../ResultPanel";
import { ResultStat } from "../ResultStat";
import { CalculatorShell } from "../CalculatorShell";
import {
  calcGoal,
  formatINR,
  getCalculatorBySlug,
  type CalculatorSlug,
} from "@/lib/calculators";

const schema = z.object({
  currentCost: z.number().min(10_000).max(10_00_00_00_000),
  years: z.number().min(1).max(50),
  inflation: z.number().min(0).max(20),
  expectedReturn: z.number().min(1).max(30),
});

type FormValues = z.infer<typeof schema>;

type Config = {
  slug: CalculatorSlug;
  costLabel: string;
  yearsLabel: string;
  yearsHint: string;
  defaults: FormValues;
};

const configs: Record<string, Config> = {
  education: {
    slug: "education",
    costLabel: "Education Cost Today",
    yearsLabel: "Years Until College",
    yearsHint: "How long until you need the funds",
    defaults: { currentCost: 25_00_000, years: 15, inflation: 8, expectedReturn: 12 },
  },
  marriage: {
    slug: "marriage",
    costLabel: "Wedding Cost Today",
    yearsLabel: "Years Until Wedding",
    yearsHint: "Time horizon to the event",
    defaults: { currentCost: 30_00_000, years: 20, inflation: 7, expectedReturn: 11 },
  },
};

export function GoalCalculator({
  variant,
}: {
  variant: "education" | "marriage";
}) {
  const cfg = configs[variant];
  const meta = getCalculatorBySlug(cfg.slug)!;
  const { register, watch, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: cfg.defaults,
    mode: "onChange",
  });
  const values = watch();

  const result = useMemo(() => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) return null;
    return calcGoal(parsed.data);
  }, [values]);

  return (
    <CalculatorShell
      meta={meta}
      form={
        <div className="flex flex-col gap-6">
          <NumberField
            label={cfg.costLabel}
            unit="₹"
            {...register("currentCost", { valueAsNumber: true })}
            error={formState.errors.currentCost?.message}
          />
          <NumberField
            label={cfg.yearsLabel}
            unit="Yrs"
            {...register("years", { valueAsNumber: true })}
            hint={cfg.yearsHint}
            error={formState.errors.years?.message}
          />
          <NumberField
            label="Cost Inflation"
            unit="% p.a."
            step="0.1"
            {...register("inflation", { valueAsNumber: true })}
            error={formState.errors.inflation?.message}
          />
          <NumberField
            label="Expected Return"
            unit="% p.a."
            step="0.1"
            {...register("expectedReturn", { valueAsNumber: true })}
            error={formState.errors.expectedReturn?.message}
          />
        </div>
      }
      result={
        <ResultPanel
          headline={
            <>
              <span className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
                Future Cost
              </span>
              <div className="mt-4 font-stat text-5xl leading-none text-ink md:text-6xl">
                {result ? formatINR(result.futureCost) : "—"}
              </div>
              <p className="mt-4 font-body text-sm text-ink-muted">
                {formatINR(values.currentCost)} today grows to this at{" "}
                {Number(values.inflation).toFixed(1)}% inflation over{" "}
                {values.years} years.
              </p>
            </>
          }
          stats={
            <>
              <ResultStat
                label="Monthly SIP Needed"
                value={result ? formatINR(result.monthlySipRequired) : "—"}
                accent="gold"
              />
              <ResultStat
                label="Or Lumpsum Today"
                value={result ? formatINR(result.lumpsumRequired) : "—"}
              />
              <ResultStat
                label="Cost Multiple"
                value={
                  result
                    ? `${(result.futureCost / values.currentCost).toFixed(2)}×`
                    : "—"
                }
              />
            </>
          }
          footnote="Inflation assumptions should reflect the category — education costs have historically outpaced general CPI inflation."
        />
      }
    />
  );
}
