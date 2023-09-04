import fs, { promises } from "node:fs";

import _ from "lodash";

interface DataStore {
	[key: string]: unknown;
}

class Settings {
	private path: string;
	private data: DataStore;

	public async init(path: string) {
		if (!path) {
			throw new Error("The path is required.");
		}

		this.path = path;
		this.data = await this.readSettingsFile();
	}

	private async readSettingsFile() {
		try {
			if (!fs.existsSync(this.path)) {
				return {};
			}

			const settings = await promises.readFile(this.path);
			return JSON.parse(settings.toString()) as DataStore;
		} catch (error) {
			console.error(error);
			return {};
		}
	}

	private async write() {
		try {
			await promises.writeFile(this.path, JSON.stringify(this.data));
		} catch (error) {
			console.error(error);
		}
	}

	public get<T>(key: string) {
		return _.get(this.data, key) as T;
	}

	public set(key: string, value: unknown) {
		_.set(this.data, key, value);
		this.write();
	}
}

export { Settings };
