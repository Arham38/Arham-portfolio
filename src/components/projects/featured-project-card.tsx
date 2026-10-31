"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, DollarSign, Layers, CheckCircle2, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { type Project } from "@/content/projects";

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-[16px] border border-border bg-surface p-6 sm:p-8 lg:p-10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-bright hover:shadow-[0_16px_40px_-8px_rgba(108,99,255,0.20)]">
      {/* Background Soft Accent Glow */}
      <div
        className="absolute -inset-px rounded-[16px] bg-gradient-to-r from-accent/15 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition duration-500 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Side: Mockup / Visual Window */}
        <div className="lg:col-span-6 w-full">
          <div className="relative rounded-[12px] border border-border bg-surface-2 overflow-hidden shadow-lg group-hover:border-accent/40 transition-colors">
            {/* Window Bar */}
            <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
                <span className="ml-2 font-mono text-[10px] text-muted">
                  jableather.com · storefront & admin
                </span>
              </div>
              <Badge variant="success" dot pulse className="text-[10px] py-0 px-2 h-4">
                Production
              </Badge>
            </div>

            {/* Visual Interface Preview */}
            <div className="p-5 sm:p-6 space-y-4 bg-gradient-to-br from-surface to-bg/80">
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <div>
                  <h4 className="font-heading font-bold text-sm tracking-tight text-text">
                    Custom Leather Biker Jackets
                  </h4>
                  <p className="font-mono text-[11px] text-muted">
                    Bespoke Sizing · Dual-Currency Gateway
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs font-semibold text-accent">$450.00 USD</span>
                  <p className="font-mono text-[10px] text-muted">~ 125,500 PKR</p>
                </div>
              </div>

              {/* Metrics Highlights inside card */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded bg-surface-2/80 border border-border/60">
                  <DollarSign className="h-3.5 w-3.5 text-accent mx-auto mb-1" />
                  <span className="font-mono text-xs font-semibold text-text block">USD/PKR</span>
                  <span className="text-[10px] text-muted">Live Forex</span>
                </div>
                <div className="p-2 rounded bg-surface-2/80 border border-border/60">
                  <Layers className="h-3.5 w-3.5 text-accent mx-auto mb-1" />
                  <span className="font-mono text-xs font-semibold text-text block">14 Cats</span>
                  <span className="text-[10px] text-muted">Auto Sync</span>
                </div>
                <div className="p-2 rounded bg-surface-2/80 border border-border/60">
                  <ShieldCheck className="h-3.5 w-3.5 text-success mx-auto mb-1" />
                  <span className="font-mono text-xs font-semibold text-text block">RLS Safe</span>
                  <span className="text-[10px] text-muted">PostgreSQL</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-surface border border-border/60 flex items-center justify-between text-[11px] font-mono">
                <span className="text-muted">40+ Automated Endpoints</span>
                <span className="text-success font-medium">99.98% Reliability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
                {project.category}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-body text-muted leading-relaxed">
              {project.outcome}
            </p>
          </div>

          {/* Tech Pills (Mono font) */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2.5 py-1 rounded-[6px] bg-surface-2 border border-border text-muted font-medium hover:border-accent/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Quality Badges Row */}
          {project.qualityBadges && (
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted">
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-[6px] bg-surface-2 border border-border">
                <CheckCircle2 className="h-3 w-3 text-success" />
                <span>tests: {project.qualityBadges.tests}</span>
              </span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-[6px] bg-surface-2 border border-border">
                <Shield className="h-3 w-3 text-accent" />
                <span>coverage: {project.qualityBadges.coverage}</span>
              </span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-[6px] bg-surface-2 border border-border">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                <span>CI: {project.qualityBadges.ci}</span>
              </span>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
                  className="font-mono"
                >
                  Live Demo
                </Button>
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<GithubIcon className="h-3.5 w-3.5" />}
                  rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
                  className="font-mono"
                >
                  GitHub
                </Button>
              </a>
            )}

            <Link href={project.links.caseStudy}>
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                className="font-mono text-accent hover:text-accent"
              >
                Case Study
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
