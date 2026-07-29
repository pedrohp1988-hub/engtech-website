import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071525",
        navy: "#0A2744",
        steel: "#5E7387",
        frost: "#EEF5F8",
        amber: "#F59E0B",
      },
      boxShadow: { lift: "0 24px 70px -30px rgba(7,21,37,.28)" },
    },
  },
  plugins: [],
} satisfies Config;
