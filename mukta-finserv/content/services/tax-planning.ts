import type { ServiceDetail } from "@/lib/services";

const detail: ServiceDetail = {
  slug: "tax-planning",
  label: "Tax Planning",
  eyebrow: "Optimisation",
  heroIntro:
    "Tax planning is not a March exercise. We work it into the portfolio all year — harvesting gains, timing redemptions, sequencing deductions — so you keep more of what you earn without chasing loopholes.",
  whatWeOffer: [
    "Year-round capital-gains harvesting and loss-offset coordination",
    "Section 80C, 80D, 80CCD(1B) and other deduction sequencing",
    "Advance-tax computation and payment reminders across quarters",
    "Capital-gains planning on property, equity, and business-asset sales",
    "Tax-efficient SWP, STP, and income-sequencing for retirees",
    "Coordination with your chartered accountant — we prepare; they file",
  ],
  personas: [
    {
      title: "The Salaried Professional",
      description:
        "Want the deductions used fully without buying the wrong products to get them. We help you separate tax-saving from wealth-creation.",
    },
    {
      title: "The Capital-Gains Realiser",
      description:
        "Selling property, equity, or a business stake this year. We plan the transaction so the post-tax proceeds are maximised — legally and defensibly.",
    },
    {
      title: "The Retiree",
      description:
        "Income must stay tax-light. We design SWP and debt-income sequencing so tax outgo is smoothed year over year.",
    },
  ],
  process: [
    {
      numeral: "I",
      title: "Position Review",
      body: "We review current holdings for embedded gains, losses, and holding-period milestones.",
    },
    {
      numeral: "II",
      title: "Action Plan",
      body: "A dated checklist — what to harvest, what to time, what to claim — that your CA can execute against.",
    },
    {
      numeral: "III",
      title: "Year-End Reconciliation",
      body: "Before March-end, a final walk-through so nothing is left on the table and nothing is done hastily.",
    },
  ],
  relatedCalculators: [
    {
      slug: "emi",
      label: "EMI Calculator",
      description: "Plan home-loan EMI and Section 24 interest deductions.",
    },
  ],
  faqs: [
    {
      q: "Old tax regime or new — which should I pick?",
      a: "Depends on the density of your deductions. High 80C, 80D, HRA, and home-loan-interest usage usually still favours the old regime; lean deduction profiles often favour the new. We run both calculations side-by-side and choose on evidence.",
    },
    {
      q: "Do you help with tax return filing?",
      a: "Filing is your chartered accountant's role. Our role is to hand over a clean, annotated year-end pack so filing is mechanical and nothing is missed.",
    },
    {
      q: "Can you help me plan the tax impact of selling a property?",
      a: "Yes. We compute the indexed cost, the exemption routes (Section 54/54F/54EC), and model the post-tax outcome under each option. For large transactions, we coordinate directly with your legal and tax advisors.",
    },
    {
      q: "What is tax-loss harvesting and should I do it?",
      a: "Booking paper losses in loss-making holdings to offset realised gains elsewhere. Done with discipline, it saves real money — but must be paired with a re-entry plan so the portfolio isn't left mis-allocated.",
    },
  ],
};

export default detail;
