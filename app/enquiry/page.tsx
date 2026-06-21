import type { Metadata } from "next";
import { EnquiryClient } from "./enquiry-client";

export const metadata: Metadata = {
  title: "Enquiry Form — The Freudian Trip",
  description: "Send a gentle note and I'll get back to you. Therapy, assessment and workshop enquiries welcome.",
  openGraph: {
    title: "Enquiry Form — The Freudian Trip",
    description: "Reach out — I read every message myself.",
  },
};

export default function EnquiryPage() {
  return <EnquiryClient />;
}
