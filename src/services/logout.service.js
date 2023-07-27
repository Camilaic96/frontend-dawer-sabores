export default async function logoutService() {
	const url = 'http://localhost:8080/api/auth/logout';
	const headers = {
		'Content-Type': 'application/json',
	};
	const method = 'GET';
	const credentials = 'include';

	return fetch(url, {
		headers,
		method,
		credentials,
	})
		.then(response =>
			response.redirected
				? (window.location.href = response.url)
				: response.json(),
		)
		.then(data => {
			return data;
		})
		.catch(error => console.log(error));
}
