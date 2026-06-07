import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          950: "#0D0010",
          900: "#1a0030",
          800: "#2d0052",
          700: "#3d0070",
          600: "#5b00a8",
          500: "#7c3aed",
          400: "#a855f7",
          300: "#c084fc",
          200: "#dda6ff",
          100: "#f3d6ff",
        },
        neon: {
          purple: "#b300ff",
          violet: "#9d00ff",
          electric: "#7b00d4",
          cyan: "#00f5ff",
          pink: "#ff006e",
        },
        cyber: {
          bg: "#0D0010",
          card: "#1a0030",
          border: "#3d0070",
          text: "#e2d9f3",
          muted: "#9d7fc0",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(rgba(139, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 255, 0.1) 1px, transparent 1px)",
        "purple-glow": "radial-gradient(ellipse at center, rgba(123, 0, 212, 0.3) 0%, transparent 70%)",
      },
      backgroundSize: {
        "cyber-grid": "50px 50px",
      },
      boxShadow: {
        "neon-purple": "0 0 20px rgba(179, 0, 255, 0.5), 0 0 40px rgba(179, 0, 255, 0.3), 0 0 80px rgba(179, 0, 255, 0.1)",
        "neon-sm": "0 0 10px rgba(179, 0, 255, 0.4), 0 0 20px rgba(179, 0, 255, 0.2)",
        "neon-lg": "0 0 30px rgba(179, 0, 255, 0.6), 0 0 60px rgba(179, 0, 255, 0.4), 0 0 100px rgba(179, 0, 255, 0.2)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        "card-glow": "0 0 20px rgba(124, 58, 237, 0.2), 0 4px 24px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "matrix-rain": "matrix-rain 20s linear infinite",
        "hologram": "hologram-flicker 4s ease-in-out infinite",
        "orbit": "orbit 20s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(179, 0, 255, 0.5)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 40px rgba(179, 0, 255, 0.8), 0 0 80px rgba(179, 0, 255, 0.4)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "hologram-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "75%": { opacity: "0.95" },
          "87%": { opacity: "0.7" },
          "93%": { opacity: "1" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(150px) rotate(-360deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(179, 0, 255, 0.6))" },
          "50%": { filter: "drop-shadow(0 0 20px rgba(179, 0, 255, 1))" },
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "Courier New", "monospace"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "cyber": "0 8px 0 8px",
      },
    },
  },
  plugins: [],
};

export default config;
