

export default defineNuxtConfig({
  css: ["~/assets/css/style.css"],
  module:["@pinia/nuxt",["@storyblok.nuxt",{ accessToken: '<your key here>',region:"us" }],],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});