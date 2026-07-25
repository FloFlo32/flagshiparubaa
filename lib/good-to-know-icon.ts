import {
  MapPin,
  CalendarCheck,
  Users,
  PackageCheck,
  Music,
  Wind,
  Eye,
  Clock,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * Picks a fitting icon for a "Good to know" line by keyword, rather than
 * hardcoding one per string — this content is plain copy (tour and snorkel
 * site facts), not a data model with icon hints, and keyword matching keeps
 * working if the copy changes without needing an icon reassigned by hand.
 */
export function getGoodToKnowIcon(text: string): LucideIcon {
  const t = text.toLowerCase();
  if (t.includes("depart") || t.includes("pier") || t.includes("shore")) return MapPin;
  if (t.includes("book")) return CalendarCheck;
  if (t.includes("child") || t.includes("kid") || t.includes("beginner") || t.includes("every level") || t.includes("every skill")) return Users;
  if (t.includes("music") || t.includes("rope")) return Music;
  if (t.includes("current") || t.includes("brief")) return Wind;
  if (t.includes("visible") || t.includes("clear day") || t.includes("wreck")) return Eye;
  if (t.includes("time") || t.includes("regular stop") || t.includes("signature stop")) return Clock;
  if (t.includes("calm") || t.includes("safe") || t.includes("sheltered") || t.includes("consistent")) return ShieldCheck;
  if (t.includes("gear") || t.includes("vest") || t.includes("include") || t.includes("snack") || t.includes("drink") || t.includes("bite") || t.includes("bar")) return PackageCheck;
  return Sparkles;
}
