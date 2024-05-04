import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        amazonBlue: "#131921",
        amazonBlueLight: "#232F3E",
        amazonYellow: "#FCBD69",
        textColor: "#ccc",
      },
    },
  },
  plugins: [],
};
export default config;
