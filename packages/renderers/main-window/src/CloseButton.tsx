import { CloseButton as Button } from "./styles";

export const CloseButton = () => {
	const openLoginWindow = () => {
		window.electronClient.sendCloseWindow();
	};

	return <Button onClick={openLoginWindow}>Close</Button>;
};
