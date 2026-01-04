import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Download,
  FileUser,
  FingerprintPattern,
  FolderKanban,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* IMAGE */}
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

      {/* CREDENTIALS */}
      <Card className="order-2">
        <div className="h-44 flex items-center justify-center">
          <FingerprintPattern
            size={120}
            className="text-accent-foreground"
            strokeWidth={0.8}
          />
        </div>
        <CardContent className="mt-auto">
          <div className="flex items-center justify-between my-auto">
            <h2 className="text-2xl text-muted-foreground font-semibold">
              Credentials
            </h2>
            <Link
              href="/credentials"
              aria-label="View credentials page"
              className={buttonVariants()}
            >
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* PROJECTS */}
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

      {/* CV */}
      <Card className="order-4 md:order-5">
        <div className="h-44 flex items-center justify-center">
          {/* <Image src="/cv.svg" fill alt="credentials image" /> */}
          <FileUser
            size={120}
            className="text-accent-foreground"
            strokeWidth={0.8}
          />
        </div>
        {/* CHANGE LATER - DOWNLOAD CV HERE ITS NOT A LINK */}
        <CardContent className="mt-auto">
          <div className="flex items-center justify-between my-auto">
            <h2 className="text-2xl text-muted-foreground font-semibold">
              Download CV
            </h2>
            <Link
              href="/zorakis-george-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
              className={buttonVariants()}
            >
              <Download aria-hidden="true" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* SERVICES */}
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
            <Link
              href="/services"
              aria-label="View services"
              className={buttonVariants()}
            >
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* PROFILES */}
      <Card className="order-6 md:order-6">
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

      {/* STATS */}
      <Card className="lg:col-span-2 order-7">
        <div className="flex items-center justify-evenly text-center h-full">
          <div className="space-y-4">
            <p className="text-4xl font-bold text-accent-foreground">03</p>
            <p className="text-sm text-muted-foreground">
              YEARS <br /> EXPERIENCE
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-4xl font-bold text-accent-foreground">20+</p>
            <p className="text-sm text-muted-foreground">
              COMPLETED <br />
              PROJECTS
            </p>
          </div>
        </div>
      </Card>

      {/* WORK TOGETHER */}
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
    </main>
  );
}
