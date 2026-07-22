import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export function TourDetail({
  eyebrow,
  title,
  heroDescription,
  heroImage,
  heroImagePosition,
  activityId,
  whatToExpect,
  sectionTitle,
  sectionBody,
  sectionImage,
  goodToKnow,
}: {
  eyebrow: string;
  title: string;
  heroDescription: string;
  heroImage: { src: string; alt: string };
  heroImagePosition?: string;
  activityId: string;
  whatToExpect: string[];
  sectionTitle: string;
  sectionBody: string;
  sectionImage: { src: string; alt: string };
  goodToKnow: string[];
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow={eyebrow}
          title={title}
          description={heroDescription}
          image={heroImage}
          imagePosition={heroImagePosition}
          cta={{ label: "Book Now", activityId }}
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
                <Image
                  src={sectionImage.src}
                  alt={sectionImage.alt}
                  width={800}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={78}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What to Expect</span>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">{sectionTitle}</h2>
              <p className="mt-4 text-pretty text-muted-foreground">{sectionBody}</p>
              <RevealGroup className="mt-6 space-y-3">
                {whatToExpect.map((w) => (
                  <RevealItem key={w} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{w}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-20 sm:py-24">
          <div className="container-px mx-auto max-w-3xl">
            <Reveal className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Good to know</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Before you book</h2>
            </Reveal>
            <RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
              {goodToKnow.map((g) => (
                <RevealItem
                  key={g}
                  className="rounded-2xl border border-border bg-card p-5 text-sm text-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  {g}
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <CTA activityId={activityId} />
      </main>
      <Footer />
    </>
  );
}
