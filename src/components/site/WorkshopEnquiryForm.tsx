"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/emailjs";

export default function WorkshopEnquiryForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    organisation: "",
    details: "",
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function update(field: string, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!values.name.trim() || !values.email.trim()) {
      setError("Name and email are required.");
      return;
    }

    try {
      setSending(true);
      await sendEmail(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_WORKSHOP!, values);
      setDone(true);
    } catch {
      setError("Something went wrong sending this — please try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="watercolor-card flex h-full flex-col items-center justify-center gap-3 px-7 py-8 text-center">
        <h3 className="display text-2xl text-mauve">Thank you</h3>
        <p className="text-sm text-foreground/70">
          Your enquiry has been received. I&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="watercolor-card flex h-full flex-col gap-4 px-7 py-8">
      <h3 className="display text-2xl text-mauve">Workshop enquiry</h3>
      <p className="text-sm text-foreground/65">
        Share a few details about your organisation or group.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="mt-2 block text-xs tracking-wide text-foreground/60">
          Name
          <input
            required
            name="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
          />
        </label>

        <label className="block text-xs tracking-wide text-foreground/60">
          Email
          <input
            required
            type="email"
            name="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
          />
        </label>

        <label className="block text-xs tracking-wide text-foreground/60">
          Organisation / Institution
          <input
            name="organisation"
            value={values.organisation}
            onChange={(e) => update("organisation", e.target.value)}
            className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
          />
        </label>

        <label className="block text-xs tracking-wide text-foreground/60">
          Additional details
          <textarea
            rows={4}
            name="details"
            value={values.details}
            onChange={(e) => update("details", e.target.value)}
            placeholder="Tell me about your goals, audience, or any specific requirements..."
            className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
          />
        </label>

        {error && <p className="text-sm text-rose-500">{error}</p>}

        <button
          type="submit"
          disabled={sending}
          className="mt-3 rounded-full bg-mauve px-5 py-2.5 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {sending ? "Sending..." : "Submit enquiry"}
        </button>
      </form>
    </div>
  );
}
