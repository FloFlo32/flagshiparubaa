import { ArrowRight, Compass } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { HeroSlideshow } from "@/components/magic/hero-slideshow";
import { BookButton } from "@/components/ui/book-button";

const bullets = ["Sailing & Snorkeling Bliss", "Splash & Swing Thrills", "Sunset & Dinner Cruises"];

const slides = [
  { src: "/ingested/flagshiparubaa/boat-aerial-turquoise.webp", alt: "" },
  { src: "/ingested/flagshiparubaa/schooner-sunset-guests.webp", alt: "" },
  { src: "/ingested/flagshiparubaa/snorkeler-with-mask.webp", alt: "" },
  { src: "/ingested/flagshiparubaa/coastline-cliff-sunset.webp", alt: "" },
  { src: "/ingested/flagshiparubaa/tall-ship-horizon.webp", alt: "" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      <HeroSlideshow images={slides} />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/55 via-primary/45 to-primary/70" aria-hidden />

      <div className="container-px relative z-10 mx-auto max-w-6xl py-24 text-center">
        <Reveal>
          <span className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <Compass className="size-3.5" /> MooMba Beach Bar, Palm Beach
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Sail, Splash & Sunset Magic
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">Set Sail with Flagship Aruba!</p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {bullets.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookButton className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-base font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]">
              Book Now <ArrowRight className="size-4" />
            </BookButton>
            <a
              href="/boat-tours"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20 active:scale-[0.98]"
            >
              See our tours
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
