import type { Project, ProjectsContent } from "@/types/content";

export const projectsContent: ProjectsContent = {
  meta: {
    title: "Selected work",
    description:
      "Selected frontend work across marketplaces, travel, operations, and consumer products — built with care for real users.",
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
    "A selection of products I’ve shipped and shaped — from marketplaces and travel tools to operations platforms.",
  filters: ["All projects", "Web applications", "Marketplaces"],
  filterLabel: "Filter projects",
  allFilter: "All projects",
  caseStudy: {
    back: "Back to all projects",
    concept: "Selected project",
    overview: "Project overview",
    role: "Role: Frontend engineering",
    type: "Type: Production product",
    focus: "Focus: Interface quality, responsiveness & component design",
    challenge: "The challenge",
    approach: "The approach",
    highlights: "Experience highlights",
    unavailableTitle: "Project unavailable",
    unavailableDescription: "This project could not be found.",
  },
};

export const projects: readonly Project[] = [
  {
    slug: "soleya",
    title: "Soleya",
    subtitle: "Salon-quality beauty, at your door.",
    kind: "Web",
    category: "Marketplaces",
    year: "2025",
    image: {
      src: "/images/projects/soleya/card.jpg",
      width: 1600,
      height: 1000,
      alt: "Soleya landing page — book beauty professionals at home",
    },
    cover: {
      src: "/images/projects/soleya/cover.jpg",
      width: 2000,
      height: 1250,
      alt: "Soleya marketplace landing page",
    },
    caseImageAlt: "Soleya marketplace landing page",
    metric: "Two-sided marketplace",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    description:
      "A two-sided marketplace for makeup artists and beauty pros — approval-gated listings, booking flows, and in-app payments.",
    challenge:
      "A beauty marketplace has to feel trustworthy for clients while giving professionals a clear path to get listed, booked, and paid.",
    solution:
      "A polished consumer landing experience paired with gated onboarding, instant and scheduled booking, and a review and dispute system.",
    features: [
      "Approval-gated professional listings",
      "Instant and scheduled booking",
      "Secure in-app payments",
      "Review and dispute flows",
    ],
  },
  {
    slug: "tripslice",
    title: "TripSlice",
    subtitle: "Turn chat chaos into travel magic.",
    kind: "Web",
    category: "Web applications",
    year: "2025",
    image: {
      src: "/images/projects/tripslice/card.jpg",
      width: 1600,
      height: 1000,
      alt: "TripSlice landing page — AI travel chat organizer",
    },
    cover: {
      src: "/images/projects/tripslice/cover.jpg",
      width: 2000,
      height: 1250,
      alt: "TripSlice AI travel organizer landing page",
    },
    caseImageAlt: "TripSlice AI travel organizer landing page",
    metric: "AI-assisted planning",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description:
      "An AI travel organizer that turns messy group chats into clear itineraries across iOS, Discord, Telegram, and the web.",
    challenge:
      "Group trip planning lives in scattered chats. The product needed to feel playful and clear while turning chaos into a usable plan.",
    solution:
      "A bold landing experience that introduces SliceBot, then drops into a chat-first app with itinerary and insights views.",
    features: [
      "Chat-first trip planning",
      "AI itinerary drafting",
      "Multi-channel entry points",
      "Trip insights dashboard",
    ],
  },
  {
    slug: "abshaar",
    title: "Abshaar",
    subtitle: "All-in-one management, powered by AI.",
    kind: "Web",
    category: "Web applications",
    year: "2025",
    image: {
      src: "/images/projects/abshaar/card.jpg",
      width: 1600,
      height: 1000,
      alt: "Abshaar landing page — AI bookkeeping for gas, c-stores and healthcare",
    },
    cover: {
      src: "/images/projects/abshaar/cover.jpg",
      width: 2000,
      height: 1250,
      alt: "Abshaar AI management platform landing page",
    },
    caseImageAlt: "Abshaar AI management platform landing page",
    metric: "Multi-industry ops",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    description:
      "An AI-powered operations platform for gas stations, convenience stores, and healthcare — bookkeeping and management in one place.",
    challenge:
      "Operators across industries need one calm interface for messy day-to-day operations, without drowning in tools.",
    solution:
      "A clear product landing that leads into a dashboard-first experience with industry-aware bookkeeping and management flows.",
    features: [
      "Industry-focused landing",
      "Dashboard-led product preview",
      "Trial and onboarding CTAs",
      "Responsive marketing layout",
    ],
  },
  {
    slug: "laundramoon",
    title: "Laundramoon",
    subtitle: "Laundry collected from your door.",
    kind: "Web",
    category: "Web applications",
    year: "2025",
    image: {
      src: "/images/projects/laundramoon/card.jpg",
      width: 1600,
      height: 1000,
      alt: "Laundramoon landing page — laundry and dry cleaning collection",
    },
    cover: {
      src: "/images/projects/laundramoon/cover.jpg",
      width: 2000,
      height: 1250,
      alt: "Laundramoon laundry service landing page",
    },
    caseImageAlt: "Laundramoon laundry service landing page",
    metric: "Doorstep collection",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description:
      "A London laundry and dry-cleaning service site with postcode availability checks and a clear path to book a collection.",
    challenge:
      "Service businesses lose bookings when availability and pricing feel unclear. The flow had to answer “can you collect from me?” first.",
    solution:
      "A conversion-led landing page with a postcode checker, strong visual proof, and a simple booking path.",
    features: [
      "Postcode availability check",
      "Service and pricing entry points",
      "Mobile-friendly booking path",
      "Clear service messaging",
    ],
  },
  {
    slug: "mk-assist",
    title: "MK Assist",
    subtitle: "Every enquiry, properly handled.",
    kind: "Web",
    category: "Web applications",
    year: "2025",
    image: {
      src: "/images/projects/mk-assist/card.jpg",
      width: 1600,
      height: 1000,
      alt: "MK Assist landing page — AI customer operations for South African businesses",
    },
    cover: {
      src: "/images/projects/mk-assist/cover.jpg",
      width: 2000,
      height: 1250,
      alt: "MK Assist AI customer operations landing page",
    },
    caseImageAlt: "MK Assist AI customer operations landing page",
    metric: "Human handover ready",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp"],
    description:
      "AI customer operations for South African SMEs — routine WhatsApp enquiries answered from approved business knowledge, with human handover when needed.",
    challenge:
      "Small teams drown in repetitive customer messages. Automation only works if answers stay accurate and handoff stays easy.",
    solution:
      "A calm product story paired with a workspace preview that shows inbox triage, AI replies, and human handover states.",
    features: [
      "WhatsApp-oriented customer ops",
      "Approved knowledge answers",
      "Human handover states",
      "SME-focused onboarding",
    ],
  },
  {
    slug: "sbre-connect",
    title: "SBRE Connect",
    subtitle: "Home and small business, one platform.",
    kind: "Web",
    category: "Web applications",
    year: "2024",
    image: {
      src: "/images/projects/sbre-connect/card.jpg",
      width: 1600,
      height: 1000,
      alt: "SBRE Connect landing page — platform for home and small business enterprises",
    },
    cover: {
      src: "/images/projects/sbre-connect/cover.jpg",
      width: 2000,
      height: 1250,
      alt: "SBRE Connect vendors platform landing page",
    },
    caseImageAlt: "SBRE Connect vendors platform landing page",
    metric: "Vendor marketplace",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description:
      "An all-in-one platform for home and small-business enterprises — property value, vendors, and growth tools in one dashboard.",
    challenge:
      "Homeowners and small businesses juggle too many tools for property and vendor work. The product needed one clear entry point.",
    solution:
      "A focused landing that routes users into clear paths — improve or maintain property — with vendor discovery close at hand.",
    features: [
      "Path-based onboarding CTAs",
      "Vendor discovery entry",
      "AI marketing automations",
      "Dashboard-led product story",
    ],
  },
  {
    slug: "autodeals",
    title: "Auto Deals",
    subtitle: "Find the right car in Pakistan.",
    kind: "Web",
    category: "Marketplaces",
    year: "2024",
    image: {
      src: "/images/projects/autodeals/card.jpg",
      width: 1600,
      height: 1000,
      alt: "Auto Deals landing page — used cars marketplace in Pakistan",
    },
    cover: {
      src: "/images/projects/autodeals/cover.jpg",
      width: 2000,
      height: 1250,
      alt: "Auto Deals automobile marketplace landing page",
    },
    caseImageAlt: "Auto Deals automobile marketplace landing page",
    metric: "Buy & sell marketplace",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "An automobile marketplace for buying and selling used and new cars and bikes across Pakistan, with a fast search-led entry.",
    challenge:
      "Car marketplaces succeed or fail on search. Filters, cities, and posting ads needed to feel instant and trustworthy.",
    solution:
      "A search-first hero with city filters, clear buy/sell messaging, and a strong post-ad call to action.",
    features: [
      "Keyword and city search",
      "Cars and bikes categories",
      "Free ad posting CTA",
      "Mobile app teaser",
    ],
  },
  {
    slug: "keychainn",
    title: "KeyChainN",
    subtitle: "Trusted free vacation exchanges.",
    kind: "Web",
    category: "Marketplaces",
    year: "2024",
    image: {
      src: "/images/projects/keychainn/card.jpg",
      width: 1600,
      height: 857,
      alt: "KeyChainN landing page — free vacation exchange network",
    },
    cover: {
      src: "/images/projects/keychainn/cover.jpg",
      width: 2000,
      height: 1150,
      alt: "KeyChainN vacation exchange landing page",
    },
    caseImageAlt: "KeyChainN vacation exchange landing page",
    metric: "Exchange network",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    description:
      "A vacation exchange network where members trade stays across mountains, beaches, and cities — book, list, and exchange with trust.",
    challenge:
      "Exchange platforms need to feel aspirational and safe at the same time. The hero had to sell the lifestyle without burying the actions.",
    solution:
      "A photo-led landing with clear paths to book, list a property, and join the community.",
    features: [
      "Destination-led hero",
      "Book and list entry points",
      "Community and trade points",
      "Trust-focused messaging",
    ],
  },
];
