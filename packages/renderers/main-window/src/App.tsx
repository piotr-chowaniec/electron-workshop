import { useState } from "react";

import { IUserData } from "@electron-workshop/common";

import useInitialize from "./hooks/useInitialize.hook";
import {
	Container,
	GlobalStyles,
	LoggedInContainer,
	LogoutButton,
} from "./styles";
import { Login } from "./Login";
import { CloseButton } from "./CloseButton";

const MainWindow = () => {
	const [currentUser, setCurrentUser] = useState<IUserData | null>(null);
	const { isInitialized } = useInitialize({ setCurrentUser });

	const onLogout = () => {
		setCurrentUser(null);
		window.electronClient.sendLogout();
	};

	if (!isInitialized) {
		return <p>Initializing...</p>;
	}

	if (!currentUser) {
		return <Login />;
	}

	return (
		<LoggedInContainer>
			<span>Welcome, {currentUser.name}!</span>
			<span>Your email: {currentUser.email}</span>
			<LogoutButton onClick={onLogout}>Logout</LogoutButton>
		</LoggedInContainer>
	);
};

export const App = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<h2>Electron Workshop</h2>
				<MainWindow />
				<CloseButton />
			</Container>
		</>
	);
};
