import type { Metadata } from "next";
import { TourDetail } from "@/components/sections/tour-detail";

export const metadata: Metadata = {
  title: "Afternoon Pirate Party",
  description:
    "A lively midday tour with music, rope swinging, premium snorkel spots, and an open bar aboard Flagship Aruba's pirate-style schooner.",
};

export default function AfternoonPiratePartyPage() {
  return (
    <TourDetail
      eyebrow="Afternoon Pirate Party"
      title="A Midday Escape Full of Fun"
      heroDescription="Join a lively midday tour with music, rope swinging, premium snorkel spots, and an open bar. Great for thrill-seekers who love fun, sun, and a bit of pirate mischief."
      heroImage={{
        src: "/ingested/flagshiparubaa/guest-e.webp",
        alt: "A big group of guests cheering aboard the schooner during the Afternoon Pirate Party",
      }}
      activityId="47611e71-4496-4915-99ef-816cb4ec6fe2"
      price="$79"
      duration="3 hours"
      departs="1:00 PM"
      capacity="Up to 40"
      whatToExpect={[
        "Music and a festive atmosphere from the moment you board",
        "The rope-swing finale, a guest favorite",
        "Stops at premium snorkel spots along the coast",
        "A self-service open bar with cocktails, beer, wine, and soft drinks",
      ]}
      sectionTitle="A Midday Escape Full of Fun"
      sectionBody="This is the cruise for guests who want a bit of pirate mischief with their snorkeling. Expect music on deck, a crew that keeps the energy up, and a rope swing that turns into the highlight of everyone's trip."
      sectionImage={{
        src: "/ingested/flagshiparubaa/guest-d.webp",
        alt: "Guests sharing shots at the boat's bar during the Afternoon Pirate Party",
      }}
      goodToKnow={[
        "Departs from the pier in front of MooMba Beach Bar, Palm Beach",
        "Snorkel gear and an open bar are included",
        "Music and rope swinging are part of the experience",
        "Book your spot online through our secure booking widget",
      ]}
    />
  );
}
