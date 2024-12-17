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
        "max-1930": { max: "1930px" }, // Applies when width <= 1930px
        "max-1800": { max: "1800px" }, // Applies when width <= 1800px
        "max-1625": { max: "1625px" }, // Applies when width <= 1800px
        "max-1400": { max: "1400px" }, // Applies when width <= 1400px
        "max-1350": { max: "1350px" },
        "max-1285": { max: "1285px" },
        "max-1257": { max: "1257px" },
        "max-1080": { max: "1080px" }, // Applies when width <= 1080px
        "max-950": { max: "950px" },
        "max-802": { max: "802px" },
        "max-750": { max: "750px" },
        "max-650": { max: "650px" },
        "max-550": { max: "550px" },
        "max-450": { max: "450px" },
        "max-415": { max: "415px" },
      },
    },
  },
  plugins: [],

} satisfies Config;
