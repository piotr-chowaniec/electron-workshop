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

# Application distribution and update

Once you have built and signed application. You have to ask yourself a question:

_"How am I about to ship it to the public?"_

There are different strategies starting from ready-to-use [update.electronjs.org](https://www.electronjs.org/docs/latest/tutorial/tutorial-publishing-updating#using-updateelectronjsorg) moving through installers hosted on eg. S3 ending on custom distribution and update solution created in-house.

Like always, the final decision should vary depending on business needs, scale, and so on.

***

Both `electon-forge` and `electron-builder` provide API to publish applications.

However, it's worth noting you should reconsider distribution and application updates as a whole.

| Build library      | Auto Update solution  | Comment                     |
| ------------------ | --------------------- | --------------------------- |
| `electon-forge`    | `update-electron-app` | Maintained by Electron team |
| `electron-builder` | `electron-updater`    |                             |



***

On top of that, your application may have to be available on different platforms like Steam, MicrosotfStore, Epic, etc. Integration with them in most cases is challenging and time-consuming.
