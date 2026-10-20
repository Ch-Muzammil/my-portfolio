import type { SkillsContent } from "@/types/content";

export const skills: SkillsContent = {
  number: "02",
  label: "My toolkit",
  title: "Good design meets\ngreat engineering.",
  description:
    "The right tools matter. Knowing when and how to use them matters more. I care about every detail, from the first pixel to the final interaction.",
  traits: ["Pixel-conscious", "Performance-driven", "Always learning"],
  core: [
    { name: "React", level: "Daily" },
    { name: "Next.js", level: "Production" },
    { name: "TypeScript", level: "Daily" },
    { name: "JavaScript ES6+", level: "Daily" },
    { name: "Tailwind CSS", level: "Production" },
    { name: "Figma", level: "Design handoff" },
  ],
  groups: [
    {
      label: "UI & Design",
      skills: [
        "shadcn/ui",
        "Radix",
        "Framer Motion",
        "Storybook",
        "Responsive design",
        "Design systems",
      ],
    },
    {
      label: "State & Data",
      skills: ["React Query", "Zustand / Redux", "REST & GraphQL", "Zod", "Supabase", "Firebase"],
    },
    {
      label: "Quality",
      skills: ["Vitest", "Playwright", "Core Web Vitals", "WCAG accessibility"],
    },
    {
      label: "Workflow",
      skills: ["Git & GitHub", "Vercel", "CI/CD", "Vite"],
    },
  ],
};
