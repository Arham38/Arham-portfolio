import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Tailwind",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node",
      "Express",
      "REST",
      "MVC",
      "middleware",
      "rate limiting",
      "webhooks",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Supabase", "MySQL"],
  },
  {
    title: "Security",
    skills: ["JWT", "RBAC", "bcrypt", "Helmet", "Supabase Auth", "RLS"],
  },
  {
    title: "Testing & Tools",
    skills: [
      "Jest",
      "Supertest",
      "Vitest",
      "Playwright",
      "Postman",
      "Git",
    ],
  },
];

export function SkillsSection() {
  return (
    <Section id="skills" className="border-b border-border">
      <Container>
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-h2 text-text-primary">Skills</h2>
        </div>

        {/* 5 Simple Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-[12px] border border-border bg-surface p-6 space-y-4 hover:border-border-hover transition-colors"
            >
              <h3 className="text-h3 text-text-primary">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="tag">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
