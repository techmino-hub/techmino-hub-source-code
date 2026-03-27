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
    Website ini sedang dalam fase mula, fitur-fitur baru akan muncul pada masa depan.
    
    # Segera: Papan Peringkat Akan Ditutup
    
    Karena kombinasi sumber daya pengembang yang terbatas dan perubahan besar Supabase yang akan datang, **papan peringkat tidak akan lagi dapat diakses melalui situs setelah 8 April**.  
    Demi melestarikan riwayat Techmino, akan disediakan pengunduhan basis data publik setelah tanggal tersebut.
    
    Halaman statis, seperti FAQ dan peta, tidak terpengaruh.
    
    Lihat [masalah #98 di GitHub](https://github.com/techmino-hub/techmino-hub-source-code/issues/98) untuk detail lebih lanjut. Seperti biasa, kami menerima kontributor/pengembang baru jika Anda merasa mampu untuk tugas ini.`
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
