import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Freudian Trip collects, uses and protects the information you share through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-center script text-2xl text-mauve">how your information is handled</p>
          <h1 className="mt-2 text-center display text-6xl">Privacy Policy</h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 space-y-10 leading-relaxed text-foreground/75">
            <div>
              <h2 className="display text-2xl text-foreground">What I collect</h2>
              <p className="mt-3">
                When you use the intake or workshop enquiry forms on this site, I collect what you
                choose to share, typically your name, contact details, and any context you offer
                about what brings you here. Intake forms may include more personal information, such
                as an emergency contact or reflections on your background, since this helps me
                prepare for our first conversation.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl text-foreground">How it's used</h2>
              <p className="mt-3">
                Information submitted through this site is used solely to respond to your enquiry,
                understand your needs, and, where relevant, prepare for our sessions together. It is
                not sold, rented, or used for advertising, and it is not shared with third parties
                except the service provider below, which is required to deliver your message to me.
              </p>
            </div>

            {/* <div>
              <h2 className="display text-2xl text-foreground">Third-party processing</h2>
              <p className="mt-3">
                Form submissions are sent using EmailJS, a third-party service that delivers your
                message directly to my email inbox. EmailJS processes this data only to transmit
                it; you can read their privacy practices at{" "}
                <a
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-mauve"
                >
                  emailjs.com/legal/privacy-policy
                </a>
                .
              </p>
            </div> */}

            <div>
              <h2 className="display text-2xl text-foreground">Confidentiality</h2>
              <p className="mt-3">
                Anything you share with me — whether through this website or in session — is held
                with the same confidentiality expected of professional therapeutic practice, and is
                only ever discussed with your consent or where required by law or immediate safety
                concerns.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl text-foreground">Your choices</h2>
              <p className="mt-3">
                You can ask me at any time what information I hold about you, request a copy of it,
                or ask me to delete it, subject to any professional record-keeping requirements. To
                do so, simply email me directly.
              </p>
            </div>

            <div>
              <h2 className="display text-2xl text-foreground">Contact</h2>
              <p className="mt-3">
                Questions about this policy or your data can be sent to{" "}
                <a
                  href="mailto:hello@thefreudiantrip.com"
                  className="underline underline-offset-2 hover:text-mauve"
                >
                  hello@thefreudiantrip.com
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
