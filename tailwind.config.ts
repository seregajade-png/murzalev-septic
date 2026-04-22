import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Forest Moss palette
        cream: {
          DEFAULT: "#F5F2EC",
          50: "#FAF8F4",
          100: "#F5F2EC",
          200: "#EDE8DE",
        },
        forest: {
          DEFAULT: "#2D4A3A",
          50: "#E8EFEB",
          100: "#C5D4CC",
          200: "#8FA89A",
          500: "#2D4A3A",
          600: "#233B2E",
          700: "#1A2C22",
        },
        moss: {
          DEFAULT: "#7A8B5C",
          100: "#E1E5D4",
          200: "#C4CCA9",
          500: "#7A8B5C",
          600: "#616F49",
        },
        graphite: {
          DEFAULT: "#1F2421",
          500: "#1F2421",
          400: "#4A504B",
          300: "#7A807C",
          200: "#B8BDBA",
        },
        sand: {
          DEFAULT: "#D4C5A9",
          100: "#EFEADF",
          200: "#E2D7BF",
          500: "#D4C5A9",
        },
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.875rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 2.25vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "14px",
        lg: "20px",
        xl: "28px",
        "2xl": "36px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(31, 36, 33, 0.04), 0 1px 3px rgba(31, 36, 33, 0.06)",
        medium: "0 8px 24px rgba(31, 36, 33, 0.08), 0 2px 6px rgba(31, 36, 33, 0.06)",
        elevated: "0 20px 50px rgba(31, 36, 33, 0.10), 0 4px 12px rgba(31, 36, 33, 0.06)",
        focus: "0 0 0 3px rgba(45, 74, 58, 0.25)",
      },
      spacing: {
        section: "clamp(4rem, 8vw, 8rem)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
