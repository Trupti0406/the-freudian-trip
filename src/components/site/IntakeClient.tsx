"use client";

import { Reveal } from "@/components/site/Reveal";
import { StepperForm } from "@/components/site/StepperForm";
import { intakeFields } from "@/data/stepperform";
import { toast } from "sonner";

export function IntakeClient() {
  async function handleSubmit(values: Record<string, string>) {
    await new Promise((resolve) => setTimeout(resolve, 700));

    console.log(values);

    toast.success("Thank you — your intake form has been received.");
  }

  return (
    <section className="px-6 py-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h1 className="display text-5xl sm:text-6xl">Intake Form</h1>
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
        </Reveal>
      </div>
    </section>
  );
}
