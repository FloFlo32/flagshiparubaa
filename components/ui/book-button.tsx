import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * BookButton — triggers the Yetti booking modal (global script in app/layout.tsx
 * listens for clicks on [data-yetti-activity]). Pass activityId for a specific
 * tour; leave it empty for the general "Book Now" action.
 */
export function BookButton({
  activityId = "",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { activityId?: string }) {
  return (
    <button type="button" data-yetti-activity={activityId} className={cn("cursor-pointer", className)} {...props}>
      {children}
    </button>
  );
}
