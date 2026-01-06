import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CredentialsCard from "@/components/web/credentials-card";
import ProfilesCard from "@/components/web/profiles-card";
import WorkTogetherCard from "@/components/web/worktogether-card";
import Image from "next/image";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card className="lg:col-span-1 md:row-span-2 lg:row-span-1 p-0">
        <div className="relative h-96 md:h-full lg:h-64">
          <Image
            src="/georgezorakis.webp"
            alt="George Zorakis's image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            priority
            className="object-cover object-top rounded-xl"
          />
        </div>
      </Card>

      <Card className="lg:col-span-3 relative">
        <CardContent className="flex flex-col justify-end gap-4 h-full">
          <h1 className="text-4xl font-semibold text-accent-foreground">
            George Zorakis
          </h1>
          <p className="text-muted-foreground">
            I am a Crete-based web developer specializing in building modern,
            reliable, and well-designed web applications. I work primarily with
            JavaScript and TypeScript, using React and Next.js to deliver
            scalable, high-performance solutions that follow industry best
            practices.
          </p>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">EXPERIENCE</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-muted-foreground text-sm">2025 - Present</p>
              <p className="font-semibold text-accent-foreground">
                Web Developer
              </p>
              <p className="text-muted-foreground text-sm">
                Self employed - Freelancer
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">2024 - 2025</p>
              <p className="font-semibold text-accent-foreground">
                Software Developer
              </p>
              <p className="text-muted-foreground text-sm">
                SkyDynamics - FORTH Hellas
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">2023 - 2024</p>
              <p className="font-semibold text-accent-foreground">
                Web Developer
              </p>
              <p className="text-muted-foreground text-sm">
                Solvit - Freelancer
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2 lg:order-4 md:order-5">
        <CardHeader>
          <CardTitle className="text-lg">EDUCATION</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-muted-foreground text-sm">2023</p>
              <p className="font-bold text-accent-foreground">
                Get Into Web Development Bootcamp
              </p>
              <p className="text-muted-foreground text-sm">
                100mentors & Bizrupt
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">2011 - 2015</p>
              <p className="font-bold text-accent-foreground">
                Applied Computer Science & Multimedia
              </p>
              <p className="text-muted-foreground text-sm">
                University of Heraklion
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">2024 - ♾️</p>
              <p className="font-bold text-accent-foreground">
                Music Theory & Composition
              </p>
              <p className="text-muted-foreground text-sm">
                Heraklion&apos;s School of Music
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <ProfilesCard orderClass="order-5 md:order-4" />
      <WorkTogetherCard orderClass="order-6" />
      <CredentialsCard orderClass="order-7" />
    </div>
  );
}
