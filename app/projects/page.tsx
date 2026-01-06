import ProjectCard from "@/components/web/project-card";
import { projects } from "@/data/projects";

export default function page() {
  return (
    <div className="max-w-7xl w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
