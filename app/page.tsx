import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ToursTeaser } from "@/components/sections/tours-teaser";
import { Testimonial } from "@/components/sections/testimonial";
import { Features } from "@/components/sections/features";
import { BlogTeasers } from "@/components/sections/blog-teasers";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ToursTeaser />
        <Testimonial />
        <Features />
        <BlogTeasers />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
