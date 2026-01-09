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
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {images.map((src) => (
          <CarouselItem key={src}>
            <Card className="p-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video w-full">
                  <Image
                    src={src}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover object-top"
                    alt=""
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
