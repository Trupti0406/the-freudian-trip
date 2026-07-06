// app/crocus-diaries/page.tsx — Server Component (no "use client")
import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import { CommunityCard } from "@/components/site/CommunityCard";

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

// Static per-cloud "scatter" — breaks the grid without any JS
const ROTATIONS = [-4, 3, -2, 4, -3, 2, -5, 3.5];
const OFFSETS_Y = [0, 10, -6, 8, -10, 4, -4, 6];
const OFFSETS_X = [0, -10, 6, -4, 12, -8, 4, -6]; // new: horizontal jitter

// Continuous "drift" — each cloud gets its own rhythm so they never sync up
const FLOAT_DURATIONS = [5, 6, 4.5, 6.5, 5.5, 5, 6, 4.8]; // faster than before → more perceptible
const FLOAT_DELAYS = [0, 0.8, 1.6, 0.3, 1.2, 0.5, 1.9, 1.0];
const FLOAT_SWAY = [5, -4, 6, -5, 4.5, -5.5, 5, -4.5]; // was ~2deg, now ~5deg
const FLOAT_RISE = [20, 24, 16, 26, 20, 18, 24, 16]; // was ~10px, now ~20px
const FLOAT_DRIFT = [8, -7, 9, -8, 7, -9, 8, -7]; // new: side-to-side px

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
      {/* Scoped, dependency-free keyframes — pure CSS, zero JS cost */}

      <style>{`
  @keyframes cloud-float {
    0%, 100% {
      transform: rotate(var(--base-rot)) translate(0px, 0px);
    }
    50% {
      transform: rotate(calc(var(--base-rot) + var(--sway))) translate(var(--drift), calc(var(--rise) * -1));
    }
  }
  .animate-cloud-float {
    animation-name: cloud-float;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-cloud-float {
      animation: none;
    }
  }
`}</style>

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

      {/* Areas I Work With — freestyle floating clouds */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-center script text-2xl text-mauve">What we explore together</p>
            <h2 className="mt-2 text-center display text-4xl sm:text-5xl">
              Areas That I Work With
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-14 mx-auto flex flex-wrap justify-center gap-y-8 max-w-6xl">
              {thoughtTopics.map((topic, i) => {
                const rotation = ROTATIONS[i % ROTATIONS.length];
                const offsetY = OFFSETS_Y[i % OFFSETS_Y.length];
                const offsetX = OFFSETS_X[i % OFFSETS_X.length];
                const duration = FLOAT_DURATIONS[i % FLOAT_DURATIONS.length];
                const delay = FLOAT_DELAYS[i % FLOAT_DELAYS.length];
                const sway = FLOAT_SWAY[i % FLOAT_SWAY.length];
                const rise = FLOAT_RISE[i % FLOAT_RISE.length];
                const drift = FLOAT_DRIFT[i % FLOAT_DRIFT.length];

                return (
                  <div
                    key={topic}
                    className="relative flex h-[110px] w-[190px] sm:w-[230px] shrink-0 items-center justify-center animate-in fade-in zoom-in-95 duration-700"
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      animationFillMode: "backwards",
                      // static scatter offset — breaks the grid, no animation here
                      transform: `translate(${offsetX}px, ${offsetY}px)`,
                    }}
                  >
                    <img
                      src="/assets/cloud.png"
                      alt=""
                      aria-hidden="true"
                      width={230}
                      height={288}
                      loading="lazy"
                      className="pointer-events-none w-full h-auto select-none drop-shadow-[0_10px_20px_rgba(150,180,210,0.25)] transition-transform duration-300 hover:scale-105 animate-cloud-float"
                      style={
                        {
                          "--base-rot": `${rotation}deg`,
                          "--sway": `${sway}deg`,
                          "--rise": `${rise}px`,
                          "--drift": `${drift}px`,
                          animationDuration: `${duration}s`,
                          animationDelay: `${delay}s`,
                        } as React.CSSProperties
                      }
                    />

                    <span className="absolute inset-0 flex items-center justify-center px-8 text-center text-sm sm:text-[15px] font-medium leading-snug text-foreground/80">
                      {topic}
                    </span>
                  </div>
                );
              })}
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
