// No interactivity — can stay a Server Component
import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export function TherapyCard() {
  return (
    <Link
      href="/crocus-diaries"
      className="watercolor-card group flex flex-col items-center gap-3 px-6 py-8 text-center"
    >
      <span className="grid h-14 w-14 place-items-center rounded-full bg-rose/30 text-mauve">
        <HeartHandshake className="h-6 w-6" strokeWidth={1.5} />
      </span>
      <span className="display text-2xl">Therapy</span>
      <span className="text-sm text-foreground/65">
        A confidential, empathetic space to explore and heal.
      </span>
      <span className="mt-2 text-xs tracking-[0.25em] uppercase text-mauve">Enter →</span>
    </Link>
  );
}
