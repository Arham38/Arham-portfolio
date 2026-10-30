import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "success" | "outline" | "surface";
  dot?: boolean;
  pulse?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = "accent",
      dot = false,
      pulse = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[13px] leading-[18px] font-medium border select-none transition-colors duration-250";

    const variantStyles = {
      accent:
        "bg-accent-soft border-accent/25 text-accent shadow-sm",
      success:
        "bg-success-soft border-success/30 text-success shadow-sm",
      outline:
        "bg-transparent border-border text-muted hover:text-text hover:border-border-bright",
      surface:
        "bg-surface-2 border-border text-muted",
    };

    const dotColors = {
      accent: "bg-accent",
      success: "bg-success",
      outline: "bg-muted",
      surface: "bg-muted",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {dot && (
          <span className="relative flex h-2 w-2 shrink-0">
            {pulse && (
              <span
                className={cn(
                  "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                  dotColors[variant]
                )}
              />
            )}
            <span
              className={cn(
                "relative inline-flex rounded-full h-2 w-2",
                dotColors[variant]
              )}
            />
          </span>
        )}
        <span>{children}</span>
      </span>
    );
  }
);

Badge.displayName = "Badge";
