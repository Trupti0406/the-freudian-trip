import type { Metadata } from "next";
import { Cormorant_Garamond, Caveat, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/site/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${SITE_NAME} — A space to explore, understand and grow`;
const description =
  "Trauma-informed, queer-affirmative therapy, assessment and workshops with Prof. Rutuja. A soft, safe and inclusive space for healing and growth.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s — ${SITE_NAME}` },
  description,
  authors: [{ name: "Prof. Rutuja" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      description,
      email: "hello@thefreudiantrip.com",
      areaServed: "Online",
      founder: { "@id": `${SITE_URL}/#person` },
      sameAs: ["https://www.linkedin.com/in/rutuja-t-460631339/"],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Rutuja",
      honorificPrefix: "Prof.",
      jobTitle: "Therapist",
      description:
        "Trauma-informed, queer-affirmative, decolonised therapist and inclusive educator.",
      url: `${SITE_URL}/about`,
      worksFor: { "@id": `${SITE_URL}/#service` },
      sameAs: ["https://www.linkedin.com/in/rutuja-t-460631339/"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Mumbai",
      },
      knowsAbout: [
        "Trauma-informed therapy",
        "Queer-affirmative therapy",
        "Decolonised therapy",
        "Multicultural counselling",
        "Neurodivergence-affirming practice",
        "DEIB (Diversity, Equity, Inclusion and Belonging)",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${caveat.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        <JsonLd data={jsonLd} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-mauve focus:px-5 focus:py-2.5 focus:text-sm focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
