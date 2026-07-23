"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

const FLAG_KEY = "flagship-lang-switching";

/**
 * Shows a brief "Translating..." toast after the LanguageSwitcher's hard
 * reload. Google's translate call is async and takes several seconds to
 * actually rewrite the page text, well after the fresh page has painted, so
 * without this the switch looks broken/stuck rather than in progress.
 */
export function TranslationLoader() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(FLAG_KEY) !== "1") return;
    setVisible(true);
    // Cleared on hide (not immediately): React 18 Strict Mode double-invokes
    // effects in dev, and removing the flag on the first pass would make the
    // second pass see it already gone, so the toast would never show.
    const t = setTimeout(() => {
      sessionStorage.removeItem(FLAG_KEY);
      setVisible(false);
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      className="fixed inset-x-0 top-4 z-[60] mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-lg shadow-primary/10"
    >
      <Loader2 className="size-4 shrink-0 animate-spin text-ocean" />
      Translating page…
    </div>
  );
}
