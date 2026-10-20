import type { ExperienceContent } from "@/types/content";

export const experience: ExperienceContent = {
  meta: {
    title: "Experience",
    description:
      "A frontend engineering journey built on continuous learning, collaboration, React, Next.js, and accessible component systems.",
  },
  number: "04",
  label: "The journey so far",
  title: "Learning. Building.",
  muted: "Growing.",
  linkLabel: "View résumé",
  linkHref: "/resume",
  downloadLabel: "Download résumé",
  items: [
    {
      date: "2024 — Present",
      title: "Software Engineer",
      company: "Tekxai",
      location: "Johar Town, Lahore",
      highlights: [
        "Delivered 5 production applications across fintech, real estate, and travel, architecting reusable component libraries with a feature-based structure that cut cross-project duplication.",
        "Expanded into full-stack development over the last 6 months, building a complete product end to end with Next.js and Supabase.",
        "Shipped Stripe payments, Persona KYC identity verification, Socket.io real-time features, and multi-role access systems across all 5 applications.",
        "Set up Husky pre-commit hooks enforcing lint and test checks, with Vitest unit tests and Playwright E2E tests for critical payment and booking flows.",
        "Applied WCAG 2.1 AA practices — semantic markup, keyboard navigation, and ARIA roles — across shared components used in every application.",
        "Currently building Soleya, a two-sided marketplace for makeup artists with approval-gated listings, instant and scheduled booking, and a Next.js + FastAPI review and dispute system.",
      ],
      tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Socket.io", "Playwright"],
      current: true,
    },
    {
      date: "May 2024 — Aug 2024",
      title: "Frontend Developer",
      company: "Excellence Code Solution",
      location: "Lahore, Pakistan",
      highlights: [
        "Converted Figma designs into pixel-perfect, responsive interfaces with React.js and Tailwind CSS across multiple client projects.",
        "Handled API integration and frontend data flow, keeping UI behavior consistent across browsers and devices in an Agile team.",
      ],
      tags: ["React", "Tailwind CSS", "Figma", "REST APIs"],
      current: false,
    },
  ],
  page: {
    eyebrow: "Experience & growth",
    title: "Better with every build.",
    description:
      "3+ years of growing as a frontend engineer, solving problems with care, and finding better ways to bring ideas to life.",
  },
  resume: {
    meta: {
      title: "Résumé",
      description:
        "View and download Muzammal’s software engineering résumé, including technical skills and a sample professional timeline.",
    },
    eyebrow: "The short version",
    title: "Muzammal Hussain",
    summary: "Software Engineer · Lahore, Pakistan · Open to remote & on-site roles",
    skills: "React / Next.js / TypeScript / Design systems / Accessibility",
    note: "Sample résumé — project concepts and experience entries are illustrative.",
  },
};
