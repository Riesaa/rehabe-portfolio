/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#171717",
        accent: "#c2410c",
        cream: "#fff7ed"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23,23,23,.08)"
      }
    }
  },
  plugins: []
}