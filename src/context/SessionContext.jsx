import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import cartService from '../services/cart.service';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState({});
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const userCookie = Cookies.get('user');
		if (userCookie) {
			const userFromCookie = JSON.parse(userCookie);
			setUser(userFromCookie);
			const cartCookie = cartService.getCartService(userCookie.cart);
			setCart(cartCookie);
		}
	}, []);

	return (
		<SessionContext.Provider
			value={{
				user,
				setUser,
				cart,
				setCart,
				products,
				setProducts,
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionContextProvider;
