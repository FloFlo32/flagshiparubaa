import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import type { SnorkelSite } from "@/lib/snorkel-sites";

export function SiteDetail({ site }: { site: SnorkelSite }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Snorkel Site"
          title={site.title}
          description={site.heroDescription}
          image={site.heroImage}
          imagePosition={site.heroImagePosition}
          cta={{ label: "Book Now" }}
        />

        <section className="border-b border-border bg-card py-8">
          <div className="container-px mx-auto max-w-6xl">
            <RevealGroup className="grid grid-cols-3 gap-4 sm:gap-8">
              {site.stats.map((s) => (
                <RevealItem key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-primary sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {s.label}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
                <Image
                  src={site.secondaryImage.src}
                  alt={site.secondaryImage.alt}
                  width={800}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={88}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{site.tagline}</span>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">What you&apos;ll see</h2>
              <p className="mt-4 text-pretty text-muted-foreground">{site.intro}</p>
              <RevealGroup className="mt-6 space-y-3">
                {site.whatYoullSee.map((w) => (
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
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Before you swim</h2>
            </Reveal>
            <RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
              {site.goodToKnow.map((g) => (
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

        <CTA />
      </main>
      <Footer />
    </>
  );
}
