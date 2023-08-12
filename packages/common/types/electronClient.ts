import { AuthCallbackType, ILoginFormData } from "./user";

export interface IMainWindowElectronClient {
	sendOpenLoginWindow: () => void;
	onAuthenticated: (callback: AuthCallbackType) => void;
	sendLogout: () => void;
}

export interface ILoginWindowElectronClient {
	invokeSubmitLogin: (userToLogin: ILoginFormData) => void;
}
