import { useContext, useEffect, useState } from 'react';

import { SessionContext } from '../../context/SessionContext';
import ItemCount from '../ItemCount';
import useCart from '../../hooks/useCart';

const ListProductsCart = () => {
	const { cart, user } = useContext(SessionContext);
	const { createProductInCart, deleteProductOfCart, getCart, getProductsCart } =
		useCart();

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user?.cart) {
			getCart(user.cart).then(() => setLoading(false));
		}
	}, [user, getCart]);

	useEffect(() => {
		const fetchData = async () => {
			const productsCart = await getProductsCart(cart._id);
			setProducts(productsCart);
			setLoading(false);
		};

		fetchData();
	}, [getProductsCart]);

	const onAdd = async (item, quantity) => {
		await createProductInCart(user.cart, item._id, quantity);
	};

	const onDelete = async item => {
		await deleteProductOfCart(user.cart, item._id);
	};

	if (loading) {
		return <p>Cargando el carrito...</p>;
	}
	return (
		<div className="cart-list">
			<h2 className="cart-title">Mi lista</h2>
			<div className="cart-body">
				{loading ? (
					<div>Cargando...</div>
				) : (
					products.map(product => (
						<div key={product._id} className="row-table">
							<div className="row-table-info col-md-9">
								<div className="name-product-table col-lg-4">
									{product.name}
								</div>
								<div className="item-table col-lg-3">| {product.variety}</div>
								<div className="item-table col-lg-3">
									| {product.presentation}
								</div>
								<div className="item-table col-lg-2">| ${product.total}</div>
							</div>
							<div className="count-table col-md-3">
								<ItemCount
									product={product}
									onAdd={onAdd}
									onDelete={onDelete}
								/>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default ListProductsCart;
