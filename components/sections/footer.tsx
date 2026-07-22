import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { brand } from "@/brand.config";

const menu = [
  { label: "Boat Tours", href: "/boat-tours" },
  { label: "Morning Splash Adventure", href: "/flagshiparuba-morning-snorkel-cruise" },
  { label: "Afternoon Pirate Party", href: "/afternoon-pirate-party" },
  { label: "Sunset & Stars Cruise", href: "/sunset-stars-cruise" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Snorkel Sites", href: "/flagship-aruba-snorkel-sites" },
];

const info = [
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Address", href: "/address" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy", href: "/privacy" },
];

const partners = [
  { src: "/ingested/flagshiparubaa/partners/viator.svg", alt: "Viator", w: 90 },
  { src: "/ingested/flagshiparubaa/partners/tripadvisor.svg", alt: "TripAdvisor", w: 110 },
  { src: "/ingested/flagshiparubaa/partners/getyourguide.svg", alt: "GetYourGuide", w: 34 },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="container-px mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Flagship Aruba home">
            <Image src="/logo.webp" alt="Flagship Aruba" width={168} height={67} className="h-12 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">{brand.tagline}</p>
          <div className="mt-5 space-y-2.5 text-sm text-primary-foreground/80">
            <p className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" /> All cruises depart from MooMba Beach Bar, Palm Beach.
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" /> {brand.contact.phone}
            </p>
            <a href={`mailto:${brand.social.email}`} className="flex items-center gap-2 cursor-pointer transition-colors hover:text-primary-foreground">
              <Mail className="size-4 shrink-0" /> {brand.social.email}
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide">Menu</h4>
          <ul className="mt-4 space-y-2.5">
            {menu.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide">Information</h4>
          <ul className="mt-4 space-y-2.5">
            {info.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide">Featured on</h4>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            {partners.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.alt} src={p.src} alt={p.alt} width={p.w} className="h-6 w-auto brightness-0 invert opacity-80" />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-6">
        <div className="container-px mx-auto flex max-w-6xl flex-col gap-2 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© Copyright 2026 {brand.name}.</p>
          <div className="flex flex-wrap gap-4">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-primary-foreground/90">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="container-px mx-auto mt-3 max-w-6xl text-xs text-primary-foreground/45">
          Unofficial redesign concept inspired by flagshiparuba.com. Not affiliated with, endorsed by, or an official
          site of the operating business.
        </p>
      </div>
    </footer>
  );
}
