export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  tags: string[];
  summary: string;
  toc: { id: string; title: string }[];
  content: {
    sectionId: string;
    sectionTitle: string;
    paragraphs: string[];
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "postgresql-rls-multitenancy",
    title: "Enforcing Multi-Tenant Row Level Security in PostgreSQL & Supabase",
    subtitle:
      "How to eliminate cross-tenant data leakage at the database layer instead of trusting application-level WHERE clauses.",
    date: "Oct 2025",
    readingTime: "6 min read",
    tags: ["PostgreSQL", "Supabase", "Security", "RLS"],
    summary:
      "In multi-tenant web applications, relying solely on ORM filters like `where: { tenantId }` is an accident waiting to happen. Here is how we configured PostgreSQL Row Level Security to mathematically guarantee data isolation.",
    toc: [
      { id: "the-vulnerability", title: "The Hidden Danger of ORM Scoping" },
      { id: "how-rls-works", title: "How Postgres RLS Solves the Problem" },
      { id: "sql-implementation", title: "Configuring Policies in Production" },
      { id: "testing-rls", title: "Verifying Policy Enforcement in Vitest" },
    ],
    content: [
      {
        sectionId: "the-vulnerability",
        sectionTitle: "The Hidden Danger of ORM Scoping",
        paragraphs: [
          "Most developers start multi-tenant SaaS applications by appending `tenantId` to every query. For simple apps, this feels sufficient. However, as the API surface expands beyond 40+ endpoints, a single missed filter in a complex join or batch update instantly exposes sensitive customer records to unauthorized tenants.",
          "When building the JAB LEATHER admin platform, we handled orders, customer sizing profiles, and international shipment records. We could not afford a single developer slip-up exposing one client's orders to another.",
        ],
      },
      {
        sectionId: "how-rls-works",
        sectionTitle: "How Postgres RLS Solves the Problem",
        paragraphs: [
          "PostgreSQL provides Row Level Security (RLS) as a native engine feature. When enabled on a table, Postgres intercepts every query—regardless of whether it originates from an API route, a manual SQL console, or a third-party webhook—and automatically injects the security policy predicate.",
          "If the executing user's JWT does not match the record's `tenant_id`, PostgreSQL behaves as if the row simply does not exist.",
        ],
      },
      {
        sectionId: "sql-implementation",
        sectionTitle: "Configuring Policies in Production",
        paragraphs: [
          "Below is the exact pattern we used to isolate orders and protect admin operations:",
        ],
        codeSnippet: {
          language: "sql",
          caption: "Production PostgreSQL RLS Policy for Tenant Scoping",
          code: `-- 1. Enable RLS on the table
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- 2. Create tenant isolation policy for authenticated users
CREATE POLICY tenant_isolation_policy ON orders
  FOR ALL
  USING (
    tenant_id = (current_setting('request.jwt.claims', true)::json->>'tenant_id')::uuid
    OR 
    (current_setting('request.jwt.claims', true)::json->>'role') = 'super_admin'
  );`,
        },
      },
      {
        sectionId: "testing-rls",
        sectionTitle: "Verifying Policy Enforcement in Vitest",
        paragraphs: [
          "Security policies that aren't continuously tested in CI are merely optimistic assumptions. We wrote automated integration tests simulating an attacker crafting forged queries across boundaries to confirm that PostgreSQL returns empty result sets.",
          "By verifying this at the database level, our frontend and API controllers could remain clean and maintainable without redundant boilerplate checks.",
        ],
      },
    ],
  },
  {
    slug: "currency-engine-precision",
    title: "Preventing Floating-Point Financial Drift in Dual-Currency E-Commerce",
    subtitle:
      "Why storing dollars as integers and executing integer arithmetic is mandatory for USD/PKR payment pipelines.",
    date: "Aug 2025",
    readingTime: "5 min read",
    tags: ["FinTech", "Node.js", "Architecture", "TypeScript"],
    summary:
      "A deep dive into why JavaScript floating point mathematics (`0.1 + 0.2 !== 0.3`) causes catastrophic split-payment and tax reconciliation failures, and how we engineered an integer-only dual-currency engine.",
    toc: [
      { id: "the-float-trap", title: "The Floating-Point IEEE 754 Trap" },
      { id: "integer-units", title: "Smallest Currency Unit Pattern" },
      { id: "forex-caching", title: "Real-Time Exchange Rate Ingestion" },
    ],
    content: [
      {
        sectionId: "the-float-trap",
        sectionTitle: "The Floating-Point IEEE 754 Trap",
        paragraphs: [
          "JavaScript numbers are double-precision 64-bit binary format IEEE 754. In financial transactions involving currency exchange rates, multiplying float rates causes minute fractional rounding errors that accumulate across hundreds of orders.",
          "For JAB LEATHER, international customers purchased in USD while local logistics suppliers reconciled in Pakistani Rupees (PKR). If $450.00 converted to a fractional paisa drift, payment webhook signatures and bank balance sheets failed reconciliation checks.",
        ],
      },
      {
        sectionId: "integer-units",
        sectionTitle: "Smallest Currency Unit Pattern",
        paragraphs: [
          "The solution is straightforward but requires strict discipline: never store or compute money in floats. Always work in the smallest indivisible unit (cents for USD, paisas for PKR).",
        ],
        codeSnippet: {
          language: "typescript",
          caption: "Type-Safe Integer Money Class with Decimal Precision",
          code: `export class Money {
  readonly amountInCents: bigint;
  readonly currency: 'USD' | 'PKR';

  constructor(amountInCents: bigint, currency: 'USD' | 'PKR') {
    this.amountInCents = amountInCents;
    this.currency = currency;
  }

  static fromDecimal(amount: number, currency: 'USD' | 'PKR'): Money {
    // Round to nearest integer cent immediately to eliminate float drift
    const cents = BigInt(Math.round(amount * 100));
    return new Money(cents, currency);
  }

  toDisplayString(): string {
    const units = Number(this.amountInCents) / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: this.currency,
    }).format(units);
  }
}`,
        },
      },
      {
        sectionId: "forex-caching",
        sectionTitle: "Real-Time Exchange Rate Ingestion",
        paragraphs: [
          "We coupled this with a Redis-cached forex feed updating every 30 minutes, locking the exchange rate into the cart session so customers aren't subjected to price fluctuations during checkout.",
        ],
      },
    ],
  },
  {
    slug: "sandboxed-docker-code-execution",
    title: "Hardening Sandboxed Docker Micro-Containers for Untrusted Code Execution",
    subtitle:
      "Restricting memory, CPU limits via cgroups, and blocking network egress for competitive programming LMS platforms.",
    date: "Jun 2025",
    readingTime: "7 min read",
    tags: ["Docker", "Linux", "Systems", "Security"],
    summary:
      "Allowing untrusted users to submit code to your servers is an engineering high-wire act. Here is how we engineered isolated Docker containers with blocked network egress and strict cgroup ceilings.",
    toc: [
      { id: "threat-model", title: "The Threat Model of Untrusted Code" },
      { id: "cgroups-limits", title: "Enforcing Hard Limits with Linux cgroups" },
      { id: "network-isolation", title: "Cutting Off Network Access Completely" },
    ],
    content: [
      {
        sectionId: "threat-model",
        sectionTitle: "The Threat Model of Untrusted Code",
        paragraphs: [
          "When building CodeCraft LMS, our students submitted solutions in Python, C++, and JavaScript. A naive `exec()` call on the host machine invites fork-bombs (`:(){ :|:& };:`), local file system extraction (`cat /etc/passwd`), and outbound DDoS attacks.",
          "We needed sub-second container spinning, execution, and destruction with zero persistence.",
        ],
      },
      {
        sectionId: "cgroups-limits",
        sectionTitle: "Enforcing Hard Limits with Linux cgroups",
        paragraphs: [
          "We used lightweight Alpine micro-containers spawned on demand via the Docker Engine API. Every container was capped at 256MB of RAM and 1 CPU core with a 5-second SIGKILL watchdog.",
        ],
        codeSnippet: {
          language: "bash",
          caption: "Hardened Ephemeral Docker Invocation",
          code: `# Execute untrusted student code in isolated sandbox
docker run --rm \\
  --network none \\
  --memory 256m \\
  --memory-swap 256m \\
  --cpus 1.0 \\
  --pids-limit 64 \\
  --read-only \\
  --volume /tmp/code:/sandbox:ro \\
  sandbox-runner:alpine python3 /sandbox/solution.py`,
        },
      },
      {
        sectionId: "network-isolation",
        sectionTitle: "Cutting Off Network Access Completely",
        paragraphs: [
          "By specifying `--network none`, any attempt by malicious code to download external scripts, connect to command & control servers, or exfiltrate environment secrets fails instantly at the kernel level.",
        ],
      },
    ],
  },
  {
    slug: "playwright-e2e-ci-cd",
    title: "End-to-End Regression Testing with Playwright in GitHub Actions",
    subtitle:
      "Designing zero-flake browser integration suites for multi-step checkout and RBAC user journeys.",
    date: "Apr 2025",
    readingTime: "5 min read",
    tags: ["Testing", "Playwright", "CI/CD", "QA"],
    summary:
      "How we built a comprehensive automated browser testing suite that validates authentication, cart calculations, and payment webhooks on every commit without flaky test runs.",
    toc: [
      { id: "why-playwright", title: "Why Playwright Outperforms Cypress in CI" },
      { id: "test-structure", title: "Page Object Models for Resilient Selectors" },
      { id: "ci-pipeline", title: "Running Headless Tests in GitHub Actions" },
    ],
    content: [
      {
        sectionId: "why-playwright",
        sectionTitle: "Why Playwright Outperforms Cypress in CI",
        paragraphs: [
          "Unit tests prove functions work in isolation, but only end-to-end tests prove the application works for the customer. Playwright offers native multi-tab support, lightning-fast execution, and automatic waiting for elements, virtually eliminating arbitrary `sleep()` calls.",
        ],
      },
      {
        sectionId: "test-structure",
        sectionTitle: "Page Object Models for Resilient Selectors",
        paragraphs: [
          "We structured our tests using Page Object Models, isolating UI locators from test logic so design updates don't break our CI pipeline.",
        ],
        codeSnippet: {
          language: "typescript",
          caption: "Playwright Checkout E2E Journey",
          code: `test('customer completes dual-currency checkout flow', async ({ page }) => {
  const checkout = new CheckoutPage(page);
  
  await checkout.goto();
  await checkout.selectCurrency('USD');
  await checkout.addItemToCart('Handcrafted Leather Jacket');
  await checkout.proceedToPayment();
  
  await expect(page.getByText('USD $450.00')).toBeVisible();
  await checkout.fillShippingAddress(MOCK_SHIPPING_DETAILS);
  await checkout.submitPayment();
  
  await expect(page.getByText('Order Confirmed #ORD-')).toBeVisible();
});`,
        },
      },
      {
        sectionId: "ci-pipeline",
        sectionTitle: "Running Headless Tests in GitHub Actions",
        paragraphs: [
          "Our GitHub Actions workflow spins up a temporary PostgreSQL instance, seeds fixture data, runs the full Playwright matrix across Chromium and Mobile Safari, and uploads video artifacts if a step fails.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
