import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";
import { blogPosts } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

export function BlogTeasers() {
  const posts = blogPosts.slice(0, 6);

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sunny Updates</span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Discover our latest stories</h2>
            <p className="mt-3 max-w-md text-muted-foreground">Straight from the sunny island.</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Visit the blog <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <AutoSlider className="mt-10" itemClassName="w-[85%] sm:w-[60%] lg:w-[38%]">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "size-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none",
                    p.imagePosition
                  )}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{p.category}</span>
                <h3 className="mt-2 font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-pretty text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </AutoSlider>
      </div>
    </section>
  );
}
