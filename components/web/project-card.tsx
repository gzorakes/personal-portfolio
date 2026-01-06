import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="pt-0 hover:scale-101 transition-transform cursor-pointer">
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-60">
          <Image
            src={project.cover}
            alt={`${project.title} cover image`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            priority
            className="object-cover object-top rounded-t-xl"
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
  );
}
