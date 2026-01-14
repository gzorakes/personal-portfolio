import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCarousel } from "@/components/web/project-carousel";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();
  return (
    <div className="max-w-7xl w-full mx-auto p-4 ">
      <div className="relative flex items-center ">
        <Link
          href="/projects"
          className={buttonVariants({
            variant: "secondary",
          })}
        >
          <ArrowLeft aria-hidden="true" />
          <span className="hidden lg:block text-lg">Back to projects</span>
        </Link>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-center text-3xl sm:text-4xl font-bold text-accent-foreground">
          {project.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
        <Card className="gap-2 col-span-2 bg-linear-0">
          <CardHeader>
            <CardTitle className="font-bold text-muted-foreground/30">
              <p>ABOUT</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-justify leading-relaxed tracking-wide font-medium text-muted-foreground">
              {project.about}
            </p>
          </CardContent>
        </Card>

        <Card className="gap-2 col-span-2 bg-linear-0 order-3 lg:order-2">
          <CardHeader className="">
            <CardTitle className="font-bold text-muted-foreground/30">
              <p>#VIEW ON GITHUB</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-justify leading-relaxed tracking-wide font-medium text-muted-foreground">
              {project.description}
            </p>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 col-span-2 order-2 lg:order-3">
          <ProjectCarousel images={project.images} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-8">
        <ul className="flex flex-wrap justify-center gap-4 text-sm font-bold text-muted-foreground">
          {project.technologies.map((tech) => (
            <li key={tech} className="bg-secondary px-4 py-2 rounded-lg">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
