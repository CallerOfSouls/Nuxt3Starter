

export default defineNuxtConfig({
  css: ["~/assets/css/style.css"],
  modules:["@pinia/nuxt",["@storyblok/nuxt",{
    
    accessToken: "GobAv5p1dtNSl3Vc9yEBfgtt",

    apiOptions: {region:"us"}, // storyblok-js-client options
   
  
}] ,],

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