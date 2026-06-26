// app/crocus-diaries/page.tsx — Server Component (no "use client")
import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import { CommunityCard } from "@/components/site/CommunityCard";
import { CloudBubble } from "@/components/site/CloudBubble";

export const metadata: Metadata = {
  title: "Crocus Diaries — The Freudian Trip",
  description: "Reflections, essays and quiet writings on therapy, healing and being human.",
  openGraph: {
    title: "Crocus Diaries — The Freudian Trip",
    description: "Reflections from the therapy room and the world outside it.",
  },
};

const thoughtTopics = [
  "Adolescent challenges",
  "Childhood trauma",
  "Sexual trauma",
  "Sexual well-being",
  "Intrapersonal concerns",
  "Interpersonal relationship concerns",
  "Academic concerns",
  "Work related stress",
  "Career counselling",
  "Existential crisis",
  "Grief counselling",
  "Support for clinical disorders",
  "Support for neurodivergence",
];

const communities = [
  {
    title: "LGBTQIA+",
    body: "Queer-affirmative, gender-expansive therapy that celebrates the full spectrum of identity and relationship.",
  },
  {
    title: "Neurodivergent individuals",
    body: "Sensory-aware, strengths-based support that respects different ways of thinking, feeling and being.",
  },
  {
    title: "People from marginalised backgrounds",
    body: "A decolonised, intersectional lens that honours your context, history and lived experience.",
  },
  {
    title: "Teenagers",
    body: "Warm, non-judgemental space for adolescents navigating identity, relationships and the weight of growing up.",
  },
  {
    title: "Disabled individuals",
    body: "Accessible, accommodating care that meets you where you are and centres your expertise on your own body and life.",
  },
  {
    title: "Individuals with chronic illnesses",
    body: "Supportive companionship through the emotional landscape of living in a body that asks for ongoing care.",
  },
];

export default function DiariesPage() {
  return (
    <div className="relative min-h-screen ">
      {/* Dear Diary — vertical left-side decoration */}
      <div className="pointer-events-none absolute left-2 top-40 hidden xl:block">
        <p
          className="script text-6xl text-[#A89B7D]/50"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Dear Diary
        </p>
      </div>

      {/* Crocus significance */}
      <section className="relative px-6 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img
              src="/assets/crocus.png"
              alt="Watercolor crocus flower"
              loading="lazy"
              width={1024}
              height={1024}
              className="mx-auto w-72 md:w-96 drop-shadow-[0_20px_30px_rgba(190,150,200,0.25)]"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="script text-2xl text-mauve">A gentle symbol</p>
            <h2 className="mt-2 display text-4xl sm:text-5xl">
              Significance of the <em className="text-mauve">Crocus</em> Flower
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              The Crocus flower symbolizes renewal, emotional awakening, hope, growth, and gentle
              transformation — values that align deeply with the therapeutic journey.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Renewal", "Awakening", "Hope", "Growth", "Transformation"].map((w) => (
                <span
                  key={w}
                  className="rounded-full bg-lavender/40 px-4 py-1.5 text-xs tracking-wide text-mauve"
                >
                  {w}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Areas I Work With — cloud bubbles */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-center script text-2xl text-mauve">What we explore together</p>
            <h2 className="mt-2 text-center display text-4xl sm:text-5xl">
              Areas That I Work With
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-14 mx-auto flex flex-wrap justify-center gap-x-10 gap-y-8 max-w-6xl">
              {thoughtTopics.map((topic, i) => (
                <CloudBubble key={topic} label={topic} index={i} delay={i * 0.05} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Communities */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-center script text-2xl text-mauve">Held with care</p>
            <h2 className="mt-2 text-center display text-4xl sm:text-5xl">
              Experience Working With Diverse Communities
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {communities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <CommunityCard title={c.title} body={c.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
