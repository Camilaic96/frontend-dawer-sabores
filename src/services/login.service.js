export default function login({ email, password }) {
	const obj = {
		email,
		password,
	};
	const url = 'http://localhost:8080/api/auth';
	const headers = {
		'Content-Type': 'application/json',
	};
	const method = 'POST';
	const body = JSON.stringify(obj);
	const credentials = 'include';
	return fetch(url, {
		headers,
		method,
		body,
		credentials,
	})
		.then(response =>
			response.redirected
				? (window.location.href = response.url)
				: response.json(),
		)
		.then(data => {
			const user = data.payload;
			return user;
		})
		.catch(error => console.log(error));
}
