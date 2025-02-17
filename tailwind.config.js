/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#3674B5",
        background: "#D1F8EF",
        primary: "#578FCA", 
        secondary: "#A1E3F9",
        accent: "#191919",
      },
    },
  },
  plugins: [],
};
