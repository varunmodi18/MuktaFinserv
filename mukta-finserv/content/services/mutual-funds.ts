import type { ServiceDetail } from "@/lib/services";

const detail: ServiceDetail = {
  slug: "mutual-funds",
  label: "Mutual Funds",
  eyebrow: "Wealth Creation",
  heroIntro:
    "Thoughtfully constructed mutual-fund portfolios built around your goals, your horizon, and your tolerance for volatility. We research widely, recommend narrowly, and review relentlessly.",
  whatWeOffer: [
    "Goal-mapped portfolios across equity, debt, hybrid, and international funds",
    "Direct-plan or regular-plan access depending on the advisory structure that fits",
    "SIP, STP, SWP architecture tuned to your cash-flow rhythm",
    "Quarterly rebalancing reviews with a written rationale for every change",
    "Consolidated performance dashboards across family members and entities",
    "Tax-aware harvesting at year-end to optimise long-term capital gains",
  ],
  personas: [
    {
      title: "The First-Time Investor",
      description:
        "Just starting out and wary of being mis-sold. We walk you through the basics, keep the initial portfolio simple, and hand you a plan you can read.",
    },
    {
      title: "The Busy Professional",
      description:
        "No time to pick funds or monitor them. You want a named advisor who owns the outcome and calls you proactively.",
    },
    {
      title: "The Business Owner",
      description:
        "Uneven income, multiple entities, and surplus cash that needs to earn without being trapped. We design portfolios around liquidity reality.",
    },
    {
      title: "The Retiree",
      description:
        "Capital preservation first, income second, growth third. We construct conservative allocations with honest drawdown expectations.",
    },
  ],
  process: [
    {
      numeral: "I",
      title: "Goal Framing",
      body: "We map every rupee to a named goal with a timeline and a target amount.",
    },
    {
      numeral: "II",
      title: "Allocation Design",
      body: "We set the equity/debt mix by goal horizon — not by gut feel or market forecast.",
    },
    {
      numeral: "III",
      title: "Fund Selection & Review",
      body: "Funds are chosen on repeatable process, not last year's returns, and revisited every quarter.",
    },
  ],
  relatedCalculators: [
    {
      slug: "sip",
      label: "SIP Calculator",
      description: "Model the growth of a monthly SIP across tenures and rates.",
    },
    {
      slug: "step-up-sip",
      label: "Step-Up SIP",
      description: "Plan annual SIP increments as your income grows.",
    },
    {
      slug: "lumpsum",
      label: "Lumpsum",
      description: "Estimate the compounded value of a one-time investment.",
    },
  ],
  faqs: [
    {
      q: "Regular plan or direct plan — which is right for me?",
      a: "Direct is cheaper in TER, but you pay for advice separately. Regular bundles ongoing advisory into a trail commission. If you value a named advisor who calls proactively and coordinates across tax, insurance, and estate matters, regular often works out to comparable or lower all-in cost. We disclose both paths on day one.",
    },
    {
      q: "How often will my portfolio be reviewed?",
      a: "Quarterly reviews are standard, with an annual deep-dive on the financial plan itself. We call you for ad-hoc reviews after large market moves or material life events — a job change, a property sale, a new child.",
    },
    {
      q: "What if the fund I'm currently in isn't part of your recommended list?",
      a: "We won't force a switch to book churn. If the fund is acceptable, we keep it. If it isn't, we explain why and give you the option — exit loads, capital-gains impact, and all.",
    },
    {
      q: "Do you recommend NFOs?",
      a: "Rarely. A new fund has no track record, and the thematic pitches are usually better expressed through existing funds. We will flag one only when the structure is genuinely new and the thesis is defensible.",
    },
    {
      q: "What happens if I want to stop investing with you?",
      a: "You take your folios with you. There is no lock-in on the advisory relationship. We will hand over clean statements, unbiased notes, and your plan on file.",
    },
  ],
};

export default detail;
