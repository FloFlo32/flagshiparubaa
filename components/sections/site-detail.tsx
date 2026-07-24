import Image from "next/image";
import { CheckCircle2, Eye, Waves, Users, ArrowDownToLine, Ruler, Sparkles, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { getGoodToKnowIcon } from "@/lib/good-to-know-icon";
import type { SnorkelSite } from "@/lib/snorkel-sites";

const statIcons: Record<string, LucideIcon> = {
  Visibility: Eye,
  Water: Waves,
  "Best for": Users,
  Depth: ArrowDownToLine,
  Length: Ruler,
};

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

        <section className="py-16 sm:py-20">
          <div className="container-px mx-auto max-w-6xl">
            <RevealGroup className="grid gap-5 sm:grid-cols-3">
              {site.stats.map((s) => {
                const Icon = statIcons[s.label] ?? Sparkles;
                return (
                  <RevealItem
                    key={s.label}
                    className="rounded-2xl border-t-4 border-ocean bg-primary p-7 text-center shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="mx-auto grid size-12 place-items-center rounded-full bg-ocean/15 text-ocean">
                      <Icon className="size-6" />
                    </span>
                    <p className="mt-4 text-2xl font-bold text-primary-foreground sm:text-3xl">{s.value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground/65">
                      {s.label}
                    </p>
                  </RevealItem>
                );
              })}
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
            <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2">
              {site.goodToKnow.map((g) => {
                const Icon = getGoodToKnowIcon(g);
                return (
                  <RevealItem
                    key={g}
                    className="flex items-start gap-4 rounded-2xl border-t-4 border-ocean bg-primary p-5 shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ocean/15 text-ocean">
                      <Icon className="size-5" />
                    </span>
                    <p className="pt-1.5 text-sm text-primary-foreground/90">{g}</p>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
