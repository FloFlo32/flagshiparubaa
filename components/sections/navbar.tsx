"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { BookButton } from "@/components/ui/book-button";

const tours = [
  { href: "/flagshiparuba-morning-snorkel-cruise", label: "Morning Splash Adventure" },
  { href: "/afternoon-pirate-party", label: "Afternoon Pirate Party" },
  { href: "/sunset-stars-cruise", label: "Sunset & Stars Cruise" },
];

const links = [
  { href: "/about-us", label: "About Us" },
  { href: "/flagship-aruba-snorkel-sites", label: "Our Snorkel Sites" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [toursOpen, setToursOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const toursRef = React.useRef<HTMLDivElement>(null);

  const openTours = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setToursOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setToursOpen(false), 250);
  };

  // Click-to-toggle + click-outside/Escape-to-close, so the dropdown works
  // reliably on touch devices (not just mouse hover).
  React.useEffect(() => {
    if (!toursOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (toursRef.current && !toursRef.current.contains(e.target as Node)) setToursOpen(false);
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setToursOpen(false);
    };
    document.addEventListener("click", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("click", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [toursOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-sm">
      <nav className="container-px mx-auto flex h-20 max-w-6xl items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Flagship Aruba home">
          <Image src="/logo.webp" alt="Flagship Aruba" width={168} height={67} priority className="h-12 w-auto" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground"
          >
            Home
          </Link>

          <div ref={toursRef} className="relative" onMouseEnter={openTours} onMouseLeave={scheduleClose}>
            <button
              type="button"
              onClick={() => setToursOpen((o) => !o)}
              aria-expanded={toursOpen}
              className="flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              Boat Tours <ChevronDown className={cn("size-3.5 transition-transform", toursOpen && "rotate-180")} />
            </button>
            <div
              className={cn(
                "absolute left-0 top-full w-64 pt-2 -mt-px",
                toursOpen ? "visible" : "invisible"
              )}
            >
              <div
                className={cn(
                  "rounded-xl border border-border bg-card p-2 shadow-xl shadow-primary/10 transition-all duration-150",
                  toursOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                )}
              >
              {tours.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  onClick={() => setToursOpen(false)}
                  className="block cursor-pointer rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
                >
                  {t.label}
                </Link>
              ))}
              <div className="my-1 border-t border-border" />
              <Link
                href="/boat-tours"
                onClick={() => setToursOpen(false)}
                className="block cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-accent"
              >
                All Boat Tours
              </Link>
              </div>
            </div>
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <BookButton className="hidden items-center rounded-full bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] sm:inline-flex">
            Book Now
          </BookButton>
          <button
            type="button"
            className="grid size-10 cursor-pointer place-items-center rounded-md text-primary-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-primary-foreground/15 bg-primary lg:hidden">
          <div className="container-px mx-auto flex max-w-6xl flex-col gap-1 py-4">
            <Link href="/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10">
              Home
            </Link>
            <Link href="/boat-tours" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10">
              Boat Tours
            </Link>
            {tours.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 pl-6 text-sm text-primary-foreground/75 hover:bg-primary-foreground/10"
              >
                {t.label}
              </Link>
            ))}
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10"
              >
                {l.label}
              </Link>
            ))}
            <BookButton
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-card px-5 py-2.5 text-sm font-semibold text-primary"
            >
              Book Now
            </BookButton>
          </div>
        </div>
      )}
    </header>
  );
}
