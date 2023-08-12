import path from "node:path";
import { BrowserWindow } from "electron";

export class LoginWindow {
	private browserWindow: BrowserWindow;

	constructor() {
		this.createWindow();
		this.registerHandlers();
	}

	private createWindow() {
		console.log("[LOGIN] Creating window");
		this.browserWindow = new BrowserWindow({
			width: 400,
			height: 400,
			x: 650,
			y: 200,
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
				path.join(
					__dirname,
					`../renderer/${LOGIN_WINDOW_VITE_NAME}/index.html`
				)
			);
		}
	}

	private registerHandlers() {
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
}
