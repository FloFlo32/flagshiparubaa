"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { BookButton } from "@/components/ui/book-button";
import { LanguageSwitcher } from "@/components/sections/language-switcher";
import { FlagshipMark } from "@/components/icons";
import { snorkelSites } from "@/lib/snorkel-sites";
import { brand } from "@/brand.config";

const tours = [
  { href: "/flagshiparuba-morning-snorkel-cruise", label: "Morning Splash Adventure" },
  { href: "/afternoon-pirate-party", label: "Afternoon Pirate Party" },
  { href: "/sunset-stars-cruise", label: "Sunset & Stars Cruise" },
];

const sites = snorkelSites.map((s) => ({
  href: `/flagship-aruba-snorkel-sites/${s.slug}`,
  label: s.navLabel,
}));

const linksBeforeSites = [{ href: "/about-us", label: "About Us" }];
const linksAfterSites = [
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 250);
  };

  // Click-to-toggle + click-outside/Escape-to-close, so the dropdown works
  // reliably on touch devices (not just mouse hover).
  React.useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("click", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
      >
        {label} <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>
      <div className={cn("absolute left-0 top-full w-64 pt-2 -mt-px", open ? "visible" : "invisible")}>
        <div
          className={cn(
            "rounded-xl border border-border bg-card p-2 shadow-xl shadow-primary/10 transition-all duration-150",
            open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          )}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block cursor-pointer rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 shadow-sm backdrop-blur-sm">
      <nav className="container-px mx-auto flex h-20 max-w-6xl items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Flagship Aruba home">
          <FlagshipMark className="size-8 shrink-0 text-primary" seam="var(--color-card)" />
          <Image src="/logo-dark.webp" alt="Flagship Aruba" width={168} height={67} priority className="h-11 w-auto" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary">
            Home
          </Link>

          <NavDropdown label="Boat Tours" items={tours} />

          {linksBeforeSites.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}

          <NavDropdown label="Our Snorkel Sites" items={sites} />

          {linksAfterSites.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`}
            className="mr-1 hidden cursor-pointer items-center gap-1.5 rounded-md px-2 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-ocean xl:inline-flex"
          >
            <Phone className="size-4 text-ocean" /> {brand.contact.phone}
          </a>
          <LanguageSwitcher className="hidden lg:block" />
          <BookButton className="ml-1 hidden items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] sm:inline-flex">
            Book Now
          </BookButton>
          <button
            type="button"
            className="grid size-10 cursor-pointer place-items-center rounded-md text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="container-px mx-auto flex max-w-6xl flex-col gap-1 py-4">
            <Link href="/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-accent">
              Home
            </Link>
            <span className="px-3 py-2.5 text-sm font-medium text-muted-foreground">Boat Tours</span>
            {tours.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 pl-6 text-sm text-foreground/75 hover:bg-accent"
              >
                {t.label}
              </Link>
            ))}
            {linksBeforeSites.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <span className="px-3 py-2.5 text-sm font-medium text-muted-foreground">Our Snorkel Sites</span>
            {sites.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 pl-6 text-sm text-foreground/75 hover:bg-accent"
              >
                {s.label}
              </Link>
            ))}
            {linksAfterSites.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-accent"
            >
              <Phone className="size-4 text-ocean" /> {brand.contact.phone}
            </a>
            <div className="mt-2 border-t border-border pt-3">
              <LanguageSwitcher align="left" />
            </div>
            <BookButton
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Book Now
            </BookButton>
          </div>
        </div>
      )}
    </header>
  );
}
