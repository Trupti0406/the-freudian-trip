"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Flower2 } from "lucide-react";

const links = [
  { to: "/about", label: "About Me" },
  { to: "/crocus-diaries", label: "Crocus Diaries" },
  { to: "/assessment", label: "Assessment" },
  { to: "/workshops", label: "Workshops" },
  { to: "/enquiry", label: "Enquiry Form" },
  // { to: "/therapy", label: "Therapy" },
  // { to: "/populations", label: "Populations" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 bg-transparent ${
        scrolled
          ? "bg-cream/80 backdrop-blur-md shadow-[0_2px_20px_-12px_var(--mauve)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-lavender/40 text-mauve transition-transform group-hover:rotate-12">
            <Flower2 className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className="display text-xl tracking-wide text-mauve">The Freudian Trip</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                className={`relative text-sm transition-colors hover:text-mauve ${
                  active ? "text-mauve" : "text-foreground/70"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full bg-blush/50 text-mauve lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-cream/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-lavender/30 hover:text-mauve"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
