import { Card, CardContent } from "../ui/card";
import { Download, FileUser } from "lucide-react";
import { buttonVariants } from "../ui/button";
import * as motion from "motion/react-client";

export default function CVCard() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="order-4 md:order-5"
    >
      <Card className="h-full">
        <div className="h-44 flex items-center justify-center">
          <FileUser
            size={120}
            className="text-accent-foreground"
            strokeWidth={0.8}
          />
        </div>
        <CardContent className="mt-auto">
          <div className="flex items-center justify-between my-auto">
            <h2 className="text-2xl text-muted-foreground font-semibold">
              Download CV
            </h2>
            <a
              href="/zorakis-george-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
              className={buttonVariants()}
            >
              <Download aria-hidden="true" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
