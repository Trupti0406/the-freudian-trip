"use client";

import { useEffect, useRef, useState } from "react";

export type StepperFieldType = "text" | "email" | "tel" | "number" | "textarea";

export interface StepperField {
  /** key used in the values object passed to onSubmit, and in your emailjs template params */
  name: string;
  /** the big question shown on screen */
  label: string;
  type: StepperFieldType;
  required?: boolean;
  placeholder?: string;
  /** small supporting line under the question */
  helperText?: string;
  rows?: number;
}

export interface StepperFormProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  fields: StepperField[];
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
  onSubmit: (values: Record<string, string>) => Promise<void> | void;
}

function validate(field: StepperField, raw: string) {
  const value = raw.trim();

  if (field.required && !value) {
    return "This one's required — mind filling it in?";
  }

  if (!value) return null;

  if (field.type === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
    return "That doesn't look like a valid email address.";
  }

  if (field.type === "tel" && value.replace(/\D/g, "").length < 7) {
    return "That doesn't look like a valid phone number.";
  }

  if (field.type === "number" && (Number.isNaN(Number(value)) || Number(value) <= 0)) {
    return "Please enter a valid number.";
  }

  return null;
}

export function StepperForm({
  eyebrow,
  title,
  description,
  fields,
  submitLabel = "Submit",
  successTitle = "Thank you",
  successMessage = "Your response has been received. I'll be in touch soon.",
  onSubmit,
}: StepperFormProps) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const total = fields.length;
  const field = fields[step];
  const isLast = step === total - 1;
  const progress = Math.round(((step + 1) / total) * 100);

  useEffect(() => {
    setError(null);
    inputRef.current?.focus();
  }, [step]);

  function update(name: string, val: string) {
    setValues((prev) => ({
      ...prev,
      [name]: val,
    }));
  }

  function goBack() {
    if (step === 0) return;

    setStep((s) => s - 1);
  }

  async function handleStepSubmit(e: React.FormEvent) {
    e.preventDefault();

    const currentValue = values[field.name] ?? "";
    const validationError = validate(field, currentValue);

    if (validationError) {
      setError(validationError);
      return;
    }

    if (!isLast) {
      setStep((s) => s + 1);
      return;
    }

    try {
      setSending(true);

      await onSubmit(values);

      setDone(true);
    } catch {
      setError("Something went wrong sending this — please try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="mt-16 text-center animate-in fade-in duration-500">
        <p className="script text-2xl text-mauve">{successTitle}</p>

        <p className="mt-4 text-foreground/75 leading-relaxed">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleStepSubmit} className="mt-12 space-y-10">
      {/* Stepper on top */}
      <div className="space-y-3">
        {/* <div className="flex items-center justify-between text-sm text-foreground/60">
          <span>Step {step + 1}</span>

          <span>
            {step + 1} / {total}
          </span>
        </div> */}

        <div className="h-[3px] w-full overflow-hidden rounded-full bg-border/30">
          <div
            className="h-full rounded-full bg-mauve transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {(eyebrow || title || description) && (
        <div>
          {eyebrow && <p className="script text-2xl text-mauve">{eyebrow}</p>}

          {title && <h2 className="mt-1 display text-3xl">{title}</h2>}

          {description && (
            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{description}</p>
          )}
        </div>
      )}

      {/* Current question */}
      <div key={field.name} className="animate-in fade-in slide-in-from-right-3 duration-300">
        <label className="block">
          <span className="text-xl sm:text-2xl leading-snug text-foreground">
            {field.label}

            {field.required && <span className="ml-1 text-mauve">*</span>}
          </span>

          {field.helperText && (
            <span className="mt-2 block text-sm text-foreground/50">{field.helperText}</span>
          )}

          {field.type === "textarea" ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              rows={field.rows ?? 4}
              value={values[field.name] ?? ""}
              onChange={(e) => update(field.name, e.target.value)}
              placeholder={field.placeholder}
              className="
                mt-6
                w-full
                border-0
                border-b
                border-border
                bg-transparent
                px-0
                py-3
                text-lg
                outline-none
                focus:border-mauve
                focus:ring-0
                resize-none
              "
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type={field.type}
              value={values[field.name] ?? ""}
              onChange={(e) => update(field.name, e.target.value)}
              placeholder={field.placeholder}
              className="
                mt-6
                w-full
                border-0
                border-b
                border-border
                bg-transparent
                px-0
                py-3
                text-lg
                outline-none
                focus:border-mauve
                focus:ring-0
              "
            />
          )}
        </label>

        {error && <p className="mt-3 text-sm text-rose-500">{error}</p>}
      </div>

      <div className="flex items-center justify-between pt-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="
              text-sm
              text-foreground/60
              transition
              hover:text-foreground
            "
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        <button
          type="submit"
          disabled={sending}
          className="
            rounded-full
            bg-mauve
            px-7
            py-3
            text-sm
            text-primary-foreground
            transition-transform
            hover:-translate-y-0.5
            disabled:opacity-60
          "
        >
          {isLast ? (sending ? "Sending..." : submitLabel) : "Next"}
        </button>
      </div>

      <p className="text-center text-xs text-foreground/40">
        Press <span className="font-medium">Enter ↵</span> to continue
      </p>
    </form>
  );
}
