import { Gallery } from "@/components/magic/gallery";
import { Reveal } from "@/components/magic/reveal";

const images = [
  { src: "/ingested/flagshiparubaa/guest-a.webp", alt: "Guests toasting with drinks aboard the schooner" },
  { src: "/ingested/flagshiparubaa/guest-b.webp", alt: "Guests in snorkel gear and life vests, ready to jump in" },
  { src: "/ingested/flagshiparubaa/guest-c.webp", alt: "A family snorkeling together with the schooner in the background" },
  { src: "/ingested/flagshiparubaa/guest-d.webp", alt: "Guests sharing shots at the boat's bar" },
  { src: "/ingested/flagshiparubaa/guest-e.webp", alt: "A big group of guests cheering aboard the schooner" },
  { src: "/ingested/flagshiparubaa/guest-f.webp", alt: "Guests in swimsuits posing together on deck" },
  { src: "/ingested/flagshiparubaa/guest-g.webp", alt: "Guests celebrating together at sunset on the boat" },
  { src: "/ingested/flagshiparubaa/guest-h.webp", alt: "Guests relaxing in the bow net over turquoise water" },
];

export function GuestGallery() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Aboard With Us</span>
        <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Moments from our guests</h2>
        <p className="mt-3 text-muted-foreground">Real cruises, real crews, real fun. Tap a photo for a closer look.</p>
      </Reveal>
      <Gallery images={images} className="mt-10" />
    </section>
  );
}
