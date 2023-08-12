import { app } from "electron";

export const setupApplication = () => {
	try {
		console.log("[MAIN] Initializing application");
	} catch (error) {
		console.log("[MAIN] Error while initializing application", error);
		app.quit();
	}
};
