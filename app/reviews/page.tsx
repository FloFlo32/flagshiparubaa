import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
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
        />

        <section className="container-px mx-auto max-w-3xl py-16 sm:py-20">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-10">
              <Quote className="mx-auto size-8 text-primary" />
              <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground">
                &ldquo;Flagship Aruba delivers a memorable mix of adventure, snorkeling, and laid-back fun aboard
                charming pirate-style schooners. Guests consistently praise the friendly, witty crew, open bar, and
                great music, which contribute to a festive atmosphere especially during the rope-swing finale. The
                snorkeling spots, including the WWII shipwreck SS Antilla, Boca Catalina, and Malmok Reef, are
                beautiful and well-chosen.&rdquo;
              </p>
              <p className="mt-4 font-display text-sm font-semibold">Lisa de Boer</p>
            </div>
          </Reveal>
        </section>

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
