import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { Map } from "@/components/sections/map";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Address",
  description: "All cruises depart from MooMba Pier, perfectly located on Palm Beach in the heart of Aruba's resort area.",
};

export default function AddressPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Palm Beach, Aruba"
          title="Find us at MooMba Pier"
          description="All cruises depart from MooMba Pier, perfectly located on Palm Beach in the heart of Aruba's resort area."
          image={{
            src: "/ingested/flagshiparubaa/coastline-rocks-turquoise.webp",
            alt: "The Palm Beach coastline near MooMba Pier, Aruba",
          }}
        />

        <section className="container-px mx-auto max-w-3xl py-16 text-center sm:py-20">
          <Reveal>
            <p className="text-pretty text-lg text-muted-foreground">
              A centrally situated pier offering convenient access whether you&apos;re arriving by hotel shuttle,
              taxi, or on foot. Enjoy easy proximity to dining, shopping, and coastal attractions before or after
              your cruise.
            </p>
          </Reveal>
        </section>

        <Map />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
