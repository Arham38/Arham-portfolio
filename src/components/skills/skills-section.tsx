"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import {
  Layout,
  Server,
  Database,
  Shield,
  CheckCircle,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SKILL_GROUPS, type SkillGroup } from "@/content/skills";

function getGroupIcon(iconName: SkillGroup["iconName"]) {
  const props = { className: "h-5 w-5 text-accent" };
  switch (iconName) {
    case "layout":
      return <Layout {...props} />;
    case "server":
      return <Server {...props} />;
    case "database":
      return <Database {...props} />;
    case "shield":
      return <Shield {...props} className="h-5 w-5 text-success" />;
    case "check-circle":
      return <CheckCircle {...props} className="h-5 w-5 text-accent" />;
    case "wrench":
      return <Wrench {...props} />;
    default:
      return <Server {...props} />;
  }
}

export function SkillsSection() {
  return (
    <Section id="skills" className="border-t border-border/60">
      <Container>
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <Reveal delay={0.05}>
            <Badge variant="accent">Technical Arsenal</Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-h2 tracking-tight">Core Competencies</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-body text-muted max-w-2xl leading-relaxed">
              Demonstrated proficiency grounded in shipped production code. Tagged directly to the architectures and projects where they were battle-tested.
            </p>
          </Reveal>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <Reveal key={group.id} delay={0.05 + idx * 0.05} className="h-full flex">
              <Card className="flex flex-col justify-between w-full space-y-6">
                <div className="space-y-4">
                  {/* Card Title & Icon */}
                  <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-surface-2 border border-border">
                      {getGroupIcon(group.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-text">
                        {group.title}
                      </h3>
                      <span className="font-mono text-[11px] text-muted block">
                        {group.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Short Role Description */}
                  <p className="text-xs text-muted leading-relaxed">
                    {group.description}
                  </p>

                  {/* Tagged Skill Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/pill inline-flex items-center gap-1.5 rounded-[8px] bg-surface-2 border border-border/80 px-2.5 py-1 text-xs font-mono transition-all duration-200 hover:border-accent/40 hover:bg-surface"
                      >
                        <span className="font-medium text-text">
                          {skill.name}
                        </span>

                        {skill.projectTag && (
                          <span className="flex items-center text-[10px] text-accent/80 font-normal border-l border-border/80 pl-1.5 ml-0.5">
                            <ArrowRight className="h-2.5 w-2.5 mr-0.5 text-accent/60" />
                            {skill.projectTag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle footnote */}
                <div className="pt-3 border-t border-border/40 font-mono text-[11px] text-muted/80 flex items-center justify-between">
                  <span>Verified in production</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
