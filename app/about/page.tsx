import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function page() {
  return (
    <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card className="lg:col-span-1 p-0">
        <div className="relative h-64">
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
            I am a Crete-based web developer focused on building modern,
            reliable, and well-designed web applications using
            Javascript-Typescript, React and Next.js, scalable code and industry
            best practices.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
