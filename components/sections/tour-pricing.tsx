import { Clock, Users, MapPin, CheckCircle2, DollarSign } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookButton } from "@/components/ui/book-button";
import { tours } from "@/components/sections/tours-grid";
import { cn } from "@/lib/utils";

export function TourPricing() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Pricing & Details</span>
        <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Every Cruise, Priced and Planned</h2>
        <p className="mt-3 text-muted-foreground">
          Three ways to be on the water, each with its own price, pace, and highlights.
        </p>
      </Reveal>

      <div className="mt-14 space-y-16 sm:space-y-20">
        {tours.map((t, i) => (
          <RevealGroup
            key={t.slug}
            className={cn(
              "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
              i % 2 === 1 && "lg:[&>*:first-child]:order-2"
            )}
          >
            <RevealItem>
              <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image.src}
                  alt={t.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </RevealItem>

            <RevealItem>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Boat Tour</span>
              <h3 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">{t.title}</h3>
              <p className="mt-4 text-pretty text-muted-foreground">{t.description}</p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { icon: DollarSign, value: t.price, label: "Per Guest" },
                  { icon: Clock, value: t.duration, label: "Duration" },
                  { icon: Users, value: t.capacity, label: "Group Size" },
                  { icon: MapPin, value: t.departs, label: "Departure" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
                  >
                    <span className="grid size-9 place-items-center rounded-lg bg-ocean/10 text-ocean">
                      <s.icon className="size-4" />
                    </span>
                    <p className="mt-0.5 text-base font-bold text-ocean">{s.value}</p>
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-6 space-y-2.5">
                {t.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>

              <BookButton
                activityId={t.activityId}
                className="mt-7 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
              >
                Book {t.title}
              </BookButton>
            </RevealItem>
          </RevealGroup>
        ))}
      </div>
    </section>
  );
}
