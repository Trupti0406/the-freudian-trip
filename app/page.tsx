// app/page.tsx  — Server Component (no "use client")
import type { Metadata } from "next";
import Link from "next/link";
import { Play } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { AssessmentCard } from "@/components/site/AssessmentCard";
import { WorkshopsCard } from "@/components/site/WorkshopsCard";
import { TherapyCard } from "@/components/site/TherapyCard";

export const metadata: Metadata = {
  title: "The Freudian Trip — Welcome",
  description:
    "Welcome to The Freudian Trip — a soft, safe and inclusive space for therapy, assessment and workshops.",
  openGraph: {
    title: "Welcome to The Freudian Trip",
    description: "A gentle journey toward healing, self-understanding and growth.",
  },
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ApproachSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pt-10 pb-24 sm:pt-2">
      <div className="relative mx-auto max-w-4xl">
        {/* ── Stacked hero: title floats above the couch image ── */}
        <div className="relative flex flex-col items-center">
          {/* Couch image — pulls up so its arms peek behind the title */}
          <Reveal delay={0.2}>
            <div className="relative -mt-4 w-full max-w-2xl select-none">
              <img
                src="/assets/couch.png"
                alt="A watercolour therapy couch with a crocus flower resting beside it"
                width={1359}
                height={814}
                className="w-full object-contain drop-shadow-sm"
              />
              <p className="mt-1 text-center text-md font-bold tracking-[0.28em] uppercase text-foreground/35">
                ❀ By Prof. Rutuja
              </p>
            </div>
          </Reveal>
        </div>

        {/* Quote */}
        <Reveal delay={0.32}>
          <div className="mt-8 text-center">
            <p className="mx-auto max-w-4xl display text-xl text-foreground/75 sm:text-2xl">
              "People are just as wonderful as sunsets if I can let them be. When I look at a
              sunset, I don't find myself saying, "Soften the orange a little on the right hand
              corner, and put a bit more purple along the base, and use a little more pink in the
              cloud color." I don't do that. I don't try to control a sunset. I watch it with awe as
              it unfolds."
            </p>
            <p className="mt-2 text-xs tracking-[0.3em] uppercase text-foreground/50">
              — Carl Rogers
            </p>
          </div>
        </Reveal>

        {/* Three path cards */}
        <Reveal delay={0.42}>
          <ThreePathsSection />
        </Reveal>
      </div>
    </section>
  );
}

function ThreePathsSection() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-3">
      <TherapyCard />
      <AssessmentCard />
      <WorkshopsCard />
    </div>
  );
}

function ApproachSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="script text-2xl text-mauve">A note from me</p>
          <h2 className="mt-2 display text-4xl sm:text-5xl">My Therapeutic Approach</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl border border-lavender/40 bg-gradient-to-br from-blush/40 via-cream to-lavender/40 shadow-[var(--shadow-petal)]">
            <div className="absolute inset-0 grid place-items-center">
              <button
                aria-label="Play video"
                className="group grid h-20 w-20 place-items-center rounded-full bg-cream/80 text-mauve backdrop-blur transition-transform hover:scale-110"
              >
                <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
              </button>
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 script text-lg text-mauve/80">
              a short introduction · coming soon
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-mauve px-7 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Learn More About Me
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
