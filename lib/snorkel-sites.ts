export type SnorkelSite = {
  slug: string;
  navLabel: string;
  title: string;
  tagline: string;
  heroDescription: string;
  heroImage: { src: string; alt: string };
  heroImagePosition?: string;
  secondaryImage: { src: string; alt: string };
  stats: { label: string; value: string }[];
  intro: string;
  whatYoullSee: string[];
  goodToKnow: string[];
};

export const snorkelSites: SnorkelSite[] = [
  {
    slug: "boca-catalina-reefs",
    navLabel: "Boca Catalina Reefs",
    title: "Boca Catalina Reefs",
    tagline: "A sheltered cove with the calmest water on the itinerary",
    heroDescription:
      "A short sail south of Malmok, Boca Catalina is a sheltered cove with a white sandy floor, gentle waves, and some of the clearest water we visit, an easy, confidence-building stop for every skill level.",
    heroImage: {
      src: "/ingested/flagshiparubaa/snorkeler-boca-catalina.webp",
      alt: "A guest snorkeling in the clear shallow water at Boca Catalina Reefs, Aruba",
    },
    secondaryImage: {
      src: "/ingested/flagshiparubaa/guest-c.webp",
      alt: "A family snorkeling together at Boca Catalina, with the schooner in the background",
    },
    stats: [
      { label: "Visibility", value: "Outstanding" },
      { label: "Water", value: "Shallow & calm" },
      { label: "Best for", value: "Every skill level" },
    ],
    intro:
      "Boca Catalina is the cove we lean on when guests want an easy, unhurried swim. The bay is sheltered from open swell, the sandy bottom keeps the water bright and clear, and soft coral gardens sit close enough to the surface that snorkelers of any experience level can enjoy them without diving deep.",
    whatYoullSee: [
      "Angelfish and yellow-striped grunts moving through soft coral and sponge gardens",
      "Blue parrotfish grazing along the reef edge",
      "Grouper resting in the shade of coral overhangs",
      "Brain coral and sea fans in water clear enough to photograph from the surface",
    ],
    goodToKnow: [
      "Calm, sheltered water year round, a favorite first stop for nervous swimmers.",
      "Shallow enough that kids and first time snorkelers feel comfortable fast.",
      "Gear, flotation vests, and guidance from our crew are included on every cruise.",
      "Paired with Malmok Beach on our Morning Splash Adventure for a full reef to reef swim.",
    ],
  },
  {
    slug: "malmok-beach",
    navLabel: "Malmok Beach",
    title: "Malmok Beach",
    tagline: "One of Aruba's most celebrated snorkel spots",
    heroDescription:
      "Tucked near the island's north tip, Malmok is famous for shallow turquoise water and exceptional visibility, calm and clear enough that it welcomes total beginners and experienced snorkelers on the very same swim.",
    heroImage: {
      src: "/ingested/flagshiparubaa/malmok-beach.webp",
      alt: "Malmok Beach, one of the top Aruba snorkel sites",
    },
    secondaryImage: {
      src: "/ingested/flagshiparubaa/guest-h.webp",
      alt: "Guests relaxing in the bow net over the turquoise water off Malmok",
    },
    stats: [
      { label: "Visibility", value: "Exceptional" },
      { label: "Water", value: "Turquoise & clear" },
      { label: "Best for", value: "Beginners to advanced" },
    ],
    intro:
      "Malmok sits near Noord on Aruba's northwestern coast, and it's earned its reputation. The moment you slip into the water the rocky formations below come into focus almost immediately, a rare kind of clarity that holds steady across the year regardless of season.",
    whatYoullSee: [
      "Yellow tangs and butterflyfish weaving through the rocky reef",
      "Blue parrotfish in loose, colorful schools",
      "Triggerfish patrolling the reef edge",
      "Rock formations close enough to the surface for confident free divers to explore",
    ],
    goodToKnow: [
      "Clear, calm, and safe year round, one of the most consistent sites we visit.",
      "Comfortable for beginners, still interesting enough for experienced snorkelers.",
      "A regular stop on our Morning Splash Adventure and Afternoon Pirate Party.",
      "Close to shore, which means more time in the water and less time getting there.",
    ],
  },
  {
    slug: "ss-antilla-shipwreck",
    navLabel: "The SS Antilla",
    title: "The SS Antilla Shipwreck",
    tagline: "Aruba's most famous snorkel site, a genuine WWII wreck",
    heroDescription:
      "A 400 foot WWII-era German freighter resting on its side in just 60 feet of water, the SS Antilla is one of the largest and most accessible wrecks in the Caribbean, and the highlight of nearly every cruise we run.",
    heroImage: {
      src: "/ingested/flagshiparubaa/ss-antilla-wreck-aerial.webp",
      alt: "Aerial view of the SS Antilla shipwreck off the coast of Aruba",
    },
    heroImagePosition: "object-bottom",
    secondaryImage: {
      src: "/ingested/flagshiparubaa/snorkeler-boca-catalina.webp",
      alt: "A guest snorkeling in the clear water near the SS Antilla",
    },
    stats: [
      { label: "Depth", value: "60 feet" },
      { label: "Length", value: "400 feet" },
      { label: "Best for", value: "Every skill level" },
    ],
    intro:
      "Scuttled by her own German crew in 1940, the Antilla has spent over eighty years becoming one of the most photographed wrecks in the Caribbean. She sits close enough to the surface that snorkelers, not just divers, can take in her full scale, and the hull now doubles as one of the busiest reefs on the island.",
    whatYoullSee: [
      "Schools of fish circling the coral covered hull",
      "Sea turtles resting in the ship's shadow",
      "Sunlight filtering through open hatches and portholes",
      "Soft coral and sponge growth claiming the deck and railings",
    ],
    goodToKnow: [
      "Large enough that the wreck is visible from the surface on a clear day.",
      "Suitable for snorkelers of every level, no diving certification required.",
      "The signature stop on our Afternoon Pirate Party and Sunset & Stars Cruise.",
      "Currents are mild but present, our crew briefs everyone before we get in.",
    ],
  },
];

export function getSiteBySlug(slug: string) {
  return snorkelSites.find((s) => s.slug === slug);
}
