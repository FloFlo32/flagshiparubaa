"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = React.useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.q} className="overflow-hidden rounded-2xl border border-border bg-card">
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left font-semibold"
          >
            {item.q}
            <ChevronDown className={cn("size-5 shrink-0 text-primary transition-transform duration-200", open === i && "rotate-180")} />
          </button>
          <div className={cn("grid transition-all duration-200", open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
            <div className="overflow-hidden px-5 pb-5 text-pretty text-sm text-muted-foreground">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
