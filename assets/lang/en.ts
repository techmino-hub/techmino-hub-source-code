import type { LangEntry } from '~/assets/types/lang';

export default {
  common: {
    appName: "Techmino Hub",
    nav: {
      home: "Home",
      faq: "FAQ",
      map: "Map",
      signIn: "Sign In",
      signOut: "Sign Out",
      settings: "Settings",
      rules: "Site Rules",
      privacy: "Privacy Policy",
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
    tabTitle: "Language Settings - Techmino Hub",
    title: "Choose your preferred language",
    setLang: "Set language"
  },

  settings: {
    tabTitle: "Settings - Techmino Hub",
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
    tabTitle: "FAQ - Techmino Hub",
    title: "Frequently Asked Questions",
    filter: {
      title: "Tag Filters",
      exclude: "Exclude",
      all: "All",
      include: "Include"
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
    If you spot an inaccuracy, please report it on [GitHub issues](https://github.com/techmino-hub/techmino-hub-source-code/issues/new) or on [Techmino's official Discord server](https://discord.gg/f9pUvkh).`,
    entries: {
      'what-is-techmino': {
        question: "What is Techmino?",
        answer:
          `md_Techmino is a block-stacking game originally made by MrZ, along with
          several improvements by the open-source community. The game is made
          using Love2D. It has many game modes, including Sprint, Marathon,
          VS, a fully-customizable custom mode, and more!`,
        credit: "NOT_A_ROBOT"
      },
      'is-techmino-open-source': {
        question: "Is Techmino open-source?",
        answer:
          `md_Yes. Techmino is licensed under the LGPL-3.0 license.
          You can find the source code [here](https://github.com/26F-Studio/Techmino).`,
        credit: "NOT_A_ROBOT"
      },
      'how-to-download': {
        question: "How do I get/download the game?",
        answer:
          `md_
1. Get the game [from GitHub releases](https://github.com/26F-Studio/Techmino/releases).  
2. Download the correct file based on your OS.  
3. Extract compressed files as necessary.  
4. Run the executable.`,
        credit: "NOT_A_ROBOT"
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
         
*see the next FAQ entry for details.`,
        credit: "NOT_A_ROBOT"
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
          You may want to check the next FAQ entry for more information.`,
        credit: "nekonaomii"
      },
      'testflight-full': {
        question: "I want to play Techmino on iOS or iPadOS without jailbreaking, but the TestFlight limit is full or the TestFlight build has expired. What should I do?",
        answer:
          `md_We previously had a build for iOS and iPadOS devices on the App Store, but it was unfortunately removed by the Tetris Company via a DMCA request.  
We do have a TestFlight link, but it is currently full and we cannot add more spots as of now.  
However, there is an alternative to run Techmino on iOS and iPadOS via Love2D Studio.  
To run Techmino on your iOS or iPadOS devices (iPhones, iPads, iPod Touches) via Love2D Studio:

1. [Download and install Love2D Studio from the App Store](https://apps.apple.com/us/app/love2d-studio/id6474188075).
2. Download the **\`.love\`** file of the desired version of Techmino on your Apple device. Save the file on your device or iCloud Drive. All stable builds of Techmino are available [here](https://github.com/26F-Studio/Techmino/releases).
3. Launch Love2D Studio, tap the **＋** button on the top right of the sidebar, then tap “Import .love file”.
4. Locate and select the \`.love\` file you have downloaded.
5. You should now see “Techmino_Bare” in your sidebar. Tap on it to expand, then tap \`main.lua\`.
6. Tap the ▶︎ button in the top right of the screen to start the game.

**We have not yet fully tested the stability of Love2D Studio, so there is a possibility that the game may crash during gameplay\\*.**  
**We also don’t know whether the game data would be lost after a certain amount of time of inactivity or for other reasons.**
**To ensure the security of your data, we strongly recommend exporting the game data via the clipboard regularly to prevent data loss.**

*This procedure can also be used for testing Techmino Galaxy.*

\\*We did not encounter this during the limited testing, but Love2D Studio tends to crash when exiting Techmino and then relaunching it.

*This is not an advertisement or endorsement of Love2D Studio.*`,
        credit: "C29H25N3O5"
      },
      'no-ipa': {
        question: "I want to play Techmino on iOS or iPadOS without jailbreaking, but I don't see an .ipa download on the latest release.",
        answer:
          `md_If you want to install a version of Techmino that has no \`.ipa\` builds, you can follow these steps:
1. Get the \`.ipa\` files from [the GitHub releases page](https://github.com/26F-Studio/Techmino/releases). Find any version with a valid \`.ipa\` file, then download “Techmino_iOS.ipa”.
2. Change the extension of the \`.ipa\` file to \`.zip\`. Extract the \`.zip\` file.
3. Go to \`./Payload\`. If you are using Microsoft Windows, you will see a folder named \`Techmino.app\`, in which case, open that folder and skip to step 5.
4. If you are using macOS, you will see an application file named \`Techmino.app\`. Control-click on it, then click on “Show package content” in the context menu.
5. Locate \`game.love\`. Replace this file with the \`.love\` file you intend to install.
6. Compress the Techmino iOS file into a \`.zip\` file again. Please choose the “no compression” option in your archive app when creating this zip file.
7. Change the extension of the new \`.zip\` file back into \`.ipa\`.
8. Follow the instructions of the previous FAQ entry.  
Note that builds that are too far back in time may use a different build of LÖVE and may not work properly with this method.`,
        credit: "C29H25N3O5"
      },
      'cc-error': {
        question: "Why am I getting errors related to the Cold Clear bot? How do I fix it?",
        answer:
          `md_This issue is usually — but not always — caused by missing files that are required to load the ColdClear bot.
Below is a list of ColdClear's files on different platforms:
| Platform    | Files                                   | Note                                                                                            |
|-------------|-----------------------------------------|-------------------------------------------------------------------------------------------------|
| Windows     | \`CCloader.dll\`, \`cold_clear.dll\`    |                                                                                                 |
| Linux       | \`lib/CCloader.so\`                     |                                                                                                 |
| MacOS       | \`CCloader.dylib\`                      | Needs further investigation.                                                                    |
| Android x86 | \`libAndroid/armeabi_v7a/CCloader.so\`  |                                                                                                 |
| Android x64 | \`libAndroid/arm64_v8a/CCloader.so\`    |                                                                                                 |
| iOS         | \`llibCCloader.a\`, \`libcold_clear.a\` | Needs further investigation. It's probable that 2 files are required to build CCloader for iOS. |

Below are instructions on how to fix this issue.
1. Grab the ColdClear wrapper [here](https://github.com/26F-Studio/cold_clear_ai_love2d_wrapper/releases). Get the file that matches your operating system.
2. Download [Techmino's source code](https://github.com/26F-Studio/Techmino). (click the green Code button and click Download ZIP)
3. Extract the downloaded files to seperate folders (Techmino source code to a folder, CCloader files to another folder)
4. Copy the necessary files from the CCloader folder into Techmino's source code, based on the path in the above table.
5. Build Techmino. Instructions can be found [here](https://love2d.org/wiki/Game_Distribution).`,
        credit: "SweetSea"
      },
      'remake': {
        question: "I heard Techmino is being remade. What's going on?",
        answer:
          `md_On 15 Jan, 2022, MrZ (the main dev of Techmino) opened an issue named “REMAKE NOW” on the GitHub page.  
According to MrZ himself, the current Techmino contains too many bugs that he needs to remake the whole game from scratch in order to resolve them.  
Although it's still far from complete, you can view the source code [here](https://github.com/26F-Studio/Techmino_Galaxy).`,
        credit: "C29H25N3O5"
      },
      'how-to-play-tg': {
        question: "How can I play Techmino Galaxy (the remake)?",
        answer:
          `md_**Do understand that Techmino Galaxy is still rather early in development, and does not necessarily give the best experience.**

The easiest way to obtain Techmino Galaxy is through GitHub Actions. You *will* need a GitHub account to download the game this way.  
Below are steps to download Techmino Galaxy through GitHub Actions:  
1. Go to [Techmino Galaxy's Actions page](https://github.com/26F-Studio/Techmino_Galaxy/actions).
2. Select the latest (topmost) build with a green checkmark (indicating the build was successful). You can do so by clicking on the title text.
3. Scroll down to the "Artifacts" section and download your desired platform's version.
4. Extract the downloaded file and run the executable.

Alternatively, you can obtain the source code and run it through the LÖVE binary.
This *does not* require a GitHub account, but is slightly more complicated.  
To do this, follow these instructions:  
1. [Get the latest version of LÖVE](https://love2d.org/).
2. Download the repository from GitHub. This can be done in two ways:
   - In [the repository](https://github.com/26F-Studio/Techmino_Galaxy), click the green "Code" button and select "Download ZIP".
   - If you have Git installed, you can use \`git clone\` to clone the repository.
3. In the downloaded repository, check if the Zenitha folder is empty. If it is, download [the Zenitha repository](https://github.com/26F-Studio/Zenitha) using the same method as above, and extract it into the Zenitha folder.
4. Run the game by dragging the entire \`Techmino_Galaxy\` folder onto the LÖVE executable. (On Windows, this is \`love.exe\`.)

If you often update the game, consider following [this guide made by SweetSea](https://github.com/26F-Studio/Techmino_Galaxy/discussions/26).  
Note: MrZ does not recommend talking about Techmino Galaxy's contents, especially things that can still change a lot, in public places.  
Unless you have an otherwise good reason, you should respect his recommendation. Thank you!`,
        credit: "C29H25N3O5"
      },
      'sprint-only': {
        question: "Why does this game only have Sprint?",
        answer: `md_You need to play it in order to unlock the other modes.  
Lines coming out from mode icons indicate whether this mode can unlock other modes.  
To unlock subsequent modes, you need to reach at least B rank on the mode — this would be 1m 2s for Sprint 10L, or 3m 3s for Sprint 40L.`,
        credit: "User670"
      },
      'unlockall': {
        question: "But I don't want to have to unlock all the modes!",
        answer: `md_There's a cheat code to unlock all the modes in the game.  
Here are the instructions:  
1. Go to the main menu.
2. Open the terminal by pressing on the Techmino logo 4 times.
3. Type in \`unlockall\` and press Enter. Follow the instructions that the command gives you.`,
        credit: "NOT_A_ROBOT"
      },
      'is-guideline': {
        question: "Is this Guideline?",
        answer: `md_Close, but no.  
Some important differences from Guideline are:
- It defaults to a custom rotation system based on SRS but has more kicks and O-spin.
- The game has allspin.
- The game uses a different attack table.`,
        credit: "User670"
      },
      'ai-list': {
        question: "What are the AI players?",
        answer: `md_The game uses two AIs: ColdClear and 9Stacker.  
- [Cold Clear is developed by MinusKelvin](https://github.com/MinusKelvin/cold-clear). It is capable of performing T-Spins, Back-to-Backs and Perfect Clears. It is reported to be laggy on low-end devices when playing Battle Royale modes.  
- 9Stacker is a more "stupid" algorithm, capable of only finesse and hard dropping.`,
        credit: "User670"
      },
      'controller-support': {
        question: "Does this game support controllers?",
        answer: `md_Yes! Feel free to adjust button mappings in Settings → Key Settings.`,
        credit: "User670"
      },
      'how-to-multiplayer': {
        question: "How do I play multiplayer? / I can't sign up for an account!",
        answer: `md_Unfortunately, as of December 2023, the server is down.
The server maintainer, Particle_G, has not been active for quite a while.
It's recommended that you treat this game as a single-player game until this problem is resolved.`,
        credit: "NOT_A_ROBOT"
      },
      'change-language': {
        question: "How do I change the game's language?",
        answer: `md_In the main menu, click the button with a globe icon. That's the select language button.`,
        credit: "User670"
      },
      'voice-actors': {
        question: "Who are the voice actors for the voice packs? What are the voice languages?",
        answer: `md_
1. [Miya](https://space.bilibili.com/846180) is a virtual live streamer who used to play a lot of block stacking games.
  Voice language: Japanese (line clears); Japanese, Chinese and Cat (others)
2. Mono is an artist, however her online profile had been wiped clean.
  Voice language: Japanese
3. Xiaoya is a fellow block stacker player. She introduces herself as "Xia Xiaoya, a brand new type of duck."
  Voice language: English (line clears); Chinese (others)
4. [Flore](https://space.bilibili.com/1223403016) is a fellow block stacker player, featured in [this article](https://github.com/User670/temp/blob/master/those_who_play_tetris.md).
  Voice language: English (line clears), various languages (others)
5. [Miku](https://en.wikipedia.org/wiki/Hatsune_Miku) is a voice bank for the Japanese voice synthesizer Vocaloid.
  Voice language: Japanese
6. [Zundamon](https://vocalsynth.fandom.com/wiki/Zundamon) is a voice bank for various voice synthesizer programs.
  Voice language: Japanese

While MrZ does not have a voice pack, there used to be a "Welcome to Tech" voice clip that was recorded by MrZ himself.`,
        credit: "User670"
      },
      'mod-assets': {
        question: "How do I extract, view, or replace the game's assets and code?",
        answer: `md_
The Techmino.exe file (Windows) or game.love file (anything else) are valid zip archives.  
Using a software like 7-Zip, you can view, extract or replace any file(s) in it, including assets and Lua scripts.  
Alternatively, you can check out the game's [source code on GitHub](https://github.com/26F-Studio/Techmino).`,
        credit: "User670"
      },
      'anti-addiction': {
        question: "Anti-addiction system?",
        answer: `md_The game has an anti-addiction system that prevents playing for too long.  
It only takes into effect if you're playing the game in Chinese with a Sprint 10L time of over 10s,
a Sprint 40L time of over 32.6s, and you have been playing for 4 hours.  
The timer resets at midnight.  
Although this feature isn't required because the game hasn't been registered in China,
it's still a pretty cool Easter egg.`,
        credit: "NOT_A_ROBOT"
      },
      'can-record': {
        question: "Can I upload a video of Techmino, or livestream me playing it?",
        answer: `md_
Previously we demanded that you ask for permission before doing so,
but the legality of such requirement has been questioned.

*However*, we do beg you that, if you decide to share any screenshots,
videos or live streams of Techmino, please keep them within the Tetris community.  
We do not want too much publicity for the time being.`,
        credit: "User670"
      },
      'mrz-voice-pack': {
        question: "MrZ voice pack when?",
        answer: "md_Probably never.",
        credit: "NOT_A_ROBOT (information from User670)"
      },
      'crash-no-bluescreen': {
        question: "My game crashed/closed without a bluescreen!",
        answer: `md_If the crash happened while an AI player is loaded (eg, in a VS mode game or on the title screen),
it is likely an issue of Cold Clear, the bot AI we use.  
**We can't do much about it.**  
You can still try to ask around about the crash, especially when it happens without an AI on screen.`,
        credit: "User670"
      },
      'access-terminal': {
        question: "How do I access the in-game console/terminal?",
        answer: `md_You can do it by clicking or pressing the “TECHMINO” icon on the home page
or pressing the “C” key on your keyboard several times.  
Note that [external keyboards may not work correctly on iOS and iPadOS](https://github.com/26F-Studio/Techmino/issues/330).`,
        credit: "C29H25N3O5"
      },
      'ext-kbd-not-working': {
        question: "My external keyboard isn’t working with Techmino!",
        answer: `md_Try plugging and unplugging your keyboard, or reconnecting your keyboard if you are using a Bluetooth keyboard.  
This kind of issue typically only happens on mobile devices.  
For iOS and iPadOS users, that is an issue we cannot fix for now.  
This might be related to the iOS distro of LÖVE or how iOS recognises external keyboards.  
At the same time, you can still use the on-screen virtual keys.`,
        credit: "C29H25N3O5"
      },
      'cant-install-macos': {
        question: "Why can't I install Techmino on macOS?",
        answer: `md_This is because Techmino isn’t on the Mac App Store.  
To fix this issue, go to System Preferences → Security & Privacy.  
Click on the lock icon on the lower-left corner and enter your password (or use Touch ID).  
Then, select “App Store and identified developers” under the “Allow apps downloaded from” menu.  
Reopen the app and you are all set.`,
        credit: "C29H25N3O5"
      },
      'simplistic-mode': {
        question: "My main menu only has big buttons for Sprint and Marathon. (simplistic mode)",
        answer: `md_You probably have enabled “Simplistic Mode.”  
In this mode, only a few essentials modes and functions are available.  
Simply go to the settings and uncheck the “Simplistic Mode” to fix it.`,
        credit: "C29H25N3O5"
      },
      'thinkz': {
        question: "I see an icon that is like the \"thinking\" emoji, but with a Z tetromino. What is this?",
        answer: `md_It means “Tetris”!
Due to possible risk of receiving DMCAs from TTC, we have decided
to replace all instances of the word “Tetris” in the game with 󰀕.`,
        credit: "C29H25N3O5"
      },
      'purple-screen-of-death': {
        question: "I got a purple screen of death, what does that mean?",
        answer: `md_It's the same as a blue screen crash. It may occasionally appear as a small easter egg.`,
        credit: "C29H25N3O5"
      },
      'download-soundtrack': {
        question: "How can I download the in-game soundtracks?",
        answer: `md_The Techmino OST is now available on SoundCloud!  
You can download the full soundtracks [here](https://soundcloud.com/michael-gu-102967376/sets/techmino-the-ost-v2) free of charge (with a CC BY 3.0 License).`,
        credit: "C29H25N3O5"
      },
      'rank-reqs': {
        question: "How can I view the rank requirements for each mode?",
        answer: `md_We list the rank requirements for each mode in [our map](/map)!  
It's usually pretty accurate - especially since game updates have slowed down recently.  
If you want to look at the game's source code to find the requirements, here's how you can do it:  
First, go to Techmino's [GitHub repo](https://github.com/26F-Studio/Techmino),
then navigate to \`/parts/modes\` to find the mode file (\`.lua\`) you want to open.  
After that, look for a piece of the code that looks like this (this will going to be different for each mode; this example uses \`sprint_40l.lua\`):
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
The first line means that if \`P.stat.row\` is less than 40 (which means that you didn’t finish the 40L sprint), your grade is not recorded.  
The variable’s name that goes after \`local\` is the category of the requirement (in this example, time (in seconds)).  
The \`5\`, \`4\`, \`3\`, \`2\`, and \`1\` correspond to \`X\`, \`U\`, \`S\`, \`A\`, and \`B\` grades in the game.  
\`0\` also means your grade is not recorded (in this example, when your time exceeds 183 seconds).`,
        credit: "C29H25N3O5 (map section by NOT_A_ROBOT)"
      },
      'o-spins': {
        question: "How can I perform O-Spins?",
        answer: `md_
There are two kinds of O-spins: transformative O-spins and translational O-spins.  
Transformative O-spins are only possible with TRS, while translational O-spins are possible with TRS, BiRS, and ASC; 
so make sure you have the correct rotation system.  

To perform a transformative O-spin, move the O block in an appropriate “hole”, then use the following rotations to do the trick:

O → Z: LRL  
O → S: RLR  
O → J: LLR  
O → L: RRL  
O → T: LLL & RRR  
O → I: FFF  

Note: L = counterclockwise, R = clockwise, F = 180° rotation

Here is a useful GIF demonstrating this:  

![image](img/faq/trs-tf-ospin.gif)

To perform a translational O-spin, you can use the fact that some rotation systems have kicks,
and use that to put the O-piece in a hole.

A notable oddity is BiRS, where you have to hold the correct arrow keys (move left/right/soft drop)
to try to "bias" the kick in that direction, and then trying to rotate the O-piece.  
More info is available in the in-game Zictionary.

Here's a demonstration of translational O-spins:  

![image](img/faq/birs-tl-ospin.gif)
`,
        credit: "C29H25N3O5"
      },
      'snapshot-version': {
        question: "How can I download the latest snapshot (dev) version of Techmino?",
        answer: `md_
If you really want to test out the latest features of Techmino, the [GitHub CI](https://github.com/26F-Studio/Techmino/actions)
would generate a snapshot version of the app for every commit.  
Note that the snapshot versions might be unstable and contain many bugs,
and that you need to be logged in to your GitHub account to download the artifacts (game builds).  
If you want to test them out on iOS devices, you need to install the the artifacts (game builds) manually.`,
        credit: "C29H25N3O5"
      },
      'linux-arm': {
        question: "I am using an ARM version of Linux. Why can’t I play Techmino on my device?",
        answer: `md_
Unfortunately, the ARM distros of Linux are not yet supported by LÖVE, so you cannot do that.
If you really want to play it on your device, we recommend you to use box64/box86 with Wine
to run the Windows distro of the game.
Note that you cannot open .AppImage files using box64/86 directly.
`,
        credit: "C29H25N3O5"
      },
      'm1-mac': {
        question: "I am using an M1 Mac. Can I play Techmino on my device?",
        answer: `md_Yes! LÖVE supports M1 Macs.  
If you are using older versions that don’t support M1, just use Rosetta 2
(which is built within the system so you don’t have to do anything).`,
        credit: "C29H25N3O5"
      },
      'data-transfer': {
        question: "How can I transfer my data from one device to another?",
        answer: `md_
Simply go to Statistics &gt; Data Management, and you will see these buttons.
Then you can copy and paste the data using your clipboard.
![Screenshot of the Data Management scene in Techmino](/img/faq/data-management.png)`,
        credit: "C29H25N3O5"
      },
      'custom-skin': {
        question: "How do I make and import my own block skin?",
        answer: `md_Here's an example block skin for reference:
![Example skin](/img/faq/example-skin.png)  
- The block skin is a \`.png\` file with a dimension of at least 240 × 90.
- The image is divided into a 3 ×8 array of blocks, with each block having a dimension of 30× 30.

To import your skin into the game:  
1. Make your block skin and export it into a \`.png\` file.
2. Move your skin to \`./media/image/skin/\`.
3. Add the following code to \`./main.lua\` at around line 315, after \`SKIN.load\`
  (**REMEMBER** to replace \`<SKIN_FILE_NAME>\` with the filename of the skin, and \`Skin name\` with the skin's name):  
  \`'{'name="<Skin name>",path=\\'media/image/skin/<SKIN_FILE_NAME>.png\\''},\`
4. Start the game. You will find your skin appearing in the block skin list.  

TIPS:
- \`<Skin name>\` allows almost any character, so you can set your skin's name something like: \`Diệt Slime suốt 300 năm, tôi level MAX lúc nào chẳng hay\`.
- \`<Skin name>\` should only contain ~15 characters max! So don't use the example above or if you don't want to see your skin's name go out of selector's box`,
        credit: "C29H25N3O5 (reworded by NOT_A_ROBOT and SweetSea)"
      },
      'tg-unverified-dev': {
        question: "Techmino Galaxy macOS error: Techmino_Galaxy.app cannot be opened because the developer cannot be verified.",
        answer: `md_
![A popup stating the aforementioned error](/img/faq/mac-unverified-developer.png)
This is because the Gatekeeper on macOS won’t let the user open any app that is not signed or notarized on default.  
However, there is an easy way to bypass this:  
Control–click Techmino (Galaxy).app and select “Open” from the pop-up menu, then select “Open” from the window.`,
        credit: "C29H25N3O5"
      },
      'macos-damage-computer': {
        question: "Techmino macOS error: Techmino.app will damage your computer. You should move it to the Trash.",
        answer: `md_![A popup stating the aforementioned error](/img/faq/macos-big-sur-alert-malicious-app.jpg)  
If you get this message, option-click Techmino (Galaxy).app, select “Get Info” from the menu, then check the “Override Malware Protection” checkbox.  
You should now be able to open it.

Techmino is not malware and will not damage your computer.  
As far as we know, this issue only appears on the dev and snapshot versions that are not signed.`,
        credit: "C29H25N3O5"
      },
      'ios-portrait-mode': {
        question: "Why Techmino is displayed in portrait mode on iOS (especially on iPhone)?",
        answer: `md_Apparently, this is a bug that happens in iOS.  
The “Portrait” mode in settings seems to do nothing on iOS.  
Therefore, the only solution is to enter Techmino in landscape mode:  
1. Swipe up from the bottom of the screen or double-tap the home button to enter App Switcher, then swipe up to quit Techmino.
2. Disable the rotation lock if you haven’t already.
3. Rotate your device to landscape mode. It is okay if the contents on the home screen don’t seem to be rotated to landscape view — this is normal as long as you hold the device in a landscape manner.
4. Enter Techmino. Everything should be okay now.

Note that if you “swipe quit” the app again, you may need to repeat the procedure above.`,
        credit: "C29H25N3O5"
      },
      'tg-touch-controls': {
        question: "How do I configure touch screen controls in Techmino Galaxy?",
        answer: `md_Touch screen controls work slightly differently from the original Techmino, and you need to visit two screens to fully set up touch controls.  
1. Turn on the "Enable touch controls" switch and click the "Touch controls..." button.
2. On this screen, you can add, remove, move, and resize buttons, but they don't have actions assigned to them yet.
3. Go back, and enter "Key mappings...".
4. On this screen, click an action, then click a button to assign the button an action.`,
        credit: "C29H25N3O5"
      },
      'tg-interior': {
        question: "The Techmino Galaxy UI looks different from some other people's screenshots! Are there only three modes (Dig Practice, 40 Lines and Marathon)?",
        answer: `md_The other interface, along with other modes, are unlockable! Poke around.`,
        credit: "C29H25N3O5"
      },
      'tg-unlockall-music': {
        question: "In Techmino Galaxy, how do I unlock all the music tracks?",
        answer: `md_In the music room, turn off the BGM volume on the bottom right, stop the music in bottom middle, and spam click "full band" on the bottom left.  
Alternatively, press alt+\` (backtick) to unlock them temporarily.`,
        credit: "nekonaomii"
      },
      'tg-terminal': {
        question: "In Techmino Galaxy, how do I access the Zenitha console?",
        answer: `md_After you unlock the Exterior, go back to the Interior and spam-click the now-disabled Settings button.`,
        credit: "nekonaomii"
      },
      'tech-league': {
        question: "When will Tech League (ranked matchmaking) come out?",
        answer: `md_Probably never.  
According to MrZ:

> … I don't plan to do [Tech League right now]…  
> The previous system is not good as expected, if I want to do it I will rather add it to Techmino Galaxy…  
> When I finish that, [I] will change the old button to an ad [for Techmino Galaxy’s “League”].

Key takeaway: Tech League will be implemented in Techmino Galaxy in the future.  
It will not be implemented in the “Classic” Techmino.`,
        credit: "C29H25N3O5"
      },
      'atk-table': {
        question: "How should I calculate the attack in Techmino?",
        answer: `md_Please use this table as a reference:  
![Techmino's attack table](/img/faq/techmino-attack-table.jpg)`,
        credit: "C29H25N3O5"
      },
      'b3b-calc': {
        question: "How is B2B2B calculated in Techmino?",
        answer: `md_Use this table to calculate B2B2B meter (on the left of the playfield):  
![Techmino B2B2B table](/img/faq/b2b2b-calculator.png)`,
        credit: "nekonaomii"
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
    lagWarnLink: "Lite version",
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
          ][idx - 27];
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
      }
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
    section: {
      latestSubmissions: "Latest Submissions"
    },
    state: {
      Normal: "Normal",
      Banned: "Banned",
      Unverified: "Unverified"
    },
    role: {
      User: "User",
      Verifier: "Verifier",
      Administrator: "Administrator"
    }
  },
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