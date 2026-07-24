import * as React from "react";
import { cn } from "@/lib/utils";

export function BookButton({
  activityId: _activityId,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { activityId?: string }) {
  return (
    <button type="button" data-yetti-activity="" className={cn("cursor-pointer", className)} {...props}>
      {children}
    </button>
  );
}
