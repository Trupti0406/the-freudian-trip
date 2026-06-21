import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "The Freudian Trip — A space to explore, understand and grow",
  description:
    "Trauma-informed, queer-affirmative therapy, assessment and workshops. A soft, safe and inclusive space for healing and growth.",
  authors: [{ name: "The Freudian Trip" }],
  openGraph: {
    title: "The Freudian Trip",
    description:
      "A safe, confidential and empathetic space to explore experiences, emotions and challenges.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Caveat:wght@500;600&family=Inter:wght@300;400;500;600&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
