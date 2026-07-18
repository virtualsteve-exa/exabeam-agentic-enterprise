# Exabeam Agentic Enterprise — Local Mac Setup

## Fastest option

1. Install Node.js 22 or newer from https://nodejs.org/ if needed.
2. Double-click `start-local.command`.
3. If macOS blocks it, Control-click the file, choose **Open**, then confirm.
4. The first launch installs the dependencies and opens the site at http://localhost:3000/.
5. Keep the Terminal window open while viewing the site. Press **Control-C** there to stop it.

## Terminal option

In Terminal, change to this folder and run:

```sh
npm install
npm run dev
```

Then open the local address shown in Terminal.

## Production build check

```sh
npm run build
```

The project requires Node.js 22.13 or newer and an internet connection for the first dependency install.
