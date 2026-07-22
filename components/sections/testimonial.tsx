import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";

export function Testimonial() {
  return (
    <section className="container-px mx-auto max-w-6xl py-4 sm:py-8">
      <Reveal>
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-[0.6fr_1.4fr]">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[28rem]">
            <Image
              src="/ingested/flagshiparubaa/schooner-turquoise-anchor.webp"
              alt="Flagship Aruba's schooner anchored over crystal-clear turquoise water with snorkelers alongside"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              quality={78}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
            <Quote className="size-8 text-primary" />
            <p className="text-pretty text-lg leading-relaxed text-foreground">
              &ldquo;Flagship Aruba delivers a memorable mix of adventure, snorkeling, and laid-back fun aboard
              charming pirate-style schooners. Guests consistently praise the friendly, witty crew, open bar, and
              great music, which contribute to a festive atmosphere especially during the rope-swing finale. The
              snorkeling spots, including the WWII shipwreck SS Antilla, Boca Catalina, and Malmok Reef, are
              beautiful and well-chosen.&rdquo;
            </p>
            <p className="font-display text-sm font-semibold">Lisa de Boer</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
