"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NumberField } from "../NumberField";
import { ResultPanel } from "../ResultPanel";
import { ResultStat } from "../ResultStat";
import { AmortizationDonut } from "../AmortizationDonut";
import { CalculatorShell } from "../CalculatorShell";
import { calcEmi, formatINR, getCalculatorBySlug } from "@/lib/calculators";

const schema = z.object({
  principal: z.number().min(10_000).max(10_00_00_00_000),
  rate: z.number().min(1).max(30),
  years: z.number().min(1).max(40),
});

type FormValues = z.infer<typeof schema>;

const defaults: FormValues = { principal: 50_00_000, rate: 9, years: 20 };

export function EmiCalculator() {
  const meta = getCalculatorBySlug("emi")!;
  const { register, watch, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
    mode: "onChange",
  });
  const values = watch();

  const result = useMemo(() => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) return null;
    return calcEmi(parsed.data);
  }, [values]);

  return (
    <CalculatorShell
      meta={meta}
      form={
        <div className="flex flex-col gap-6">
          <NumberField
            label="Loan Amount"
            unit="₹"
            {...register("principal", { valueAsNumber: true })}
            error={formState.errors.principal?.message}
          />
          <NumberField
            label="Interest Rate"
            unit="% p.a."
            step="0.05"
            {...register("rate", { valueAsNumber: true })}
            error={formState.errors.rate?.message}
          />
          <NumberField
            label="Tenure"
            unit="Years"
            {...register("years", { valueAsNumber: true })}
            error={formState.errors.years?.message}
          />
        </div>
      }
      result={
        <ResultPanel
          headline={
            <>
              <span className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
                Monthly EMI
              </span>
              <div className="mt-4 font-stat text-5xl leading-none text-ink md:text-6xl">
                {result ? formatINR(result.emi) : "—"}
              </div>
              <p className="mt-4 font-body text-sm text-ink-muted">
                Over {values.years} years at{" "}
                {Number(values.rate).toFixed(2)}% per annum.
              </p>
            </>
          }
          stats={
            <>
              <ResultStat
                label="Principal"
                value={result ? formatINR(result.principal) : "—"}
              />
              <ResultStat
                label="Total Interest"
                value={result ? formatINR(result.totalInterest) : "—"}
                accent="gold"
              />
              <ResultStat
                label="Total Payment"
                value={result ? formatINR(result.totalPayment) : "—"}
              />
            </>
          }
          chart={
            result ? (
              <>
                <h3 className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
                  Principal vs Interest
                </h3>
                <div className="mt-6">
                  <AmortizationDonut
                    principal={result.principal}
                    interest={result.totalInterest}
                  />
                </div>
              </>
            ) : null
          }
          footnote="EMI is calculated on a reducing-balance basis. Banks may levy processing fees, GST, and other charges not shown here."
        />
      }
    />
  );
}
