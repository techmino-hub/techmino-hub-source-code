if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY)
{
  throw new Error(
    `Could not find Supabase URL or key in environment variables.
Are you sure you set it up right?
Tip: Check your .env file and refer to the README.
Environment variable keys:
${Object.keys(process.env).join(', ')}`
  );
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY
    }
  },

  app: {
    head: {
      meta: [
        {
          name: 'darkreader-lock',
          content: ''
        },
        {
          name: 'google-site-verification',
          content: process.env.GOOGLE_SITE_VERIFICATION ?? ''
        },
        {
          property: 'og:image',
          content: '/favicon.png'
        },
        {
          property: 'twitter:image',
          content: '/favicon.png'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ],
      noscript: [{
        children:
          `<style>
          .hide-noscript {display: none}
          .hide-noscript-important {display: none !important}
          .invis-noscript {visibility: hidden}
          .invis-noscript-important {visibility: hidden !important}
          :root {
            --no-script: 1;
          }
        </style>`
      }]
    }
  },

  modules: ['@nuxtjs/i18n'],

  i18n: {
    vueI18n: '../i18n.config.ts',
    locales: ['en', 'id'],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: false
    },
  },

  $production: {
    devtools: { enabled: false }
  },

  $development: {
    devtools: { enabled: true }
  },

  compatibilityDate: '2024-07-03',
})
