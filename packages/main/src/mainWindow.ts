import path from "node:path";
import { BrowserWindow } from "electron";

export class MainWindow {
	private browserWindow: BrowserWindow;

	constructor() {
		this.createWindow();
	}

	private createWindow() {
		this.browserWindow = new BrowserWindow({
			width: 400,
			height: 400,
			x: 200,
			y: 200,
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
				path.join(
					__dirname,
					`../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`
				)
			);
		}
	}
}
