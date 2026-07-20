import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { brand } from "@/brand.config";
import { Reveal } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BookButton } from "@/components/ui/book-button";

export function CTA({ activityId = "" }: { activityId?: string } = {}) {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
          <GridPattern />
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
            How can we help you set sail on your perfect pirate tour?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Let {brand.name} be your trusted crew for unforgettable adventures.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookButton
              activityId={activityId}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
            >
              Book Now <ArrowRight className="size-4" />
            </BookButton>
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
            >
              <Mail className="size-4" /> Contact us
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
