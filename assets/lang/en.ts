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
      'what-is-techmino': {
        question: "What is Techmino?",
        answer: 
         `md_Techmino is a block-stacking game originally made by MrZ, along with
          several improvements by the open-source community. The game is made
          using Love2D. It has many game modes, including Sprint, Marathon,
          VS, a fully-customizable custom mode, and more!`
      },
      'is-techmino-open-source': {
        question: "Is Techmino open-source?",
        answer:
         `md_Yes. Techmino is licensed under the LGPL-3.0 license.
          You can find the source code [here](https://github.com/26F-Studio/Techmino).`
      },
      'how-to-download': {
        question: "How do I get/download the game?",
        answer:
         `md_1. Get the game [from GitHub releases](https://github.com/26F-Studio/Techmino/releases).  
2. Download the correct file based on your OS.  
3. Extract compressed files as necessary.  
4. Run the executable.`
      },
      'supported-os': {
        question: "Which OSes are supported?",
        answer:
         `md_Techmino can be run on the following platforms:  
- Windows  
- Mac  
- Linux (except ARM-based devices)  
- Android  
- iOS*  
- Probably other platforms, if they support [LÖVE](https://love2d.org/), the game engine used by Techmino.
(Someone in the Discord had limited success with a Nintendo Switch.)
         
*see the next FAQ entry for details.`
      },
      'cant-find-app-store': {
        question: "Why can't I find Techmino in the App Store (iOS)?",
        answer:
         `md_Techmino has received a warning about Copyright infringement from The Tetris Company.  
          Techmino is no longer available on the App Store.  
          A TestFlight was made for Techmino, but unfortunately, the maximum number of members
          had been reached, and therefore, you can't download Techmino on iOS anymore.  
          We apologize for the inconvenience. If it says the beta isn't accepting more testers,
          unfortunately, it is not available at this time.  
          You may want to check the next FAQ entry for more information.`
      },
      'testflight-full': {
        question: "I want to play Techmino on iOS or iPadOS without jailbreaking, but the TestFlight limit is full or the TestFlight build has expired. What should I do?",
        answer:
         `md_You can try to manually install the \`.ipa\` files from GitHub using Sideloadly:
1. Get the \`.ipa\` files from [the GitHub releases page](https://github.com/26F-Studio/Techmino/releases).  
   Find the version you want to install on this page, and then download “Techmino_iOS.ipa”.
2. [Download and install Sideloadly](https://sideloadly.io/). This application is available for Microsoft Windows and macOS.
3. Connect your iPhone/iPad/iPod touch to your computer with a USB cable.
4. Drag the downloaded \`.ipa\` file into the Sideloadly window.
5. Select your device, enter your Apple ID email address, and click “Start”.
6. Once the application is installed, go to Settings on your device, then General → VPN & Device Management (or Profiles & Device Management), and trust the profile you just installed.

If you are using Microsoft Windows, make sure you have iTunes installed on your computer.  
You can download it from the Apple’s official website.  
For more information, visit the Sideloadly website.`
      }
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