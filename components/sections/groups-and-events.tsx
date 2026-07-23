import Link from "next/link";
import { Users, PartyPopper, ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookButton } from "@/components/ui/book-button";

const options = [
  {
    icon: Users,
    title: "Book for Groups",
    body: "Traveling with a crew of friends, a family reunion, or a company outing? We'll fit your group in and keep everyone together on deck.",
    cta: "Book for your group",
  },
  {
    icon: PartyPopper,
    title: "Book for Private Events",
    body: "Birthdays, engagements, or a full private charter, just for your party. Tell us the occasion and we'll help you plan the perfect sail.",
    cta: "Enquire about a private event",
  },
];

export function GroupsAndEvents() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Bigger Plans?</span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Groups & Private Events</h2>
          <p className="mt-3 text-muted-foreground">
            From big group outings to a fully private charter, we&apos;ll help you plan the sail that fits.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {options.map((o) => (
            <RevealItem
              key={o.title}
              className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-10"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <o.icon className="size-7" />
              </span>
              <h3 className="text-xl font-bold">{o.title}</h3>
              <p className="text-pretty text-sm text-muted-foreground">{o.body}</p>
              {o.title === "Book for Groups" ? (
                <BookButton className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]">
                  {o.cta} <ArrowRight className="size-4" />
                </BookButton>
              ) : (
                <Link
                  href="/contact"
                  className="mt-2 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                >
                  {o.cta} <ArrowRight className="size-4" />
                </Link>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
