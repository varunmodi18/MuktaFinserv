import { z } from "zod";

// ---------------------------------------------------------------------------
// Consultation form — multi-step
// ---------------------------------------------------------------------------

export const profileOptions = [
  { value: "resident", label: "Resident Indian" },
  { value: "nri", label: "Non-Resident Indian" },
  { value: "business", label: "Business Owner / Founder" },
  { value: "professional", label: "Senior Professional" },
  { value: "other", label: "Other" },
] as const;

export const investableOptions = [
  { value: "under-1cr", label: "Under ₹1 Cr" },
  { value: "1-5cr", label: "₹1 Cr – ₹5 Cr" },
  { value: "5-25cr", label: "₹5 Cr – ₹25 Cr" },
  { value: "25cr-plus", label: "₹25 Cr +" },
  { value: "prefer-not", label: "Prefer not to say" },
] as const;

export const interestOptions = [
  { value: "mutual-funds", label: "Mutual Funds" },
  { value: "pms-aif", label: "PMS / AIF" },
  { value: "retirement", label: "Retirement Planning" },
  { value: "estate", label: "Estate & Succession" },
  { value: "tax", label: "Tax Planning" },
  { value: "nri", label: "NRI Advisory" },
  { value: "insurance", label: "Insurance Review" },
  { value: "second-opinion", label: "Second Opinion" },
] as const;

export const contactModeOptions = [
  { value: "phone", label: "Phone Call" },
  { value: "video", label: "Video Meeting" },
  { value: "in-person", label: "In-Person" },
  { value: "email", label: "Email First" },
] as const;

export const contactTimingOptions = [
  { value: "morning", label: "Morning (9 am – 12 pm)" },
  { value: "afternoon", label: "Afternoon (12 pm – 4 pm)" },
  { value: "evening", label: "Evening (4 pm – 7 pm)" },
  { value: "flexible", label: "Flexible" },
] as const;

export const consultationSchema = z.object({
  // Step 1 — About You
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(15)
    .regex(/^[+\d\s-]+$/, "Only digits, +, spaces, and hyphens"),

  // Step 2 — Your Situation
  profile: z.enum(
    profileOptions.map((o) => o.value) as [string, ...string[]],
  ),
  investable: z.enum(
    investableOptions.map((o) => o.value) as [string, ...string[]],
  ),

  // Step 3 — What You Need
  interests: z
    .array(
      z.enum(interestOptions.map((o) => o.value) as [string, ...string[]]),
    )
    .min(1, "Select at least one area"),

  // Step 4 — Preferred Contact
  contactMode: z.enum(
    contactModeOptions.map((o) => o.value) as [string, ...string[]],
  ),
  contactTiming: z.enum(
    contactTimingOptions.map((o) => o.value) as [string, ...string[]],
  ),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  consent: z.literal(true, {
    message: "Please confirm to proceed",
  }),
});

export type ConsultationData = z.infer<typeof consultationSchema>;

// Per-step field partitioning — used by the multi-step form to validate only
// the current step before advancing.
export const consultationSteps = [
  {
    title: "About You",
    blurb: "Just the basics so we can reach you.",
    fields: ["name", "email", "phone"] as const,
  },
  {
    title: "Your Situation",
    blurb: "A little context helps us prepare.",
    fields: ["profile", "investable"] as const,
  },
  {
    title: "What You Need",
    blurb: "Tell us where you'd value our view.",
    fields: ["interests"] as const,
  },
  {
    title: "How to Reach You",
    blurb: "When and how you'd like to speak.",
    fields: ["contactMode", "contactTiming", "notes", "consent"] as const,
  },
] as const;

// ---------------------------------------------------------------------------
// Newsletter
// ---------------------------------------------------------------------------

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email"),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
