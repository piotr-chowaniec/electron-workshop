import { contextBridge, ipcRenderer } from "electron";

import {
	AuthCallbackType,
	IMainWindowElectronClient,
	IUserData,
} from "@electron-workshop/common";

import { MAIN_WINDOW_ACTIONS } from "./constants";

const electronClient: IMainWindowElectronClient = {
	sendOpenLoginWindow: () =>
		ipcRenderer.send(MAIN_WINDOW_ACTIONS.OPEN_LOGIN_WINDOW),
	onAuthenticated: (callback: AuthCallbackType) =>
		ipcRenderer.on(
			MAIN_WINDOW_ACTIONS.AUTHENTICATED,
			(event: Electron.IpcRendererEvent, userData: IUserData) =>
				callback(userData)
		),
	sendLogout: () => ipcRenderer.send(MAIN_WINDOW_ACTIONS.LOGOUT),
};

contextBridge.exposeInMainWorld("electronClient", electronClient);
