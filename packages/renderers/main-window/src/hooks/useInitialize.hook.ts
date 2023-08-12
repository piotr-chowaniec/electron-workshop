import { useEffect, useState } from "react";

const useInitialize = () => {
	const [isInitialized, setInitialized] = useState(false);

	const initialize = async () => {
		try {
			if (isInitialized) {
				return;
			}

			// simulate some async initialization
			await new Promise((resolve) => setTimeout(resolve, 2000));
		} catch (error) {
			console.error(error);
		} finally {
			setInitialized(true);
		}
	};

	useEffect(() => {
		void initialize();
	}, []);

	return {
		isInitialized,
	};
};

export default useInitialize;
