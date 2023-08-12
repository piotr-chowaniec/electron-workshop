import { app, ipcMain } from "electron";

import { MAIN_WINDOW_ACTIONS } from "./constants";
import { MainWindow } from "./mainWindow";

interface IWindows {
	MAIN: MainWindow;
}

const WINDOWS: IWindows = {
	MAIN: null,
};

export const setupApplication = () => {
	try {
		console.log("[MAIN] Initializing application");

		WINDOWS.MAIN = new MainWindow();

		ipcMain.on(MAIN_WINDOW_ACTIONS.OPEN_LOGIN_WINDOW, () => {
			try {
				console.log("[MAIN] Opening login window");
			} catch (error) {
				console.error(error);
			}
		});
	} catch (error) {
		console.log("[MAIN] Error while initializing application", error);
		app.quit();
	}
};
