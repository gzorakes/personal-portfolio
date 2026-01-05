import { Card, CardContent } from "../ui/card";
import { ArrowRight, FolderKanban } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function ProjectsCard() {
  return (
    <Card className="order-3">
      <div className="h-44 flex items-center justify-center">
        <FolderKanban
          size={120}
          className="text-accent-foreground"
          strokeWidth={0.8}
        />
      </div>
      <CardContent className="mt-auto">
        <div className="flex items-center justify-between my-auto">
          <h2 className="text-2xl text-muted-foreground font-semibold">
            Projects
          </h2>
          <Link
            href="/projects"
            aria-label="View projects"
            className={buttonVariants()}
          >
            <span className="sr-only">View projects</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
