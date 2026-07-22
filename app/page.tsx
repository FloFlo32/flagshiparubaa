import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ToursGrid } from "@/components/sections/tours-grid";
import { VideoHighlights } from "@/components/sections/video-highlights";
import { Testimonial } from "@/components/sections/testimonial";
import { Features } from "@/components/sections/features";
import { Partners } from "@/components/sections/partners";
import { BlogTeasers } from "@/components/sections/blog-teasers";
import { FaqPreview } from "@/components/sections/faq-preview";
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
        <Testimonial />
        <Features />
        <Partners />
        <BlogTeasers />
        <FaqPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
