import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookButton } from "@/components/ui/book-button";
import { snorkelSites } from "@/lib/snorkel-sites";

export const tours = [
  {
    slug: "flagshiparuba-morning-snorkel-cruise",
    title: "Morning Splash Adventure",
    description:
      "Start your day with a snorkel cruise through crystal-clear waters and vibrant marine life. Includes gear, drinks, and sunny vibes perfect for early adventurers.",
    image: {
      src: "/ingested/flagshiparubaa/guest-b.webp",
      alt: "Guests in snorkel gear and life vests, ready to jump in for the morning cruise",
    },
    activityId: "01083159-5861-4408-b78d-22c81e19faa4",
    price: "$69",
    duration: "4 hours",
    departs: "9:00 AM",
    capacity: "Up to 40 guests",
    highlights: [
      "Snorkel stops at Boca Catalina and Malmok Reef",
      "All snorkel gear and flotation vests included",
      "Drinks and snacks served throughout",
      "Children under 10 welcome at a reduced rate",
    ],
  },
  {
    slug: "afternoon-pirate-party",
    title: "Afternoon Pirate Party",
    description:
      "Join a lively midday tour with music, rope swinging, premium snorkel spots, and an open bar. Great for thrill-seekers who love fun, sun, and a bit of pirate mischief.",
    image: {
      src: "/ingested/flagshiparubaa/guest-e.webp",
      alt: "A big group of guests cheering aboard the schooner during the Afternoon Pirate Party",
    },
    activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
    price: "$79",
    duration: "3 hours",
    departs: "1:00 PM",
    capacity: "Up to 40 guests",
    highlights: [
      "The signature rope-swing finale at the SS Antilla",
      "Music on deck and a crew that keeps the energy up",
      "Self-service open bar: cocktails, beer, wine, and soft drinks",
      "Adults and families welcome",
    ],
  },
  {
    slug: "sunset-stars-cruise",
    title: "Sunset & Stars Cruise",
    description:
      "Unwind as the sun dips below the horizon on this magical evening sail. Enjoy local bites, drinks, and ocean breezes perfect for couples or friends looking to chill.",
    image: {
      src: "/ingested/flagshiparubaa/guest-g.webp",
      alt: "Guests celebrating together at sunset aboard the schooner",
    },
    activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
    price: "$89",
    duration: "2.5 hours",
    departs: "At sunset (time varies by season)",
    capacity: "Up to 40 guests",
    highlights: [
      "Timed to Aruba's famous sunset, every evening",
      "Local bites and drinks served on deck",
      "A relaxed pace, perfect for couples and friends",
      "Adults-only departures available on request",
    ],
  },
] as const;

type AdventureCard = {
  slug: string;
  href: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  category: string;
  price?: string;
  activityId?: string;
};

const tourCards: AdventureCard[] = tours.map((t) => ({
  slug: t.slug,
  href: `/${t.slug}`,
  title: t.title,
  description: t.description,
  image: t.image,
  category: "Boat Tour",
  price: t.price,
  activityId: t.activityId,
}));

const snorkelCards: AdventureCard[] = snorkelSites.map((s) => ({
  slug: s.slug,
  href: `/flagship-aruba-snorkel-sites/${s.slug}`,
  title: s.title,
  description: s.tagline,
  image: s.heroImage,
  category: "Snorkel Site",
}));

const adventures: AdventureCard[] = [...tourCards, ...snorkelCards];

export function ToursGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      {heading && (
        <RevealItem className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Adventure</span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Choose Your Amazing Tour</h2>
        </RevealItem>
      )}
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {adventures.map((a) => (
          <RevealItem
            key={a.slug}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
          >
            <Link href={a.href} className="group block cursor-pointer overflow-hidden bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.image.src}
                alt={a.image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
              />
            </Link>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-ocean/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-ocean">
                  {a.category}
                </span>
                <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
                  <Star className="size-3.5 fill-ocean text-ocean" /> 5.0
                </span>
              </div>
              <Link href={a.href} className="cursor-pointer">
                <h3 className="flex items-start justify-between gap-2 text-lg font-semibold transition-colors hover:text-primary">
                  {a.title}
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                </h3>
              </Link>
              <p className="flex-1 text-pretty text-sm text-muted-foreground">{a.description}</p>
              {a.price ? (
                <>
                  <p className="text-lg font-bold text-ocean">
                    {a.price} <span className="text-sm font-medium text-muted-foreground">per guest</span>
                  </p>
                  <BookButton
                    activityId={a.activityId ?? ""}
                    className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                  >
                    Book Now
                  </BookButton>
                </>
              ) : (
                <Link
                  href={a.href}
                  className="mt-1 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-accent active:scale-[0.98]"
                >
                  Explore Site <ArrowUpRight className="size-4" />
                </Link>
              )}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
