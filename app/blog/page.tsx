import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Sunny updates, Aruba travel tips, and everything to know before you set sail with Flagship Aruba.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Sunny Updates"
          title="Stories from the sunny island"
          description="Aruba travel tips, wildlife, weddings, and everything else worth knowing before your next trip out to sea."
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid cursor-pointer overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 lg:grid-cols-2"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none ${featured.imagePosition ?? ""}`}
                />
              </div>
              <div className="flex flex-col justify-center gap-3 p-8 sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {featured.category} &middot; Featured
                </span>
                <h2 className="text-balance text-2xl font-bold sm:text-3xl">{featured.title}</h2>
                <p className="text-pretty text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-4" /> {featured.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-primary">
                    Read article <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <RevealItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className={`size-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none ${post.imagePosition ?? ""}`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{post.category}</span>
                    <h3 className="font-semibold leading-snug">{post.title}</h3>
                    <p className="flex-1 text-pretty text-sm text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" /> {post.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-primary">
                        Read <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
