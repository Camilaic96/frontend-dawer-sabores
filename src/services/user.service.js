const login = async obj => {
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
};

const logout = async () => {
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
};

const register = async obj => {
	const url = 'http://localhost:8080/api/users';
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
			console.log(data);
			const user = data.payload;
			console.log(user);
			return user;
		})
		.catch(error => console.log(error));
};

export default {
	login,
	logout,
	register,
};
