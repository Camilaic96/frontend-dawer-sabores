import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [idCart, setIdCart] = useState(null);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const userCookie = Cookies.get('user');
		if (userCookie) {
			const userFromCookie = JSON.parse(userCookie);
			setUser(userFromCookie);
		}
	}, []);

	useEffect(() => {
		console.log('llega al useEffect para el fetch de cart');
		if (idCart) {
			console.log('entra en el if');
			console.log(idCart);
			const url = `http://localhost:8080/api/carts/${idCart}`;
			const headers = {
				'Content-Type': 'application/json',
			};

			fetch(url, {
				headers,
			})
				.then(response => response.json())
				.then(data => {
					const cartUser = data.payload;
					setCart(cartUser);
					console.log(cart);
				})
				.catch(error => {
					console.error(error);
					setCart([]); // Establecer el carrito en un array vacío en caso de error
				});
		}
	}, [idCart]);

	const getAllProducts = () => {
		const url = 'http://localhost:8080/api/products';
		const method = 'GET';
		const headers = {
			'Content-Type': 'application/json',
		};
		const products = fetch(url, {
			headers,
			method,
		})
			.then(response => response.json())
			.then(data => {
				const products = data.payload;
				return products;
			})
			.catch(error => setError(error));
		return products;
	};

	const logout = () => {
		Cookies.remove('user');
		setUser(null);
		// Realizar cualquier otra operación relacionada con el cierre de sesión aquí
	};

	const addItem = (item, quantity, user) => {
		const cid = user.cart;
		const pid = item._id;
		console.log(cid, pid);
		const url = `http://localhost:8080/api/carts/${cid}/products/${pid}`;
		const method = 'POST';
		const headers = {
			'Content-Type': 'application/json',
		};
		const body = JSON.stringify({ quantity });
		const cart = fetch(url, {
			headers,
			method,
			body,
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				const cart = data.payload;
				return cart;
			})
			.catch(error => setError(error));
		return cart;
	};

	const removeItem = id => {
		const products = cart.filter(x => x.id !== id);
		setCart(products);
	};

	const clear = () => {
		setCart([]);
	};

	const isInCart = id => {
		return cart.some(x => x.id === id);
	};

	const cartTotal = () => {
		return cart.reduce((total, item) => (total += item.quantity), 0);
	};

	const sumTotal = () => {
		return cart.reduce(
			(total, item) => (total += item.quantity * item.price),
			0,
		);
	};

	return (
		<SessionContext.Provider
			value={{
				user,
				setUser,
				idCart,
				setIdCart,
				cart,
				setCart,
				getAllProducts,
				logout,
				addItem,
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionContextProvider;
