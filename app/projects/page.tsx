import { Metadata } from "next";
import ProjectCard from "@/components/web/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of web development projects by George Zorakis, showcasing work with React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Projects — George Zorakis",
    description:
      "A selection of web development projects by George Zorakis, showcasing work with React, Next.js, TypeScript, and modern web technologies.",
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — George Zorakis",
    description:
      "A selection of web development projects by George Zorakis, showcasing work with React, Next.js, TypeScript, and modern web technologies.",
  },
};

export default function page() {
  return (
    <>
      <h1 className="sr-only">Projects</h1>
      <div className="max-w-7xl w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
