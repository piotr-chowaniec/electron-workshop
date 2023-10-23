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

# Electron's processes

Electron inherits its multi-process architecture from Chromium.\
Each Electron window is a separate and independent renderer process.\
A single main process then controls these processes, as well as the application lifecycle as a whole.

[Electron documentation](https://www.electronjs.org/docs/latest/tutorial/process-model)

***

## Main Process&#x20;

The main process is the entry point of an Electron application. It runs in an `Node.js` environment and is responsible for controlling the lifecycle of the application, creating and managing windows, and handling system-level events. The main process also allows communication between the various windows and background processes.

## Renderer Process

Each Electron window runs in its own separate process called the renderer process. The renderer process is responsible for rendering the application's user interface (HTML, CSS, JavaScript).\
It **should** run in a sandboxed environment, isolated from the operating system, for security and stability reasons.

{% hint style="danger" %}
Renderer processes can be spawned with a full `Node.js` environment.\
However, following Electron's [security best practices](https://www.electronjs.org/docs/latest/tutorial/security) you should avoid it as much as possible.

Long story short, disabling `Node.js` integration in the renderer process helps prevent a cross-site-scripting (XSS) attacks from being escalated into a so-called "Remote Code Execution" (RCE) attack
{% endhint %}

### Preload Script

Preload scripts contain code that executes in a renderer process before its web content begins loading. These scripts run within the renderer context but are granted more privileges by having access to `Node.js` APIs.

It's the recommended way to expose desired `Node.js` and `Electron` APIs to renderer process without reducing application security.

## Main and Renderer Process Communication

Electron facilitates communication between the main process and renderer processes using inter-process communication (IPC). This mechanism allows data to be sent back and forth between the main process and the renderer process, enabling coordination and data sharing.

In Electron, processes communicate by passing messages through developer-defined "channels" with the [`ipcMain`](https://www.electronjs.org/docs/latest/api/ipc-main) and [`ipcRenderer`](https://www.electronjs.org/docs/latest/api/ipc-renderer) modules.

Fundamental IPC patterns with concrete examples that you can use as a reference for your app code -> [Electron IPC documentation](https://www.electronjs.org/docs/latest/tutorial/ipc)
