import { Sailboat } from "lucide-react";
import { cn } from "@/lib/utils";

const boats = [
  { className: "left-[6%] top-[15%] size-16 sm:size-20", delay: "0s", opacity: 0.07 },
  { className: "right-[10%] top-[55%] size-24 sm:size-28", delay: "-2.5s", opacity: 0.05 },
  { className: "left-[22%] bottom-[8%] size-12 sm:size-16", delay: "-4.5s", opacity: 0.06 },
];

/**
 * FloatingBoats — a handful of oversized, near-invisible sailboat icons
 * gently bobbing in a section's background, for a bit of nautical texture
 * and motion behind the real content. Same "decorative layer" pattern as
 * AuroraBackground/GridPattern: place as the first child of a `relative`
 * container. Purely decorative (aria-hidden); the sail-bob animation is
 * frozen under prefers-reduced-motion via globals.css.
 *
 * `tone` also scales the opacity: a light icon on a dark surface reads far
 * fainter than a dark icon at the same opacity on a light surface (our
 * vision — and lossy image encoding — is much less sensitive to subtle
 * lightening of a dark color than to subtle darkening of a light one), so
 * the `text-primary-foreground` (on-dark) variant roughly doubles it.
 */
export function FloatingBoats({ className, tone = "text-primary" }: { className?: string; tone?: string }) {
  const boost = tone === "text-primary" ? 1 : 2.2;
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {boats.map((b, i) => (
        <Sailboat
          key={i}
          strokeWidth={1.25}
          className={cn("absolute animate-sail-bob", tone, b.className)}
          style={{ animationDelay: b.delay, opacity: b.opacity * boost }}
        />
      ))}
    </div>
  );
}
