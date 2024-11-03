export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // 'shadcn-nuxt',
    '@nuxt/devtools',
    // '@nuxt/eslint',
  ],

  css: ['~/assets/css/main.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-04-03',

  runtimeConfig: {
    APP_NAME: process.env.APP_NAME,
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_URL,
      API_URL_ROOT: process.env.NUXT_PUBLIC_API_URL_ROOT,
      CENTRIFUGO_WEBSOCKET: process.env.CENTRIFUGO_WEBSOCKET,
      API_DIAGNOSES: process.env.NUXT_PUBLIC_API_DIAGNOSES,
    },
  },

  piniaPersistedstate: {
    storage: 'localStorage',
  },

  devtools: {
    timeline: {
      enabled: true,
    },
    enabled: true,
  },
});
