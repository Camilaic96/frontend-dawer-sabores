import Cookies from 'js-cookie';

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
	return fetch(url, {
		headers,
		method,
		body,
	})
		.then(response =>
			response.redirected
				? (window.location.href = response.url)
				: response.json(),
		)
		.then(data => {
			const { payload } = data;
			const user = payload;
			Cookies.set('user', JSON.stringify(user), { expires: 1 });
			return user;
		})
		.catch(error => console.log(error));
}
