import { contextBridge, ipcRenderer } from "electron";

import { IMainWindowElectronClient } from "@electron-workshop/common";

import { MAIN_WINDOW_ACTIONS } from "./constants";

const electronClient: IMainWindowElectronClient = {
	sendOpenLoginWindow: () =>
		ipcRenderer.send(MAIN_WINDOW_ACTIONS.OPEN_LOGIN_WINDOW),
};

contextBridge.exposeInMainWorld("electronClient", electronClient);
