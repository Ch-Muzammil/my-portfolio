import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string("Enter your name.")
    .trim()
    .min(2, "Enter your name.")
    .max(80, "Keep the name under 80 characters.")
    .transform((value) => value.replace(/\s+/g, " ")),
  email: z
    .string("Enter your email.")
    .trim()
    .min(1, "Enter your email.")
    .max(120, "That email is too long.")
    .pipe(z.email("Enter a valid email address.")),
  message: z
    .string("Enter a message.")
    .trim()
    .min(10, "Add a little more detail.")
    .max(4000, "Keep the message under 4000 characters."),
});

export type ContactValues = z.input<typeof contactSchema>;
export type ContactMessage = z.output<typeof contactSchema>;
