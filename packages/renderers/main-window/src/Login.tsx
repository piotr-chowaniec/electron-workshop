import { LoginButton, LoginContainer } from "./styles";

export const Login = () => {
	const openLoginWindow = () => {
		window.electronClient.sendOpenLoginWindow();
	};

	return (
		<LoginContainer>
			<LoginButton onClick={openLoginWindow}>
				Let's check it out!
			</LoginButton>
		</LoginContainer>
	);
};
