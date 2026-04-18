export const faqCategories = [
  "About Mukta Finserv",
  "Investing",
  "Taxation",
  "NRI",
  "Insurance",
  "Getting Started",
] as const;

export type FaqCategory = (typeof faqCategories)[number];

export type FaqItem = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  // About Mukta Finserv
  {
    id: "who-we-serve",
    category: "About Mukta Finserv",
    question: "Who does Mukta Finserv typically work with?",
    answer:
      "We work with resident Indian families, professionals, and NRIs with meaningful wealth-management needs — typically where asset allocation, tax efficiency, and succession are all in play. We are partner-led and intentionally small; not every relationship is a fit, and we will tell you so if it is not.",
  },
  {
    id: "minimum-size",
    category: "About Mukta Finserv",
    question: "Is there a minimum investment size to become a client?",
    answer:
      "We do not publish a hard minimum, because the right fit depends on complexity as much as size. As a practical matter, most of our relationships are with families for whom the planning work justifies an ongoing partner relationship. We are happy to have a short initial conversation to see whether we are the right firm for you.",
  },
  {
    id: "fee-structure",
    category: "About Mukta Finserv",
    question: "How is Mukta Finserv compensated?",
    answer:
      "We are an AMFI-registered Mutual Fund Distributor and earn trail commissions on regular-plan mutual fund investments. The commissions we receive are disclosed in writing at the start of every relationship and reviewed annually. For PMS/AIF mandates, fees are as per the product's disclosure document. We do not charge a separate advisory fee.",
  },
  {
    id: "regular-vs-direct",
    category: "About Mukta Finserv",
    question: "Do you offer direct-plan mutual funds?",
    answer:
      "No. We deal in regular plans only. We believe the service we provide — plan construction, behavioural ballast, review cadence, operational and tax hygiene, estate coordination — is what justifies the trail commission. If you prefer to execute directly, direct plans through any AMC platform are an excellent self-managed option.",
  },

  // Investing
  {
    id: "start-investing",
    category: "Investing",
    question: "I'm just starting. Where should I begin?",
    answer:
      "With a clear sense of why the money matters, and by when. Before any product selection, we work through your goals, horizon, cashflow, and tolerance for drawdowns. The allocation that comes out of that conversation determines 80% of the outcome you will see in twenty years.",
  },
  {
    id: "how-much-equity",
    category: "Investing",
    question: "How much of my portfolio should be in equity?",
    answer:
      "It depends on horizon, goal-type, and — honestly — the drawdown you will actually hold through at 2 am. We help clients land on an allocation that is both financially defensible and behaviourally sustainable. A portfolio you exit at the bottom is worse than one with less equity in it to begin with.",
  },
  {
    id: "review-cadence",
    category: "Investing",
    question: "How often will my portfolio be reviewed?",
    answer:
      "Formally, quarterly — with a written note. Informally, continuously. Most quarters, our note will say that nothing needs to change. Discipline, not activity, is what we are optimising for.",
  },
  {
    id: "market-crash",
    category: "Investing",
    question: "What happens when markets fall sharply?",
    answer:
      "Typically, very little changes in the portfolio — which is the point. If the allocation was set correctly, a drawdown is part of the path, not a signal to act. We will call you, write to you, and if anything rebalance into weakness. We will not sell out of fear.",
  },

  // Taxation
  {
    id: "ltcg-equity",
    category: "Taxation",
    question: "How are long-term capital gains on equity mutual funds taxed?",
    answer:
      "Under current rules, LTCG on equity-oriented mutual funds held for more than 12 months is taxed at 12.5% on gains exceeding ₹1.25 lakh per financial year. We track this at the unit level and plan withdrawals to use the annual exemption efficiently. Tax rates and rules evolve; our quarterly notes flag changes that affect you.",
  },
  {
    id: "debt-funds-tax",
    category: "Taxation",
    question: "How are debt mutual funds taxed?",
    answer:
      "For units purchased on or after 1 April 2023, gains on debt-oriented funds are taxed at your slab rate irrespective of holding period. We factor this into any short- to medium-term debt-fund recommendations and discuss alternatives where appropriate.",
  },
  {
    id: "tax-loss-harvesting",
    category: "Taxation",
    question: "Do you do tax-loss harvesting?",
    answer:
      "Where it genuinely helps. We reconcile realised and unrealised gains annually, and where a harvest improves your overall tax position without compromising the plan, we will recommend it — in writing, with the numbers.",
  },

  // NRI
  {
    id: "nri-services",
    category: "NRI",
    question: "Can NRIs invest in Indian mutual funds through Mukta Finserv?",
    answer:
      "Yes, subject to the regulatory framework applicable to your country of residence. Most NRIs from permitted jurisdictions invest via NRE or NRO accounts. US and Canada-resident investors face additional restrictions from many AMCs; we will tell you clearly what is and isn't available to you.",
  },
  {
    id: "nri-fema",
    category: "NRI",
    question: "Do you handle the FEMA and repatriation side?",
    answer:
      "We coordinate closely with your CA on FEMA compliance, Form 15CA/CB filings for repatriation, and the appropriate NRE/NRO account structure. We do not ourselves file tax returns — we make sure your CA has what they need to do so.",
  },
  {
    id: "nri-tax-residency",
    category: "NRI",
    question: "Does changing tax residency affect my investments?",
    answer:
      "Yes — sometimes materially. Returning to India or leaving India both trigger a set of account re-designations, KYC updates, and tax-planning considerations. We walk returning or departing NRIs through a structured 90-day transition plan that covers all of it.",
  },

  // Insurance
  {
    id: "term-vs-investment",
    category: "Insurance",
    question:
      "Should I buy insurance with an investment component (ULIP, endowment)?",
    answer:
      "We generally recommend keeping protection and investment separate — pure term insurance for the protection need, and mutual funds for the compounding need. Bundled products tend to underserve both goals. There are edge cases, and we will flag them if they apply to you.",
  },
  {
    id: "how-much-term",
    category: "Insurance",
    question: "How much term insurance do I need?",
    answer:
      "A working starting point is 10–20x your annual income, adjusted for outstanding loans, dependants, and existing cover. For senior professionals and business owners, we run a proper Human Life Value calculation and pair it with your estate plan so the cover pays into the right structure.",
  },
  {
    id: "health-cover",
    category: "Insurance",
    question: "What about health insurance?",
    answer:
      "A base family floater of ₹25 lakh or more, topped up with a super top-up, covers most families reasonably. We do not sell health insurance ourselves, but we will walk you through the structure and help you coordinate with a specialist broker.",
  },

  // Getting Started
  {
    id: "first-meeting",
    category: "Getting Started",
    question: "What happens in the first meeting?",
    answer:
      "A 45-minute conversation, in person or video. We listen — to what the money is for, what has been tried before, what has worked, what hasn't. No product pitches in the first meeting, ever. You leave with a one-page summary of what we heard and whether we are the right firm for you.",
  },
  {
    id: "paperwork",
    category: "Getting Started",
    question: "How much paperwork is involved in onboarding?",
    answer:
      "Less than you fear. KYC is paperless for most resident Indians. We handle MF account registration, PAN verification, and nominee setup digitally wherever possible. For complex situations (PMS, AIF, NRI structures), we hand-hold through the additional forms and keep the turnaround short.",
  },
  {
    id: "exit-anytime",
    category: "Getting Started",
    question: "Can I exit the relationship if it isn't working?",
    answer:
      "Any time, without friction. Your investments are in your name, held with the AMC or custodian, never with us. We help you transition cleanly — portfolio file, tax records, and a handover note for your next advisor or for self-management. Good advice should be easy to leave.",
  },
];
