export type ProcessStep = {
  numeral: string;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    numeral: "I",
    title: "Discover",
    body: "Listen first. We map your goals, obligations, and risk appetite before naming a single product.",
  },
  {
    numeral: "II",
    title: "Design",
    body: "A written financial plan with asset allocation, glide-paths, and contingencies — yours to keep.",
  },
  {
    numeral: "III",
    title: "Deploy",
    body: "Execution across mutual funds, insurance, and structured products via the cleanest available wrappers.",
  },
  {
    numeral: "IV",
    title: "Monitor",
    body: "Live dashboards plus quarterly reviews — you always know what is held, why, and what changed.",
  },
  {
    numeral: "V",
    title: "Review",
    body: "Annual deep-dives on the plan itself: life events, tax law, and the world all change. So should the plan.",
  },
];
