import type { ServiceDetail } from "@/lib/services";

const detail: ServiceDetail = {
  slug: "nri-services",
  label: "NRI Services",
  eyebrow: "Cross-Border",
  heroIntro:
    "Investing across two tax jurisdictions is an administrative burden by default. We convert it into a single point of contact — compliant on the India side, transparent on the home-country side, and coordinated with your overseas advisors.",
  whatWeOffer: [
    "NRE, NRO, and FCNR account structuring with empanelled banks",
    "PIS route and RBI-compliant investing in mutual funds and Indian equities",
    "FATCA and CRS documentation support, including W-8BEN where applicable",
    "Repatriation of dividends, redemptions, and sale proceeds within FEMA limits",
    "DTAA optimisation between India and your country of residence",
    "Estate and succession coordination across jurisdictions",
  ],
  personas: [
    {
      title: "The First-Time NRI",
      description:
        "Just moved overseas and unsure what to do with existing Indian investments. We tidy up account types, re-file KYC, and rebuild the portfolio under the new residency status.",
    },
    {
      title: "The Returning Resident",
      description:
        "Moving back to India. We convert accounts, rationalise holdings, and re-plan for residency status with a view to the new tax regime.",
    },
    {
      title: "The Long-Term NRI",
      description:
        "Well-established overseas, but India-side investments are scattered. We consolidate and simplify.",
    },
  ],
  process: [
    {
      numeral: "I",
      title: "Residency & Account Audit",
      body: "We confirm your FEMA residency status, tax residency, and align bank and investment accounts accordingly.",
    },
    {
      numeral: "II",
      title: "Compliant Portfolio Build",
      body: "KYC, FATCA/CRS, PAN linkage, and fund selection — executed only through NRI-eligible products.",
    },
    {
      numeral: "III",
      title: "Cross-Border Reporting",
      body: "Annual tax statements, capital-gains summaries, and foreign-tax-credit documentation, ready for your overseas CPA/CA.",
    },
  ],
  faqs: [
    {
      q: "Can NRIs invest in Indian mutual funds?",
      a: "Yes — most fund houses accept NRI investments, though a handful restrict applications from US and Canada residents due to FATCA compliance burden. We know which houses do and do not, and plan around it.",
    },
    {
      q: "What is the TDS on mutual fund redemptions for NRIs?",
      a: "TDS on capital gains applies at differentiated rates (short-term vs long-term, equity vs debt). We compute the applicable TDS in advance so redemptions are not met with unwelcome surprises, and help claim refunds where applicable.",
    },
    {
      q: "How does DTAA help me avoid double taxation?",
      a: "India has Double Taxation Avoidance Agreements with most major countries. Depending on the treaty, tax paid in India can be credited against your home-country liability. We ensure the TRC (Tax Residency Certificate) and Form 10F are in place so the treaty benefit is actually claimed.",
    },
    {
      q: "Can I repatriate my Indian investments?",
      a: "From NRE and FCNR accounts, yes — fully and freely. From NRO, up to USD 1 million per financial year subject to documentation. We handle the paperwork end-to-end.",
    },
  ],
};

export default detail;
