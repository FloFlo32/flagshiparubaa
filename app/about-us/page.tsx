import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Ship, Users, Fish, Wine, ShieldCheck, Anchor, Wrench, Heart } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const vesselStats = [
  { icon: Users, label: "Up to 40 guests aboard" },
  { icon: Fish, label: "3 signature snorkel sites" },
  { icon: Ship, label: "A hand-restored wooden schooner" },
  { icon: Wine, label: "Self-service open bar, every cruise" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    body: "Every cruise runs with a briefed crew, flotation vests for every guest, and gear checked before we leave the dock.",
  },
  {
    icon: Anchor,
    title: "A genuine pirate-style schooner",
    body: "No fiberglass catamaran here. Ours is a real wooden schooner with the look and character of the ships our founders dreamed about as kids.",
  },
  {
    icon: Wrench,
    title: "Restored and maintained by hand",
    body: "Our founders hauled her out, rebuilt the deck, and still handle her upkeep between cruises so she stays seaworthy and sharp.",
  },
  {
    icon: Heart,
    title: "Warm, island-style hospitality",
    body: "Small crew, big personalities. Expect first names, easy conversation, and a crew that genuinely wants your day on the water to be a good one.",
  },
];

const missionVision = [
  {
    title: "Our Mission",
    body: "To share Aruba's turquoise waters and reefs the way we always dreamed of exploring them ourselves: with real seamanship, real care, and zero pretension. Every cruise should feel like sailing with old friends, not just another tour.",
  },
  {
    title: "Our Vision",
    body: "To be Aruba's most trusted name in small-crew sailing adventures, known for a hand-restored schooner, our snorkel sites, and a crew that treats every guest like family, cruise after cruise.",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FlagshipAruba began as a shared dream between three lifelong friends with deep roots in the maritime world.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="About Flagship Aruba"
          title="Our Story"
          description="Set Sail with Flagship Aruba! What began as a shared dream between three lifelong friends with deep roots in the maritime world is now a small, unforgettable cruise company on Aruba's turquoise waters."
          image={{
            src: "/ingested/flagshiparubaa/flagship-hull-name.webp",
            alt: "The Flagship Aruba schooner's stern, with the boat's name painted on the hull",
          }}
          cta={{ label: "Meet us on the water", href: "/boat-tours" }}
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
                <Image
                  src="/ingested/flagshiparubaa/schooner-sunset-guests.webp"
                  alt="Flagship Aruba's schooner sailing into the sunset with guests aboard"
                  width={900}
                  height={1125}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={88}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow>Our Beginning</Eyebrow>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
                From Childhood Imagination to a Real Pirate Ship
              </h2>
              <div className="mt-4 space-y-4 text-pretty text-muted-foreground">
                <p>
                  After years working on the water, our founders seized the moment, turning passion, experience,
                  and friendship into a small but unforgettable cruise company in Aruba.
                </p>
                <p>
                  As kids, they always joked about one day owning a pirate ship of their own. Today, that childhood
                  dream has come to life: a beautifully crafted wooden pirate ship now sails Aruba&apos;s turquoise
                  waters, driven by a love for adventure, the ocean, and sharing magical moments.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-secondary/40 py-20 sm:py-24">
          <div className="container-px mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-balance text-lg text-muted-foreground sm:text-xl">
                We believe island sailing isn&apos;t just about where you go, it&apos;s about how you experience it.
                At Flagship Aruba, every cruise is crafted to capture the soul of the island, whether that&apos;s a
                rope-swing afternoon, a sunset sail, or a quiet morning snorkel before the crowds arrive.
              </p>
            </Reveal>
            <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2">
              {missionVision.map((m) => (
                <RevealItem
                  key={m.title}
                  className="rounded-2xl border border-border bg-card p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <h3 className="text-lg font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="container-px mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <Eyebrow>The Vessel</Eyebrow>
                <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">Restored by hand, plank by plank</h2>
                <p className="mt-4 text-pretty text-muted-foreground">
                  Our founders hauled the schooner out of the water themselves, rebuilt her deck, and repainted her
                  hull stem to stern. She still gets the same hands-on care between every cruise, so the ship that
                  carries you today is the same one they poured years of work into.
                </p>
                <RevealGroup className="mt-8 grid grid-cols-2 gap-4">
                  {vesselStats.map((s) => (
                    <RevealItem key={s.label} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                      <s.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-foreground">{s.label}</span>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
                  <Image
                    src="/ingested/flagshiparubaa/schooner-turquoise-anchor.webp"
                    alt="Flagship Aruba's schooner anchored over crystal-clear turquoise water"
                    width={900}
                    height={1125}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={88}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-20 sm:py-24">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-xl text-center">
              <Eyebrow>What We Stand For</Eyebrow>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">What sets our cruises apart</h2>
            </Reveal>
            <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <RevealItem
                  key={v.title}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.body}</p>
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
