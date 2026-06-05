import type { Config } from "tailwindcss";

/**
 * Brand palette sampled directly from the Verimedix Health logo:
 *   - Deep brand blue : #013BA0  (wordmark "verimedix")
 *   - Teal accent      : #0AB89F  (molecule mark + "HEALTH")
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef3fb",
          100: "#d6e2f5",
          200: "#aec5ec",
          300: "#7fa1df",
          400: "#4a72c9",
          500: "#1f4db0",
          600: "#013BA0", // primary logo blue
          700: "#022f7d",
          800: "#04265f",
          900: "#061d46",
          950: "#03112b",
        },
        teal: {
          50: "#e6faf5",
          100: "#c2f3e8",
          200: "#8ae8d4",
          300: "#4cd7bc",
          400: "#1cc3a4",
          500: "#0AB89F", // logo teal accent
          600: "#079582",
          700: "#0a7568",
          800: "#0c5d54",
          900: "#0d4d46",
        },
        mist: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e6edf4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(3,17,43,0.04), 0 12px 32px -12px rgba(3,17,43,0.12)",
        "card-lg": "0 2px 4px rgba(3,17,43,0.05), 0 28px 60px -20px rgba(3,17,43,0.22)",
        glow: "0 24px 80px -24px rgba(10,184,159,0.45)",
      },
      backgroundImage: {
        "grid-mist":
          "linear-gradient(to right, rgba(1,59,160,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,59,160,0.04) 1px, transparent 1px)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        sheen: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseRing: "pulseRing 2.8s cubic-bezier(0.4,0,0.2,1) infinite",
        sheen: "sheen 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
