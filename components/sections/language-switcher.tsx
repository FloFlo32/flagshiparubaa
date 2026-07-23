"use client";

import * as React from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "EN", googleCode: "en", label: "English" },
  { code: "NL", googleCode: "nl", label: "Nederlands" },
  { code: "ES", googleCode: "es", label: "Español" },
  { code: "DE", googleCode: "de", label: "Deutsch" },
  { code: "PT", googleCode: "pt", label: "Português" },
];

/**
 * Reads/writes the `googtrans` cookie Google's page-translate service checks,
 * then reloads so the whole page renders in the picked language (or back to
 * the original English markup when switching to EN).
 */
function setTranslation(googleCode: string) {
  const domain = window.location.hostname;
  if (googleCode === "en") {
    document.cookie = `googtrans=; domain=${domain}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  } else {
    const value = `/en/${googleCode}`;
    document.cookie = `googtrans=${value}; domain=${domain}; path=/`;
    document.cookie = `googtrans=${value}; path=/`;
  }
  window.location.reload();
}

function readCurrentLanguage() {
  const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
  const googleCode = match?.[1];
  return languages.find((l) => l.googleCode === googleCode) ?? languages[0];
}

export function LanguageSwitcher({ className, align = "right" }: { className?: string; align?: "left" | "right" }) {
  const [open, setOpen] = React.useState(false);
  const [current, setCurrent] = React.useState(languages[0]);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setCurrent(readCurrentLanguage());
  }, []);

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
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Choose language"
        className="flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground"
      >
        <Globe className="size-4" />
        {current.code}
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          "absolute top-full w-44 pt-2 -mt-px",
          align === "right" ? "right-0" : "left-0",
          open ? "visible" : "invisible"
        )}
      >
        <div
          className={cn(
            "rounded-xl border border-border bg-card p-2 shadow-xl shadow-primary/10 transition-all duration-150",
            open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          )}
        >
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setOpen(false);
                if (l.code !== current.code) setTranslation(l.googleCode);
              }}
              className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-accent"
            >
              {l.label}
              {current.code === l.code && <Check className="size-4 text-primary" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
