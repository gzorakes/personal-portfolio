import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

type WorkTogetherCardProps = {
  orderClass?: string;
};

export default function WorkTogetherCard({
  orderClass = "order-8",
}: WorkTogetherCardProps) {
  return (
    <Card className={`lg:col-span-2 ${orderClass}`}>
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
  );
}
