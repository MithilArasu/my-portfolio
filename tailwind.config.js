/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"DM Serif Display"', 'serif']
      },
      colors: {
        primary: "#0f172a",    // dark navy
        accent: "#6366f1",     // indigo
        light: "#f9fafb"
      }
    },
  },
  plugins: [],
}
