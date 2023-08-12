# Electron Workshop

This is Electron demo application created for Workshop purpose.
It was created based on [electron-forge](https://www.electronforge.io/) + [@electron-forge/plugin-vite](https://www.electronforge.io/config/plugins/vite) + `vite` template. However this boilerplate has some major changes:

- Introduced yarn monorepo workspace structure with separate typescript sub projects for electron main process and react based renderers
- Prepared working example of multiple electron windows application
- Created `@electron-workspace/common` package to easily share code between main and renderers projects (eg. TS types definitions)


## Quick start

Check current node version. Install 18 LTS if not at minimum `18.16.1`

```
node -v
nvm install 18
nvm use 18
```

Install dependencies:
```
yarn
```

Start application in dev mode:
```
yarn start
```

Package Electron application for current system:
```
yarn package
```

Create installer for current system:
```
yarn make
```

## Tech description

This demo application is created using following frameworks and tools:
- [electron](https://github.com/electron/electron)
- [electron-forge](https://github.com/electron/forge)
- [vite](https://github.com/vitejs/vite)
- [react](https://github.com/facebook/react)
- [typescript](https://github.com/microsoft/TypeScript)
