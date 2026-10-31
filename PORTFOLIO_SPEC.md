# Developer Portfolio — Design System Specification

> **Version:** 2.0.0 (Minimal Vercel / Linear Standard Redesign)  
> **Architecture:** Next.js 14 (App Router) • TypeScript • Tailwind CSS  
> **Repository:** [https://github.com/Arham38/Arham-portfolio.git](https://github.com/Arham38/Arham-portfolio.git)

---

## 1. Core Principles & Philosophy

1. **Clean, Restrained, Minimal (Vercel / Linear standard)**:
   - Eliminates all visual clutter, glowing borders, 3D tilt effects, floating badges, and faux terminal dashboards.
   - White / off-white background with crisp 1px borders and subtle border hover states.

2. **The "Single Accent" Rule**:
   - **One accent color only (`#4F46E5`)**.
   - Used strictly for primary action buttons, active focus rings, and direct links. No secondary or tertiary rainbow colors.

3. **Typography Discipline**:
   - **Inter** across all UI text: headings, subtitles, body, buttons, and navigation.
   - **JetBrains Mono** strictly reserved for 12px technical tags and monospaced indicators.
   - Clear scale: Hero 48px/semibold, H2 32px, H3 20px, Body 16px/26px, Tech tags 12px.

4. **Factual Content Integrity**:
   - All portfolio content is derived strictly from `content/resume.md`.
   - Zero invented metrics, revenue counts, uptime numbers, or unlisted technologies.

---

## 2. Color Tokens

| Token | Light Theme | Dark Theme | Role |
| :--- | :--- | :--- | :--- |
| `bg` | `#FFFFFF` | `#0A0A0A` | Page base background |
| `bg-alt` | `#FAFAFA` | `#121212` | Alternating section background |
| `surface` | `#FFFFFF` | `#141414` | Card surface |
| `surface-2` | `#F5F5F5` | `#1A1A1A` | Secondary surface / tag background |
| `border` | `#E5E5E5` | `#262626` | 1px crisp container boundaries |
| `border-hover` | `#A3A3A3` | `#404040` | Card hover state (no glows) |
| `text-primary` | `#0A0A0A` | `#EDEDED` | Main headings and primary text |
| `text-secondary` | `#525252` | `#A1A1A1` | Subtitles and body paragraphs |
| `text-tertiary` | `#737373` | `#737373` | Metadata and helper labels |
| `accent` | `#4F46E5` | `#6366F1` | Primary action and interactive links |
| `success` | `#16A34A` | `#22C55E` | Availability indicator |

---

## 3. Structural Rules & Active Sections

Strictly 7 core sections:
1. **Navbar**: Logo "Arham.", direct links (`Projects`, `Experience`, `Skills`, `Contact`), "Resume" button, minimal light/dark toggle. Sticky with 1px border.
2. **Hero**: Status pill "Open to Internships · Lahore", H1 "Muhammad Arham", subtitle "MERN Stack Developer building secure full-stack web apps.", primary CTA "View Projects", outline CTA "Download CV", social links (GitHub, LinkedIn, Email), clean rounded profile photo.
3. **Projects**: 2-column grid of equal-height cards with screenshot placeholders, title, 2-line outcome, max 5 tech tags (12px Mono), Live / GitHub links.
4. **Experience**: Structured cards for JAB LEATHER and UCP BSSE with authentic outcome-led bullets.
5. **Skills**: 5 straightforward grouped cards (Frontend, Backend, Databases, Security, Testing & Tools) with clean tag lists.
6. **Contact**: 2-column minimal contact section with direct email, phone/WhatsApp, and validated form.
7. **Footer**: Clean copyright and navigation links.

### Explicitly Excluded Features
- Cmd+K command palette
- Floating "Ask AI" chat bubble
- Back-to-top floating button
- Blog / Notes link
- GitHub heatmap section
- Faux dashboard / telemetry widgets
- Flashy animated tilt/glow effects
