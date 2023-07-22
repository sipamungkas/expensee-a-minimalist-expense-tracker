import en from "./locales/en.json";
import id from "./locales/id.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxt/image", "@pinia/nuxt"],
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
    strategy: "prefix_and_default",
    vueI18n: "./I18n.config.ts",
  },
  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
});
