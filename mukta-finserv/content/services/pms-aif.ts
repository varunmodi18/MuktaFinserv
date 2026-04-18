import type { ServiceDetail } from "@/lib/services";

const detail: ServiceDetail = {
  slug: "pms-aif",
  label: "PMS & AIF",
  eyebrow: "Sophisticated Mandates",
  heroIntro:
    "For investors with the ticket size and the appetite, Portfolio Management Services and Alternative Investment Funds open doors mutual funds cannot. We help you tell when the structure justifies the complexity — and when it does not.",
  whatWeOffer: [
    "Access to vetted SEBI-registered PMS strategies across styles and managers",
    "Category II and III AIF opportunities in private credit, real estate, and long-short equity",
    "Independent due-diligence memos on every manager we recommend",
    "Performance and attribution tracking across PMS, AIF, and MF holdings in one view",
    "Ongoing monitoring of mandate drift, fee changes, and regulatory updates",
  ],
  personas: [
    {
      title: "The ₹50L+ Investor",
      description:
        "Meeting the PMS minimum for the first time and uncertain whether to step up. We help you stress-test whether the incremental fees earn their keep.",
    },
    {
      title: "The AIF-Ready HNI",
      description:
        "Liquid core is in place; you are exploring private credit or long-short strategies as a satellite. We filter, diligence, and monitor.",
    },
    {
      title: "The Multi-Manager Investor",
      description:
        "Already invested across four or five PMS strategies. We provide consolidated reporting and an unvarnished view on overlap and under-performance.",
    },
  ],
  process: [
    {
      numeral: "I",
      title: "Mandate Fit",
      body: "We test whether PMS/AIF is genuinely needed, or whether MF achieves the same objective with less cost and more liquidity.",
    },
    {
      numeral: "II",
      title: "Manager Diligence",
      body: "Team stability, process repeatability, compliance record, and honest down-cycle behaviour — all examined before a cheque is written.",
    },
    {
      numeral: "III",
      title: "Ongoing Monitoring",
      body: "Monthly factsheets are read, quarterly calls are attended, and concerns are raised with you before they become problems.",
    },
  ],
  faqs: [
    {
      q: "When does PMS make sense over mutual funds?",
      a: "When a manager's strategy genuinely cannot be replicated in MF form — typically concentrated equity, thematic satellites, or tax-optimised custom portfolios. For a diversified equity allocation, MF usually wins on cost, liquidity, and tax efficiency.",
    },
    {
      q: "What are the typical fee structures?",
      a: "PMS usually charges a fixed management fee (1.5–2.5%) plus, for some, a performance fee above a hurdle. AIFs layer a management fee, a performance fee, and sometimes a setup load. We present the all-in expense ratio in writing before you commit.",
    },
    {
      q: "How is my money safeguarded?",
      a: "In PMS, assets sit in your own demat account in your name, with the manager holding only trading authority. AIFs are pooled vehicles with SEBI-registered trustees and a regulated custodian.",
    },
    {
      q: "What is the minimum ticket size?",
      a: "PMS minimum is ₹50 lakh as per SEBI. AIFs typically require ₹1 crore minimum investment. We only recommend these when the ticket is a reasonable share of portfolio, not a stretch.",
    },
  ],
};

export default detail;
