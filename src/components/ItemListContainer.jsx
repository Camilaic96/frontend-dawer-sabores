import { useContext, useState, useEffect } from 'react';

import { SessionContext } from '../context/SessionContext';
import ItemCount from './ItemCount';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';

const ItemListContainer = ({ category, subcategory }) => {
	const { user } = useContext(SessionContext);
	const { createProductInCart, deleteProductOfCart, getCart } = useCart();
	const { filteredProducts } = useProducts();

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const groupedProducts = await filteredProducts(category, subcategory);
			setProducts(groupedProducts);
			setLoading(false);
		};

		fetchData();
	}, [category, subcategory, filteredProducts]);

	useEffect(() => {
		if (user?.cart) {
			getCart(user.cart);
		}
	}, [user?.cart, getCart]);

	const onAdd = async (item, quantity) => {
		await createProductInCart(user.cart, item._id, quantity);
	};

	const onDelete = async item => {
		await deleteProductOfCart(user.cart, item._id);
	};

	return (
		<div>
			{loading ? (
				<div>Cargando...</div>
			) : (
				Object.keys(products).map(producer => (
					<div key={producer} className="container-table">
						<h4 className="title-table">{producer}</h4>
						<div className="body-table">
							{products[producer].map(product => (
								<div key={product._id} className="row-table">
									<div className="row-table-info col-lg-10">
										<div className="name-product-table col-md-3 col-lg-4">
											{product.name}
										</div>
										<div className="item-table col-md-3 col-lg-3">
											| {product.variety}
										</div>
										<div className="item-table col-md-3 col-lg-3">
											| {product.presentation}
										</div>
										<div className="item-table col-md-3 col-lg-2">
											| ${product.price}
										</div>
									</div>
									<div className="count-table col-md-3 col-lg-2">
										<ItemCount
											product={product}
											onAdd={onAdd}
											onDelete={onDelete}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default ItemListContainer;
