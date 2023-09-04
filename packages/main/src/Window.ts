import {
	screen,
	Display,
	Rectangle,
	BrowserWindowConstructorOptions,
} from "electron";

import { Settings } from "./Settings";

interface Position {
	x: number;
	y: number;
}

type WindowSettings = Position & {
	preferredDisplay: number;
};

interface WindowParams {
	windowName: string;
	windowPreferences: BrowserWindowConstructorOptions;
	settings: Settings;
}

class Window {
	private settingsKey: string;
	private windowPreferences: BrowserWindowConstructorOptions;
	private settings: Settings;

	constructor({ windowName, windowPreferences, settings }: WindowParams) {
		this.settingsKey = `window.${windowName}`;
		this.windowPreferences = windowPreferences;
		this.settings = settings;
	}

	private getMatchingDisplay(windowSettings: WindowSettings) {
		if (!windowSettings) {
			return;
		}

		const matchingDisplay = screen
			.getAllDisplays()
			.find((display) => display.id === windowSettings.preferredDisplay);

		return matchingDisplay;
	}

	private getWindowPosition(
		matchingDisplay: Display,
		windowSettings: WindowSettings
	): Position {
		if (matchingDisplay) {
			return {
				x: windowSettings.x,
				y: windowSettings.y,
			};
		}

		return {
			x: this.windowPreferences.x,
			y: this.windowPreferences.y,
		};
	}

	public getWindowAttributes() {
		const windowSettings = this.settings.get<WindowSettings>(this.settingsKey);

		if (!windowSettings) {
			return this.windowPreferences;
		}

		const matchingDisplay = this.getMatchingDisplay(windowSettings);
		const windowPosition = this.getWindowPosition(
			matchingDisplay,
			windowSettings
		);

		return {
			...this.windowPreferences,
			...windowPosition,
		};
	}

	public saveCurrentWindowPosition(bounds: Rectangle) {
		const display = screen.getDisplayMatching(bounds);

		const windowPreferences = {
			x: bounds.x,
			y: bounds.y,
			preferredDisplay: display.id,
		};

		this.settings.set(this.settingsKey, windowPreferences);
	}
}

export { Window };
