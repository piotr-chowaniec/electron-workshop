import type { ILoginWindowElectronClient } from "@electron-workshop/common";

declare global {
	interface Window {
		electronClient: ILoginWindowElectronClient;
	}
}
