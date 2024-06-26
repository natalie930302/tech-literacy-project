import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
      alpha: "lower-alpha",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        notoSansTC: ["Noto Sans TC"],
      },
      colors: {
        primary: {
          700: "#ffa507",
          600: "#ffb70b",
          500: "#ffce2d",
          100: "#ffedb4",
          50: "#fff9e2",
        },
        secondary: {
          600: "#2f80ed",
          500: "#2e90fc",
          100: "#bcdcff",
          50: "#e3f1ff",
        },
      },
      container: {
        padding: {
          sm: "1rem",
          DEFAULT: "1rem",
          lg: "3rem",
          xl: "5rem",
          "2xl": "7rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
