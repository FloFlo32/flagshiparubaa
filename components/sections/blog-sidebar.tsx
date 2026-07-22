import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { tours } from "@/components/sections/tours-grid";
import { BookButton } from "@/components/ui/book-button";

export function BlogSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      <div className="relative isolate overflow-hidden rounded-2xl bg-primary p-6 text-center">
        <div className="absolute inset-0 -z-10 bg-sunset-gradient opacity-90" aria-hidden />
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          {brand.name}
        </span>
        <h3 className="mt-3 text-balance text-xl font-bold text-white">Ready to see it in person?</h3>
        <p className="mt-2 text-sm text-white/90">
          Book a spot aboard our pirate-style schooner and turn this into a real Aruba memory.
        </p>
        <BookButton className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]">
          Book Now <ArrowRight className="size-4" />
        </BookButton>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Our Boat Tours</h3>
        <div className="mt-4 space-y-3">
          {tours.map((t) => (
            <Link
              key={t.slug}
              href={`/${t.slug}`}
              className="group flex cursor-pointer items-center gap-3 rounded-xl border border-border p-2.5 transition-colors hover:border-primary/40 hover:bg-accent"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.image.src}
                alt={t.image.alt}
                loading="lazy"
                decoding="async"
                className="size-14 shrink-0 rounded-lg object-cover"
              />
              <span className="flex-1 text-sm font-medium leading-snug">{t.title}</span>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </Link>
          ))}
        </div>
        <Link
          href="/boat-tours"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          See all boat tours <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Questions first?</h3>
        <div className="mt-4 space-y-3 text-sm">
          <a href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`} className="flex cursor-pointer items-center gap-2.5 transition-colors hover:text-primary">
            <Phone className="size-4 shrink-0 text-primary" /> {brand.contact.phone}
          </a>
          <a href={`mailto:${brand.social.email}`} className="flex cursor-pointer items-center gap-2.5 transition-colors hover:text-primary">
            <Mail className="size-4 shrink-0 text-primary" /> {brand.social.email}
          </a>
        </div>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Contact us <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </aside>
  );
}
