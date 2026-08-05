import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="px-6 py-24 text-center">
      <div className="mx-auto max-w-lg">
        <span aria-hidden="true" className="text-3xl text-mauve/70">
          ❀
        </span>
        <p className="mt-3 script text-2xl text-mauve">a gentle detour</p>
        <h1 className="mt-2 display text-6xl">Page Not Found</h1>
        <p className="mt-6 leading-relaxed text-foreground/70">
          The page you're looking for doesn't exist, or may have moved. Here are a few places you
          might have been headed:
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-mauve px-6 py-2.5 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-lavender/50 bg-cream/70 px-6 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-cream"
          >
            About Me
          </Link>
          <Link
            href="/intake"
            className="rounded-full border border-lavender/50 bg-cream/70 px-6 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-cream"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
