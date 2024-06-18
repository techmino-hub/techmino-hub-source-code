import type { LangEntry } from '~/assets/types/lang';

export default {
  common: {
    appName: "Techmino Hub",
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
Note that builds that are too far back in time may use a different build of LÖVE and may not work properly with this method.`
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
5. Build Techmino. Instructions can be found [here](https://love2d.org/wiki/Game_Distribution).`
      },
      'remake': {
        question: "I heard Techmino is being remade. What's going on?",
        answer:
          `md_On 15 Jan, 2022, MrZ (the main dev of Techmino) opened an issue named “REMAKE NOW” on the GitHub page.  
According to MrZ himself, the current Techmino contains too many bugs that he needs to remake the whole game from scratch in order to resolve them.  
Although it's still far from complete, you can view the source code [here](https://github.com/26F-Studio/Techmino_Galaxy).`
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
Unless you have an otherwise good reason, you should respect his recommendation. Thank you!`
      },
      'sprint-only': {
        question: "Why does this game only have Sprint?",
        answer: `md_You need to play it in order to unlock the other modes.  
Lines coming out from mode icons indicate whether this mode can unlock other modes.  
To unlock subsequent modes, you need to reach at least B rank on the mode — this would be 1m 2s for Sprint 10L, or 3m 3s for Sprint 40L.`
      },
      'unlockall': {
        question: "But I don't want to have to unlock all the modes!",
        answer: `md_There's a cheat code to unlock all the modes in the game.  
Here are the instructions:  
1. Go to the main menu.
2. Open the terminal by pressing on the Techmino logo 4 times.
3. Type in \`unlockall\` and press Enter. Follow the instructions that the command gives you.`
      },
      'is-guideline': {
        question: "Is this Guideline?",
        answer: `md_Close, but no.  
Some important differences from Guideline are:
- It defaults to a custom rotation system based on SRS but has more kicks and O-spin.
- The game has allspin.
- The game uses a different attack table.`
      },
      'ai-list': {
        question: "What are the AI players?",
        answer: `md_The game uses two AIs: ColdClear and 9Stacker.  
- [Cold Clear is developed by MinusKelvin](https://github.com/MinusKelvin/cold-clear). It is capable of performing T-Spins, Back-to-Backs and Perfect Clears. It is reported to be laggy on low-end devices when playing Battle Royale modes.  
- 9Stacker is a more "stupid" algorithm, capable of only finesse and hard dropping.`
      },
      'controller-support': {
        question: "Does this game support controllers?",
        answer: `md_Yes! Feel free to adjust button mappings in Settings → Key Settings.`
      },
      'how-to-multiplayer': {
        question: "How do I play multiplayer? / I can't sign up for an account!",
        answer: `md_Unfortunately, as of December 2023, the server is down.
The server maintainer, Particle_G, has not been active for quite a while.
It's recommended that you treat this game as a single-player game until this problem is resolved.`
      },
      'change-language': {
        question: "How do I change the game's language?",
        answer: `md_In the main menu, click the button with a globe icon. That's the select language button.`
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

While MrZ does not have a voice pack, there used to be a "Welcome to Tech" voice clip that was recorded by MrZ himself.`
      },
      'mod-assets': {
        question: "How do I extract, view, or replace the game's assets and code?",
        answer: `md_
The Techmino.exe file (Windows) or game.love file (anything else) are valid zip archives.  
Using a software like 7-Zip, you can view, extract or replace any file(s) in it, including assets and Lua scripts.  
Alternatively, you can check out the game's [source code on GitHub](https://github.com/26F-Studio/Techmino).`
      },
      'anti-addiction': {
        question: "Anti-addiction system?",
        answer: `md_The game has an anti-addiction system that prevents playing for too long.  
It only takes into effect if you're playing the game in Chinese with a Sprint 10L time of over 10s,
a Sprint 40L time of over 32.6s, and you have been playing for 4 hours.  
The timer resets at midnight.  
Although this feature isn't required because the game hasn't been registered in China,
it's still a pretty cool Easter egg.`
      },
      'can-record': {
        question: "Can I upload a video of Techmino, or livestream me playing it?",
        answer: `md_
Previously we demanded that you ask for permission before doing so,
but the legality of such requirement has been questioned.

*However*, we do beg you that, if you decide to share any screenshots,
videos or live streams of Techmino, please keep them within the Tetris community.  
We do not want too much publicity for the time being.`
      },
      'mrz-voice-pack': {
        question: "MrZ voice pack when?",
        answer: "md_Probably never."
      },
      'crash-no-bluescreen': {
        question: "My game crashed/closed without a bluescreen!",
        answer: `md_If the crash happened while an AI player is loaded (eg, in a VS mode game or on the title screen),
it is likely an issue of Cold Clear, the bot AI we use.  
**We can't do much about it.**  
You can still try to ask around about the crash, especially when it happens without an AI on screen.`
      },
      'access-terminal': {
        question: "How do I access the in-game console/terminal?",
        answer: `md_You can do it by clicking or pressing the “TECHMINO” icon on the home page
or pressing the “C” key on your keyboard several times.  
Note that [external keyboards may not work correctly on iOS and iPadOS](https://github.com/26F-Studio/Techmino/issues/330).`
      },
      'ext-kbd-not-working': {
        question: "My external keyboard isn’t working with Techmino!",
        answer: `md_Try plugging and unplugging your keyboard, or reconnecting your keyboard if you are using a Bluetooth keyboard.  
This kind of issue typically only happens on mobile devices.  
For iOS and iPadOS users, that is an issue we cannot fix for now.  
This might be related to the iOS distro of LÖVE or how iOS recognises external keyboards.  
At the same time, you can still use the on-screen virtual keys.`
      },
      'cant-install-macos': {
        question: "Why can't I install Techmino on macOS?",
        answer: `md_This is because Techmino isn’t on the Mac App Store.  
To fix this issue, go to System Preferences → Security & Privacy.  
Click on the lock icon on the lower-left corner and enter your password (or use Touch ID).  
Then, select “App Store and identified developers” under the “Allow apps downloaded from” menu.  
Reopen the app and you are all set.`
      },
      'simplistic-mode': {
        question: "My main menu only has big buttons for Sprint and Marathon. (simplistic mode)",
        answer: `md_You probably have enabled “Simplistic Mode.”  
In this mode, only a few essentials modes and functions are available.  
Simply go to the settings and uncheck the “Simplistic Mode” to fix it.`
      },
      'thinkz': {
        question: "I see an icon that is like the \"thinking\" emoji, but with a Z tetromino. What is this?",
        answer: `md_It means “Tetris”!
Due to possible risk of receiving DMCAs from TTC, we have decided
to replace all instances of the word “Tetris” in the game with 󰀕.`
      },
      'purple-screen-of-death': {
        question: "I got a purple screen of death, what does that mean?",
        answer: `md_It's the same as a blue screen crash. It may occasionally appear as a small easter egg.`
      },
      'download-soundtrack': {
        question: "How can I download the in-game soundtracks?",
        answer: `md_The Techmino OST is now available on SoundCloud!  
You can download the full soundtracks [here](https://soundcloud.com/michael-gu-102967376/sets/techmino-the-ost-v2) free of charge (with a CC BY 3.0 License).`
      },
      'rank-reqs': {
        question: "How can I view the rank requirements for each mode?",
        answer: `md_
First, go to our [GitHub repo](https://github.com/26F-Studio/Techmino),
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
\`0\` also means your grade is not recorded (in this example, when your time exceeds 183 seconds).`
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

![image](img/trs-tf-ospin.gif)

To perform a translational O-spin, you can use the fact that some rotation systems have kicks,
and use that to put the O-piece in a hole.

A notable oddity is BiRS, where you have to hold the correct arrow keys (move left/right/soft drop)
to try to "bias" the kick in that direction, and then trying to rotate the O-piece.  
More info is available in the in-game Zictionary.

Here's a demonstration of translational O-spins:  

![image](img/birs-tl-ospin.gif)
`
      },
      'snapshot-version': {
        question: "How can I download the latest snapshot (dev) version of Techmino?",
        answer: `md_
If you really want to test out the latest features of Techmino, the [GitHub CI](https://github.com/26F-Studio/Techmino/actions)
would generate a snapshot version of the app for every commit.  
Note that the snapshot versions might be unstable and contain many bugs,
and that you need to be logged in to your GitHub account to download the artifacts (game builds).  
If you want to test them out on iOS devices, you need to install the the artifacts (game builds) manually.`
      },
      'linux-arm': {
        question: "I am using an ARM version of Linux. Why can’t I play Techmino on my device?",
        answer: `md_
Unfortunately, the ARM distros of Linux are not yet supported by LÖVE, so you cannot do that.
If you really want to play it on your device, we recommend you to use box64/box86 with Wine
to run the Windows distro of the game.
Note that you cannot open .AppImage files using box64/86 directly.
`
      },
      'm1-mac': {
        question: "I am using an M1 Mac. Can I play Techmino on my device?",
        answer: `md_Yes! LÖVE supports M1 Macs.  
If you are using older versions that don’t support M1, just use Rosetta 2
(which is built within the system so you don’t have to do anything).`
      },
      'data-transfer': {
        question: "How can I transfer my data from one device to another?",
        answer: `md_
Simply go to Statistics &gt; Data Management, and you will see these buttons.
Then you can copy and paste the data using your clipboard.
![Screenshot of the Data Management scene in Techmino](/img/faq/data-management.png)`
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
- \`<Skin name>\` should only contain ~15 characters max! So don't use the example above or if you don't want to see your skin's name go out of selector's box`
      },
      'tg-unverified-dev': {
        question: "Techmino Galaxy macOS error: Techmino_Galaxy.app cannot be opened because the developer cannot be verified.",
        answer: `md_
![A popup stating the aforementioned error](/img/faq/mac-unverified-developer.png)
This is because the Gatekeeper on macOS won’t let the user open any app that is not signed or notarized on default.  
However, there is an easy way to bypass this:  
Control–click Techmino (Galaxy).app and select “Open” from the pop-up menu, then select “Open” from the window.`
      },
      'macos-damage-computer': {
        question: "Techmino macOS error: Techmino.app will damage your computer. You should move it to the Trash.",
        answer: `md_![A popup stating the aforementioned error](/img/faq/macos-big-sur-alert-malicious-app.jpg)  
If you get this message, option-click Techmino (Galaxy).app, select “Get Info” from the menu, then check the “Override Malware Protection” checkbox.  
You should now be able to open it.

Techmino is not malware and will not damage your computer.  
As far as we know, this issue only appears on the dev and snapshot versions that are not signed.`
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

Note that if you “swipe quit” the app again, you may need to repeat the procedure above.`
      },
      'tg-touch-controls': {
        question: "How do I configure touch screen controls in Techmino Galaxy?",
        answer: `md_Touch screen controls work slightly differently from the original Techmino, and you need to visit two screens to fully set up touch controls.  
1. Turn on the "Enable touch controls" switch and click the "Touch controls..." button.
2. On this screen, you can add, remove, move, and resize buttons, but they don't have actions assigned to them yet.
3. Go back, and enter "Key mappings...".
4. On this screen, click an action, then click a button to assign the button an action.`
      },
      'tg-interior': {
        question: "The Techmino Galaxy UI looks different from some other people's screenshots! Are there only three modes (Dig Practice, 40 Lines and Marathon)?",
        answer: `md_The other interface, along with other modes, are unlockable! Poke around.`
      },
      'tg-unlockall-music': {
        question: "In Techmino Galaxy, how do I unlock all the music tracks?",
        answer: `md_In the music room, turn off the BGM volume on the bottom right, stop the music in bottom middle, and spam click "full band" on the bottom left.  
Alternatively, press alt+\` (backtick) to unlock them temporarily.`
      },
      'tg-terminal': {
        question: "In Techmino Galaxy, how do I access the Zenitha console?",
        answer: `md_After you unlock the Exterior, go back to the Interior and spam-click the now-disabled Settings button.`
      },
      'tech-league': {
        question: "When will Tech League (ranked matchmaking) come out?",
        answer: `md_Probably never.  
According to MrZ:

> … I don't plan to do [Tech League right now]…  
> The previous system is not good as expected, if I want to do it I will rather add it to Techmino Galaxy…  
> When I finish that, [I] will change the old button to an ad [for Techmino Galaxy’s “League”].

Key takeaway: Tech League will be implemented in Techmino Galaxy in the future.  
It will not be implemented in the “Classic” Techmino.`
      },
      'atk-table': {
        question: "How should I calculate the attack in Techmino?",
        answer: `md_Please use this table as a reference:  
![Techmino's attack table](/img/faq/techmino-attack-table.jpg)`
      },
      'b3b-calc': {
        question: "How is B2B2B calculated in Techmino?",
        answer: `md_Use this table to calculate B2B2B meter (on the left of the playfield):  
![Techmino B2B2B table](/img/faq/b2b2b-calculator.png)`
      }
    }
  },
  map: {
    tabTitle: "Techmino Hub - Map",
    tabTitleFS: "Techmino Hub - Map (Fullscreen)",
    tabTitleHTML: "Techmino Hub - Map (HTML)",
    title: "Techmino Map",
    details: "Currently displaying '{currentMap}' map",
    fullscreen: "Visit fullscreen map"
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
  }
} as LangEntry;