import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto my-auto p-4">
      {/* Content */}
      <div className="flex flex-col items-center justify-center px-4 text-center">
        {/* 404 Number */}
        <div className="mb-6 animate-fade-in-up">
          <h1 className="text-8xl md:text-9xl font-black text-primary/50 leading-none mb-2">
            404
          </h1>
          <div className="h-1 w-24 bg-linear-to-r from-primary/0 via-primary/50 to-primary/0 mx-auto" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-primary/80 mb-4 animate-fade-in-up max-w-2xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
          Unfortunately, the page you are looking for, does not exist. It might
          have been moved or deleted.
        </p>

        {/* Button */}
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          <ArrowLeft className="size-6" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
