import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../context/SessionContext';
import ItemCount from '../components/ItemCount';
import useCart from '../hooks/useCart';

const Cart = () => {
	const { cart, user } = useContext(SessionContext);
	const { createProductInCart, deleteProductOfCart, getCart } = useCart();
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (user?.cart) {
			console.log('user.cart:', user.cart);
			getCart(user.cart).then(() => setIsLoading(false));
		}
	}, [user, getCart]);

	useEffect(() => {
		const getProductsCart = () => {
			console.log(cart);
			const productsCart = cart?.products?.map(product => ({
				name: product.product.name,
				variety: product.product.variety,
				presentation: product.product.presentation,
				producer: product.product.producer,
				status: product.product.status,
				category: product.product.category,
				subcategory: product.product.subcategory,
				price: product.product.price,
				_id: product.product._id,
				quantity: product.quantity,
				total: product.quantity * product.product.price,
			}));
			console.log(productsCart);
			setProducts(productsCart);
		};
		getProductsCart();
	}, [cart]);

	const onAdd = async (item, quantity) => {
		await createProductInCart(user.cart, item._id, quantity);
		// Actualiza el carrito después de agregar el producto
		getCart(user.cart);
	};

	const onDelete = async item => {
		await deleteProductOfCart(user.cart, item._id);
		// Actualiza el carrito después de eliminar el producto
		getCart(user.cart);
	};

	if (isLoading) {
		return <p>Cargando el carrito...</p>;
	}

	return (
		<div className="offset-md-1 col-md-10">
			<div className="cart-list">
				<h2 className="cart-title">Mi lista</h2>
				<table className="table">
					<tbody>
						{products &&
							products.map(product => (
								<tr key={product._id}>
									<td scope="col">
										<div className="d-flex align-items-center">
											<button className="btn-products">
												<img
													src={'../img/icons/check-box-checked-blue.png'}
													alt="check box"
													className="mb-3"
												/>
											</button>
											<p className="prod-classification"> {product.name}</p>
										</div>
									</td>
									<td
										scope="col"
										className="align-middle item-classification text-start"
									>
										| {product.variety}
									</td>
									<td
										scope="col"
										className="align-middle item-classification  text-start"
									>
										| {product.presentation}
									</td>
									<td
										scope="col"
										className="align-middle item-classification  text-start"
									>
										| {product.total}
									</td>
									<td>
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
			<div className="form-container">
				<h4>¡Último paso!</h4>
				<p>
					Dejanos tus datos para enviar el pedido. Serás redireccionado a
					Whatsapp para terminar de enviarlo.
				</p>
				<form action="" id="cart-form" className="row">
					<div className="body-cart-form">
						<div>
							<input
								type="text"
								placeholder="Nombre y Apellido"
								className="input-with-icon user col-12 col-lg-5"
							/>
							<input
								type="email"
								placeholder="Correo electrónico"
								className="input-with-icon at col-12 offset-lg-2 col-lg-5"
							/>
						</div>

						<input
							type="text"
							placeholder="Dejanos tu comentario"
							className="input-with-icon pencil col-12"
						/>
					</div>
					<div className="container-btn-cart-form">
						<button className="btn-cart-form btn-cart-form-delete">
							Eliminar
						</button>
						<button
							type="submit"
							className="btn-cart-form btn-cart-form-submit"
						>
							Enviar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Cart;
