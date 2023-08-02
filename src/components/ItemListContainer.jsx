import { useContext, useState, useEffect } from 'react';
import { SessionContext } from '../context/SessionContext';
import ItemCount from './ItemCount';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';

const ItemListContainer = ({ category, subcategory }) => {
	const { user, products } = useContext(SessionContext);
	const { createProductInCart, deleteProductOfCart, getCart } = useCart();
	const { getProducts } = useProducts();

	useEffect(() => {
		getProducts();
	}, [getProducts]);

	useEffect(() => {
		if (user?.cart) {
			console.log('user.cart:', user.cart);
			getCart(user.cart);
		}
	}, [user.cart, getCart]);

	const filteredProducts = subcategory
		? products?.filter(
				product =>
					product.category === category && product.subcategory === subcategory,
		  )
		: products?.filter(product => product.category === category);

	// Agrupa los productos filtrados por productor (como lo hacías previamente)
	const groupedProducts = {};
	filteredProducts?.forEach(product => {
		if (!groupedProducts[product.producer]) {
			groupedProducts[product.producer] = [];
		}
		groupedProducts[product.producer].push(product);
	});

	const onAdd = async (item, quantity) => {
		await createProductInCart(user.cart, item._id, quantity);
	};

	const onDelete = async item => {
		await deleteProductOfCart(user.cart, item._id);
	};

	return (
		<div className="p-3">
			{products &&
				Object.keys(groupedProducts).map(producer => (
					<div key={producer} className="container-classification">
						<h4 className="title-classification">{producer}</h4>
						<div className="body-classification">
							<table className="table">
								<tbody>
									{groupedProducts[producer].map(product => (
										<tr key={product._id}>
											<td colSpan={12} className="row-table">
												<div className="row-table-info col-6 col-md-8 col-lg-10">
													<span className="name-product-classification col-md-3 p-3">
														{product.name}
													</span>
													<span className="item-classification col-md-3 p-3">
														| {product.variety}
													</span>
													<span className="item-classification col-md-3 p-3">
														| {product.presentation}
													</span>
													<span className="item-classification col-md-3 p-3">
														| ${product.price}
													</span>
												</div>
												<ItemCount
													product={product}
													onAdd={onAdd}
													onDelete={onDelete}
												/>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				))}
		</div>
	);
};

export default ItemListContainer;
