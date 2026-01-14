export interface Experience {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface Education {
  id: number;
  date: string;
  title: string;
  institution: string;
  description: string;
}

export const experience: Experience[] = [
  {
    id: 1,
    date: "2025 - Present",
    title: "Web Developer",
    company: "Self employed - Freelancer",
    description:
      "I work as a freelance Web Developer, building modern and responsive websites for individuals and small businesses. I handle the full process, from design and development to deployment, working closely with clients to understand their needs. During this time, I have been focusing on growing my own client base, improving my workflow, and gaining hands-on experience through real projects.",
  },
  {
    id: 2,
    date: "2024 - 2025",
    title: "Software Developer",
    company: "SkyDynamics - FORTH Hellas",
    description:
      "I worked as an iOS Developer at SkyDynamics, a leading company specializing in aviation software and flight simulators. At SkyDynamics, I contributed to the development of innovative applications designed for pilot training and aviation-related solutions. Our office is located at the Foundation for Research and Technology – Hellas (FORTH) in Greece, a renowned hub for research and technological development.",
  },
  {
    id: 3,
    date: "2023 - 2024",
    title: "Web Developer",
    company: "Solvit - Freelancer",
    description:
      "I worked as a Web Developer and Designer at Solvit – I.T. Solutions & Consulting, specializing in building websites with WordPress. My role involved creating customized, functional sites that balanced aesthetics and performance, collaborating with teams to optimize user experience and meet client needs. This experience helped me develop a strong foundation in web development, design principles, and client communication.",
  },
];

export const education: Education[] = [
  {
    id: 1,
    date: "2023",
    title: "Get Into Web Development Bootcamp",
    institution: "100mentors & Bizrupt",
    description:
      "An introductory web development bootcamp organized by 100mentors and Bizrupt, focused on the fundamentals of modern web development. The program emphasized hands-on learning, basic programming concepts, and practical exercises, helping me build a solid foundation and better understand real-world web development workflows.",
  },
  {
    id: 2,
    date: "2011 - 2015",
    title: "Applied Computer Science & Multimedia",
    institution: "Hellenic Mediterranean University",
    description:
      "Studied a combination of software development, multimedia design, and applied computing. Gained hands-on experience with programming, UI/UX design, and digital media technologies. Participated in team projects and academic research focused on innovative software solutions and user-centered applications.",
  },
  {
    id: 3,
    date: "2000 - ♾️",
    title: "Music Theory & Composition",
    institution: "Heraklion's School of Music",
    description:
      "Ongoing studies in classical and contemporary music theory, harmony, and composition techniques. Developed a deep understanding of musical structure, arrangement, and creative expression. Engaged in both solo and collaborative composition projects, contributing to performances and music productions.",
  },
];
