import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FlagshipAruba began as a shared dream between three lifelong friends with deep roots in the maritime world.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="About Us"
          title="Our Story: Three Friends, One Dream"
          description="Set Sail with Flagship Aruba! FlagshipAruba began as a shared dream between three lifelong friends with deep roots in the maritime world."
          image={{
            src: "/ingested/flagshiparubaa/flagship-hull-name.webp",
            alt: "The Flagship Aruba schooner's stern, with the boat's name painted on the hull",
          }}
          cta={{ label: "Meet us on the water", href: "/boat-tours" }}
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
                <Image
                  src="/ingested/flagshiparubaa/schooner-sunset-guests.webp"
                  alt="Flagship Aruba's schooner sailing into the sunset with guests aboard"
                  width={900}
                  height={1125}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={78}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Beginning</span>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
                From Childhood Imagination to a Real Pirate Ship
              </h2>
              <div className="mt-4 space-y-4 text-pretty text-muted-foreground">
                <p>
                  After years working on the water, our founders seized the moment, turning passion, experience,
                  and friendship into a small but unforgettable cruise company in Aruba.
                </p>
                <p>
                  As kids, they always joked about one day owning a pirate ship of their own. Today, that childhood
                  dream has come to life: a beautifully crafted wooden pirate ship now sails Aruba&apos;s turquoise
                  waters, driven by a love for adventure, the ocean, and sharing magical moments.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-secondary/40 py-20 sm:py-24">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Crew</span>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">Built and cared for by hand</h2>
              <p className="mt-3 text-muted-foreground">
                Our founders still do the work themselves, sanding, painting, and maintaining the ship between
                every cruise.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  src: "/ingested/flagshiparubaa/founder-portrait.webp",
                  alt: "One of Flagship Aruba's founders standing beside the schooner",
                },
                {
                  src: "/ingested/flagshiparubaa/crew-member-smiling.webp",
                  alt: "A Flagship Aruba crew member taking a break from maintaining the ship",
                },
                {
                  src: "/ingested/flagshiparubaa/guest-onboard-drink.webp",
                  alt: "A guest enjoying a drink aboard the Flagship Aruba schooner",
                },
              ].map((img, i) => (
                <Reveal key={img.src} delay={i * 0.06}>
                  <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={700}
                      height={875}
                      sizes="(max-width: 640px) 100vw, 33vw"
                      quality={78}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
