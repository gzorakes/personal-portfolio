import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { education, experience, skills, socialLinks } from "@/data/credentials";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "Credentials of George Zorakis — full-stack web developer in Heraklion, Greece. Experience, education, and skills in Next.js, React, TypeScript, and Node.js.",
  alternates: { canonical: "/credentials" },
  openGraph: {
    title: "Credentials — George Zorakis",
    description:
      "Experience, education, and skills of George Zorakis — full-stack web developer in Heraklion, Greece.",
    url: "/credentials",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credentials — George Zorakis",
    description:
      "Experience, education, and skills of George Zorakis — full-stack web developer in Heraklion, Greece.",
  },
};

export default function CredentialsPage() {
  return (
    <div className="max-w-7xl w-full mx-auto p-4 grid md:grid-cols-3 gap-8 items-start">
      <Card className="pt-0 overflow-hidden md:sticky top-35">
        <div className="relative h-120">
          <Image
            src="/georgezorakis.webp"
            alt="George Zorakis's image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
        <CardContent>
          <div className="text-center">
            <h1 className="text-2xl font-semibold">George Zorakis</h1>
            <h2 className="text-muted-foreground pb-10">Web Developer</h2>
            <ul className="flex gap-6 pb-5 justify-center">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-accent-foreground/10 p-4 rounded-md"
                  >
                    <Image
                      src={social.icon}
                      width={30}
                      height={30}
                      alt={social.alt}
                      className={social.className}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter>
          <Link
            href="/contact"
            className={buttonVariants({ className: "w-full font-semibold" })}
          >
            Contact me
          </Link>
        </CardFooter>
      </Card>

      <div className="md:col-span-2 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">ABOUT ME</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-10">
              <p>
                I am a Full Stack Web Developer based in Heraklion, Greece,
                specializing in building modern web applications with Next.js.
                My background is rooted in music, where years of professional
                experience as a bouzouki and piano player shaped my creativity,
                structure, and attention to detail.
              </p>
              <p>
                I studied Computer Science and Multimedia at the University of
                Heraklion and started programming with Python before moving into
                full-stack web development. Today, I mainly work with Next.js,
                React, TypeScript, and Node.js on modern web applications.
              </p>
              <p>
                I like building clean, responsive interfaces and making sure the
                code behind them actually makes sense. I care about how things
                work, not just how they look.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">EXPERIENCE</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-16">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <p className="text-muted-foreground text-sm">{exp.date}</p>
                  <p className="font-semibold text-accent-foreground">
                    {exp.title}
                  </p>
                  <p className="text-muted-foreground text-sm pb-2">
                    {exp.company}
                  </p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">EDUCATION</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-16">
              {education.map((edu) => (
                <div key={edu.id}>
                  <p className="text-muted-foreground text-sm">{edu.date}</p>
                  <p className="font-semibold text-accent-foreground">
                    {edu.title}
                  </p>
                  <p className="text-muted-foreground text-sm pb-2">
                    {edu.institution}
                  </p>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">SKILLS</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <li
                  key={skill.id}
                  className="bg-accent-foreground/10 px-3 py-2 rounded-md text-xs font-bold"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
