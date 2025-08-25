/** @type {import('tailwindcss').Config} */
export default {
  // tailwind.config.js
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths based on your setup
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4fbf8b",
        "primary-dull": "#44ae7c",
      },
    },
  },
  plugins: [],
}
