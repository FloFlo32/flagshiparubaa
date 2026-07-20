import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { BookButton } from "@/components/ui/book-button";

/**
 * PageHero — the shared hero for every inner page. Split layout: heading + copy
 * on a solid surface, real photo in a rounded card beside it. Never text over
 * the image (see CLAUDE.md §0), so it stays readable on every page.
 *
 * cta: pass `href` for an internal link (e.g. "Contact us" -> /contact), or
 * `activityId` for a booking action (defaults to the general Book Now when
 * cta is omitted entirely, with an empty activity id).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  cta?: { label: string; href: string } | { label?: string; activityId?: string };
}) {
  const ctaLabel = cta?.label ?? "Book Now";
  const ctaHref = cta && "href" in cta ? cta.href : undefined;

  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="container-px mx-auto grid max-w-6xl items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.08] sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-lg text-pretty text-lg text-muted-foreground">{description}</p>
          <div className="mt-8">
            {ctaHref ? (
              <Link
                href={ctaHref}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
              >
                {ctaLabel} <ArrowRight className="size-4" />
              </Link>
            ) : (
              <BookButton
                activityId={cta && "activityId" in cta ? cta.activityId : ""}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
              >
                {ctaLabel} <ArrowRight className="size-4" />
              </BookButton>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
            <Image
              src={image.src}
              alt={image.alt}
              width={960}
              height={720}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={78}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
