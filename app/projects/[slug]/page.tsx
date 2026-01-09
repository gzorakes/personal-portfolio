import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCarousel } from "@/components/web/project-carousel";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
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
  // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
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

      <div className="pt-10">
        <ProjectCarousel images={project.images} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="font-bold text-accent-foreground">
              <p>{project.title.toUpperCase()}</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="">
              This full-stack chat application is designed to provide real-time,
              secure communication in a modern web environment. Users can
              register, log in, and instantly connect through one-on-one
              conversations powered by Socket.IO. A streamlined interface built
              with React, TailwindCSS and DaisyUI ensures a smooth, responsive
              user experience across devices.
            </p>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="font-bold text-muted-foreground/30">
              <p>#VIEW ON GITHUB</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="">
              The app integrates persistent storage with MongoDB to save user
              accounts and chat history, while Node.js and Express handle
              backend logic and RESTful endpoints. Modular architecture and
              reusable components keep the project maintainable, while Vite
              accelerates frontend development. Together, these technologies
              create a fast, reliable, and scalable messaging platform.
            </p>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
