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
    roles: [{ title: "Frontend Developer", duration: "April 2023 - January 2024" }],
    contributions: ["Contributed frontend implementation to Kora's payouts product as part of the payouts squad", "Built and refined responsive interfaces supporting payout workflows for users and businesses", "Collaborated with the product team to improve existing payout experiences and frontend functionality"],
    gained: "Experience building reusable interfaces for financial workflows and collaborating closely with product and design teams.", relatedCaseStudy: null,
  },
  {
    slug: "the-curve-africa", name: "The Curve Africa", blurb: "A frontend learning and development environment where I built foundational engineering experience.",
    roles: [{ title: "Frontend Intern", duration: "September 2022 - March 2023" }],
    contributions: ["Built web application interfaces while developing foundational frontend engineering skills", "Worked with JavaScript, React, HTML, and CSS to translate designs into functional web experiences"],
    gained: "Foundational experience translating designs into responsive frontend interfaces.", relatedCaseStudy: null,
  },
  {
    slug: "kakuskroll", name: "KakuSkroll Technologies", blurb: "An early-stage e-book startup that didn't ultimately scale.",
    roles: [{ title: "Product Designer", duration: "September 2024 - October 2025" }],
    contributions: ["Designed KakuSkroll's author dashboard for managing and publishing e-book content", "Designed the reader dashboard and digital-library experience for centralized e-book access", "Defined the product architecture connecting author publishing and reader consumption workflows"],
    gained: "Experience structuring connected publishing and reading experiences across a digital product.", relatedCaseStudy: null,
  },
  {
    slug: "buildit", name: "BuildIt", blurb: "A software venture I co-founded, building tools for small businesses under a profit-percentage revenue model rather than flat licensing fees.",
    roles: [{ title: "Co-founder", duration: "September 2024 - Present (Part-time)" }],
    contributions: ["Co-founded a software studio serving small businesses through a profit-percentage delivery model", "Designed and built Rukkyman, a portfolio website for a filmmaker", "Delivered product and frontend enhancements for Physiohelp, including the appointment-booking experience"],
    gained: "First-hand experience across client requirements, product design, frontend development, and delivery.", relatedCaseStudy: null,
  },
  {
    slug: "ule-homes", name: "Ule Homes", website: "https://ulehomes.com",
    blurb: "A Nigerian proptech offering rent financing so young professionals can pay rent monthly instead of the traditional annual lump sum.",
    roles: [{ title: "Product Designer", duration: "March 2025 - December 2025" }],
    contributions: ["Designed the landing page for Loft by Ule, a rental apartment service", "Designed the internal staff-management system, including dashboards, application states, and operational views", "Designed transactional and marketing email experiences alongside supporting brand assets"],
    gained: "Experience designing marketing surfaces and internal operational tools side by side.", relatedCaseStudy: null,
  },
  {
    slug: "cirra", name: "Cirra Technologies", blurb: "A crypto conversion product I helped build from the ground up — the company didn't ultimately scale, but the design and frontend work produced there stands on its own.",
    roles: [{ title: "Frontend Developer -> Creative/Product Designer", duration: "March 2025 - February 2026" }],
    contributions: ["Built Cirra's NGN-to-crypto conversion experience in React and TypeScript", "Built the crypto-to-fiat recipient and Naira-wallet withdrawal flows", "Designed and developed Cirra's marketing website using React, TypeScript, and Tailwind CSS", "Designed the product and visual UI system across the application, website, and launch materials"],
    gained: "End-to-end experience across frontend engineering, product design, visual design, and motion.", relatedCaseStudy: "cirra",
  },
  {
    slug: "nexinventix", name: "Nexinventix Technologies", website: "https://nexinventix.com",
    blurb: "A digital solutions and application development company focused on crafting tailored digital transformation solutions for businesses and individuals.",
    roles: [{ title: "Operations Lead, Software Development", duration: "July 2025 - December 2025" }],
    contributions: ["Led operations across the software development function, coordinating delivery, team processes, and project execution", "Supported the structuring of product and development workflows across design and engineering activities", "Worked across information architecture and product planning alongside development operations"],
    gained: "Leadership and operations experience across product planning, design, engineering workflows, and delivery.", relatedCaseStudy: null,
  },
  {
    slug: "de-verge-hub", name: "De Verge Hub", website: "https://devergehub.com",
    blurb: "A strategy-first design and marketing agency delivering brand and digital work for external clients.",
    roles: [{ title: "Lead Product Designer", duration: "January 2026 - September 2026" }],
    contributions: ["Led product design across client engagements within a design-and-build environment", "Owned design decisions from early product concepts through developer-ready handoff", "Translated product requirements into structured user flows, interface systems, and high-fidelity product experiences", "Collaborated with developers and stakeholders to ensure designs were practical to implement"],
    gained: "Experience owning product design across multiple engagements, from strategy and information architecture through implementation.", relatedCaseStudy: null,
  },
  {
    slug: "community-shield", name: "Community Shield", website: "https://communityshield.africa",
    blurb: "A security coordination and incident management platform helping gated communities and corporate compounds manage access control and emergency response through a unified digital network.",
    roles: [{ title: "Lead Frontend Developer", duration: "March 2026 - Present" }],
    contributions: ["Built the broadcast module end-to-end, including dynamic field mapping, multipart/form-data uploads, debounced search, and TanStack Query cache invalidation", "Designed and built the Super Admin Platform in TypeScript", "Built the emergency response and alerts/incidents system, including resident filtering and community-status logic", "Worked directly with backend engineers to define API contracts and coordinate feature delivery"],
    gained: "Frontend architecture leadership across core platform modules and close collaboration with backend engineering.", relatedCaseStudy: "community-shield",
  },
];
