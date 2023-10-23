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

# Code Signing + Notarizing

[Electron documentation](https://www.electronjs.org/docs/latest/tutorial/code-signing)

Code signing is an essential security practice for Electron applications (and software in general). When you sign the code of an Electron application, you're essentially attaching a digital signature to the executable files to verify their authenticity and integrity.

To effectively sign your Electron application code, you obtain a code signing certificate from a trusted certificate authority (CA) and use it to sign your application's executable files. This process creates a digital signature that can be verified by users and their operating systems.

In addition to that, from macOS 10.15 (Catalina) onwards, your application must also be notarized to run on a user's machine without disabling additional operating system security checks. [Apple Documentation](https://developer.apple.com/documentation/security/notarizing\_macos\_software\_before\_distribution).&#x20;
