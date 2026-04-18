import type { ServiceDetail } from "@/lib/services";

const detail: ServiceDetail = {
  slug: "insurance",
  label: "Insurance",
  eyebrow: "Protection",
  heroIntro:
    "Insurance is a hedge, not an investment. We size cover to your real liabilities and dependants, and we keep the products plain — term, health, and targeted asset cover.",
  whatWeOffer: [
    "Term life cover sized to income, loans, and dependant horizon",
    "Health insurance with rigorous room-rent, co-pay, and claim-ratio scrutiny",
    "Critical illness and personal accident cover where appropriate",
    "Home, office, and motor cover procured without the dealer markup",
    "Claim-time advocacy — we stand between you and the insurer",
    "Periodic review as life stages, liabilities, and dependants change",
  ],
  personas: [
    {
      title: "The New Earner",
      description:
        "Starting income, no savings buffer. Term + health cover is the foundation — everything else waits.",
    },
    {
      title: "The Home-Loan Holder",
      description:
        "Large outstanding EMI. We right-size term cover so the family home is never at risk from a single event.",
    },
    {
      title: "The Parent",
      description:
        "New dependant, new horizon. Cover is sized to the child's full education timeline, not a round-number figure.",
    },
    {
      title: "The Business Proprietor",
      description:
        "Personal and business liabilities intertwine. We coordinate keyman, office, and personal cover as one portfolio.",
    },
  ],
  process: [
    {
      numeral: "I",
      title: "Liability Mapping",
      body: "We tally loans, dependants, and lifestyle obligations to a defensible cover figure.",
    },
    {
      numeral: "II",
      title: "Product Selection",
      body: "Plain-vanilla products from insurers with strong claim ratios — no ULIPs, no money-back dressed up.",
    },
    {
      numeral: "III",
      title: "Placement & Claims Support",
      body: "We handle medical underwriting, negotiate sub-limits, and stay on claims if something goes wrong.",
    },
  ],
  faqs: [
    {
      q: "Why do you insist on term insurance over ULIPs or endowments?",
      a: "Term cover gives you the highest sum assured per rupee of premium. Investment wrappers inside insurance products dilute both the protection and the return. We separate protection (term) from wealth creation (mutual funds) so each does its job well.",
    },
    {
      q: "What sum assured should I target?",
      a: "A defensible baseline is 10–15× annual income plus all outstanding liabilities plus the present value of major future goals (education, retirement). We compute this explicitly and revisit it every year.",
    },
    {
      q: "My employer provides health insurance — do I still need a personal policy?",
      a: "Yes. Employer cover ends with employment, and sub-limits are often inadequate for private hospitals. A personal base policy is the belt; employer cover is the suspenders.",
    },
    {
      q: "Will you handle claims if something happens?",
      a: "Yes. Claims support is part of the relationship, not an extra service. We have in-house experience across most major insurers' claim desks.",
    },
  ],
};

export default detail;
