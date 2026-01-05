import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function WorkTogetherCard() {
  return (
    <Card className="lg:col-span-2 order-8">
      <CardContent>
        <div className="flex justify-between items-end pt-10">
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
