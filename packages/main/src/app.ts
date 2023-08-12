import { app, ipcMain } from "electron";

import { ILoginFormData } from "@electron-workshop/common";

import { LOGIN_WINDOW_ACTIONS, MAIN_WINDOW_ACTIONS } from "./constants";
import { MainWindow } from "./mainWindow";
import { LoginWindow } from "./loginWindow";

interface IWindows {
	MAIN: MainWindow;
	LOGIN: LoginWindow;
}

const WINDOWS: IWindows = {
	MAIN: null,
	LOGIN: null,
};

export const setupApplication = () => {
	try {
		console.log("[MAIN] Initializing application");

		WINDOWS.MAIN = new MainWindow();

		ipcMain.on(MAIN_WINDOW_ACTIONS.OPEN_LOGIN_WINDOW, () => {
			try {
				if (WINDOWS.LOGIN && WINDOWS.LOGIN.windowExists()) {
					console.log("[LOGIN] Window already opened");
					WINDOWS.LOGIN.show();
					return;
				}

				WINDOWS.LOGIN = new LoginWindow();
			} catch (error) {
				console.error(error);
			}
		});

		ipcMain.handle(
			LOGIN_WINDOW_ACTIONS.SUBMIT,
			async (_event, userToLogin: ILoginFormData) => {
				try {
					// simulate some API call
					await new Promise((resolve) => setTimeout(resolve, 2000));

					console.log("[MAIN] User authenticated", userToLogin);
				} catch (error) {
					console.error(error);
				}
			}
		);
	} catch (error) {
		console.log("[MAIN] Error while initializing application", error);
		app.quit();
	}
};
