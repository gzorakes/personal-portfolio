import { Card, CardContent } from "../ui/card";
import { ArrowRight, FolderKanban } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import * as motion from "motion/react-client";

export default function ProjectsCard() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="order-3"
    >
      <Card className="h-full">
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
    </motion.div>
  );
}
