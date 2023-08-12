// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-headlessui",
  ],
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    vueI18n: "./I18n.config.ts",
  },
  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  plugins: [{ src: "~/plugins/apexcharts.ts", mode: "client" }],
});
