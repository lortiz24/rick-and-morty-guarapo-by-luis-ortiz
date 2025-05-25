export const getEnvVariables = () => {
	return {
		VITE_BASE_URL: import.meta.env.VITE_BASE_URL,
	};
};
