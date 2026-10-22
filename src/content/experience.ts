import type { ExperienceContent } from "@/types/content";

export const experience: ExperienceContent = {
  meta: {
    title: "Experience",
    description:
      "Production work since 2024 across fintech, travel, real estate, and marketplaces, with React, Next.js, and TypeScript.",
  },
  number: "04",
  label: "The journey so far",
  title: "Learning. Building.",
  muted: "Growing.",
  linkLabel: "View résumé",
  linkHref: "/resume",
  items: [
    {
      date: "Oct 2024 — Present",
      title: "Software Engineer",
      company: "Tekxai",
      location: "Johar Town, Lahore",
      highlights: [
        "Build production web applications across fintech, travel, real estate, and marketplaces, turning requirements into maintainable features with React, Next.js, and TypeScript.",
        "Design reusable, feature-based architecture for multi-role workflows, including role-based access and dashboards shaped to each role.",
        "Integrate REST APIs, payments, identity verification, and realtime communication with TanStack Query, Stripe, Persona, and Socket.io.",
        "Take on the data side when the product needs it: Next.js APIs, Supabase, PostgreSQL, authentication, and row-level access.",
        "Improve accessibility and quality with WCAG-aware interfaces, linting, Vitest, and Playwright.",
      ],
      tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Socket.io", "Playwright"],
      current: true,
    },
    {
      date: "Jan 2024 — Oct 2024",
      title: "Frontend Developer",
      company: "Excellence Code Solution",
      location: "Rafi Group, DHA Main Blvd, Iqbal Park",
      highlights: [
        "Built responsive React interfaces from Figma with reusable components and modern CSS.",
        "Integrated backend APIs, managed client-side state, and shipped maintainable features with the team.",
      ],
      tags: ["React", "Tailwind CSS", "Figma", "REST APIs"],
      current: false,
    },
  ],
  page: {
    eyebrow: "Experience & growth",
    title: "Better with every build.",
    description:
      "Nearly 3 years building production web products, from the interface through APIs, realtime, and data.",
  },
  resume: {
    meta: {
      title: "Résumé",
      description:
        "Muzammal Hussain, software engineer in Lahore. Same experience on two CVs — Software Engineer or Frontend Engineer.",
    },
    eyebrow: "The short version",
    title: "Muzammal Hussain",
    summary: "Software Engineer · Lahore, Pakistan · Open to remote and on-site roles",
    skills: "React · Next.js · TypeScript · Node.js · Supabase",
    note: "Same experience. Pick the CV that matches the role.",
    downloads: [
      {
        label: "Software Engineer",
        href: "/resumes/Muzammal_Hussain_CV_FullStack.pdf",
      },
      {
        label: "Frontend Engineer",
        href: "/resumes/Muzammal_Hussain_Frontend_CV.pdf",
      },
    ],
  },
};
