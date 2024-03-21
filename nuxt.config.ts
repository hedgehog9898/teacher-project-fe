// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiHost: process.env.API_HOST
    }
  },
  ssr: false,
  nitro: {
    devProxy: {
      'http://localhost:5000/api': {
        target: 'http://localhost:5000/api',
        changeOrigin: true
      }
    }
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["@pinia/nuxt", "@nuxt/test-utils/module", "nuxt-primevue", "nuxt-security"],
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
