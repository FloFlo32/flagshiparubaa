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
        src: "/ingested/flagshiparubaa/tall-ship-horizon.webp",
        alt: "A tall ship sailing on the open water off Aruba",
      }}
      activityId="47611e71-4496-4915-99ef-816cb4ec6fe2"
      whatToExpect={[
        "Music and a festive atmosphere from the moment you board",
        "The rope-swing finale, a guest favorite",
        "Stops at premium snorkel spots along the coast",
        "A self-service open bar with cocktails, beer, wine, and soft drinks",
      ]}
      sectionTitle="A Midday Escape Full of Fun"
      sectionBody="This is the cruise for guests who want a bit of pirate mischief with their snorkeling. Expect music on deck, a crew that keeps the energy up, and a rope swing that turns into the highlight of everyone's trip."
      sectionImage={{
        src: "/ingested/flagshiparubaa/crew-member-smiling.webp",
        alt: "A Flagship Aruba crew member in high spirits aboard the schooner",
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
