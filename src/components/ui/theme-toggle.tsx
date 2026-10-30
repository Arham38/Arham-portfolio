"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showLabel?: boolean;
}

export function ThemeToggle({
  className,
  showLabel = false,
  ...props
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "h-10 w-10 rounded-[12px] border border-border bg-surface-2 opacity-50",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex items-center justify-center rounded-[12px] border border-border bg-surface p-2.5 text-muted hover:text-accent hover:border-accent/40 hover:bg-surface-2 transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        showLabel && "px-3.5 gap-2",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      {...props}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-250" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-250" />
      )}
      {showLabel && (
        <span className="font-mono text-xs">{isDark ? "Light" : "Dark"}</span>
      )}
    </button>
  );
}
