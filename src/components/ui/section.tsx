import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ as: Component = "section", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("py-[72px] lg:py-[120px] w-full relative", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = "Section";
