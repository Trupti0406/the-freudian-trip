import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import { Sparkle, Users, Rainbow, Brain, HandHeart } from "lucide-react";

export const metadata: Metadata = {
  title: "Populations — The Freudian Trip",
  description: "Inclusive, affirmative therapy for teenagers, adults, LGBTQIA+, neurodivergent and marginalised communities.",
  openGraph: {
    title: "Populations — The Freudian Trip",
    description: "An inclusive space for the communities I most love working with.",
  },
};

const cards = [
  { t: "Teenagers", d: "Warm, non-judgemental space for adolescents navigating identity, school and relationships.", icon: Sparkle, tint: "bg-blush/50" },
  { t: "Adults", d: "Reflective companionship for the challenges and quiet questions of adult life.", icon: Users, tint: "bg-rose/30" },
  { t: "LGBTQIA+ Community", d: "Queer-affirmative, gender-expansive care that celebrates who you are.", icon: Rainbow, tint: "bg-lavender/50" },
  { t: "Neurodivergent Individuals", d: "Sensory-aware, strengths-based support honouring different minds.", icon: Brain, tint: "bg-blush/60" },
  { t: "Marginalised Communities", d: "Decolonised, intersectional therapy that holds the weight of lived experience.", icon: HandHeart, tint: "bg-lavender/40" },
];

export default function PopulationsPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center script text-2xl text-mauve">held with care</p>
          <h1 className="mt-2 text-center display text-6xl">Populations</h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-foreground/75 leading-relaxed">
            Every person carries a context. These are some of the communities I most love walking alongside.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.t} delay={i * 0.07}>
                <article className="watercolor-card group h-full px-7 py-8">
                  <span className={`grid h-14 w-14 place-items-center rounded-full ${c.tint} text-mauve transition-transform group-hover:rotate-6`}>
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 display text-2xl">{c.t}</h3>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.d}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
