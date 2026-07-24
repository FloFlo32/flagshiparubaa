import { Star } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Rachel D.",
    when: "2 weeks ago",
    initials: "RD",
    color: "bg-rose-500",
    quote:
      "The rope swing finale at the SS Antilla was the highlight of our whole trip. Our crew kept the music going and the drinks coming the entire afternoon.",
  },
  {
    name: "Mike T.",
    when: "1 month ago",
    initials: "MT",
    color: "bg-sky-500",
    quote:
      "Snorkeled Boca Catalina and Malmok on the same morning cruise and both were stunning. The crew pointed out sea turtles we would have completely missed on our own.",
  },
  {
    name: "Sofia P.",
    when: "3 weeks ago",
    initials: "SP",
    color: "bg-amber-500",
    quote:
      "Booked the sunset cruise for our anniversary and it was perfect. Small group, great local bites, and the crew made us feel like old friends by the end.",
  },
  {
    name: "Daniel K.",
    when: "2 months ago",
    initials: "DK",
    color: "bg-emerald-500",
    quote:
      "Genuinely a real wooden schooner, not another plastic catamaran. You can tell the crew rebuilt her themselves, they know every inch of that boat.",
  },
  {
    name: "Emma V.",
    when: "1 week ago",
    initials: "EV",
    color: "bg-fuchsia-500",
    quote:
      "Brought the kids on the Morning Splash Adventure and the crew made them feel so comfortable in the water. Best snorkeling we've done in Aruba.",
  },
  {
    name: "Jordan L.",
    when: "6 weeks ago",
    initials: "JL",
    color: "bg-violet-500",
    quote:
      "The open bar plus a genuinely fun crew made the Afternoon Pirate Party worth every dollar. We're already planning our next trip back to do it again.",
  },
];

function Stars() {
  return (
    <div className="flex text-ocean" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Trusted Reviews</span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Loved by travellers</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm">
              <Stars />
              5.0 average rating
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <AutoSlider itemClassName="w-[85%] sm:w-[46%] lg:w-[28%]">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white",
                      r.color
                    )}
                  >
                    {r.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.when}</p>
                  </div>
                </div>
                <Stars />
                <p className="flex-1 text-pretty text-sm text-muted-foreground">{r.quote}</p>
              </div>
            ))}
          </AutoSlider>
        </Reveal>
      </div>
    </section>
  );
}
