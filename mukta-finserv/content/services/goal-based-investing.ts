import type { ServiceDetail } from "@/lib/services";

const detail: ServiceDetail = {
  slug: "goal-based-investing",
  label: "Goal-Based Investing",
  eyebrow: "Purposeful Allocation",
  heroIntro:
    "A portfolio without a purpose drifts. We tag every rupee to a named goal — a home, a child's education, a sabbatical, early retirement — and design a glide-path per goal so risk declines as the goal approaches.",
  whatWeOffer: [
    "Goal discovery and prioritisation — the conversation that comes before the numbers",
    "Inflation-indexed target amounts for long-horizon goals",
    "Per-goal asset allocation that matures with the timeline",
    "Dedicated tracking per goal on the family dashboard",
    "Automatic glide-downs as goal horizons shorten",
    "Periodic re-prioritisation as life stages shift",
  ],
  personas: [
    {
      title: "The Young Family",
      description:
        "Goals stacking up — home down-payment, children's education, retirement. We sequence the saving across goals without starving any one of them.",
    },
    {
      title: "The Aspirational Saver",
      description:
        "Specific life-style goals — a sabbatical, a second home, a family trip of a lifetime. We compute what each costs and what the SIP looks like.",
    },
    {
      title: "The Grandparent",
      description:
        "Building a ring-fenced corpus for a grandchild's education or wedding, with clear legal routing.",
    },
  ],
  process: [
    {
      numeral: "I",
      title: "Goal Discovery",
      body: "We list the goals, agree on priority, and attach an inflation-adjusted target amount and year to each.",
    },
    {
      numeral: "II",
      title: "Per-Goal Allocation",
      body: "Short-horizon goals get conservative mixes; long-horizon goals lean growth-oriented. Each goal has its own set of holdings.",
    },
    {
      numeral: "III",
      title: "Glide & Rebalance",
      body: "As a goal approaches, risk is dialled down systematically — so you are not relying on a bull market in the final year.",
    },
  ],
  relatedCalculators: [
    {
      slug: "education",
      label: "Education Planning",
      description: "Project the corpus required for undergraduate and post-graduate education.",
    },
    {
      slug: "marriage",
      label: "Marriage Planning",
      description: "Estimate the inflation-adjusted cost of a wedding at a target year.",
    },
    {
      slug: "future-value",
      label: "Future Value",
      description: "Understand what today's savings grow to under various assumptions.",
    },
  ],
  faqs: [
    {
      q: "Can one portfolio not serve all goals?",
      a: "It can, but you lose precision. A single pool means a market correction hits every goal equally, including the one that was two months from maturity. Per-goal allocation lets you protect near-term goals without slowing long-term ones.",
    },
    {
      q: "What if my goals change?",
      a: "They will — and the framework expects it. Annual reviews reassess priority, and per-goal allocations adjust. The architecture is designed for re-pointing, not rigidity.",
    },
    {
      q: "How do you handle competing goals with insufficient savings?",
      a: "We rank them. Non-negotiables (retirement, children's basic education) get funded first; aspirational goals fit into the remaining surplus. Honest prioritisation is worth more than spreading effort thin.",
    },
    {
      q: "Do short-term goals really need a separate portfolio?",
      a: "Yes. A goal three years out cannot absorb a 30% equity drawdown. It needs its own conservative allocation, however small, because the objective is certainty of outcome, not maximum return.",
    },
  ],
};

export default detail;
