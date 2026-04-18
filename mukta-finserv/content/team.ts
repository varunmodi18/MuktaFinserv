export type TeamMember = {
  slug: string;
  name: string;
  designation: string;
  bio: string;
  photo?: string;
  linkedin?: string;
  spotlight?: boolean;
};

/**
 * Placeholder team — replace with actual founder + members from §7 of plan.
 * `spotlight: true` surfaces the member on the home page (limit 2-4).
 */
export const team: TeamMember[] = [
  {
    slug: "founder",
    name: "[ Founder Name ]",
    designation: "Founder & Managing Partner",
    bio: "Two decades of advising HNI families across mutual funds, structured products, and succession planning. CFA charterholder.",
    linkedin: "https://www.linkedin.com/in/founder-placeholder",
    spotlight: true,
  },
  {
    slug: "second-partner",
    name: "[ Partner Name ]",
    designation: "Partner — Investment Research",
    bio: "Builds the firm's house view across asset classes and leads quarterly portfolio reviews for institutional clients.",
    linkedin: "https://www.linkedin.com/in/partner-placeholder",
    spotlight: true,
  },
  {
    slug: "head-advisory",
    name: "[ Head of Advisory Name ]",
    designation: "Head of Client Advisory",
    bio: "Owns the client relationship lifecycle, from onboarding due-diligence to annual financial-plan reviews.",
    linkedin: "https://www.linkedin.com/in/advisory-placeholder",
    spotlight: true,
  },
];
