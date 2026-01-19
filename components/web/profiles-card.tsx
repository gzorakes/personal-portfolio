import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

type ProfileCardProps = {
  orderClass?: string;
};

export default function ProfilesCard({
  orderClass = "order-6 md:order-6",
}: ProfileCardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className={orderClass}
    >
      <Card className="h-full">
        <div className="h-44 flex items-center justify-evenly">
          <Link
            href="https://github.com/gzorakes"
            aria-label="View Github profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              width={50}
              height={50}
              alt=""
              aria-hidden="true"
              className="dark:invert hover:scale-110 transition-transform"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/george-zorakis/"
            aria-label="View LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.svg"
              width={50}
              height={50}
              alt=""
              aria-hidden="true"
              className=" hover:scale-110 transition-transform"
            />
          </Link>
        </div>
        <CardContent className="mt-auto">
          <div className="flex items-center justify-between my-auto">
            <h2 className="text-2xl text-muted-foreground font-semibold">
              Profiles
            </h2>
            <Link
              href="/contact"
              aria-label="View contact page"
              className={buttonVariants()}
            >
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
