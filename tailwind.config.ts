import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "momo_red": "#D23B4A", // Customize as per the brand
        "momo_gray": "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
