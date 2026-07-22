import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Accordion } from "@/components/sections/accordion";
import { faqs } from "@/lib/faqs";

export function FaqPreview() {
  return (
    <section className="container-px mx-auto max-w-3xl py-20 sm:py-24">
      <Reveal className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</span>
        <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">Good to know before you book</h2>
      </Reveal>
      <Reveal delay={0.08} className="mt-10">
        <Accordion items={faqs} />
      </Reveal>
      <Reveal delay={0.12} className="mt-8 text-center">
        <Link
          href="/faq"
          className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          See all FAQs <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </section>
  );
}
