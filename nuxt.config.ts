// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  runtimeConfig: {
  },
  i18n: {
    langDir: "locales",
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: "en.json"
    }, {
      code: 'ru',
      iso: 'ru-RU',
      file: "ru.json"
    },],
    lazy: true,
    defaultLocale: "en",
    detectBrowserLanguage: false,
    strategy: "prefix_except_default",
    vueI18n: "./i18n.config.ts",
  }
})
