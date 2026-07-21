import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { ToursGrid } from "@/components/sections/tours-grid";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Boat Tours",
  description:
    "A two-hour journey across Aruba's crystal-clear Caribbean waters with a sharing platter and self-service open bar. Which boat will you be on?",
};

export default function BoatToursPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Boat Tours"
          title="Set Sail with Flagship Aruba!"
          description="A two-hour journey across the crystal-clear Caribbean waters aboard our pirate-style schooner, with a tasty sharing platter and a self-service open bar featuring cocktails, local beers, fine wines, soft drinks, and juices. Starting around $69 per guest."
        />
        <ToursGrid />
        <PhotoGallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
