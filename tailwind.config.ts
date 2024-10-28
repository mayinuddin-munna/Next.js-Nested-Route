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
        primary: "#ef4a23", // Flame Yellow
        secondary: "#3749bb", // Violet Blue
        black: "#081621", // Chinese Black
        snow: "#081621", // Anti-Flash White
        gray: "#666666", // Granite Gray
        purple: "#6E2594", // Rebecca Purple
        white: "#ffffff", // white
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
