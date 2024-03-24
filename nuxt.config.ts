import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiHost: process.env.API_HOST,
    },
  },
  ssr: false,
  nitro: {
    devProxy: {
      "/api": {
        target: "http://localhost:5000/api",
        changeOrigin: true,
      },
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify());
      });
    },
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
    "nuxt-security",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
