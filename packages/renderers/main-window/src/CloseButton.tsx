import { CloseButton as Button } from "./styles";

export const CloseButton = () => {
	const openLoginWindow = () => {
		console.log("Close window");
	};

	return <Button onClick={openLoginWindow}>Close</Button>;
};
