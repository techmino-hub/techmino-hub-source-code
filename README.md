# Techmino Hub Source Code

This repository contains the source code for the Techmino Hub website.  
This website is built using [Nuxt.js](https://nuxt.com), unlike the previous iteration, which used plain HTML, CSS, and JS.

## Internationalization
(TODO: improve this documentation)
- we use `nuxt-i18n`, based on `vue-i18n`
- language entries are in markdown
    - ...specificially [markdown-it](https://github.com/markdown-it/markdown-it) with [markdown-it-multimd-table](https://github.com/redbug312/markdown-it-multimd-table) for tables
- language stuff in /assets/lang/


## Running

Make sure to install the dependencies:

```bash
# if you use npm:
npm install
# if you use pnpm:
pnpm install
# if you use yarn:
yarn install
# if you use bun:
bun install
```
Start the development server on `http://localhost:3000`:

```bash
# if you use npm:
npm run dev
# if you use pnpm:
pnpm run dev
# if you use yarn:
yarn dev
# if you use bun:
bun run dev
```

Locally preview production build:

```bash
# if you use npm:
npm run preview
# if you use pnpm:
pnpm run preview
# if you use yarn:
yarn preview
# if you use bun:
bun run preview
```

See more: [Nuxt.js deployment docs](https://nuxt.com/docs/getting-started/deployment)
