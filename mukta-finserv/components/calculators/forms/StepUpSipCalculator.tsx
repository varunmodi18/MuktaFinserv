"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NumberField } from "../NumberField";
import { ResultPanel } from "../ResultPanel";
import { ResultStat } from "../ResultStat";
import { GrowthChart } from "../GrowthChart";
import { CalculatorShell } from "../CalculatorShell";
import {
  calcStepUpSip,
  formatINR,
  getCalculatorBySlug,
} from "@/lib/calculators";

const schema = z.object({
  monthly: z.number().min(500).max(10_00_00_000),
  years: z.number().min(1).max(50),
  rate: z.number().min(1).max(30),
  stepUp: z.number().min(0).max(30),
});

type FormValues = z.infer<typeof schema>;

const defaults: FormValues = {
  monthly: 25_000,
  years: 20,
  rate: 12,
  stepUp: 10,
};

export function StepUpSipCalculator() {
  const meta = getCalculatorBySlug("step-up-sip")!;
  const { register, watch, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
    mode: "onChange",
  });
  const values = watch();

  const result = useMemo(() => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) return null;
    return calcStepUpSip(parsed.data);
  }, [values]);

  return (
    <CalculatorShell
      meta={meta}
      form={
        <div className="flex flex-col gap-6">
          <NumberField
            label="Starting Monthly SIP"
            unit="₹"
            {...register("monthly", { valueAsNumber: true })}
            error={formState.errors.monthly?.message}
          />
          <NumberField
            label="Annual Step-up"
            unit="%"
            step="0.5"
            {...register("stepUp", { valueAsNumber: true })}
            hint="Contribution grows this much each year"
            error={formState.errors.stepUp?.message}
          />
          <NumberField
            label="Duration"
            unit="Years"
            {...register("years", { valueAsNumber: true })}
            error={formState.errors.years?.message}
          />
          <NumberField
            label="Expected Return"
            unit="% p.a."
            step="0.1"
            {...register("rate", { valueAsNumber: true })}
            error={formState.errors.rate?.message}
          />
        </div>
      }
      result={
        <ResultPanel
          headline={
            <>
              <span className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
                Maturity Value
              </span>
              <div className="mt-4 font-stat text-5xl leading-none text-ink md:text-6xl">
                {result ? formatINR(result.maturity) : "—"}
              </div>
              <p className="mt-4 font-body text-sm text-ink-muted">
                With a{" "}
                {Number(values.stepUp).toFixed(1)}% annual step-up over{" "}
                {values.years} years at {Number(values.rate).toFixed(1)}% p.a.
              </p>
            </>
          }
          stats={
            <>
              <ResultStat
                label="Total Invested"
                value={result ? formatINR(result.invested) : "—"}
              />
              <ResultStat
                label="Wealth Gain"
                value={result ? formatINR(result.gain) : "—"}
                accent="gold"
              />
              <ResultStat
                label="Multiple"
                value={
                  result && result.invested > 0
                    ? `${(result.maturity / result.invested).toFixed(2)}×`
                    : "—"
                }
              />
            </>
          }
          chart={
            result ? (
              <>
                <h3 className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
                  Growth Trajectory
                </h3>
                <div className="mt-6">
                  <GrowthChart data={result.schedule} />
                </div>
              </>
            ) : null
          }
          footnote="Projections assume contributions step up annually on schedule. Actual returns vary with markets."
        />
      }
    />
  );
}
