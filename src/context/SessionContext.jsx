import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import cartService from '../services/cart.service';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState({});

	useEffect(() => {
		const userCookie = Cookies.get('user');
		if (userCookie) {
			const userFromCookie = JSON.parse(userCookie);
			setUser(userFromCookie);
			const cartCookie = cartService.getCartService(userCookie.cart);
			setCart(cartCookie);
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

	return (
		<SessionContext.Provider
			value={{
				user,
				setUser,
				cart,
				setCart,
				getAllProducts,
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionContextProvider;
