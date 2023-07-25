import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
	const [session, setSession] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const userCookie = Cookies.get('user');
		if (userCookie) {
			const userFromCookie = JSON.parse(userCookie);
			setUser(userFromCookie);
		}
	}, []);

	const getCart = user => {
		const cid = user.cart;
		console.log(cid);
		const url = `http://localhost:8080/api/carts/${cid}`;
		const method = 'GET';
		const headers = {
			'Content-Type': 'application/json',
		};
		const cart = fetch(url, {
			headers,
			method,
		})
			.then(response => response.json())
			.then(data => {
				const cart = data.payload;
				return cart;
			})
			.catch(error => setError(error));
		return cart;
	};

	const getProductOfCart = () => {};

	const logout = () => {
		Cookies.remove('user');
		setUser(null);
		// Realizar cualquier otra operación relacionada con el cierre de sesión aquí
	};

	return (
		<SessionContext.Provider
			value={{
				session,
				setSession,
				user,
				setUser,
				getCart,
				getProductOfCart,
				logout,
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionContextProvider;
