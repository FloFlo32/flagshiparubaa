import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { Testimonial } from "@/components/sections/testimonial";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What guests say about sailing with Flagship Aruba.",
};

const partners = [
  { src: "/ingested/flagshiparubaa/partners/viator.svg", alt: "Viator", href: "https://www.viator.com" },
  { src: "/ingested/flagshiparubaa/partners/tripadvisor.svg", alt: "TripAdvisor", href: "https://www.tripadvisor.com" },
  { src: "/ingested/flagshiparubaa/partners/getyourguide.svg", alt: "GetYourGuide", href: "https://www.getyourguide.com" },
];

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Reviews"
          title="What guests are saying"
          description="Real feedback from travelers who sailed with Flagship Aruba, plus where to find more reviews."
          image={{
            src: "/ingested/flagshiparubaa/boat-aerial-turquoise.webp",
            alt: "Flagship Aruba's schooner anchored in turquoise water",
          }}
        />

        <Testimonial />

        <section className="container-px mx-auto max-w-3xl py-16 text-center sm:py-20">
          <Reveal>
            <p className="text-muted-foreground">
              We&apos;re proud to be featured on these platforms, find more traveler reviews there.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
              {partners.map((p) => (
                <a
                  key={p.alt}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer opacity-70 transition-opacity hover:opacity-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} className="h-7 w-auto" loading="lazy" decoding="async" />
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
