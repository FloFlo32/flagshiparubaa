import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { BOOKING_URL } from "@/components/sections/navbar";

const bullets = ["Sailing & Snorkeling Bliss", "Splash & Swing Thrills", "Sunset & Dinner Cruises"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/40">
      <div className="container-px mx-auto max-w-6xl pt-16 pb-14 text-center sm:pt-24 sm:pb-20">
        <Reveal>
          <Badge variant="accent" className="mx-auto">
            <Compass className="size-3.5" /> MooMba Beach Bar, Palm Beach
          </Badge>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Sail, Splash & Sunset Magic
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Set Sail with Flagship Aruba!
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {bullets.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            >
              Book Now <ArrowRight className="size-4" />
            </a>
            <a
              href="/boat-tours"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
            >
              See our tours
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.28}>
        <div className="container-px mx-auto max-w-6xl pb-16 sm:pb-24">
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
            <Image
              src="/ingested/flagshiparubaa/boat-aerial-turquoise.webp"
              alt="Flagship Aruba's schooner anchored in turquoise water off Aruba, guests swimming alongside"
              width={1600}
              height={800}
              priority
              sizes="100vw"
              quality={80}
              className="aspect-[16/8] w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
