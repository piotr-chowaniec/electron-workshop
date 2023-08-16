import { CloseButton as Button } from "./styles";

export const CloseButton = () => {
	const closeWindow = () => {
		window.electronClient.sendCloseWindow();
	};

	return <Button onClick={closeWindow}>Close</Button>;
};
