# Node-RED Desktop

Desktop application of [Node-RED](https://nodered.org/) v5.x built with Electron.

- [Homepage](https://charithmadhuranga.github.io/NodeRed-Desktop/)

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
