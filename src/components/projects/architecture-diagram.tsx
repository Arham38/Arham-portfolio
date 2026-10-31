"use client";

import React from "react";
import { Server, Database, Shield, Layout, ArrowRight } from "lucide-react";

interface Layer {
  name: string;
  tech: string;
  details: string;
}

export function ArchitectureDiagram({
  title,
  description,
  layers,
}: {
  title: string;
  description: string;
  layers: Layer[];
}) {
  const layerIcons = [
    <Layout key="client" className="h-4 w-4 text-accent" />,
    <Server key="api" className="h-4 w-4 text-accent" />,
    <Database key="db" className="h-4 w-4 text-accent" />,
    <Shield key="sec" className="h-4 w-4 text-success" />,
  ];

  return (
    <div className="rounded-[14px] border border-border bg-surface p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <h4 className="font-heading text-lg font-bold text-text">{title}</h4>
        <p className="text-body text-sm text-muted">{description}</p>
      </div>

      {/* Responsive Layer Flow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {layers.map((layer, index) => (
          <div key={layer.name} className="relative flex flex-col">
            <div className="flex-1 rounded-[10px] border border-border bg-surface-2 p-4 space-y-2 hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted">
                  0{index + 1}
                </span>
                {layerIcons[index % layerIcons.length]}
              </div>

              <div className="font-heading font-semibold text-sm text-text">
                {layer.name}
              </div>

              <div className="font-mono text-xs text-accent">
                {layer.tech}
              </div>

              <p className="text-xs text-muted leading-relaxed">
                {layer.details}
              </p>
            </div>

            {index < layers.length - 1 && (
              <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-muted">
                <ArrowRight className="h-4 w-4 text-border group-hover:text-accent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Architecture Footnote */}
      <div className="flex items-center gap-2 pt-2 border-t border-border/50 text-xs font-mono text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-success" />
        <span>Strict boundary isolation with end-to-end typed contract enforcement</span>
      </div>
    </div>
  );
}
