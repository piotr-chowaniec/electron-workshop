import { AuthCallbackType, ILoginFormData } from "./user";

export interface IMainWindowElectronClient {
	sendOpenLoginWindow: () => void;
	onAuthenticated: (callback: AuthCallbackType) => void;
}

export interface ILoginWindowElectronClient {
	invokeSubmitLogin: (userToLogin: ILoginFormData) => void;
}
