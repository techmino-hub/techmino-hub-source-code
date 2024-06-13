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
      text: `md_**Techmino Hub**  
        Created with ❤ by [the Techmino community](https://github.com/techmino-hub/techmino-hub-source-code)`,
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
  },

  faq: {
    tabTitle: "Techmino Hub - FAQ",
    title: "FAQ",
    entries: {
      // TODO
    },
    preTags: "Tags: ",
    tags: {
      techmino: "Techmino",
      galaxy: "Tech. Galaxy",
      linux: "Linux",
      apple: "Apple",
      multiplayer: "Multiplayer",
      error: "Errors/Crashes",
      bot: "Bot (ColdClear)"
    },
    note: `md_**Note**  
    The questions in the FAQ are originally sourced from [Techmino's official Discord server](https://discord.gg/f9pUvkh).  
    They may have been modified for clarity and localization purposes, and may not quote the original message verbatim.  
    Although we strive for accuracy, some information in the FAQ may be out-of-date.  
    If you spot an inaccuracy, please report it on [GitHub issues](https://github.com/techmino-hub/techmino-hub-source-code/issues/new) or on [Techmino's official Discord server](https://discord.gg/f9pUvkh).`
  },
} as LangEntry;