"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function WorkshopEnquiryForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save form reference immediately
    const form = e.currentTarget;

    try {
      setSending(true);

      const formData = Object.fromEntries(new FormData(form));

      const response = await fetch("/api/workshop-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Thank you — I'll be in touch soon.");

      // Use stored form reference
      form.reset();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="watercolor-card flex h-full flex-col gap-4 px-7 py-8">
      <h3 className="display text-2xl text-mauve">Workshop enquiry</h3>

      <p className="text-sm text-foreground/65">
        Share a few details about your organisation or group.
      </p>

      <label className="mt-2 block text-xs tracking-wide text-foreground/60">
        Name
        <input
          required
          name="name"
          className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
        />
      </label>

      <label className="block text-xs tracking-wide text-foreground/60">
        Email
        <input
          required
          type="email"
          name="email"
          className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
        />
      </label>

      <label className="block text-xs tracking-wide text-foreground/60">
        Organisation / Institution
        <input
          name="organisation"
          className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
        />
      </label>

      <label className="block text-xs tracking-wide text-foreground/60">
        Additional details
        <textarea
          rows={4}
          name="details"
          placeholder="Tell me about your goals, audience, or any specific requirements..."
          className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="mt-3 rounded-full bg-mauve px-5 py-2.5 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {sending ? "Sending..." : "Submit enquiry"}
      </button>
    </form>
  );
}
