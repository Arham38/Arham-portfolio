import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
        },
        border: {
          DEFAULT: "var(--border)",
          bright: "var(--border-bright)",
        },
        text: "var(--text)",
        muted: "var(--muted)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          soft: "var(--accent-soft)",
          glow: "var(--accent-glow)",
        },
        success: {
          DEFAULT: "var(--success)",
          soft: "var(--success-soft)",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        card: "12px",
        pill: "9999px",
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        "72": "72px",
        "120": "120px",
      },
      transitionDuration: {
        "250": "250ms",
      },
      boxShadow: {
        "card-glow": "0 12px 32px -4px var(--accent-glow)",
      },
    },
  },
  plugins: [],
};

export default config;
