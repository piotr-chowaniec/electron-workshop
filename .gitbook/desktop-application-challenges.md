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

# Desktop application challenges

Here you'll find some of the challenges you'll find while working with desktop applications

1. **Code signing** + **Notarizing**, **Distribution**, and App **self-update** - you could easily extract it to be a separate "side project" in the application's early stages. It takes a lot of time to set up robust CI build pipelines, deployment infrastructure, etc.\

2. Do you remember the first reason why Electron is popular from [Introduction](./#why-electron-is-popular)?\
   **Cross-Platform Development** \
   While this is undoubtedly one of Electron's greatest advantages, it is also one of the biggest disadvantages of working with desktop applications. \
   For instance, let's think of Windows. What `os` versions should the app support? Windows 7, 8, 10, and 11? The maintenance burden multiplies with different systems.\

3. **System dependencies** - antiviruses, insufficient user rights, missing libraries\

4. **File system** - most likely at some point you'll have to save some application on the user's machine, eg. application settings. It's not that clear where to keep application files. And if you do, you have to be super cautious to verify its consistency over time to avoid people's dirty hacks.\

5. **Debugging** - sometimes it's very hard to reproduce some weird edge cases. You have to be ready to jump working on different platforms and os versions. It's almost certain you'll come across some _"weird behavior"_ reported by some users, that no one can reproduce.\

6. **Users** -  While web browsers tend to work pretty consistently, we can't say the same about custom system setups people are running your app at. On top of it, think of users who like to mess up with application-specific files and later on complain it's not working. \

7. **Performance** - it'll perform very differently on the high-end machine (eg. macbook pro M2) you're developing the app vs the low-end old "calculator" some people are going to run it at.\

8. **Logging** + **Telemetry** - if it's going to be a commercial application, you rather want to make well-informed decisions rather than blind guesses. \

9. **Offline mode** - While web application won't even load if there is no internet connection. Your desktop app will and most likely should.



