import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding: "1rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors :{
        primary: {
          DEFAULT: '#000000',
        },
        secondary: {
          dark: '#2e2e2e',
          light: '#3b3a3a',
        },
        text: {
          header: '#ffffff', 
          paragraph: '#999999',
          secondary: '#c1c1c1'
        },
      }
    },
  },
  plugins: [],
};
export default config;
