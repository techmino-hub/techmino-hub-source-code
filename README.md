# Techmino Hub Source Code

This repository contains the source code for the Techmino Hub website.  
This website is built using [Nuxt.js](https://nuxt.com), unlike the previous iteration, which used plain HTML, CSS, and JS.

## Contributing
See our [repository's wiki](https://github.com/techmino-hub/techmino-hub-source-code/wiki/) for information on contributing to this project.

If you trust the workspace on Visual Studio Code, `bun run dev` will automatically be executed when you open the workspace. This is so that you don't have to turn on the development server manually. By default, it starts the development server on `http://localhost:3000`.

If you want to disable this, press `Ctrl + Shift + P` and type "Tasks: Manage Automatic Tasks", then disable automatic tasks.

## Setting up

1. Set up your [Supabase](https://supabase.com) project using the database specs on `./assets/types/database.ts`.
2. Optional: use triggers and RLS to enforce the database schema.
3. In Project Settings -> API, get your project URL and anonymous key.
4. Create an `.env` file in the root directory of the project with the following content:
```.env
SUPABASE_URL = (your Supabase URL)
SUPABASE_ANON_KEY = (your Supabase anonymous key)
```
5. If you haven't already, install [npm](https://npmjs.com) or any alternatives. (I personally use [Bun](https://bun.sh) for its unparalleled speed, but you can use whatever you want.)
6. Clone this repository. Or click the green "Code" button and download the ZIP file.

If you want to deploy this using Vercel like I am, you should integrate your Supabase project with Vercel so that the environment variables are accessible:
In your Supabase project, go to Settings -> Integrations. It should have a "Vercel Integration" section. The rest should be straightforward.

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
