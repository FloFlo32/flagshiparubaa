"use client";

import * as React from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type SlideshowImage = { src: string; alt: string };

/**
 * HeroSlideshow — full-bleed crossfading background for a hero section.
 * Sits absolutely behind the hero content (z-0); the caller adds an overlay
 * + content on top. Pauses on prefers-reduced-motion (shows the first image).
 */
export function HeroSlideshow({
  images,
  interval = 5500,
  className,
}: {
  images: SlideshowImage[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = React.useState(0);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce || images.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [reduce, images.length, interval]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      {images.map((img, i) =>
        i === 0 ? (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority
            sizes="100vw"
            quality={78}
            className={cn(
              "object-cover transition-opacity duration-[1500ms] ease-in-out",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        ) : (
          // Lazy plain <img> beyond the first frame — keeps an N-slide rotation
          // off the next/image optimizer cap (see CLAUDE.md image performance rules).
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-[1500ms] ease-in-out",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        )
      )}
    </div>
  );
}
