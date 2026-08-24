export interface CompanyRole {
  title: string;
  duration: string;
}

export interface Company {
  slug: string;
  name: string;
  blurb: string;
  roles: CompanyRole[];
  logoPath?: string;
  website?: string;
  contributions?: string[];
  gained?: string;
  relatedCaseStudy?: string | null;
}

export const companies: Company[] = [
  {
    slug: "kora", name: "Kora Technologies", website: "https://korahq.com",
    blurb: "A pan-African payment infrastructure company enabling businesses to accept pay-ins, make payouts, and settle across payment channels throughout Africa.",
    roles: [{ title: "Frontend Developer", duration: "Jan 2022 – Jan 2023" }],
    contributions: ["Cut integration turnaround by expanding product functionality through third-party payment, geolocation, and social media APIs", "Improved site performance and user experience through database administration and architecture optimization", "Shipped accessible, responsive interfaces in TypeScript and TailwindCSS across the product"],
    gained: "Foundational experience integrating real-world payment and geolocation APIs, and working with database architecture at a growing fintech.", relatedCaseStudy: null,
  },
  {
    slug: "kakuskroll", name: "KakuSkroll Technologies", blurb: "An early-stage e-book startup that didn't ultimately scale.",
    roles: [{ title: "Creative Product Designer", duration: "Apr 2023 – Dec 2024" }],
    contributions: ["Boosted brand recognition by 10% by owning branding strategy across every platform", "Increased user retention by 15% by refining product features directly from user research insights", "Cut production time by 5% by streamlining workflows through data-driven design decisions"],
    gained: "Early experience owning brand strategy end to end and using user research directly to shape product decisions in a resource-constrained startup.", relatedCaseStudy: null,
  },
  {
    slug: "buildit", name: "BuildIt", blurb: "A software venture I co-founded, building tools for small businesses under a profit-percentage revenue model rather than flat licensing fees.",
    roles: [{ title: "Co-founder", duration: "Sept 2024 – present" }],
    contributions: ["Co-built and shipped a client-facing platform for Physiohelp, a physiotherapy service and tools trading business", "Delivered Blairsing, a portfolio site for a product manager, including custom interactive link components", "Helped structure a profit-percentage pricing model as co-founder, aligning revenue directly with client outcomes"],
    gained: "First-hand experience with the founder side of product decisions — pricing model design, client delivery, and building for varied client needs under a revenue-share arrangement.", relatedCaseStudy: null,
  },
  {
    slug: "ule-homes", name: "Ule Homes", website: "https://ulehomes.com",
    blurb: "A Nigerian proptech offering rent financing so young professionals can pay rent monthly instead of the traditional annual lump sum.",
    roles: [{ title: "Product Designer", duration: "Mar 2025 – Dec 2025" }],
    contributions: ["Lifted user engagement by 25% through a targeted redesign of key landing page sections", "Increased email open rates by creating a consistent branded template system across communications", "Improved operational workflow efficiency by 10% by designing components of the internal management system"],
    gained: "Experience designing for conversion-critical marketing surfaces and internal operational tools side by side, tying design decisions directly to measurable business outcomes.", relatedCaseStudy: null,
  },
  {
    slug: "cirra", name: "Cirra Technologies", blurb: "A crypto conversion product I helped build from the ground up — the company didn't ultimately scale, but the design and frontend work produced there stands on its own.",
    roles: [{ title: "Frontend Developer", duration: "Sept 2024 – early role" }, { title: "Creative / Product Designer", duration: "through Feb 2026" }],
    contributions: ["Drove a 60% increase in brand recognition by owning the company's entire visual identity, motion assets, and design direction as sole designer, from zero", "Lifted user retention by 10% and improved load time by leading both the design and technical build of the company website", "Set the visual and interaction standards for the mobile app by single-handedly establishing its design system — cutting delivery time across the whole team", "Architected and led delivery of a multi-module production platform (Next.js 14, TypeScript, TanStack Query, shadcn/ui) spanning Super Admin, Owners, and Broadcast modules"],
    gained: "End-to-end ownership experience — sole responsibility for an entire brand and product system, plus the technical depth of building the frontend architecture that implemented it.", relatedCaseStudy: "cirra",
  },
  {
    slug: "nexinventix", name: "Nexinventix Technologies", website: "https://nexinventix.com",
    blurb: "A digital solutions and application development company focused on crafting tailored digital transformation solutions for businesses and individuals.",
    roles: [{ title: "Operations Lead, Software Development", duration: "Mar 2025 – Dec 2025" }],
    contributions: ["Cut project cycle time by 20% by identifying and removing recurring development bottlenecks", "Increased client satisfaction and stakeholder transparency by 15% through consistent KPI tracking and reporting", "Grew new-hire productivity by 30% within six months by building and running an onboarding and mentorship program", "Coordinated a team of 8+ developers, keeping delivery on schedule through task allocation and prioritization"],
    gained: "Leadership and operations experience running a development team — task coordination, process improvement, stakeholder reporting, and mentoring.", relatedCaseStudy: null,
  },
  {
    slug: "de-verge-hub", name: "De Verge Hub", website: "https://devergehub.com",
    blurb: "A strategy-first design and marketing agency delivering brand and digital work for external clients.",
    roles: [{ title: "Lead Product Designer", duration: "Mar 2026 – present" }],
    contributions: ["Became the primary design decision-maker across client engagements, turning ambiguous briefs into shipped, brand-aligned products", "Reduced rework across client projects by defining and rolling out a standardized design-to-development workflow now used company-wide", "Owned the process end-to-end — from scope alignment with client stakeholders through implementation with developers"],
    gained: "Experience owning design decisions across multiple concurrent client engagements and formalizing a repeatable process others now follow.", relatedCaseStudy: null,
  },
  {
    slug: "community-shield", name: "Community Shield", website: "https://communityshield.africa",
    blurb: "A security coordination and incident management platform helping gated communities and corporate compounds manage access control and emergency response through a unified digital network.",
    roles: [{ title: "Lead Frontend Developer", duration: "Mar 2026 – present" }],
    contributions: ["Led frontend architecture for a multi-module production platform (Next.js 14, TypeScript, TanStack Query, shadcn/ui) covering Super Admin, Owners, and Broadcast modules", "Accelerated feature development by designing and implementing a scalable, reusable component system used across the application", "Resolved cross-team integration and data-consistency issues by partnering directly with backend engineers on API contracts, keeping high-priority releases on track"],
    gained: "Deepened frontend architecture leadership on a multi-module production platform, and strengthened cross-functional collaboration with backend engineering.", relatedCaseStudy: "community-shield",
  },
];
