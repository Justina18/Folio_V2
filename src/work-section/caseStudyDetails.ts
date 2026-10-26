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
  studio?: string;
  format?: string;
  year?: number;
  url?: string;
  technologies?: string[];
  keyFeatures?: string[];
  designApproach?: string;
  outcome?: string;
  galleryImages?: string[];
  reflections?: {
    title: string;
    content: string;
  }[];
}

const featuredProjectOrder = ["rukkyman", "physiohelp", "investure", "cirra"];

export const caseStudies: CaseStudyData[] = [
  {
    slug: "rukkyman",
    index: "01",
    title: "Rukkyman",
    subtitle: "A portfolio site built for filmmaker Oghenerukevwe 'Rukky' Otebele — screenwriter, director and editor.",
    description: "A portfolio site built for filmmaker Oghenerukevwe 'Rukky' Otebele — screenwriter, director and editor. Built with React, TypeScript, Tailwind CSS and Framer Motion, featuring an animated preloader, full hero animation sequence, About/Work/Contact pages, and a custom HaloReel image carousel component.",
    heroImage: "/ruk-top.png",
    role: "Frontend Developer",
    platform: "Portfolio site",
    overviewText: "Rukkyman is a portfolio site built for filmmaker Oghenerukevwe 'Rukky' Otebele, bringing screenwriting, directing, and editing work into one cinematic web experience. The build combines a full hero animation sequence, focused project storytelling, and a custom HaloReel image carousel component.",
    problemHeading: "A filmmaker's body of work needed a focused, memorable home online.",
    problemCards: [
      { iconName: "Sparkles", title: "Cinematic First Impression", description: "The site needed motion and pacing that felt intentional without getting in the way of the work." },
      { iconName: "Palette", title: "Clear Work Storytelling", description: "Visitors needed a simple way to understand Rukky's roles and move through selected projects." },
      { iconName: "Workflow", title: "Flexible Presentation", description: "The structure had to support different kinds of filmmaking work while staying easy to extend." },
    ],
    problemClosing: "The result balances atmosphere with clarity, giving the work room to lead while the interface supplies a strong editorial frame.",
    goalsHeading: "Portfolio Goals",
    goals: [
      { number: "01", title: "Create a strong hero sequence", description: "Use an animated preloader and full hero transition to establish the site's visual language." },
      { number: "02", title: "Make the work easy to explore", description: "Organize About, Work, and Contact pages around clear navigation and focused project presentation." },
      { number: "03", title: "Add custom image motion", description: "Build the HaloReel carousel to give selected imagery a distinctive interactive treatment." },
    ],
    experienceHeading: "Build Highlights",
    experienceFlows: [
      { heading: "Animated entry", description: "The preloader and hero animation sequence create a paced introduction before the portfolio content appears." },
      { heading: "Project structure", description: "React and TypeScript keep the page structure maintainable while Tailwind CSS supports rapid visual iteration." },
      { heading: "HaloReel carousel", description: "A custom image carousel component gives the portfolio a visual signature without hiding the work." },
    ],
    reflectionHeading: "What Rukkyman Delivered",
    reflections: [
      { title: "Motion can frame the work", content: "Animation works best when it establishes tone and then gets out of the way of the portfolio." },
      { title: "Structure supports personality", content: "Clear page boundaries made it possible for the visual direction to feel expressive without becoming difficult to navigate." },
      { title: "Components create room to grow", content: "The HaloReel component gives future image stories a reusable foundation." },
    ],
    studio: "Personal client project",
    format: "Portfolio site",
    year: 2026,
    url: "https://rukkyman.com",
  },
  {
    slug: "physiohelp",
    index: "02",
    title: "Physiohelp",
    subtitle: "A physiotherapy service platform built for a Lagos-based practice — home-visit and virtual appointment booking, a therapy-equipment store, and content, designed end-to-end in Figma and built with React, Vite and TypeScript.",
    description: "A physiotherapy service platform built for a Lagos-based practice — home-visit and virtual appointment booking, a therapy-equipment store, and content, designed end-to-end in Figma and built with React, Vite and TypeScript.",
    heroImage: "/PHelp.jpg",
    role: "Product Designer & Frontend Developer",
    duration: "2025",
    platform: "Web app · E-commerce",
    screens: "React, Vite & TypeScript",
    overviewText: "PhysioHelp is a Nigeria-based physiotherapy service offering home visits, virtual appointments, in-person consultations, and a therapy-equipment store. I designed the full product in Figma and built the frontend in React, Vite and TypeScript, including the REST API integration and the appointment booking flow.",
    problemHeading: "Healthcare booking flows need clarity, confidence, and fewer unnecessary steps.",
    problemCards: [
      { iconName: "Route", title: "Appointment Discovery", description: "Users needed a clear path from finding a service to understanding the next booking step." },
      { iconName: "Timer", title: "Lower Friction", description: "The interface had to reduce avoidable decisions and keep booking progress easy to follow." },
      { iconName: "ShieldCheck", title: "Trustworthy Details", description: "Service and appointment information needed to remain visible and understandable throughout the flow." },
    ],
    problemClosing: "The product brings care discovery, appointment scheduling, patient education, and equipment sales into one clear healthcare experience.",
    goalsHeading: "Frontend Goals",
    goals: [
      { number: "01", title: "Clarify the booking journey", description: "Make the movement from service discovery to appointment selection easier to understand." },
      { number: "02", title: "Build responsive interfaces", description: "Support a consistent experience across the devices people use to find care." },
      { number: "03", title: "Ship practical product improvements", description: "Work closely with product requirements to deliver useful changes without unnecessary complexity." },
    ],
    experienceHeading: "Product and Frontend Delivery",
    experienceFlows: [
      { heading: "End-to-end product design", description: "Led product design in Figma across the hero, service pillars, treatment philosophy, credibility and differentiator sections, testimonials, blog, and shop." },
      { heading: "REST API integration", description: "Built the frontend in React, Vite, and TypeScript and wired the product to the backend REST API." },
      { heading: "Appointment booking", description: "Implemented scheduling, service selection, and confirmation for home-visit, virtual, and in-person care." },
    ],
    reflectionHeading: "Outcome",
    reflections: [
      { title: "Production delivery", content: "Shipped a production site handling live appointment bookings and equipment sales for a real physiotherapy practice." },
    ],
    studio: "BuildIt client project",
    format: "Web app · E-commerce",
    year: 2025,
    url: "https://physiohelp.ng",
    technologies: ["React", "Vite", "TypeScript"],
    keyFeatures: [
      "Home-visit and virtual appointment booking flow, connected to the backend via REST API",
      "Integrated e-commerce store for physiotherapy tools and equipment",
      "Content/blog section for patient education",
      "Testimonial and trust-building sections designed to build credibility for a health service",
    ],
    designApproach: "Designed a confident three-tone color system (navy blue as the dominant brand color, white for content sections, and a reserved pink accent used only for testimonials) to keep trust-building content visually distinct without diluting the brand. Paired a bold sans-serif for action-oriented headlines with a serif display face for warmer, editorial moments.",
    outcome: "Shipped a production site handling live appointment bookings and equipment sales for a real physiotherapy practice.",
    galleryImages: ["/PHelp.jpg"],
  },
  {
    slug: "cirra",
    index: "04",
    title: "Cirra",
    subtitle: "A crypto conversion platform shaped across frontend, design, operations, and leadership responsibilities.",
    description: "Building a practical crypto-to-fiat conversion experience while evolving the product, brand, and operating rhythm.",
    heroImage: "/cirra.png",
    role: "Creatuve Design, Frontend, Design & Operations",
    duration: "Ongoing",
    platform: "Web App",
    screens: "Product System",
    overviewText: "Cirra began as a crypto conversion product and grew into a broader operating challenge: make digital asset exchange feel faster, clearer, and more trustworthy for everyday users. My work moved from frontend implementation into product design, operational structure, and decision-making, giving me a full-stack view of how product choices become business outcomes.",
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
      { name: "Light Purple Signal", hex: "#C0B6F3" },
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
        heading: "Operations work",
        description: "I moved closer to business execution, connecting product choices to customer support, fulfillment expectations, and repeatable internal processes."
      }
    ],
    reflectionHeading: "What Cirra Sharpened",
    url: "https://cirrahq.com/",
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
        content: "Moving into leadership responsibilities made me evaluate every design and engineering choice through user, team, and business impact."
      }
    ]
  },
  {
    slug: "community-shield",
    index: "05",
    title: "Community Shield",
    subtitle: "A security communication platform with broadcast alert modules, resident filtering, and resilient API handling.",
    description: "Leading frontend delivery for a Next.js 14 safety platform built around fast alerting and resident-aware communication.",
    heroImage: "/csa.png",
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
    url: "https://communityshield.africa/",
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
    heroImage: "/investure.png",
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
    url: "https://investure.llc/",
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
    slug: "alazethe",
    index: "06",
    title: "Alazethe",
    subtitle: "A haircare brand identity and packaging system designed for a confident, distinctive shelf presence.",
    description: "A haircare brand identity and packaging project developed across visual direction, typography, color, and packaging applications.",
    heroImage: "/alezathe.png",
    role: "Brand Identity Designer",
    duration: "Brand Identity",
    platform: "Identity & Packaging",
    screens: "Brand System",
    overviewText: "Alazethe is a haircare brand identity and packaging project focused on creating a clear, memorable visual world across brand touchpoints and product packaging.",
    problemHeading: "A haircare brand needs a visual identity that feels distinctive, considered, and ready to live on shelf.",
    problemCards: [
      {
        iconName: "Palette",
        title: "Distinctive Direction",
        description: "The identity needed a clear visual point of view that could make the brand recognizable."
      },
      {
        iconName: "Sparkles",
        title: "Haircare Presence",
        description: "Packaging had to make the product feel desirable while keeping the brand system coherent."
      },
      {
        iconName: "Workflow",
        title: "Flexible System",
        description: "The visual language needed to extend beyond a single package into a complete brand identity."
      }
    ],
    problemClosing: "The result gives Alazethe a recognizable identity that can carry both the product and the wider brand story.",
    goalsHeading: "Brand Identity Goals",
    goals: [
      {
        number: "01",
        title: "Build a memorable identity",
        description: "Create a visual system that gives the haircare brand a confident, ownable point of view."
      },
      {
        number: "02",
        title: "Translate identity into packaging",
        description: "Apply the identity to packaging in a way that keeps product presentation clear and compelling."
      },
      {
        number: "03",
        title: "Create room to grow",
        description: "Define a flexible foundation for future products, campaigns, and brand touchpoints."
      }
    ],
    experienceHeading: "Identity and Packaging",
    experienceFlows: [
      {
        heading: "Visual direction",
        description: "The identity establishes a distinct visual language for a modern haircare brand."
      },
      {
        heading: "Packaging application",
        description: "Brand decisions were carried through into packaging so the product experience feels intentional and cohesive."
      },
      {
        heading: "System thinking",
        description: "The identity was shaped as a repeatable system rather than a one-off artwork."
      }
    ],
    reflectionHeading: "What Alazethe Delivered",
    reflections: [
      {
        title: "A stronger brand presence",
        content: "The identity gives the haircare line a recognizable visual foundation."
      },
      {
        title: "Packaging with purpose",
        content: "The packaging direction connects brand personality with a practical product presentation."
      },
      {
        title: "A system to extend",
        content: "The visual language creates a useful base for future products and communications."
      }
    ],
    url: "https://www.behance.net/gallery/245006559/Haircare-Brand-Identity-Packaging"
  },
  {
    slug: "pick-me",
    index: "07",
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
    index: "08",
    title: "Alézathe",
    subtitle: "A brand identity system for a hair care line rooted in botanical warmth and quiet luxury.",
    description: "A soft yet commanding product and brand identity system for a natural hair care line.",
    heroImage: "/alezathe.png",
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
        images: ["/alezathe.png"]
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
].sort((first, second) => {
  const firstOrder = featuredProjectOrder.indexOf(first.slug);
  const secondOrder = featuredProjectOrder.indexOf(second.slug);
  return (firstOrder === -1 ? featuredProjectOrder.length : firstOrder) -
    (secondOrder === -1 ? featuredProjectOrder.length : secondOrder);
});
