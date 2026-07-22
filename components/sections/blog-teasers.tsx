import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";

const posts = [
  {
    title: "What time of day offers the best lighting for photos at Flamingo Beach?",
    body: "Golden hour lighting transforms Flamingo Beach photography with warm, vibrant colors and perfect reflections during optimal timing windows.",
    href: "https://www.flagshiparuba.com/blog/uncategorized/what-time-of-day-offers-the-best-lighting-for-photos-at-flamingo-beach/",
    image: "/ingested/flagshiparubaa/schooner-pink-sunset.webp",
  },
  {
    title: "Are the flamingos present on the beach all day?",
    body: "Discover when flamingos arrive and leave Renaissance Island daily for perfect timing on your Aruba vacation.",
    href: "https://www.flagshiparuba.com/blog/uncategorized/are-the-flamingos-present-on-the-beach-all-day/",
    image: "/ingested/flagshiparubaa/malmok-beach.webp",
  },
  {
    title: "Why do flamingos live on a beach in Aruba?",
    body: "Discover why flamingos live on Aruba's Renaissance Island as resort attractions, not natural inhabitants.",
    href: "https://www.flagshiparuba.com/blog/uncategorized/why-do-flamingos-live-on-a-beach-in-aruba/",
    image: "/ingested/flagshiparubaa/coastline-cliff-sunset.webp",
  },
  {
    title: "Can you get married on a beach in Aruba?",
    body: "Discover Aruba beach wedding requirements, costs ($3,000-$15,000), best venues like Eagle Beach, and legal documentation needed for your Caribbean dream ceremony.",
    href: "https://www.flagshiparuba.com/blog/uncategorized/can-you-get-married-on-a-beach-in-aruba/",
    image: "/ingested/flagshiparubaa/schooner-sunset-guests.webp",
  },
  {
    title: "What educational or nature-based activities exist for kids in Aruba?",
    body: "Explore kid-friendly snorkeling, wildlife parks, and interactive museums that make learning an adventure in Aruba's natural paradise.",
    href: "https://www.flagshiparuba.com/blog/uncategorized/what-educational-or-nature-based-activities-exist-for-kids-in-aruba/",
    image: "/ingested/flagshiparubaa/snorkel-sea-turtle.webp",
  },
  {
    title: "What free things can you do in Aruba as a tourist?",
    body: "Explore Aruba's free beaches, natural landmarks, cultural sites, and outdoor adventures without spending money.",
    href: "https://www.flagshiparuba.com/blog/uncategorized/what-free-things-can-you-do-in-aruba-as-a-tourist/",
    image: "/ingested/flagshiparubaa/aerial-yacht-reef.webp",
  },
];

export function BlogTeasers() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sunny Updates</span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Discover our latest stories</h2>
            <p className="mt-3 max-w-md text-muted-foreground">Straight from the sunny island.</p>
          </div>
          <a
            href="https://www.flagshiparuba.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Visit the blog <ArrowUpRight className="size-4" />
          </a>
        </Reveal>

        <AutoSlider className="mt-10" itemClassName="w-[85%] sm:w-[60%] lg:w-[38%]">
          {posts.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-pretty text-sm text-muted-foreground">{p.body}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </a>
          ))}
        </AutoSlider>
      </div>
    </section>
  );
}
