import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ToursGrid } from "@/components/sections/tours-grid";
import { VideoHighlights } from "@/components/sections/video-highlights";
import { GuestGallery } from "@/components/sections/guest-gallery";
import { Testimonial } from "@/components/sections/testimonial";
import { Features } from "@/components/sections/features";
import { BlogTeasers } from "@/components/sections/blog-teasers";
import { FaqPreview } from "@/components/sections/faq-preview";
import { GroupsAndEvents } from "@/components/sections/groups-and-events";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ToursGrid />
        <VideoHighlights />
        <GuestGallery />
        <Testimonial />
        <Features />
        <BlogTeasers />
        <FaqPreview />
        <GroupsAndEvents />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
