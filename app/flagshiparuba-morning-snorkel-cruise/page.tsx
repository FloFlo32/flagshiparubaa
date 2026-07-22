import type { Metadata } from "next";
import { TourDetail } from "@/components/sections/tour-detail";

export const metadata: Metadata = {
  title: "Morning Splash Adventure",
  description:
    "Discover Aruba's best snorkel sites on a 4-hour morning cruise. Snorkel stops, snacks, and turquoise waters. Departing from MooMba Pier.",
};

export default function MorningSplashAdventurePage() {
  return (
    <TourDetail
      eyebrow="Morning Splash Adventure"
      title="Make Your Morning Magical!"
      heroDescription="Start your day with a snorkel cruise through crystal-clear waters and vibrant marine life. Includes gear, drinks, and sunny vibes perfect for early adventurers."
      heroImage={{
        src: "/ingested/flagshiparubaa/coastline-cliff-sunset.webp",
        alt: "The Aruba coastline at sunset with Flagship Aruba's schooner offshore",
      }}
      activityId="01083159-5861-4408-b78d-22c81e19faa4"
      whatToExpect={[
        "A 4-hour morning cruise departing from MooMba Pier, Palm Beach",
        "Snorkel gear included, with stops at Aruba's best sites",
        "Drinks and snacks served throughout the cruise",
        "A friendly crew and sunny, easygoing morning vibes",
      ]}
      sectionTitle="Make Your Morning Magical!"
      sectionBody="Slip into the water while it's calm and clear, before the afternoon crowds arrive. Our crew guides you to the best snorkel stops of the day, then keeps drinks and snacks coming while you dry off on deck."
      sectionImage={{
        src: "/ingested/flagshiparubaa/snorkeler-boca-catalina.webp",
        alt: "A guest snorkeling at Boca Catalina Reefs, Aruba",
      }}
      goodToKnow={[
        "Departs from the pier in front of MooMba Beach Bar, Palm Beach",
        "Snorkel gear, drinks, and snacks are included",
        "Children under 10 are welcome on select cruises at a reduced rate",
        "Book your spot online through our secure booking widget",
      ]}
    />
  );
}
