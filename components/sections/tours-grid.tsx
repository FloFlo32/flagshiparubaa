import { ImageCard } from "@/components/magic/image-card";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";

export const tours = [
  {
    slug: "flagshiparuba-morning-snorkel-cruise",
    title: "Morning Splash Adventure",
    description:
      "Start your day with a snorkel cruise through crystal-clear waters and vibrant marine life. Includes gear, drinks, and sunny vibes perfect for early adventurers.",
    image: {
      src: "/ingested/flagshiparubaa/coastline-cliff-sunset.webp",
      alt: "Flagship Aruba's schooner along the coastline in the early morning light",
    },
  },
  {
    slug: "afternoon-pirate-party",
    title: "Afternoon Pirate Party",
    description:
      "Join a lively midday tour with music, rope swinging, premium snorkel spots, and an open bar. Great for thrill-seekers who love fun, sun, and a bit of pirate mischief.",
    image: {
      src: "/ingested/flagshiparubaa/afternoon-pirate-party.webp",
      alt: "Guests enjoying the Afternoon Pirate Party cruise aboard Flagship Aruba",
    },
  },
  {
    slug: "sunset-stars-cruise",
    title: "Sunset & Stars Cruise",
    description:
      "Unwind as the sun dips below the horizon on this magical evening sail. Enjoy local bites, drinks, and ocean breezes perfect for couples or friends looking to chill.",
    image: {
      src: "/ingested/flagshiparubaa/schooner-sunset-guests.webp",
      alt: "Flagship Aruba's schooner sailing into the sunset with guests aboard",
    },
  },
] as const;

export function ToursGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      {heading && (
        <RevealItem className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Boat Tours</span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Which boat will you be on?</h2>
        </RevealItem>
      )}
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((t) => (
          <RevealItem key={t.slug}>
            <ImageCard
              href={`/${t.slug}`}
              src={t.image.src}
              alt={t.image.alt}
              eyebrow="Boat Tour"
              title={t.title}
              description={t.description}
              className="h-full"
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
