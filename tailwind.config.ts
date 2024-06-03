import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:
      {
        "primary":"#00868F",
        "secondary":"#00B4D8",
        "third":"#03045E",
        "white":"#EEEEEE",
        "dark":"#262626",
      },
      borderColor: {
        "primary":"#00868F",
        "secondary":"#00B4D8",
        "third":"#03045E",
        "white":"#EEEEEE",
        "black":"#262626",
      },
      fontSize: {
        sm: '0.8rem',
        base: '1.13rem',
        h1: '2.25rem',
        h2: '2rem',
        h3:'1.75rem',
        xl: '1.50rem',
      },
      padding:{
        'button':'0.50rem 2rem'
      },
      lineHeight: {
          '3': '3rem',
      },
    },
  },
  plugins: [],
};

export default config;
