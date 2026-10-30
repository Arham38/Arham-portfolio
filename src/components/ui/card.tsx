import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      as: Component = "div",
      interactive = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "bg-surface border border-border rounded-[12px] p-6 md:p-8 transition-all duration-250 ease-out relative overflow-hidden",
          interactive &&
            "hover:border-border-bright hover:-translate-y-1 hover:shadow-[0_12px_32px_-4px_rgba(108,99,255,0.18)] cursor-default",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";
