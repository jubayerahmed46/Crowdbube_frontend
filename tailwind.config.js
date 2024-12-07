/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px", // min-width: 576px

        md: "850px", // min-width: 850px

        lg: "1040px", // min-width: 1440px
      },
      colors: {
        myPrimary: "#FF5103",
        mySecondery: "#5CB85C",
        myPurtiul: "#F0AD4E",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["sunset", "autumn"],
  },
};
