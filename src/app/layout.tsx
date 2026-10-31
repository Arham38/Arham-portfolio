import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0D12" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arham-portfolio.vercel.app"),
  title: {
    default: "Muhammad Arham | Full-Stack MERN Software Engineer",
    template: "%s | Muhammad Arham",
  },
  description:
    "Full-Stack MERN developer specializing in secure, high-concurrency systems, PostgreSQL Row-Level Security (RLS), and automated testing rigor with Vitest & Playwright.",
  keywords: [
    "Muhammad Arham",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js 14",
    "PostgreSQL RLS",
    "TypeScript",
    "Lahore Developer",
    "Software Engineer",
    "Supabase",
  ],
  authors: [{ name: "Muhammad Arham", url: "https://github.com/Arham38" }],
  creator: "Muhammad Arham",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arham-portfolio.vercel.app",
    siteName: "Muhammad Arham Portfolio",
    title: "Muhammad Arham | Full-Stack MERN Software Engineer",
    description:
      "I build secure, scalable full-stack web apps with the MERN stack. Production tested with PostgreSQL RLS, Vitest, and Playwright.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Arham — Full-Stack MERN Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Arham | Full-Stack MERN Software Engineer",
    description:
      "Full-stack MERN engineer building secure, scalable architectures with PostgreSQL RLS & automated test harnesses.",
    images: ["/og-image.png"],
    creator: "@Arham38",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Arham",
  url: "https://arham-portfolio.vercel.app",
  jobTitle: "Full-Stack Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Central Punjab",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/Arham38",
    "https://www.linkedin.com/in/arham-bhatti-b342062a0/",
  ],
  knowsAbout: [
    "Full-Stack Web Development",
    "MERN Stack",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Row Level Security",
    "Supabase",
    "Docker",
    "Vitest",
    "Playwright",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="bg-bg text-text font-sans antialiased selection:bg-accent/20 selection:text-accent min-h-screen">
        {/* Semantic Accessibility: Skip-to-content landmark */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-accent focus:text-white focus:rounded-[10px] focus:font-mono focus:text-xs focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
