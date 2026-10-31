import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ExperienceSection() {
  return (
    <Section id="experience" className="border-b border-border bg-bg-alt">
      <Container>
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-h2 text-text-primary">Experience</h2>
        </div>

        <div className="space-y-8">
          {/* Experience Item: JAB LEATHER */}
          <div className="rounded-[12px] border border-border bg-surface p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-4">
              <div>
                <h3 className="text-h3 text-text-primary">
                  Freelance Full Stack Developer
                </h3>
                <span className="font-sans text-sm text-accent font-medium">
                  JAB LEATHER
                </span>
              </div>
              <span className="font-sans text-xs text-text-tertiary">
                Apr 2025 – Present
              </span>
            </div>

            <ul className="space-y-2.5 text-body text-sm list-disc list-inside">
              <li>
                Built e-commerce platform with 14-category catalog, variants, cart, wishlist, checkout, and USD/PKR currency engine.
              </li>
              <li>
                Engineered Shopify-style admin with KPI dashboard, bulk actions, 8-section product editor with SEO preview, and order management.
              </li>
              <li>
                Implemented Supabase Auth, admin-only RBAC, and PostgreSQL Row-Level Security (RLS).
              </li>
              <li>
                Architected provider-agnostic payment layer with server-side price validation and HMAC webhook verification.
              </li>
              <li>
                Tested end-to-end and unit flows with Vitest and Playwright.
              </li>
            </ul>
          </div>

          {/* Education Item: UCP */}
          <div className="rounded-[12px] border border-border bg-surface p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-4">
              <div>
                <h3 className="text-h3 text-text-primary">
                  Bachelor of Science in Software Engineering (BSSE)
                </h3>
                <span className="font-sans text-sm text-text-secondary">
                  University of Central Punjab (UCP), Lahore
                </span>
              </div>
              <span className="font-sans text-xs text-text-tertiary">
                Oct 2023 – Expected Jul 2027
              </span>
            </div>

            <p className="text-body text-sm">
              Final-year BSSE student with CGPA 3.13. Focused on full-stack web engineering, database architecture, and secure software development.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
