import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FlowerDiagram } from "@/components/site/Flowerdiagra";

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
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* ── Page header ───────────────────────────────────────── */}
        <Reveal>
          <p className="text-center script text-2xl text-mauve">a little about me</p>
          <h1 className="mt-2 text-center display text-6xl">About Me</h1>
        </Reveal>
        {/* ── Flower diagram ────────────────────────────────────── */}
        <Reveal delay={0.15}>
          <div className="mt-2 flex justify-center">
            <Image
              src="/assets/crocus.png"
              alt="Flower"
              width={430}
              height={430}
              className="h-auto w-auto max-w-full"
              priority
            />
          </div>
        </Reveal>
        {/* ── Professional accordion ────────────────────────────── */}
        <Reveal delay={0.3}>
          <div className="mx-auto mt-20 max-w-3xl">
            <h2 className="text-center display text-4xl">What Makes Me, Me Professionally?</h2>

            <Accordion type="single" collapsible className="mt-8 space-y-3">
              {/* Academic qualifications */}
              <AccordionItem value="academic" className="watercolor-card border-0 px-6">
                <AccordionTrigger className="display text-lg hover:no-underline">
                  Foundations of Practice
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  <p className="mb-3">
                    Academically, the following have helped me build and shape the philosophy and
                    praxis for my professional work:
                  </p>
                  <ul className="space-y-2 list-none">
                    {academicQualifications.map((q) => (
                      <li key={q} className="flex gap-2">
                        <span className="mt-1 shrink-0 text-mauve">✦</span>
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
