import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-1930": "1930px", // Applies when width <= 1930px
        "max-1800": "1800px", // Applies when width <= 1800px
        "max-1625": "1625px", // Applies when width <= 1625px
        "max-1400": "1400px", // Applies when width <= 1400px
        "max-1350": "1350px", // Applies when width <= 1350px
        "max-1285": "1285px", // Applies when width <= 1285px
        "max-1257": "1257px", // Applies when width <= 1257px
        "max-1080": "1080px", // Applies when width <= 1080px
        "max-950": "950px",   // Applies when width <= 950px
        "max-802": "802px",   // Applies when width <= 802px
        "max-750": "750px",   // Applies when width <= 750px
        "max-650": "650px",   // Applies when width <= 650px
        "max-550": "550px",   // Applies when width <= 550px
        "max-450": "450px",   // Applies when width <= 450px
        "max-415": "415px",   // Applies when width <= 415px
      },
    },
  },
  plugins: [],

} satisfies Config;
