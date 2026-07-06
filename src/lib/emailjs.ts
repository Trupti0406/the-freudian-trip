import emailjs from "@emailjs/browser";

export async function sendEmail(templateId: string, templateParams: Record<string, string>) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    templateId,
    templateParams,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  );
}
