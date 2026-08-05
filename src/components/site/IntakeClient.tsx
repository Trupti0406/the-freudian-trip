"use client";

import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { StepperForm } from "@/components/site/StepperForm";
import { intakeFields } from "@/data/stepperform";
import { sendEmail } from "@/lib/emailjs";
import { toast } from "sonner";

export function IntakeClient() {
  async function handleSubmit(values: Record<string, string>) {
    await sendEmail(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_INTAKE!, values);

    toast.success("Thank you — your intake form has been received.");
  }

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="script text-2xl text-mauve">let's start a conversation</p>
          <h1 className="mt-2 display text-6xl">Intake Form</h1>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            A few questions to help me understand you and how I can best support you.
          </p>

          <StepperForm
            fields={intakeFields}
            submitLabel="Submit"
            successTitle="Thank you"
            successMessage="Your intake form has been received. I'll be in touch soon."
            onSubmit={handleSubmit}
          />
          <div
            role="note"
            className="mt-8 rounded-2xl border border-lavender/40 bg-lavender/10 px-5 pt-4 text-sm leading-relaxed text-foreground/70"
          >
            {/* <p>
              This form is not monitored in real time and isn't meant for emergencies. If you're
              in crisis or need immediate support, please contact your local emergency services or
              a helpline such as the{" "}
              <strong>KIRAN Mental Health Helpline — 1800-599-0019</strong> (toll-free, 24x7,
              India).
            </p> */}
            <p>
              What you share here is used only to understand and respond to your enquiry — see the{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-mauve">
                Privacy Policy
              </Link>{" "}
              for details on how your information is handled.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
