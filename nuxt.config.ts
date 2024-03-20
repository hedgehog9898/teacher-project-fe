// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["@pinia/nuxt", "@nuxt/test-utils/module", "nuxt-primevue"],
  primevue: {
    components: {
      prefix: 'Prime'
    },
    directives: {
      prefix: 'prime'
    }
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css']
});
