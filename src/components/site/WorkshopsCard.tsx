"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Users } from "lucide-react";

export function WorkshopsCard() {
  const [open, setOpen] = useState(false);

  return (
    <Link
      href="/workshops"
      className="watercolor-card flex flex-col items-center gap-3 px-6 py-8 text-center"
      onClick={(e) => open && e.preventDefault()}
    >
      <span className="grid h-14 w-14 place-items-center rounded-full bg-blush/60 text-mauve">
        <Users className="h-6 w-6" strokeWidth={1.5} />
      </span>
      <span className="display text-2xl">Workshops</span>
      <span className="text-sm text-foreground/65">For individuals, groups and organisations.</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
        className="mt-2 inline-flex items-center gap-1 text-xs tracking-[0.25em] uppercase text-mauve"
      >
        Quick enquiry
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-3 w-full space-y-2 overflow-hidden"
          >
            <input
              className="w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm"
              placeholder="Your name"
            />
            <input
              className="w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm"
              placeholder="Email"
              type="email"
            />
            <textarea
              rows={2}
              className="w-full rounded-xl border border-border bg-cream/70 px-3 py-2 text-sm"
              placeholder="What would you like to explore?"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full rounded-full bg-mauve px-4 py-2 text-sm text-primary-foreground"
            >
              Send enquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
