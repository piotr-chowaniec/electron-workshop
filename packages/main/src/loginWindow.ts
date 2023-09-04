import path from "node:path";
import { BrowserWindow } from "electron";

import { Settings } from "./Settings";
import { Window } from "./Window";

const LOGIN_WINDOW_PREFERENCES = {
	width: 400,
	height: 400,
	x: 650,
	y: 200,

	frame: true,
	resizable: false,
	fullscreen: false,
	fullscreenable: false,
	maximizable: false,
};

export class LoginWindow {
	private browserWindow: BrowserWindow;
	private window: Window;

	constructor(settings: Settings) {
		this.window = new Window({
			windowName: "login",
			windowPreferences: LOGIN_WINDOW_PREFERENCES,
			settings,
		});

		this.createWindow();
		this.registerHandlers();
	}

	private createWindow() {
		console.log("[LOGIN] Creating window");

		const windowOptions = this.window.getWindowAttributes();
		this.browserWindow = new BrowserWindow({
			...windowOptions,
			webPreferences: {
				nodeIntegration: false,
				contextIsolation: true,
				sandbox: true,
				preload: path.join(__dirname, `preload.loginWindow.js`),
			},
		});

		if (LOGIN_WINDOW_VITE_DEV_SERVER_URL) {
			this.browserWindow.loadURL(LOGIN_WINDOW_VITE_DEV_SERVER_URL);
			this.browserWindow.webContents.openDevTools({ mode: "detach" });
		} else {
			this.browserWindow.loadFile(
				path.join(__dirname, `../renderer/${LOGIN_WINDOW_VITE_NAME}/index.html`)
			);
		}
	}

	private registerHandlers() {
		this.browserWindow.on("move", () => {
			this.window.saveCurrentWindowPosition(this.browserWindow.getBounds());
		});

		this.browserWindow.on("closed", () => {
			this.browserWindow = null;
		});
	}

	public windowExists() {
		return this.browserWindow !== null;
	}

	public show() {
		console.log("[LOGIN] Show window");
		this.browserWindow.show();
	}

	public close(): void {
		console.log("[LOGIN] Closing");
		this.browserWindow.close();
	}
}
