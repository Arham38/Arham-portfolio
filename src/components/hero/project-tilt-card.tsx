"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Package,
  Layers,
  Activity,
  ExternalLink,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProjectTiltCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tilt tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [6, -6]);
  const rotateY = useTransform(smoothX, [0, 1], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full [perspective:1000px] select-none group"
    >
      {/* Background Soft Accent Glow */}
      <div
        className="absolute -inset-1 rounded-[16px] bg-gradient-to-r from-accent/30 to-accent-hover/20 blur-xl opacity-40 group-hover:opacity-75 transition duration-500 -z-10"
        aria-hidden="true"
      />

      <motion.div
        style={
          shouldReduceMotion
            ? {}
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        className="w-full rounded-[14px] border border-border bg-surface shadow-2xl transition-all duration-250 ease-out group-hover:border-border-bright overflow-hidden"
      >
        {/* App Window Chrome / Header */}
        <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
            <span className="ml-2 font-mono text-[11px] text-muted flex items-center gap-1.5 bg-bg/60 px-2.5 py-0.5 rounded-[6px] border border-border/50">
              <Lock className="h-3 w-3 text-accent" />
              admin.jableather.com/overview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="success" dot pulse className="text-[11px] py-0 px-2 h-5">
              LIVE
            </Badge>
          </div>
        </div>

        {/* Dashboard Content Mockup */}
        <div className="p-4 sm:p-5 space-y-4 bg-gradient-to-b from-surface to-bg/50">
          {/* Top Bar inside App */}
          <div className="flex items-center justify-between pb-3 border-b border-border/60">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-sm tracking-tight text-text">
                  JAB LEATHER
                </span>
                <span className="font-mono text-[10px] text-accent bg-accent-soft px-1.5 py-0.5 rounded border border-accent/20">
                  Admin v2.4
                </span>
              </div>
              <p className="font-mono text-[11px] text-muted">
                14-Category E-Commerce Platform
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-muted text-xs font-mono">
              <Activity className="h-3.5 w-3.5 text-success" />
              <span>42ms p95</span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-[8px] bg-surface-2 border border-border/60">
              <div className="flex items-center justify-between text-muted text-[10px] font-mono">
                <span>Revenue</span>
                <TrendingUp className="h-3 w-3 text-success" />
              </div>
              <div className="font-heading font-bold text-sm text-text mt-1">
                $128.4K
              </div>
              <div className="text-[10px] font-mono text-success">
                +18.4%
              </div>
            </div>

            <div className="p-2.5 rounded-[8px] bg-surface-2 border border-border/60">
              <div className="flex items-center justify-between text-muted text-[10px] font-mono">
                <span>Orders</span>
                <Package className="h-3 w-3 text-accent" />
              </div>
              <div className="font-heading font-bold text-sm text-text mt-1">
                1,420
              </div>
              <div className="text-[10px] font-mono text-muted">
                99.8% fulfilled
              </div>
            </div>

            <div className="p-2.5 rounded-[8px] bg-surface-2 border border-border/60">
              <div className="flex items-center justify-between text-muted text-[10px] font-mono">
                <span>Categories</span>
                <Layers className="h-3 w-3 text-accent" />
              </div>
              <div className="font-heading font-bold text-sm text-text mt-1">
                14 Active
              </div>
              <div className="text-[10px] font-mono text-muted">
                3,800+ SKUs
              </div>
            </div>
          </div>

          {/* Real-time Order Stream Simulation */}
          <div className="rounded-[8px] bg-surface-2/80 border border-border/60 p-3 space-y-2">
            <div className="flex items-center justify-between text-xs font-heading font-semibold text-text">
              <span>Recent Admin Operations</span>
              <span className="font-mono text-[10px] text-muted">RBAC Role: SuperAdmin</span>
            </div>

            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="flex items-center justify-between p-1.5 rounded bg-bg/60 border border-border/40">
                <span className="text-text truncate max-w-[170px] sm:max-w-[210px]">
                  #ORD-8821 Handcrafted Jacket
                </span>
                <span className="text-success text-[10px] font-medium">
                  Paid · Synced
                </span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-bg/60 border border-border/40">
                <span className="text-text truncate max-w-[170px] sm:max-w-[210px]">
                  #ORD-8820 Vintage Briefcase
                </span>
                <span className="text-accent text-[10px] font-medium">
                  Dispatched
                </span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-bg/60 border border-border/40">
                <span className="text-text truncate max-w-[170px] sm:max-w-[210px]">
                  #SEC-402 Auth Token Refresh
                </span>
                <span className="text-muted text-[10px]">
                  RLS Verified
                </span>
              </div>
            </div>
          </div>

          {/* Footer Security Badge */}
          <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-muted">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-success" />
              JWT + Row Level Security
            </span>
            <span className="text-accent hover:underline flex items-center gap-1 cursor-pointer">
              40+ Endpoints <ExternalLink className="h-3 w-3" />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
