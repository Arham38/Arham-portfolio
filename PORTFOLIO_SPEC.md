# Developer Portfolio — Design System Specification

> **Version:** 1.0.0 (Phase 0: Design System)  
> **Architecture:** Next.js 14 (App Router) • TypeScript • Tailwind CSS • Framer Motion  
> **Repository:** [https://github.com/Arham38/Arham-portfolio.git](https://github.com/Arham38/Arham-portfolio.git)

---

## 1. Core Principles & Philosophy

1. **Dark-First Intentionality**:
   - The primary aesthetic is built around deep, high-contrast dark tones that let content, code, and project highlights stand out effortlessly.
   - Light mode is fully supported via clean CSS variable theme swapping without layout shifts or flash of unstyled content.

2. **The "Single Accent" Rule**:
   - **One accent color only (`#6C63FF`)**.
   - Having four disparate accent colors is a classic junior mistake that creates visual noise and degrades brand authority. Every primary action, focal highlight, link, and glow derives strictly from the `#6C63FF` family.

3. **Motion with Purpose**:
   - Every transition operates within **200ms – 300ms** using an `ease-out` timing function (`cubic-bezier(0.16, 1, 0.3, 1)`).
   - Scroll animations fade-up by **16px** once only (`viewport: { once: true }`).
   - Full respect for user accessibility via `prefers-reduced-motion`.
   - **Strict Anti-Patterns Banned**: Zero auto-playing carousels, zero cursor trails, zero full-screen blocking loading screens.

4. **Strict 8pt Layout Grid**:
   - All spatial dimensions, margins, paddings, and component heights adhere to an 8-point numerical scale (8px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 72px, 80px, 96px, 120px).

---

## 2. Color Tokens

All colors are defined as CSS variables under `:root` (dark-first) and selectively overridden for `html.light`.

| CSS Variable | Dark Value | Light Value | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--bg` | `#0B0D12` | `#F8FAFC` | Page background |
| `--surface` | `#12151C` | `#FFFFFF` | Cards & base elevated containers |
| `--surface-2` | `#181C26` | `#F1F5F9` | Hover states, code blocks, nested elements |
| `--border` | `#232938` | `#E2E8F0` | 1px clean crisp boundaries |
| `--border-bright` | `#384259` | `#CBD5E1` | Card hover border highlight |
| `--text` | `#E8EAF0` | `#0F172A` | Primary typography & headings |
| `--muted` | `#8B93A7` | `#64748B` | Secondary body text, captions, subtitles |
| `--accent` | `#6C63FF` | `#6C63FF` | Primary buttons, active links, focal points |
| `--accent-hover` | `#7E77FF` | `#5B52E0` | Button interactive hover state |
| `--accent-soft` | `rgba(108, 99, 255, 0.12)` | `rgba(108, 99, 255, 0.10)` | Badges, tags, subtle card glows |
| `--accent-glow` | `rgba(108, 99, 255, 0.22)` | `rgba(108, 99, 255, 0.18)` | Box-shadow on card hover lift |
| `--success` | `#34D399` | `#10B981` | "Open to work" status dot, live indicators |
| `--success-soft` | `rgba(52, 211, 153, 0.15)` | `rgba(16, 185, 129, 0.15)` | Status badge background |

---

## 3. Typography System

Fonts are loaded and optimized via `next/font/google` and injected as CSS variables into the root layout:

- **Headings**: `Space Grotesk` (`600`, `700`) — `--font-space-grotesk`
- **Body**: `Inter` (`400`, `500`) — `--font-inter`
- **Labels, Tech Tags, Code**: `JetBrains Mono` (`400`, `500`) — `--font-jetbrains-mono`

### Type Scale

| Role | Font Size | Line Height | Weight | Letter Spacing | Font Family |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero (Desktop)** | `64px` | `72px` | `700` Bold | `-0.02em` | Space Grotesk |
| **Hero (Mobile)** | `40px` | `48px` | `700` Bold | `-0.02em` | Space Grotesk |
| **H2** | `40px` | `48px` | `600` SemiBold | `-0.01em` | Space Grotesk |
| **H3** | `24px` | `32px` | `600` SemiBold | `-0.01em` | Space Grotesk |
| **Body** | `16px` | `28px` | `400` Regular / `500` Medium | `normal` | Inter |
| **Caption** | `13px` | `18px` | `500` Medium | `0.02em` | JetBrains Mono |

---

## 4. Layout Rules & Grid

- **Container (`<Container />`)**:
  - Maximum width: `1200px` (`max-w-[1200px] mx-auto`)
  - Side padding (Mobile): `24px` (`px-6`)
  - Side padding (Desktop): `48px` (`md:px-12`)
- **Section (`<Section />`)**:
  - Vertical padding (Desktop): `120px` (`lg:py-[120px]`)
  - Vertical padding (Mobile): `72px` (`py-[72px]`)
- **Corner Radii**:
  - Cards: `12px` (`rounded-[12px]`)
  - Status Pills & Badges: `999px` (`rounded-full`)
  - Small Elements / Inputs: `8px` (`rounded-[8px]`)
- **Card Styling & Elevation**:
  - 1px border (`border border-border`)
  - Flat base appearance (no heavy drop shadows)
  - **Hover Lift State**:
    - Lifts `4px` (`-translate-y-1`)
    - Border brightens from `#232938` to `#384259` (`hover:border-border-bright`)
    - Soft accent glow appears (`box-shadow: 0 12px 32px -4px var(--accent-glow)`)
    - Transition: `250ms ease-out`

---

## 5. Motion Guidelines

- **Duration**: `200ms` to `300ms` (standard: `250ms`).
- **Easing Curve**: `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out, no bouncing or spring jitter).
- **Reveal On Scroll (`<Reveal />`)**:
  - Distance: `16px` Y-axis translation.
  - Trigger: `whileInView`, `viewport: { once: true, margin: "-40px" }`.
  - Stagger capability via `delay` prop (`0.05s`, `0.1s`, etc.).
  - **Reduced Motion Support**: Automatically checks `useReducedMotion()`. If preferred, opacity translates instantaneously with `y: 0` without animation.

---

## 6. Component Primitives Reference

### 1. Container (`src/components/ui/container.tsx`)
```tsx
import { Container } from "@/components/ui";

<Container>
  {/* Content aligned within 1200px and 24px/48px gutters */}
</Container>
```

### 2. Section (`src/components/ui/section.tsx`)
```tsx
import { Section } from "@/components/ui";

<Section id="projects">
  {/* Automatically applies 120px desktop / 72px mobile vertical rhythm */}
</Section>
```

### 3. Button (`src/components/ui/button.tsx`)
```tsx
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

// Primary Variant
<Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
  Get in touch
</Button>

// Ghost Variant
<Button variant="ghost" size="md">
  View Resume
</Button>
```

### 4. Badge (`src/components/ui/badge.tsx`)
```tsx
import { Badge } from "@/components/ui";

// Status Badge with live pulsing dot
<Badge variant="success" dot pulse>
  Open to work
</Badge>

// Tech / Accent Tag
<Badge variant="accent">
  Next.js 14
</Badge>

// Outline / Surface Tag
<Badge variant="outline">
  TypeScript
</Badge>
```

### 5. Card (`src/components/ui/card.tsx`)
```tsx
import { Card } from "@/components/ui";

<Card interactive>
  <h3 className="text-h3">Featured Project</h3>
  <p className="text-body text-muted">Hover to observe 4px lift and accent glow.</p>
</Card>
```

### 6. Reveal (`src/components/ui/reveal.tsx`)
```tsx
import { Reveal } from "@/components/ui";

<Reveal delay={0.1}>
  <Card>Fade-up 16px triggered once on scroll</Card>
</Reveal>
```

### 7. ThemeToggle (`src/components/ui/theme-toggle.tsx`)
```tsx
import { ThemeToggle } from "@/components/ui";

<ThemeToggle showLabel />
```

---

## 7. Shell & Hero Components (Phase 1)

### 1. Navbar (`src/components/navbar/navbar.tsx`)
- **Height**: `72px` sticky header.
- **Surface**: `backdrop-blur-md bg-bg/85` with dynamic bottom border on scroll (`window.scrollY > 20`).
- **Active Indicator**: Animated spring underline (`layoutId="activeNavbarIndicator"`).
- **Mobile Drawer**: Full-screen sheet with `24px` links (`font-heading`), body scroll locking, and quick Resume CTA.

### 2. Hero Section (`src/components/hero/hero.tsx`)
- **Layout**: 55% left column, 45% right column.
- **Recruiter Hooks**:
  - Live status pill: `Open to Internships · Lahore` (pulsing green dot `#34D399`).
  - H1 headline: `Muhammad Arham` (64px desktop / 40px mobile).
  - Value proposition: `I build secure, scalable full-stack web apps with the MERN stack.`
  - CTAs: Primary `View Projects` (scroll to `#projects`) + Ghost `Download CV` (`/resume.pdf`).
  - Social Links: GitHub, LinkedIn, Email with crisp brand icons.

### 3. JAB LEATHER Tilt Preview (`src/components/hero/project-tilt-card.tsx`)
- High-fidelity admin dashboard interface preview (orders, $128.4K revenue metric, 42ms latency, RBAC roles, JWT security).
- 3D perspective mouse tracking tilt (`perspective: 1000px`, `rotateX`, `rotateY`).
- Respects `prefers-reduced-motion` to disable tilt transformation when requested.

### 4. Recruiter Proof Strip
- 4 metrics formatted in `JetBrains Mono`:
  1. `14-category store` (Core Build)
  2. `40+ APIs` (Backend Architecture)
  3. `RBAC + RLS` (Security Standard)
  4. `Jest/Playwright tested` (Automated QA)
- Spaced with subtle borders and dividers.

---

## 8. Selected Work & Case Studies (Phase 2)

### 1. Projects Section (`src/components/projects/projects-section.tsx`)
- **Header**: `Selected Work` with subtitle: *"Real products, real clients, tested and deployed."*
- **Anchor**: Bound to `#projects` with 120px desktop / 72px mobile vertical rhythm.

### 2. Featured Project Card (`src/components/projects/featured-project-card.tsx`)
- **Full-Width Showcase**: JAB LEATHER e-commerce suite.
- **Layout**: Interactive visual storefront preview on the left; outcome, metadata, tech pills (max 5-6), and action links on the right.
- **Hover Micro-Interactions**: Card lifts 4px (`-translate-y-1`), 1px border brightens (`#384259`), and soft accent glow radiates.

### 3. Grid Project Cards (`src/components/projects/project-card.tsx`)
- **Grid Layout**: 2-column grid on desktop (1 column on mobile).
- **Projects**:
  - `CodeCraft LMS`: Sandboxed code execution with Docker & BullMQ.
  - `SME ERP Solution`: Multi-branch inventory & tax invoicing engine.
  - `AuthentixAI`: Deepfake verification pipeline with amber `In Progress` status badge.
- **Content Hierarchy**: Category metadata, title, 2-line outcome, max 5 tech pills in `JetBrains Mono`, and direct links (`Live Demo`, `GitHub`, `Case Study`).

### 4. Case Study Template (`src/app/projects/[slug]/page.tsx`)
- **Static Generation**: Dynamic routing powered by `generateStaticParams()` and per-page SEO metadata (`generateMetadata()`).
- **Structured Sections**:
  1. *Hero*: Category, role, timeline, source code & live preview links, window preview mockup.
  2. *Overview*: Problem → Engineering Solution concise brief.
  3. *Key Metrics Row*: 3–4 quantifiable engineering numbers formatted in JetBrains Mono.
  4. *Architecture Diagram*: Decoupled layers (Client, Backend API, Security/RLS, Database).
  5. *Key Features*: 3–6 feature modules with technical highlights and verification tags.
  6. *Engineering Challenges & Solutions*: 2–3 pairs detailing hurdles, architectural fixes, and quantifiable results.
  7. *Security & QA (The Differentiator)*: RLS Postgres policies, JWT cookie rotations, input sanitization, Vitest unit testing, and Playwright E2E browser flows.
  8. *Tech Stack & Retrospective*: Categorized tech components + *"What I'd Improve Next"* roadmap.
  9. *Next/Prev Navigation*: Two-way interactive links to cycle between all case studies.

---

## 9. Experience, Skills & About (Phase 3)

### 1. Experience Timeline (`src/components/experience/experience-section.tsx`)
- **Vertical Accent Timeline**: Left accent line with responsive node indicators (`#6C63FF` border & glow).
- **Outcome-Led Bullets**:
  - *JAB LEATHER*: Protected customer data with PostgreSQL RLS/RBAC (1,400+ orders), dual-currency USD/PKR pricing engine, 99.98% payment pipeline reliability via Vitest & Playwright.
  - *Education Node*: University of Central Punjab (UCP), BS Software Engineering (BSSE), expected graduation Jul 2027.

### 2. Grouped Skills 3×2 Grid (`src/components/skills/skills-section.tsx`)
- **Structure**: 6 grouped cards: Frontend, Backend, Databases, Security, Testing, Tools.
- **Project-Tagged Pills**: Zero percentage bars. Depth demonstrated through explicit project tags (e.g. `JWT → LMS, ERP`, `PostgreSQL → JAB, LMS`, `RLS → JAB LEATHER`, `Docker → LMS, Authentix`).
- **Typography**: Formatted in `JetBrains Mono` with subtle borders and high contrast.

### 3. About Section (`src/components/about/about-section.tsx`)
- **2-Column Layout**:
  - Left: Square portrait card (`rounded-[16px]`, subtle accent border `#6C63FF`, live status chips, and monogram badge).
  - Right: 3 concise paragraphs (Who you are, What you're good at, What you're looking for).
- **Quick Fact Chips**:
  1. *Location*: Lahore, Pakistan (PKT · UTC+5)
  2. *Education*: BS Software Engineering @ UCP (Jul 2027)
  3. *Availability*: Open to Internships & Roles (Immediate Start)

---

## 10. Next Steps (Phase 4 Roadmap)

1. **Phase 4: Contact & Footer** (Minimalist direct contact mechanism, email copy action, social links, footer, final polish).
