import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Flower2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me — The Freudian Trip",
  description:
    "Trauma-informed, queer-affirmative, decolonised therapist — meet the person behind The Freudian Trip.",
  openGraph: {
    title: "About Me — The Freudian Trip",
    description: "A multicultural, inclusive educator and therapist.",
  },
};

const petals = [
  { t: "Trauma-Informed", angle: -90 },
  { t: "Queer Affirmative", angle: -30 },
  { t: "Inclusive Educator", angle: 30 },
  { t: "Decolonised Therapist", angle: 90 },
  { t: "Multicultural Approach", angle: 150 },
];

export default function AboutPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h1>Kuch daal denge yaha parr</h1>
        {/* <Reveal>
          <p className="text-center script text-2xl text-mauve">a little about me</p>
          <h1 className="mt-2 text-center display text-6xl">About Me</h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-20 h-[28rem] w-[28rem] max-w-full sm:h-[32rem] sm:w-[32rem]">
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-cream bg-gradient-to-br from-blush via-lavender to-rose shadow-[var(--shadow-petal)] sm:h-52 sm:w-52">
              <div className="grid h-full w-full place-items-center text-mauve">
                <Flower2 className="h-16 w-16" strokeWidth={1.2} />
              </div>
            </div>

            {petals.map((p) => {
              const radius = 200;
              const rad = (p.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <div
                  key={p.t}
                  className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream/85 px-3 text-center text-xs text-mauve shadow-[var(--shadow-soft)] backdrop-blur transition-transform hover:scale-110 sm:h-32 sm:w-32 sm:text-sm"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <span className="display leading-tight">{p.t}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-20 max-w-3xl">
            <h2 className="text-center display text-4xl">What Makes Me, Me Professionally?</h2>
            <Accordion type="single" collapsible className="mt-8 space-y-3">
              {[
                { t: "Academic qualifications", d: "Placeholder for your degrees, universities and dates. Easy to update later." },
                { t: "Professional experience", d: "Placeholder for clinics, organisations and years of practice." },
                { t: "Training & certifications", d: "Placeholder for specialised trainings — trauma, queer-affirmative, somatic, etc." },
                { t: "Therapeutic philosophy", d: "Placeholder for your personal manifesto — the values that quietly hold the work." },
              ].map((i, idx) => (
                <AccordionItem key={i.t} value={`a-${idx}`} className="watercolor-card border-0 px-6">
                  <AccordionTrigger className="display text-lg hover:no-underline">{i.t}</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed">{i.d}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
