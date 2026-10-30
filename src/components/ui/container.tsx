import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Component = "div", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-12", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
