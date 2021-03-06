# Novellia dashboard

The single point of access for the Novellia platform. The dashboard hosts games and related dApps that have been registered on the Novellia DAO.

# Installation

The dashboard is built with Electron and Vue.js

[Install NVM](https://github.com/nvm-sh/nvm#install--update-script)

[Install Node.js through NVM](https://nodejs.org/en/download/package-manager/#nvm)
`nvm install 14.16.0`

Verify the versions. [Notice NPM is installed with Node.js](https://www.npmjs.com/get-npm)
```
node -v
npm -v
```

Install Vue.js CLI
```
npm i -g @vue/cli
npm i -g @vue/cli-init
```

Install dependencies:
`npm install`

# Running

`npm run start`

To hot reload type `rs` in the terminal and hit `enter`

The Novellia dashboard should now appear in a window.

Since Electron is a wrapper on Chromium, the full suite of web development tools is available, just hit `ctrl + shift + I`.

# Extras

## Icon builder

Generate icons from a file named `icon.jpg`
`npm run icon`

# Versions

We are using Webpack 4.46 as this is what is supported by electron-forge.
