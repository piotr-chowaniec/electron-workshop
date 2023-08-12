import { app } from "electron";

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
	} catch (error) {
		console.log("[MAIN] Error while initializing application", error);
		app.quit();
	}
};
