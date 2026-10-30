import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium select-none transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

    const variantStyles = {
      primary:
        "bg-accent text-white shadow-sm hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(108,99,255,0.35)] active:translate-y-0",
      ghost:
        "bg-transparent text-text border border-border hover:border-accent/50 hover:bg-surface-2 hover:text-accent active:bg-surface",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs rounded-[8px] gap-1.5",
      md: "h-11 px-5 text-sm rounded-[12px] gap-2",
      lg: "h-13 px-7 text-base rounded-[12px] gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
