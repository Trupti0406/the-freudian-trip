"use client";

import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export function EnquiryClient() {
  const [sending, setSending] = useState(false);
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="script text-2xl text-mauve">say hello</p>
          <h1 className="mt-2 display text-5xl sm:text-6xl">Enquiry Form</h1>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Reaching out is its own quiet act of courage. Share as much or as little as you'd like — I read every message myself and reply within a few days.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                toast.success("Thank you for reaching out. I'll be in touch soon.");
                (e.target as HTMLFormElement).reset();
              }, 700);
            }}
            className="watercolor-card mt-10 grid gap-4 px-7 py-8"
          >
            <label className="block text-xs tracking-wide text-foreground/60">
              Name
              <input required name="name" className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-4 py-2.5 text-sm" />
            </label>
            <label className="block text-xs tracking-wide text-foreground/60">
              Email
              <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-4 py-2.5 text-sm" />
            </label>
            <label className="block text-xs tracking-wide text-foreground/60">
              Phone Number
              <input name="phone" type="tel" className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-4 py-2.5 text-sm" />
            </label>
            <label className="block text-xs tracking-wide text-foreground/60">
              Message
              <textarea required rows={5} name="message" className="mt-1 w-full rounded-xl border border-border bg-cream/70 px-4 py-2.5 text-sm" />
            </label>
            <button disabled={sending} className="mt-2 rounded-full bg-mauve px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60">
              {sending ? "Sending…" : "Send message"}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <img src="/assets/floral-spray.png" alt="Watercolor flowers" loading="lazy" width={1024} height={1024} className="mx-auto w-full max-w-md drop-shadow-[0_30px_40px_rgba(190,150,200,0.25)]" />
        </Reveal>
      </div>
    </section>
  );
}
