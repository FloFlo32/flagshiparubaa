import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { Accordion } from "@/components/sections/accordion";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Flagship Aruba's boat tours.",
};

const faqs = [
  {
    q: "Are Flagship Aruba tours suitable for children?",
    a: "On our Sail, Snorkel, Swim & Swing Cruise, Afternoon Snorkel, and Sunset Sail Cruises, children under 10 years old are very welcome and can join the adventure at a reduced rate.",
  },
  {
    q: "Are the Grub & Grog Cruises suitable for children?",
    a: "No, the Grub & Grog Cruises are adults-only.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before you set sail with Flagship Aruba. Can't find your answer? Ask our assistant in the corner, or reach out directly."
          image={{
            src: "/ingested/flagshiparubaa/snorkeler-with-mask.webp",
            alt: "A guest snorkeling in Aruba's clear waters",
          }}
          cta={{ label: "Contact us", href: "/contact", external: false }}
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
