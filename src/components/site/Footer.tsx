import Image from "next/image";
import { Instagram, Mail, Phone, Heart, Linkedin } from "lucide-react";
import sunset from "@/assets/sunset.jpg";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      <Image
        src="/assets/sunset.jpg"
        alt=""
        fill
        loading="lazy"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-blush/30 to-lavender/50" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="display text-2xl italic leading-relaxed text-mauve sm:text-3xl">
          “Life is not a problem to be solved, but a reality to be experienced”
        </p>
        <p className="mt-3 text-sm tracking-[0.25em] uppercase text-foreground/60">
          — Søren Kierkegaard
        </p>

        <div className="mt-12 h-px w-24 mx-auto bg-mauve/30" />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/70">
          <a
            href="mailto:hello@thefreudiantrip.com"
            className="inline-flex items-center gap-2 rounded-full bg-cream/70 px-4 py-2 transition-colors hover:bg-cream"
          >
            <Mail className="h-4 w-4" /> hello@thefreudiantrip.com
          </a>
          <a
            href="tel:+0000000000"
            className="inline-flex items-center gap-2 rounded-full bg-cream/70 px-4 py-2 transition-colors hover:bg-cream"
          >
            <Phone className="h-4 w-4" /> +00 0000 000 000
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-cream/70 px-4 py-2 transition-colors hover:bg-cream"
          >
            <Instagram className="h-4 w-4" /> @placeholder
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-cream/70 px-4 py-2 transition-colors hover:bg-cream"
          >
            <Linkedin className="h-4 w-4" /> placeholder
          </a>
        </div>

        <p className="mt-12 inline-flex items-center gap-1.5 text-sm text-foreground/50">
          Made with ❤️ © {new Date().getFullYear()} The Freudian Trip
        </p>
      </div>
    </footer>
  );
}
