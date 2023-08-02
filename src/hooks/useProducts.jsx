import { useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { SessionContext } from '../context/SessionContext';
import productsService from '../services/product.service';

export default function useCart() {
	const { setProducts } = useContext(SessionContext);
	const [state, setState] = useState({ loading: false, error: false });

	const navigate = useNavigate();

	const getProducts = useCallback(async () => {
		console.log('entra en getProducts en useProducts');
		setState({ loading: true, error: false });
		try {
			const productsData = await productsService.getProductsService();
			setState({ loading: false, error: false });
			setProducts(productsData);
		} catch (err) {
			setState({ loading: false, error: true });
			console.error(err);
		}
	}, [setProducts]);

	const deleteProduct = useCallback(
		async idProduct => {
			setState({ loading: true, error: false });
			try {
				await productsService.deleteProductService(idProduct);
				const productsData = await productsService.getProductsService();
				setState({ loading: false, error: false });
				setProducts(productsData);
			} catch (err) {
				setState({ loading: false, error: true });
				console.error(err);
			}
		},
		[setProducts],
	);

	const addProduct = useCallback(
		async newProduct => {
			setState({ loading: true, error: false });
			try {
				console.log(newProduct);
				await productsService.addProductService(newProduct);
				const productsData = await productsService.getProductsService();
				setState({ loading: false, error: false });
				setProducts(productsData);
				navigate('/productos/vinos-y-bebidas');
			} catch (err) {
				setState({ loading: false, error: true });
				console.error(err);
			}
		},
		[setProducts],
	);

	return {
		getProducts,
		deleteProduct,
		addProduct,
	};
}
