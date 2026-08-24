export interface ProblemCard {
  iconName: string;
  title: string;
  description: string;
}

export interface GoalRow {
  number: string;
  title: string;
  description: string;
}

export interface DesignSwatch {
  name: string;
  hex: string;
}

export interface ExperienceFlow {
  heading: string;
  description: string;
  images?: string[];
}

export interface CaseStudyData {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  role: string;
  duration?: string;
  platform: string;
  screens?: string;
  overviewText: string;
  problemHeading: string;
  problemCards: ProblemCard[];
  problemClosing: string;
  goalsHeading: string;
  goals: GoalRow[];
  wireframesText?: string;
  wireframesImages?: string[];
  designColors?: DesignSwatch[];
  designTypography?: {
    fontFamily: string;
    weights: string[];
  };
  experienceHeading?: string;
  experienceFlows?: ExperienceFlow[];
  reflectionHeading?: string;
  reflections?: {
    title: string;
    content: string;
  }[];
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: "cirra",
    index: "01",
    title: "Cirra",
    subtitle: "A crypto conversion platform shaped across frontend, design, operations, and co-founder responsibilities.",
    description: "Building a practical crypto-to-fiat conversion experience while evolving the product, brand, and operating rhythm.",
    heroImage: "/cirra.png",
    role: "Co-founder, Frontend, Design & Operations",
    duration: "Ongoing",
    platform: "Web App",
    screens: "Product System",
    overviewText: "Cirra began as a crypto conversion product and grew into a broader operating challenge: make digital asset exchange feel faster, clearer, and more trustworthy for everyday users. My work moved from frontend implementation into product design, operational structure, and co-founder decision-making, giving me a full-stack view of how product choices become business outcomes.",
    problemHeading: "Crypto conversion still feels technical, fragmented, and hard to trust.",
    problemCards: [
      {
        iconName: "RefreshCcw",
        title: "Conversion Friction",
        description: "Users needed a straightforward path from crypto balances to usable local value without opaque steps or unclear fees."
      },
      {
        iconName: "ShieldCheck",
        title: "Trust Signals",
        description: "The product needed visible status, confirmation, and support cues so users could feel confident during sensitive transfers."
      },
      {
        iconName: "Workflow",
        title: "Operational Load",
        description: "As usage grew, product decisions had to account for fulfillment, customer support, and repeatable internal workflows."
      }
    ],
    problemClosing: "The product needed a clean interface, a reliable conversion flow, and an operating model that could support real users beyond the screen.",
    goalsHeading: "Product and Operations Goals",
    goals: [
      {
        number: "01",
        title: "Clarify the conversion journey",
        description: "Design and build flows that make rates, wallet actions, confirmation states, and payout expectations easy to understand."
      },
      {
        number: "02",
        title: "Bridge design and delivery",
        description: "Move quickly between UI decisions, frontend implementation, and feedback from operational realities."
      },
      {
        number: "03",
        title: "Scale the founding role",
        description: "Create stronger handoffs, support loops, and product priorities as my contribution expanded from frontend into design and operations."
      }
    ],
    wireframesText: "The early structure focused on reducing decision points: choose an asset, review the rate, confirm the transaction, and track payout progress with clear status feedback.",
    wireframesImages: ["/cirra.png"],
    designColors: [
      { name: "Deep Teal", hex: "#011c21" },
      { name: "Cyan Signal", hex: "#3CC8C8" },
      { name: "Soft Linen", hex: "#e4ded7" },
      { name: "Midnight", hex: "#0A0A0A" }
    ],
    designTypography: {
      fontFamily: "Audiowide & Nunito",
      weights: ["Regular 400", "SemiBold 600", "Bold 700"]
    },
    experienceHeading: "From Frontend to Founding",
    experienceFlows: [
      {
        heading: "Frontend foundation",
        description: "I helped shape the user-facing conversion flow, keeping interaction states simple and responsive around high-trust financial actions.",
        images: ["/cirra.png"]
      },
      {
        heading: "Design ownership",
        description: "The work expanded into clearer product messaging, interface structure, and visual decisions that made conversion feel less intimidating."
      },
      {
        heading: "Operations and co-founder work",
        description: "I moved closer to business execution, connecting product choices to customer support, fulfillment expectations, and repeatable internal processes."
      }
    ],
    reflectionHeading: "What Cirra Sharpened",
    reflections: [
      {
        title: "Product is operational",
        content: "A financial interface only works when the surrounding support, status, and fulfillment systems are reliable."
      },
      {
        title: "Trust lives in small details",
        content: "Clear copy, visible confirmations, and predictable flow states can matter as much as the core transaction logic."
      },
      {
        title: "Ownership changes the lens",
        content: "Moving into co-founder responsibilities made me evaluate every design and engineering choice through user, team, and business impact."
      }
    ]
  },
  {
    slug: "community-shield",
    index: "02",
    title: "Community Shield",
    subtitle: "A security communication platform with broadcast alert modules, resident filtering, and resilient API handling.",
    description: "Leading frontend delivery for a Next.js 14 safety platform built around fast alerting and resident-aware communication.",
    heroImage: "/blog.png",
    role: "Lead Frontend Engineer",
    duration: "Product Build",
    platform: "Next.js 14",
    screens: "Admin & Resident Modules",
    overviewText: "Community Shield focused on helping communities send targeted alerts, manage resident information, and coordinate safety communication with less manual work. As Lead Frontend Engineer, I worked across the alert experience, data filtering, API structure, and implementation patterns that made the product easier to extend.",
    problemHeading: "Community safety tools need speed, precision, and dependable data access.",
    problemCards: [
      {
        iconName: "Radio",
        title: "Broadcast Alerting",
        description: "Administrators needed a fast module for composing and sending critical alerts without digging through complex navigation."
      },
      {
        iconName: "Filter",
        title: "Resident Targeting",
        description: "Alert workflows had to support resident filters so communication could reach the right people at the right time."
      },
      {
        iconName: "PlugZap",
        title: "API Boundaries",
        description: "The frontend needed clean separation between protected and public API calls through dual axios instances."
      }
    ],
    problemClosing: "The interface had to make safety communication feel immediate while keeping implementation boundaries clear enough for long-term maintenance.",
    goalsHeading: "Frontend Delivery Goals",
    goals: [
      {
        number: "01",
        title: "Build broadcast alert modules",
        description: "Create focused alert creation and management views that support urgent communication workflows."
      },
      {
        number: "02",
        title: "Improve API reliability",
        description: "Use separate axios clients for authenticated and unauthenticated calls to reduce header and token handling mistakes."
      },
      {
        number: "03",
        title: "Support resident filters",
        description: "Make resident segmentation available in the UI so admins can target messages by meaningful community attributes."
      }
    ],
    experienceHeading: "Alert Operations",
    experienceFlows: [
      {
        heading: "Broadcast module",
        description: "The alert flow was organized around speed: compose, target, review, and send, with interface states that reduce hesitation during urgent updates."
      },
      {
        heading: "Dual axios instances",
        description: "Protected requests and public requests were split into dedicated clients so the codebase could handle auth headers predictably."
      },
      {
        heading: "Resident filtering",
        description: "Filtering patterns gave administrators clearer control over who receives each communication instead of relying on one-size-fits-all blasts."
      }
    ],
    reflectionHeading: "Engineering Notes",
    reflections: [
      {
        title: "Clarity beats cleverness",
        content: "Safety workflows benefit from simple state, direct labels, and predictable interaction patterns."
      },
      {
        title: "API clients are product infrastructure",
        content: "Separating axios concerns early made later feature work less fragile."
      },
      {
        title: "Filters shape trust",
        content: "Targeted alerts help residents receive relevant messages and help admins feel in control."
      }
    ]
  },
  {
    slug: "investure",
    index: "03",
    title: "Investure",
    subtitle: "A React and TypeScript platform migration focused on deployment stability, redirects, and auth reliability.",
    description: "Stabilizing a product through Netlify migration work, redirect configuration, auth header fixes, and axios interceptors.",
    heroImage: "/gems.jpg",
    role: "Frontend Engineer",
    duration: "Migration & Stabilization",
    platform: "React, TypeScript & Netlify",
    screens: "Web Platform",
    overviewText: "Investure required hands-on frontend engineering work around production reliability. The core effort centered on migrating deployment behavior to Netlify, tightening redirect configuration, debugging authorization header issues, and using axios interceptors to make authenticated requests more predictable.",
    problemHeading: "Small deployment and auth issues can make a polished product feel unreliable.",
    problemCards: [
      {
        iconName: "GitBranch",
        title: "Netlify Migration",
        description: "The product needed deployment behavior and hosting configuration that matched its routing expectations."
      },
      {
        iconName: "Route",
        title: "Redirect Rules",
        description: "Client-side routing required a redirects setup that prevented refreshes and deep links from breaking."
      },
      {
        iconName: "KeyRound",
        title: "Auth Header Bugs",
        description: "Authenticated API calls needed consistent token attachment and safer handling across request paths."
      }
    ],
    problemClosing: "The work focused on making the production environment behave like the product expected, especially around routing and authenticated data access.",
    goalsHeading: "Stability Goals",
    goals: [
      {
        number: "01",
        title: "Make routing production-safe",
        description: "Configure redirects so deep links, browser refreshes, and direct route access remain reliable on Netlify."
      },
      {
        number: "02",
        title: "Fix request authentication",
        description: "Resolve auth header bugs and reduce repeated request setup with axios interceptors."
      },
      {
        number: "03",
        title: "Keep the stack typed",
        description: "Preserve React and TypeScript patterns so bug fixes stayed understandable and maintainable."
      }
    ],
    experienceHeading: "Reliability Work",
    experienceFlows: [
      {
        heading: "Netlify redirects",
        description: "The migration included redirect configuration that protected client-side routes from production-only failures."
      },
      {
        heading: "Auth header debugging",
        description: "Request failures were traced to inconsistent authorization handling, then corrected through clearer request configuration."
      },
      {
        heading: "Axios interceptors",
        description: "Interceptors centralized token attachment and reduced the chance of individual API calls drifting out of sync."
      }
    ],
    reflectionHeading: "What Improved",
    reflections: [
      {
        title: "Deployment is part of UX",
        content: "A strong interface still needs reliable hosting, redirects, and refresh behavior to feel complete."
      },
      {
        title: "Auth bugs need central fixes",
        content: "Centralizing request behavior lowered the chance of repeating the same header mistake across the app."
      },
      {
        title: "TypeScript supports repair work",
        content: "Typed code made it easier to reason about request shape, migration changes, and regression risk."
      }
    ]
  },
  {
    slug: "vergetracks",
    index: "04",
    title: "VergeTracks",
    subtitle: "A systems architecture design study for append-only tracking, traceability, and operational safeguards.",
    description: "Mapping the problem, constraints, system design, safeguards, and append-only ledger model for a tracking platform.",
    heroImage: "/debugging.jpg",
    role: "Systems Architecture Designer",
    duration: "Design Study",
    platform: "System Design",
    screens: "Architecture Blueprint",
    overviewText: "VergeTracks was approached as a systems architecture study rather than a visual interface project. The work explored how an append-only ledger could support tracking records that remain auditable, resilient, and difficult to tamper with while still being usable by operational teams.",
    problemHeading: "Tracking systems lose value when records can be overwritten without accountability.",
    problemCards: [
      {
        iconName: "FileClock",
        title: "Mutable Records",
        description: "Traditional update flows can hide the history of what changed, when it changed, and who triggered it."
      },
      {
        iconName: "Network",
        title: "Operational Constraints",
        description: "The system needed to account for real teams, imperfect data entry, variable connectivity, and audit requirements."
      },
      {
        iconName: "LockKeyhole",
        title: "Safeguards",
        description: "Sensitive tracking events required permission boundaries, validation, and traceable event history."
      }
    ],
    problemClosing: "The architecture needed to preserve trust in the record without making the system too rigid for everyday operations.",
    goalsHeading: "System Design Goals",
    goals: [
      {
        number: "01",
        title: "Define the problem and constraints",
        description: "Document the real-world conditions the system must survive before designing the technical model."
      },
      {
        number: "02",
        title: "Design append-only history",
        description: "Represent tracking changes as new events rather than destructive edits, preserving a clear audit trail."
      },
      {
        number: "03",
        title: "Add practical safeguards",
        description: "Introduce validation, access boundaries, and reviewable event logs to reduce operational and security risk."
      }
    ],
    experienceHeading: "Architecture Flow",
    experienceFlows: [
      {
        heading: "Problem model",
        description: "The study started by separating business events from interface actions so the system could track meaningful operational truth."
      },
      {
        heading: "Append-only ledger",
        description: "Records are treated as a sequence of events, preserving history and making corrections visible instead of silently replacing past data."
      },
      {
        heading: "Safeguards",
        description: "The architecture uses permission checks, validation, and audit review points to reduce accidental or malicious data changes."
      }
    ],
    reflectionHeading: "Systems Takeaways",
    reflections: [
      {
        title: "Constraints lead the architecture",
        content: "The system became clearer once the operational risks were named before the technical solution."
      },
      {
        title: "History is a product feature",
        content: "Append-only records improve trust because users can inspect what happened instead of guessing."
      },
      {
        title: "Safeguards must be usable",
        content: "Controls only work when they fit naturally into team workflows."
      }
    ]
  },
  {
    slug: "pick-me",
    index: "05",
    title: "Pick Me",
    subtitle: "A Gen Z snack brand identity study built around bold shelf presence and go-to-market clarity.",
    description: "Creating a bright brand system with Cobalt blue, Mustard yellow, and a GTM focus for youth snack culture.",
    heroImage: "/chef.png",
    role: "Brand Identity Designer",
    duration: "Brand Study",
    platform: "Brand Identity",
    screens: "Identity System",
    overviewText: "Pick Me explored how a snack brand could win attention with a memorable name, high-energy color system, and go-to-market direction aimed at Gen Z buyers. The identity needed to feel expressive and fun while still being structured enough for packaging, social content, and launch campaigns.",
    problemHeading: "Snack brands need instant recognition in crowded feeds and crowded shelves.",
    problemCards: [
      {
        iconName: "Sparkles",
        title: "Gen Z Attention",
        description: "The brand needed a voice and visual system that could feel native to social-first discovery."
      },
      {
        iconName: "Palette",
        title: "Shelf Contrast",
        description: "The color palette had to stand out quickly without becoming chaotic or hard to apply."
      },
      {
        iconName: "Megaphone",
        title: "GTM Focus",
        description: "The identity needed to support launch messaging, snack drops, creator content, and youth-focused campaigns."
      }
    ],
    problemClosing: "The brand system had to balance playful personality with repeatable visual rules that could carry a market launch.",
    goalsHeading: "Brand Goals",
    goals: [
      {
        number: "01",
        title: "Create a bold visual hook",
        description: "Use Cobalt blue and Mustard yellow as memorable anchors across packaging and campaign moments."
      },
      {
        number: "02",
        title: "Shape Gen Z positioning",
        description: "Build a brand voice and launch direction around playful confidence, snackability, and social sharing."
      },
      {
        number: "03",
        title: "Make the system repeatable",
        description: "Define colors, typography, and usage patterns that can scale from packaging to digital promotion."
      }
    ],
    designColors: [
      { name: "Cobalt Blue", hex: "#0047AB" },
      { name: "Mustard Yellow", hex: "#FFDB58" },
      { name: "Snack Cream", hex: "#FFF7E6" },
      { name: "Ink Black", hex: "#101010" }
    ],
    designTypography: {
      fontFamily: "Bold Display Sans & Friendly Grotesk",
      weights: ["Medium 500", "Bold 700", "Black 900"]
    },
    reflectionHeading: "Brand Takeaways",
    reflections: [
      {
        title: "Color can carry recall",
        content: "Cobalt blue and Mustard yellow created a strong identity cue before users read the brand name."
      },
      {
        title: "GTM shapes design",
        content: "A launch-focused brand system needs rules that work for creators, packaging, short-form content, and retail moments."
      },
      {
        title: "Play still needs structure",
        content: "The most expressive parts of the identity worked best when supported by simple repeatable rules."
      }
    ]
  },
  {
    slug: "alezathe",
    index: "06",
    title: "Alézathe",
    subtitle: "A brand identity system for a hair care line rooted in botanical warmth and quiet luxury.",
    description: "A soft yet commanding product and brand identity system for a natural hair care line.",
    heroImage: "/alezathe-hero.svg",
    role: "Brand & Product Designer",
    platform: "Brand Identity",
    overviewText: "Alézathe needed a distinct identity in a saturated natural hair care market crowded with bold colors and cluttered branding. The brand direction centers textured hair as something worthy of ritual, reverence, and quiet luxury.",
    problemHeading: "Natural hair care needed a calmer, more intimate identity with global shelf appeal.",
    problemCards: [
      {
        iconName: "BadgeAlert",
        title: "Saturated Market",
        description: "The natural hair market is saturated with loud, cluttered brand identities."
      },
      {
        iconName: "Timer",
        title: "Speed Over Connection",
        description: "Many brands focus on speed and trend rather than ritual, care, and emotional connection."
      },
      {
        iconName: "Sparkles",
        title: "Undifferentiated Products",
        description: "Textured hair deserves more than products; it deserves reverence."
      },
      {
        iconName: "Globe2",
        title: "No Global Standard",
        description: "There was a need for a brand that feels intimate yet global, rooted in heritage but refined for modern shelves."
      }
    ],
    problemClosing: "The identity needed to feel warm, refined, and tactile while still scaling across products, packaging, and campaign touchpoints.",
    goalsHeading: "Solution Goals",
    goals: [
      {
        number: "01",
        title: "Commanding Yet Quiet Identity",
        description: "Craft a soft yet commanding identity that embodies feminine strength and quiet luxury."
      },
      {
        number: "02",
        title: "Botanical Color Language",
        description: "Develop a muted botanical color system inspired by nourishment, earth, and warmth."
      },
      {
        number: "03",
        title: "Ritual & Wisdom",
        description: "Design a visual language centered on ritual care, intentional touch, and generational wisdom."
      },
      {
        number: "04",
        title: "Scalable System",
        description: "Build a scalable product system under one cohesive narrative."
      }
    ],
    designColors: [
      { name: "Dry Sage", hex: "#C9CE88" },
      { name: "Soft Linen", hex: "#F4F1E8" },
      { name: "Green Blind", hex: "#1D2A2A" },
      { name: "Copper", hex: "#B97844" }
    ],
    designTypography: {
      fontFamily: "Playfair & Inter",
      weights: ["Playfair Heading", "Inter Body"]
    },
    experienceHeading: "Brand Applications",
    experienceFlows: [
      {
        heading: "Brand Mark & Wordmark",
        description: "The 'alézathe' wordmark pairs an elegant serif with a distinct lowercase 'é' used as a standalone brand symbol across packaging and social content.",
        images: ["/alezathe-hero.svg"]
      },
      {
        heading: "Packaging & Product System",
        description: "Packaging and product photography built around the muted sage, linen, deep green, and copper palette; rooted in botanical and mineral textures."
      },
      {
        heading: "Social & Campaign Content",
        description: "Editorial-style social templates and campaign visuals extend the identity into everyday brand touchpoints, anchored by the tagline 'Rooted. Restored. Regrown.'"
      }
    ]
  }
];
