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
  calcRetirement,
  formatINR,
  getCalculatorBySlug,
} from "@/lib/calculators";

const schema = z
  .object({
    currentAge: z.number().min(18).max(80),
    retirementAge: z.number().min(30).max(85),
    lifeExpectancy: z.number().min(60).max(100),
    monthlyExpense: z.number().min(5_000).max(10_00_00_000),
    inflation: z.number().min(0).max(15),
    preRetirementReturn: z.number().min(1).max(30),
    postRetirementReturn: z.number().min(1).max(20),
  })
  .refine((d) => d.retirementAge > d.currentAge, {
    path: ["retirementAge"],
    message: "Must be after current age",
  })
  .refine((d) => d.lifeExpectancy > d.retirementAge, {
    path: ["lifeExpectancy"],
    message: "Must be after retirement age",
  });

type FormValues = z.infer<typeof schema>;

const defaults: FormValues = {
  currentAge: 35,
  retirementAge: 60,
  lifeExpectancy: 85,
  monthlyExpense: 1_00_000,
  inflation: 6,
  preRetirementReturn: 12,
  postRetirementReturn: 8,
};

export function RetirementCalculator() {
  const meta = getCalculatorBySlug("retirement")!;
  const { register, watch, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
    mode: "onChange",
  });
  const values = watch();

  const result = useMemo(() => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) return null;
    return calcRetirement(parsed.data);
  }, [values]);

  return (
    <CalculatorShell
      meta={meta}
      form={
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <NumberField
              label="Current Age"
              unit="Yrs"
              {...register("currentAge", { valueAsNumber: true })}
              error={formState.errors.currentAge?.message}
            />
            <NumberField
              label="Retire At"
              unit="Yrs"
              {...register("retirementAge", { valueAsNumber: true })}
              error={formState.errors.retirementAge?.message}
            />
          </div>
          <NumberField
            label="Life Expectancy"
            unit="Yrs"
            {...register("lifeExpectancy", { valueAsNumber: true })}
            error={formState.errors.lifeExpectancy?.message}
          />
          <NumberField
            label="Monthly Expense Today"
            unit="₹"
            {...register("monthlyExpense", { valueAsNumber: true })}
            error={formState.errors.monthlyExpense?.message}
          />
          <NumberField
            label="Inflation"
            unit="% p.a."
            step="0.1"
            {...register("inflation", { valueAsNumber: true })}
            error={formState.errors.inflation?.message}
          />
          <div className="grid grid-cols-2 gap-4">
            <NumberField
              label="Pre-Ret Return"
              unit="%"
              step="0.1"
              {...register("preRetirementReturn", { valueAsNumber: true })}
              error={formState.errors.preRetirementReturn?.message}
            />
            <NumberField
              label="Post-Ret Return"
              unit="%"
              step="0.1"
              {...register("postRetirementReturn", { valueAsNumber: true })}
              error={formState.errors.postRetirementReturn?.message}
            />
          </div>
        </div>
      }
      result={
        <ResultPanel
          headline={
            <>
              <span className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
                Corpus Required at Retirement
              </span>
              <div className="mt-4 font-stat text-5xl leading-none text-ink md:text-6xl">
                {result ? formatINR(result.corpusRequired) : "—"}
              </div>
              <p className="mt-4 font-body text-sm text-ink-muted">
                To sustain{" "}
                {result
                  ? formatINR(result.monthlyExpenseAtRetirement)
                  : "—"}
                /month (today's lifestyle, inflation-adjusted) for{" "}
                {result?.yearsInRetirement ?? 0} years of retirement.
              </p>
            </>
          }
          stats={
            <>
              <ResultStat
                label="Monthly SIP Needed"
                value={result ? formatINR(result.monthlySipRequired) : "—"}
                accent="gold"
                sublabel={`Starting today, for ${result?.yearsToRetire ?? 0} years`}
              />
              <ResultStat
                label="Years to Retire"
                value={String(result?.yearsToRetire ?? 0)}
              />
              <ResultStat
                label="Years in Retirement"
                value={String(result?.yearsInRetirement ?? 0)}
              />
            </>
          }
          footnote="Uses an annuity model with inflation-adjusted real returns during retirement. Healthcare and lifestyle shocks are not modelled — build a margin."
        />
      }
    />
  );
}
