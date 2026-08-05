"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Users } from "lucide-react";
import { sendEmail } from "@/lib/emailjs";

export function WorkshopsCard() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", details: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function update(field: keyof typeof values, value: string) {
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

  return (
    <div className="watercolor-card flex flex-col items-center gap-3 px-6 py-8 text-center">
      <Link href="/workshops" className="flex flex-col items-center gap-3">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-blush/60 text-mauve">
          <Users className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <h2 className="display text-2xl">Workshops</h2>
        <span className="text-sm text-foreground/65">For individuals, groups and organisations.</span>
      </Link>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="workshops-quick-enquiry"
        className="mt-2 inline-flex items-center gap-1 rounded-full text-xs tracking-[0.25em] uppercase text-mauve outline-none focus-visible:ring-2 focus-visible:ring-mauve/60"
      >
        Quick enquiry
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="workshops-quick-enquiry"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full overflow-hidden"
          >
            {done ? (
              <p className="mt-3 text-sm text-foreground/70">
                Thank you — your enquiry has been received. I&apos;ll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-3 space-y-2 text-left">
                <label className="sr-only" htmlFor="workshops-card-name">
                  Your name
                </label>
                <input
                  id="workshops-card-name"
                  required
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-mauve/60"
                  placeholder="Your name"
                />

                <label className="sr-only" htmlFor="workshops-card-email">
                  Email
                </label>
                <input
                  id="workshops-card-email"
                  required
                  type="email"
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-mauve/60"
                  placeholder="Email"
                />

                <label className="sr-only" htmlFor="workshops-card-details">
                  What would you like to explore?
                </label>
                <textarea
                  id="workshops-card-details"
                  rows={2}
                  value={values.details}
                  onChange={(e) => update("details", e.target.value)}
                  className="w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-mauve/60"
                  placeholder="What would you like to explore?"
                />

                {error && (
                  <p role="alert" className="text-sm text-rose-500">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-full bg-mauve px-4 py-2 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send enquiry"}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
