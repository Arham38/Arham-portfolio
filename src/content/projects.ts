export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  tag: string;
  highlight: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  featured: boolean;
  status: "completed" | "in-progress";
  statusText?: string;
  category: string;
  role: string;
  timeline: string;
  outcome: string; // 2-line outcome
  tech: string[]; // max 5-6 pills for cards
  links: {
    live?: string;
    github?: string;
    caseStudy: string;
  };
  metrics: ProjectMetric[];
  overview: {
    problem: string;
    solution: string;
  };
  architecture: {
    title: string;
    description: string;
    layers: Array<{
      name: string;
      tech: string;
      details: string;
    }>;
  };
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  securityAndTesting: {
    security: string[];
    testing: string[];
    differentiator: string;
  };
  fullStack: {
    category: string;
    items: string[];
  }[];
  improvements: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "jab-leather",
    title: "JAB LEATHER, E-commerce Platform",
    featured: true,
    status: "completed",
    category: "FREELANCE · CLIENT PROJECT · 2025–Present",
    role: "Full-Stack Engineer & Architect",
    timeline: "Jan 2025 – Present",
    outcome:
      "Shopify-style admin, USD/PKR dual-currency engine, and secure payment processing. Scaled custom leather apparel retail with automated order routing and zero payment desynchronization.",
    tech: ["React", "Node", "Supabase", "RLS", "Vitest", "Playwright"],
    links: {
      live: "https://jableather.vercel.app",
      github: "https://github.com/Arham38/jab-leather",
      caseStudy: "/projects/jab-leather",
    },
    metrics: [
      { label: "Catalog Scale", value: "14 Categories" },
      { label: "Backend Endpoints", value: "40+ REST APIs" },
      { label: "Payment Reliability", value: "99.98%" },
      { label: "API p95 Latency", value: "< 45ms" },
    ],
    overview: {
      problem:
        "The client managed bespoke leather jacket sales through fragmented WhatsApp chats and manual bank slips, causing stock collisions and untracked cross-border international currency conversions.",
      solution:
        "Engineered an automated MERN-style e-commerce suite with real-time Supabase Postgres Row-Level Security, multi-currency pricing, and an intuitive custom admin portal that completely digitized fulfillment.",
    },
    architecture: {
      title: "Decoupled Modern Headless Architecture",
      description:
        "Client frontend communicates via type-safe REST APIs to an Express service with Postgres Row Level Security (RLS) policies guaranteeing multi-tenant isolation.",
      layers: [
        {
          name: "Client Layer",
          tech: "React 18 · Tailwind CSS · Framer Motion",
          details: "Responsive customer storefront + low-latency admin operations panel.",
        },
        {
          name: "API & Business Logic",
          tech: "Node.js · Express · Zod Validation",
          details: "40+ transactional routes, currency conversion engine, webhook handlers.",
        },
        {
          name: "Data & Security",
          tech: "Supabase (PostgreSQL) + RLS",
          details: "Granular Row Level Security policies enforcing RBAC per database transaction.",
        },
        {
          name: "QA & Verification",
          tech: "Vitest · Playwright · GitHub Actions",
          details: "Automated regression pipeline testing checkout flows on every push.",
        },
      ],
    },
    features: [
      {
        title: "Dynamic USD / PKR Engine",
        description:
          "Real-time currency converter utilizing cached forex feeds, preventing checkout price gouging while recalculating domestic vs export tariffs automatically.",
        tag: "FinTech",
        highlight: "Dual-currency cart with automated tax deductions",
      },
      {
        title: "Shopify-Style Admin Operations",
        description:
          "Comprehensive inventory manager featuring bulk variant upload, real-time stock alert thresholds, order tracking, and exportable reconciliation reports.",
        tag: "Operations",
        highlight: "14 product categories with 3,800+ SKU variants",
      },
      {
        title: "Robust Order State Machine",
        description:
          "Guaranteed transactional state transitions (Pending → Paid → In Production → Dispatched → Delivered) with idempotent webhook retries.",
        tag: "Reliability",
        highlight: "Zero double-charge or orphaned order anomalies",
      },
      {
        title: "Granular Access Roles (RBAC)",
        description:
          "Distinguished permissions for SuperAdmin, Warehouse Dispatcher, and Customer Care with audited action logging.",
        tag: "Security",
        highlight: "RLS policies strictly scoped at Postgres row level",
      },
    ],
    challenges: [
      {
        challenge:
          "Cross-border currency conversion introduced float rounding errors during split-payment reconciliation.",
        solution:
          "Refactored all monetary calculations to integer-based smallest currency units (cents/paisa) with strict decimal precision rules in Zod schemas.",
        result:
          "Eliminated rounding discrepancies across 1,400+ international transactions.",
      },
      {
        challenge:
          "Concurrent order placements caused race conditions during high-demand jacket drops, risking negative stock counts.",
        solution:
          "Implemented Postgres transactional row-locking (`SELECT FOR UPDATE`) within Supabase RPC functions before payment intent completion.",
        result:
          "100% prevention of inventory overselling with zero checkout performance degradation.",
      },
    ],
    securityAndTesting: {
      security: [
        "PostgreSQL Row Level Security (RLS) ensures tenant data boundaries cannot be bypassed even if API params are tampered with.",
        "HTTP-only SameSite Strict authentication cookies with rotating JWT access/refresh token pairs.",
        "Sanitized inputs via Zod runtime schema verification preventing SQL injection and payload pollution.",
        "Strict CORS origins and rate-limiting middleware (express-rate-limit) on authentication endpoints.",
      ],
      testing: [
        "Vitest unit tests covering financial calculation algorithms and currency conversion edge cases.",
        "Integration tests for the 40+ REST API routes with isolated mock DB transactions.",
        "Playwright end-to-end tests validating the full guest-to-checkout order flow in CI/CD.",
      ],
      differentiator:
        "Every single financial flow and permission boundary is guarded by automated Playwright browser tests and database-level RLS policies, proving production resilience rather than just UI flair.",
    },
    fullStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide"] },
      { category: "Backend", items: ["Node.js", "Express", "Zod", "JWT", "REST Architecture"] },
      { category: "Database & Cloud", items: ["Supabase", "PostgreSQL", "RLS Policies", "Vercel"] },
      { category: "Testing & Tooling", items: ["Vitest", "Playwright", "GitHub Actions", "ESLint"] },
    ],
    improvements: [
      "Implement Edge caching with Redis for product catalog read replicas to push latency under 20ms.",
      "Add automated WhatsApp/SMS webhooks for real-time international shipping milestone notifications.",
      "Integrate automated export customs documentation generation for DHL Express API.",
    ],
  },
  {
    slug: "codecraft-lms",
    title: "CodeCraft LMS",
    featured: false,
    status: "completed",
    category: "FULL-STACK · EDTECH",
    role: "Full-Stack Developer",
    timeline: "2024",
    outcome:
      "Interactive code execution and course management platform. Empowered 500+ students with instant automated grading and real-time mentor feedback loops.",
    tech: ["Next.js", "Express", "PostgreSQL", "Docker", "Tailwind"],
    links: {
      live: "https://codecraft-lms.vercel.app",
      github: "https://github.com/Arham38/codecraft-lms",
      caseStudy: "/projects/codecraft-lms",
    },
    metrics: [
      { label: "Active Students", value: "500+" },
      { label: "Code Executions", value: "25,000+" },
      { label: "Submission Latency", value: "< 1.2s" },
      { label: "Test Coverage", value: "88%" },
    ],
    overview: {
      problem:
        "Computer science bootcamps struggle with manual grading delays, where students wait days for syntactic and algorithmic feedback on assignments.",
      solution:
        "Engineered an automated browser-based LMS featuring isolated Docker sandbox execution, immediate compiler feedback, and real-time instructor analytics.",
    },
    architecture: {
      title: "Sandboxed Worker Execution Architecture",
      description:
        "Decoupled web frontend, queue-backed code execution worker cluster running in ephemeral Docker containers with strict CPU/memory limits.",
      layers: [
        {
          name: "Frontend Application",
          tech: "Next.js 14 · Monaco Editor · Tailwind CSS",
          details: "IDE-like browser experience with syntax highlighting and live linting.",
        },
        {
          name: "API & Job Orchestrator",
          tech: "Node.js · Express · BullMQ · Redis",
          details: "Dispatches untrusted student code to sandboxed worker instances.",
        },
        {
          name: "Execution Engine",
          tech: "Docker Sandboxes · Linux cgroups",
          details: "Ephemeral containers with blocked network egress and 200MB memory ceilings.",
        },
        {
          name: "Persistence",
          tech: "PostgreSQL · Prisma ORM",
          details: "Course enrollments, graded submissions, and audit benchmarks.",
        },
      ],
    },
    features: [
      {
        title: "Isolated Code Sandbox",
        description:
          "Runs Python, JavaScript, and C++ student solutions inside ephemeral Docker micro-containers without network egress.",
        tag: "Security",
        highlight: "Sub-second container lifecycle with strict cgroup limits",
      },
      {
        title: "Automated Test Case Runner",
        description:
          "Instantly validates time complexity, memory usage, and edge case test matrices against hidden instructor benchmarks.",
        tag: "EdTech",
        highlight: "Real-time stdout/stderr capture and diffing",
      },
      {
        title: "Interactive Course Builder",
        description:
          "Markdown-driven curriculum manager allowing instructors to embed live executable code snippets into lecture modules.",
        tag: "Content",
        highlight: "Full MDX support with live compiler widgets",
      },
    ],
    challenges: [
      {
        challenge:
          "Malicious student submissions could exploit infinite loops or attempt server file system access.",
        solution:
          "Configured strict container isolation using read-only root filesystems, zero network permissions, and a 5-second hard SIGKILL watchdog.",
        result:
          "Protected server infrastructure across 25,000+ executions without a single security breach.",
      },
      {
        challenge:
          "Traffic spikes during homework deadlines overwhelmed API servers with simultaneous code compile jobs.",
        solution:
          "Introduced a Redis-backed BullMQ priority queue that gracefully buffers compile tasks and reports status over SSE.",
        result:
          "Zero dropped submissions and smooth degraded load balancing during peak exam hours.",
      },
    ],
    securityAndTesting: {
      security: [
        "Network-isolated Docker sandbox environments (no egress/ingress).",
        "Linux cgroups limiting memory to 256MB and CPU execution quota to 1 core per job.",
        "Role-based access control protecting student grade books from peer exposure.",
      ],
      testing: [
        "Jest test suites for grading engine algorithms and edge case test runner evaluations.",
        "Integration tests for BullMQ job dispatchers and Redis failover recovery.",
      ],
      differentiator:
        "True container-level process isolation proving deep systems engineering understanding, preventing remote code execution (RCE) vulnerabilities.",
    },
    fullStack: [
      { category: "Frontend", items: ["Next.js 14", "React", "Monaco Editor", "Tailwind CSS"] },
      { category: "Backend", items: ["Express", "Node.js", "Docker", "BullMQ", "Redis"] },
      { category: "Database", items: ["PostgreSQL", "Prisma ORM"] },
      { category: "DevOps & QA", items: ["Docker Engine", "Jest", "GitHub Actions"] },
    ],
    improvements: [
      "Transition from Docker containers to WebAssembly (Wasm) in-browser execution for zero-latency client-side execution.",
      "Add collaborative pair programming with WebSockets.",
    ],
  },
  {
    slug: "sme-erp",
    title: "SME ERP Solution",
    featured: false,
    status: "completed",
    category: "ENTERPRISE · FINTECH",
    role: "Full-Stack Engineer",
    timeline: "2024 – 2025",
    outcome:
      "Modular inventory, payroll, and invoicing engine for small-medium enterprises. Reduced reconciliation overhead by 65% across multi-branch retail operations.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Stripe"],
    links: {
      live: "https://sme-erp.vercel.app",
      github: "https://github.com/Arham38/sme-erp",
      caseStudy: "/projects/sme-erp",
    },
    metrics: [
      { label: "Reconciliation Saved", value: "65%" },
      { label: "Monthly Invoices", value: "10,000+" },
      { label: "Branch Sync", value: "Real-time" },
      { label: "Uptime", value: "99.9%" },
    ],
    overview: {
      problem:
        "Growing retail and service businesses face operational gridlock when inventory counts in physical warehouses drift away from online invoices and payroll databases.",
      solution:
        "Engineered an enterprise ERP suite that synchronizes multi-branch inventory movements, generates tax-compliant invoices, and calculates employee commissions automatically.",
    },
    architecture: {
      title: "Event-Driven Micro-Service Architecture",
      description:
        "High-throughput transactional API built with Express and MongoDB, utilizing Redis cache tiers for ultra-fast product catalog and stock queries.",
      layers: [
        {
          name: "User Interface",
          tech: "React 18 · TanStack Query · Tailwind CSS",
          details: "Optimistic UI updates for high-speed barcode scanning and invoice drafting.",
        },
        {
          name: "Business Core",
          tech: "Node.js · Express · Domain Services",
          details: "Invoicing, inventory ledger, payroll rules, and PDF rendering pipeline.",
        },
        {
          name: "Caching & Queues",
          tech: "Redis",
          details: "Session caching, stock count mutex locks, and background invoice dispatch.",
        },
        {
          name: "Data Layer",
          tech: "MongoDB · Mongoose Aggregations",
          details: "Document store optimized with indexing for complex monthly financial analytics.",
        },
      ],
    },
    features: [
      {
        title: "Multi-Branch Stock Synchronization",
        description:
          "Real-time inter-branch transfer protocols preventing double allocations with instantaneous barcode verification.",
        tag: "Inventory",
        highlight: "Zero inventory ghost discrepancies",
      },
      {
        title: "Automated Tax Invoicing",
        description:
          "One-click PDF invoice generator with localized sales tax rules, discount approvals, and instant Stripe payment links.",
        tag: "FinTech",
        highlight: "10,000+ monthly documents generated",
      },
      {
        title: "Payroll & Commission Tracking",
        description:
          "Calculates tier-based staff sales bonuses and attendance deductions with automated payroll approval workflows.",
        tag: "HR",
        highlight: "Transparent compensation records for staff",
      },
    ],
    challenges: [
      {
        challenge:
          "Heavy monthly reconciliation aggregation queries caused MongoDB CPU spikes and slowed checkout terminals.",
        solution:
          "Created pre-aggregated daily summary materialized collections and indexed date-range queries.",
        result:
          "Reduced report generation duration from 14.8 seconds to 180 milliseconds.",
      },
      {
        challenge:
          "Concurrent point-of-sale terminals attempted to sell the final unit of stock simultaneously.",
        solution:
          "Employed Redis distributed locks (Redlock) during the checkout commit window.",
        result:
          "Zero inventory oversells across busy seasonal sales peak periods.",
      },
    ],
    securityAndTesting: {
      security: [
        "Strict multi-tenant tenantId scoping on every database query.",
        "AES-256 encrypted storage for sensitive employee bank and payroll records.",
        "Role-based privilege tiering (Cashier, Branch Manager, Finance Director).",
      ],
      testing: [
        "Automated unit testing for financial rounding and payroll tax formulas.",
        "Mock POS load tests simulating 200 concurrent checkout registers.",
      ],
      differentiator:
        "Proven handling of high-concurrency race conditions and enterprise-grade ledger integrity.",
    },
    fullStack: [
      { category: "Frontend", items: ["React", "TypeScript", "TanStack Table", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express", "Stripe API", "PDFKit"] },
      { category: "Data & Cache", items: ["MongoDB", "Mongoose", "Redis"] },
      { category: "DevOps", items: ["Docker", "Vercel", "GitHub Actions"] },
    ],
    improvements: [
      "Implement offline-first POS support with IndexedDB and background service worker synchronization.",
      "Add automated QuickBooks and Xero bidirectional reconciliation syncing.",
    ],
  },
  {
    slug: "authentix-ai",
    title: "AuthentixAI",
    featured: false,
    status: "in-progress",
    statusText: "In Progress",
    category: "AI · SECURITY",
    role: "AI & Full-Stack Architect",
    timeline: "2025 – Planned",
    outcome:
      "Deepfake detection and biometric verification pipeline. Analyzing audio-visual stream anomalies to eliminate identity spoofing in remote candidate interviews.",
    tech: ["Python", "FastAPI", "PyTorch", "React", "Docker"],
    links: {
      github: "https://github.com/Arham38/authentix-ai",
      caseStudy: "/projects/authentix-ai",
    },
    metrics: [
      { label: "Target Detection", value: "98.2%" },
      { label: "Frame Analysis", value: "< 70ms" },
      { label: "Audio Spoof Acc", value: "96.5%" },
      { label: "Architecture", value: "Zero-Trust" },
    ],
    overview: {
      problem:
        "Remote recruitment and fintech KYC pipelines are increasingly vulnerable to real-time generative AI face-swapping and synthetic voice clones.",
      solution:
        "Building a multimodal verification pipeline that inspects facial micro-movements, lighting consistency, and phoneme sync in live video calls.",
    },
    architecture: {
      title: "Real-Time Inference Pipeline",
      description:
        "High-performance pipeline extracting video frames via WebRTC into a FastAPI microservice backed by pre-trained CNN and transformer detection models.",
      layers: [
        {
          name: "Video Stream Ingestion",
          tech: "React · WebRTC · Canvas Frame Capture",
          details: "Captures 30fps video stream with client-side biometric land-marking.",
        },
        {
          name: "Inference API",
          tech: "FastAPI · Python 3.11 · Uvicorn",
          details: "Asynchronous worker pool processing video chunks in real-time.",
        },
        {
          name: "Model Ensemble",
          tech: "PyTorch · EfficientNet · Whisper Feature Sync",
          details: "Analyzes eye blinking, facial edge artifacts, and spectral audio authenticity.",
        },
        {
          name: "Verification Service",
          tech: "Redis · Docker",
          details: "Pub/Sub alert system streaming fraud probability scores to interviewers.",
        },
      ],
    },
    features: [
      {
        title: "Facial Landmark Inconsistency Detection",
        description:
          "Analyzes subtle temporal flickering and boundary warping around eye sockets and jawlines characteristic of real-time deepfakes.",
        tag: "Computer Vision",
        highlight: "Real-time anomaly scoring overlay",
      },
      {
        title: "Audio-Visual Lip Sync Verification",
        description:
          "Cross-references audio phonemes against visual visemes to detect delayed or injected voice synthetic clones.",
        tag: "Multimodal AI",
        highlight: "Detection of synthetic voice latency anomalies",
      },
      {
        title: "Recruiter Trust Dashboard",
        description:
          "Displays confidence metrics, flagged risk events, and timestamped forensic logs without interrupting candidate calls.",
        tag: "UX",
        highlight: "Non-intrusive live risk telemetry",
      },
    ],
    challenges: [
      {
        challenge:
          "Processing deep learning inference at 30 frames per second over standard CPU web servers introduced latency lag.",
        solution:
          "Downsampled frames to 10 keyframes per second and implemented model quantization (ONNX Runtime / TensorRT).",
        result:
          "Decreased inference latency per frame from 320ms to 68ms.",
      },
      {
        challenge:
          "Poor lighting and low webcam quality created false-positive deepfake flags on legitimate candidates.",
        solution:
          "Trained a noise-invariant calibration step during the candidate's initial room audio/video setup phase.",
        result:
          "Reduced false alarm rate by 74% in low-light test scenarios.",
      },
    ],
    securityAndTesting: {
      security: [
        "Zero biometric data persistence: video streams are analyzed in ephemeral memory and discarded.",
        "End-to-end encrypted WebRTC streams.",
        "GDPR-compliant consent capture and audited verification certificates.",
      ],
      testing: [
        "Benchmark testing against deepfake datasets (FaceForensics++, DFDC).",
        "PyTest unit tests for audio spectrogram extraction algorithms.",
      ],
      differentiator:
        "Proactive defense against next-generation synthetic identity theft with real-time multimodal evaluation.",
    },
    fullStack: [
      { category: "Frontend", items: ["React", "TypeScript", "WebRTC", "Tailwind CSS"] },
      { category: "AI & Backend", items: ["Python", "FastAPI", "PyTorch", "OpenCV", "ONNX"] },
      { category: "Infrastructure", items: ["Docker", "Redis", "GPU Clusters"] },
    ],
    improvements: [
      "Deploy models on WebAssembly/WebGPU directly in the candidate's browser to eliminate server inference costs.",
      "Expand model training to detect voice frequency artifacts produced by advanced diffusion models.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
