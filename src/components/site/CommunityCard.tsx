"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface CommunityCardProps {
  title: string;
  body: string;
}

export function CommunityCard({ title, body }: CommunityCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className="watercolor-card group w-full px-6 py-7 text-left"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="display text-xl text-foreground">{title}</h3>
        <ChevronDown
          className={`mt-1 h-4 w-4 text-mauve transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden text-sm leading-relaxed text-foreground/70"
          >
            {body}
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
}
