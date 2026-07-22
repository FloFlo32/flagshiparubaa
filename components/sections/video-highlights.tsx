"use client";

import * as React from "react";
import { Play } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
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

function VideoCard({ clip }: { clip: (typeof clips)[number] }) {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
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
            className="group relative block size-full cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={clip.poster}
              alt={clip.caption}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
            <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25" />
            <span
              className={cn(
                "absolute inset-0 grid place-items-center transition-transform duration-200 group-hover:scale-110"
              )}
            >
              <span className="grid size-14 place-items-center rounded-full bg-white/90 text-primary shadow-lg">
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
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Behind the Scenes</span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Watch our story unfold</h2>
          <p className="mt-3 text-muted-foreground">
            Straight from our crew: rebuilding the ship, the guests who sail with us, and the moments that make it
            worth it.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="relative aspect-video bg-muted">
              <video
                src="/ingested/flagshiparubaa/video/vid-01-featured.mp4"
                poster="/ingested/flagshiparubaa/video/vid-01-poster.webp"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="size-full object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <p className="font-semibold">Ready, set, splash!</p>
              <p className="mt-1 text-sm text-muted-foreground">Guests geared up and ready to jump in.</p>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clips.map((clip) => (
            <RevealItem key={clip.src}>
              <VideoCard clip={clip} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
