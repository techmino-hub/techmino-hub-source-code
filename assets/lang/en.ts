import type { LangEntry } from '~/assets/types/lang';

export default {
  common: {
    appName: "Techmino Hub" ,
    nav: {
      home: "Home",
      faq: "FAQ",
      map: "Map",
      signIn: "Sign In",
      settings: "Settings"
    },
    footer: {
      text: `md_**Techmino Hub**  \nCreated with ❤ by [the Techmino community](https://github.com/techmino-hub/techmino-hub-source-code)`,
      lang: "Language"
    }
  },

  home: {
    tabTitle: "Techmino Hub - Home",
    title: "Welcome to Techmino Hub!",
    article: `md_Now recreated in Nuxt.js, Techmino Hub is an unofficial website for Techmino.  
    This page is a work in progress, more things will come soon!`
  },

  lang: {
    tabTitle: "Techmino Hub - Language Settings",
    title: "Choose your preferred language",
    setLang: "Set language"
  },

  settings: {
    tabTitle: "Techmino Hub - Settings",
    title: "Settings",
    loading: "Loading...",
    settings: {
      bgEnabled: "Enable background",
      bgSpeed: "Background animation speed"
    },
    save: "Save",
    noscriptWarn: "You cannot change your settings with JavaScript disabled."
  }
} as LangEntry;