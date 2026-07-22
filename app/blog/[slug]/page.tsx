import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CTA } from "@/components/sections/cta";
import { Accordion } from "@/components/sections/accordion";
import { BlogSidebar } from "@/components/sections/blog-sidebar";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border bg-hero-gradient py-14 sm:py-16">
          <GridPattern />
          <div className="container-px relative mx-auto max-w-3xl">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="size-3.5" /> Back to Blog
              </Link>
              <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {post.category}
              </span>
              <h1 className="mt-3 text-balance text-3xl font-bold leading-[1.12] sm:text-5xl">{post.title}</h1>
              <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="size-4" /> {post.readTime}
              </div>
            </Reveal>
          </div>
        </section>

        <div className="container-px mx-auto max-w-6xl py-14 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <article className="min-w-0">
              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={720}
                    priority
                    unoptimized
                    className={`aspect-[16/10] w-full object-cover ${post.imagePosition ?? ""}`}
                  />
                </div>
              </Reveal>

              <Reveal>
                <p className="mt-8 text-pretty text-lg leading-relaxed text-foreground">{post.intro}</p>
              </Reveal>

              {post.sections.map((section) => (
                <Reveal key={section.heading}>
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold sm:text-3xl">{section.heading}</h2>
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}

              <Reveal>
                <div className="mt-12">
                  <h2 className="text-2xl font-bold sm:text-3xl">Frequently asked</h2>
                  <div className="mt-6">
                    <Accordion items={post.faqs} />
                  </div>
                </div>
              </Reveal>
            </article>

            <BlogSidebar />
          </div>
        </div>

        {related.length > 0 && (
          <section className="bg-secondary/40 py-16 sm:py-20">
            <div className="container-px mx-auto max-w-6xl">
              <Reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">More sunny updates</h2>
              </Reveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className={`size-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none ${r.imagePosition ?? ""}`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{r.category}</span>
                      <h3 className="mt-2 text-sm font-semibold leading-snug">{r.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTA />
      </main>
      <Footer />
    </>
  );
}
