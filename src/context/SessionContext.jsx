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

	const addItem = (item, quantity, user) => {
		const cid = user.cart;
		const pid = item._id;
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
				addItem,
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionContextProvider;
