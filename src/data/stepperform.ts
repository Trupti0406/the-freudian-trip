// data/forms.ts

import type { StepperField } from "@/components/site/StepperForm";

export const intakeFields: StepperField[] = [
  {
    name: "name",
    label: "What's your name?",
    type: "text",
    required: true,
    placeholder: "Your name",
  },
  {
    name: "pronouns",
    label: "What pronouns do you use?",
    type: "text",
    placeholder: "e.g. she/her, he/him, they/them",
  },
  {
    name: "age",
    label: "How old are you?",
    type: "number",
    required: true,
    placeholder: "Age",
  },
  {
    name: "phone",
    label: "What's the best phone number to reach you on?",
    type: "tel",
    required: true,
    placeholder: "Phone number",
  },
  {
    name: "email",
    label: "What's your email ID?",
    type: "email",
    required: true,
    placeholder: "you@example.com",
  },
  {
    name: "emergencyContact",
    label: "Who can we contact in case of an emergency?",
    type: "text",
    required: true,
    placeholder: "Name and phone number",
  },
  {
    name: "backgroundIdentity",
    label:
      "If you feel comfortable, please share any aspects of your background or identity that are important to you.",
    type: "textarea",
    placeholder: "Optional — share as much or as little as you'd like",
    rows: 4,
  },
  {
    name: "cultureHonour",
    label:
      "Are there aspects of your culture, background, or experiences that you'd like me to honour in our work together?",
    type: "textarea",
    rows: 4,
  },
  {
    name: "languagePreference",
    label:
      "Are there any languages you prefer or will feel more comfortable using during our sessions?",
    type: "text",
    placeholder: "e.g. English, Hindi, Marathi...",
  },
  {
    name: "challenges",
    label:
      "Please briefly describe the challenges you're facing or areas you'd like to focus on in our work together.",
    type: "textarea",
    rows: 5,
  },
  {
    name: "additionalNotes",
    label:
      "Please share anything else that feels important, even if it doesn't fit into the categories above.",
    type: "textarea",
    rows: 5,
  },
  {
    name: "availability",
    label: "Please mention the days and time slots that work for you.",
    type: "textarea",
    placeholder: "e.g. Weekday evenings after 6pm, weekends anytime...",
    rows: 4,
  },
];
