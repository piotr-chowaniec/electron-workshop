import { ILoginFormData } from "./user";

export interface IMainWindowElectronClient {
	sendOpenLoginWindow: () => void;
}

export interface ILoginWindowElectronClient {
	invokeSubmitLogin: (userToLogin: ILoginFormData) => void;
}
