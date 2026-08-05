import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Trauma-informed, queer-affirmative, decolonised therapist — meet the person behind The Freudian Trip.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Me — The Freudian Trip",
    description: "A multicultural, inclusive educator and therapist.",
  },
};

const petals = [
  { label: "Trauma Informed" },
  { label: "Queer Affirmative" },
  { label: "Inclusive Educator" },
  { label: "Decolonised Therapist" },
  { label: "Multicultural Approach" },
  { label: "DEIB Researcher" },
];

const academicQualifications = [
  "MA in Applied Psychology (Clinical Psychology Major) from University Department of Applied Psychology, University of Mumbai.",
  "Advanced Diploma in Child Care and Child Development from Nagindas Khandwala College.",
  "Queer Affirmative Counselling Practice from Mariwala Health Foundation in collaboration with University Department of Applied Psychology.",
  "Peace Studies Course from Mahatma Gandhi Peace Center, University of Mumbai.",
  "Post Graduate Diploma in Thoughts of Dr Babasaheb Ambedkar from Dr Babasaheb Ambedkar International Research Centre, University of Mumbai.",
  "Multiculturalism and Peace Psychology Semester Papers in MA.",
  "Inclusive Educator — School Inclusion Training Program from Ummeed Child Development Center.",
  "Diploma in Career and Education Counselling from Indian Institute of Skill Development Training.",
];

export default function AboutPage() {
  return (
    <section className="overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* ── Page header — small crocus-bunch accent tucked beside it ── */}
        <Reveal>
          <div className="relative">
            <Image
              src="/assets/crocus-bunch.png"
              alt=""
              aria-hidden="true"
              width={110}
              height={126}
              className="pointer-events-none absolute -right-4 -top-6 hidden w-24 select-none -rotate-6 opacity-90 drop-shadow-[0_16px_24px_rgba(190,150,200,0.25)] sm:block md:-right-10 md:w-28 lg:w-32"
            />
            <p className="text-center script text-2xl text-mauve">a little about me</p>
            <h1 className="mt-2 text-center display text-6xl">About Me</h1>
          </div>
        </Reveal>

        {/* ── Meet the therapist — bio section ───────────────────
            Swap the image src below for your Canva photo. Replace
            the heading + paragraph with your own copy. */}
        <Reveal delay={0.25}>
          <div className="mt-20 grid items-center gap-12 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-3xl border border-lavender/40 shadow-[var(--shadow-petal)]">
                <Image
                  src="/assets/crocus.png" // TODO: replace with your photo from Canva
                  alt="Rutuja, therapist and founder of The Freudian Trip"
                  width={430}
                  height={430}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 -right-4 select-none text-4xl text-mauve/70"
              >
                ❀
              </span>
            </div>

            <div className="text-center md:text-left">
              <p className="script text-2xl text-mauve">the person behind the practice</p>
              <h2 className="mt-2 display text-4xl">Hi, I'm Rutuja</h2>
              <p className="mt-4 leading-relaxed text-foreground/70">
                {/* TODO: replace with Rutuja's own bio copy */}
                I hold space for people navigating identity, trauma and the quiet questions of
                everyday life — with a trauma-informed, queer-affirmative and decolonised lens
                shaped by my training in clinical psychology. My full story is on its way; in the
                meantime, you can read about my qualifications and approach below, or reach out
                directly if you'd like to know more.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Identity pills — flat, icon-led, no rotation ── */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center">
            <div className="flex max-w-2xl flex-wrap justify-center gap-2.5">
              {petals.map((p, i) => {
                const toneB = i % 2 === 1;
                return (
                  <span
                    key={p.label}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide shadow-sm transition-transform duration-200 hover:-translate-y-0.5 ${
                      toneB
                        ? "border-blush/60 bg-blush/40 text-mauve"
                        : "border-lavender/60 bg-lavender/40 text-mauve"
                    }`}
                  >
                    <span aria-hidden="true" className="text-[10px] text-mauve/70">
                      ❀
                    </span>
                    {p.label}
                  </span>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ── Professional accordion ────────────────────────────── */}
        <Reveal delay={0.4}>
          <div className="mx-auto mt-20 max-w-3xl">
            <h2 className="text-center display text-4xl">What Makes Me, Me Professionally?</h2>

            <Accordion type="single" collapsible className="mt-8 space-y-3">
              <AccordionItem value="academic" className="watercolor-card border-0 px-6">
                <AccordionTrigger className="display text-lg hover:no-underline">
                  Foundations of Practice
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-foreground/70">
                  <p className="mb-3">
                    Academically, the following have helped me build and shape the philosophy and
                    praxis for my professional work:
                  </p>
                  <ul className="list-none space-y-2">
                    {academicQualifications.map((q) => (
                      <li key={q} className="flex gap-2">
                        <span aria-hidden="true" className="mt-1 shrink-0 text-mauve">
                          ❀
                        </span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
