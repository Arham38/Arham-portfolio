import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "status" | "tag" | "default" | "accent" | "outline" | "success" | "warning";
  dot?: boolean;
  pulse?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "tag", dot = false, pulse = false, children, ...props }, ref) => {
    if (variant === "status" || dot) {
      return (
        <span
          ref={ref}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 font-sans text-xs font-medium border border-border bg-surface text-text-primary",
            className
          )}
          {...props}
        >
          {dot && (
            <span
              className={cn(
                "h-2 w-2 rounded-full bg-success shrink-0",
                pulse && "animate-pulse"
              )}
            />
          )}
          <span>{children}</span>
        </span>
      );
    }

    if (variant === "accent") {
      return (
        <span
          ref={ref}
          className={cn(
            "inline-flex items-center rounded-[6px] border border-accent/20 bg-accent/10 px-2 py-0.5 font-sans text-xs font-medium text-accent",
            className
          )}
          {...props}
        >
          {children}
        </span>
      );
    }

    if (variant === "outline") {
      return (
        <span
          ref={ref}
          className={cn(
            "inline-flex items-center rounded-[6px] border border-border bg-transparent px-2 py-0.5 font-sans text-xs text-text-secondary",
            className
          )}
          {...props}
        >
          {children}
        </span>
      );
    }

    if (variant === "success") {
      return (
        <span
          ref={ref}
          className={cn(
            "inline-flex items-center rounded-[6px] border border-green-500/20 bg-green-500/10 px-2 py-0.5 font-sans text-xs text-green-600 dark:text-green-400",
            className
          )}
          {...props}
        >
          {children}
        </span>
      );
    }

    if (variant === "warning") {
      return (
        <span
          ref={ref}
          className={cn(
            "inline-flex items-center rounded-[6px] border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-sans text-xs text-amber-600 dark:text-amber-400",
            className
          )}
          {...props}
        >
          {children}
        </span>
      );
    }

    // Default or "tag" variant: 12px mono tag
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-[6px] border border-border bg-surface-2 px-2 py-0.5 font-mono text-[12px] text-text-secondary",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
