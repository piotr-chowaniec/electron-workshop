import { contextBridge, ipcRenderer } from "electron";

import {
	ILoginFormData,
	ILoginWindowElectronClient,
} from "@electron-workshop/common";

import { LOGIN_WINDOW_ACTIONS } from "./constants";

const electronClient: ILoginWindowElectronClient = {
	invokeSubmitLogin: (userToLogin: ILoginFormData) =>
		ipcRenderer.invoke(LOGIN_WINDOW_ACTIONS.SUBMIT, userToLogin),
};

contextBridge.exposeInMainWorld("electronClient", electronClient);
