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
				const cartData = await cartServices.getCartService(idCart);
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

	const getProductsCart = useCallback(
		async idCart => {
			setState({ loading: true, error: false });
			try {
				const cartData = await cartServices.getCartService(idCart);
				const productsData = cartData.products;
				const productsCart = await cartServices.getProductsCart(productsData);
				setState({ loading: false, error: false });
				console.log(productsCart);
				return productsCart;
			} catch (err) {
				setState({ loading: false, error: true });
				console.error(err);
			}
		},
		[setCart],
	);

	const purchase = useCallback(
		async idCart => {
			setState({ loading: true, error: false });
			try {
				const ticketData = await cartServices.purchase(idCart);
				console.log(ticketData);
				setState({ loading: false, error: false });
				return ticketData;
			} catch (err) {
				setState({ loading: false, error: true });
				console.error(err);
			}
		},
		[setCart],
	);

	return {
		isLoading: state.loading,
		hasError: state.error,
		getCart,
		createProductInCart,
		deleteProductOfCart,
		getProductsCart,
		purchase,
	};
}
