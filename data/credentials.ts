interface Experience {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
}

interface Education {
  id: number;
  date: string;
  title: string;
  institution: string;
  description: string;
}

interface Skill {
  id: number;
  name: string;
}

export const experience: Experience[] = [
  {
    id: 1,
    date: "2025 - Present",
    title: "Web Developer",
    company: "Self employed - Freelancer",
    description:
      "Freelance Web Developer building modern, responsive websites for individuals and small businesses. I manage the full process from design and development to deployment, working closely with clients to deliver reliable, user-focused solutions while growing my own client base through real projects.",
  },
  {
    id: 2,
    date: "2024 - 2025",
    title: "Software Developer",
    company: "SkyDynamics - FORTH Hellas",
    description:
      "Worked as an iOS Developer at SkyDynamics, contributing to aviation and flight-simulation applications for pilot training. Developed features for production iOS apps within a professional R&D environment at FORTH Hellas in Greece.",
  },
  {
    id: 3,
    date: "2023 - 2024",
    title: "Web Developer",
    company: "Solvit - Freelancer",
    description:
      "Worked as a Web Developer and Designer at Solvit, building custom WordPress websites focused on performance, usability, and client needs. Collaborated with teams to deliver visually clean and functional web solutions.",
  },
];

export const education: Education[] = [
  {
    id: 1,
    date: "2023",
    title: "Get Into Web Development Bootcamp",
    institution: "100mentors & Bizrupt",
    description:
      "Introductory web development bootcamp focused on modern web fundamentals, hands-on practice, and real-world development workflows.",
  },
  {
    id: 2,
    date: "2011 - 2015",
    title: "Applied Computer Science & Multimedia",
    institution: "Hellenic Mediterranean University",
    description:
      "Studied software development, multimedia, and applied computing with hands-on experience in programming, UI/UX design, and team-based projects.",
  },
  {
    id: 3,
    date: "2000 - ♾️",
    title: "Music Theory & Composition",
    institution: "Heraklion's School of Music",
    description:
      "Ongoing studies in music theory and composition, developing strong creative structure, arrangement skills, and collaborative experience in music projects.",
  },
];

export const skills: Skill[] = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "TypeScript" },
  { id: 5, name: "React" },
  { id: 6, name: "Next.js" },
  { id: 7, name: "Zustand" },
  { id: 8, name: "Tailwind" },
  { id: 9, name: "Shadcn" },
  { id: 10, name: "Framer Motion" },
  { id: 11, name: "REST APIs" },
  { id: 12, name: "Web Design" },

  { id: 13, name: "Node.js" },
  { id: 14, name: "Express" },
  { id: 15, name: "MongoDB" },
  { id: 16, name: "Firebase" },

  { id: 17, name: "Swift" },
  { id: 18, name: "SwiftUI" },
  { id: 19, name: "iOS Development" },

  { id: 20, name: "Git" },
  { id: 21, name: "GitHub" },
  { id: 22, name: "Debugging" },
  { id: 23, name: "Code Refactoring" },

  { id: 24, name: "WordPress" },
  { id: 25, name: "Elementor" },
];
