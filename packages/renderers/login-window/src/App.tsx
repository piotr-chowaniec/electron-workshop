import { GlobalStyles, Container } from "./styles";
import { LoginForm } from "./LoginForm";

export const App = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<LoginForm />
			</Container>
		</>
	);
};
