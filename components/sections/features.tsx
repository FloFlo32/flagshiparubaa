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
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Onboard</span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Every cruise, done right</h2>
        </Reveal>

        <RevealGroup className="mt-12 grid divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {items.map((f) => (
            <RevealItem key={f.title} className="flex flex-col items-center gap-3 p-8 text-center">
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="size-6" />
              </span>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
