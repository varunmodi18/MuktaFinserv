import type { ServiceDetail } from "@/lib/services";

const detail: ServiceDetail = {
  slug: "estate-planning",
  label: "Estate & Will Planning",
  eyebrow: "Legacy",
  heroIntro:
    "Wealth is only transferred cleanly if the paperwork is clean. We coordinate with lawyers and chartered accountants to see that assets reach intended hands, with minimal disputes and minimal delay.",
  whatWeOffer: [
    "Will drafting and periodic review, coordinated with your legal counsel",
    "Succession planning for HUFs, family offices, and closely-held businesses",
    "Nominee and joint-holding audits across every financial asset",
    "Private trust structures where confidentiality or control requirements call for them",
    "Documentation review for probate readiness",
    "Family communication support — because a clean will still needs a clear conversation",
  ],
  personas: [
    {
      title: "The First-Will Client",
      description:
        "No will in place, and rising conviction that one is overdue. We walk you through it without jargon and see it notarised.",
    },
    {
      title: "The Blended Family",
      description:
        "Remarriage, stepchildren, children from prior relationships. We help structure bequests that honour intent and minimise dispute.",
    },
    {
      title: "The Business Owner",
      description:
        "Shareholding needs to transition without tearing the business apart. We coordinate with corporate and succession lawyers.",
    },
    {
      title: "The NRI",
      description:
        "Assets across geographies need jurisdiction-appropriate instruments. We ensure India-side planning dovetails with overseas wills.",
    },
  ],
  process: [
    {
      numeral: "I",
      title: "Asset & Intent Map",
      body: "What you own, what you owe, and who you want it to go to — written down before anything else.",
    },
    {
      numeral: "II",
      title: "Instrument Selection",
      body: "A will may be enough; sometimes a trust is warranted. We recommend the lightest instrument that meets intent.",
    },
    {
      numeral: "III",
      title: "Execution & Storage",
      body: "Signing, witnessing, registration where required, and safe storage with clear retrieval instructions for your executor.",
    },
  ],
  faqs: [
    {
      q: "Do I really need a will? Nominations and joint-holdings cover a lot.",
      a: "Nominations make nominees custodians, not owners. Ownership follows the will, or in its absence, intestate succession law. A will ensures the two are aligned, and is indispensable for real estate, collectibles, and business interests.",
    },
    {
      q: "Who prepares the will — you or a lawyer?",
      a: "A lawyer drafts the instrument. Our role is to map assets, coordinate with the lawyer so nothing is missed, and flag when periodic updates become necessary.",
    },
    {
      q: "How often should a will be revised?",
      a: "After any material change — marriage, childbirth, property purchase or sale, business restructuring, or significant change in net worth. At minimum, a five-yearly read-through.",
    },
    {
      q: "What is a private trust and when is it appropriate?",
      a: "A trust separates ownership from control. It is useful for confidentiality, for minor or special-needs beneficiaries, for business-succession ring-fencing, and where a will alone would leave assets vulnerable to protracted probate.",
    },
  ],
};

export default detail;
