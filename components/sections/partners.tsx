import { Reveal } from "@/components/magic/reveal";

const partners = [
  { src: "/ingested/flagshiparubaa/partners/viator.svg", alt: "Viator", href: "https://www.viator.com", w: 130 },
  { src: "/ingested/flagshiparubaa/partners/tripadvisor.svg", alt: "TripAdvisor", href: "https://www.tripadvisor.com", w: 160 },
  { src: "/ingested/flagshiparubaa/partners/getyourguide.svg", alt: "GetYourGuide", href: "https://www.getyourguide.com", w: 48 },
];

export function Partners() {
  return (
    <section className="container-px mx-auto max-w-6xl py-14 sm:py-16">
      <Reveal className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          We work with
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p) => (
            <a
              key={p.alt}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer opacity-80 transition-all hover:-translate-y-0.5 hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} width={p.w} className="h-7 w-auto" loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
