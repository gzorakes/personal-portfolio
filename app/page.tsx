import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
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
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 grid grid-cols-4 gap-8">
      <Card className="lg:col-span-2 col-span-4 p-0">
        <div className="grid grid-cols-2">
          <div className="col-span-1 relative">
            <Image
              src="/georgezorakis.webp"
              alt="George Zorakis image"
              fill
              className="object-cover object-top rounded-l-xl"
            />
          </div>
          <div className="space-y-6 px-0 py-6">
            <CardHeader>
              <CardDescription>
                <h1>Web Developer</h1>
              </CardDescription>
              <CardTitle>
                <h2 className="text-4xl">
                  George
                  <br /> Zorakis.
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>I am a Full Stack Web Developer based in Heraklion, Greece.</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link
                href="about"
                className={buttonVariants({ className: "w-full" })}
              >
                Learn more
              </Link>
            </CardFooter>
          </div>
        </div>
      </Card>

      <Card className="">
        <div className="h-44 flex items-center justify-center">
          {/* <Image src="/credentials.svg" fill alt="credentials image" /> */}
          <FingerprintPattern size={120} className="text-foreground" />
        </div>
        <CardContent className="mt-auto">
          <div className="flex items-center justify-between my-auto">
            <h2 className="text-2xl text-muted-foreground font-semibold">
              Credentials
            </h2>
            <Link href="/about" className={buttonVariants()}>
              <ArrowRight />
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="">
        <div className="h-44 flex items-center justify-center">
          {/* <Image src="/laptop.svg" fill alt="credentials image" /> */}
          <FolderKanban size={120} className="text-foreground" />
        </div>
        <CardContent className="mt-auto">
          <div className="flex items-center justify-between my-auto">
            <h2 className="text-2xl text-muted-foreground font-semibold">
              Projects
            </h2>
            <Link href="/projects" className={buttonVariants()}>
              <ArrowRight />
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="">
        <div className="h-44 flex items-center justify-center">
          {/* <Image src="/cv.svg" fill alt="credentials image" /> */}
          <FileUser size={120} className="text-foreground" />
        </div>
        <CardContent className="mt-auto">
          <div className="flex items-center justify-between my-auto">
            <h2 className="text-2xl text-muted-foreground font-semibold">
              Download CV
            </h2>
            <Link href="/projects" className={buttonVariants()}>
              <Download />
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <div className="flex items-center justify-evenly h-44 relative">
          <Image
            src="/js.svg"
            width={50}
            height={50}
            alt="credentials image"
            className="dark:invert"
          />
          <Image
            src="/react.svg"
            width={50}
            height={50}
            alt="credentials image"
            className="dark:invert"
          />
          <Image
            src="/next.svg"
            width={50}
            height={50}
            alt="credentials image"
            className="dark:invert"
          />
          <Image
            src="/db.svg"
            width={50}
            height={50}
            alt="credentials image"
            className="dark:invert"
          />
        </div>
        <CardContent className="mt-auto">
          <div className="flex items-center justify-between my-auto">
            <h2 className="text-2xl text-muted-foreground font-semibold">
              Services Offering
            </h2>
            <Link href="/projects" className={buttonVariants()}>
              <ArrowRight />
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="">
        <div className="h-44 flex items-center justify-evenly">
          <Link href="/">
            <Image
              src="/github.svg"
              width={50}
              height={50}
              alt="credentials image"
              className="dark:invert hover:scale-110 transition-transform"
            />
          </Link>
          <Link href="/">
            <Image
              src="/linkedin.svg"
              width={50}
              height={50}
              alt="credentials image"
              className="dark:invert hover:scale-110 transition-transform"
            />
          </Link>
        </div>
        <CardContent className="mt-auto">
          <div className="flex items-center justify-between my-auto">
            <h2 className="text-2xl text-muted-foreground font-semibold">
              Profiles
            </h2>
            <Link href="/projects" className={buttonVariants()}>
              <ArrowRight />
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>George Zorakis</CardTitle>
          <CardDescription>Web Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>George Zorakis</CardTitle>
          <CardDescription>Web Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}
