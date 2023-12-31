import path from "node:path";
import { BrowserWindow, ipcMain } from "electron";

import { MAIN_WINDOW_ACTIONS } from "./constants";
import { Settings } from "./Settings";
import { Window } from "./Window";

const MAIN_WINDOW_PREFERENCES = {
	width: 400,
	height: 400,
	x: 200,
	y: 200,

	frame: true,
	resizable: false,
	fullscreen: false,
	fullscreenable: false,
	maximizable: false,
};

export class MainWindow {
	private browserWindow: BrowserWindow;
	private window: Window;

	constructor(settings: Settings) {
		this.window = new Window({
			windowName: "main",
			windowPreferences: MAIN_WINDOW_PREFERENCES,
			settings,
		});

		this.createWindow();
		this.registerHandlers();
	}

	private createWindow() {
		const windowOptions = this.window.getWindowAttributes();
		this.browserWindow = new BrowserWindow({
			...windowOptions,
			webPreferences: {
				nodeIntegration: false,
				contextIsolation: true,
				sandbox: true,
				preload: path.join(__dirname, `preload.mainWindow.js`),
			},
		});

		if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
			this.browserWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
			this.browserWindow.webContents.openDevTools({ mode: "detach" });
		} else {
			this.browserWindow.loadFile(
				path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
			);
		}
	}

	private registerHandlers() {
		this.browserWindow.on("move", () => {
			this.window.saveCurrentWindowPosition(this.browserWindow.getBounds());
		});
		this.browserWindow.on("closed", () => {
			this.close();
		});

		ipcMain.on(MAIN_WINDOW_ACTIONS.LOGOUT, () => {
			console.log("[MAIN WINDOW] Logging out");
		});

		ipcMain.on(MAIN_WINDOW_ACTIONS.CLOSE, () => {
			this.browserWindow.close();
		});
	}

	private close(): void {
		console.log("[MAIN WINDOW] Closing Application");

		const activeWindows = BrowserWindow.getAllWindows().filter(
			(window) => !window.isDestroyed()
		);

		activeWindows.forEach((window) => {
			window.close();
		});
	}

	public sendToWindow(channel: string, ...args: unknown[]) {
		if (!this.browserWindow) {
			return;
		}

		this.browserWindow.webContents.send(channel, ...args);
	}
}
