import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

const partners = [
  {
    src: "/ingested/flagshiparubaa/partners/viator.svg",
    alt: "Viator",
    href: "https://www.viator.com",
    w: 130,
    className: "bg-primary",
  },
  {
    src: "/ingested/flagshiparubaa/partners/tripadvisor.svg",
    alt: "TripAdvisor",
    href: "https://www.tripadvisor.com",
    w: 170,
    className: "bg-sunset-gradient",
  },
  {
    src: "/ingested/flagshiparubaa/partners/getyourguide.svg",
    alt: "GetYourGuide",
    href: "https://www.getyourguide.com",
    w: 46,
    className: "bg-gradient-to-br from-aurora-2 to-aurora-3",
  },
];

export function Partners() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">We Work With</span>
        <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Book us anywhere</h2>
      </Reveal>
      <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
        {partners.map((p) => (
          <RevealItem key={p.alt}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex cursor-pointer flex-col items-center gap-5 rounded-2xl p-8 text-center shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                p.className
              )}
            >
              <div className="flex h-16 w-full max-w-[200px] items-center justify-center rounded-xl bg-white p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} width={p.w} className="h-7 w-auto" loading="lazy" decoding="async" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                Book on {p.alt} <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
