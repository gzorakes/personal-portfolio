export interface Project {
  slug: string;
  title: string;
  stack: string;
  description: string;
  cover: string; // shown on cards
  images: string[]; // gallery on detail page
  href?: string; // optional external link (live)
  repo?: string; // optional github link
}

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    stack: "Next.js / TypeScript",
    description:
      "My personal portfolio with a clean layout, dark mode, and a projects section.",
    cover: "/portfolio-cover.webp",
    images: ["/georgezorakis.webp", "/projects/portfolio-website/02.webp"],
    href: "https://georgezorakis.com",
    repo: "https://github.com/yourname/portfolio",
  },
  {
    slug: "mern-chat",
    title: "Mern Chat",
    stack: "React",
    description:
      "A simple e-commerce front-end with product listing, product page, and a cart UI.",
    cover: "/mern-chat-cover.webp",
    images: ["/georgezorakis.webp", "/projects/ecommerce-ui/02.webp"],
    repo: "https://github.com/yourname/ecommerce-ui",
  },
  {
    slug: "chat-up",
    title: "Chat Up",
    stack: "React",
    description:
      "A small dashboard layout with charts, tables, and responsive navigation.",
    cover: "/chatup-cover.webp",
    images: ["/georgezorakis.webp", "/projects/dashboard-app/02.webp"],
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    stack: "React",
    description:
      "A small dashboard layout with charts, tables, and responsive navigation.",
    cover: "/admin-dashboard-cover.webp",
    images: ["/georgezorakis.webp", "/projects/dashboard-app/02.webp"],
  },
  {
    slug: "ido-ios",
    title: "IDO - Wedding",
    stack: "IOS - Swift",
    description:
      "A small dashboard layout with charts, tables, and responsive navigation.",
    cover: "/ido-cover.webp",
    images: ["/georgezorakis.webp", "/projects/dashboard-app/02.webp"],
  },
  {
    slug: "samiro-villa",
    title: "Samiro Villa",
    stack: "Wordpress",
    description:
      "A small dashboard layout with charts, tables, and responsive navigation.",
    cover: "/samiro-cover.webp",
    images: ["/georgezorakis.webp", "/projects/dashboard-app/02.webp"],
  },
  {
    slug: "rea-boutique-apts",
    title: "Rea Boutique Apts",
    stack: "Wordpress",
    description:
      "A small dashboard layout with charts, tables, and responsive navigation.",
    cover: "/rea-cover.webp",
    images: ["/georgezorakis.webp", "/projects/dashboard-app/02.webp"],
  },
];
