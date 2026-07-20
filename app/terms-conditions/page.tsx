import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for booking a cruise with Flagship Aruba.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl py-16 sm:py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Terms & Conditions</h1>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="prose mt-10 space-y-6 text-pretty text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Article 1. Definitions</h2>
                <p className="mt-2">
                  In these general terms and conditions, the following terms are defined as follows:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5">
                  <li>1.1 FlagshipAruba: the lessor, acting under the trade name FlagshipAruba.</li>
                  <li>1.2 Renter: any natural person or legal entity to whom FlagshipAruba has made an offer or with whom FlagshipAruba has entered into an agreement.</li>
                  <li>1.3 Parties: FlagshipAruba and the Renter jointly.</li>
                  <li>1.4 Passengers: the Renter and the passengers who sail along with or on behalf of the Renter.</li>
                  <li>1.5 Services: the rental by FlagshipAruba of a Crewed Vessel and/or Uncrewed Vessel.</li>
                  <li>1.6 Vessel: the vessel with which FlagshipAruba offers its Services to the Renter.</li>
                  <li>1.7 Uncrewed Vessel: a Vessel without a skipper provided by FlagshipAruba who, during the rental period, is responsible for steering the Vessel.</li>
                  <li>1.8 Crewed Vessel: a Vessel with a skipper provided by FlagshipAruba who, during the rental period, is responsible for steering the Vessel.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Article 2. Applicability of the General Terms and Conditions</h2>
                <ul className="mt-2 list-disc space-y-1.5 pl-5">
                  <li>2.1 These General Terms and Conditions apply to every offer, quotation, and agreement made by FlagshipAruba to or with the Renter.</li>
                  <li>2.2 Anyone who makes use of the Services of FlagshipAruba and/or a Vessel of FlagshipAruba is deemed to have taken note of these General Terms and Conditions. The Renter warrants that each of the Passengers has taken note of these General Terms and Conditions prior to boarding a Vessel.</li>
                  <li>2.3 Deviations from these General Terms and Conditions are only possible if FlagshipAruba has given prior written and explicit consent.</li>
                </ul>
              </div>
              <p>
                For the complete Terms & Conditions, or questions about a booking, please{" "}
                <a href="/contact" className="cursor-pointer font-medium text-primary underline underline-offset-2">
                  contact us
                </a>
                .
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
