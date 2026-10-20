import type { Project, ProjectsContent } from "@/types/content";

export const projectsContent: ProjectsContent = {
  meta: {
    title: "Selected work",
    description:
      "Explore frontend project concepts, from intuitive financial dashboards to polished ecommerce experiences.",
  },
  number: "01",
  label: "Selected work",
  title: "A few things",
  muted: "I’ve built.",
  linkLabel: "All projects",
  linkHref: "/work",
  featuredLabel: "Featured",
  pageEyebrow: "Selected work",
  pageTitle: "Built with intention.",
  pageDescription:
    "A selection of concept projects exploring the intersection of thoughtful design and modern frontend engineering.",
  filters: ["All projects", "Web applications", "E-commerce"],
  filterLabel: "Filter projects",
  allFilter: "All projects",
  caseStudy: {
    back: "Back to all projects",
    concept: "Concept project",
    overview: "Project overview",
    role: "Role: Frontend engineering & UI design",
    type: "Type: Independent concept",
    focus: "Focus: Accessibility, responsiveness & component design",
    challenge: "The challenge",
    approach: "The approach",
    highlights: "Experience highlights",
    unavailableTitle: "Project unavailable",
    unavailableDescription: "This project could not be found.",
  },
};

export const projects: readonly Project[] = [
  {
    slug: "finova",
    title: "Finova",
    subtitle: "Making finance feel effortless.",
    kind: "Web",
    category: "Web applications",
    year: "2025",
    image: {
      src: "/images/project-finova.jpg",
      width: 1200,
      height: 912,
      alt: "Finova interface preview",
    },
    caseImageAlt: "Finova interface concept",
    metric: "Lighthouse 98",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    description:
      "A concept financial dashboard that brings accounts, spending, and insights into one thoughtfully designed experience.",
    challenge:
      "Financial products can overwhelm people with disconnected information. The goal was to make complex data approachable while preserving the detail that makes it useful.",
    solution:
      "A modular interface with clear information hierarchy, accessible visualizations, consistent components, and layouts that adapt seamlessly from desktop to mobile.",
    features: [
      "Responsive account and transaction views",
      "Reusable dashboard component system",
      "Accessible charts and financial summaries",
      "Clear empty, loading, and error states",
    ],
  },
  {
    slug: "form",
    title: "Form — E-commerce",
    subtitle: "An elevated shopping experience.",
    kind: "Concept",
    category: "E-commerce",
    year: "2025",
    image: {
      src: "/images/project-form.jpg",
      width: 1200,
      height: 912,
      alt: "Form — E-commerce interface preview",
    },
    caseImageAlt: "Form — E-commerce interface concept",
    metric: "-35% bundle size",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A concept storefront for thoughtfully designed everyday essentials, bringing editorial storytelling and intuitive shopping together.",
    challenge:
      "Build a shopping experience that lets the products speak while keeping browsing, comparison, and purchasing straightforward on every device.",
    solution:
      "An image-led storefront with a restrained design system, responsive product layouts, and carefully considered interaction states throughout the shopping journey.",
    features: [
      "Responsive product discovery layouts",
      "Reusable product and collection components",
      "Accessible navigation and interactions",
      "Performance-conscious image delivery",
    ],
  },
  {
    slug: "pulse",
    title: "NovaPulse",
    subtitle: "Analytics that tell a story.",
    kind: "Web",
    category: "Web applications",
    year: "2025",
    image: {
      src: "/images/project-pulse.jpg",
      width: 1536,
      height: 960,
      alt: "NovaPulse interface preview",
    },
    caseImageAlt: "NovaPulse interface concept",
    metric: "Real-time data, 60fps",
    tags: ["React", "TypeScript", "Supabase", "Recharts"],
    description:
      "A concept analytics platform turning raw product data into clear, actionable insights with real-time updates.",
    challenge:
      "Dense metrics and live data can easily overwhelm. The goal was an interface that surfaces what matters first, without hiding the detail underneath.",
    solution:
      "A card-based dashboard with a clear visual hierarchy, streaming data via Supabase subscriptions, and charts tuned for readability at a glance.",
    features: [
      "Real-time KPI cards and trend charts",
      "Supabase-backed data layer",
      "Accessible data visualizations",
      "Responsive grid dashboard layout",
    ],
  },
  {
    slug: "atlas",
    title: "Wanderly",
    subtitle: "Travel booking, beautifully simple.",
    kind: "Web",
    category: "Web applications",
    year: "2024",
    image: {
      src: "/images/project-atlas.jpg",
      width: 1536,
      height: 960,
      alt: "Wanderly interface preview",
    },
    caseImageAlt: "Wanderly interface concept",
    metric: "Core Web Vitals: all green",
    tags: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    description:
      "A concept travel booking experience pairing destination storytelling with a fast, mobile-first booking flow.",
    challenge:
      "Booking flows often bury people in forms. The aim was to keep inspiration front and center while making reservation effortless on any device.",
    solution:
      "An image-led interface with a streamlined multi-step booking flow, Firebase authentication and storage, and layouts designed mobile-first.",
    features: [
      "Mobile-first responsive layouts",
      "Firebase auth and data storage",
      "Streamlined booking flow",
      "Optimized image delivery",
    ],
  },
  {
    slug: "docs",
    title: "NovaDocs",
    subtitle: "Documentation people actually read.",
    kind: "Web",
    category: "Web applications",
    year: "2024",
    image: {
      src: "/images/project-docs.jpg",
      width: 1536,
      height: 960,
      alt: "NovaDocs interface preview",
    },
    caseImageAlt: "NovaDocs interface concept",
    metric: "Search in <100ms",
    tags: ["Next.js", "TypeScript", "MDX", "Search"],
    description:
      "A concept developer documentation site with instant search, clear navigation, and a reading experience built for focus.",
    challenge:
      "Documentation fails when people can't find answers fast. The goal was speed, structure, and a reading experience that stays out of the way.",
    solution:
      "A content-driven architecture with MDX, client-side instant search, persistent navigation, and careful typographic rhythm.",
    features: [
      "Instant client-side search",
      "MDX content pipeline",
      "Accessible keyboard navigation",
      "Dark, focus-friendly reading theme",
    ],
  },
  {
    slug: "board",
    title: "CollabBoard",
    subtitle: "A whiteboard for distributed teams.",
    kind: "Web",
    category: "Web applications",
    year: "2024",
    image: {
      src: "/images/project-board.jpg",
      width: 1536,
      height: 960,
      alt: "CollabBoard interface preview",
    },
    caseImageAlt: "CollabBoard interface concept",
    metric: "Multiplayer, <50ms sync",
    tags: ["React", "TypeScript", "WebSockets", "Canvas"],
    description:
      "A concept real-time collaborative whiteboard with live cursors, sticky notes, and a canvas that stays smooth under pressure.",
    challenge:
      "Real-time collaboration demands both performance and clarity — every cursor, note, and edit must feel instant without visual chaos.",
    solution:
      "A canvas-based board with optimistic updates, WebSocket sync, and a restrained tool palette that keeps the focus on the content.",
    features: [
      "Real-time multiplayer cursors",
      "Canvas rendering at 60fps",
      "Optimistic UI updates",
      "Keyboard-accessible tooling",
    ],
  },
];
