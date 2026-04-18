import {
  ChartPie,
  Shield,
  Briefcase,
  Scroll,
  Calculator,
  Sunrise,
  Globe,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { ServiceSlug } from "@/lib/site";

export type ServiceSummary = {
  slug: ServiceSlug;
  label: string;
  blurb: string;
  Icon: LucideIcon;
};

export const servicesSummary: ServiceSummary[] = [
  {
    slug: "mutual-funds",
    label: "Mutual Funds",
    blurb:
      "Curated portfolios across equity, debt, and hybrid funds, aligned to your goals and reviewed quarterly.",
    Icon: ChartPie,
  },
  {
    slug: "insurance",
    label: "Insurance",
    blurb:
      "Term, health, and asset cover sized to your real liabilities — no product pushes, no surprises.",
    Icon: Shield,
  },
  {
    slug: "pms-aif",
    label: "PMS & AIF",
    blurb:
      "Access to vetted Portfolio Management and Alternative Investment Funds for sophisticated mandates.",
    Icon: Briefcase,
  },
  {
    slug: "estate-planning",
    label: "Estate & Will Planning",
    blurb:
      "Wills, trusts, and succession structures so wealth transfers cleanly across generations.",
    Icon: Scroll,
  },
  {
    slug: "tax-planning",
    label: "Tax Planning",
    blurb:
      "Year-round optimisation across capital gains, deductions, and indirect tax exposure.",
    Icon: Calculator,
  },
  {
    slug: "retirement-planning",
    label: "Retirement Planning",
    blurb:
      "A funded plan for the life you intend to live after work — modelled, stress-tested, and revisited.",
    Icon: Sunrise,
  },
  {
    slug: "nri-services",
    label: "NRI Services",
    blurb:
      "Cross-border investing, FEMA compliance, and repatriation handled by a single point of contact.",
    Icon: Globe,
  },
  {
    slug: "goal-based-investing",
    label: "Goal-Based Investing",
    blurb:
      "Every rupee mapped to a named goal — education, a home, a sabbatical — with its own glide-path.",
    Icon: Target,
  },
];
