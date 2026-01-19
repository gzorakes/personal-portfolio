import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CredentialsCard from "@/components/web/credentials-card";
import ProfilesCard from "@/components/web/profiles-card";
import WorkTogetherCard from "@/components/web/worktogether-card";
import { education, experience } from "@/data/credentials";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "About George Zorakis, a full-stack web developer in Heraklion, Crete, specializing in React, Next.js, TypeScript, and scalable web applications.",
  openGraph: {
    title: "About George Zorakis",
    description:
      "Full-stack web developer in Heraklion, Crete, specializing in React, Next.js, TypeScript, and scalable web applications.",
    url: "/about",
  },
  twitter: {
    title: "About George Zorakis",
    description:
      "Full-stack web developer in Heraklion, Crete, specializing in React, Next.js, TypeScript, and scalable web applications.",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Image */}
      <motion.div
        className="lg:col-span-1 md:row-span-2 lg:row-span-1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <Card className="p-0 overflow-hidden h-full">
          <div className="relative h-96 md:h-full lg:h-64">
            <Image
              src="/georgezorakis.webp"
              alt="Portrait of George Zorakis"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              priority
              className="object-cover object-top"
            />
          </div>
        </Card>
      </motion.div>

      {/* About Me card */}
      <motion.div
        className="lg:col-span-3 "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <Card className="relative h-full">
          <CardContent className="flex flex-col justify-end gap-4 h-full">
            <h1 className="text-4xl font-semibold text-accent-foreground">
              George Zorakis
            </h1>
            <p>
              I am a Crete-based web developer specializing in building modern,
              reliable, and well-designed web applications. I work primarily
              with JavaScript and TypeScript, using React and Next.js to deliver
              scalable, high-performance solutions that follow industry best
              practices.
            </p>
            <Link
              href="/credentials"
              aria-label="Read more about George Zorakis"
              className={buttonVariants({
                variant: "outline",
                className: "lg:self-start lg:-ml-1 text-muted-foreground",
                size: "sm",
              })}
            >
              More about me
            </Link>
          </CardContent>
        </Card>
      </motion.div>

      {/* Experience card */}
      <motion.div
        className="lg:col-span-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle>
              <h2 className="text-lg">EXPERIENCE</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <p className="text-muted-foreground text-sm">{exp.date}</p>
                  <p className="font-semibold text-accent-foreground">
                    {exp.title}
                  </p>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="-ml-1">
            <Link
              href="/credentials"
              aria-label="View George Zorakis experience details"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "text-muted-foreground",
              })}
            >
              Details <span className="sr-only">about experience</span>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Education card */}
      <motion.div
        className="lg:col-span-2 lg:order-4 md:order-5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle>
              <h2 className="text-lg">EDUCATION</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <p className="text-muted-foreground text-sm">{edu.date}</p>
                  <p className="font-bold text-accent-foreground">
                    {edu.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="-ml-1">
            <Link
              href="/credentials"
              aria-label="View George Zorakis education details"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "text-muted-foreground",
              })}
            >
              Details <span className="sr-only">about education</span>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>

      <ProfilesCard orderClass="order-5 md:order-4" />
      <WorkTogetherCard orderClass="order-6" />
      <CredentialsCard orderClass="order-7" />
    </div>
  );
}
