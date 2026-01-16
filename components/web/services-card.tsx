import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function ServicesCard() {
  return (
    <Card className="lg:col-span-2 md:col-span-2 order-5 md:order-4 lg:order-5">
      <div className="flex items-center justify-evenly h-44 relative">
        <Image
          src="/js-yellow.svg"
          width={50}
          height={50}
          alt="JavaScript logo"
          // className="dark:invert"
        />
        <Image
          src="/react-color.svg"
          width={50}
          height={45}
          alt="React logo"
          // className="dark:invert"
        />
        <Image
          src="/next.svg"
          width={50}
          height={50}
          alt="Next.js logo"
          className="dark:invert"
        />
        <Image
          src="/db.svg"
          width={50}
          height={51}
          alt="Database image"
          className="dark:invert"
        />
      </div>
      <CardContent className="mt-auto">
        <div className="flex items-center justify-between my-auto">
          <h2 className="text-2xl text-muted-foreground font-semibold">
            Services Offering
          </h2>
          {/* TODO: Services Page (?) */}
          {/* <Link
            href="/services"
            aria-label="View services"
            className={buttonVariants()}
          >
            <ArrowRight aria-hidden="true" />
          </Link> */}
        </div>
      </CardContent>
    </Card>
  );
}
