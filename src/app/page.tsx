import {
  Container,
  Section,
  Button,
  Badge,
  Card,
  Reveal,
  ThemeToggle,
} from "@/components/ui";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function DesignSystemPreviewPage() {
  return (
    <main className="min-h-screen bg-bg text-text transition-colors duration-250">
      {/* Sticky Design System Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="font-heading text-lg font-bold tracking-tight">
              Design System <span className="font-mono text-xs text-muted font-normal">v0.1.0</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="success" dot pulse>
              Phase 0: Design System Ready
            </Badge>
            <ThemeToggle showLabel />
          </div>
        </Container>
      </header>

      {/* Hero Typography & Scale Section */}
      <Section className="border-b border-border">
        <Container>
          <Reveal>
            <div className="space-y-4">
              <Badge variant="accent">
                Tokens & Typography
              </Badge>
              <h1 className="text-hero text-text">
                Clean, intentional design system.
              </h1>
              <p className="text-body text-muted max-w-2xl">
                Dark-first foundations with strict 8pt spacing grid, single violet accent
                (<code className="font-mono text-accent">#6C63FF</code>), and micro-interactions
                built for high-performance developer portfolios.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Component Gallery Section */}
      <Section className="border-b border-border">
        <Container>
          <div className="space-y-12">
            <Reveal>
              <div className="space-y-2">
                <h2 className="text-h2">Primitive Components</h2>
                <p className="text-body text-muted">
                  Interactive atoms built with CSS variables, Tailwind, and Framer Motion.
                </p>
              </div>
            </Reveal>

            {/* Interactive Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal delay={0.05}>
                <Card>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-caption text-muted">Card 01</span>
                      <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-h3">Hover Lift Effect</h3>
                    <p className="text-body text-muted text-sm leading-relaxed">
                      Lifts 4px, brightens the 1px border to <code className="font-mono text-xs text-text">#384259</code>,
                      and applies a soft accent glow shadow within 250ms ease-out.
                    </p>
                  </div>
                </Card>
              </Reveal>

              <Reveal delay={0.1}>
                <Card>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-caption text-muted">Card 02</span>
                      <Sparkles className="h-4 w-4 text-accent" />
                    </div>
                    <h3 className="text-h3">Single Accent</h3>
                    <p className="text-body text-muted text-sm leading-relaxed">
                      Zero color pollution. Single accent <code className="font-mono text-xs text-accent">#6C63FF</code> with
                      soft tint <code className="font-mono text-xs text-muted">rgba(108,99,255,.12)</code> for badges.
                    </p>
                  </div>
                </Card>
              </Reveal>

              <Reveal delay={0.15}>
                <Card>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-caption text-muted">Card 03</span>
                      <CheckCircle2 className="h-4 w-4 text-success" />
                    </div>
                    <h3 className="text-h3">Status & Badges</h3>
                    <p className="text-body text-muted text-sm leading-relaxed">
                      999px pill badges with live pulsing green dot <code className="font-mono text-xs text-success">#34D399</code> for
                      “Open to work” and deployment status.
                    </p>
                  </div>
                </Card>
              </Reveal>
            </div>

            {/* Buttons & Badges Verification Grid */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card interactive={false} className="space-y-6">
                  <div>
                    <h3 className="text-h3 mb-1">Buttons</h3>
                    <p className="text-caption text-muted">Primary & Ghost Variants (200-300ms ease-out)</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="primary" size="sm">Small</Button>
                    <Button variant="primary" disabled>Disabled</Button>
                  </div>
                </Card>

                <Card interactive={false} className="space-y-6">
                  <div>
                    <h3 className="text-h3 mb-1">Badges & Tags</h3>
                    <p className="text-caption text-muted">999px Pills • JetBrains Mono • Caption 13px</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="accent">Next.js 14</Badge>
                    <Badge variant="success" dot pulse>Open to work</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="surface">Tailwind CSS</Badge>
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Typography Spec Overview */}
      <Section>
        <Container>
          <Reveal>
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-3">Typography Scale</Badge>
                <h2 className="text-h2">Strict Typography Hierarchy</h2>
              </div>

              <div className="space-y-6 border-t border-border pt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline border-b border-border/50 pb-4">
                  <span className="font-mono text-caption text-muted">Hero (64px/72px, 40px mob)</span>
                  <div className="md:col-span-3 text-hero">The Quick Brown Fox</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline border-b border-border/50 pb-4">
                  <span className="font-mono text-caption text-muted">H2 (40px/48px)</span>
                  <div className="md:col-span-3 text-h2">Design Systems & Engineering</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline border-b border-border/50 pb-4">
                  <span className="font-mono text-caption text-muted">H3 (24px/32px)</span>
                  <div className="md:col-span-3 text-h3">Component Primitives & Tokens</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline border-b border-border/50 pb-4">
                  <span className="font-mono text-caption text-muted">Body (16px/28px)</span>
                  <div className="md:col-span-3 text-body text-muted">
                    Inter body copy with 28px generous line height for effortless readability across desktop and mobile screens.
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
                  <span className="font-mono text-caption text-muted">Caption (13px/18px)</span>
                  <div className="md:col-span-3 font-mono text-caption text-accent">
                    JetBrains Mono — labels, tech tags, commit SHAs, and micro-copy
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
