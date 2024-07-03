// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],

  runtimeConfig: {
    supabase_url: 'https://fohgyexhzptaxjqrrrfd.supabase.co',
    supabase_anon_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvaGd5ZXhoenB0YXhqcXJycmZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMjQxNTcsImV4cCI6MjAyMDYwMDE1N30.fa7XvwiBbWSe2MLIR6Wkh_OC95uV7UXxt7_25PlyAlc'
  },

  app: {
    head: {
      meta: [
        { name: 'darkreader-lock' }
      ],
      noscript: [{
        children: 
        `<style>
          .hide-noscript {display: none}
          .hide-noscript-important{display: none !important}
        </style>`
      }]
    }
  },

  modules: ['@nuxtjs/i18n'],

  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'id'],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: false
    }
  },

  $production: {
    devtools: { enabled: false }
  },

  $development: {
    devtools: { enabled: true }
  },

  compatibilityDate: '2024-07-03',
})