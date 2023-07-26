const logoutService = async () => {
	const url = 'http://localhost:8080/api/auth/logout';
	const headers = {
		'Content-Type': 'application/json',
	};
	const credentials = 'include';

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers,
			credentials,
		});

		if (!response.ok) {
			throw new Error('Error en la solicitud de logout');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw new Error('Error en la solicitud de logout');
	}
};

export default logoutService;
