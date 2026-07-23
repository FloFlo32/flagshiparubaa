import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { TourPricing } from "@/components/sections/tour-pricing";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Boat Tours",
  description:
    "Three ways to sail with Flagship Aruba: a morning snorkel adventure, an afternoon pirate party, and a sunset cruise. Prices from $69 per guest.",
};

export default function BoatToursPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Boat Tours"
          title="Set Sail with Flagship Aruba!"
          description="Three ways to be on the water aboard our pirate-style schooner: a morning snorkel adventure, a lively afternoon pirate party, or a laid-back sunset cruise. Every cruise includes a self-service open bar with cocktails, local beers, fine wines, soft drinks, and juices. Prices start from $69 per guest."
        />
        <TourPricing />
        <PhotoGallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
