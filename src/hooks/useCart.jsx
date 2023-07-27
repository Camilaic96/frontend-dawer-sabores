import { useContext, useState, useCallback } from 'react';
import { SessionContext } from '../context/SessionContext';
import cartServices from '../services/cart.service';

export default function useCart() {
	const { setCart } = useContext(SessionContext);
	const [state, setState] = useState({ loading: false, error: false });

	const getCart = useCallback(
		async idCart => {
			setState({ loading: true, error: false });
			try {
				console.log('getCart called'); // Registra que se está llamando la función
				const cartData = await cartServices.getCartService(idCart);
				console.log('cartData:', cartData); // Registra los datos obtenidos del carrito
				setState({ loading: false, error: false });
				setCart(cartData);
			} catch (err) {
				setState({ loading: false, error: true });
				console.error(err);
			}
		},
		[setCart],
	);

	const createProductInCart = useCallback(
		async (idCart, idProduct, quantity) => {
			setState({ loading: true, error: false });
			try {
				console.log(idCart, idProduct, quantity);
				const cartData = await cartServices.createProductInCartService(
					idCart,
					idProduct,
					quantity,
				);
				setState({ loading: false, error: false });
				setCart(cartData);
			} catch (err) {
				setState({ loading: false, error: true });
				console.error(err);
			}
		},
		[setCart],
	);

	const deleteProductOfCart = useCallback(
		async (idCart, idProduct) => {
			setState({ loading: true, error: false });
			try {
				console.log(idCart, idProduct);
				const cartData = await cartServices.deleteProductOfCartService(
					idCart,
					idProduct,
				);
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
		createProductInCart,
		deleteProductOfCart,
	};
}
