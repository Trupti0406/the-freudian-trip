import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { serviceJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Therapy",
  description: "A safe, confidential and empathetic space to explore experiences, emotions and challenges.",
  alternates: { canonical: "/therapy" },
  openGraph: {
    title: "Therapy — The Freudian Trip",
    description: "Therapy is a collaborative journey towards healing, self-understanding and growth.",
  },
};

const jsonLd = serviceJsonLd({
  name: "Therapy",
  description:
    "Individual, trauma-informed and queer-affirmative therapy, offered online and in-person on a sliding scale.",
  path: "/therapy",
});

export default function TherapyPage() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <JsonLd data={jsonLd} />
      <img src="/assets/sprig.png" alt="" loading="lazy" width={768} height={768} className="pointer-events-none absolute top-10 -right-20 w-72 opacity-50 hidden md:block" />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="script text-2xl text-mauve">a gentle invitation</p>
          <h1 className="mt-3 display text-6xl text-foreground">Therapy</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 display text-xl italic leading-relaxed text-foreground/80 sm:text-2xl">
            A safe, confidential and empathetic space to explore experiences, emotions and challenges.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Therapy is a collaborative journey towards healing, self-understanding and growth. Together, we move at your pace — with curiosity, compassion and respect for the wisdom you already carry.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <Link href="/intake" className="mt-10 inline-flex rounded-full bg-mauve px-8 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5">
            Get In Touch
          </Link>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-16 grid gap-4 text-left sm:grid-cols-3">
            {[
              { t: "Individual", d: "One-to-one sessions tailored to you." },
              { t: "Online & in-person", d: "Flexible formats that fit your life." },
              { t: "Sliding scale", d: "Accessibility-aware pricing options." },
            ].map((c) => (
              <div key={c.t} className="watercolor-card px-6 py-6">
                <h2 className="display text-xl text-mauve">{c.t}</h2>
                <p className="mt-2 text-sm text-foreground/70">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
