import { Project, WorkHistory, Testimonial } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "urbannest-web",
    title: "UrbanNest Website Development",
    category: "Web Design / UI/UX / Webflow",
    description: "A premium real estate platform showcasing modern architectural spaces. Built with stunning layouts, a modular grid, and highly polished micro-interactions to deliver a cohesive, elite browsing experience.",
    image: "/src/assets/images/urbannest_pink_desktop_1779339324158.png",
    year: "2024",
    services: ["Web Design", "UI/UX Architecture", "Webflow Development", "Fine Interactions"],
    client: "UrbanNest Real Estate Group",
    previewUrl: "https://urbannest-webflow.example.com"
  },
  {
    id: "urbannest-dashboard",
    title: "UrbanNest Property Analytics Dashboard",
    category: "Mobile Design / High-Fi Dashboards",
    description: "A comprehensive analytics and client management panel for real estate developers. Features seamless custom dark themes, rich SVG telemetry visualizations, and real-time transaction logs in a beautifully responsive grid.",
    image: "/src/assets/images/urbannest_dark_dashboard_1779339340328.png",
    year: "2023",
    services: ["Dashboard Architecture", "Mobile UI Design", "Data Visualization", "Component Library"],
    client: "UrbanNest Inc.",
    previewUrl: "https://dashboard-urbannest.example.com"
  },
  {
    id: "urbannest-branding",
    title: "UrbanNest Minimalist Portfolio System",
    category: "Front End Dev / Branding Strategy",
    description: "An elegant, raw, high-contrast black-and-white presentation portal. Focuses on content hierarchy, Swiss typography principles, and extremely robust animations that respond to scroll velocity and viewport boundaries.",
    image: "/src/assets/images/urbannest_black_desktop_1779339358174.png",
    year: "2022",
    services: ["Brand Strategy", "High-Contrast UI", "Front End Development", "Core Animation"],
    client: "UrbanNest Studio",
    previewUrl: "https://urbannest-brand.example.com"
  }
];

export const WORK_HISTORY: WorkHistory[] = [
  {
    id: "lead-ui",
    number: "01",
    role: "Lead UI Designer",
    company: "Tabana.id",
    period: "2020 - 2024",
    techStack: ["UI/UX Strategy", "Figma Components", "Design Systems", "Client Relations"],
    previewImage: "/src/assets/images/urbannest_pink_desktop_1779339324158.png",
    description: "Supervised a multidisciplinary team of 6 designers creating next-generation web apps. Authored the unified Tabana design guidelines, boosting client-approval rate by 42% and implementing scalable token systems.",
    website: "https://tabana.id"
  },
  {
    id: "uiux-designer",
    number: "02",
    role: "UI/UX Designer",
    company: "InfoTechno",
    period: "2017 - 2020",
    techStack: ["Web Design", "Figma", "Webflow Strategy", "Interactive Mockups"],
    previewImage: "/src/assets/images/urbannest_dark_dashboard_1779339340328.png",
    description: "Executed high-fidelity visual mockups, wireframes, and creative prototypes for enterprise banking platforms. Handled user-research sprints, mapping user personas into seamless customer journeys.",
    website: "https://infotechno.com"
  },
  {
    id: "jr-uiux",
    number: "03",
    role: "Junior UI/UX Designer",
    company: "Keffi.id",
    period: "2016 - 2017",
    techStack: ["Wireframing", "Vector Illustration", "Front-end Basics", "Visual Design"],
    previewImage: "/src/assets/images/urbannest_black_desktop_1779339358174.png",
    description: "Assisted senior visual designers in assets preparation, custom style edits, and branding guidelines enforcement. Spearheaded daily mobile wireframe tasks and crafted vectors with micro pixel accuracy.",
    website: "https://keffi.id"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "leanly",
    quote: "Leanly exceeded our expectations—professional, innovative, and a pleasure to collaborate with. Their attention to detail and creative approach truly set them apart.",
    author: "Christopher Henderson",
    role: "Product Director",
    company: "Leanly Global Services",
    rating: 5
  },
  {
    id: "trustpilot-review-1",
    quote: "The visual systems created by SD transformed our startup's digital presence instantly. The sheer attention to typography alignment and smooth interactions are unmatched.",
    author: "Samantha Mercer",
    role: "Founder & CEO",
    company: "Apex Tech Labs",
    rating: 5
  },
  {
    id: "trustpilot-review-2",
    quote: "An absolute master of modern Webflow structure and layout craftsmanship. Code handoff was flawless, and every frame is highly response-optimized.",
    author: "Kenji Sato",
    role: "Engineering Lead",
    company: "Nippon Media Group",
    rating: 5
  }
];
