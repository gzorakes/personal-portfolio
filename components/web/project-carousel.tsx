"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ProjectCarousel({ images }: { images: string[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
      aria-label="Project screenshots"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {images.map((src, i) => (
          <CarouselItem key={src}>
            <Card className="p-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video w-full [transform:translateZ(0)]">
                  <Image
                    src={src}
                    fill
                    alt={`Project screenshot ${i + 1}`}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 95vw, 1280px"
                    priority={i === 0}
                    loading="eager"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
