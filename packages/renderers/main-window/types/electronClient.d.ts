import type { IMainWindowElectronClient } from "@electron-workshop/common";

declare global {
	interface Window {
		electronClient: IMainWindowElectronClient;
	}
}
