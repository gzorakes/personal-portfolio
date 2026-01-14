import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { education, experience } from "@/data/credentials";
import Image from "next/image";
import Link from "next/link";

export default function CredentialsPage() {
  return (
    <div className="max-w-7xl w-full mx-auto p-4 grid grid-cols-3 gap-20 items-start">
      <Card className="pt-0 overflow-hidden sticky top-35">
        <div className="relative h-120">
          <Image
            src="/georgezorakis.webp"
            alt="George Zorakis's image"
            fill
            className="object-cover object-center"
          />
        </div>
        <CardContent>
          <div className="text-center">
            <h1 className="text-2xl font-semibold">George Zorakis</h1>
            <h2 className="text-muted-foreground pb-10">Web Developer</h2>
            <ul className="flex gap-6 justify-center pb-5">
              <li>
                <Image
                  src="/github.svg"
                  width={40}
                  height={40}
                  alt="github icon"
                  className="dark:invert hover:scale-105 transition-transform"
                />
              </li>
              <li>
                <Image
                  src="/linkedin.svg"
                  width={40}
                  height={40}
                  alt="github icon"
                  className="hover:scale-105 transition-transform"
                />
              </li>
            </ul>
          </div>
        </CardContent>

        <CardFooter>
          <Link href="/contact" className="w-full">
            <Button className="w-full font-semibold">Contact me</Button>
          </Link>
        </CardFooter>
      </Card>

      <div className="col-span-2 space-y-10">
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="text-lg">ABOUT ME</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-10">
              <p>
                I am a Full Stack Web Developer living in Heraklion, Greece. My
                background is rooted in music. I studied it extensively and have
                been working professionally as a bouzouki and piano player for
                several years. Music composition remains a big part of my life
                and continues to influence how I approach creativity and
                structure in my work.
              </p>
              <p>
                I studied Computer Science and Multimedia at the University of
                Heraklion, gaining a strong foundation in both technical and
                visual aspects of digital creation. My programming journey began
                three years ago with Python and quickly grew into full-stack web
                development. Today, I work with modern technologies like React,
                Node.js, Express, and MongoDB, building applications that are
                fast, scalable, and user-friendly.
              </p>
              <p>
                I enjoy designing and developing clean, responsive interfaces
                while ensuring reliable and maintainable architecture behind the
                scenes. With a strong eye for detail and a passion for
                usability, I focus on delivering applications that balance
                performance with design clarity.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-secondary">
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

        <Card className="lg:col-span-2 bg-secondary">
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
      </div>
    </div>
  );
}
