import { app } from "electron";

import { setupApplication } from "./app";

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
}

app.on("ready", setupApplication);

// Required to close the app on OS X when all windows are closed.
app.once("window-all-closed", () => {
  console.log("[MAIN] All Windows Closed");
  app.quit();
});

// https://www.electronjs.org/docs/latest/api/app#event-window-all-closed
// If the user pressed Cmd + Q, or the developer called app.quit(),
// Electron will first try to close all the windows and then emit the will-quit event,
// and in this case the window-all-closed event would not be emitted.
app.once("will-quit", () => {
  console.log("[MAIN] Closing Application");
  app.releaseSingleInstanceLock();
});
