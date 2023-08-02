const getProductsService = async () => {
	const url = 'http://localhost:8080/api/products';
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
			const products = data.payload;
			return products;
		})
		.catch(error => console.log(error));
};

const deleteProductService = async idProduct => {
	const url = `http://localhost:8080/api/products/${idProduct}`;
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
			return data;
		})
		.catch(error => console.log(error));
};

const addProductService = async newProduct => {
	const url = 'http://localhost:8080/api/products';
	const method = 'POST';
	const headers = {
		'Content-Type': 'application/json',
	};
	const body = JSON.stringify(newProduct);
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
			return data;
		})
		.catch(error => console.log(error));
};

export default {
	getProductsService,
	deleteProductService,
	addProductService,
};
