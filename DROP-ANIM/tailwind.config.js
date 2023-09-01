/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      wt: "300px",
      sm: "480px",
      md: "768px",
      sideBar: "900px",
      mdx: "950px",
      lg: "976px",
      xl: "1440px",
      "max-w-xl": "1180px",
    },
    extend: {
      colors: {
        primary: "#2e7d32",
        primary__bright: '#66bb6a',
        white: "#e8f5e9",
        grey: "rgba(255, 255, 255, 0.3)",
        "dark-grey": "#161616",
        transwhite: "rgba(148, 147, 147, 0.35)",
        backdrop: "rgba(0, 0, 0, 0.86)",
      },
    },
  },
  plugins: [],
};
