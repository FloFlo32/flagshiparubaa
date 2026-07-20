import Image from "next/image";
import { Fish, Wine, Waves } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const items = [
  {
    icon: Fish,
    title: "Premium snorkeling spots",
    body: "Boca Catalina, Malmok Reef, and the WWII shipwreck SS Antilla, three of Aruba's best-loved sites.",
  },
  {
    icon: Wine,
    title: "Open bar with local bites",
    body: "Cocktails, local beers, wine, soft drinks, and a tasty sharing platter, self-service, all cruise long.",
  },
  {
    icon: Waves,
    title: "Rope swinging adventures",
    body: "The festive rope-swing finale guests talk about most, music playing and the crew cheering you on.",
  },
];

export function Features() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
            <Image
              src="/ingested/flagshiparubaa/snorkeler-with-mask.webp"
              alt="Guest snorkeling in the clear turquoise water on a Flagship Aruba cruise"
              width={800}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={78}
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Onboard</span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Every cruise, done right</h2>
          <RevealGroup className="mt-8 space-y-5">
            {items.map((f) => (
              <RevealItem
                key={f.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
