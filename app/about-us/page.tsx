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
            src: "/ingested/flagshiparubaa/tall-ship-horizon.webp",
            alt: "A tall ship sailing on the open water off Aruba",
          }}
          cta={{ label: "Meet us on the water", href: "/boat-tours" }}
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
                <Image
                  src="/ingested/flagshiparubaa/guest-beach-dusk.webp"
                  alt="A guest at dusk on an Aruba beach, looking out toward the water"
                  width={800}
                  height={1000}
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

        <section className="bg-secondary/40 py-16 sm:py-20">
          <div className="container-px mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border">
                <Image
                  src="/ingested/flagshiparubaa/coastline-cliff-sunset.webp"
                  alt="The Aruba coastline at sunset with Flagship Aruba's schooner offshore"
                  width={900}
                  height={600}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={78}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-3xl border border-border">
                <Image
                  src="/ingested/flagshiparubaa/coastline-resort-view.webp"
                  alt="Aruba's turquoise coastline near Palm Beach"
                  width={900}
                  height={600}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={78}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
