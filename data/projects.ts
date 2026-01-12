export interface Project {
  slug: string;
  title: string;
  stack: string;
  about: string;
  description: string;
  cover: string; // shown on cards
  images: string[]; // gallery on detail page
  href?: string; // optional external link (live)
  repo?: string; // optional github link
}

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Portfolio",
    stack: "Next.js / TypeScript",
    about:
      "This is my personal portfolio website, designed and built to showcase who I am and what I create. It features a custom visual identity, an in-depth about section, a credentials page telling my full journey, and curated personal projects—giving visitors a clear, authentic view of my skills and growth.",
    description:
      "Built with Next.js 16 and TypeScript, using Tailwind CSS and shadcn. Framer Motion adds smooth animations. The project follows a modern component-driven architecture, emphasizing performance, accessibility, and maintainability, with a fully custom design crafted by me.",
    cover: "/portfolio-cover.webp",
    images: ["/portfolio-cover.webp", "/ido-cover.webp", "/chatup-cover.webp"],
    href: "https://georgezorakis.com",
    repo: "https://github.com/yourname/portfolio",
  },
  {
    slug: "mern-chat",
    title: "Mern Chat",
    stack: "React",
    about:
      "MERN Chat is a full-stack real-time messaging app where users can register, log in, and instantly chat one-on-one using Socket.IO. It delivers secure, instant communication with a clean, responsive UI designed with React, TailwindCSS, and DaisyUI, optimized for smooth performance across devices.",
    description:
      "Built with a modern MERN stack, the frontend uses React with Vite, TailwindCSS, and DaisyUI for fast, responsive UI. The backend relies on Node.js, Express, and Socket.IO for real-time messaging, with MongoDB for data persistence and JWT for authentication. A modular architecture ensures scalability and maintainability.",
    cover: "/mernchat-cover.webp",
    images: ["/mernchat-cover.webp", "/projects/ecommerce-ui/02.webp"],
    repo: "https://github.com/yourname/ecommerce-ui",
  },
  {
    slug: "chat-up",
    title: "Chat Up",
    stack: "React",
    about:
      "Chat Up is a full-stack real-time chat application where users can register, log in, upload profile images, and engage in one-on-one conversations. It features a responsive, customizable interface with multiple themes and seamless real-time messaging built for performance, scalability, and an intuitive user experience.",
    description:
      "The frontend uses React with reusable components and TailwindCSS/DaisyUI for responsive design and theme support, powered by Vite for fast builds. The backend is built with Node.js, Express, and Socket.IO for real-time chat, MongoDB for persistent data, JWT authentication, and Cloudinary for profile image uploads.",
    cover: "/chatup-cover.webp",
    images: ["/chatup-cover.webp", "/projects/dashboard-app/02.webp"],
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    stack: "React",
    about:
      "Admin Dashboard is a modern, responsive web app that simplifies data management with intuitive interfaces and interactive visuals. Built to display and organize analytics, users, orders, products, and settings, it offers clean, consistent design across devices. Dynamic charts and smooth animations enhance user engagement and data insight clarity.",
    description:
      "Developed using React with a modular, component-based architecture, Admin Dashboard uses TailwindCSS and DaisyUI for UI styling and Vite for fast development. Recharts powers interactive visualizations and Framer Motion adds fluid animations. The scalable codebase supports reuse across features, focusing on performance, responsiveness, and maintainability.",
    cover: "/dashboard-cover.webp",
    images: ["/dashboard-cover.webp", "/projects/dashboard-app/02.webp"],
  },
  {
    slug: "ido-ios",
    title: "IDO - Wedding",
    stack: "IOS - Swift",
    about:
      "IDO is a beautifully designed iOS wedding planner app that helps couples organize their big day. Users set their role and wedding date, then plan venues, invitations, flowers, attire, music, guests, and more. Sections include notes and images, keeping all details in one streamlined, joyful planning experience.",
    description:
      "Developed using Swift and SwiftUI with an MVVM architecture, IDO emphasizes maintainability and scalability. It uses Firebase for backend and authentication, SwiftData and UserDefaults for local persistence, and Swift Concurrency for async tasks. Modular design, dependency injection, unit/UI testing, custom build schemes, and Xcode Cloud CI ensure robust development workflows.",
    cover: "/ido-cover.webp",
    images: ["/ido-cover.webp", "/projects/dashboard-app/02.webp"],
  },
  {
    slug: "samiro-villa",
    title: "Samiro Villa",
    stack: "Wordpress",
    about:
      "Samiro Villa is a beautifully designed WordPress website showcasing an exclusive villa in Heraklion, Crete. It offers visitors an intuitive way to explore the villa’s features, amenities, gallery, location, and booking options. The clean layout and clear sections help users easily discover everything needed for a perfect getaway.",
    description:
      "Built with WordPress using the Elementor page builder to create a fully responsive, visually rich layout without sacrificing performance. Elementor enabled flexible section design, custom styling, and easy content management. The site follows best practices for responsiveness, SEO structure, and smooth navigation across all devices.",
    cover: "/samiro-cover.webp",
    images: ["/samiro-cover.webp", "/projects/dashboard-app/02.webp"],
  },
  {
    slug: "rea-boutique-apts",
    title: "Rea Boutique Apts",
    stack: "Wordpress",
    about:
      "Rea Boutique Apts is a WordPress website showcasing stylish vacation apartments in Rethymno, Crete. It highlights beautiful lodging options, amenities, gallery images, location, and booking links, helping visitors explore features and book stays easily. The layout focuses on comfort, local charm, and clear content for an inviting browsing experience.",
    description:
      "Built on WordPress using the Elementor page builder, Rea Boutique Apts uses responsive design principles to ensure a smooth experience across devices. Elementor enables custom layouts, image galleries, and content management without code. SEO-friendly structure and intuitive navigation make the site easy for visitors and owners to update.",
    cover: "/rea-cover.webp",
    images: ["/rea-cover.webp", "/projects/dashboard-app/02.webp"],
  },
];
