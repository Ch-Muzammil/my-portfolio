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
      employment: "Full-time",
      company: "Product engineering · Sample experience",
      description:
        "Building thoughtful web experiences with React and Next.js. Turning design systems into reusable components, with a focus on accessibility and performance.",
      tags: ["React", "Next.js", "TypeScript"],
      current: true,
    },
    {
      date: "2023 — 2024",
      title: "Frontend Developer",
      employment: "Freelance",
      company: "Freelance · Sample experience",
      description:
        "Partnered with clients to ship marketing sites and product interfaces — from design handoff to deployment, with performance budgets and accessible patterns throughout.",
      tags: ["React", "Tailwind CSS", "Firebase"],
      current: false,
    },
    {
      date: "2022 — 2023",
      title: "Junior Frontend Developer",
      employment: "Full-time",
      company: "Digital studio · Sample experience",
      description:
        "Translated designs into responsive interfaces, collaborated with designers and engineers, and developed a strong foundation in modern frontend development.",
      tags: ["JavaScript", "React", "CSS"],
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
    summary: "Software Engineer · Karachi, Pakistan · Open to remote opportunities",
    skills: "React / Next.js / TypeScript / Design systems / Accessibility",
    note: "Sample résumé — project concepts and experience entries are illustrative.",
  },
};
