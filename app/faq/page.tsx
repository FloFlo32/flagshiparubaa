import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { Accordion } from "@/components/sections/accordion";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Flagship Aruba's boat tours.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before you set sail with Flagship Aruba. Can't find your answer? Ask our assistant in the corner, or reach out directly."
          cta={{ label: "Contact us", href: "/contact" }}
        />

        <section className="container-px mx-auto max-w-3xl py-20 sm:py-24">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
