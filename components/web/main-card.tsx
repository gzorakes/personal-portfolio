import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function MainCard() {
  return (
    <Card className="md:col-span-2 p-0 order-1">
      <div className="grid grid-cols-2">
        <div className="col-span-1 relative h-full">
          <Image
            src="/georgezorakis.webp"
            alt="George Zorakis's image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            priority
            className="object-cover object-top rounded-l-xl"
          />
        </div>
        <div className="space-y-6 px-0 py-6 ">
          <CardHeader>
            <CardDescription>
              <h2>Web Developer</h2>
            </CardDescription>
            <CardTitle>
              <h1 className="text-4xl text-accent-foreground">
                George
                <br /> Zorakis.
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I am a Full Stack Web Developer based in Heraklion, Greece.
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Link
              href="/about"
              className={buttonVariants({ className: "w-full" })}
            >
              Learn more
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
