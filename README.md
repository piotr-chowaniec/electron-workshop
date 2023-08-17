<div align="center">
    <h1>Electron Workshop</h1>
    <a href="https://piotr-chowaniec.gitbook.io/electron-workshop/">GitBook</a>
</div>

# About

This is Electron demo application created for Workshop purpose.
It was created based on [electron-forge](https://www.electronforge.io/) + [@electron-forge/plugin-vite](https://www.electronforge.io/config/plugins/vite) + `vite` template. However, this boilerplate has some major changes to improve scalability:

- Introduced monorepo structure using yarn workspaces.
There are separate sub-projects for:
    - electron main process
    - react based renderers
    - common code that has to be shared - eg types definitions
- It's TypeScript ready
- It's a working example of an Electron multiple windows application

```
packages/
  common/           # shared code
  main/             # electron main process
  renderers/
    login-window/   # login renderer react project
    main/           # main renderer react project

```

## Quick start

Check what Node.js version you're currently working at and switch to 18 LTS

```
node -v
nvm install --lts
nvm use --lts
```

Check out if you have yarn installed locally and if not, do so. During the workshop, we'll be using yarn `v1.22.19`

```
yarn -v
npm i -g yarn
```

Install dependencies:
```
yarn
```

Start application in dev mode:
```
yarn start
```

Package application for current system:
```
yarn package
```

Build distributables:
```
yarn make
```

## Links

This demo application is created using following frameworks and tools:

- [electron](https://github.com/electron/electron)
- [electron-forge](https://github.com/electron/forge)
- [vite](https://github.com/vitejs/vite)
- [react](https://github.com/facebook/react)
- [typescript](https://github.com/microsoft/TypeScript)
