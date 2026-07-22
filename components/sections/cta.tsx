import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { brand } from "@/brand.config";
import { Reveal } from "@/components/magic/reveal";
import { BookButton } from "@/components/ui/book-button";

export function CTA({ activityId = "" }: { activityId?: string } = {}) {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl px-6 py-20 text-center sm:px-12 sm:py-24">
          <Image
            src="/ingested/flagshiparubaa/schooner-pink-sunset.webp"
            alt=""
            fill
            sizes="100vw"
            quality={72}
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-sunset-gradient opacity-85" aria-hidden />
          <span className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {brand.name}
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-4xl font-bold text-white sm:text-5xl">
            How can we help you set sail on your perfect pirate tour?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/90">
            Let {brand.name} be your trusted crew for unforgettable adventures.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookButton
              activityId={activityId}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
            >
              Book Now <ArrowRight className="size-4" />
            </BookButton>
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20 active:scale-[0.98]"
            >
              <Mail className="size-4" /> Contact us
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
