import path from "node:path";

import type { ForgeConfig } from "@electron-forge/shared-types";
import { MakerSquirrel } from "@electron-forge/maker-squirrel";
import { MakerZIP } from "@electron-forge/maker-zip";
import { MakerDeb } from "@electron-forge/maker-deb";
import { MakerRpm } from "@electron-forge/maker-rpm";
import { MakerDMG } from "@electron-forge/maker-dmg";

const MAIN_VITE_CONFIG_PATH = path.join(
	__dirname,
	"packages/main/vite.config.ts"
);

const config: ForgeConfig = {
	packagerConfig: {},
	rebuildConfig: {},
	makers: [
		new MakerSquirrel({}),
		new MakerZIP({}, ["darwin"]),
		new MakerDMG({}),
		new MakerRpm({}),
		new MakerDeb({}),
	],
	plugins: [
		{
			name: "@electron-forge/plugin-vite",
			config: {
				// `build` can specify multiple entry builds, which can be Main process, Preload scripts, Worker process, etc.
				// If you are familiar with Vite configuration, it will look really familiar.
				build: [
					{
						// `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
						entry: "packages/main/src/index.ts",
						config: MAIN_VITE_CONFIG_PATH,
					},
					{
						entry: "packages/main/src/preload.mainWindow.ts",
						config: MAIN_VITE_CONFIG_PATH,
					},
					{
						entry: "packages/main/src/preload.loginWindow.ts",
						config: MAIN_VITE_CONFIG_PATH,
					},
				],
				renderer: [
					{
						name: "main_window",
						config: path.join(
							__dirname,
							"packages/renderers/main-window/vite.config.ts"
						),
					},
					{
						name: "login_window",
						config: path.join(
							__dirname,
							"packages/renderers/login-window/vite.config.ts"
						),
					},
				],
			},
		},
	],
};

export default config;
