export default async function getCartService(idCart) {
	const url = `http://localhost:8080/api/carts/${idCart}`;
	const method = 'GET';
	const headers = {
		'Content-Type': 'application/json',
	};
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
			const cart = data.payload;
			return cart;
		})
		.catch(error => console.log(error));
}
