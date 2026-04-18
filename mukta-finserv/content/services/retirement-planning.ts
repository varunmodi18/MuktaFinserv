import type { ServiceDetail } from "@/lib/services";

const detail: ServiceDetail = {
  slug: "retirement-planning",
  label: "Retirement Planning",
  eyebrow: "The Long Horizon",
  heroIntro:
    "A funded plan for the life you intend to live after work — modelled honestly, stress-tested against long life expectancy and inflation, and revisited every year. Not a product recommendation dressed as a plan.",
  whatWeOffer: [
    "Retirement-corpus modelling across multiple inflation and return scenarios",
    "Glide-path design — reducing equity exposure as the horizon shortens",
    "Income-in-retirement architecture via SWP, annuities, and debt ladders",
    "Health-cover continuity planning as employer cover falls away",
    "Coordination with EPF, NPS, and superannuation balances",
    "Legacy planning — because retirement money is often inheritance money too",
  ],
  personas: [
    {
      title: "The Mid-Career Professional",
      description:
        "Fifteen to twenty-five years to go. We set the saving rate and the equity exposure so the corpus can genuinely compound.",
    },
    {
      title: "The Pre-Retiree",
      description:
        "Five to ten years to go. We begin the equity glide-down and design the income architecture that turns on at retirement.",
    },
    {
      title: "The New Retiree",
      description:
        "Regular income has stopped. We sequence portfolio draw-downs so capital lasts and tax stays light.",
    },
  ],
  process: [
    {
      numeral: "I",
      title: "Corpus Target",
      body: "We model the expense base you need to fund, inflated to retirement year, and discount for pension and EPF inflows.",
    },
    {
      numeral: "II",
      title: "Accumulation Plan",
      body: "A monthly savings and asset-allocation prescription that closes the gap — with built-in stress tests.",
    },
    {
      numeral: "III",
      title: "Decumulation Design",
      body: "A written drawdown strategy — what to sell when, from which bucket, and how tax moves through the sequence.",
    },
  ],
  relatedCalculators: [
    {
      slug: "retirement",
      label: "Retirement Corpus",
      description:
        "Project the corpus you need given current expenses, inflation, and horizon.",
    },
    {
      slug: "future-value",
      label: "Future Value",
      description: "See what today's investments could grow to at different return rates.",
    },
  ],
  faqs: [
    {
      q: "Is NPS enough for retirement?",
      a: "For most, no. NPS is a useful tax-efficient building block but is rarely sized to fully fund retirement on its own, especially once the annuity requirement of the corpus is factored in. It complements — rather than replaces — a mutual-fund retirement portfolio.",
    },
    {
      q: "How much do I need saved by retirement?",
      a: "A common benchmark is 25–30× your expected annual expenses in retirement. But the number that matters is the one that survives your specific scenario: life expectancy, real-return assumptions, and one-off obligations. We compute yours explicitly.",
    },
    {
      q: "Should I pay off my home loan before retiring?",
      a: "Usually yes, if it can be done without materially denting the corpus — a loan EMI is a fixed liability and retirement income is variable. We model the trade-off so the decision is informed.",
    },
    {
      q: "What if markets crash right when I retire?",
      a: "Sequence-of-returns risk is real. That is why we build a two-to-three-year cash and short-debt buffer before retirement, so you never have to sell equity at the bottom to cover living expenses.",
    },
  ],
};

export default detail;
