"use client";

import { Reveal } from "@/components/site/Reveal";
import { Sparkles, Building2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function WorkshopsPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* <Reveal>
          <p className="text-center script text-2xl text-mauve">gather, learn, soften</p>
          <h1 className="mt-2 text-center display text-6xl">Workshops</h1>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <article className="watercolor-card flex h-full flex-col px-7 py-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-blush/60 text-mauve">
                  <Sparkles className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h2 className="mt-4 display text-2xl">For Individuals</h2>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  Workshops designed for personal growth and emotional wellbeing — small groups, gentle pacing, plenty of room to feel.
                </p>
                <button className="mt-auto self-start pt-6 text-xs tracking-[0.25em] uppercase text-mauve">Explore →</button>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="watercolor-card flex h-full flex-col px-7 py-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-lavender/50 text-mauve">
                  <Building2 className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h2 className="mt-4 display text-2xl">For Groups & Organisations</h2>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  Customized workshops for teams, institutions and communities on inclusion, wellbeing and reflective practice.
                </p>
                <button className="mt-auto self-start pt-6 text-xs tracking-[0.25em] uppercase text-mauve">Make an Enquiry →</button>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <EnquiryForm />
          </Reveal>
        </div> */}
      </div>
    </section>
  );
}

function EnquiryForm() {
  const [sending, setSending] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
          setSending(false);
          toast.success("Thank you — I'll be in touch soon.");
          (e.target as HTMLFormElement).reset();
        }, 600);
      }}
      className="watercolor-card flex h-full flex-col gap-3 px-7 py-8"
    >
      <h3 className="display text-2xl text-mauve">Quick enquiry</h3>
      <p className="text-sm text-foreground/65">
        Tell me a little about what you'd like to explore.
      </p>
      <label className="mt-2 block text-xs tracking-wide text-foreground/60">
        Name
        <input
          required
          name="name"
          className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm"
        />
      </label>
      <label className="block text-xs tracking-wide text-foreground/60">
        Email
        <input
          required
          type="email"
          name="email"
          className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm"
        />
      </label>
      <label className="block text-xs tracking-wide text-foreground/60">
        Organisation
        <input
          name="org"
          className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm"
        />
      </label>
      <label className="block text-xs tracking-wide text-foreground/60">
        Requirement
        <textarea
          required
          rows={4}
          name="req"
          className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm"
        />
      </label>
      <button
        disabled={sending}
        className="mt-2 rounded-full bg-mauve px-5 py-2.5 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {sending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
