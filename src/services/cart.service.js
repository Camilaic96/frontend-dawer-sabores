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
			console.log(cart);
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
			return data;
		})
		.catch(error => console.log(error));
};

const getProductsCart = async products => {
	try {
		const productsCart = products?.map(product => ({
			name: product.product.name,
			variety: product.product.variety,
			presentation: product.product.presentation,
			producer: product.product.producer,
			status: product.product.status,
			category: product.product.category,
			subcategory: product.product.subcategory,
			price: product.product.price,
			_id: product.product._id,
			quantity: product.quantity,
			total: product.quantity * product.product.price,
		}));
		console.log(productsCart);
		return productsCart;
	} catch (error) {
		throw error;
	}
};

const purchase = async idCart => {
	try {
		const url = `http://localhost:8080/api/carts/${idCart}/purchase`;
		const method = 'POST';
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
				const ticket = data.payload;
				console.log(ticket);
				return ticket;
			})
			.catch(error => console.log(error));
	} catch (error) {
		throw error;
	}
};

export default {
	getCartService,
	createProductInCartService,
	deleteProductOfCartService,
	getProductsCart,
	purchase,
};
