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

# Introduction

### What is [Electron](https://www.electronjs.org/docs/latest/)?

* an open-source framework for building desktop applications using  `HTML`, `CSS`, and `JavaScript`.&#x20;
* built on top of `Node.js` and `Chromium`.

***

### Why Electron?

One can ask the question _<mark style="color:blue;">"Why should I bother with Electron if I can lean towards Website or PWA (Progressive Web App)?"</mark>_. And in fact, it's a very good question!&#x20;

As always, when it comes to picking a tech stack, you can drift away from a  real problem the app should solve just because something is _"super fancy"_ or _"we used to do it that way"_. \
While it may appear trivial thing, understanding the pros/cons of a framework and what problems it addresses is the most important thing at the project's early stage.

Let's dive into some examples when you should consider picking Electron:

* **Access to Native APIs**: Electron applications can directly access native APIs and system-level functionalities, which is often not possible for PWAs due to browser sandboxing. This is crucial for applications that need deeper integration with the operating system, such as file system access, hardware control, or system notifications.
* **Offline Capabilities**: While PWAs have some offline capabilities using service workers, Electron apps can work fully offline as they are standalone applications installed on the user's device. This is beneficial for applications that require offline functionality, like text editors or task management tools.
* **Resource Intensive Applications**: Electron apps can handle more resource-intensive tasks because they are not subject to the limitations of browser environments. Applications that deal with heavy computations, data processing, or multimedia manipulation can benefit from Electron's performance. On top of it, you're not constrained to the JS ecosystem and its performance limitations! You can easily address it by using native modules written for instance with rust ([read more here](https://dev.to/brainhubeu/electrons-are-fast-so-can-be-electron-how-to-optimize-electron-app-performance-4e7d))
* **Complex Desktop Integrations**: For applications that need to interact with other desktop applications or services, Electron offers better integration options. Integrating with desktop-specific software or protocols can be challenging for PWAs.
* **Packaging and Distribution**: Electron makes packaging and distribution easier by bundling the application with its own runtime. Users don't need to worry about browser compatibility or internet connectivity to access the app.

It's important to note that Electron is not always the best choice. PWAs are suitable for cases where platform independence, easy updates, and a lightweight footprint are essential. They work well when the primary use case involves browsing, content consumption, or simpler interactions.

In summary, Electron shines in scenarios where applications require deep integration with the operating system, offline functionality, resource-intensive tasks, complex desktop integrations, and highly customizable UIs. On the other hand, PWAs excel in cases where platform independence, ease of distribution, and lightweight experiences are paramount.

***

### What is Electron's role?

The role of Electron in desktop application development is to bridge the gap between web technologies and native desktop applications. It enables developers to take advantage of their existing web development skills and use them to build desktop applications that can run on various operating systems, including Windows, macOS, and Linux.

***

### Why is Electron popular?

* **Cross-Platform Development**: Electron allows developers to build desktop applications that can run on multiple operating systems (Windows, macOS, Linux) without major code changes. This cross-platform compatibility reduces development effort and costs.
* **Familiar Web Technologies**: Developers can leverage their existing web development skills to create desktop applications.
* **Rapid Prototyping and Development**: Electron's development workflow is conducive to rapid prototyping and iteration.
* **Real-Time Updates**: Electron applications can be updated without requiring users to manually download and install updates, enabling seamless deployment of new features and bug fixes.
* **Node.js Integration:** Electron integrates with Node.js, allowing developers to use server-side JavaScript and access operating system functionalities through Node.js APIs. This enables desktop applications to have more extensive capabilities beyond what's available in a traditional web application.
* **Chromium Rendering Engine:** Electron uses the Chromium rendering engine. This ensures that the application looks and behaves consistently across different platforms. Thanks to that, there are no browser compatibility issues.

***

<div align="center" data-full-width="true">

<figure><img src=".gitbook/assets/Screenshot 2023-08-11 at 10.32.44.png" alt=""><figcaption><p>Popular applciations built with Electron <a href="https://www.electronjs.org/apps">https://www.electronjs.org/apps</a> </p></figcaption></figure>

</div>









