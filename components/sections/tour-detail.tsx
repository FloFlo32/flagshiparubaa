import Image from "next/image";
import { CheckCircle2, Clock, Users, MapPin, DollarSign } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";
import { getGoodToKnowIcon } from "@/lib/good-to-know-icon";

const funPhotos = [
  { src: "/ingested/flagshiparubaa/guest-a.webp", alt: "Guests laughing together on deck during a Flagship Aruba cruise" },
  { src: "/ingested/flagshiparubaa/guest-d.webp", alt: "A group of guests enjoying drinks and sunshine aboard the schooner" },
  { src: "/ingested/flagshiparubaa/guest-onboard-drink.webp", alt: "A guest relaxing with a drink in hand aboard the schooner" },
  { src: "/ingested/flagshiparubaa/crew-member-smiling.webp", alt: "A friendly Flagship Aruba crew member smiling on deck" },
  { src: "/ingested/flagshiparubaa/guest-f.webp", alt: "Guests soaking up the sun during a Flagship Aruba cruise" },
  { src: "/ingested/flagshiparubaa/guest-g.webp", alt: "Guests celebrating together aboard the schooner" },
];

export function TourDetail({
  eyebrow,
  title,
  heroDescription,
  heroImage,
  heroImagePosition,
  activityId,
  price,
  duration,
  departs,
  capacity,
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
  price: string;
  duration: string;
  departs: string;
  capacity: string;
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

        <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
          <div className="container-px mx-auto max-w-6xl">
            <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
              {[
                { icon: DollarSign, value: price, label: "Per Guest" },
                { icon: Clock, value: duration, label: "Duration" },
                { icon: Users, value: capacity, label: "Group Size" },
                { icon: MapPin, value: departs, label: "Departure" },
              ].map((s) => (
                <RevealItem
                  key={s.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ocean/10 sm:p-6"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-ocean/10 text-ocean">
                    <s.icon className="size-5" />
                  </span>
                  <p className="mt-1 text-xl font-bold text-ocean sm:text-2xl">{s.value}</p>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{s.label}</p>
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
                  src={sectionImage.src}
                  alt={sectionImage.alt}
                  width={800}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={88}
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

        <section className="py-20 sm:py-24">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Good Times Aboard</span>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">Guests having the time of their life</h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-10">
              <AutoSlider itemClassName="w-[74%] sm:w-[42%] lg:w-[24%]">
                {funPhotos.map((p) => (
                  <div key={p.src} className="overflow-hidden rounded-2xl border border-border bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                ))}
              </AutoSlider>
            </Reveal>
          </div>
        </section>

        <section className="bg-secondary/40 py-20 sm:py-24">
          <div className="container-px mx-auto max-w-3xl">
            <Reveal className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Good to know</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Before you book</h2>
            </Reveal>
            <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2">
              {goodToKnow.map((g) => {
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

        <CTA activityId={activityId} />
      </main>
      <Footer />
    </>
  );
}
