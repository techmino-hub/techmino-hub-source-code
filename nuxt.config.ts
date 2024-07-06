if(!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  throw new Error(`
    Could not find Supabase URL or key in environment variables.
    Are you sure you set it up right?
    Tip: Check your .env file and refer to the README.`);
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],

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