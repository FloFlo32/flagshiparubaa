import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { BookButton } from "@/components/ui/book-button";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { cn } from "@/lib/utils";

type Cta = { label: string; href: string } | { label?: string; activityId?: string };

function CtaButton({ cta, className }: { cta?: Cta; className: string }) {
  const label = cta?.label ?? "Book Now";
  const href = cta && "href" in cta ? cta.href : undefined;
  if (href) {
    return (
      <Link href={href} className={className}>
        {label} <ArrowRight className="size-4" />
      </Link>
    );
  }
  return (
    <BookButton activityId={cta && "activityId" in cta ? cta.activityId : ""} className={className}>
      {label} <ArrowRight className="size-4" />
    </BookButton>
  );
}

const ctaClass =
  "inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]";

/**
 * PageHero — the shared hero for every inner page.
 *
 * With `image`: split layout, heading + copy on a solid surface, real photo in
 * a rounded card beside it. Never text over the image (see CLAUDE.md §0).
 *
 * Without `image` (pages with no dedicated real photo left to assign, to keep
 * every image on the site unique): a centered, brand-toned hero with a soft
 * aurora glow + grid pattern instead of a photo.
 *
 * cta: pass `href` for an internal link, or `activityId` for a booking action
 * (defaults to the general Book Now when cta is omitted, empty activity id).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imagePosition,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  imagePosition?: string;
  cta?: Cta;
}) {
  if (!image) {
    return (
      <section className="relative overflow-hidden border-b border-border bg-secondary/40">
        <AuroraBackground />
        <GridPattern />
        <div className="container-px relative mx-auto max-w-3xl py-20 text-center sm:py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.08] sm:text-5xl">{title}</h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted-foreground">{description}</p>
            <div className="mt-8 flex justify-center">
              <CtaButton cta={cta} className={ctaClass} />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="container-px mx-auto grid max-w-6xl items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.08] sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-lg text-pretty text-lg text-muted-foreground">{description}</p>
          <div className="mt-8">
            <CtaButton cta={cta} className={ctaClass} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
            <Image
              src={image.src}
              alt={image.alt}
              width={960}
              height={720}
              priority
              unoptimized
              className={cn("aspect-[4/3] w-full object-cover", imagePosition)}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
