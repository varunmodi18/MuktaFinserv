import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCalculatorSlugs,
  getCalculatorBySlug,
} from "@/lib/calculators";
import { buildMetadata } from "@/lib/seo";
import { CTABand } from "@/components/home/CTABand";
import { SipCalculator } from "@/components/calculators/forms/SipCalculator";
import { StepUpSipCalculator } from "@/components/calculators/forms/StepUpSipCalculator";
import { LumpsumCalculator } from "@/components/calculators/forms/LumpsumCalculator";
import { EmiCalculator } from "@/components/calculators/forms/EmiCalculator";
import { RetirementCalculator } from "@/components/calculators/forms/RetirementCalculator";
import { GoalCalculator } from "@/components/calculators/forms/GoalCalculator";
import { FutureValueCalculator } from "@/components/calculators/forms/FutureValueCalculator";

export async function generateStaticParams() {
  return getAllCalculatorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getCalculatorBySlug(slug);
  if (!meta) return buildMetadata({ title: "Calculator not found" });
  return buildMetadata({
    title: meta.label,
    description: meta.blurb,
    path: `/calculators/${meta.slug}`,
  });
}

function CalculatorBySlug({ slug }: { slug: string }) {
  switch (slug) {
    case "sip":
      return <SipCalculator />;
    case "step-up-sip":
      return <StepUpSipCalculator />;
    case "lumpsum":
      return <LumpsumCalculator />;
    case "emi":
      return <EmiCalculator />;
    case "retirement":
      return <RetirementCalculator />;
    case "education":
      return <GoalCalculator variant="education" />;
    case "marriage":
      return <GoalCalculator variant="marriage" />;
    case "future-value":
      return <FutureValueCalculator />;
    default:
      return null;
  }
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getCalculatorBySlug(slug);
  if (!meta) notFound();
  return (
    <>
      <CalculatorBySlug slug={slug} />
      <CTABand />
    </>
  );
}
