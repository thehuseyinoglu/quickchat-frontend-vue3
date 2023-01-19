/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  purge:["./src/**/*.vue"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
