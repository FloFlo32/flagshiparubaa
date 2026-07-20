import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { ImageCard } from "@/components/magic/image-card";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Our Snorkel Sites",
  description:
    "Boca Catalina Reefs, Malmok Beach, and the WWII shipwreck SS Antilla, three of Aruba's best snorkel sites, visited on Flagship Aruba cruises.",
};

const sites = [
  {
    title: "Boca Catalina Reefs",
    description:
      "A calm, shallow reef close to shore with some of the clearest water on the island, great visibility for every skill level.",
    image: {
      src: "/ingested/flagshiparubaa/coastline-rocks-turquoise.webp",
      alt: "The rocky, turquoise coastline at Boca Catalina Reefs, Aruba",
    },
  },
  {
    title: "Malmok Beach",
    description:
      "One of the top snorkel sites in Aruba, tucked near the island's north tip, calm water and easy access from the boat.",
    image: {
      src: "/ingested/flagshiparubaa/malmok-beach.webp",
      alt: "Malmok Beach, one of the top Aruba snorkel sites",
    },
  },
  {
    title: "The SS Antilla",
    description:
      "Aruba's most famous snorkel site: a WWII-era shipwreck resting just below the surface, a favorite stop for every cruise.",
    image: {
      src: "/ingested/flagshiparubaa/ss-antilla-wreck-aerial.webp",
      alt: "Aerial view of the SS Antilla shipwreck off the coast of Aruba",
    },
  },
];

export default function SnorkelSitesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Our Snorkel Sites"
          title="Our snorkel sites"
          description="Every Flagship Aruba cruise visits the island's best snorkeling, calm reefs, curious sea life, and a genuine WWII shipwreck, all within a short sail of MooMba Pier."
          image={{
            src: "/ingested/flagshiparubaa/snorkel-sea-turtle.webp",
            alt: "A sea turtle swimming near one of Aruba's snorkel sites",
          }}
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((s) => (
              <RevealItem key={s.title}>
                <ImageCard
                  src={s.image.src}
                  alt={s.image.alt}
                  eyebrow="Snorkel Site"
                  title={s.title}
                  description={s.description}
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="bg-secondary/40 py-16 sm:py-20">
          <div className="container-px mx-auto max-w-4xl text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ingested/flagshiparubaa/snorkel-sites-map.webp"
              alt="Map of Aruba highlighting the Malmok snorkel area near Noord"
              loading="lazy"
              decoding="async"
              className="mx-auto max-w-md rounded-2xl border border-border shadow-sm"
            />
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
