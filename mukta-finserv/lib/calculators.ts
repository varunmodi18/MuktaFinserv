/**
 * Pure financial calculators for Aparigraha Enterprises.
 * All functions are side-effect-free: inputs → outputs.
 * Money values are in ₹ (INR). Rates are in percent (e.g., 12 = 12% p.a.).
 */

export type GrowthPoint = {
  year: number;
  invested: number;
  value: number;
};

export type AmortizationPoint = {
  month: number;
  principal: number;
  interest: number;
  balance: number;
};

// ---------------------------------------------------------------------------
// SIP (monthly) — level contribution
// ---------------------------------------------------------------------------

export type SipInput = {
  monthly: number;
  years: number;
  rate: number; // annual %
};

export type SipResult = {
  invested: number;
  maturity: number;
  gain: number;
  schedule: GrowthPoint[];
};

export function calcSip({ monthly, years, rate }: SipInput): SipResult {
  const i = rate / 12 / 100;
  const n = Math.round(years * 12);
  const schedule: GrowthPoint[] = [];
  let value = 0;
  let invested = 0;
  for (let m = 1; m <= n; m++) {
    value = (value + monthly) * (1 + i);
    invested += monthly;
    if (m % 12 === 0) {
      schedule.push({ year: m / 12, invested, value });
    }
  }
  return { invested, maturity: value, gain: value - invested, schedule };
}

// ---------------------------------------------------------------------------
// Step-up SIP — contribution grows X% each year
// ---------------------------------------------------------------------------

export type StepUpSipInput = SipInput & { stepUp: number };

export function calcStepUpSip({
  monthly,
  years,
  rate,
  stepUp,
}: StepUpSipInput): SipResult {
  const i = rate / 12 / 100;
  const schedule: GrowthPoint[] = [];
  let value = 0;
  let invested = 0;
  let monthlyNow = monthly;
  for (let y = 1; y <= Math.round(years); y++) {
    for (let m = 1; m <= 12; m++) {
      value = (value + monthlyNow) * (1 + i);
      invested += monthlyNow;
    }
    schedule.push({ year: y, invested, value });
    monthlyNow = monthlyNow * (1 + stepUp / 100);
  }
  return { invested, maturity: value, gain: value - invested, schedule };
}

// ---------------------------------------------------------------------------
// Lumpsum — one-time investment compounding annually
// ---------------------------------------------------------------------------

export type LumpsumInput = {
  principal: number;
  years: number;
  rate: number;
};

export function calcLumpsum({
  principal,
  years,
  rate,
}: LumpsumInput): SipResult {
  const r = rate / 100;
  const schedule: GrowthPoint[] = [];
  let value = principal;
  for (let y = 1; y <= Math.round(years); y++) {
    value = value * (1 + r);
    schedule.push({ year: y, invested: principal, value });
  }
  return {
    invested: principal,
    maturity: value,
    gain: value - principal,
    schedule,
  };
}

// ---------------------------------------------------------------------------
// EMI — loan amortization
// ---------------------------------------------------------------------------

export type EmiInput = {
  principal: number;
  rate: number;
  years: number;
};

export type EmiResult = {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  principal: number;
  schedule: AmortizationPoint[];
};

export function calcEmi({ principal, rate, years }: EmiInput): EmiResult {
  const r = rate / 12 / 100;
  const n = Math.round(years * 12);
  const emi =
    r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const schedule: AmortizationPoint[] = [];
  let balance = principal;
  let totalInterest = 0;
  for (let m = 1; m <= n; m++) {
    const interest = balance * r;
    const principalPart = emi - interest;
    balance -= principalPart;
    totalInterest += interest;
    schedule.push({
      month: m,
      principal: principalPart,
      interest,
      balance: Math.max(balance, 0),
    });
  }
  return {
    emi,
    totalInterest,
    totalPayment: emi * n,
    principal,
    schedule,
  };
}

// ---------------------------------------------------------------------------
// Retirement — corpus required at retirement age
// ---------------------------------------------------------------------------

export type RetirementInput = {
  currentAge: number;
  retirementAge: number;
  lifeExpectancy: number;
  monthlyExpense: number; // in today's rupees
  inflation: number; // % p.a.
  preRetirementReturn: number; // % p.a.
  postRetirementReturn: number; // % p.a.
};

export type RetirementResult = {
  yearsToRetire: number;
  yearsInRetirement: number;
  monthlyExpenseAtRetirement: number;
  corpusRequired: number;
  monthlySipRequired: number;
};

export function calcRetirement(input: RetirementInput): RetirementResult {
  const yearsToRetire = Math.max(input.retirementAge - input.currentAge, 0);
  const yearsInRetirement = Math.max(
    input.lifeExpectancy - input.retirementAge,
    0
  );
  const inflatedMonthly =
    input.monthlyExpense * Math.pow(1 + input.inflation / 100, yearsToRetire);

  // Real rate during retirement (return vs inflation)
  const realRate =
    (1 + input.postRetirementReturn / 100) / (1 + input.inflation / 100) - 1;
  const realMonthlyRate = realRate / 12;
  const months = yearsInRetirement * 12;
  // PV of an annuity paid monthly, in today's (retirement-day) rupees
  const corpusRequired =
    realMonthlyRate === 0
      ? inflatedMonthly * months
      : inflatedMonthly *
        ((1 - Math.pow(1 + realMonthlyRate, -months)) / realMonthlyRate);

  // Monthly SIP to accumulate corpus at preRetirementReturn
  const i = input.preRetirementReturn / 12 / 100;
  const n = yearsToRetire * 12;
  const monthlySipRequired =
    n === 0 || i === 0
      ? n === 0
        ? 0
        : corpusRequired / n
      : corpusRequired / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));

  return {
    yearsToRetire,
    yearsInRetirement,
    monthlyExpenseAtRetirement: inflatedMonthly,
    corpusRequired,
    monthlySipRequired,
  };
}

// ---------------------------------------------------------------------------
// Goal corpus (Education, Marriage) — future cost + SIP needed
// ---------------------------------------------------------------------------

export type GoalInput = {
  currentCost: number;
  years: number; // time until goal
  inflation: number; // % p.a.
  expectedReturn: number; // % p.a.
};

export type GoalResult = {
  futureCost: number;
  monthlySipRequired: number;
  lumpsumRequired: number;
};

export function calcGoal({
  currentCost,
  years,
  inflation,
  expectedReturn,
}: GoalInput): GoalResult {
  const futureCost = currentCost * Math.pow(1 + inflation / 100, years);
  const i = expectedReturn / 12 / 100;
  const n = Math.round(years * 12);
  const monthlySipRequired =
    i === 0 ? futureCost / n : futureCost / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
  const lumpsumRequired = futureCost / Math.pow(1 + expectedReturn / 100, years);
  return { futureCost, monthlySipRequired, lumpsumRequired };
}

// ---------------------------------------------------------------------------
// Future Value — principal + optional annual contribution
// ---------------------------------------------------------------------------

export type FutureValueInput = {
  principal: number;
  annualContribution: number;
  years: number;
  rate: number;
};

export function calcFutureValue({
  principal,
  annualContribution,
  years,
  rate,
}: FutureValueInput): SipResult {
  const r = rate / 100;
  const schedule: GrowthPoint[] = [];
  let value = principal;
  let invested = principal;
  for (let y = 1; y <= Math.round(years); y++) {
    value = value * (1 + r) + annualContribution;
    invested += annualContribution;
    schedule.push({ year: y, invested, value });
  }
  return {
    invested,
    maturity: value,
    gain: value - invested,
    schedule,
  };
}

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

export function formatINR(value: number, opts?: { compact?: boolean }): string {
  if (!Number.isFinite(value)) return "—";
  const rounded = Math.round(value);
  if (opts?.compact) {
    if (Math.abs(rounded) >= 1_00_00_000) {
      return `₹${(rounded / 1_00_00_000).toFixed(2)} Cr`;
    }
    if (Math.abs(rounded) >= 1_00_000) {
      return `₹${(rounded / 1_00_000).toFixed(2)} L`;
    }
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(rounded);
}

export function formatPercent(value: number, digits = 1): string {
  if (!Number.isFinite(value)) return "—";
  return `${value.toFixed(digits)}%`;
}

// ---------------------------------------------------------------------------
// Registry — calculator metadata for listing + routing
// ---------------------------------------------------------------------------

export type CalculatorMeta = {
  slug: string;
  label: string;
  eyebrow: string;
  blurb: string;
  tags: readonly string[];
};

export const calculators = [
  {
    slug: "sip",
    label: "SIP Calculator",
    eyebrow: "Monthly Investment",
    blurb:
      "Project the maturity of a monthly SIP at a given expected return — invested, gain, and corpus over time.",
    tags: ["mutual-funds", "monthly"],
  },
  {
    slug: "step-up-sip",
    label: "Step-up SIP",
    eyebrow: "Income-linked SIP",
    blurb:
      "Model a SIP that grows with your income — a realistic picture of how discipline compounds over two decades.",
    tags: ["mutual-funds", "advanced"],
  },
  {
    slug: "lumpsum",
    label: "Lumpsum Calculator",
    eyebrow: "One-Time Investment",
    blurb:
      "See how a single investment compounds across years at a given rate of return, with a plotted trajectory.",
    tags: ["lumpsum"],
  },
  {
    slug: "retirement",
    label: "Retirement Corpus",
    eyebrow: "Planning Ahead",
    blurb:
      "Translate today's lifestyle into the corpus you'll need — and the monthly SIP that gets you there.",
    tags: ["retirement", "goal"],
  },
  {
    slug: "emi",
    label: "EMI Calculator",
    eyebrow: "Loan Amortization",
    blurb:
      "Calculate monthly EMIs, total interest outgo, and the principal-vs-interest split across the loan tenure.",
    tags: ["loans"],
  },
  {
    slug: "education",
    label: "Education Planner",
    eyebrow: "Child's Future",
    blurb:
      "What today's school or college cost will become — and the monthly investment required to meet it.",
    tags: ["goal", "children"],
  },
  {
    slug: "marriage",
    label: "Marriage Planner",
    eyebrow: "Life Milestones",
    blurb:
      "Plan for a wedding decades away: the future cost, the monthly commitment, and the lumpsum equivalent.",
    tags: ["goal"],
  },
  {
    slug: "future-value",
    label: "Future Value",
    eyebrow: "Wealth Projection",
    blurb:
      "Project a starting corpus forward with optional annual top-ups — for estate and wealth planning conversations.",
    tags: ["wealth", "advanced"],
  },
] as const satisfies readonly CalculatorMeta[];

export type CalculatorSlug = (typeof calculators)[number]["slug"];

export function getCalculatorBySlug(slug: string): CalculatorMeta | null {
  return calculators.find((c) => c.slug === slug) ?? null;
}

export function getAllCalculatorSlugs(): string[] {
  return calculators.map((c) => c.slug);
}
