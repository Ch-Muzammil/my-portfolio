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
    role: "Role",
    type: "Type",
    focus: "Focus",
    defaultRole: "Frontend engineering",
    defaultType: "Production product",
    defaultFocus: "Interface quality, responsiveness & component design",
    challenge: "The challenge",
    approach: "The approach",
    highlights: "What I built",
    year: "Year",
    stack: "Stack",
    galleryEyebrow: "Inside the product",
    galleryTitle: "Screens from the build",
    galleryHint: "Select any screen to view it full size",
    viewScreen: "View screen",
    architectureEyebrow: "Under the hood",
    architectureTitle: "Technical architecture",
    decisionsLabel: "Key engineering decisions",
    outcomesEyebrow: "Results and takeaways",
    outcomesTitle: "Delivery & takeaways",
    deliveredLabel: "What shipped",
    lessonLabel: "Key takeaway",
    nextProject: "Keep exploring",
    moreTitle: "More work",
    viewAll: "All projects",
    visitLive: "Visit live site",
    unavailableTitle: "Project unavailable",
    unavailableDescription: "This project could not be found.",
  },
};

export const projects: readonly Project[] = [
  /*
  {
    slug: "sbre-connect",
    title: "SBRE Connect",
    subtitle: "Home and small business, one platform.",
    kind: "Web",
    category: "Marketplaces",
    year: "2026",
    liveUrl: "https://sbreconnect.com/#/",
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
    gallery: [
      {
        src: "/images/projects/sbre-connect/dashboard.jpg",
        width: 1920,
        height: 1080,
        alt: "SBRE Connect homeowner and vendor dashboards with SLA alerts and request metrics",
        title: "Role dashboards",
        caption: "Homeowner and vendor dashboards: open requests, response SLAs, and marketplace performance.",
      },
      {
        src: "/images/projects/sbre-connect/marketplace.jpg",
        width: 1920,
        height: 1080,
        alt: "SBRE Connect vendor map search and vendor request inbox with accept reply decline",
        title: "Find vendors & inbox",
        caption: "Verified vendor search on the map, then a request inbox with accept, reply, and decline against SLA.",
      },
      {
        src: "/images/projects/sbre-connect/admin.jpg",
        width: 1920,
        height: 1080,
        alt: "SBRE Connect admin configuration and vendor verification document review",
        title: "Admin ops",
        caption: "Staff verify documents, configure SLA and routing, and manage the service catalog.",
      },
    ],
    caseImageAlt: "SBRE Connect vendors platform landing page",
    metric: "Full-stack rebuild, in active development",
    tags: ["Next.js", "Supabase", "Edge Functions", "GoHighLevel", "Mapbox", "Stripe"],
    role: "Full-stack engineering",
    type: "Home-services marketplace platform",
    focus: "Schema, intent matching, lead routing & GHL",
    description:
      "A home-services marketplace in active build. Homeowners are matched with verified local vendors, vendors receive and manage inbound demand, and SBRE staff verify businesses, maintain the catalog, and operate the platform.",
    challenge:
      "The client handed over an existing site built for a different product. The interface, data model, and workflows could not support a three-sided marketplace: homeowner intent, vendor coverage, document verification, and lead routing into GoHighLevel. Extending that codebase would have preserved the wrong business. The platform needed a new schema, new flows, and a single system of record.",
    solution:
      "I am rebuilding SBRE Connect end to end as full-stack work, started in September 2026. That covers the Next.js application, a redesigned interface, Supabase Auth, Postgres tables and Row Level Security, Storage buckets for verification documents, Edge Functions and the APIs the product requires, plus GoHighLevel for CRM and communications. Homeowner requests are matched to vendor coverage and services, then routed from one vendor to the next when a lead is not accepted inside the response window.",
    features: [
      "Full product rebuild: interface, schema, tables, business logic, and user flows",
      "Three role surfaces: homeowner, vendor company, and SBRE staff",
      "Intent matching between homeowner requests and vendor services, coverage, and hours",
      "Lead routing across vendors, with GoHighLevel sync for follow-up and communications",
      "Vendor listing readiness: profile, services, coverage, hours, documents, and photos",
      "Request inbox with accept, reply, and decline against a response SLA",
      "Staff verification, taxonomy, plans, and platform configuration",
      "Supabase Auth, RLS, Storage, Edge Functions, Mapbox, and Stripe",
    ],
    highlights: [
      {
        title: "Rebuild, not a reskin",
        body: "The inherited site described a different business. I replaced the interface, database schema, table design, and operating flows so homeowner, vendor, and staff journeys share one marketplace model.",
      },
      {
        title: "Matching and lead routing",
        body: "A request is matched to vendors by service, coverage, and availability. If the first vendor does not accept inside the SLA, the lead routes to the next qualified vendor and is recorded in GoHighLevel.",
      },
      {
        title: "Supabase as the system of record",
        body: "Auth, Postgres, Row Level Security, Storage buckets, and Edge Functions are part of the delivery. Session and role come from the signed-in user. Privileged work stays on the server.",
      },
      {
        title: "Operations the staff can run",
        body: "Verification, document review, service taxonomy, SLA settings, and plan oversight live in the admin console, so catalog and trust rules are product configuration.",
      },
    ],
    architecture: {
      stack: [
        {
          label: "Application",
          items: ["Next.js 16", "React", "TypeScript", "Tailwind CSS", "Zod"],
        },
        {
          label: "Supabase",
          items: ["Auth", "Postgres & RLS", "Storage buckets", "Edge Functions", "Migrations"],
        },
        {
          label: "Integrations",
          items: ["GoHighLevel", "Mapbox", "Stripe"],
        },
        {
          label: "Quality",
          items: ["ESLint", "Typecheck", "Migration-owned schema"],
        },
      ],
      decisions: [
        {
          title: "Replace the inherited model",
          body: "Tables, policies, and flows were designed for this marketplace. The previous site’s structure was not extended, because its entities did not represent homeowners, vendors, requests, or verification.",
        },
        {
          title: "Match first, then route",
          body: "Matching uses service category, coverage area, and operating hours. Routing advances the lead to the next eligible vendor and writes the outcome to GoHighLevel so sales follow-up stays in the CRM.",
        },
        {
          title: "Privileged work on the server",
          body: "Edge Functions and server actions own webhooks, storage access, and anything that requires the service role. The browser receives only what the signed-in role is allowed to see.",
        },
        {
          title: "Schema as the contract",
          body: "Migrations are the source of truth for tables, policies, and storage. A new Supabase project is reproduced with the CLI, so development, staging, and production stay aligned.",
        },
      ],
    },
    outcomes: {
      delivered: [
        "Active full-stack rebuild of an inherited product into a three-sided marketplace",
        "Supabase Auth, schema, Row Level Security, Storage, Edge Functions, and supporting APIs",
        "Homeowner-to-vendor matching and sequential lead routing",
        "GoHighLevel integration for CRM sync and communications",
        "Vendor inbox, listing readiness, staff verification, and platform configuration",
      ],
      lesson:
        "A marketplace holds together when the data model, the routing rules, and the CRM describe the same lead. Rebuilding SBRE Connect meant designing that contract first, then implementing it across Next.js, Supabase, and GoHighLevel.",
    },
  },
  {
    slug: "soleya",
    title: "Soleya",
    subtitle: "Salon-quality beauty, at the client’s door.",
    kind: "Web",
    category: "Marketplaces",
    year: "2026",
    liveUrl: "https://app.soleyabeauty.ca/",
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
    gallery: [
      {
        src: "/images/projects/soleya/dashboard.jpg",
        width: 1920,
        height: 1080,
        alt: "Soleya freelancer dashboard — bookings, earnings, and availability",
        title: "Soleya Pro dashboard",
        caption: "Today’s bookings, CAD earnings, Stripe Connect status, and online presence in one view.",
      },
      {
        src: "/images/projects/soleya/bookings.jpg",
        width: 1920,
        height: 1080,
        alt: "Soleya incoming booking requests with accept and decline actions",
        title: "Incoming requests",
        caption: "Instant and scheduled requests with expiry windows, distance, and accept / decline.",
      },
      {
        src: "/images/projects/soleya/admin.jpg",
        width: 1920,
        height: 1080,
        alt: "Soleya admin console — platform overview, verifications, and revenue",
        title: "Admin console",
        caption: "GMV, escrow, commission, and the attention queues that need a person.",
      },
    ],
    caseImageAlt: "Soleya marketplace landing page",
    metric: "Designed & built end-to-end",
    tags: ["Next.js", "TypeScript", "Stripe", "Socket.IO", "LiveKit", "TanStack Query"],
    role: "Product UI design & frontend engineering",
    type: "Three-sided marketplace platform",
    focus: "Status-driven UX, realtime ops & payments",
    description:
      "A Montreal beauty marketplace web platform — public site, Soleya Pro for freelancers, and an admin control room for verification, payouts, and disputes. Client booking lives in the mobile apps; the web system is where professionals and operators actually run the business.",
    challenge:
      "Three roles share one product, and trust fails before the first appointment. Clients need vetted pros. Freelancers need onboarding, services, hours, travel radius, and payouts before they go online. Operators need queues for verification, disputes, and money — not spreadsheets. Navigation, money, and chat all have to follow account status: draft, pending review, approved, or restricted.",
    solution:
      "I designed the interface from scratch — no Figma handoff — then built the full frontend. Public marketing, an eight-step onboarding wizard, status-aware Soleya Pro navigation, and an admin console sit on shared tokens and modules. TanStack Query and typed API mappers own the data boundary; Socket.IO and LiveKit power chat and in-thread voice; Stripe Connect gates going online until payouts can land. Filters and tabs live in the URL so a refresh returns you to the same queue.",
    features: [
      "Original product UI — creative direction through production screens",
      "Status-aware nav (onboarding, pending, approved, restricted)",
      "Instant and scheduled bookings with accept / start / complete / no-show",
      "Realtime messaging, reactions, and LiveKit voice in-thread",
      "Stripe Connect onboarding with CAD earnings and payout release",
      "Admin queues: verification, disputes, payouts, fees & homepage CMS",
      "shadcn, Recharts, Vitest, Playwright, and Husky across the stack",
    ],
    highlights: [
      {
        title: "Status-driven access",
        body: "Navigation, routes, and dashboards follow account state — onboarding, pending review, approved, restricted — so a pro waiting on approval never sees the live job queue.",
      },
      {
        title: "Bookings & marketplace ops",
        body: "Instant offers with admin-set expiry windows, scheduled jobs, and a full accept, start, complete, and no-show lifecycle. Tabs, filters, and pages live in the URL.",
      },
      {
        title: "Realtime messaging & voice",
        body: "A socket-driven inbox with replies, reactions, edits, typing, read state, and images, plus in-app audio calls over LiveKit. Archived threads lock the composer and calls.",
      },
      {
        title: "Payments & admin control",
        body: "Stripe Connect gates going online until payouts can land. Admins verify pros, resolve disputes under refund rules, release payouts, and edit fees without a deploy.",
      },
    ],
    architecture: {
      stack: [
        {
          label: "Interface",
          items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "shadcn / Base UI", "Recharts"],
        },
        {
          label: "Data & state",
          items: ["TanStack Query", "Axios", "Zustand", "React Hook Form", "Zod"],
        },
        {
          label: "Realtime & integrations",
          items: [
            "Socket.IO",
            "LiveKit in-app audio calls",
            "Stripe Connect",
            "Mapbox",
            "S3 uploads",
            "Firebase Auth",
          ],
        },
        {
          label: "Quality",
          items: ["Vitest", "Playwright", "Husky", "ESLint", "Snyk"],
        },
      ],
      decisions: [
        {
          title: "Feature modules, thin routes",
          body: "Each domain — bookings, disputes, payouts, chat, onboarding — owns its screens, hooks, Zod schemas, query keys, and endpoint builders. Routes only route.",
        },
        {
          title: "Safe session handling",
          body: "The access token lives in memory. Refresh runs on a separate client with one shared in-flight request, so a 401 can never loop. Identity always comes from /auth/me.",
        },
        {
          title: "The URL is the state",
          body: "Tabs, filters, and pagination are parsed from the query string, so a refresh or a shared link reproduces the exact queue an admin was looking at.",
        },
        {
          title: "Rules as data",
          body: "Commission, booking fee, GST and QST, cancellation windows, payout holds, and travel radius are admin-editable settings — not constants buried in code.",
        },
      ],
    },
    outcomes: {
      delivered: [
        "Three web surfaces: the public site, Soleya Pro for freelancers, and the admin console",
        "Eight-step onboarding with documents, portfolio, services, and a Mapbox home base",
        "Booking, messaging, voice, earnings, review, and dispute flows end to end",
        "Admin queues for verification, disputes, payouts, catalog, promo codes, and homepage CMS",
        "Stripe, Mapbox, Firebase, S3, LiveKit, and sockets wired — credentials switch them on",
      ],
      lesson:
        "A marketplace scales when the same rules show up at every decision: who may go online, which tab a link opens, when a payout needs a person instead of a timer. I put those rules in modules, URLs, and admin settings — not scattered conditionals.",
    },
  },
  {
    slug: "tripslice",
    title: "TripSlice",
    subtitle: "Turn chat chaos into travel magic.",
    kind: "Web",
    category: "Web applications",
    year: "2025",
    liveUrl: "https://stagapp.tripslice.app/",
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
    gallery: [
      {
        src: "/images/projects/tripslice/dashboard.jpg",
        width: 1920,
        height: 1080,
        alt: "TripSlice dashboard — All Trips list with New Trip, filters, and plan badges",
        title: "Dashboard",
        caption: "All Trips list — search, pin/archive filters, plan badges, and leader / co-captain roles.",
      },
      {
        src: "/images/projects/tripslice/chat-slicebot.jpg",
        width: 1920,
        height: 1080,
        alt: "TripSlice trip chat with SliceBot welcome card and capability pills",
        title: "Trip chat + SliceBot",
        caption: "Trip shell with plan usage, chat, and SliceBot’s welcome card — help pills and @mention tip.",
      },
      {
        src: "/images/projects/tripslice/slicebot-places.jpg",
        width: 1920,
        height: 1080,
        alt: "SliceBot places-to-explore RAG card inside a Bali trip chat thread",
        title: "SliceBot places card",
        caption: "A @mention returns a typed places card — ratings, open/closed, maps — rendered safely in-thread.",
      },
    ],
    caseImageAlt: "TripSlice AI travel organizer landing page",
    metric: "From Lovable prototype to production",
    tags: ["Next.js", "TypeScript", "Socket.IO", "TanStack Query", "RAG"],
    role: "Frontend engineering & product hardening",
    type: "Collaborative travel workspace",
    focus: "SliceBot RAG UI, sockets, roles & production cleanup",
    description:
      "A collaborative travel workspace where group chat, itinerary, and booking intent live in one product — with trip leaders in control, SliceBot proposing drafts through a RAG pipeline, and platform staff acting through a separate console.",
    challenge:
      "The first UI arrived from Lovable: it looked fine in demos, but it was not shippable. Components were one-offs, screens needed better UX, HTML templates from SliceBot were dangerous if rendered raw, and the hard product problems — roles, sockets, plan limits, RAG cards — were still open. The app also had to stay paired with a backend teammate making API and RAG decisions in parallel.",
    solution:
      "I cleaned the codebase end to end: reusable components, typed API mappers, TanStack Query + Socket.io for trip rooms, and a permission policy that splits “can see” from “can run.” I redesigned the screens that needed better UX, sanitized and mapped SliceBot RAG payloads into safe typed cards (places, itinerary, flights, and more), and stayed close with the backend developer on contracts, draft flows, and what the UI could trust.",
    features: [
      "Production cleanup of a Lovable prototype into reusable feature modules",
      "SliceBot RAG cards in-thread — places, itinerary, flights, hotels, budget, conflicts",
      "Realtime trip chat with sockets, mentions, polls, reactions, and voice notes",
      "Role policy: one leader, up to two co-captains, sponsor draft rights",
      "Plan limits from the API — upgrade, add-on, or hard-stop modals",
      "Safe rendering of complex bot HTML / markdown via sanitization + fallbacks",
    ],
    highlights: [
      {
        title: "Prototype → production",
        body: "Took a Lovable-generated UI, stripped dead code, extracted shared primitives, redesigned weak screens, and wired a feature-based Next.js client that could ship against a real API.",
      },
      {
        title: "SliceBot as RAG UI",
        body: "Mapped bot payloads to typed cards with streaming reveal and error boundaries. Unknown shapes fall back safely. Dangerous HTML never hits the DOM raw — DOMPurify and a contract do.",
      },
      {
        title: "Authority as policy",
        body: "Every member can see “generate draft.” Only a leader or co-captain can run it, with an explicit disabled reason. One leader, at most two co-captains — enforced in client helpers and confirmed in modals.",
      },
      {
        title: "Realtime + backend partnership",
        body: "Socket.io joins trip-${id} with the bearer token for messages, drafts, plan warnings, and maintenance. I worked with the backend developer on endpoints, RAG response shapes, and what the client should refuse to guess.",
      },
    ],
    architecture: {
      stack: [
        {
          label: "Interface",
          items: ["Next.js 16", "React 18", "TypeScript", "Tailwind CSS v4", "MUI 7", "Framer Motion"],
        },
        {
          label: "Data & state",
          items: ["TanStack Query", "Axios", "Zustand", "React Hook Form", "Zod"],
        },
        {
          label: "Realtime & partners",
          items: ["Socket.IO", "Stripe", "Google Maps", "PostHog", "Sentry", "Nuitee / LiteAPI (gated)"],
        },
        {
          label: "Quality",
          items: ["ESLint", "tsc --noEmit", "Snyk", "DOMPurify"],
        },
      ],
      decisions: [
        {
          title: "One map for URLs and cache keys",
          body: "Endpoints and TanStack keys live in one place. Screens call shared hooks — a new domain like drafts or travel booking does not fork the client.",
        },
        {
          title: "Drafts stay in your hands",
          body: "A draft never lands on the trip by itself. You accept, reject, or ask for improvement — and once you accept, you can still add your own events to the itinerary. SliceBot proposes; you own the schedule.",
        },
        {
          title: "Errors resolve by type",
          body: "Failures are classified before they hit the UI — auth, plan limits, validation, network, unknown payload. Each type maps to a specific recovery path so the thread stays stable and the user always knows what to do next.",
        },
        {
          title: "Landing A/B + PostHog",
          body: "Shipped A and B landing variants and wired them through PostHog so signup funnels, CTA clicks, and experiment exposure were tracked against real traffic — not gut feel.",
        },
      ],
    },
    outcomes: {
      delivered: [
        "Signed-in workspace: dashboard, trip chat, itinerary, members, sharing, billing, and support",
        "SliceBot cards in-thread with draft review, places, conflicts, and insights",
        "Role-gated trip control plus public join, magic invites, and shared itinerary tokens",
        "Stripe billing with sponsors and add-ons; plan-limit modals driven by API data",
        "Platform lock states for suspension and maintenance landing in the user app",
      ],
      lesson:
        "A collaborative product scales when authority is a policy, not a hidden if — and when AI stays on the propose side of that line. Shipping TripSlice also meant treating a generated UI as a starting point, not a finished product: clean it, harden it, and only then trust it with sockets, RAG cards, and money.",
    },
  },
  {
    slug: "abshaar",
    title: "Abshaar",
    subtitle: "All-in-one management, powered by AI.",
    kind: "Web",
    category: "Web applications",
    year: "2025",
    liveUrl: "https://stagapp.abshaar.com/",
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
    gallery: [
      {
        src: "/images/projects/abshaar/dashboard.jpg",
        width: 1920,
        height: 1080,
        alt: "Abshaar business owner dashboard with period filters and onboarding progress",
        title: "Owner dashboard",
        caption: "Owner cockpit — period filters, setup progress, revenue and cash overview in one shell.",
      },
      {
        src: "/images/projects/abshaar/transactions-gallery.jpg",
        width: 1920,
        height: 1080,
        alt: "Abshaar AI transaction review with engine scores and classification detail",
        title: "AI transaction review",
        caption: "Bank feeds classified by multiple engines — confidence, reasoning, and a clear review trail.",
      },
      {
        src: "/images/projects/abshaar/coa.jpg",
        width: 1920,
        height: 1080,
        alt: "Abshaar chart of accounts flow — hierarchy table and add-under-parent account modal",
        title: "Chart of accounts",
        caption: "COA hierarchy plus add-under-parent — nest accounts without turning the tree into chaos.",
      },
    ],
    caseImageAlt: "Abshaar AI management platform landing page",
    metric: "Figma → multi-role production UI",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "RTK Query", "Plaid", "Stripe", "Socket.IO"],
    role: "Frontend engineering — Figma to production UI",
    type: "Multi-tenant financial operations platform",
    focus: "Multi-role RBAC, COA hierarchy & AI review UX",
    description:
      "A multi-tenant financial ops SPA for gas / C-store owners and their floor teams, CPA firms and bookkeepers, and platform super admins — bank link, AI transaction review, reconciliation, and retail close in one authenticated product.",
    challenge:
      "Owners, managers, cashiers, CPAs, and bookkeepers each need different nav and permissions — not one admin screen with hidden buttons. Bank → books has to be one pipeline (Plaid, AI classify, reconcile). Firm staff switch into a client business context. Onboarding must be resumable. Shift close, lottery, and inventory cannot be bolted on after accounting.",
    solution:
      "I converted the Figma into a React + Tailwind production UI with reusable components and role-prefixed shells. Seven-plus roles share one SPA: owners and their team, firm desks, floor ops, and super admin — gated by role routes and ME-API module codes. The hard UI problems — COA parent/child hierarchy and a clean transactions review surface — stayed readable under dense retail and firm workflows.",
    features: [
      "Figma → React/Tailwind UI with shared form, table, and layout primitives",
      "7–8 roles with role-prefixed routes and module-level permission codes",
      "Multi-tenant business context for firm staff working inside a client",
      "Chart of Accounts hierarchy — nest under parent, expand/collapse, system tags",
      "AI transaction review with engine scores, confidence, and classification detail",
      "Plaid bank link, Stripe billing, Socket.IO chat and background jobs",
      "Onboarding gates: plan → Stripe → Fast/Comprehensive financial setup",
    ],
    highlights: [
      {
        title: "Figma to shippable UI",
        body: "Took the provided Figma, built reusable Tailwind components, and shipped role shells that match the design system without one-off screen debt.",
      },
      {
        title: "Roles own the routes",
        body: "Business, CPA, bookkeeper, Abshaar Manager, cashier, and super admin each land in their own prefix. Nav is generated from role + MODULE_CODES — not a single mega-menu.",
      },
      {
        title: "COA hierarchy without chaos",
        body: "Parent/child sections, system accounts, expand/collapse, and add-under-parent were the hardest UI surface. Kept the tree scannable for owners and firm staff alike.",
      },
      {
        title: "AI review that stays honest",
        body: "Transaction review shows multi-engine confidence and reasoning so a human can accept, override, or dig into classification detail — not a black-box badge.",
      },
    ],
    architecture: {
      stack: [
        {
          label: "Interface",
          items: ["React 18", "TypeScript", "Vite", "Tailwind CSS v4", "Recharts", "FullCalendar", "TipTap"],
        },
        {
          label: "Data & state",
          items: ["Redux Toolkit", "RTK Query (main + AI)", "Redux Persist", "Formik", "Yup"],
        },
        {
          label: "Integrations",
          items: ["Plaid Link", "Stripe Elements", "Socket.IO", "Google / Microsoft OAuth"],
        },
        {
          label: "Quality",
          items: ["ESLint", "Husky", "lint-staged", "Vitest", "Playwright"],
        },
      ],
      decisions: [
        {
          title: "One SPA, many role shells",
          body: "After auth, users land in role-prefixed areas. Layouts and nav configs own the chrome; screens stay colocated under pages/Admin/{role}.",
        },
        {
          title: "Dual API seams",
          body: "Main REST traffic and AI classification use separate RTK Query bases so deploy hosts and failure modes stay decoupled.",
        },
        {
          title: "Modules own permissions",
          body: "ME API module codes gate firm and manager screens. New routes attach a code — they do not rewrite auth.",
        },
        {
          title: "Integrations own seams",
          body: "Plaid, Stripe, and Socket.IO jobs are first-class client seams. Credentials activate an already complete architecture — they do not force a rewrite.",
        },
      ],
    },
    outcomes: {
      delivered: [
        "Multi-role product shell for owners, firm staff, floor ops, and super admin",
        "Onboarding (fast/comprehensive), Plaid, Stripe, AI classification, and reconciliation UX",
        "COA hierarchy and transaction review screens designed for dense, real ops data",
        "Permission-aware navigation aligned to the ME-API module model",
        "Static Vite SPA with staging/production modes ready for Apache hosting",
      ],
      lesson:
        "Multi-role fintech UIs fail when every persona shares one settings mental model. Abshaar scales because roles own routes, modules own permissions, and integrations own seams — so the product can grow screens without growing chaos.",
    },
  },
  {
    slug: "mk-assist",
    title: "MK Assist",
    subtitle: "Every enquiry, properly handled.",
    kind: "Web",
    category: "Web applications",
    year: "2025",
    liveUrl: "https://mkassist.co.za/",
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
    gallery: [
      {
        src: "/images/projects/mk-assist/dashboard.jpg",
        width: 1920,
        height: 1080,
        alt: "MK Assist business overview with WhatsApp status and conversation metrics",
        title: "Business overview",
        caption: "Owner cockpit — AI on/off, WhatsApp status, and conversation metrics in one shell.",
      },
      {
        src: "/images/projects/mk-assist/conversations.jpg",
        width: 1920,
        height: 1080,
        alt: "MK Assist WhatsApp inbox with AI replies and take-over controls",
        title: "Conversations",
        caption: "WhatsApp inbox with AI replies — take over, pause AI, or resolve without leaving the thread.",
      },
      {
        src: "/images/projects/mk-assist/knowledge.jpg",
        width: 1920,
        height: 1080,
        alt: "MK Assist knowledge base and analytics with conversation volume chart",
        title: "Knowledge & analytics",
        caption: "Approved FAQs power answers; analytics show what AI handled vs what needed a human.",
      },
    ],
    caseImageAlt: "MK Assist AI customer operations landing page",
    metric: "AI answers, humans take over",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.IO", "WhatsApp"],
    role: "Frontend engineering",
    type: "AI customer operations platform",
    focus: "WhatsApp inbox, knowledge base & human handover",
    description:
      "AI customer operations for South African businesses — connect WhatsApp, train an assistant from approved knowledge, auto-answer routine questions, and hand threads to human agents when needed.",
    challenge:
      "Small teams drown in repetitive WhatsApp enquiries. Automation only works if answers stay on approved knowledge, handover to a person is one click, and business / agent / admin each get the right workspace — not one inbox with hidden buttons.",
    solution:
      "I built the Next.js frontend across marketing, a seven-step onboarding wizard, and three role shells (business, agent, super admin). A same-origin BFF proxy keeps tokens off the browser’s direct backend path; Socket.IO patches conversations and notifications live. Take-over pauses AI; resolve closes the thread; resume returns it to the assistant.",
    features: [
      "Three surfaces: marketing, onboarding, and role workspaces",
      "Seven-step onboarding — knowledge, behaviour, team handover, WhatsApp Embedded Signup",
      "Business inbox with take over / pause AI / resume / resolve",
      "Knowledge base FAQs and docs that ground AI answers",
      "Agent handover queue with claim, reply, and closed threads",
      "Super admin: businesses, users, audit log, WhatsApp mapping",
      "Realtime sockets for conversations and notifications",
    ],
    highlights: [
      {
        title: "Roles own the workspace",
        body: "Business owners run the tenant, agents claim handoffs, super admins operate the platform — each lands in a dedicated shell with its own nav and gates.",
      },
      {
        title: "AI with a human exit",
        body: "MK Assist answers from the knowledge base. One take-over pauses the bot; resolve closes the thread; resume puts AI back in charge without losing context.",
      },
      {
        title: "Onboarding that finishes",
        body: "Seven resumable steps from business profile through knowledge, behaviour, team handover, WhatsApp connect, and test-and-submit — with Embedded Signup status paths handled in UI.",
      },
      {
        title: "BFF + sockets",
        body: "Axios hits same-origin /api/v1; the App Router proxies to the backend. Socket.IO joins the API origin for live inbox and notification patches.",
      },
    ],
    architecture: {
      stack: [
        {
          label: "Interface",
          items: ["Next.js 16 App Router", "React 19", "TypeScript", "Tailwind CSS v4", "shadcn / Base UI"],
        },
        {
          label: "Data & forms",
          items: ["Axios BFF proxy", "Formik", "Yup", "React Context + hooks"],
        },
        {
          label: "Realtime & channels",
          items: ["Socket.IO", "WhatsApp Business", "Meta Embedded Signup"],
        },
        {
          label: "Quality",
          items: ["Vitest", "ESLint"],
        },
      ],
      decisions: [
        {
          title: "Same-origin BFF",
          body: "The browser never calls the backend host for HTTP. Axios goes to /api/v1; the Next proxy forwards — refresh stays on an httpOnly cookie path.",
        },
        {
          title: "Knowledge before answers",
          body: "AI replies are grounded in the business knowledge base. Gaps surface as questions needing knowledge — not invented copy.",
        },
        {
          title: "Handover is a first-class state",
          body: "Take-over, pause-all, resume AI, and resolve are explicit actions in the inbox and agent queue — not a side drawer afterthought.",
        },
        {
          title: "Container → view",
          body: "API modules and mappers feed container hooks; presentational views stay thin. Sockets patch conversation state in place without a full refetch.",
        },
      ],
    },
    outcomes: {
      delivered: [
        "Marketing site plus business, agent, and super-admin workspaces",
        "Seven-step onboarding with WhatsApp Embedded Signup status paths",
        "Realtime conversation inbox with AI take-over and resume",
        "Knowledge base, analytics, team, billing, and activity surfaces",
        "POPIA-oriented legal centre and cookie consent on the root layout",
      ],
      lesson:
        "Customer-ops AI earns trust when the product makes the human exit obvious. MK Assist scales because knowledge owns answers, roles own routes, and handover is a state — not a panic button buried in settings.",
    },
  },
  {
    slug: "keychainn",
    title: "KeyChainN",
    subtitle: "Trusted free vacation exchanges.",
    kind: "Web",
    category: "Marketplaces",
    year: "2025",
    liveUrl: "https://keychainn.com/",
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
    metric: "In production",
    tags: ["React", "Socket.IO", "Stripe Connect", "Figma"],
    role: "Frontend engineering",
    type: "Points-based vacation exchange",
    focus: "Listings, points booking, verification & realtime chat",
    description:
      "A production vacation-exchange platform. Members list homes with full property detail, book other stays with points, and pay only for optional extras. Identity and property ownership are verified before a listing goes live.",
    challenge:
      "A vacation exchange only works when availability, trust, and payment rules are visible at the moment of booking. Members needed to list a property and stay in someone else’s home from the same account. Dates already taken had to be blocked. Stays had to settle in points, while add-on services still needed real payment. Check-in and check-out needed a formal way to raise a dispute, and conversation about a stay had to stay live.",
    solution:
      "Figma was provided. In 2025 I converted it into the React product, now in production, and implemented the API, onboarding, and realtime layers. A member receives 128 points at signup, can buy more, and books stays against those points. The booking calendar shows blocked dates before a request is confirmed. Persona verification and a property-verification queue gate who can list. Stripe Connect collects payment for extra services. Socket.IO carries in-product chat. Members who hold more than one role switch dashboards from their own account, including admin.",
    features: [
      "Figma-to-production React UI, onboarding, and API integration",
      "Property listings with amenities, pricing, and stay detail",
      "Booking calendar that shows dates already reserved",
      "Points ledger: 128 points on signup, point purchases, and point-based stays",
      "Persona verification and a property-verification queue",
      "Stripe Connect for paid extra services",
      "Check-in and check-out conflicts raised by the host or the guest",
      "Realtime chat over sockets, with role switching from the dashboard",
    ],
    highlights: [
      {
        title: "List and stay in one account",
        body: "A member publishes a home and redeems points for other properties. The same account covers both sides of the exchange, with a dashboard switch when the member also holds an operational role.",
      },
      {
        title: "Points for the stay, payment for extras",
        body: "Signup grants 128 points. Stays are confirmed against the points balance, and additional points can be purchased. Optional services are charged through Stripe Connect.",
      },
      {
        title: "Availability and verification before trust",
        body: "The booking view marks dates that are already reserved. Persona checks and a property-verification list confirm the member and the home before the listing is treated as trusted.",
      },
      {
        title: "Conflicts and live conversation",
        body: "At check-in or check-out, the host or the guest can open a conflict on the stay. Socket.IO keeps the conversation attached to the booking so the dispute is not handled in a separate inbox.",
      },
    ],
    architecture: {
      stack: [
        {
          label: "Interface",
          items: ["React", "Figma-to-UI implementation", "Role-aware dashboards"],
        },
        {
          label: "Product systems",
          items: ["Points ledger", "Availability calendar", "Verification queues", "Conflict flow"],
        },
        {
          label: "Integrations",
          items: ["REST API", "Socket.IO", "Stripe Connect"],
        },
      ],
      decisions: [
        {
          title: "Points are the booking currency",
          body: "The stay itself is reserved from the member’s points balance. Card payment is reserved for extra services and for buying additional points, through Stripe Connect.",
        },
        {
          title: "Blocked dates are part of the booking step",
          body: "Reserved ranges are shown before confirmation, so a member sees which nights are already taken and selects only open dates.",
        },
        {
          title: "Verification is a queue, not a badge",
          body: "Persona checks and property-ownership review are explicit states. A listing becomes trusted after those reviews, which keeps the public catalog aligned with the admin queue.",
        },
        {
          title: "One account, several roles",
          body: "Role switching lives in the signed-in dashboard. A member can move between listing, traveling, and admin without a second login.",
        },
      ],
    },
    outcomes: {
      delivered: [
        "Production vacation exchange at keychainn.com, shipped in 2025",
        "Property listings, blocked-date booking, and a points ledger with signup credit and purchases",
        "Persona and property verification, plus check-in and check-out conflicts",
        "Stripe Connect for paid extras and Socket.IO chat on the stay",
        "Multi-role access with dashboard role switching, including admin",
      ],
      lesson:
        "An exchange stays credible when the calendar, the points balance, and the verification state agree before a stay is confirmed. KeyChainN puts those rules in the booking flow, and keeps payment, disputes, and chat attached to the same reservation.",
    },
  },
  */
  {
    slug: "meridian-dispatch",
    title: "Meridian Dispatch Group",
    subtitle: "The freight office, on the web.",
    kind: "Web",
    category: "Web applications",
    year: "2026",
    liveUrl: "https://meridian-dispatch-puce.vercel.app/",
    image: {
      src: "/images/projects/meridian-dispatch/card.jpg",
      width: 1600,
      height: 1000,
      alt: "Meridian Dispatch Group public website — truck dispatching for US carriers",
    },
    cover: {
      src: "/images/projects/meridian-dispatch/cover.jpg",
      width: 2000,
      height: 1250,
      alt: "Meridian Dispatch Group landing page hero",
    },
    gallery: [
      {
        src: "/images/projects/meridian-dispatch/dashboard.jpg",
        width: 1888,
        height: 873,
        alt: "Meridian admin dashboard with quote, follow-up, hiring, and content metrics",
        title: "Operations dashboard",
        caption:
          "An overview of quote requests, job applications, and content activity, giving staff a central place to review the system's current state.",
      },
      {
        src: "/images/projects/meridian-dispatch/services.jpg",
        width: 1899,
        height: 877,
        alt: "Meridian Dispatch services index with dry van, reefer, flatbed, and power-only desks",
        title: "Dispatch services",
        caption:
          "A service directory presenting the company's dispatch offerings, including dry van, reefer, flatbed, and power-only services.",
      },
      {
        src: "/images/projects/meridian-dispatch/quotes.jpg",
        width: 1881,
        height: 876,
        alt: "Meridian quote requests inbox with status filters and lead rows",
        title: "Quote management",
        caption:
          "A centralized view of incoming quote requests, with status filters and lead records to support follow-ups and ongoing management.",
      },
    ],
    caseImageAlt: "Meridian Dispatch Group website and admin portal",
    metric: "Public site + internal portal",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zod"],
    role: "Full-stack development",
    type: "Website & operations portal",
    focus: "Marketing website, lead management, hiring & CMS",
    description:
      "A website and internal operations portal for a US truck-dispatch company. Carriers can submit quote requests, candidates can apply for open positions, and staff can manage leads, hiring, and website content from a single authenticated admin portal. The application uses Supabase for authentication, data storage, and content management.",
    challenge:
      "A truck-dispatch company needs a reliable way to attract carriers, receive inquiries, and manage its day-to-day operations. The public website needs to explain services, collect quote requests, and handle job applications. Meanwhile, staff need a way to track incoming leads, manage applications, and update website content without relying on a developer for every change. Without a centralized system, these tasks can become fragmented across website forms, inboxes, and spreadsheets, making it harder to keep information organized and up to date.",
    solution:
      "I built a single application with a public-facing website and an authenticated admin portal. The public website includes the home page, company information, six service pages, careers, a blog, FAQs, contact information, and legal pages. Visitors can submit quote requests and job applications directly through the site. The admin portal gives staff a central place to manage quote requests, job applications, and website content. It includes a dashboard, lead and hiring workflows, and a CMS for services, careers, blog posts, FAQs, pages, and website settings. Supabase powers authentication, PostgreSQL data storage, and file storage for resumes and media. Row-level security (RLS) policies separate public access from staff-only operations, allowing visitors to access published content and submit forms while restricting administrative actions to authorized users. Staff sign in using email and password authentication. Public account registration is not available.",
    features: [
      "Public marketing site with CMS-driven services, careers, blog, FAQs, and pages",
      "Quote-request form that creates tracked leads with equipment, fleet size, and status",
      "Careers funnel with open roles, applications, resume upload, and hiring statuses",
      "Admin dashboard with metrics derived from quote, application, and content records",
      "CMS for services, jobs, articles, FAQs, pages, business details, and SEO settings",
      "Staff account surface for profile, password, optional 2FA, and session management",
    ],
    highlights: [
      {
        title: "One application, two interfaces",
        body: "The public website and admin portal use the same underlying data. Visitors can explore services and submit inquiries, while staff can review those submissions and manage website content through the admin interface. This keeps public-facing information and internal operations connected instead of maintaining separate systems.",
      },
      {
        title: "Lead and application management",
        body: "Quote requests and job applications are stored in the database rather than handled exclusively through email links. Staff can review submissions, update their statuses, assign ownership, add notes, and track follow-ups from one place.",
      },
      {
        title: "Content management without redeployment",
        body: "The CMS allows staff to manage services, job listings, blog posts, FAQs, website pages, contact details, business hours, and SEO settings. Content can be published, updated, or archived through the admin portal, with changes reflected on the public website without requiring a new deployment for routine content updates.",
      },
      {
        title: "A clearly defined product scope",
        body: "The application covers the company's public website and its internal tools for managing website content, leads, and hiring. It is not a transportation management system (TMS). Features such as load-board integrations, GPS tracking, invoicing, and carrier-facing operational accounts are outside the scope of this project.",
      },
    ],
    architecture: {
      stack: [
        {
          label: "Application",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod"],
        },
        {
          label: "Backend & data",
          items: ["Supabase Auth", "PostgreSQL", "Supabase Storage", "Row-level security (RLS)"],
        },
        {
          label: "Application interfaces",
          items: ["Public marketing website", "Authenticated admin portal"],
        },
        {
          label: "Core workflows",
          items: ["Quote requests", "Job applications", "Resume uploads", "Content management"],
        },
      ],
      decisions: [
        {
          title: "Separating public and administrative access",
          body: "Public users can access published content and submit quote requests or job applications. Administrative operations, including content management, pipeline updates, and website settings, are restricted to authorized staff through authentication and database access policies. This keeps public interactions accessible while protecting internal business data and administrative functionality.",
        },
        {
          title: "Centralized file storage",
          body: "Resumes and website media are stored in Supabase Storage rather than being embedded directly in database records. This allows staff to access application files and reuse uploaded media across services and blog content, while keeping file management separate from the application's structured data.",
        },
        {
          title: "Dashboard metrics from live data",
          body: "Dashboard metrics are derived from database records for quote requests, job applications, and website content rather than hardcoded sample values. As records change, the dashboard reflects the underlying data, giving staff a more useful overview of current activity.",
        },
        {
          title: "Configuration-driven website settings",
          body: "Business details, contact numbers, operating hours, navigation visibility, SEO settings, and maintenance mode are managed through website settings. This reduces the need for code changes when staff need to update routine website configuration.",
        },
      ],
    },
    outcomes: {
      delivered: [
        "A public website covering company information, services, careers, blog posts, FAQs, contact details, and legal pages",
        "An authenticated admin portal with a dashboard, quote-request management, and job-application workflows",
        "A CMS for managing website content, business information, and SEO settings",
        "Supabase-backed authentication, database records, file storage, and access-control policies",
        "A shared application architecture connecting public forms, internal workflows, and published content",
      ],
      lesson:
        "A business website becomes more useful when it connects directly to the workflows behind it. By bringing quote requests, job applications, and content management into one application, Meridian gives staff a centralized place to manage both incoming inquiries and the public website.",
    },
  },
  {
    slug: "laundramoon",
    title: "Laundramoon",
    subtitle: "Laundry collected from your door.",
    kind: "Web",
    category: "Web applications",
    year: "2024",
    liveUrl: "https://www.laundramoon.com/",
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
    metric: "Coverage-first booking",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
    role: "Frontend engineering",
    type: "Laundry pickup and delivery site",
    focus: "Postcode coverage, service catalog & booking path",
    description:
      "The public site for a London laundry and dry-cleaning service, trusted since 1978. Customers check whether their address is covered, compare fourteen services and their prices, and book a doorstep collection.",
    challenge:
      "A long-running local service was easy to misunderstand online. Coverage is limited to parts of London, prices differ by garment, and turnaround is not the same for a shirt and a wedding dress. The site had to answer coverage and price before asking anyone to book, and it had to serve households and commercial accounts without turning the catalog into a single undifferentiated list.",
    solution:
      "Figma was provided. I converted it into the Next.js site in 2024. The first action on the homepage is a postcode and address check. Services are grouped — everyday laundry, specialist garments, home and bulky items, repairs — and each one has its own price list. Save My Time lets a customer bag everything and approve the price after sorting. How it works explains both the one-hour collection window and the six-stage care route, from sort and eco clean through press, quality check, and delivery.",
    features: [
      "Figma converted into the production Next.js interface",
      "Postcode and address coverage check before booking",
      "Fourteen services, from wash-dry-fold and dry cleaning to couture, leather, rugs, and alterations",
      "Per-service price lists, with a £20 minimum and a Save My Time deposit path",
      "One-hour collection windows and a six-step care roadmap",
      "Commercial laundry for hotels, restaurants, clinics, and other London operators",
      "Area pages for West, Central, and South West London",
      "App download, partner proof, and published customer reviews",
    ],
    highlights: [
      {
        title: "Coverage before commitment",
        body: "The homepage asks for a postcode or address first. A customer learns whether collection is available in their part of London before they choose a service or a slot.",
      },
      {
        title: "A catalog with prices attached",
        body: "Everyday wash, ironing, dry cleaning, wedding dresses, sarees and lehengas, leather, duvets, curtains, rugs, trainers, and alterations each have a detail page and a price list. Most orders return within 24 hours. Alterations, leather, fur, and suede carry longer times on the page.",
      },
      {
        title: "Save My Time",
        body: "Customers can skip itemising. They place everything in one bag, pay a £20 deposit, and approve the invoice after the garments are sorted into the right service.",
      },
      {
        title: "Household and commercial on one site",
        body: "The same system explains doorstep collection for homes and scheduled linen, uniform, and towel work for businesses, including hotel and NHS partnerships shown on the site.",
      },
    ],
    architecture: {
      stack: [
        {
          label: "Interface",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma-to-UI implementation"],
        },
        {
          label: "Content model",
          items: ["Service pages", "Price lists", "Location pages", "How it works"],
        },
      ],
      decisions: [
        {
          title: "Check the area first",
          body: "Collection is not citywide for every address. The coverage field sits above the service story so the booking path starts with a yes or no.",
        },
        {
          title: "One template, many services",
          body: "Each service reuses the same structure: what is included, who it is for, turnaround, and a linked price list. New garments do not require a new page design.",
        },
        {
          title: "Two ways to price",
          body: "Customers can read the list and book known items, or use Save My Time and confirm the total after inspection. Both paths are stated before checkout.",
        },
        {
          title: "Care is part of the page, not a footnote",
          body: "The six-step roadmap — collect, sort, eco clean, press, quality check, deliver — is a first-class page, so the operational promise is visible without opening the booking form.",
        },
      ],
    },
    outcomes: {
      delivered: [
        "Live marketing and booking site at laundramoon.com",
        "Coverage check, fourteen-service catalog, and per-service price lists",
        "Save My Time booking path with price approval after sorting",
        "How-it-works roadmap, commercial laundry, and London area pages",
        "App, partner, and review sections aligned with the same booking story",
      ],
      lesson:
        "A service site converts when the constraint is on the first screen. For Laundramoon that constraint is the postcode. Price, turnaround, and the care route only matter after the address is inside the collection area.",
    },
  },
  {
    slug: "autodeals",
    title: "Auto Deals",
    subtitle: "Find the right car in Pakistan.",
    kind: "Web",
    category: "Marketplaces",
    year: "2024",
    liveUrl: "https://autodeals.pk/",
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
    metric: "Pakistan auto marketplace",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Frontend engineering",
    type: "Automotive marketplace",
    focus: "Listings, paid ads, finance & import tools",
    description:
      "A Pakistan marketplace for new and used cars and bikes. Sellers post normal or premium ads, buyers search by city and make, and the same product covers parts, insurance, bank finance, fuel prices, and import tools.",
    challenge:
      "Buying a vehicle in Pakistan is more than a classifieds list. A buyer needs the listing, a way to judge a Japanese import, a finance quote from a local bank, the current fuel price, and a duty estimate before the car lands. Sellers need a free post and a paid way to feature it. Those jobs usually sit on different sites.",
    solution:
      "I built the Auto Deals web experience in Next.js. Cars and bikes, new and used, share one search. Members post ads in a normal or premium range, and featured placement is paid through local Pakistani banks. Around the listings, the site sells auction-sheet verification, offers car insurance and bank finance, publishes fuel prices, and includes a custom-duty calculator, a vehicle tracker, spare parts, and a blog.",
    features: [
      "New and used car and bike listings, browsable by make, city, and body type",
      "User-posted ads in normal and premium ranges, with featured placement paid through local banks",
      "Spare parts, vehicle insurance, and car finance with partner banks",
      "Fuel-price board and a car-loan calculator",
      "Auction-sheet verification sold by chassis number, with translation",
      "Custom-duty calculator, vehicle tracker, and editorial blog",
      "Live auction bids alongside the classified inventory",
    ],
    highlights: [
      {
        title: "One inventory, two ad tiers",
        body: "Sellers list a car or bike as a standard ad or a premium featured ad. Featured placement is a paid product, settled through local banks, so promotion stays inside the marketplace.",
      },
      {
        title: "Search across new and used",
        body: "Used stock, featured new models, and bikes share the same entry. Filters follow make and city, including Lahore, Karachi, Islamabad, and the other major markets.",
      },
      {
        title: "Finance and insurance beside the listing",
        body: "A buyer can enquire for bank finance on a new or used car, compare tenure and down payment, and reach insurance from the same product. The finance desk works with local partners including HBL, UBL, Faysal Bank, Dubai Islamic Bank, and Bank Al Baraka.",
      },
      {
        title: "Import tools for Japanese cars",
        body: "Auction-sheet verification, a custom-duty calculator, and a tracker sit next to the listings, so an imported car can be checked, priced, and followed before it is bought.",
      },
    ],
    architecture: {
      stack: [
        {
          label: "Interface",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          label: "Marketplace surfaces",
          items: ["Listings", "Featured ads", "Parts", "Blog"],
        },
        {
          label: "Tools",
          items: ["Auction sheets", "Duty calculator", "Loan calculator", "Fuel prices"],
        },
      ],
      decisions: [
        {
          title: "Listings stay the front door",
          body: "Search for a car or bike is the first action. Finance, insurance, parts, and import tools are reached from that same shell, so a buyer does not start over on another domain.",
        },
        {
          title: "Premium is a paid placement",
          body: "Normal and premium ranges are separate products. Featured ads are purchased through local bank payment, which keeps promotion visible and accounted for.",
        },
        {
          title: "Tools answer a buying question",
          body: "Auction sheets, duty, fuel, and loan figures are calculators and lookups tied to a purchase decision, not a separate content site.",
        },
        {
          title: "Cities and makes are first-class routes",
          body: "Inventory is addressed by manufacturer and by city, so a search for Toyota in Lahore is a stable page, not only a filter that disappears on refresh.",
        },
      ],
    },
    outcomes: {
      delivered: [
        "Live marketplace at autodeals.pk for new and used cars and bikes",
        "Member-posted ads with normal and premium ranges, featured ads paid via local banks",
        "Spare parts, insurance, car finance, and a published fuel-price board",
        "Auction-sheet sales, a vehicle tracker, a blog, and a custom-duty calculator",
        "City and make browsing, with live auction inventory on the same product",
      ],
      lesson:
        "An auto marketplace in Pakistan earns the second visit when the listing, the bank offer, and the import check describe the same car. Auto Deals keeps those steps in one product, from the ad a seller posts to the duty figure a buyer runs before they commit.",
    },
  },
];
