/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "576px", // min-width: 576px

        md: "850px", // min-width: 850px

        lg: "1070px", // min-width: 1440px
      },
      colors: {
        myPrimary: "#FF5103",
        mySecondery: "#5CB85C",
        myPurtiul: "#F0AD4E",
        sunset: "#121C22",
        winter: "#FFFFFF",
        dark: "#9CB6CD",
        light: "#454a4d",
      },
    },
  },
  plugins: [require("daisyui")],
};
