export interface ILoginFormData {
	email: string;
	password: string;
}

export interface IUserData {
	id: number;
	email: string;
	name: string;
}

export type AuthCallbackType = (userData: IUserData) => void;
