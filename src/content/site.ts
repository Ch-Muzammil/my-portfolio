import type { SiteContent } from "@/types/content";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site: SiteContent = {
  name: "Muzammal Hussain",
  initials: "M",
  fullName: "Muzammal Hussain",
  role: "Software Engineer",
  email: "chmzml22@gmail.com",
  phone: "+92 311 0068507",
  whatsappHref: `https://wa.me/923110068507?text=${encodeURIComponent("Hi Muzammal, I came across your portfolio and would like to discuss a potential opportunity with you.")}`,
  location: "Lahore, Pakistan",
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
