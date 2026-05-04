export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  location: string;
};

/**
 * Placeholder testimonials — replace with real client quotes (with explicit
 * written consent) per §7 content checklist.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "What sets Aparigraha apart isn't a single fund recommendation — it's the discipline of returning every quarter with the same rigour. They have made our financial life quieter, and that is worth more than any one return number.",
    name: "Anonymised Client",
    designation: "Founder, Mid-cap manufacturing firm",
    location: "Mumbai",
  },
  {
    quote:
      "We came in for mutual fund advice and stayed for the estate planning conversation. Their team coordinated with our chartered accountants and lawyers without us having to repeat ourselves once. Rare professionalism.",
    name: "Anonymised Client",
    designation: "Practicing surgeon",
    location: "Pune",
  },
  {
    quote:
      "As an NRI, the most valuable thing has been a single point of contact for FEMA, repatriation, and India-side investments. The reporting is clear, the response time is honest, and there is no upselling.",
    name: "Anonymised Client",
    designation: "Software executive",
    location: "Singapore / Bengaluru",
  },
];
