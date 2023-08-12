import { useState } from "react";

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
	const [currentUser, setCurrentUser] = useState<null>(null);
	const { isInitialized } = useInitialize();

	const onLogout = () => {
		setCurrentUser(null);
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
