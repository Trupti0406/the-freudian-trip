import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Assessment — The Freudian Trip",
  description:
    "Reflective assessment tools to better understand yourself, your emotions, and your patterns.",
  openGraph: {
    title: "Assessment — The Freudian Trip",
    description: "Gentle, reflective assessment to support your therapeutic journey.",
  },
};

const items = [
  {
    t: "Initial intake assessment",
    d: "A first conversation to understand your story, concerns and what you're hoping to explore.",
  },
  {
    t: "Personality reflection",
    d: "Frameworks that offer language for your patterns, strengths and growth edges.",
  },
  {
    t: "Mood & wellbeing check-in",
    d: "Periodic reflection to notice how you're moving through life — beyond just symptoms.",
  },
  {
    t: "Trauma-informed screening",
    d: "A safe, paced process to gently identify the impact of past experiences.",
  },
  {
    t: "Neurodivergence-affirming exploration",
    d: "Strengths-based reflection on sensory, cognitive and relational patterns.",
  },
];

export default function AssessmentPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        {/* <Reveal>
          <p className="text-center script text-2xl text-mauve">tools for reflection</p>
          <h1 className="mt-2 text-center display text-6xl">Assessment</h1>
          <p className="mt-6 text-center text-foreground/75 leading-relaxed">
            Assessment isn't about labels — it's a gentle invitation to understand yourself with more clarity. Choose any path below; each opens a small conversation with me.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {items.map((item, i) => (
              <AccordionItem key={item.t} value={`item-${i}`} className="watercolor-card border-0 px-6">
                <AccordionTrigger className="display text-lg hover:no-underline">{item.t}</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">{item.d}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal> */}
      </div>
    </section>
  );
}
