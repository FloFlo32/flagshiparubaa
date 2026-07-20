import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";

const posts = [
  {
    title: "Golden Hour Photography at Flamingo Beach",
    body: "Golden hour lighting transforms Flamingo Beach photography with warm, vibrant colors and perfect reflections during optimal timing windows.",
  },
  {
    title: "When Flamingos Visit Renaissance Island",
    body: "Discover when flamingos arrive and leave Renaissance Island daily for perfect timing on your Aruba vacation.",
  },
  {
    title: "Why Flamingos Live on Renaissance Island",
    body: "Discover why flamingos live on Aruba's Renaissance Island as resort attractions, not natural inhabitants.",
  },
  {
    title: "Beach Wedding Requirements & Costs",
    body: "Discover Aruba beach wedding requirements, costs ($3,000-$15,000), best venues like Eagle Beach, and legal documentation needed for your Caribbean dream ceremony.",
  },
  {
    title: "Educational Activities for Kids in Aruba",
    body: "Explore kid-friendly snorkeling, wildlife parks, and interactive museums that make learning an adventure in Aruba's natural paradise.",
  },
  {
    title: "Free Tourist Activities in Aruba",
    body: "Explore Aruba's free beaches, natural landmarks, cultural sites, and outdoor adventures without spending money.",
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
            <div
              key={p.title}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-pretty text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </AutoSlider>
      </div>
    </section>
  );
}
