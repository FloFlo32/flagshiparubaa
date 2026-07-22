import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
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
    slug: "boca-catalina-reefs",
    title: "Boca Catalina Reefs",
    description:
      "A calm, shallow reef close to shore with some of the clearest water on the island, great visibility for every skill level.",
    image: {
      src: "/ingested/flagshiparubaa/snorkeler-boca-catalina.webp",
      alt: "A guest snorkeling at Boca Catalina Reefs, Aruba",
    },
  },
  {
    slug: "malmok-beach",
    title: "Malmok Beach",
    description:
      "One of the top snorkel sites in Aruba, tucked near the island's north tip, calm water and easy access from the boat.",
    image: {
      src: "/ingested/flagshiparubaa/malmok-beach.webp",
      alt: "Malmok Beach, one of the top Aruba snorkel sites",
    },
  },
  {
    slug: "ss-antilla-shipwreck",
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
              <RevealItem key={s.slug}>
                <Link
                  href={`/flagship-aruba-snorkel-sites/${s.slug}`}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image.src}
                      alt={s.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Snorkel Site</span>
                    <h3 className="flex items-start justify-between gap-2 text-lg font-semibold transition-colors group-hover:text-primary">
                      {s.title}
                      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    </h3>
                    <p className="flex-1 text-pretty text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
