import type { SiteContent } from "@/types/content";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site: SiteContent = {
  name: "Muzammal Hussain",
  fullName: "Muzammal Hussain",
  role: "Software Engineer",
  email: "hello@example.com",
  location: "Karachi, Pakistan",
  resumePath: "/muzammal-resume.pdf",
  url: configuredUrl.replace(/\/$/, ""),
  title: "Muzammal Hussain — Software Engineer",
  description: "Thoughtful interfaces and beautifully engineered web experiences.",
  skipToContent: "Skip to content",
  social: [
    { label: "GitHub", href: "TODO" },
    { label: "LinkedIn", href: "TODO" },
  ],
  notFound: {
    code: "404",
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
  error: {
    title: "This page didn't load",
    body: "Something went wrong on our end. You can try refreshing or head back home.",
    retry: "Try again",
    home: "Go home",
  },
};
