import type { Metadata } from "next";
import { TourDetail } from "@/components/sections/tour-detail";

export const metadata: Metadata = {
  title: "Sunset & Stars Cruise",
  description:
    "Unwind as the sun dips below the horizon on this magical evening sail aboard Flagship Aruba's pirate-style schooner. Local bites, drinks, and ocean breezes.",
};

export default function SunsetStarsCruisePage() {
  return (
    <TourDetail
      eyebrow="Sunset & Stars Cruise"
      title="A Magical Evening at Sea"
      heroDescription="Unwind as the sun dips below the horizon on this magical evening sail. Enjoy local bites, drinks, and ocean breezes perfect for couples or friends looking to chill."
      heroImage={{
        src: "/ingested/flagshiparubaa/sunset-bird-silhouette.webp",
        alt: "A bird silhouetted against an Aruba sunset over the ocean",
      }}
      activityId="8ff35752-c22a-41f6-b142-4679aa1d1fb4"
      whatToExpect={[
        "An evening sail timed to Aruba's famous sunset",
        "Local bites and drinks served on deck",
        "Calm ocean breezes, perfect for couples or friends",
        "A relaxed pace after a day on the island",
      ]}
      sectionTitle="A Magical Evening at Sea"
      sectionBody="As the light turns gold and the schooner's sails catch the last of the breeze, this is the cruise for slowing down. Local bites and drinks come around while the sky does the rest of the work."
      sectionImage={{
        src: "/ingested/flagshiparubaa/schooner-pink-sunset.webp",
        alt: "Flagship Aruba's schooner sailing under a pink sunset sky",
      }}
      goodToKnow={[
        "Departs from the pier in front of MooMba Beach Bar, Palm Beach",
        "Local bites and drinks are included",
        "Children under 10 are welcome on select cruises at a reduced rate",
        "Book your spot online through our secure booking widget",
      ]}
    />
  );
}
