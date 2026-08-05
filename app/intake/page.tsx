import type { Metadata } from "next";
import { IntakeClient } from "@/components/site/IntakeClient";

export const metadata: Metadata = {
  title: "Intake Form",
  description:
    "Send a gentle note and I'll get back to you. Therapy, assessment and workshop enquiries welcome.",
  alternates: { canonical: "/intake" },
  openGraph: {
    title: "Intake Form — The Freudian Trip",
    description: "Reach out — I read every message myself.",
  },
};

export default function EnquiryPage() {
  return <IntakeClient />;
}
