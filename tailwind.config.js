/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    animation: {
      float: "float 6s ease-in-out infinite",
      fadeIn: "fadeIn 0.8s ease-out forwards",
      spinSlow: "spin 20s linear infinite",
    },
    keyframes: {
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-8px)" },
      },
      fadeIn: {
        "0%": { opacity: 0, transform: "scale(0.95)" },
        "100%": { opacity: 1, transform: "scale(1)" },
      },
    },
  },
},  variants: { 
  },
  plugins: [],
}

