import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Map } from "@/components/sections/map";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: "Contact",
  description: "How can we help you set sail on your perfect pirate tour? Reach Flagship Aruba by phone, email, or message.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="How can we help you set sail on your perfect pirate tour?"
          description="Let Flagship Aruba be your trusted crew for unforgettable adventures!"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-sm font-medium">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Phone className="size-4" /></span>
                  {brand.contact.phone}
                </div>
                <a href={`mailto:${brand.social.email}`} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-sm font-medium transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Mail className="size-4" /></span>
                  {brand.social.email}
                </a>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><MapPin className="size-4" /></span>
                  <span>All cruises depart from the pier in front of MooMba Beach Bar (Palm Beach).</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <Map />
      </main>
      <Footer />
    </>
  );
}
