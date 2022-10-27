import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

export default defineNuxtPlugin((Nuxt)=>{
    Nuxt.vueApp.use(autoAnimatePlugin);
});