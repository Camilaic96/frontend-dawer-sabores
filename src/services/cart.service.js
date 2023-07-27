const getCartService = async idCart => {
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
};

const createProductInCartService = async (idCart, idProduct, quantity) => {
	const url = `http://localhost:8080/api/carts/${idCart}/products/${idProduct}`;
	const method = 'POST';
	const headers = {
		'Content-Type': 'application/json',
	};
	const body = JSON.stringify({
		quantity,
	});
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
			console.log(data);
			const cart = data.payload;
			return cart;
		})
		.catch(error => console.log(error));
};

const deleteProductOfCartService = async (idCart, idProduct) => {
	const url = `http://localhost:8080/api/carts/${idCart}/products/${idProduct}`;
	const method = 'DELETE';
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
};

export default {
	getCartService,
	createProductInCartService,
	deleteProductOfCartService,
};
