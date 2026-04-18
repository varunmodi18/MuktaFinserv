"use server";

import {
  consultationSchema,
  newsletterSchema,
  type ConsultationData,
  type NewsletterData,
} from "@/lib/contact";

export type ActionResult<T = unknown> =
  | { ok: true; data?: T }
  | { ok: false; fieldErrors?: Record<string, string[]>; message?: string };

/**
 * Consultation submission.
 *
 * For the initial launch this validates on the server and returns success —
 * the production build will wire in a transactional email provider
 * (Resend or Postmark) and persist to a datastore. That wiring is a single
 * point of change: the validated `data` below is the record to dispatch.
 */
export async function submitConsultation(
  raw: unknown,
): Promise<ActionResult<ConsultationData>> {
  const parsed = consultationSchema.safeParse(raw);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return {
      ok: false,
      fieldErrors: flat.fieldErrors as Record<string, string[]>,
      message: "Please review the highlighted fields.",
    };
  }

  // TODO: dispatch to email + persistence layer
  // console.log on the server is fine for now; do not log PII in production.
  if (process.env.NODE_ENV !== "production") {
    console.info(
      "[contact] consultation request received",
      parsed.data.email,
    );
  }

  return { ok: true, data: parsed.data };
}

export async function submitNewsletter(
  raw: unknown,
): Promise<ActionResult<NewsletterData>> {
  const parsed = newsletterSchema.safeParse(raw);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return {
      ok: false,
      fieldErrors: flat.fieldErrors as Record<string, string[]>,
      message: "Enter a valid email to subscribe.",
    };
  }
  if (process.env.NODE_ENV !== "production") {
    console.info("[newsletter] signup", parsed.data.email);
  }
  return { ok: true, data: parsed.data };
}
