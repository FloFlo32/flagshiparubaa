import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteDetail } from "@/components/sections/site-detail";
import { snorkelSites, getSiteBySlug } from "@/lib/snorkel-sites";

export function generateStaticParams() {
  return snorkelSites.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const site = getSiteBySlug(slug);
  if (!site) return {};
  return { title: site.title, description: site.heroDescription };
}

export default async function SnorkelSitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);
  if (!site) notFound();

  return <SiteDetail site={site} />;
}
