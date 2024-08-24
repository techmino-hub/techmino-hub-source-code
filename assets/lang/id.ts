import type { LangEntry } from '~/assets/types/lang';

export default {
  common: {
    appName: "Techmino Hub",
    nav: {
      section: {
        pages: "Pages",
        account: "Account",
      },
      home: "Beranda",
      faq: "FAQ",
      map: "Peta",
      leaderboard: "Leaderboards",
      profile: "View Profile",
      signIn: "Masuk",
      signOut: "Sign Out",
      settings: "Peraturan",
      account: "Your Account",
      rules: "Site Rules",
      privacy: "Privacy Policy",
      close: "Close",
    },
    footer: {
      text: `md_**Techmino Hub**  \nDibuat dengan ❤ oleh [komunitas Techmino](https://github.com/techmino-hub/techmino-hub-source-code)`,
      lang: "Bahasa"
    },
    separator: {
      decimal: ".",
      thousand: " "
    },
    time: {
      'hour': ":",
      'minute': "′",
      'second': "″",
    }
  },

  home: {
    tabTitle: "Techmino Hub - Beranda",
    title: "Selamat datang di Techmino Hub!",
    article: `md_Techmino Hub adalah website Techmino yang dibuat oleh komunitas Techmino.  
Website ini mengandung banyak informasi tentang Techmino.  
Kita juga menyediakan papan peringkat dimana pemain dapat mengirim permainan mereka dan melihat peringkat mereka.`
  },

  lang: {
    tabTitle: "Pengaturan Bahasa - Techmino Hub",
    title: "Bahasa",
    note: "Penerjemahan disediakan oleh komunitas dan tidak dijamin 100% akurat. {0}",
    contribute: "Kontribusi terjemahan",
    setLang: "Pilih bahasa",
  },

  settings: {
    tabTitle: "Pengaturan - Techmino Hub",
    title: "Pengaturan",
    loading: "Memuat...",
    note: "Pengaturan ini disimpan secara lokal di peramban Anda.",
    settings: {
      bgEnabled: "Latar belakang",
      bgSpeed: "Kecepatan anim. latar belakang",
    },
    save: "Simpan",
    noscriptWarn: "JavaScript dibutuhkan untuk mengubah pengaturan."
  },

  faq: {
    tabTitle: "FAQ - Techmino Hub",
    title: "Frequently Asked Questions",
    filter: {
      title: "Filter Tag",
      exclude: "Sembunyikan",
      all: "Semua",
      include: "Tunjukkan"
    },
    preTags: "Tag: ",
    tags: {
      techmino: "Techmino",
      galaxy: "Tech. Galaxy",
      linux: "Linux",
      apple: "Apple",
      multiplayer: "Multiplayer",
      error: "Error",
      bot: "AI (ColdClear)"
    },
    note: `md_**Catatan**  
    Pertanyaan-pertanyaan di FAQ ini berasal dari [server Discord resmi Techmino](https://discord.gg/f9pUvkh).
    Pertanyaan tersebut mungkin telah dimodifikasi untuk kejelasan dan terjemahan, dan mungkin tidak mengutip pesan asli secara harfiah.
    Meskipun kami berusaha untuk akurasi, beberapa informasi dalam FAQ mungkin sudah kedaluwarsa.
    Jika Anda menemukan ketidakakuratan, laporkan di [GitHub issues](https://github.com/techmino-hub/techmino-hub-source-code/issues/new) atau [server Discord resmi Techmino](https://discord.gg/f9pUvkh).`,
    entries: {
      'what-is-techmino': {
        question: "Apa itu Techmino?",
        answer:
          `md_Techmino adalah permainan penumpukan blok yang awalnya dibuat oleh MrZ, bersama dengan
          beberapa peningkatan oleh komunitas open-source. Permainan ini dibuat menggunakan
          Love2D. Permainan ini memiliki banyak mode permainan, termasuk Sprint, Marathon,
          VS, mode kustom yang sepenuhnya dapat disesuaikan, dan banyak lagi!`,
        credit: "NOT_A_ROBOT"
      },
      'is-techmino-open-source': {
        question: "Apakah Techmino open-source?",
        answer:
          `md_Ya. Techmino dilisensikan di bawah lisensi LGPL-3.0.
          Anda dapat menemukan kode sumber [di sini](https://github.com/26F-Studio/Techmino).`,
        credit: "NOT_A_ROBOT"
      },
      'how-to-download': {
        question: "Bagaimana cara mendapatkan/mendownload game ini?",
        answer:
          `md_
1. Dapatkan game [dari rilis GitHub](https://github.com/26F-Studio/Techmino/releases).
2. Unduh file yang sesuai dengan sistem operasi Anda.
3. Ekstrak file yang dikompresi jika diperlukan.
4. Jalankan file yang dapat dieksekusi (\`.exe\`, \`.app\`, \`.love\`, dll.).`,
        credit: "NOT_A_ROBOT"
      },
      'supported-os': {
        question: "Platform apa yang didukung?",
        answer:
          `md_Techmino dapat dijalankan di platform berikut:
- Windows
- Mac
- Linux (kecuali perangkat berbasis ARM)
- Android
- iOS*
- Mungkin platform-platform yang lain, jika platform tersebut mendukung [LÖVE](https://love2d.org/), mesin permainan yang digunakan oleh Techmino.
(Seseorang di Discord pernah berhasil menjalankannya di Nintendo Switch.)

*Lihat FAQ berikutnya untuk detail lebih lanjut.`,
        credit: "NOT_A_ROBOT"
      },
      'cant-find-app-store': {
        question: "Mengapa saya tidak bisa menemukan Techmino di App Store (iOS)?",
        answer:
          `md_Techmino telah menerima peringatan tentang pelanggaran hak cipta dari The Tetris Company.  
          Techmino tidak lagi tersedia di App Store.  
          Sebuah TestFlight telah dibuat untuk Techmino, tetapi sayangnya, jumlah maksimum anggota
          telah tercapai, dan oleh karena itu, Anda tidak dapat mengunduh Techmino di iOS lagi.  
          Kami mohon maaf atas ketidaknyamanan ini. Jika tertulis bahwa beta tidak menerima lebih banyak tester,
          sayangnya, itu tidak tersedia saat ini.  
          Anda mungkin ingin memeriksa entri FAQ berikutnya untuk informasi lebih lanjut.`,
        credit: "nekonaomii (terjemahan oleh NOT_A_ROBOT)"
      },
      'testflight-full': {
        question: "Saya ingin bermain Techmino di iOS atau iPadOS tanpa jailbreak, tetapi batas TestFlight sudah penuh atau build TestFlight sudah kedaluwarsa. Apa yang harus saya lakukan?",
        answer:
          `md_Kami sebelumnya memiliki build untuk perangkat iOS dan iPadOS di App Store, tetapi sayangnya dihapus oleh The Tetris Company melalui permintaan DMCA.  
Kami memiliki tautan TestFlight, tetapi saat ini sudah penuh dan kami tidak bisa menambahkan lagi.  
Namun, ada alternatif untuk menjalankan Techmino di perangkat iOS dan iPadOS melalui Love2D Studio.  
Untuk menjalankan Techmino di perangkat iOS atau iPadOS (iPhone, iPad, iPod Touch) melalui Love2D Studio:

1. [Unduh dan pasang Love2D Studio dari App Store](https://apps.apple.com/us/app/love2d-studio/id6474188075).
2. Unduh file **\`.love\`** dari versi Techmino yang diinginkan di perangkat Apple Anda. Simpan file di perangkat atau iCloud Drive Anda. Semua build stabil Techmino tersedia [di sini](https://github.com/26F-Studio/Techmino/releases).
3. Buka Love2D Studio, ketuk tombol **＋** di kanan atas sidebar, lalu ketuk “Import .love file”.
4. Temukan dan pilih file \`.love\` yang telah Anda unduh.
5. Sekarang Anda akan melihat “Techmino_Bare” di sidebar Anda. Ketuk untuk memperluas, lalu ketuk \`main.lua\`.
6. Ketuk tombol ▶︎ di kanan atas layar untuk memulai permainan.

**Kami belum sepenuhnya menguji stabilitas Love2D Studio, jadi ada kemungkinan permainan akan crash selama bermain\\*.**  
**Kami juga tidak tahu apakah data permainan akan hilang setelah jangka waktu tidak aktif tertentu atau karena alasan lain.**  
**Untuk memastikan keamanan data Anda, kami sangat menyarankan untuk sering mengekspor data permainan melalui clipboard untuk mencegah kehilangan data.**

*Prosedur ini juga dapat digunakan untuk menguji Techmino Galaxy.*

\\*Kami tidak menemui ini selama pengujian terbatas, tetapi Love2D Studio cenderung crash saat keluar dari Techmino dan kemudian meluncurkannya kembali.

*Ini bukan iklan atau dukungan untuk Love2D Studio.*`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'no-ipa': {
        question: "Saya ingin memainkan Techmino pada iOS atau iPadOS tanpa jailbreak, tetapi saya tidak melihat file .ipa pada rilis terbaru.",
        answer:
          `md_Jika Anda ingin menginstal versi Techmino yang tidak memiliki file \`.ipa\`, Anda dapat mengikuti langkah-langkah berikut:
1. Dapatkan file \`.ipa\` dari [halaman rilis GitHub](https://github.com/26F-Studio/Techmino/releases). Cari versi dengan file \`.ipa\` yang valid, lalu unduh “Techmino_iOS.ipa”.
2. Ubah ekstensi file \`.ipa\` menjadi \`.zip\`. Ekstrak file \`.zip\` tersebut.
3. Buka folder \`./Payload\`. Jika Anda menggunakan Microsoft Windows, Anda akan melihat folder bernama \`Techmino.app\`, dalam hal ini, buka folder tersebut dan lanjutkan ke langkah 5.
4. Jika Anda menggunakan macOS, Anda akan melihat file aplikasi bernama \`Techmino.app\`. Klik kanan pada file tersebut, lalu klik “Show package content” di menu klik-kanan.
5. Cari file \`game.love\`. Ganti file ini dengan file \`.love\` yang ingin Anda instal.
6. Kompres file Techmino iOS ke dalam file \`.zip\` lagi. Pilih opsi “tanpa kompresi” di aplikasi arsip Anda saat membuat file zip ini.
7. Ubah ekstensi file \`.zip\` kembali menjadi \`.ipa\`.
8. Ikuti instruksi dari entri FAQ sebelumnya.
Catatan: Build yang terlalu lama mungkin menggunakan build LÖVE yang berbeda dan mungkin tidak berfungsi dengan baik dengan metode ini.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'cc-error': {
        question: "Mengapa saya mendapatkan error terkait dengan AI Cold Clear? Bagaimana cara memperbaikinya?",
        answer:
          `md_Masalah ini biasanya — tetapi tidak selalu — disebabkan karena file yang diperlukan untuk memuat bot ColdClear tidak ditemukan.
Berikut adalah daftar file ColdClear pada platform yang berbeda:
| Platform    | File                                    | Catatan                                                                                                |
|-------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------|
| Windows     | \`CCloader.dll\`, \`cold_clear.dll\`    |                                                                                                        |
| Linux       | \`lib/CCloader.so\`                     |                                                                                                        |
| MacOS       | \`CCloader.dylib\`                      | Memerlukan investigasi lebih lanjut.                                                                   |
| Android x86 | \`libAndroid/armeabi_v7a/CCloader.so\`  |                                                                                                        |
| Android x64 | \`libAndroid/arm64_v8a/CCloader.so\`    |                                                                                                        |
| iOS         | \`llibCCloader.a\`, \`libcold_clear.a\` | Memerlukan investigasi lebih lanjut. Kemungkinan 2 file diperlukan untuk membangun CCloader untuk iOS. |

Berikut adalah instruksi untuk memperbaiki masalah ini.
1. Dapatkan wrapper ColdClear [di sini](https://github.com/26F-Studio/cold_clear_ai_love2d_wrapper/releases). Dapatkan file yang sesuai dengan sistem operasi Anda.
2. Unduh [kode sumber Techmino](https://github.com/26F-Studio/Techmino). (klik tombol Code hijau dan klik Download ZIP)
3. Ekstrak file yang diunduh ke folder terpisah (kode sumber Techmino ke folder, file CCloader ke folder lain)
4. Salin file yang diperlukan dari folder CCloader ke kode sumber Techmino, berdasarkan jalur di tabel di atas.
5. Bangun Techmino. Instruksi dapat ditemukan [di sini](https://love2d.org/wiki/Game_Distribution).`,
        credit: "SweetSea (terjemahan oleh NOT_A_ROBOT)"
      },
      'remake': {
        question: "Saya mendengar Techmino sedang dibuat ulang.",
        answer:
          `md_Pada 15 Januari 2022, MrZ (developer utama Techmino) membuka isu bernama "REMAKE NOW" di halaman GitHub.  
Menurut MrZ sendiri, Techmino saat ini mengandung terlalu banyak bug sehingga dia perlu membuat ulang seluruh permainan dari awal untuk memperbaikinya.  
Meskipun masih jauh dari selesai, Anda dapat melihat kode sumbernya [di sini](https://github.com/26F-Studio/Techmino_Galaxy).`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'how-to-play-tg': {
        question: "Bagaimana cara menginstal Techmino Galaxy?",
        answer:
          `md_Peringatan: **Techmino Galaxy masih dalam tahap pengembangan awal, dan mungkin tidak memberikan pengalaman terbaik.**

Cara termudah untuk mendapatkan Techmino Galaxy adalah melalui GitHub Actions. Anda *akan* memerlukan akun GitHub untuk mengunduh permainan ini.  
Berikut adalah langkah-langkah untuk mengunduh Techmino Galaxy melalui GitHub Actions:
1. Buka [halaman Actions Techmino Galaxy](https://github.com/26F-Studio/Techmino_Galaxy/actions).
2. Pilih versi terbaru (paling atas) dengan tanda centang hijau (menunjukkan build berhasil). Anda dapat melakukannya dengan mengklik teks judul.
3. Scroll ke bawah ke bagian "Artifacts" dan unduh versi platform yang diinginkan.
4. Ekstrak file yang diunduh dan jalankan file executablenya.

Metode yang lain adalah dengan mendapatkan kode sumber dan menjalankannya melalui binary LÖVE.
Ini *tidak* memerlukan akun GitHub, tetapi sedikit lebih rumit.
Untuk melakukannya, ikuti instruksi berikut:
1. [Dapatkan versi terbaru LÖVE](https://love2d.org/).
2. Unduh repositori dari GitHub. Ini dapat dilakukan dengan dua cara:
   - Di [repositori](https://github.com/26F-Studio/Techmino_Galaxy), klik tombol "Code" yang hijau dan pilih "Download ZIP".
   - Jika Anda sudah menginstal Git, Anda dapat menggunakan \`git clone\` untuk mengunduh repositori.
3. Di repositori yang diunduh, cek apakah folder Zenitha kosong. Jika iya, unduh [repositori Zenitha](https://github.com/26F-Studio/Zenitha) menggunakan metode yang sama seperti di atas, dan ekstrak ke dalam folder Zenitha.
4. Jalankan permainan dengan menyeret seluruh folder \`Techmino_Galaxy\` ke executable LÖVE. (Di Windows, ini adalah \`love.exe\`.)

Jika Anda sering memperbarui permainan, pertimbangkan untuk mengikuti [panduan ini yang dibuat oleh SweetSea](https://github.com/26F-Studio/Techmino_Galaxy/discussions/26).  
Catatan: MrZ tidak merekomendasikan membicarakan konten Techmino Galaxy, terutama hal-hal yang masih bisa berubah banyak, di tempat umum.
Kecuali Anda memiliki alasan yang baik, Anda sebaiknya menghormati rekomendasinya. Terima kasih!`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'sprint-only': {
        question: "Mengapa permainan ini hanya memiliki mode Balapan?",
        answer: `md_Anda perlu memainkannya untuk meng-unlock mode lain.
Garis yang keluar dari ikon mode menunjukkan apakah mode ini dapat membuka mode lain.
Untuk meng-unlock mode berikutnya, Anda perlu mencapai setidaknya peringkat B pada mode tersebut — jadi 1 menit 2 detik untuk Balapan 10L, atau 3 menit 3 detik untuk Balapan 40L.`,
        credit: "User670 (terjemahan oleh NOT_A_ROBOT)"
      },
      'unlockall': {
        question: "Tetapi saya tidak ingin meng-unlock semua mode!",
        answer: `md_Terdapat cheat code untuk meng-unlock semua mode dalam Techmino:
1. Buka main menu.
2. Buka terminal dengan menekan logo Techmino 4 kali.
3. Ketik \`unlockall\` dan tekan Enter. Ikuti instruksi yang diberikan oleh perintah tersebut.`,
        credit: "NOT_A_ROBOT"
      },
      'is-guideline': {
        question: "Apakah Techmino mengikuti Guideline?",
        answer: `md_Techmino hampir mengikuti Guideline, tetapi ada beberapa perbedaan:
- Techmino menggunakan sistem rotasi kustom berdasarkan SRS tetapi memiliki lebih banyak *kick* dan *O-spin*.
- Techmino memiliki sistem *allspin*, tidak hanya *T-spin*.
- Techmino menggunakan tabel serangan yang berbeda dari Guideline.`,
        credit: "User670 (terjemahan oleh NOT_A_ROBOT)"
      },
      'ai-list': {
        question: "Apa saja AI yang digunakan dalam permainan?",
        answer: `md_Permainan ini menggunakan dua AI: ColdClear dan 9Stacker.
- [ColdClear dikembangkan oleh MinusKelvin](https://github.com/MinusKelvin/cold-clear). AI ini dapat melakukan T-Spin, Back-to-Back, dan Perfect Clear. ColdClear mungkin terasa lag pada perangkat spesifikasi rendah saat bermain mode Battle Royale.
- 9Stacker adalah algoritma yang lebih sederhana, dan hanya mampu melakukan finesse dan hard drop.`,
        credit: "User670 (terjemahan oleh NOT_A_ROBOT)"
      },
      'controller-support': {
        question: "Apakah Techmino kompatibel dengan controller?",
        answer: `md_Ya! Anda dapat mengatur mapping tombol di Pengaturan → Ubah Tindakan Tombol.`,
        credit: "User670 (terjemahan oleh NOT_A_ROBOT)"
      },
      'how-to-multiplayer': {
        question: "Bagaimana cara bermain multiplayer? / Saya tidak bisa mendaftar akun!",
        answer: `md_Sayangnya, pada Desember 2023, server sedang down.
Pemelihara server, Particle_G, sudah tidak aktif cukup lama.
Anda disarankan untuk memperlakukan permainan ini sebagai permainan single-player sampai masalah ini teratasi.`,
        credit: "NOT_A_ROBOT"
      },
      'change-language': {
        question: "Bagaimana cara mengubah bahasa permainan?",
        answer: `md_Pada main menu, klik tombol dengan ikon globe. Itu adalah tombol pemilihan bahasa.`,
        credit: "User670 (terjemahan oleh NOT_A_ROBOT)"
      },
      'voice-actors': {
        question: "Siapa saja aktor suara untuk paket suara? Apa saja bahasa yang mereka gunakan?",
        answer: `md_
1. [Miya](https://space.bilibili.com/846180) adalah seorang virtual live streamer yang dulunya sering memainkan permainan penumpukan blok.
  Bahasa suara: Jepang (line clears); Jepang, Cina, dan Kucing (lainnya)
2. Mono adalah seorang seniman, namun profil online-nya telah dihapus.
  Bahasa suara: Jepang
3. Xiaoya adalah seorang pemain penumpukan blok. Dia memperkenalkan dirinya sebagai "Xia Xiaoya, jenis bebek yang baru."
  Bahasa suara: Inggris (line clears); Cina (lainnya)
4. [Flore](https://space.bilibili.com/1223403016) adalah seorang pemain penumpukan blok, yang ditampilkan dalam [artikel ini](https://github.com/User670/temp/blob/master/those_who_play_tetris.md).
  Bahasa suara: Inggris (line clears), berbagai bahasa (lainnya)
5. [Neuro](https://en.wikipedia.org/wiki/Neuro-sama) adalah chatbot dengan gaya VTuber yang mengadakan streaming di saluran Twitch.
  Bahasa suara: Jepang
6. [Miku](https://en.wikipedia.org/wiki/Hatsune_Miku) adalah bank suara untuk sintesis suara Jepang bernama Vocaloid.
  Bahasa suara: Jepang
7. [Zundamon](https://vocalsynth.fandom.com/wiki/Zundamon) adalah bank suara untuk berbagai program sintesis suara.
  Bahasa suara: Jepang`,
        credit: "User670"
      },
      'mod-assets': {
        question: "Bagaimana cara mengekstrak, melihat, atau mengganti aset dan kode Techmino?",
        answer: `md_
File Techmino.exe (Windows) atau file game.love (platform lain) adalah arsip zip yang valid.  
Dengan menggunakan perangkat lunak seperti 7-Zip, Anda dapat melihat, mengekstrak, atau mengganti file apa pun di dalamnya, termasuk aset dan skrip Lua.  
Anda juga dapat melihat [kode sumber Techmino di GitHub](https://github.com/26F-Studio/Techmino).`,
        credit: "User670 (terjemahan oleh NOT_A_ROBOT)"
      },
      'anti-addiction': {
        question: "Apakah Techmino memiliki sistem anti-kecanduan?",
        answer: `md_Permainan ini memiliki sistem anti-kecanduan yang mencegah bermain terlalu lama.
Sistem ini hanya berlaku jika Anda bermain dalam bahasa Cina dengan waktu Sprint 10L lebih dari 10 detik,
waktu Sprint 40L lebih dari 32,6 detik, dan Anda telah bermain selama 4 jam.  
Penghitung waktu akan direset pada tengah malam.  
Meskipun fitur ini tidak diperlukan karena permainan belum terdaftar di China, ini merupakan salah satu Easter egg di dalam Techmino.`,
        credit: "NOT_A_ROBOT"
      },
      'can-record': {
        question: "Bolehkah saya mengunggah video Techmino, atau menyiarkan langsung saya memainkannya?",
        answer: `md_
Sebelumnya kami menuntut Anda untuk meminta izin sebelum melakukannya,
tetapi legalitas persyaratan semacam itu telah dipertanyakan.

*Namun*, kami memohon Anda bahwa, jika Anda memutuskan untuk berbagi screenshot,
video atau siaran langsung dengan Techmino, tolong hanya melakukannya di komunitas Tetris.  
Kami tidak ingin terlalu banyak publisitas untuk saat ini.`,
        credit: "User670 (terjemahan oleh NOT_A_ROBOT)"
      },
      'mrz-voice-pack': {
        question: "Kapankah MrZ akan mendapatkan paket suara?",
        answer: "md_Kemungkinan besar: tidak akan pernah.",
        credit: "NOT_A_ROBOT (informasi dari User670)"
      },
      'crash-no-bluescreen': {
        question: "Permainan saya tiba-tiba tertutup tanpa ada pesan eror!",
        answer: `md_Jika permainan tertutup tanpa pesan eror, ini mungkin disebabkan oleh Cold Clear, bot AI yang digunakan dalam permainan.

**Kami tidak bisa melakukan banyak hal untuk memperbaikinya.**  

Anda masih bisa mencoba bertanya kepada orang lain tentang masalah ini, terutama jika ini terjadi tanpa AI di layar.`,
        credit: "User670 (terjemahan oleh NOT_A_ROBOT)"
      },
      'access-terminal': {
        question: "Bagaimana cara mengakses konsol/terminal dalam permainan?",
        answer: `md_Anda dapat melakukannya dengan mengklik atau menekan ikon “TECHMINO” di main menu
atau dengan menekan tombol “C” pada keyboard Anda beberapa kali.

Catatan: [keyboard eksternal mungkin tidak berfungsi dengan benar di iOS dan iPadOS](https://github.com/26F-Studio/Techmino/issues/330).`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'ext-kbd-not-working': {
        question: "Keyboard eksternal saya tidak berfungsi dengan Techmino!",
        answer: `md_Coba colok dan lepas keyboard Anda, atau sambungkan kembali keyboard Anda jika Anda menggunakan keyboard Bluetooth.  
Masalah semacam ini biasanya hanya terjadi pada perangkat seluler.  
Untuk pengguna iOS dan iPadOS, itu adalah masalah yang kami tidak dapat memperbaiki untuk saat ini.  
Ini mungkin terkait dengan distribusi LÖVE iOS atau bagaimana iOS mengenali keyboard eksternal.  
Anda masih bisa menggunakan tombol virtual di layar.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'cant-install-macos': {
        question: "Mengapa saya tidak dapat menginstal Techmino pada macOS?",
        answer: `md_Ini karena Techmino tidak tersedia di Mac App Store.  
Untuk memperbaiki masalah ini, buka System Preferences → Security & Privacy.  
Klik ikon kunci di bagian kiri-bawah dan masukkan kata sandi Anda (atau gunakan Touch ID).  
Lalu, pilih “App Store and identified developers” di bawah menu “Allow apps downloaded from”.  
Terakhir, buka kembali Techmino.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'simplistic-mode': {
        question: "Main menu saya hanya memiliki tombol besar untuk Balapan dan Maraton. (mode simplistik)",
        answer: `md_Mungkin Anda telah mengaktifkan “Simplistic Mode.”  
Dalam mode ini, hanya beberapa mode dan fungsi penting yang tersedia.  
Cukup pergi ke pengaturan dan matikan “Simplistic Mode” untuk memperbaikinya.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'thinkz': {
        question: "Saya melihat ikon yang mirip dengan emoji \"berpikir\", tetapi dengan tetromino Z. Apa maksudnya?",
        answer: `md_Ikon ini berarti "Tetris"!
Karena kemungkinan risiko menerima DMCA dari *The Tetris Company*, kami telah memutuskan
untuk mengganti semua kata-kata "Tetris" dalam permainan dengan 󰀕.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'purple-screen-of-death': {
        question: "Saya mendapatkan layar eror ungu, apa artinya?",
        answer: `md_Itu sama dengan layar *bluescreen*/crash, bedanya hanya dalam warnanya. Ini kadang-kadang muncul karena *Easter egg*.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'download-soundtrack': {
        question: "Bagaimana cara mendownload soundtrack Techmino?",
        answer: `md_OST Techmino sekarang tersedia di SoundCloud!
Anda dapat mengunduh seluruh soundtrack [di sini](https://soundcloud.com/michael-gu-102967376/sets/techmino-the-ost-v2) gratis (dengan Lisensi CC BY 3.0).`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'rank-reqs': {
        question: "Bagaimana cara melihat persyaratan peringkat untuk setiap mode?",
        answer: `md_Kami menyediakan persyaratan peringkat untuk setiap mode di [peta kami](/map)!
Halaman itu biasanya cukup akurat - terutama karena Techmino sekarang-sekarang ini jarang mendapatkan pembaruan.  
Jika Anda ingin melihat kode sumber Techmino untuk mendapatkan persyaratannya, berikut adalah caranya:

Pertama, buka repositori Techmino di [GitHub](https://github.com/26F-Studio/Techmino).

Kedua, Buka folder \`parts\`, lalu buka folder \`modes\`. Akan ada berbagai file mode di sini.  
Biasanya, nama file mode akan mirip dengan nama mode dalam bahasa Inggris.  
Jadi, untuk mendapatkan file mode untuk mode "Balapan 10L" *("Sprint 10L")*, buka file \`sprint_10l.lua\`.

Lalu, pada file mode, cari bagian kode yang mirip dengan ini (ini akan berbeda untuk setiap mode; contoh ini menggunakan \`sprint_40l.lua\`):
\`\`\`
if P.stat.row<40 then return end
local T=P.stat.time
return
    T<=26 and 5 or
    T<=36 and 4 or
    T<=52.6 and 3 or
    T<=92.9 and 2 or
    T<=183 and 1 or
    0
end,
\`\`\`

Makna baris pertama adalah jika \`P.stat.row\` kurang dari 40 (yang berarti Anda tidak menyelesaikan balapan 40L), peringkat Anda tidak dicatat.  
Nama variabel yang ada setelah \`local\` adalah kategori persyaratannya (dalam contoh ini, waktu (dalam detik)).  
Angka \`5\`, \`4\`, \`3\`, \`2\`, dan \`1\` sesuai dengan peringkat \`X\`, \`U\`, \`S\`, \`A\`, dan \`B\` dalam permainan.
Angka \`0\` juga berarti peringkat Anda tidak dicatat (dalam contoh ini, ketika waktu Anda melebihi 183 detik).`,

        credit: "C29H25N3O5 (map & terjemahan: NOT_A_ROBOT)"
      },
      'o-spins': {
        question: "Bagaimana cara melakukan O-spin?",
        answer: `md_
Ada dua jenis O-spin: O-spin transformatif dan O-spin translasional.  
O-spin transformatif hanya bisa dilakukan menggunakan TRS, namun O-spin translasional bisa dilakukan menggunakan TRS, BiRS, dan ASC.

Untuk melakukan O-spin transformatif, pindahkan blok O ke “lubang” yang sesuai, lalu gunakan rotasi berikut untuk melakukan trik tersebut:

O → Z: LRL
O → S: RLR
O → J: LLR
O → L: RRL
O → T: LLL & RRR
O → I: FFF

Catatan: L = rotasi berlawanan arah jarum jam, R = rotasi searah jarum jam, F = rotasi 180°

Berikut adalah GIF yang berguna untuk demonstrasi ini:

![image](img/faq/trs-tf-ospin.gif)

Untuk melakukan O-spin translasional, Anda dapat menggunakan fakta bahwa beberapa sistem rotasi memiliki kick,
dan gunakan itu untuk meletakkan blok O di lubang.

Uniknya, pada BiRS, Anda harus menahan tombol panah yang benar (bergerak ke kiri/kanan/bawah)
untuk mencoba "menggeser" kick ke arah tersebut, lalu mencoba memutar blok O.  
Informasi lebih lanjut tersedia di Zictionary dalam Techmino.

Berikut adalah demonstrasi O-spin translasional:

![image](img/faq/birs-tl-ospin.gif)
`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'snapshot-version': {
        question: "Bagaimana cara mengunduh versi snapshot (dev) terbaru dari Techmino?",
        answer: `md_
Jika Anda benar-benar ingin mencoba fitur terbaru Techmino, [GitHub CI](https://github.com/26F-Studio/Techmino/actions)
akan menghasilkan versi snapshot aplikasi untuk setiap commit.  
Perlu diingat bahwa versi snapshot mungkin tidak stabil dan mengandung banyak bug,
dan Anda perlu masuk ke akun GitHub Anda untuk mengunduh artifact (build permainan).  
Jika Anda ingin mencobanya di perangkat iOS, Anda perlu menginstal artifact (build permainan) secara manual.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'linux-arm': {
        question: "Saya menggunakan distribusi Linux ARM. Mengapa saya tidak bisa memainkan Techmino di perangkat saya?",
        answer: `md_
Sayangnya, distribusi Linux ARM belum didukung oleh LÖVE, sehingga Anda tidak dapat melakukannya.  
Jika Anda benar-benar ingin memainkannya di perangkat Anda, kami sarankan Anda menggunakan box64/box86 dengan Wine
untuk menjalankan versi Windows dari Techmino.  
Catatan: Anda tidak dapat membuka file .AppImage menggunakan box64/86 secara langsung.
`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'm1-mac': {
        question: "Apakah Techmino dapat dimainkan di M1 Mac saya?",
        answer: `md_Ya! LÖVE mendukung M1 Mac.  
Jika Anda menggunakan versi lama yang tidak mendukung M1, cukup gunakan Rosetta 2
(yang terintegrasi dalam sistem sehingga Anda tidak perlu melakukan apa pun).`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'data-transfer': {
        question: "Bagaimana cara mentransfer data saya dari satu perangkat ke perangkat lain?",
        answer: `md_
Cukup pergi ke Statistik → Manajemen Data, dan Anda akan melihat tombol-tombol ini.  
Kemudian Anda dapat menyalin dan menempelkan data menggunakan clipboard Anda.  
![Screenshot dari layar Manajemen Data di Techmino](/img/faq/data-management.png)`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'custom-skin': {
        question: "Bagaimana cara membuat dan mengimpor skin blok saya sendiri?",
        answer: `md_Berikut adalah contoh skin untuk referensi:
![Contoh skin](/img/faq/example-skin.png)
- Skin adalah file \`.png\` dengan dimensi minimal 240 × 90 pixel.
- Gambar dibagi menjadi rangkaian 3 ×8 blok, dengan setiap blok memiliki dimensi 30× 30 pixel.

Untuk mengimpor skin Anda ke dalam Techmino:
1. Buat skin blok Anda dan ekspor ke dalam file \`.png\`.
2. Pindahkan skin Anda ke \`./media/image/skin/\`.
3. Tambahkan kode berikut ke \`./main.lua\` sekitar baris 315, setelah \`SKIN.load\`
  (jangan lupa untuk mengganti \`<NAMA_FILE_SKIN>\` dengan nama file skin, dan \`Nama skin\` dengan nama skin):
  \`'{'name="<Nama skin>", path=\\'media/image/skin/<NAMA_FILE_SKIN>.png\\''},\`
4. Bukakah Techmino. Anda akan menemukan skin Anda muncul di daftar skin.`,
        credit: "C29H25N3O5 & SweetSea (terjemahan oleh NOT_A_ROBOT)"
      },
      'tg-unverified-dev': {
        question: "Error pada Techmino Galaxy versi macOS: Techmino_Galaxy.app cannot be opened because the developer cannot be verified.",
        answer: `md_
![Sebuah popup yang menunjukkan error tersebut](/img/faq/mac-unverified-developer.png)
Ini karena Gatekeeper pada macOS tidak akan membiarkan pengguna membuka aplikasi apa pun yang tidak ditandatangani atau tidak dinotarisasikan secara default.  
Namun, ada cara mudah untuk melewatinya:  
Control–klik Techmino (Galaxy).app dan pilih “Buka” dari menu pop-up, lalu pilih “Buka” dari window.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'macos-damage-computer': {
        question: "Error pada Techmino versi macOS: Techmino.app will damage your computer. You should move it to the Trash.",
        answer: `md_![Sebuah popup yang menunjukkan error tersebut](/img/faq/macos-big-sur-alert-malicious-app.jpg)
Jika Anda mendapatkan pesan ini, option-klik Techmino (Galaxy).app, pilih “Get Info” dari menu, lalu centang kotak “Override Malware Protection”.  
Anda seharusnya sekarang dapat membukanya.

Techmino bukan malware dan tidak akan merusak komputer Anda.  
Sejauh yang kami ketahui, masalah ini hanya muncul pada versi dev dan snapshot yang tidak ditandatangani.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'ios-portrait-mode': {
        question: "Mengapa Techmino ditampilkan dalam mode potret di iOS (terutama di iPhone)?",
        answer: `md_Ini adalah bug yang terjadi di iOS.  
Mode "Potret” di pengaturan sepertinya tidak berfungsi di iOS.  
Oleh karena itu, satu-satunya solusi adalah masuk ke Techmino dalam mode lanskap:
1. Geser ke atas dari bagian bawah layar atau ketuk dua kali tombol home untuk masuk ke App Switcher, lalu geser ke atas untuk keluar dari Techmino.
2. Nonaktifkan kunci rotasi.
3. Putar perangkat Anda ke mode lanskap. Tidak apa-apa jika konten di layar beranda tidak terlihat diputar ke tampilan lanskap — ini normal selama Anda memegang perangkat dalam posisi lanskap.
4. Buka Techmino. Semuanya seharusnya berjalan dengan baik sekarang.

Jika anda “swipe quit” aplikasi lagi, anda mungkin perlu mengulangi prosedur di atas.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'tg-touch-controls': {
        question: "Bagaimana cara mengatur kontrol layar sentuh di Techmino Galaxy?",
        answer: `md_Kontrol layar sentuh pada Techmino Galaxy bekerja sedikit berbeda dari Techmino, dan Anda perlu mengunjungi dua layar untuk sepenuhnya mengatur kontrol sentuh.  
1. Aktifkan tombol "Enable touch controls" dan klik tombol "Touch controls...".
2. Di layar ini, Anda dapat menambahkan, menghapus, memindahkan, dan mengubah ukuran tombol, tetapi mereka belum memiliki tindakan yang ditugaskan kepada mereka.
3. Kembali, dan masuk ke "Key mappings...".
4. Di layar ini, klik sebuah tindakan, lalu klik sebuah tombol untuk menugaskan tindakan ke tombol tersebut.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'tg-interior': {
        question: "UI Techmino Galaxy saya berbeda dari tangkapan layar orang lain! Apakah hanya ada tiga mode (Latihan Dig, 40 Baris, dan Maraton)?",
        answer: `md_UI yang lain, bersama dengan mode-mode yang lain, dapat di-unlock dengan bermain dengan cukup baik.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'tg-unlockall-music': {
        question: "Bagaimana cara meng-unlock semua lagu di Techmino Galaxy?",
        answer: `md_Di ruang musik, matikan volume BGM di kanan bawah, hentikan musik di tengah bawah, dan spam klik "full band" di kiri bawah.  
Atau, tekan alt+\` (backtick) untuk membukanya sementara.`,
        credit: "nekonaomii (terjemahan oleh NOT_A_ROBOT)"
      },
      'tg-terminal': {
        question: "Bagaimana cara mengakses konsol Zenitha di Techmino Galaxy?",
        answer: `md_Setelah Anda meng-unlock Exterior, kembali ke Interior dan klik tombol Pengaturan yang sekarang dinonaktifkan.`,
        credit: "nekonaomii (terjemahan oleh NOT_A_ROBOT)"
      },
      'tech-league': {
        question: "Kapan Tech League (ranked VS) akan dirilis?",
        answer: `md_Kemungkinan besar: tidak akan pernah.
Menurut MrZ:

> … Saya tidak berencana untuk melakukan [Tech League sekarang]…
> Sistem sebelumnya tidak bagus seperti yang diharapkan, jika saya ingin melakukannya saya lebih kemungkinan menambahkannya ke Techmino Galaxy…
> Ketika saya selesai dengan itu, [saya] akan mengubah tombol lama menjadi iklan [untuk “Liga” Techmino Galaxy].

Pokoknya: Tech League mungkin akan diimplementasikan di Techmino Galaxy di masa depan.
Tech League tidak akan diimplementasikan di Techmino “Klasik”.`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'atk-table': {
        question: "Bagaimana cara menghitung serangan di Techmino?",
        answer: `md_Gunakan tabel ini sebagai referensi:
![Tabel serangan Techmino](/img/faq/techmino-attack-table.jpg)`,
        credit: "C29H25N3O5 (terjemahan oleh NOT_A_ROBOT)"
      },
      'b3b-calc': {
        question: "Bagaimana cara menghitung B2B2B di Techmino?",
        answer: `md_Gunakan tabel ini untuk menghitung meter B2B2B (di sebelah kiri lapangan permainan):
![Tabel B2B2B Techmino](/img/faq/b2b2b-calculator.png)`,
        credit: "nekonaomii (terjemahan oleh NOT_A_ROBOT)"
      }
    }
  },
  map: {
    tabTitle: "Map - Techmino Hub",
    tabTitleFS: "Map (Fullscreen) - Techmino Hub",
    title: "Techmino Map",
    details: "Currently displaying '{currentMap}' map",
    fullscreen: "Visit fullscreen map",
    noscriptWarn: "It looks like JavaScript is disabled. Although the regular map is unavailable, you can instead visit the lite map.",
    liteVersion: "Visit lite map",
    rankReqs: "Rank requirements: {0}",
    leaderboard: "Leaderboard: {0}",
    tooltip: {
      rank: {
        X: "X rank",
        U: "U rank",
        S: "S rank",
        A: "A rank",
        B: "B rank (minimum to unlock other modes)",
        Q: "Qualification requirement (minimum needed for your score to be listed on the leaderboards)",
      },
      expand: "View extended info",
      close: "Close",
      back: "Back",
    },
    info: {
      difficulty: "Difficulty",
      length: "Length",
      version: "Available in",
      source: "View mode source code"
    },
    loadingArticle: "Loading article...",
    noArticle: "Article unavailable",
    featuredVideo: "Featured video: {0}",
    lagWarnPre: "Lagging? ",
    mobileWarnPre: "On mobile? ",
    liteLink: "Lite version",
    impossibleRankReq: "(impossible)",
  },
  mapLite: {
    tabTitle: "Map (Lite) - Techmino Hub",
    tabTitleModeDetail: "About {modeName} Mode - Techmino Hub",
    backToMap: "Back to Lite Map",
    modeDesc: "Description: {0}",
  },
  modes: {
    sprint_10l: {
      title: "Sprint",
      subtitle: "10L",
      description: "Clear 10 lines!",
      rankReqs: [
        "---",
        "1′02″",
        "40 sec",
        "25 sec",
        "10 sec",
        "7 sec"
      ],
      difficulty: "Very Easy",
      length: "Very short (<1 min)"
    },
    sprint_20l: {
      title: "Sprint",
      subtitle: "20L",
      description: "Clear 20 lines!",
      rankReqs: [
        "---",
        "2′06″",
        "1′02.6″",
        "32.6 sec",
        "18 sec",
        "13 sec"
      ],
      difficulty: "Very Easy",
      length: "Short (1 min)"
    },
    sprint_40l: {
      title: "Sprint",
      subtitle: "40L",
      description: "Clear 40 lines!",
      rankReqs: [
        "---",
        "3′03″",
        "1′32.9″",
        "52.6 sec",
        "36 sec",
        "26 sec"
      ],
      difficulty: "Very Easy",
      length: "Short (2 min)"
    },
    sprint_100l: {
      title: "Sprint",
      subtitle: "100L",
      description: "Clear 100 lines!",
      rankReqs: [
        "---",
        "4′20″",
        "2′42″",
        "2′06″",
        "1′30″",
        "1′10″"
      ],
      difficulty: "Easy",
      length: "Medium (4 min)"
    },
    sprint_400l: {
      title: "Sprint",
      subtitle: "400L",
      description: "Clear 400 lines!",
      rankReqs: [
        "---",
        "13′20″",
        "10′26″",
        "8′20″",
        "6′20″",
        "6′00″"
      ],
      difficulty: "Easy",
      length: "Long (12 min)"
    },
    sprint_1000l: {
      title: "Sprint",
      subtitle: "1000L",
      description: "Clear 1000 lines!",
      rankReqs: [
        "---",
        "33′20″",
        "27′00″",
        "21′00″",
        "15′00″",
        "12′30″",
      ],
      difficulty: "Easy",
      length: "Very long (30 min)"
    },
    sprintPenta: {
      title: "Sprint",
      subtitle: "PENTOMINO",
      description: "40L with 18 pentominoes",
     rankReqs: [
        "---",
        "8′20″",
        "4′20″",
        "2′30″",
        "1′30″",
        "1′16″",
      ],
      difficulty: "Medium",
      length: "Medium (6 min)"
    },
    sprintMPH: {
      title: "Sprint",
      subtitle: "MPH",
      description: "Memoryless\nPreviewless\nHoldless",
     rankReqs: [
        "---",
        "2′20″",
        "1′50″",
        "1′30″",
        "1′10″",
        "1′00″",
      ],
      difficulty: "Medium",
      length: "Short (2 min)"
    },
    sprint123: {
      title: "Sprint",
      subtitle: "M123",
      description: "40L with only monominoes, dominoes, and triminoes",
      rankReqs: [
        "---",
        "2′40″",
        "2′10″",
        "1′44″",
        "1′02″",
        "42 sec",
      ],
      difficulty: "Trivial",
      length: "Short (2 min)"
    },
    construct_sg: {
      title: "Construct",
      subtitle: "SECRET GRADE",
      description: "Build a zigzag pattern by following the guide!",
      rankReqs: [
        "7 lines (Grade 3)",
        "11 lines (S1)",
        "15 lines (S5)",
        "19 lines (S9)",
        "21 lines (GM+)",
        "23 lines (TM+)"
      ],
      difficulty: "Tricky",
      length: "Medium (~6 min)",
      featuredVideo: "https://www.youtube.com/embed/i31ku9TaV9w"
    },
    construct_checker: {
      title: "Construct",
      subtitle: "CHECKERBOARD",
      description: "Build a checkerboard pattern!",
      rankReqs: [
        "1 line (Grade 9)",
        "(impossible)",
        "2 lines (Grade 8)",
        "4 lines (Grade 6)",
        "6 lines (Grade 4)",
        "8 lines (Grade 2)"
      ],
      difficulty: "Tricky",
      length: "Long (~15 min)",
      featuredVideo: "https://www.youtube.com/embed/3hgPj0jnsIU"
    },
    construct_invsg: {
      title: "Construct",
      subtitle: "INV. SG",
      description: "Build an inverted zigzag pattern!",
      rankReqs: [
        "1 line (Grade 9)",
        "(impossible)",
        "2 lines (Grade 8)",
        "4 lines (Grade 6)",
        "7 lines (Grade 3)",
        "10 lines (Grade S1)"
      ],
      difficulty: "Very Tricky",
      length: "Very Long (~30 min)",
      featuredVideo: "https://www.youtube.com/embed/dUGELBQ-tp4"
    },
    dig_10l: {
      title: "Dig",
      subtitle: "10L",
      description: "Dig 10 garbage lines as fast as you can!",
      rankReqs: [
        "---",
        "1′00″",
        "40 sec",
        "20 sec",
        "12 sec",
        "7 sec",
      ],
      difficulty: "Very Easy",
      length: "Very short (<1 min)"
    },
    dig_40l: {
      title: "Dig",
      subtitle: "40L",
      description: "Dig 40 garbage lines as fast as you can!",
      rankReqs: [
        "---",
        "3′00″",
        "2′00″",
        "1′30″",
        "1′10″",
        "50 sec",
      ],
      difficulty: "Easy",
      length: "Short (2 min)"
    },
    dig_100l: {
      title: "Dig",
      subtitle: "100L",
      description: "Dig 100 garbage lines as fast as you can!",
      rankReqs: [
        "---",
        "8′00″",
        "6′00″",
        "4′00″",
        "2′40″",
        "2′00″",
      ],
      difficulty: "Easy",
      length: "Medium (5 min)"
    },
    dig_400l: {
      title: "Dig",
      subtitle: "400L",
      description: "Dig 400 garbage lines as fast as you can!",
      rankReqs: [
        "---",
        "30′00″",
        "25′00″",
        "16′00″",
        "12′00″",
        "9′00″",
      ],
      difficulty: "Easy",
      length: "Long (20 min)"
    },
    dig_eff_10l: {
      title: "Dig",
      subtitle: "EFFICIENCY 10L",
      description: "Dig 10 garbage lines with the least pieces!",
      rankReqs: [
        "---",
        "40 pieces",
        "30 pieces",
        "25 pieces",
        "20 pieces",
        "14 pieces"
      ],
      difficulty: "Tricky",
      length: "Short (2 min)"
    },
    dig_eff_40l: {
      title: "Dig",
      subtitle: "EFFICIENCY 40L",
      description: "Dig 40 garbage lines with the least pieces!",
      rankReqs: [
        "---",
        "200 pieces",
        "160 pieces",
        "130 pieces",
        "115 pieces",
        "95 pieces"
      ],
      difficulty: "Tricky",
      length: "Medium (10 min)"
    },
    dig_eff_100l: {
      title: "Dig",
      subtitle: "EFFICIENCY 100L",
      description: "Dig 100 garbage lines with the least pieces!",
      rankReqs: [
        "---",
        "550 pieces",
        "450 pieces",
        "370 pieces",
        "300 pieces",
        "250 pieces"
      ],
      difficulty: "Tricky",
      length: "Long (20 min)"
    },
    dig_eff_400l: {
      title: "Dig",
      subtitle: "EFFICIENCY 400L",
      description: "Dig 400 garbage lines with the least pieces!",
      rankReqs: [
        "---",
        "1800 pieces",
        "1600 pieces",
        "1440 pieces",
        "1280 pieces",
        "1120 pieces"
      ],
      difficulty: "Tricky",
      length: "Very Long (40 min)"
    },
    dig_quad_10l: {
      title: "Dig",
      subtitle: "TECHRASH 10L",
      description: "Dig 10 garbage lines using only techrash!",
      rankReqs: [
        "---",
        "2 lines",
        "3 lines",
        "5 lines",
        "7 lines",
        "10 lines"
      ],
      difficulty: "Very Tricky",
      length: "Long (15 min)"
    },
    drought_n: {
      title: "Drought",
      subtitle: "100L",
      description: "100L but without I pieces",
      rankReqs: [
        "10 lines",
        "50 lines",
        "100 lines in 3′30″",
        "100 lines in 2′30″",
        "100 lines in 1′40″",
        "100 lines in 1′20″"
      ],
      difficulty: "Medium",
      length: "Medium (5 min)"
    },
    drought_l: {
      title: "Drought+",
      subtitle: "100L",
      description: "100L but the randomizer hates you",
      rankReqs: [
        "10 lines",
        "50 lines",
        "100 lines in 4′00″",
        "100 lines in 2′40″",
        "100 lines in 2′06″",
        "100 lines in 1′50″"
      ],
      difficulty: "Tricky",
      length: "Medium (6 min)"
    },
    marathon_n: {
      title: "Marathon",
      subtitle: "NORMAL",
      description: "200-line marathon with increasing speed",
      rankReqs: [
        "20 lines",
        "100 lines",
        "150 lines",
        "200 lines",
        "200 lines in 6′00″",
        "200 lines in 4′00″"
      ],
      difficulty: "Medium",
      length: "Medium (10 min)"
    },
    marathon_h: {
      title: "Marathon",
      subtitle: "HARD",
      description: "200-line high-speed marathon",
      rankReqs: [
        "10 lines",
        "50 lines",
        "100 lines",
        "200 lines",
        "200 lines in 6′00″",
        "200 lines in 4′00″"
      ],
      difficulty: "Hard",
      length: "Medium (10 min)"
    },
    solo_e: {
      title: "Battle",
      subtitle: "EASY",
      description: "Defeat the AI!",
      rankReqs: [
        "(impossible)",
        "Win the battle",
        "Win in 3′00″",
        "Win in 2′00″",
        "Win in 1′20″",
        "Win in 50 sec"
      ],
      difficulty: "Medium",
      length: "Short (4 min)"
    },
    solo_n: {
      title: "Battle",
      subtitle: "NORMAL",
      description: "Defeat the AI!",
      rankReqs: [
        "(impossible)",
        "Win the battle",
        "Win in 3′00″",
        "Win in 2′00″",
        "Win in 1′20″",
        "Win in 50 sec"
      ],
      difficulty: "Medium",
      length: "Medium (5 min)"
    },
    solo_h: {
      title: "Battle",
      subtitle: "HARD",
      description: "Defeat the AI!",
      rankReqs: [
        "(impossible)",
        "Win the battle",
        "Win in 3′00″",
        "Win in 2′00″",
        "Win in 1′20″",
        "Win in 50 sec"
      ],
      difficulty: "Hard",
      length: "Medium (6 min)"
    },
    solo_l: {
      title: "Battle",
      subtitle: "LUNATIC",
      description: "Defeat the AI!",
      rankReqs: [
        "(impossible)",
        "(impossible)",
        "(impossible)",
        "Win the battle",
        "Win with 1 life remaining",
        "Win without losing any lives"
      ],
      difficulty: "Very Hard",
      length: "Medium (10 min)"
    },
    solo_u: {
      title: "Battle",
      subtitle: "ULTIMATE",
      description: "Defeat the AI!",
      rankReqs: [
        "(impossible)",
        "(impossible)",
        "(impossible)",
        "Win the battle",
        "Win with 1 life remaining",
        "Win without losing any lives"
      ],
      difficulty: "Extreme",
      length: "Long (15 min)"
    },
    techmino49_e: {
      title: "Tech VS 49",
      subtitle: "EASY",
      description: "49-player battle.\nThe last one standing wins!",
      rankReqs: [
        "Get 45th place",
        "Get 15th place",
        "Get 10th place",
        "Get 5th place",
        "Get 3rd place",
        "Get 1st place"
      ],
      difficulty: "Medium",
      length: "Long (15 min)"
    },
    techmino49_h: {
      title: "Tech VS 49",
      subtitle: "HARD",
      description: "49-player battle.\nThe last one standing wins!",
      rankReqs: [
        "Get 45th place",
        "Get 8th place",
        "Get 6th place",
        "Get 4th place",
        "Get 2nd place",
        "Get 1st place"
      ],
      difficulty: "Medium",
      length: "Long (15 min)"
    },
    techmino49_u: {
      title: "Tech VS 49",
      subtitle: "ULTIMATE",
      description: "49-player battle.\nThe last one standing wins!",
      rankReqs: [
        "Get 45th place",
        "Get 6th place",
        "Get 4th place",
        "Get 3rd place",
        "Get 2nd place",
        "Get 1st place"
      ],
      difficulty: "Hard",
      length: "Long (15 min)"
    },
    techmino99_e: {
      title: "Tech VS 99",
      subtitle: "EASY",
      description: "99-player battle.\nThe last one standing wins!",
      rankReqs: [
        "Get 90th place",
        "Get 20th place",
        "Get 10th place",
        "Get 6th place",
        "Get 3rd place",
        "Get 1st place"
      ],
      difficulty: "Medium",
      length: "Long (20 min)"
    },
    techmino99_h: {
      title: "Tech VS 99",
      subtitle: "HARD",
      description: "99-player battle.\nThe last one standing wins!",
      rankReqs: [
        "Get 90th place",
        "Get 10th place",
        "Get 8th place",
        "Get 6th place",
        "Get 3rd place",
        "Get 1st place"
      ],
      difficulty: "Medium",
      length: "Long (20 min)"
    },
    techmino99_u: {
      title: "Tech VS 99",
      subtitle: "ULTIMATE",
      description: "99-player battle.\nThe last one standing wins!",
      rankReqs: [
        "Get 90th place",
        "Get 7th place",
        "Get 5th place",
        "Get 3rd place",
        "Get 2nd place",
        "Get 1st place"
      ],
      difficulty: "Hard",
      length: "Long (20 min)"
    },
    round_e: {
      title: "Turn-Based",
      subtitle: "EASY",
      description: "Take turns to play against the AI!",
      rankReqs: [
        "(impossible)",
        "Win",
        "Win in 182 pieces",
        "Win in 126 pieces",
        "Win in 91 pieces",
        "Win in 70 pieces",
      ],
      difficulty: "Medium",
      length: "Medium (5 min)"
    },
    round_n: {
      title: "Turn-Based",
      subtitle: "NORMAL",
      description: "Take turns to play against the AI!",
      rankReqs: [
        "(impossible)",
        "Win",
        "Win in 182 pieces",
        "Win in 126 pieces",
        "Win in 91 pieces",
        "Win in 70 pieces",
      ],
      difficulty: "Medium",
      length: "Medium (5 min)"
    },
    round_h: {
      title: "Turn-Based",
      subtitle: "HARD",
      description: "Take turns to play against the AI!",
      rankReqs: [
        "(impossible)",
        "Win",
        "Win in 182 pieces",
        "Win in 126 pieces",
        "Win in 91 pieces",
        "Win in 70 pieces",
      ],
      difficulty: "Tricky",
      length: "Medium (5 min)"
    },
    round_l: {
      title: "Turn-Based",
      subtitle: "LUNATIC",
      description: "Take turns to play against the AI!",
      rankReqs: [
        "(impossible)",
        "Win",
        "Win in 182 pieces",
        "Win in 126 pieces",
        "Win in 91 pieces",
        "Win in 70 pieces",
      ],
      difficulty: "Very Tricky",
      length: "Medium (5 min)"
    },
    round_u: {
      title: "Turn-Based",
      subtitle: "ULTIMATE",
      description: "Take turns to play against the AI!",
      rankReqs: [
        "(impossible)",
        "Win",
        "Win in 182 pieces",
        "Win in 126 pieces",
        "Win in 91 pieces",
        "Win in 70 pieces",
      ],
      difficulty: "Very Tricky",
      length: "Medium (5 min)"
    },
    big_n: {
      title: "Big",
      subtitle: "NORMAL",
      description: "Play in a 5×10 field!",
      rankReqs: [
        "20 lines",
        "100 lines",
        "150 lines",
        "200 lines",
        "200 lines in 3′00″",
        "200 lines in 2′00″"
      ],
      difficulty: "Easy",
      length: "Medium (5 min)"
    },
    big_h: {
      title: "Big",
      subtitle: "HARD",
      description: "Play in a 5×10 field!",
      rankReqs: [
        "10 lines",
        "50 lines",
        "100 lines",
        "200 lines",
        "200 lines in 3′00″",
        "200 lines in 2′00″"
      ],
      difficulty: "Medium",
      length: "Medium (5 min)"
    },
    master_n: {
      title: "Master",
      subtitle: "NORMAL",
      description: "For 20G beginners",
      rankReqs: [
        "Level 60",
        "Level 100",
        "Level 300",
        "Level 500",
        "Level 800",
        "Level 1000"
      ],
      difficulty: "Very Hard",
      length: "Medium (8 min)"
    },
    master_h: {
      title: "Master",
      subtitle: "HARD",
      description: "For 20G pros",
      rankReqs: [
        "Level 60",
        "Level 100",
        "Level 300",
        "Level 500",
        "Level 800",
        "Level 1000"
      ],
      difficulty: "Extreme",
      length: "Medium (6 min)"
    },
    master_m: {
      title: "Master",
      subtitle: "M21",
      description: "For 20G masters",
      rankReqs: [
        "5 lines",
        "30 lines",
        "70 lines",
        "100 lines",
        "140 lines",
        "200 lines"
      ],
      difficulty: "Extreme",
      length: "Short (4 min)"
    },
    master_final: {
      title: "Master",
      subtitle: "FINAL",
      description: "20G and beyond",
      rankReqs: [
        "Level 50",
        "Level 200",
        "Level 400",
        "Level 600",
        "Level 800",
        "Level 1000"
      ],
      difficulty: "Insane",
      length: "Medium (5 min)",
      featuredVideo: "https://www.youtube.com/embed/xdhs0WA4A4k"
    },
    master_ph: {
      title: "Master",
      subtitle: "PHANTASM",
      description: "???",
      rankReqs: [
        "26 pts. (Clear stage 2)",
        "42 pts. (Clear stage 3)",
        "62 pts. (Clear stage 4)",
        "162 pts. (Clear stage 6)",
        "226 pts. (Clear stage 7)",
        "260 pts. (Clear stage 9)"
      ],
      difficulty: "Insane",
      length: "Medium (7 min)",
      featuredVideo: "https://www.youtube.com/embed/9pLw_LqAErg"
    },
    master_g: {
      title: "Master",
      subtitle: "GRADED",
      description: "Get the highest grade you can!",
      rankReqs: [
        "---",
        "S1",
        "m1",
        "m8",
        "MM-",
        "TM+"
      ],
      difficulty: "Variable (Hard ~ Insane)",
      length: "Medium (8 min)"
    },
    master_ex: {
      title: "GrandMaster",
      subtitle: "EXTRA",
      description: "An eternity shorter than an instant",
      rankReqs: [
        "1.0 (C grade)",
        "3.0 (A grade)",
        "5.0 (S- grade)",
        "8.0 (High S+ grade)",
        "11.0 (Low U grade)",
        "14.0 (X+ grade)"
      ],
      difficulty: "Insane",
      length: "Constant, Short (60 sec)"
    },
    master_instinct: {
      title: "Master",
      subtitle: "INSTINCT",
      description: "What if the active piece becomes invisible?",
      rankReqs: [
        "Level 60",
        "Level 100",
        "Level 300",
        "Level 500",
        "Level 800",
        "Level 1000"
      ],
      difficulty: "Medium",
      length: "Medium (10 min)",
      featuredVideo: "https://www.youtube.com/embed/oaglL91j0DY"
    },
    strategy_e: {
      title: "Strategy",
      subtitle: "EASY",
      description: "Fast 20G decisions",
      rankReqs: [
        "26 lines",
        "60 lines",
        "120 lines",
        "150 lines",
        "170 lines",
        "200 lines"
      ],
      difficulty: "Very Hard",
      length: "Medium (10 min)"
    },
    strategy_h: {
      title: "Strategy",
      subtitle: "HARD",
      description: "Fast 20G decisions",
      rankReqs: [
        "16 lines",
        "40 lines",
        "70 lines",
        "120 lines",
        "160 lines",
        "200 lines"
      ],
      difficulty: "Very Hard",
      length: "Medium (5 min)"
    },
    strategy_u: {
      title: "Strategy",
      subtitle: "ULTIMATE",
      description: "Fast 20G decisions",
      rankReqs: [
        "10 lines",
        "20 lines",
        "40 lines",
        "80 lines",
        "150 lines",
        "200 lines"
      ],
      difficulty: "Extreme",
      length: "Short (4 min)"
    },
    strategy_e_plus: {
      title: "Strategy",
      subtitle: "EASY+",
      description: "Holdless Strategy!",
      rankReqs: [
        "26 lines",
        "60 lines",
        "120 lines",
        "150 lines",
        "170 lines",
        "200 lines"
      ],
      difficulty: "Very Hard",
      length: "Medium (9 min)"
    },
    strategy_h_plus: {
      title: "Strategy",
      subtitle: "HARD+",
      description: "Holdless Strategy!",
      rankReqs: [
        "16 lines",
        "40 lines",
        "70 lines",
        "120 lines",
        "160 lines",
        "200 lines"
      ],
      difficulty: "Very Hard",
      length: "Medium (5 min)"
    },
    strategy_u_plus: {
      title: "Strategy",
      subtitle: "ULTIMATE+",
      description: "Holdless Strategy!",
      rankReqs: [
        "10 lines",
        "20 lines",
        "40 lines",
        "80 lines",
        "150 lines",
        "200 lines"
      ],
      difficulty: "Very Hard",
      length: "Short (4 min)"
    },
    blind_e: {
      title: "Invisible",
      subtitle: "SLOW",
      description: "For beginners",
      rankReqs: [
        "1 line",
        "40 lines",
        "100 lines",
        "150 lines",
        "200 lines in 3′20″",
        "200 lines in 2′20″"
      ],
      difficulty: "Medium",
      length: "Medium (6 min)"
    },
    blind_n: {
      title: "Invisible",
      subtitle: "FAST",
      description: "For intermediates",
      rankReqs: [
        "1 line",
        "40 lines",
        "80 lines",
        "126 lines",
        "200 lines in 3′40″",
        "200 lines in 3′00″"
      ],
      difficulty: "Tricky",
      length: "Medium (6 min)"
    },
    blind_h: {
      title: "Invisible",
      subtitle: "INSTANT",
      description: "For the experienced",
      rankReqs: [
        "1 line",
        "40 lines",
        "90 lines",
        "150 lines",
        "200 lines in 4′00″",
        "200 lines in 3′00″"
      ],
      difficulty: "Very Tricky",
      length: "Medium (6 min)"
    },
    blind_l: {
      title: "Invisible",
      subtitle: "NO GHOST",
      description: "For professionals",
      rankReqs: [
        "1 line",
        "40 lines",
        "100 lines",
        "150 lines",
        "200 lines in 4′10″",
        "200 lines in 3′20″"
      ],
      difficulty: "Very Tricky",
      length: "Medium (7 min)"
    },
    blind_u: {
      title: "Invisible",
      subtitle: "NO FIELD",
      description: "Are you ready?",
      rankReqs: [
        "1 line",
        "10 lines",
        "26 lines",
        "50 lines",
        "75 lines",
        "100 lines"
      ],
      difficulty: "Extremely Tricky",
      length: "Medium (10 min)"
    },
    blind_wtf: {
      title: "Invisible",
      subtitle: "VOID",
      description: "You're not ready.",
      rankReqs: [
        "2 lines",
        "5 lines",
        "10 lines",
        "20 lines",
        "30 lines",
        "40 lines"
      ],
      difficulty: "Insanely Tricky",
      length: "Medium (10 min)"
    },
    classic_e: {
      title: "Classic",
      subtitle: "EASY",
      description: "A low-speed recreation of the game from the 80s",
      rankReqs: [
        "10 lines",
        "30 lines",
        "60 lines",
        "100 lines",
        "140 lines",
        "200 lines"
      ],
      difficulty: "Medium",
      length: "Long (15 min)"
    },
    classic_n: {
      title: "Classic",
      subtitle: "NORMAL",
      description: "A medium-speed recreation of the game from the 80s",
      versionInfo: "Commit 30ed417",
      rankReqs: [
        "1 line",
        "10 lines",
        "30 lines",
        "50 lines",
        "80 lines",
        "110 lines"
      ],
      difficulty: "Hard",
      length: "Medium (10 min)"
    },
    classic_h: {
      title: "Classic",
      subtitle: "HARD",
      description: "A medium-speed recreation of the game from the 80s",
      rankReqs: [
        "1 line",
        "30 lines",
        "60 lines",
        "100 lines",
        "140 lines",
        "200 lines"
      ],
      difficulty: "Very Hard",
      length: "Long (12 min)"
    },
    classic_l: {
      title: "Classic",
      subtitle: "LUNATIC",
      description: "A high-speed recreation of the game from the 80s",
      rankReqs: [
        "1 line",
        "30 lines",
        "60 lines",
        "100 lines",
        "140 lines",
        "200 lines"
      ],
      difficulty: "Extreme",
      length: "Medium (10 min)"
    },
    classic_u: {
      title: "Classic",
      subtitle: "ULTIMATE",
      description: "An extreme-speed recreation of the game from the 80s",
      rankReqs: [
        "(impossible)",
        "1 line",
        "3 lines",
        "6 lines",
        "10 lines",
        "15 lines"
      ],
      difficulty: "Insane",
      length: "Short (2 min)"
    },
    survivor_e: {
      title: "Survival",
      subtitle: "EASY",
      description: "How long can you survive?",
      rankReqs: [
        "5 waves",
        "15 waves",
        "30 waves",
        "45 waves",
        "60 waves",
        "100 waves"
      ],
      difficulty: "Medium",
      length: "Medium (10 min)"
    },
    survivor_n: {
      title: "Survival",
      subtitle: "NORMAL",
      description: "How long can you survive?",
      rankReqs: [
        "5 waves",
        "15 waves",
        "30 waves",
        "45 waves",
        "55 waves",
        "80 waves"
      ],
      difficulty: "Medium",
      length: "Medium (8 min)"
    },
    survivor_h: {
      title: "Survival",
      subtitle: "HARD",
      description: "How long can you survive?",
      rankReqs: [
        "5 waves",
        "15 waves",
        "30 waves",
        "45 waves",
        "60 waves",
        "90 waves"
      ],
      difficulty: "Hard",
      length: "Medium (7 min)"
    },
    survivor_l: {
      title: "Survival",
      subtitle: "LUNATIC",
      description: "How long can you survive?",
      rankReqs: [
        "5 waves",
        "15 waves",
        "30 waves",
        "55 waves",
        "80 waves",
        "110 waves"
      ],
      difficulty: "Very Hard",
      length: "Medium (8 min)"
    },
    survivor_u: {
      title: "Survival",
      subtitle: "ULTIMATE",
      description: "How long can you survive?",
      rankReqs: [
        "1 wave",
        "5 waves",
        "10 waves",
        "20 waves",
        "26 waves",
        "35 waves"
      ],
      difficulty: "Extreme",
      length: "Medium (6 min)"
    },
    attacker_h: {
      title: "Attacker",
      subtitle: "HARD",
      description: "Practice your attacking skills!",
      rankReqs: [
        "5 waves",
        "10 waves",
        "20 waves",
        "30 waves",
        "40 waves",
        "50 waves"
      ],
      difficulty: "Hard",
      length: "Medium (8 min)"
    },
    attacker_u: {
      title: "Attacker",
      subtitle: "ULTIMATE",
      description: "Practice your attacking skills!",
      rankReqs: [
        "5 waves",
        "10 waves",
        "20 waves",
        "30 waves",
        "40 waves",
        "50 waves"
      ],
      difficulty: "Very Hard",
      length: "Medium (8 min)"
    },
    defender_n: {
      title: "Defender",
      subtitle: "NORMAL",
      description: "Practice your defending skills!",
      rankReqs: [
        "3 waves",
        "10 waves",
        "40 waves",
        "70 waves",
        "100 waves",
        "120 waves"
      ],
      difficulty: "Hard",
      length: "Medium (10 min)"
    },
    defender_l: {
      title: "Defender",
      subtitle: "LUNATIC",
      description: "Practice your defending skills!",
      rankReqs: [
        "5 waves",
        "20 waves",
        "30 waves",
        "55 waves",
        "80 waves",
        "100 waves"
      ],
      difficulty: "Very Hard",
      length: "Medium (10 min)"
    },
    dig_h: {
      title: "Driller",
      subtitle: "HARD",
      description: "Digging practice!",
      rankReqs: [
        "5 lines",
        "20 waves",
        "50 waves",
        "80 waves",
        "110 waves",
        "150 waves"
      ],
      difficulty: "Hard",
      length: "Short (4 min)"
    },
    dig_u: {
      title: "Driller",
      subtitle: "ULTIMATE",
      description: "Digging practice!",
      rankReqs: [
        "5 lines",
        "20 waves",
        "50 waves",
        "80 waves",
        "110 waves",
        "150 waves"
      ],
      difficulty: "Very Hard",
      length: "Short (3 min)"
    },
    c4wtrain_n: {
      title: "C4W Training",
      subtitle: "NORMAL",
      description: "Infinite combos",
      rankReqs: [
        "10 lines",
        "30 lines",
        "60 lines",
        "100 lines in 1′20″",
        "100 lines in 50 sec",
        "100 lines in 32 sec"
      ],
      difficulty: "Easy",
      length: "Short (2 min)"
    },
    c4wtrain_l: {
      title: "C4W Training",
      subtitle: "LUNATIC",
      description: "Infinite combos",
      rankReqs: [
        "5 lines",
        "20 lines",
        "40 lines",
        "70 lines",
        "100 lines in 1′00″",
        "100 lines in 40 sec"
      ],
      difficulty: "Hard",
      length: "Short (2 min)"
    },
    pctrain_n: {
      title: "PC Training",
      subtitle: "NORMAL",
      description: "Perfect Clear practice",
      rankReqs: [
        "2 PCs",
        "10 PCs",
        "18 PCs",
        "26 PCs",
        "42 PCs",
        "60 PCs"
      ],
      difficulty: "Tricky",
      length: "Long (12 min)"
    },
    pctrain_l: {
      title: "PC Training",
      subtitle: "LUNATIC",
      description: "A harder Perfect Clear practice",
      rankReqs: [
        "3 PCs",
        "10 PCs",
        "18 PCs",
        "26 PCs",
        "42 PCs",
        "50 PCs"
      ],
      difficulty: "Very Tricky",
      length: "Medium (10 min)",
      featuredVideo: "https://www.youtube.com/embed/XoNR8v6GL10"
    },
    pc_n: {
      title: "PC Challenge",
      subtitle: "NORMAL",
      description: "Get PCs within 100 lines!",
      rankReqs: [
        "1 PC",
        "8 PCs",
        "12 PCs",
        "16 PCs",
        "20 PCs",
        "24 PCs"
      ],
      difficulty: "Tricky",
      length: "Medium (10 min)"
    },
    pc_h: {
      title: "PC Challenge",
      subtitle: "HARD",
      description: "Get PCs within 100 lines!",
      rankReqs: [
        "1 PC",
        "8 PCs",
        "12 PCs",
        "16 PCs",
        "20 PCs",
        "24 PCs"
      ],
      difficulty: "Tricky",
      length: "Medium (10 min)"
    },
    pc_l: {
      title: "PC Challenge",
      subtitle: "LUNATIC",
      description: "Get PCs within 100 lines!",
      rankReqs: [
        "1 PC",
        "8 PCs",
        "12 PCs",
        "16 PCs",
        "20 PCs",
        "24 PCs"
      ],
      difficulty: "Tricky",
      length: "Medium (10 min)"
    },
    pc_inf: {
      title: "PC Challenge",
      subtitle: "INFINITE",
      description: "Get as many PCs as you can!",
      rankReqs: [
        "5 PCs",
        "10 PCs",
        "20 PCs",
        "30 PCs",
        "40 PCs",
        "50 PCs"
      ],
      difficulty: "Extremely Tricky",
      length: "Unbounded, usually long (~15 min)"
    },
    tech_n: {
      title: "Tech B2B",
      subtitle: "NORMAL",
      description: "Try to keep the Back-to-Back chain!",
      rankReqs: [
        "Send 30 lines",
        "Send 60 lines",
        "Send 100 lines",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Tricky",
      length: "Short (3 min)"
    },
    tech_n_plus: {
      title: "Tech B2B",
      subtitle: "NORMAL+",
      description: "Spins & PCs only",
      rankReqs: [
        "Send 30 lines",
        "Send 60 lines",
        "Send 100 lines",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Very Tricky",
      length: "Short (3 min)"
    },
    tech_h: {
      title: "Tech B2B",
      subtitle: "HARD",
      description: "Try to keep the Back-to-Back chain!",
      rankReqs: [
        "Send 30 lines",
        "Send 60 lines",
        "Send 100 lines",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Tricky",
      length: "Short (3 min)"
    },
    tech_h_plus: {
      title: "Tech B2B",
      subtitle: "HARD+",
      description: "Spins & PCs only",
      rankReqs: [
        "Send 30 lines",
        "Send 60 lines",
        "Send 100 lines",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Very Tricky",
      length: "Short (3 min)"
    },
    tech_l: {
      title: "Tech B2B",
      subtitle: "LUNATIC",
      description: "Try to keep the Back-to-Back chain!",
      rankReqs: [
        "Send 30 lines",
        "Send 60 lines",
        "Send 100 lines",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Tricky",
      length: "Short (3 min)"
    },
    tech_l_plus: {
      title: "Tech B2B",
      subtitle: "LUNATIC+",
      description: "Spins & PCs only",
      rankReqs: [
        "Send 30 lines",
        "Send 60 lines",
        "Send 100 lines",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Very Tricky",
      length: "Short (3 min)"
    },
    tech_finesse: {
      title: "Tech Finesse",
      subtitle: "",
      description: "No finesse errors allowed!",
      rankReqs: [
        "Send 30 lines",
        "Send 60 lines",
        "Send 100 lines",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Tricky",
      length: "Short (3 min)"
    },
    tech_finesse_f: {
      title: "Tech Finesse",
      subtitle: "PLUS",
      description: "No normal clears nor finesse errors allowed!",
      rankReqs: [
        "Send 30 lines",
        "Send 60 lines",
        "Send 100 lines",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Very Tricky",
      length: "Short (3 min)"
    },
    tsd_e: {
      title: "TSD Challenge",
      subtitle: "EASY",
      description: "T-Spin Doubles only!",
      rankReqs: [
        "1 TSD",
        "4 TSDs",
        "10 TSDs",
        "15 TSDs",
        "18 TSDs",
        "20 TSDs"
      ],
      difficulty: "Tricky",
      length: "Medium (5 min)",
      featuredVideo: "https://www.youtube.com/embed/Dxh9WglgIiw"
    },
    tsd_h: {
      title: "TSD Challenge",
      subtitle: "HARD",
      description: "T-Spin Doubles only!",
      rankReqs: [
        "3 TSDs",
        "7 TSDs",
        "11 TSDs",
        "15 TSDs",
        "18 TSDs",
        "20 TSDs"
      ],
      difficulty: "Very Tricky",
      length: "Medium (5 min)"
    },
    tsd_u: {
      title: "TSD Challenge",
      subtitle: "ULTIMATE",
      description: "T-Spin Doubles only!",
      rankReqs: [
        "4 TSDs",
        "10 TSDs",
        "13 TSDs",
        "16 TSDs",
        "18 TSDs",
        "20 TSDs"
      ],
      difficulty: "Extremely Tricky",
      length: "Medium (5 min)",
      featuredVideo: "https://www.youtube.com/embed/BWlD4Kzk7B4"
    },
    backfire_n: {
      title: "Backfire",
      subtitle: "NORMAL",
      description: "Hold back the backfiring garbage lines!",
      rankReqs: [
        "Send 50 lines",
        "Send 100 lines",
        "Send 100 lines in 2′00″",
        "Send 100 lines in 1′30″",
        "Send 100 lines in 1′00″",
        "Send 100 lines in 45 sec"
      ],
      difficulty: "Medium",
      length: "Short (3 min)"
    },
    backfire_h: {
      title: "Backfire",
      subtitle: "HARD",
      description: "Hold back the backfiring garbage lines!",
      rankReqs: [
        "Send 50 lines",
        "Send 100 lines",
        "Send 100 lines in 2′10″",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′05″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Tricky",
      length: "Short (3 min)"
    },
    backfire_l: {
      title: "Backfire",
      subtitle: "LUNATIC",
      description: "Hold back the backfiring garbage lines!",
      rankReqs: [
        "Send 50 lines",
        "Send 100 lines",
        "Send 100 lines in 2′30″",
        "Send 100 lines in 1′50″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 55 sec"
      ],
      difficulty: "Tricky",
      length: "Short (3 min)"
    },
    backfire_u: {
      title: "Backfire",
      subtitle: "ULTIMATE",
      description: "Hold back the backfiring garbage lines!",
      rankReqs: [
        "Send 50 lines",
        "Send 100 lines",
        "Send 100 lines in 3′00″",
        "Send 100 lines in 2′00″",
        "Send 100 lines in 1′20″",
        "Send 100 lines in 1′00″"
      ],
      difficulty: "Very Tricky",
      length: "Short (3 min)"
    },
    sprintAtk: {
      title: "Sprint",
      subtitle: "100 ATTACK",
      description: "Send 100 lines!",
      rankReqs: [
        "Send 100 lines",
        "2′30″",
        "1′40″",
        "1′10″",
        "50 sec",
        "40 sec"
      ],
      difficulty: "Medium",
      length: "Short (3 min)"
    },
    sprintEff: {
      title: "Efficiency",
      subtitle: "40L",
      description: "Send as much attack as you can in 40 lines!",
      rankReqs: [
        "Clear 40 lines",
        "1 atk/line (~0.4 APP)",
        "2 atk/line (~0.8 APP)",
        "3 atk/line (~1.2 APP)",
        "4 atk/line (~1.6 APP)",
        "5 atk/line (~2.0 APP)"
      ],
      difficulty: "Very Tricky",
      length: "Short (3 min)"
    },
    spinren: {
      title: "Spin Combo",
      subtitle: "EFFICIENCY",
      description: "Spike in a blink",
      rankReqs: [
        "Clear 10 lines",
        "3 atk/line (~1.2 APP)",
        "6 atk/line (~2.4 APP)",
        "8 atk/line (~3.2 APP)",
        "9 atk/line (~3.6 APP)",
        "10 atk/line (~4.0 APP)"
      ]
    },
    zen: {
      title: "Zen",
      subtitle: "200L",
      description: "A 200-line run with no time limit",
      rankReqs: [
        "(impossible)",
        "10,000 score",
        "30,000 score",
        "60,000 score",
        "100,000 score",
        "126,000 score"
      ],
      difficulty: "Easy to clear, very tricky to master",
      length: "Medium (10 min)"
    },
    ultra: {
      title: "Ultra",
      subtitle: "EXTRA",
      description: "A 2-minute score attack",
      rankReqs: [
        "(impossible)",
        "6,200 score",
        "10,000 score",
        "26,000 score",
        "50,000 score",
        "62,000 score"
      ],
      difficulty: "Easy to clear, very hard to master",
      length: "Constant, Short (120 sec)",
      featuredVideo: "https://www.youtube.com/embed/6NHaGcdDqFo"
    },
    infinite: {
      title: "Infinite",
      subtitle: "",
      description: "Just a sandbox",
      difficulty: "N/A: No objectives",
      length: "Unbounded"
    },
    infinite_dig: {
      title: "Infinite",
      subtitle: "DIG",
      description: "Dig-diggin'-dug",
      difficulty: "N/A: No objectives",
      length: "Unbounded"
    },
    marathon_inf: {
      title: "Marathon",
      subtitle: "INFINITE",
      description: "Infinite marathon.",
      rankReqs: [
        "26 lines",
        "(impossible)",
        "(impossible)",
        "(impossible)",
        "(impossible)",
        "(impossible)",
      ],
      difficulty: "Variable (Easy ~ Impossible)",
      length: "Unbounded, usually very long (30 min)"
    },

    // Extra modes
    sprintFix: {
      title: "Sprint",
      subtitle: "NO LEFT/RIGHT",
      description: "40L with no left/right movement",
      rankReqs: [
        "5 lines",
        "10 lines",
        "25 lines",
        "40 lines",
        "40 lines in 7′00″",
        "40 lines in 4′20″"
      ],
      difficulty: "Very Tricky",
      length: "Medium (10 min)"
    },
    sprintLock: {
      title: "Sprint",
      subtitle: "NO ROTATIONS",
      description: "40L but you can't rotate the pieces",
      rankReqs: [
        "5 lines",
        "10 lines",
        "16 lines",
        "24 lines",
        "32 lines",
        "40 lines"
      ],
      difficulty: "Very Tricky",
      length: "Medium (10 min)"
    },
    sprintSmooth: {
      title: "Sprint",
      subtitle: "NO FRICTION",
      description: "40L with zero DAS and ARR",
      rankReqs: [
        "Clear 40 lines",
        "2′30″",
        "1′30″",
        "1′00″",
        "45 sec",
        "30 sec"
      ],
      difficulty: "Tricky",
      length: "Short (3 min)"
    },
    sprintSym: {
      title: "Sprint",
      subtitle: "SYMMETRY",
      description: "40L but your field must be symmetrical",
      rankReqs: [
        "Clear 40 lines",
        "4′00″",
        "2′30″",
        "2′00″",
        "1′30″",
        "1′00″"
      ],
      difficulty: "Extremely Tricky",
      length: "Medium (10 min)"
    },
    sprintMD: {
      title: "Sprint",
      subtitle: "MISDROP",
      description: "40L but random inputs happen",
      rankReqs: [
        "Clear 40 lines",
        "3′30″",
        "2′30″",
        "1′40″",
        "1′00″",
        "42 sec"
      ],
      difficulty: "Tricky",
      length: "Short (5 min)"
    },
    marathon_bfmax: {
      title: "Marathon",
      subtitle: "ULTIMATE",
      description: "200-line marathon, but you can only do non-combo singles",
      rankReqs: [
        "20 lines",
        "80 lines",
        "150 lines",
        "200 lines",
        "200 lines in 10′00″",
        "200 lines in 6′40″"
      ],
      difficulty: "Extremely Tricky",
      length: "Long (15 min)"
    },
    clear_rush: {
      title: "Clear Rush",
      subtitle: "NORMAL",
      description: "All-spin tutorial!\n(scrapped mode)",
      versionInfo: "v0.17.0 - v0.17.3",
      rankReqs: [
        "(impossible)",
        "Drop 1 piece",
        "(impossible)",
        "(impossible)",
        "(impossible)",
        "(impossible)"
      ],
      difficulty: "Extremely Trivial",
      length: "Near-instant (1 sec)"
    },
    rhythm_e: {
      title: "Rhythm",
      subtitle: "EASY",
      description: "200-line low-tempo rhythmic marathon",
      versionInfo: "v0.13.2 - v0.16.4",
      rankReqs: [
        "20 lines",
        "50 lines",
        "100 lines",
        "140 lines",
        "170 lines",
        "200 lines"
      ],
      difficulty: "Hard",
      length: "Medium (8 min)"
    },
    rhythm_h: {
      title: "Rhythm",
      subtitle: "HARD",
      description: "200-line medium-tempo rhythmic marathon",
      versionInfo: "v0.13.2 - v0.16.4",
      rankReqs: [
        "20 lines",
        "50 lines",
        "100 lines",
        "140 lines",
        "170 lines",
        "200 lines"
      ],
      difficulty: "Very Hard",
      length: "Medium (6 min)"
    },
    rhythm_u: {
      title: "Rhythm",
      subtitle: "ULTIMATE",
      description: "200-line high-tempo rhythmic marathon",
      versionInfo: "v0.13.2 - v0.16.4",
      rankReqs: [
        "20 lines",
        "50 lines",
        "100 lines",
        "140 lines",
        "170 lines",
        "200 lines"
      ],
      difficulty: "Extreme",
      length: "Short (5 min)"
    },
    techrash_n: {
      title: "Techrash",
      subtitle: "NORMAL",
      description: "Maintain your Techrash streak!",
      rankReqs: [
        "5 Techrashes",
        "15 Techrashes",
        "30 Techrashes",
        "50 Techrashes",
        "75 Techrashes",
        "100 Techrashes"
      ],
      difficulty: "Hard",
      length: "Very Long (30 min)"
    },
    techrash_u: {
      title: "Techrash",
      subtitle: "ULTIMATE",
      description: "Maintain your Techrash streak!",
      rankReqs: [
        "2 Techrashes",
        "4 Techrashes",
        "8 Techrashes",
        "12 Techrashes",
        "16 Techrashes",
        "20 Techrashes"
      ],
      difficulty: "Very Hard",
      length: "Medium (10 min)"
    },

    // Outdated modes
    // https://gist.github.com/Not-A-Normal-Robot/5d08da1ad9db07ba590fa67a47898668
    tech_finesse_lock: { // removed due to unportability
      title: "Tech Finesse",
      subtitle: "LOCK",
      description: "No finesse errors, combined with limited inputs!",
      versionInfo: "9769b33 - d3e4d7e",
      rankReqs: [
        "Send 30 lines",
        "Send 60 lines",
        "Send 100 lines",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Tricky",
      length: "Short (3 min)"
    },
    tech_finesse_lock_f: { // removed due to unportability
      title: "Tech Finesse",
      subtitle: "LOCK PLUS",
      description: "No normal clears nor finesse errors combined with limited inputs!",
      versionInfo: "9769b33 - d3e4d7e",
      rankReqs: [
        "Send 30 lines",
        "Send 60 lines",
        "Send 100 lines",
        "Send 100 lines in 1′40″",
        "Send 100 lines in 1′10″",
        "Send 100 lines in 50 sec"
      ],
      difficulty: "Very Tricky",
      length: "Short (3 min)"
    },
    stack_v1_20l: {
      title: "Stack (v1)",
      subtitle: "20L",
      description: "Pack them!",
      versionInfo: "v0.16.0",
      rankReqs: [
        "---",
        "44 pieces",
        "47 pieces",
        "49 pieces",
        "52 pieces",
        "55 pieces",
      ],
      difficulty: "Medium",
      length: "Short (1 min)"
    },
    stack_v1_40l: {
      title: "Stack (v1)",
      subtitle: "40L",
      description: "Pack them!",
      versionInfo: "v0.16.0",
      rankReqs: [
        "---",
        "70 pieces",
        "78 pieces",
        "83 pieces",
        "87 pieces",
        "90 pieces",
      ],
      difficulty: "Medium",
      length: "Short (2 min)"
    },
    stack_v1_100l: {
      title: "Stack (v1)",
      subtitle: "100L",
      description: "Pack them!",
      versionInfo: "v0.16.0",
      rankReqs: [
        "---",
        "180 pieces",
        "190 pieces",
        "200 pieces",
        "208 pieces",
        "215 pieces"
      ],
      difficulty: "Medium",
      length: "Short (5 min)"
    },
    stack_v2_e: {
      title: "Stack (v2)",
      subtitle: "EASY",
      description: "Pack them!",
      versionInfo: "v0.16.1 - v0.16.2",
      rankReqs: [
        "26 holes or less",
        "10 holes or less",
        "5 holes or less",
        "2 holes or less",
        "1 hole or less",
        "No holes"
      ],
      difficulty: "Medium",
      length: "Short (1 min)"
    },
    stack_v2_h: {
      title: "Stack (v2)",
      subtitle: "HARD",
      description: "Pack them!",
      versionInfo: "v0.16.1 - v0.16.2",
      rankReqs: [
        "62 holes or less",
        "26 holes or less",
        "10 holes or less",
        "4 holes or less",
        "2 holes or less",
        "No holes"
      ],
      difficulty: "Tricky",
      length: "Short (2 min)"
    },
    stack_v2_u: {
      title: "Stack (v2)",
      subtitle: "ULTIMATE",
      description: "Pack them!",
      versionInfo: "v0.16.1 - v0.16.2",
      rankReqs: [
        "126 holes or less",
        "62 holes or less",
        "26 holes or less",
        "10 holes or less",
        "5 holes or less",
        "2 holes or less"
      ],
      difficulty: "Very Tricky",
      length: "Short (4 min)"
    },
    stack_v3_e: {
      title: "Stack (v3)",
      subtitle: "EASY",
      description: "Pack them!",
      versionInfo: "v0.16.4",
      rankReqs: [
        "30 lines",
        "90 lines",
        "120 lines",
        "150 lines",
        "175 lines",
        "200 lines"
      ],
      difficulty: "Medium",
      length: "Medium (8 min)"
    },
    stack_v3_h: {
      title: "Stack (v3)",
      subtitle: "HARD",
      description: "Pack them!",
      versionInfo: "v0.16.4",
      rankReqs: [
        "20 lines",
        "35 lines",
        "50 lines",
        "60 lines",
        "70 lines",
        "80 lines"
      ],
      difficulty: "Tricky",
      length: "Short (5 min)"
    },
    stack_v3_u: {
      title: "Stack (v3)",
      subtitle: "ULTIMATE",
      description: "Pack them!",
      versionInfo: "v0.16.4",
      rankReqs: [
        "10 lines",
        "20 lines",
        "30 lines",
        "45 lines",
        "50 lines",
        "60 lines"
      ],
      difficulty: "Very Tricky",
      length: "Short (5 min)"
    },
    stack_v4_e: {
      title: "Stack (v4)",
      subtitle: "EASY",
      description: "Pack them!",
      versionInfo: "v0.16.5 - v0.17.4",
      featuredVideo: "https://www.youtube.com/embed/gheifZQt6tk",
      difficulty: "Medium",
      length: "Unbounded, usually medium (~10 min)"
    },
    stack_v4_u: {
      title: "Stack (v4)",
      subtitle: "ULTIMATE",
      description: "Pack them!",
      versionInfo: "v0.16.5 - v0.17.4",
      difficulty: "Very Tricky",
      length: "Unbounded, usually short (~5 min)"
    },
    stack_e: {
      title: "Stack (v5)",
      subtitle: "EASY",
      description: "Pack them!",
      versionInfo: "v0.17.5+",
      difficulty: "Medium",
      length: "Unbounded, usually medium (~10 min)"
    },
    stack_u: {
      title: "Stack (v5)",
      subtitle: "ULTIMATE",
      description: "Pack them!",
      versionInfo: "v0.17.5+",
      difficulty: "Very Tricky",
      length: "Unbounded, usually short (~5 min)"
    },

    // Techmino UE modes
    // https://github.com/Another-Soul/Techmino-Unofficial-Expansion
    master_death: {
      title: "Master",
      subtitle: "DEATH",
      description: "Fast speed mode! Can you break the lv500 barrier?",
      versionInfo: "Unofficial Expansion",
      rankReqs: [
        "Level 120",
        "Level 200",
        "Level 300",
        "Level 500",
        "Level 1000",
        "Level 1000 in 6′06″"
      ],
      difficulty: "Very Hard",
      length: "Medium (8 min)"
    },
    master_phantom: { // not to be confused with Master PHANTASM
      title: "Master",
      subtitle: "PHANTOM",
      description: "The locked blocks are invisible. What will you do?",
      versionInfo: "Unofficial Expansion",
      rankReqs: [
        "Level 100",
        "Level 200",
        "Level 300",
        "level 500",
        "Level 800",
        "Level 1000"
      ],
      difficulty: "Insane",
      length: "Medium (8 min)"
    },

    // Techmino WTF modes
    // https://github.com/MelloBoo44/Techmino-WTF
    sprint_40l_math: {
      title: "Sprint",
      subtitle: "40L MATH",
      description: "Clear 40 lines while doing math!",
      versionInfo: "Techmino WTF mod",
      rankReqs: [
        "Clear 40 lines",
        "3′20″",
        "2′15″",
        "1′50″",
        "1′35″",
        "1′20″"
      ],
      difficulty: "Medium",
      length: "Short (3 min)"
    },
    wtf: {
      title: "wtf",
      subtitle: "",
      description: "Flashing lights warning!",
      versionInfo: "Techmino WTF mod",
      rankReqs: [
        "(impossible)",
        "1 Rank",
        "2 Rank",
        "3 Rank",
        "4 Rank",
        "5 Rank"
      ],
      difficulty: "Very Hard",
      length: "Short (4 min)"
    },
    wtfv2: {
      title: "wtf",
      subtitle: "v2",
      description: "Flashing lights warning! (unfinished mode)",
      versionInfo: "Techmino WTF mod",
      rankReqs: [
        "(impossible)",
        "1 Rank",
        "2 Rank",
        "3 Rank",
        "4 Rank",
        "5 Rank"
      ],
      difficulty: "Extreme",
      length: "Short (5 min)"
    },
    stack_wtf: {
      title: "Stack",
      subtitle: "WTF",
      description: "Minimum zone requirement increases every zone!",
      versionInfo: "Techmino WTF mod",
      rankReqs: [
        "18 lines",
        "36 lines",
        "59 lines",
        "105 lines",
        "132 lines",
        "160 lines"
      ],
      difficulty: "Very Tricky",
      length: "Medium (10 min)"
    },
    lockout: {
      title: "Lockout",
      subtitle: "",
      description: "Clear randomly-selected types of clears quickly!",
      versionInfo: "Techmino WTF mod",
      rankReqs: [
        "Complete all objectives in 2′00″",
        "1′40″",
        "1′30″",
        "1′15″",
        "1′00″",
        "50 sec"
      ],
      difficulty: "Tricky",
      length: "Short (5 min)"
    },
    round_wtf: {
      title: "Turn-Based",
      subtitle: "WTF",
      description: "Only 4 pieces per turn!",
      versionInfo: "Techmino WTF mod",
      rankReqs: [
        "(impossible)",
        "Win the battle",
        "Win the battle in 182 pieces",
        "Win the battle in 126 pieces",
        "Win the battle in 91 pieces",
        "Win the battle in 70 pieces"
      ],
      difficulty: "Extremely Tricky",
      length: "Medium (10 min)"
    },
    scanner_l: {
      title: "Scanner",
      subtitle: "LUNATIC",
      description: "Zone lines clear away after a set number of pieces! Originally by hanamielle.",
      versionInfo: "Techmino WTF mod",
      rankReqs: [
        "(impossible)",
        "Clear 40 lines in 1′10″",
        "Clear 40 lines in 1′00″",
        "Clear 40 lines in 50 sec",
        "Clear 40 lines in 45 sec",
        "Clear 40 lines in 40 sec"
      ],
      difficulty: "Tricky",
      length: "Short (2 min)"
    },
    solo_wtf: {
      title: "Battle",
      subtitle: "WTF",
      description: "Send as many lines as you can!",
      versionInfo: "Techmino WTF mod",
      rankReqs: [
        "---",
        "Send 50 lines",
        "Send 65 lines",
        "Send 75 lines",
        "Send 90 lines",
        "Send 100 lines"
      ],
      difficulty: "Extremely Tricky",
      length: "Short (1 min)"
    },
    backfire_wtf: {
      title: "Backfire",
      subtitle: "WTF",
      description: "Multiplied backfire!",
      versionInfo: "Techmino WTF mod",
      rankReqs: [
        "Send 50 lines",
        "Send 100 lines",
        "Send 100 lines in 3′00″",
        "Send 100 lines in 2′00″",
        "Send 100 lines in 1′20″",
        "Send 100 lines in 1′00″"
      ],
      difficulty: "Very Tricky",
      length: "Short (5 min)"
    },
    confusion: {
      title: "Confusion",
      subtitle: "",
      description: "?????",
      versionInfo: "Techmino WTF mod",
      difficulty: "Very Hard",
      length: "Unbounded, usually short (~3 min)"
    },
    cascade: {
      title: "Cascade",
      subtitle: "",
      description: "On death, individual minos fall!",
      versionInfo: "Techmino WTF mod",
      difficulty: "Medium",
      length: "Unbounded, usually short (~3 min)"
    },
  },
  cookies: {
    tabTitle: "Techmino Hub - Cookie Info",
    title: "Cookies",
    description: `md_
For a very short time during development, a cookie was used to store the user's language preference.  
However, this has found to be unnecessary and has been removed.  
We do not expect there to be any cookies used on this site, but just to make sure, we have included a cookie detector below.`,
    cookieDetect: {
      none: "We have detected no cookies on your device. This is expected behavior.",
      some: "We have detected some cookies on your device, listed below.",
      noscript: "You cannot scan for cookies with JavaScript disabled.",
      error: "An error occurred while scanning for cookies.",
    }
  },
  signIn: {
    tabTitle: "Techmino Hub - Sign In",
    title: "Sign In",
    ruleNote: "By logging into our website, you agree to our {0} and {1}.",
    ruleNoteRule: "Site Rules",
    ruleNotePriv: "Privacy Policy",
    oauth: {
      discord: "Sign In with Discord",
    },
    noscriptWarn: "You cannot sign in with JavaScript disabled.",
    alreadySignedIn: "You are already signed in!",
    errorTimeout: `Sign in error: Supabase authentication timed out. Press OK to return to the home page.`,
  },
  leaderboard: {
    tabTitle: "Leaderboards - Techmino Hub",
    title: "Leaderboards",
    noSubmissions: "No submissions found.",
    submit: "Submit a run",
    loading: "Loading...",
    null: "N/A",
    entryNumber: "Displaying entries {start} to {end}",
    pagePrev: "󰄚 Previous",
    pageNext: "Next 󰄛",
    pageFull: "See more...",
    go: "Go",
    header: {
      attack: "Attack",
      combo: "Combo",
      dig_quad: "Lines Dug",
      efficiency: "Efficiency",
      height: "Height",
      holes: "Holes",
      ko: "Knockouts",
      lines: "Lines",
      masterExGrade: "Grade",
      masterGGrade: "Grade",
      masterLevel: "Levels",
      masterPhPoints: "Points",
      pc: "PCs",
      pieces: "Pieces",
      placement: "Placement",
      score: "Score",
      time: "Time",
      tsd: "T-Spin Doubles",
      wave: "Waves",
      wtfRank: "Rank",
  
      lbRank: "#",
      player: "Player",
      date: "Replay Date",
      submitDate: "Submit Date",
      details: "Details",
      mode: "Game Mode"
    },
    scoreDisp: {
      efficiency: ({ named }) => {
        return `${named('value')} atk/line`;
      },
      height: ({ named }) => {
        return `${named('value')} minoes`;
      },
      masterExGrade: ({ named }) => {
        const val = named('value') as number;
        const idx = Math.floor(val / 10);

        return [
          "D","C","B","A","A+","S-","S","S+","S+",
          "SS","SS","U","U","X","X+"
        ][idx];
      },
      masterGGrade: ({ named }) => {
        const idx = named('value') as number;

        if(idx < 10) {
          return (10 - idx).toString();
        } else if(idx < 19) {
          return "S" + (idx - 9);
        } else if(idx < 28) {
          return "m" + (idx - 18);
        } else if(idx < 41) {
          return [
            "M", "MK", "MV", "MO",
            "MM-", "MM", "MM+",
            "GM-", "GM", "GM+",
            "TM-", "TM", "TM+"
          ][idx - 28];
        } else {
          return "TM+" + (idx - 39);
        }
      },
      placement: ({ named }) => {
        return `#${named('value')}`;
      },
      score: ({ named }) => {
        return (named('value') as number).toLocaleString('en-US');
      },
      time: ({ named }) => {
        const timeInSeconds = named('value') as number;
        
        const years = Math.floor(timeInSeconds / 31536000);
        let remainderSeconds = timeInSeconds % 31536000;

        const days = Math.floor(remainderSeconds / 86400);
        remainderSeconds %= 86400;

        const hours = Math.floor(remainderSeconds / 3600);
        remainderSeconds %= 3600;

        const minutes = Math.floor(remainderSeconds / 60);
        const seconds = remainderSeconds % 60;

        if(timeInSeconds < 60) {
          // 12.345″

          return `${timeInSeconds.toFixed(3)}″`;
        } else if(timeInSeconds < 3600) {
          // 1′23.456″
          const paddedSecs = seconds.toFixed(3).padStart(6, '0');

          return `${minutes}′${paddedSecs}″`;
        } else if(timeInSeconds < 86400) {
          // 12:34′56.78″

          const paddedMins = minutes.toString().padStart(2, '0');
          const paddedSecs = seconds.toFixed(2).padStart(5, '0');

          return `${hours}:${paddedMins}′${paddedSecs}″`;
        } else if(timeInSeconds < 31536000) {
          // 1d 12:34′56″

          const paddedMins = minutes.toString().padStart(2, '0');
          const paddedSecs = seconds.toFixed(0).padStart(2, '0');

          return `${days}d ${hours}:${paddedMins}′${paddedSecs}″`;
        } else {
          // 1y 23d 12:34′56″

          const paddedMins = minutes.toString().padStart(2, '0');
          const paddedSecs = seconds.toFixed(0).padStart(2, '0');

          return `${years}y ${days}d ${hours}:${paddedMins}′${paddedSecs}″`;
        }
      },
      date: ({ named }) => {
        return new Date(named('value') as string).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
        });
      },
      submitDate: ({ named }) => {
        return new Date(named('value') as string).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
        });
      },
    },
    filters: {
      gameMode: "Game mode",
      validity: "Filter by validity",
      limit: "Entries per page",
    },
    validity: {
      Unverified: "Unverified",
      Verified: "Verified",
      Suspicious: "Suspicious",
      Rejected: "Rejected",
      'Tool-assisted': "Tool-assisted",
    }
  },
  profile: {
    tabTitle: "{username}'s Profile - Techmino Hub",
    avy: "Avatar",
    edit: "Edit profile",
    section: {
      latestSubmissions: "Latest Submissions"
    },
    state: {
      Normal: "Good standing",
      Banned: "Banned",
      Unverified: "Unverified"
    },
    role: {
      User: "User",
      Verifier: "Verifier",
      Administrator: "Administrator"
    },
    actions: {
      title: "Actions",
      setState: "Set account state",
      setRole: "Set account role",
      set: "Set",
    }
  },
  account: {
    tabTitle: "Account - Techmino Hub",
    title: "Account Settings",
    noscriptWarn: "You cannot change your account settings with JavaScript disabled.",
    loading: "Loading...",
    loggedOut: "You need to be logged in to change your account settings.",
    stateBanned: "You cannot change your account settings while banned.",
    stateUnverified: "You cannot change your account settings before you're verified.",
    changeAvy: "Change avatar",
    username: "Username",
    bio: "Bio",
    bioPlaceholder: "Write a short bio about yourself...",
    errNotLoaded: "You set your avatar a little too early. Please try again after the page has fully loaded.",
    errAvy: "An error occurred while uploading your avatar. More details can be found in the console.",
    avyTooSmall: "To help users stay safe, we require avatars to be at least 32 KB in size.",
    avyTooBig: "Your avatar is too big. Please upload an image that is 512 KB or smaller.",
    errProfile: "An error occurred while updating your profile. More details can be found in the console.",
    nsfwWarn: "We detected inappropriate content in your avatar. This is against the rules. Please change it into something more appropriate.",
    save: "Save changes",
    deleteLink: "I want to delete my account."
  },
  accountDelete: {
    tabTitle: "Account Deletion - Techmino Hub",
    title: "Account Deletion",
    loading: "Loading...",
    notSignedIn: "You need to log into your account before you can delete it.",
    desc: `md_You are about to __delete your Techmino Hub account ({username}).__  
Are you SURE you want to do this?  
After you delete it, __there is no going back.__`,
    instruction: "To confirm account deletion, please retype the following phrase exactly:",
    confirmPhrase: "Yes, do as I say!",
    placeholder: "Type it here...",
    cancel: "Nevermind, go back",
    confirm: "DELETE ACCOUNT",
    success: "Your Techmino Hub account has been successfully deleted.",
    noscriptWarn: "You cannot delete your account with JavaScript disabled.",
  },
  submission: {
    tabTitle: "Submission for {mode} - Techmino Hub",
    title: "Submission Information",
    loading: "Loading...",
    fields: {
      author: "Submitted by {0}",
      gameMode: "Game mode: {0}",
      score: "{0}: {1}",
      replayDate: "Played on {0}",
      uploadDate: "Uploaded on {0}",
      replayData: "Replay string: {0}",
      proof: "Additional proof was provided by the submitter: {0}"
    },
    validityInfo: {
      Unverified: "This submission has not been verified.",
      Verified: "This submission has been checked and was found to be legitimate.",
      Suspicious: "This submission has been checked and may be illegitimate.",
      Rejected: "This submission has been deemed illegitimate by verifiers.",
      'Tool-assisted': "This submission is a Tool-Assisted Superplay and is not comparable to human runs."
    },
    copyReplay: "Copy replay",
    replayCopied: "Replay copied!",
    analysis: {
      title: "Replay Analysis",
      parsed: "Parsed replay data: {0}",
      fingerprint: "Replay input fingerprint: {0}",
      fingerprintDesc: "Input fingerprints are determined by the mean and standard deviation of the lengths of each input type.",
      noCanvas: "Your browser does not support canvases.",
      controls: "Ctrl+scroll or pinch to zoom, drag to pan",
      inputGraph: {
        title: "Input Length Graph",
        label: {
          0: "All",
          1: "Move Left",
          2: "Move Right",
          3: "Rotate Clockwise",
          4: "Rotate Counterclockwise",
          5: "Rotate 180",
          6: "Hard Drop",
          7: "Soft Drop",
          8: "Hold",
          9: "Function 1",
          10: "Function 2",
          11: "Instant Left",
          12: "Instant Right",
          13: "Sonic Drop",
          14: "Down 1",
          15: "Down 4",
          16: "Down 10",
          17: "Left Drop",
          18: "Right Drop",
          19: "Left Zangi",
          20: "Right Zangi"
        }
      },
      kpsGraph: {
        title: "Keypress Rate Graph",
        xAxis: "Replay time",
        yAxis: "Keys per second"
      }
    },
    actions: {
      title: "Actions",
      edit: "Edit",
      validate: "Set validity",
      validateFailed: "Failed to set validity: {error}",
      delete: "Delete submission",
      deleteConfirm: "Click again to DELETE",
      deleteFailed: "Failed to delete submission: {error}",
      deleteSuccess: "Successfully deleted submission",
    }
  },
  submit: {
    tabTitle: "Run Submission - Techmino Hub",
    title: "Submit your run",
    scoreDesc: "If you can, please enter the information below from the in-game leaderboards, and not from the replay stats.",
    noscriptWarn: "You cannot submit your run with JavaScript disabled.",
    loading: "Loading...",
    loggedOut: "You need to log in before you can submit your run.",
    badState: {
      Banned: "You may not submit runs because you are banned.",
      Unverified: "You may not submit runs until you are manually verified by verifiers."
    },
    field: {
      time: "Time in seconds",
    },
    transform: {
      /**
       * Transform user input into a specified format.
       * For example, if the user inputs a grade of "TM+", 
       * it should be converted into a grade index of 40.
       * If the input is invalid, `null` should be returned.
       */
      masterGGrade: ({ named }) => {
        let val = (named('value') as string)
          .toLowerCase()
          .replace(/\s+/g, '');
        
        const map = new Map([
          ["10", 0], ["9", 1], ["8", 2], ["7", 3], ["6", 4],
          ["5",  5], ["4", 6], ["3", 7], ["2", 8], ["1", 9],

          ["s1", 10], ["s2", 11], ["s3", 12], ["s4", 13], ["s5", 14],
          ["s6", 15], ["s7", 16], ["s8", 17], ["s9", 18],
          
          ["m1", 19], ["m2", 20], ["m3", 21], ["m4", 22], ["m5", 23],
          ["m6", 24], ["m7", 25], ["m8", 26], ["m9", 27],
          
          ["m", 28], ["mk", 29], ["mv", 30], ["mo", 31],
          
          ["mm-", 32], ["mm", 33], ["mm+", 34],
          ["gm-", 35], ["gm", 36], ["gm+", 37],
          ["tm-", 38], ["tm", 39], ["tm+", 40],
          
          ["master", 28], ["masterk", 29], ["masterv", 30], ["mastero", 31],
          ["masterm-", 32], ["masterm", 33], ["masterm+", 34],
          ["grandmaster-", 35], ["grandmaster", 36], ["grandmaster+", 37],
          ["techmaster-", 38], ["techmaster", 39], ["techmaster+", 40]
        ]);

        if(map.has(val)) {
          return map.get(val)?.toString() ?? "0";
        }

        if(val.startsWith("tm+") || val.startsWith("techmaster+")) {
          if(val.startsWith("tm+")) {
            val = val.replace("tm+", "");
          } else {
            val = val.replace("techmaster+", "");
          }

          if(!isNaN(parseInt(val))) {
            const num = parseInt(val);
            return (39 + num).toString();
          }
        }

        return null;
      },
    },
    gameMode: "Game mode",
    importReplay: "Import from replay",
    placeholder: "Input here...",
    parsedAs: "Parsed as {value}",
    invalidInput: "Invalid input",
    invalidReplay: "Invalid replay",
    replayDate: "When was the run played? (UTC)",
    imported: "Imported successfully",
    proof: "If you have any additional proof for your submission, enter them below. It can take the form of a video, a screenshot, or anything else that can help verify your run. This will be required if you don't provide a replay.",
    isTAS: "This is a Tool-Assisted Speedrun",
    errUnknown: "Unknown error",
    errorIncomplete: "Failed to create submission. Are you sure you filled out everything correctly?",
    errorSub: "Error uploading submission: {error}",
    errorRep: "Error uploading replay: {error}",
    submit: "Submit",
  },
  rulesTabTitle: "Rules - Techmino Hub",
  rules: `md_
# Site Rules
By making an account on this site, you agree to the rules below.

## 1. **Respect everyone.**
Be kind and respectful to everyone.  
This means no harassment, hate speech, threats, discrimination, doxxing, and the like.

## 2. **No NSFW content.**
This applies to profile pictures, usernames, and any content you submit.

## 3. **No controversial topics.**
We want this site to be a place for submitting your best runs, not about starting arguments.

## 4. **No spamming/advertising.**
If you advertise something in your run description, we will remove it.

## 5. **No cheating or spoofing runs.**
If you use TAS tools in your runs, **please mark it as a TAS run.**  
We value honesty and integrity in your submissions.

## 6. **Use common sense.**
Do not perform illegal activities on this site.  
If you find a loophole in the rules, please report it to us. Do not exploit it.

----------------------

If you violate any of these rules, we may take appropriate action depending on the severity.  
We reserve the right to change these rules at any time.  
If you have any questions, contact us on the [official Techmino Discord server](https://discord.gg/f9pUvkh) or on the [GitHub discussion page](https://github.com/techmino-hub/techmino-hub-source-code/discussions).`,
  privacyTabTitle: "Privacy Policy - Techmino Hub",
  privacy: `md_
# Privacy Policy
**We will never sell your personal data to third parties.**  

By querying our database, be it through using the website or calling our API,
**you agree to [Supabase's privacy policy](https://supabase.com/privacy)**,
as we use Supabase for our database.  
If you disagree with this policy, **feel free to disable JavaScript**.  
Database querying will not work, but you can still use most of the site.  
The methods to disable JavaScript vary from browser to browser, so please look up how to do it for your specific browser.  

By logging into our website through OAuth, **you agree to the OAuth provider's privacy policy**.  
For example, if you log in through Discord, you agree to Discord's privacy policy.

If you have any questions, contact us on the [official Techmino Discord server](https://discord.gg/f9pUvkh) or on the [GitHub discussion page](https://github.com/techmino-hub/techmino-hub-source-code/discussions).`,
} as LangEntry;