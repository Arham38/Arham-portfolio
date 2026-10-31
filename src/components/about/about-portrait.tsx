"use client";

import React from "react";
import { Terminal, Shield, Code2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AboutPortrait() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto rounded-[16px] border border-accent/40 bg-surface p-2 shadow-2xl overflow-hidden group">
      {/* Background Glow */}
      <div
        className="absolute -inset-1 rounded-[16px] bg-gradient-to-tr from-accent/20 via-transparent to-accent/10 blur-xl opacity-60 group-hover:opacity-90 transition duration-500 -z-10"
        aria-hidden="true"
      />

      {/* Portrait Inner Surface */}
      <div className="relative h-full w-full rounded-[14px] bg-gradient-to-b from-surface-2 via-surface to-bg p-6 flex flex-col justify-between border border-border/80 overflow-hidden">
        {/* Subtle decorative code watermark */}
        <div
          className="absolute -right-6 -bottom-6 font-mono text-[90px] font-bold text-border/20 select-none pointer-events-none"
          aria-hidden="true"
        >
          MERN
        </div>

        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <Badge variant="success" dot pulse className="text-xs">
            Lahore, PK
          </Badge>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted bg-surface px-2.5 py-1 rounded-full border border-border">
            <Sparkles className="h-3 w-3 text-accent" />
            <span>BSSE &apos;27</span>
          </div>
        </div>

        {/* Center Developer Monogram / Visual Badge */}
        <div className="flex flex-col items-center justify-center space-y-4 my-auto z-10 py-6">
          <div className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-[20px] border-2 border-accent/50 bg-surface shadow-[0_0_30px_rgba(108,99,255,0.25)] group-hover:border-accent group-hover:scale-105 transition-all duration-300">
            <span className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-text">
              AB
            </span>
            <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white shadow-md">
              <Code2 className="h-4 w-4" />
            </span>
          </div>

          <div className="text-center space-y-1">
            <h4 className="font-heading font-bold text-lg text-text">
              Muhammad Arham
            </h4>
            <p className="font-mono text-xs text-accent">
              Full-Stack MERN Engineer
            </p>
          </div>
        </div>

        {/* Bottom Specs Bar */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border/60 z-10 text-[11px] font-mono text-muted">
          <div className="flex items-center gap-1.5 bg-surface/70 p-2 rounded-[8px] border border-border/40">
            <Shield className="h-3.5 w-3.5 text-success" />
            <span>RLS & Security</span>
          </div>
          <div className="flex items-center gap-1.5 bg-surface/70 p-2 rounded-[8px] border border-border/40">
            <Terminal className="h-3.5 w-3.5 text-accent" />
            <span>TypeScript / Node</span>
          </div>
        </div>
      </div>
    </div>
  );
}
