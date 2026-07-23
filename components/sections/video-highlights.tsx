"use client";

import * as React from "react";
import { Play, Film } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";
import { AutoSlider } from "@/components/magic/auto-slider";
import { cn } from "@/lib/utils";

const clips = [
  {
    src: "/ingested/flagshiparubaa/video/tour-clip-3.mp4",
    poster: "/ingested/flagshiparubaa/video/tour-clip-3-poster.webp",
    caption: "Part 4: Relief",
    body: "Hauling the schooner out for her restoration.",
  },
  {
    src: "/ingested/flagshiparubaa/video/tour-clip-1.mp4",
    poster: "/ingested/flagshiparubaa/video/tour-clip-1-poster.webp",
    caption: "Part 3: She Has to Come Out",
    body: "Below deck, ahead of the big haul-out.",
  },
  {
    src: "/ingested/flagshiparubaa/video/tour-clip-2.mp4",
    poster: "/ingested/flagshiparubaa/video/tour-clip-2-poster.webp",
    caption: "Meet the beast of a machine",
    body: "The crew talks through the ship's rebuild.",
  },
  {
    src: "/ingested/flagshiparubaa/video/tour-clip-4.mp4",
    poster: "/ingested/flagshiparubaa/video/tour-clip-4-poster.webp",
    caption: "Out on the water",
    body: "Back where she belongs.",
  },
];

function VideoCard({ clip, index }: { clip: (typeof clips)[number]; index: number }) {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ocean/10">
      <div className="relative aspect-[9/16] bg-muted">
        {playing ? (
          <video
            ref={videoRef}
            src={clip.src}
            poster={clip.poster}
            controls
            autoPlay
            playsInline
            className="size-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${clip.caption}`}
            className="relative block size-full cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={clip.poster}
              alt={clip.caption}
              loading="lazy"
              decoding="async"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
            <span className="absolute left-3 top-3 grid size-8 place-items-center rounded-full bg-ocean text-xs font-bold text-ocean-foreground shadow-md">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="absolute inset-0 grid place-items-center transition-transform duration-200 group-hover:scale-110">
              <span className="grid size-14 place-items-center rounded-full bg-white/90 text-ocean shadow-lg">
                <Play className="size-6 fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold">{clip.caption}</p>
        <p className="mt-1 text-sm text-muted-foreground">{clip.body}</p>
      </div>
    </div>
  );
}

export function VideoHighlights() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 sm:py-24">
      <AuroraBackground className="opacity-40" />
      <GridPattern />
      <div className="container-px relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Behind the Scenes</span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Watch our story unfold</h2>
          <p className="mt-3 text-muted-foreground">
            Straight from our crew: rebuilding the ship, the guests who sail with us, and the moments that make it
            worth it.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-ocean/5">
            <BorderBeam colorFrom="var(--color-ocean)" colorTo="var(--color-aurora-1)" size={90} />
            <div className="relative aspect-video bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparubaa/video/vid-01.gif"
                alt="Guests geared up and ready to jump in off the schooner"
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ocean px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ocean-foreground shadow-md">
                <Film className="size-3.5" /> Featured
              </span>
            </div>
            <div className={cn("p-5 text-center sm:p-6")}>
              <p className="text-lg font-semibold">Ready, set, splash!</p>
              <p className="mt-1 text-sm text-muted-foreground">Guests geared up and ready to jump in.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <AutoSlider itemClassName="w-[74%] sm:w-[42%] lg:w-[24%]">
            {clips.map((clip, i) => (
              <VideoCard key={clip.src} clip={clip} index={i} />
            ))}
          </AutoSlider>
        </Reveal>
      </div>
    </section>
  );
}
