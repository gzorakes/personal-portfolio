import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

type WorkTogetherCardProps = {
  orderClass?: string;
};

export default function WorkTogetherCard({
  orderClass = "order-8",
}: WorkTogetherCardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className={`lg:col-span-2 ${orderClass}`}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col h-full justify-end">
          <div className="flex justify-between items-end">
            <div className="text-4xl font-semibold leading-tight text-accent-foreground">
              <p>Let&apos;s</p>
              <p>work together</p>
            </div>

            <div className="">
              <Link
                href="/contact"
                aria-label="View contact page"
                className={buttonVariants()}
              >
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
