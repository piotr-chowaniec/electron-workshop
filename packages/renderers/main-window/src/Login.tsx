import { LoginButton, LoginContainer } from "./styles";

export const Login = () => {
	const openLoginWindow = () => {
		console.log("Open login window");
	};

	return (
		<LoginContainer>
			<LoginButton onClick={openLoginWindow}>
				Let's check it out!
			</LoginButton>
		</LoginContainer>
	);
};
