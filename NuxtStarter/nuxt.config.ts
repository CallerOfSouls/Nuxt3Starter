

export default defineNuxtConfig({
  css: ["~/assets/css/style.css"],
  modules:["@pinia/nuxt",["@storyblok/nuxt", {
    
      accessToken: "<your-access-token>",

      apiOptions: {region:"us"}, // storyblok-js-client options
     
    
  }],],
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