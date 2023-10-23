---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: false
---

# Build application

Now as we have a working application it's time for us to talk about packaging and building.

Up until now, we've been working using a local development mode that consists of:

* locally server renderers with Vite
* electron app started locally

> Electron does not have any tooling for packaging and distribution bundled into its core modules. Once you have a working Electron app in dev mode, you need to use additional tooling to create a packaged app you can distribute to your users (also known as a **distributable**). Distributables can be either installers (e.g. MSI on Windows) or portable executable files (e.g. `.app` on macOS).

### Packaging

Now it's high time to prepare an app that should not require a local dev environment!

```bash
yarn package
```

Now you should see `out` folder in the projects root dir

<figure><img src=".gitbook/assets/Screenshot 2023-08-16 at 10.42.36.png" alt=""><figcaption></figcaption></figure>

Now you should be able to start it with the below command

```bash
// macOS
./out/AwesomeElectronApp-darwin-arm64/AwesomeElectronApp.app/Contents/MacOS/AwesomeElectronApp
```

However, it's not a desired way of shipping application files to the public.

We have to either compress it or, ideally, create an **installer**

### Building distributable

Lucky for us, [electron-forge](https://www.electronforge.io/#building-distributables) can build [distributable](https://www.electronforge.io/#building-distributables) files for us!

```bash
yarn make
```

<figure><img src=".gitbook/assets/Screenshot 2023-08-16 at 10.50.25.png" alt=""><figcaption></figcaption></figure>

### CI

Now let's take a look at simple CI that can build an app for us at GitHub Action

```yaml
// .github/workflows/Building distributables.yml

name: Building distributables

on:
  workflow_dispatch:

jobs:
  build-distributables:
    strategy:
      matrix:
        os: [windows-latest, macos-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18.16.1"
          cache: "yarn"

      - name: Install packages
        run: yarn

      - name: Build distributable
        run: yarn make

      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: ${{ matrix.os }}-binary
          path: out/make
```

[Workflow](https://github.com/piotr-chowaniec/electron-workshop/actions/runs/5877578158)

### Worth noting

Although [`electron-forge`](https://www.electronforge.io/)  is a tooling recommended by Electron for packaging and distributing applications. It's not the first and only one. The Electron team announced forge as a recommended way forward with [electron-forge v6](https://www.electronjs.org/blog/forge-v6-release).

However, from what I know [electron-builder](https://www.electron.build/index.html) is by far the most popular way to build electron applications. A quick look at [npm trends](https://npmtrends.com/@electron-forge/cli-vs-electron-builder) and you see it's still the leading one.&#x20;

Both of them have their own pros and cons to reconsider. Nonetheless, it'd be unforgivable not to mention other possibilities. You can read a quick comparison summary by Forge [here](https://www.electronforge.io/core-concepts/why-electron-forge#forge-vs.-builder)

The challenge is, once you set up project structure and workflow, it's not that easy to switch to another one. For instance, our workshop demo application is fully based on `electron-forge` and it wouldn't be that straightforward to switch to `electron-builder`&#x20;

From my experience, `electron-builder` gives more flexibility in terms of configuration options. However, it's extremely hard to setup TypeScript + Vite minified project with `electron-builder`. On the other hand, most likely in the coming future, we'll see more and forge plugins that should satisfy most needs
