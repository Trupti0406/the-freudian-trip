import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import WorkshopEnquiryForm from "@/components/site/WorkshopEnquiryForm";
import { JsonLd } from "@/components/site/JsonLd";
import { serviceJsonLd } from "@/lib/site";
import { Building2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Inclusive, reflective workshops on mental health, identity and belonging for schools, colleges, NGOs, workplaces and community groups.",
  alternates: { canonical: "/workshops" },
  openGraph: {
    title: "Workshops — The Freudian Trip",
    description:
      "Workshops for groups, schools, colleges, workplaces and organisations on mental health, inclusion and reflective practice.",
  },
};

const jsonLd = serviceJsonLd({
  name: "Workshops",
  description:
    "Inclusive workshops on mental health, identity and belonging for schools, colleges, NGOs, workplaces and community groups.",
  path: "/workshops",
});

export default function WorkshopsPage() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <JsonLd data={jsonLd} />
      <img
        src="/assets/petal-scatter.svg"
        alt=""
        aria-hidden="true"
        width={200}
        height={200}
        className="pointer-events-none absolute -top-2 -left-8 hidden w-32 rotate-45 select-none opacity-30 md:block lg:w-40"
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center script text-2xl text-mauve">gather, learn, reflect</p>
          <h1 className="mt-2 text-center display text-6xl">Workshops</h1>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <article className="watercolor-card flex h-full flex-col px-7 py-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-blush/60 text-mauve">
                  <Sparkles className="h-5 w-5" strokeWidth={1.5} />
                </span>

                <h2 className="mt-4 display text-2xl">For Groups</h2>

                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  Workshops for community spaces, peer groups, collectives, mental health circles,
                  and gatherings seeking opportunities for shared learning, reflection and dialogue.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex gap-2 text-sm text-foreground/70">
                    <span className="text-mauve">❀</span>
                    <span>Identity and belonging</span>
                  </li>

                  <li className="flex gap-2 text-sm text-foreground/70">
                    <span className="text-mauve">❀</span>
                    <span>Emotional wellbeing</span>
                  </li>

                  <li className="flex gap-2 text-sm text-foreground/70">
                    <span className="text-mauve">❀</span>
                    <span>Relationships and communication</span>
                  </li>

                  <li className="flex gap-2 text-sm text-foreground/70">
                    <span className="text-mauve">❀</span>
                    <span>Reflective and experiential spaces</span>
                  </li>
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="watercolor-card flex h-full flex-col px-7 py-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-lavender/50 text-mauve">
                  <Building2 className="h-5 w-5" strokeWidth={1.5} />
                </span>

                <h2 className="mt-4 display text-2xl">For Organisations & Institutions</h2>

                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  Workshops designed for schools, colleges, workplaces, NGOs and institutions that
                  wish to create thoughtful, inclusive and emotionally aware spaces.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex gap-2 text-sm text-foreground/70">
                    <span className="text-mauve">❀</span>
                    <span>Inclusion and diversity</span>
                  </li>

                  <li className="flex gap-2 text-sm text-foreground/70">
                    <span className="text-mauve">❀</span>
                    <span>Mental health and wellbeing</span>
                  </li>

                  <li className="flex gap-2 text-sm text-foreground/70">
                    <span className="text-mauve">❀</span>
                    <span>Queer-affirmative practices</span>
                  </li>

                  <li className="flex gap-2 text-sm text-foreground/70">
                    <span className="text-mauve">❀</span>
                    <span>Reflective practice and awareness</span>
                  </li>
                </ul>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <WorkshopEnquiryForm />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="watercolor-card mt-8 px-8 py-8 text-center">
            <h2 className="display text-2xl">Looking for something specific?</h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/70">
              Workshops can also be designed around specific themes, contexts, and needs. If you
              don't see your area reflected above, feel free to reach out and share what you're
              looking for.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
