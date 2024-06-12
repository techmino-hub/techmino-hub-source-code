import type { LangEntry } from '~/assets/types/lang';

export default {
  common: {
    appName: "Techmino Hub" ,
    nav: {
      home: "Beranda",
      faq: "FAQ",
      map: "Peta",
      signIn: "Masuk",
      settings: "Peraturan"
    },
    footer: {
      text: `md_**Techmino Hub**  \nDibuat dengan ❤ oleh [komunitas Techmino](https://github.com/techmino-hub/techmino-hub-source-code)`,
      lang: "Bahasa"
    }
  },

  home: {
    tabTitle: "Techmino Hub - Beranda",
    title: "Selamat datang di Techmino Hub!",
    article: `md_Dibuat ulang di Nuxt.js, Techmino Hub adalah website Techmino yang dibuat oleh komunitas Techmino.  
    Website ini sedang dalam fase mula, fitur-fitur baru akan muncul pada masa depan.`
  },

  lang: {
    tabTitle: "Techmino Hub - Pengaturan Bahasa",
    title: "Bahasa",
    setLang: "Pilih"
  },

  settings: {
    tabTitle: "Techmino Hub - Pengaturan",
    title: "Pengaturan",
    loading: "Memuat...",
    settings: {
      bgEnabled: "Latar belakang",
      bgSpeed: "Kecepatan anim. latar belakang",
    },
    save: "Simpan",
    noscriptWarn: "JavaScript dibutuhkan untuk mengubah pengaturan.",
  }
} as LangEntry;