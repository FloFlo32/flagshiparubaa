import Link from "next/link";
import { ArrowRight, Sunrise, PartyPopper, Moon } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookButton } from "@/components/ui/book-button";
import { tours } from "@/components/sections/tours-grid";

const icons = [Sunrise, PartyPopper, Moon];

/**
 * ToursTeaser — the home page's "which boat will you be on" moment, without
 * its own photos (each tour's real photo lives on its own page/card on
 * /boat-tours, so nothing repeats). Icon-led cards instead, for layout
 * variety against the photo-heavy sections around it.
 */
export function ToursTeaser() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <RevealItem className="mx-auto max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Boat Tours</span>
        <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Which boat will you be on?</h2>
      </RevealItem>

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-3">
        {tours.map((t, i) => {
          const Icon = icons[i];
          return (
            <RevealItem
              key={t.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </span>
              <Link href={`/${t.slug}`} className="mt-4 cursor-pointer">
                <h3 className="text-lg font-semibold transition-colors hover:text-primary">{t.title}</h3>
              </Link>
              <p className="mt-2 flex-1 text-pretty text-sm text-muted-foreground">{t.description}</p>
              <div className="mt-5 flex items-center gap-4">
                <BookButton
                  activityId={t.activityId}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                >
                  Book Now
                </BookButton>
                <Link
                  href={`/${t.slug}`}
                  className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  Details <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <RevealItem className="mt-8 text-center">
        <Link
          href="/boat-tours"
          className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          See every tour in detail <ArrowRight className="size-4" />
        </Link>
      </RevealItem>
    </section>
  );
}
