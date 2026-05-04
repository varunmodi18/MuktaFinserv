import type { Pillar } from "./philosophy";

export type TimelineEvent = {
  year: string;
  title: string;
  body: string;
};

export const foundingTimeline: TimelineEvent[] = [
  {
    year: "200X",
    title: "A Conviction, Not Yet a Firm",
    body: "The founding partner leaves a larger institution with a clear conviction: advice should be paid for on time, not on product — and families deserve a practice, not a sales desk.",
  },
  {
    year: "201X",
    title: "First Families",
    body: "Aparigraha Enterprises is registered and onboards its first twenty-five families — referred, every one, by people who wanted their own advisor to take them seriously.",
  },
  {
    year: "201X",
    title: "The Second Partner",
    body: "A research-minded partner joins to formalise the house view across asset classes. Quarterly reviews become a written document, not a voice memo.",
  },
  {
    year: "202X",
    title: "A Hundred Families",
    body: "The practice crosses a hundred client families. Dedicated advisory, research, and operations teams are established.",
  },
  {
    year: "202X",
    title: "Institutional Rigour",
    body: "Formal PMS/AIF mandates are added for qualifying clients. Estate and tax planning are brought in-house so the plan travels cleanly across specialists.",
  },
  {
    year: "Today",
    title: "Wealth, Refined.",
    body: "A small practice with a long memory — still partner-led, still referral-driven, still treating every rupee as if it were the last one.",
  },
];

export const extendedPillars: Pillar[] = [
  {
    numeral: "I",
    title: "Client First",
    body: "Every recommendation is judged against your goals — not against our distribution incentives. Conflicts are disclosed before they matter.",
  },
  {
    numeral: "II",
    title: "Transparency",
    body: "Commissions, costs, and trade-offs laid out in writing before you sign. You should always know what we earn and why.",
  },
  {
    numeral: "III",
    title: "Discipline",
    body: "We hold the long-term plan when markets are noisy. Quiet quarters are where wealth is compounded.",
  },
  {
    numeral: "IV",
    title: "Education",
    body: "We explain decisions in plain language so you remain the principal of your portfolio, not a passenger.",
  },
  {
    numeral: "V",
    title: "Long-Term Thinking",
    body: "We measure success in decades, not quarters — and structure portfolios accordingly.",
  },
  {
    numeral: "VI",
    title: "Confidentiality",
    body: "Your financial life stays between us. Discretion is the foundation of every relationship.",
  },
  {
    numeral: "VII",
    title: "Humility",
    body: "Markets humble everyone eventually. We prefer robust to clever, and we are honest when we are wrong.",
  },
  {
    numeral: "VIII",
    title: "Coordination",
    body: "Your CA, lawyer, and banker are part of the plan. We coordinate, not compete, so nothing falls between the stools.",
  },
  {
    numeral: "IX",
    title: "Patience",
    body: "We will not rush you, and we will not rush for you. The best financial decisions are usually the unhurried ones.",
  },
  {
    numeral: "X",
    title: "Stewardship",
    body: "Wealth outlives the people who earned it. We plan for that fact from the first conversation.",
  },
];

export type Affiliation = {
  label: string;
  note: string;
};

export const affiliations: Affiliation[] = [
  { label: "AMFI", note: "Association of Mutual Funds in India" },
  { label: "SEBI", note: "Securities and Exchange Board of India" },
  { label: "BSE StAR MF", note: "Stock Exchange platform" },
  { label: "NSE NMF II", note: "Stock Exchange platform" },
  { label: "MF Utility", note: "Consolidated investment platform" },
  { label: "CAMS", note: "Registrar and Transfer Agent" },
  { label: "KFin Technologies", note: "Registrar and Transfer Agent" },
  { label: "CERSAI", note: "Central KYC registry" },
];
