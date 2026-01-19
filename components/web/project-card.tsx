import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import * as motion from "motion/react-client";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <Card className="pt-0 hover:scale-101 transition-transform cursor-pointer overflow-hidden">
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View project: ${project.title}`}
        >
          <div className="relative aspect-video">
            <Image
              src={project.cover}
              alt={`${project.title} cover image`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
              className="object-cover"
            />
          </div>
          <CardContent className="pt-6">
            <CardDescription className="font-semibold">
              {project.stack}
            </CardDescription>
            <CardTitle>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-accent-foreground">
                  {project.title}
                </h2>
                <div className={buttonVariants({ variant: "outline" })}>
                  <ArrowRight aria-hidden="true" />
                </div>
              </div>
            </CardTitle>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
}
