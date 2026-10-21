import type { SiteContent } from "@/types/content";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site: SiteContent = {
  name: "Muzammal Hussain",
  initials: "MH",
  fullName: "Muzammal Hussain",
  role: "Software Engineer",
  email: "chmzml22@gmail.com",
  location: "Lahore, Pakistan",
  resumePath: "/muzammal-resume.pdf",
  url: configuredUrl.replace(/\/$/, ""),
  title: "Muzammal Hussain — Software Engineer",
  description: "Thoughtful interfaces and beautifully engineered web experiences.",
  skipToContent: "Skip to content",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ch-muzammil/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/Ch-Muzammil", icon: "github" },
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
