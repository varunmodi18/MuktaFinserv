"use client";

import { useState, useTransition } from "react";
import { useForm, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import {
  consultationSchema,
  consultationSteps,
  contactModeOptions,
  contactTimingOptions,
  interestOptions,
  investableOptions,
  profileOptions,
  type ConsultationData,
} from "@/lib/contact";
import { submitConsultation } from "@/app/contact/actions";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const totalSteps = consultationSteps.length;

export function ConsultationForm() {
  const [step, setStep] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<ConsultationData>({
    resolver: zodResolver(consultationSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      profile: undefined,
      investable: undefined,
      interests: [],
      contactMode: undefined,
      contactTiming: undefined,
      notes: "",
      consent: undefined as unknown as true,
    },
  });

  const { register, formState, trigger, handleSubmit, watch, setValue } = form;

  async function next() {
    const fields = consultationSteps[step]
      .fields as readonly FieldPath<ConsultationData>[];
    const valid = await trigger(fields as FieldPath<ConsultationData>[]);
    if (!valid) return;
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function onSubmit(data: ConsultationData) {
    setServerError(null);
    startTransition(async () => {
      const result = await submitConsultation(data);
      if (!result.ok) {
        setServerError(result.message ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    });
  }

  if (submitted) {
    return <ThankYou name={watch("name")} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-gold-500/20 bg-bg-primary p-8 md:p-12"
      noValidate
    >
      <StepIndicator current={step} />

      <div className="mt-12">
        <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
          {consultationSteps[step].title}
        </h2>
        <p className="mt-3 font-body text-ink-muted">
          {consultationSteps[step].blurb}
        </p>
      </div>

      <div className="mt-10 space-y-8">
        {step === 0 && (
          <>
            <TextField
              label="Full Name"
              error={formState.errors.name?.message}
              {...register("name")}
            />
            <TextField
              label="Email"
              type="email"
              error={formState.errors.email?.message}
              {...register("email")}
            />
            <TextField
              label="Phone"
              type="tel"
              placeholder="+91 98XXX XXXXX"
              error={formState.errors.phone?.message}
              {...register("phone")}
            />
          </>
        )}

        {step === 1 && (
          <>
            <RadioGroup
              label="Which best describes you?"
              name="profile"
              options={profileOptions}
              value={watch("profile")}
              onChange={(v) => setValue("profile", v, { shouldValidate: true })}
              error={formState.errors.profile?.message}
            />
            <RadioGroup
              label="Approximate investable assets"
              name="investable"
              options={investableOptions}
              value={watch("investable")}
              onChange={(v) =>
                setValue("investable", v, { shouldValidate: true })
              }
              error={formState.errors.investable?.message}
            />
          </>
        )}

        {step === 2 && (
          <CheckboxGroup
            label="Where would you value our view?"
            options={interestOptions}
            values={watch("interests") ?? []}
            onChange={(next) =>
              setValue("interests", next, { shouldValidate: true })
            }
            error={formState.errors.interests?.message as string | undefined}
          />
        )}

        {step === 3 && (
          <>
            <RadioGroup
              label="Preferred way to speak first"
              name="contactMode"
              options={contactModeOptions}
              value={watch("contactMode")}
              onChange={(v) =>
                setValue("contactMode", v, { shouldValidate: true })
              }
              error={formState.errors.contactMode?.message}
            />
            <RadioGroup
              label="Best time of day"
              name="contactTiming"
              options={contactTimingOptions}
              value={watch("contactTiming")}
              onChange={(v) =>
                setValue("contactTiming", v, { shouldValidate: true })
              }
              error={formState.errors.contactTiming?.message}
            />
            <TextArea
              label="Anything else we should know?"
              placeholder="A short note, if helpful — entirely optional."
              rows={4}
              {...register("notes")}
              error={formState.errors.notes?.message}
            />
            <Consent
              checked={watch("consent") === true}
              onChange={(c) =>
                setValue("consent", c as true, { shouldValidate: true })
              }
              error={formState.errors.consent?.message}
            />
          </>
        )}
      </div>

      {serverError ? (
        <p className="mt-8 border border-red-400/40 bg-red-500/5 px-4 py-3 font-body text-sm text-red-300">
          {serverError}
        </p>
      ) : null}

      <div className="mt-12 flex flex-col-reverse items-stretch justify-between gap-4 border-t border-gold-500/15 pt-8 md:flex-row md:items-center">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className={cn(
            "inline-flex items-center gap-2 font-caption text-[0.7rem] tracking-[0.22em] uppercase transition-colors",
            step === 0
              ? "cursor-not-allowed text-ink-muted/40"
              : "text-ink-muted hover:text-gold-100",
          )}
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          Back
        </button>

        {step < totalSteps - 1 ? (
          <Button type="button" variant="primary" size="md" onClick={next}>
            Continue
            <ChevronRight
              className="ml-1 h-4 w-4"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </Button>
        ) : (
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isPending}
          >
            {isPending ? "Sending…" : "Send Request"}
          </Button>
        )}
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Step indicator
// ---------------------------------------------------------------------------

function StepIndicator({ current }: { current: number }) {
  const numerals = ["I", "II", "III", "IV"];
  return (
    <ol
      aria-label="Form progress"
      className="flex items-center gap-3 md:gap-5"
    >
      {consultationSteps.map((s, i) => {
        const state =
          i < current ? "done" : i === current ? "current" : "upcoming";
        return (
          <li key={s.title} className="flex items-center gap-3 md:gap-5">
            <div className="flex items-center gap-3">
              <span
                aria-current={state === "current" ? "step" : undefined}
                className={cn(
                  "flex h-9 w-9 items-center justify-center border font-stat text-sm transition-colors",
                  state === "done" &&
                    "border-gold-500 bg-gold-500 text-bg-primary",
                  state === "current" &&
                    "border-gold-500 bg-gold-500/10 text-gold-300",
                  state === "upcoming" &&
                    "border-gold-500/30 text-ink-muted",
                )}
              >
                {state === "done" ? (
                  <Check className="h-4 w-4" strokeWidth={2} />
                ) : (
                  numerals[i]
                )}
              </span>
              <span
                className={cn(
                  "hidden font-caption text-[0.68rem] tracking-[0.18em] uppercase md:inline",
                  state === "upcoming" ? "text-ink-muted" : "text-gold-300",
                )}
              >
                {s.title}
              </span>
            </div>
            {i < consultationSteps.length - 1 ? (
              <span
                aria-hidden="true"
                className={cn(
                  "h-px w-6 md:w-12",
                  i < current ? "bg-gold-500" : "bg-gold-500/20",
                )}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

// ---------------------------------------------------------------------------
// Field primitives
// ---------------------------------------------------------------------------

type TextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const TextField = Object.assign(
  function TextFieldImpl(
    { label, error, id, className, ...rest }: TextProps,
    ref?: React.Ref<HTMLInputElement>,
  ) {
    const fieldId = id ?? `t-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <label
          htmlFor={fieldId}
          className="font-caption text-[0.7rem] tracking-[0.2em] uppercase text-gold-300"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={fieldId}
          className={cn(
            "border border-gold-500/30 bg-bg-secondary px-4 py-3 font-body text-base text-ink",
            "placeholder:text-ink-muted/50",
            "focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500",
            error && "border-red-400/60 focus:border-red-400 focus:ring-red-400",
          )}
          aria-invalid={error ? "true" : undefined}
          {...rest}
        />
        {error ? (
          <p className="font-body text-xs text-red-300">{error}</p>
        ) : null}
      </div>
    );
  },
  {},
);

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

function TextArea(
  { label, error, id, className, ...rest }: TextAreaProps,
) {
  const fieldId = id ?? `ta-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={fieldId}
        className="font-caption text-[0.7rem] tracking-[0.2em] uppercase text-gold-300"
      >
        {label}
      </label>
      <textarea
        id={fieldId}
        className={cn(
          "border border-gold-500/30 bg-bg-secondary px-4 py-3 font-body text-base text-ink",
          "placeholder:text-ink-muted/50",
          "focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500",
          error && "border-red-400/60",
        )}
        {...rest}
      />
      {error ? (
        <p className="font-body text-xs text-red-300">{error}</p>
      ) : null}
    </div>
  );
}

type RadioGroupProps<T extends string> = {
  label: string;
  name: string;
  options: readonly { value: T; label: string }[];
  value: T | undefined;
  onChange: (v: T) => void;
  error?: string;
};

function RadioGroup<T extends string>({
  label,
  name,
  options,
  value,
  onChange,
  error,
}: RadioGroupProps<T>) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-caption text-[0.7rem] tracking-[0.2em] uppercase text-gold-300">
        {label}
      </legend>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <label
              key={o.value}
              className={cn(
                "group flex cursor-pointer items-center gap-3 border px-4 py-3 font-body text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold-500 has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-bg-primary",
                active
                  ? "border-gold-500 bg-gold-500/10 text-gold-100"
                  : "border-gold-500/20 text-ink hover:border-gold-500/60 hover:text-gold-100",
              )}
            >
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={active}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-full border",
                  active ? "border-gold-500" : "border-gold-500/40",
                )}
              >
                {active ? (
                  <span className="h-2 w-2 rounded-full bg-gold-500" />
                ) : null}
              </span>
              {o.label}
            </label>
          );
        })}
      </div>
      {error ? (
        <p className="font-body text-xs text-red-300">{error}</p>
      ) : null}
    </fieldset>
  );
}

type CheckboxGroupProps<T extends string> = {
  label: string;
  options: readonly { value: T; label: string }[];
  values: T[];
  onChange: (next: T[]) => void;
  error?: string;
};

function CheckboxGroup<T extends string>({
  label,
  options,
  values,
  onChange,
  error,
}: CheckboxGroupProps<T>) {
  function toggle(v: T) {
    if (values.includes(v)) {
      onChange(values.filter((x) => x !== v));
    } else {
      onChange([...values, v]);
    }
  }
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-caption text-[0.7rem] tracking-[0.2em] uppercase text-gold-300">
        {label}
      </legend>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {options.map((o) => {
          const active = values.includes(o.value);
          return (
            <label
              key={o.value}
              className={cn(
                "flex cursor-pointer items-center gap-3 border px-4 py-3 font-body text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold-500 has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-bg-primary",
                active
                  ? "border-gold-500 bg-gold-500/10 text-gold-100"
                  : "border-gold-500/20 text-ink hover:border-gold-500/60 hover:text-gold-100",
              )}
            >
              <input
                type="checkbox"
                checked={active}
                onChange={() => toggle(o.value)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-4 w-4 items-center justify-center border",
                  active ? "border-gold-500 bg-gold-500" : "border-gold-500/40",
                )}
              >
                {active ? (
                  <Check
                    className="h-3 w-3 text-bg-primary"
                    strokeWidth={3}
                  />
                ) : null}
              </span>
              {o.label}
            </label>
          );
        })}
      </div>
      {error ? (
        <p className="font-body text-xs text-red-300">{error}</p>
      ) : null}
    </fieldset>
  );
}

function Consent({
  checked,
  onChange,
  error,
}: {
  checked: boolean;
  onChange: (c: boolean) => void;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex cursor-pointer items-start gap-3 font-body text-sm text-ink-muted has-[:focus-visible]:[&>span:first-of-type]:ring-2 has-[:focus-visible]:[&>span:first-of-type]:ring-gold-500 has-[:focus-visible]:[&>span:first-of-type]:ring-offset-2 has-[:focus-visible]:[&>span:first-of-type]:ring-offset-bg-primary">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <span
          aria-hidden="true"
          className={cn(
            "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border",
            checked ? "border-gold-500 bg-gold-500" : "border-gold-500/40",
          )}
        >
          {checked ? (
            <Check className="h-3 w-3 text-bg-primary" strokeWidth={3} />
          ) : null}
        </span>
        <span>
          I consent to being contacted by Aparigraha Enterprises about my enquiry,
          and have read the{" "}
          <a
            href="/legal/privacy"
            className="text-gold-300 underline underline-offset-4 hover:text-gold-100"
          >
            privacy policy
          </a>
          .
        </span>
      </label>
      {error ? (
        <p className="font-body text-xs text-red-300">{error}</p>
      ) : null}
    </div>
  );
}

function ThankYou({ name }: { name: string }) {
  return (
    <div className="border border-gold-500/30 bg-bg-primary p-10 md:p-16">
      <span className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
        Received
      </span>
      <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
        Thank you{name ? `, ${name.split(" ")[0]}` : ""}.
      </h2>
      <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-muted">
        A partner will read your note personally and reach out within one
        business day. If you&rsquo;d prefer to reach us sooner, the direct
        line is in the panel alongside.
      </p>
      <div className="mt-8 h-px w-16 bg-gold-500" />
      <p className="mt-8 font-body text-sm text-ink-muted">
        — The team at Aparigraha Enterprises
      </p>
    </div>
  );
}
