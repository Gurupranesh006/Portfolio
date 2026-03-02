import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border/80 bg-muted/60 px-3 py-1 text-xs font-medium text-foreground",
        className
      )}
      {...props}
    />
  );
}