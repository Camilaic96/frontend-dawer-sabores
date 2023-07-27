import { useContext, useState, useCallback } from 'react';
import { SessionContext } from '../context/SessionContext';
import getCartService from '../services/cart.service';

export default function useCart() {
	const { setCart } = useContext(SessionContext);
	const [state, setState] = useState({ loading: false, error: false });

	const getCart = useCallback(
		async idCart => {
			setState({ loading: true, error: false });
			try {
				const cartData = await getCartService(idCart);
				setState({ loading: false, error: false });
				setCart(cartData);
			} catch (err) {
				setState({ loading: false, error: true });
				console.error(err);
			}
		},
		[setCart],
	);

	return {
		isCartLoading: state.loading,
		hasCartError: state.error,
		getCart,
	};
}
