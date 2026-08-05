"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ClipboardList } from "lucide-react";

export function AssessmentCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="watercolor-card flex flex-col items-center gap-3 px-6 py-8 text-center">
      <Link href="/assessment" className="flex flex-col items-center gap-3">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-lavender/40 text-mauve">
          <ClipboardList className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <h2 className="display text-2xl">Assessment</h2>
        <span className="text-sm text-foreground/65">
          Reflective tools to better understand yourself.
        </span>
      </Link>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="assessment-options"
        className="mt-2 inline-flex items-center gap-1 rounded-full text-xs tracking-[0.25em] uppercase text-mauve outline-none focus-visible:ring-2 focus-visible:ring-mauve/60"
      >
        {open ? "Hide options" : "View options"}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id="assessment-options"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-2 w-full space-y-1.5 overflow-hidden text-left text-sm text-foreground/75"
          >
            {[
              "Initial intake",
              "Personality reflection",
              "Mood & wellbeing",
              "Trauma screening",
            ].map((i) => (
              <li key={i} className="rounded-xl bg-cream/70 px-3 py-2">
                {i}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
