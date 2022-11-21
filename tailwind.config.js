/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comic Neue"],
        mono: ["Fira Mono"]
      },
      colors: {
        highlight: "#3b82f6",
      },
      screens: {
        xs: "380",
      },
    },
  },
  plugins: [],
}
