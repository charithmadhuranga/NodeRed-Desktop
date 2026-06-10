# Node-RED Desktop

Desktop application of [Node-RED](https://nodered.org/) v5.x built with Electron.

## Features

- **Full Node-RED editor** — bundled with Node-RED 5.x, rendered inside an Electron window with no browser tab needed
- **Local file system integration** — open, save, and manage `.json` flow files directly on your machine; recent files list for quick access
- **Custom storage backend** — flows, credentials, settings, sessions, and library entries are persisted to the local file system via a custom storage module
- **Node palette management** — install and remove community nodes via the palette manager UI; uses Electron's bundled npm for cross-platform compatibility
- **ngrok tunnelling** — expose your local Node-RED instance to the internet with a single click (requires an ngrok auth token)
- **Auto-update** — checks for new releases on GitHub and can download/install them automatically via `electron-updater`
- **System tray** — background operation with tray icon; quick access to the admin UI, settings, and quit
- **Settings page** — custom settings UI for user directory, credential secret, HTTP Node auth, editor locale, listen port, project mode, and window behaviour
- **Multi-language** — locale switching for the desktop UI (separate from the Node-RED editor language)
- **Debug output** — toggle debug logging from the menu for troubleshooting
- **Cross-platform** — native installers for macOS (`.dmg`/`.zip`), Windows (`.exe` NSIS), and Linux (`.deb`/`.rpm`)

## Prerequisites

- Node.js **>= 22.9.0**

## How to install

1. Download the installer from the [release page](https://github.com/charithmadhuranga/NodeRed-Desktop/releases).
2. Run the installer.

## How to build

```
git clone https://github.com/charithmadhuranga/NodeRed-Desktop.git
cd NodeRed-Desktop
npm install
npm run build
```

Platform-specific installers will be created in `release/`:
- **macOS**: `.dmg`, `.zip`
- **Windows**: `.exe` (NSIS)
- **Linux**: `.deb`, `.rpm`

## Development

```
npm install
npm run build   # compile TypeScript and package Electron app
npm start       # run the app from dist/
npm test        # run Playwright tests
```

## Notes

- On macOS, the header toolbar buttons (palette manager, deploy, hamburger menu) are clickable thanks to the `-webkit-app-region: no-drag` CSS rule on `.red-ui-header-toolbar`.
- Node-RED's internal `exec` module is patched to use Electron's bundled npm via `child_process.fork` for cross-platform compatibility.
