import type { SkillsContent } from "@/types/content";

export const skills: SkillsContent = {
  number: "02",
  label: "My toolkit",
  title: "Good design meets\ngreat engineering.",
  description:
    "The right tools matter. Knowing when and how to use them matters more. I care about every detail, from the first pixel to the final interaction.",
  traits: ["Pixel-conscious", "Performance-driven", "Always learning"],
  core: [
    { name: "React", level: "Reusable components", icon: "react" },
    { name: "Next.js", level: "App Router · SSR / SSG", icon: "nextjs" },
    { name: "TypeScript", level: "Type-safe codebases", icon: "typescript" },
    { name: "JavaScript", level: "ES6+ fundamentals", icon: "javascript" },
    { name: "Tailwind CSS", level: "Design systems", icon: "tailwind" },
    { name: "Figma", level: "Design handoff", icon: "figma" },
  ],
  groups: [
    {
      label: "UI & Styling",
      skills: [
        "shadcn/ui",
        "Material UI",
        "Radix",
        "Framer Motion",
        "Responsive design",
        "Design systems",
      ],
    },
    {
      label: "State & Data",
      skills: ["TanStack Query", "Zustand / Redux", "Context API", "React Hook Form", "Axios", "Zod"],
    },
    {
      label: "Backend & APIs",
      skills: [
        "Node.js",
        "Next.js API routes",
        "Supabase",
        "PostgreSQL",
        "Redis",
        "FastAPI",
        "Python",
        "Firebase",
      ],
    },
    {
      label: "Integrations",
      skills: ["Stripe", "Persona KYC", "Socket.io", "GoHighLevel", "Mapbox", "Nuitee"],
    },
    {
      label: "Testing & Quality",
      skills: ["Vitest", "Playwright", "Husky", "ESLint & Prettier", "Core Web Vitals"],
    },
    {
      label: "Accessibility",
      skills: ["WCAG 2.1 AA", "Semantic HTML", "ARIA roles", "Keyboard navigation"],
    },
    {
      label: "Tools & Workflow",
      skills: ["Git & GitHub", "Vite", "Vercel"],
    },
  ],
};
