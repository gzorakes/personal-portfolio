import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCarousel } from "@/components/web/project-carousel";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as motion from "motion/react-client";

export async function generateMetadata({
  params,
}: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "This project does not exist.",
      robots: { index: false, follow: false },
    };
  }

  const description = project.description ?? project.about ?? "";
  const ogImage = project.cover ? [{ url: project.cover }] : undefined;

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — George Zorakis`,
      description,
      url: `/projects/${project.slug}`,
      images: ogImage,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — George Zorakis`,
      description,
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

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
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          <Card className="gap-2 bg-linear-0 h-full">
            <CardHeader>
              <CardTitle className="font-bold text-muted-foreground/30">
                <h2>ABOUT</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed tracking-wide">{project.about}</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="col-span-2 order-3 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          <Card className="gap-2 bg-linear-0 h-full">
            <CardHeader className="">
              <CardTitle className="font-bold text-muted-foreground/30">
                <Link
                  href={project.href || notFound()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{project.href}</p>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed tracking-wide">
                {project.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:col-span-4 col-span-2 order-2 lg:order-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          <ProjectCarousel images={project.images} />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto pt-8">
        <ul className="flex flex-wrap justify-center gap-4 text-sm font-bold text-muted-foreground">
          {project.technologies.map((tech, i) => (
            <motion.li
              key={tech}
              className="bg-secondary px-4 py-2 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", delay: i * 0.1 }}
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
