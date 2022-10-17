module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./storyblok/**/*.{vue,js,ts}"
  ],
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};