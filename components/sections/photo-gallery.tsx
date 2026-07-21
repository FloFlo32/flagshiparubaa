import { Gallery } from "@/components/magic/gallery";
import { Reveal } from "@/components/magic/reveal";

const images = [
  { src: "/ingested/flagshiparubaa/boat-aerial-turquoise.webp", alt: "Flagship Aruba's schooner anchored in turquoise water, guests swimming alongside" },
  { src: "/ingested/flagshiparubaa/schooner-sunset-guests.webp", alt: "Flagship Aruba's schooner sailing into a golden sunset with guests aboard" },
  { src: "/ingested/flagshiparubaa/afternoon-pirate-party.webp", alt: "The Aruba coastline where the Afternoon Pirate Party sails" },
  { src: "/ingested/flagshiparubaa/sunset-bird-silhouette.webp", alt: "A bird silhouetted against an Aruba sunset over the ocean" },
  { src: "/ingested/flagshiparubaa/tall-ship-horizon.webp", alt: "A tall ship sailing on the open water off Aruba" },
  { src: "/ingested/flagshiparubaa/coastline-cliff-sunset.webp", alt: "The Aruba coastline at sunset with a schooner offshore" },
  { src: "/ingested/flagshiparubaa/snorkeler-boca-catalina.webp", alt: "A guest snorkeling at Boca Catalina Reefs, Aruba" },
  { src: "/ingested/flagshiparubaa/snorkel-sea-turtle.webp", alt: "A sea turtle swimming near one of Aruba's snorkel sites" },
  { src: "/ingested/flagshiparubaa/malmok-beach.webp", alt: "Malmok Beach, one of the top Aruba snorkel sites" },
  { src: "/ingested/flagshiparubaa/ss-antilla-wreck-aerial.webp", alt: "Aerial view of the SS Antilla shipwreck off the coast of Aruba" },
  { src: "/ingested/flagshiparubaa/aerial-yacht-reef.webp", alt: "Aerial view of a yacht anchored over a heart-shaped reef in Aruba" },
  { src: "/ingested/flagshiparubaa/guest-beach-dusk.webp", alt: "A guest at dusk on an Aruba beach, looking out toward the water" },
  { src: "/ingested/flagshiparubaa/schooner-pink-sunset.webp", alt: "Flagship Aruba's schooner sailing under a pink sunset sky" },
];

export function PhotoGallery() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Gallery</span>
        <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Aruba, from the water</h2>
        <p className="mt-3 text-muted-foreground">Real moments from real cruises, tap a photo for a closer look.</p>
      </Reveal>
      <Gallery images={images} className="mt-10" />
    </section>
  );
}
