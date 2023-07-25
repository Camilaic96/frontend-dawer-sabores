import { useContext, useState, useEffect } from 'react';
import { SessionContext } from '../context/SessionContext';
const Cart = () => {
	const { getCart, user } = useContext(SessionContext);
	const [cartData, setCartData] = useState(null); // Estado para almacenar los datos del carrito

	useEffect(() => {
		// Llama a la función getCart y utiliza async/await para esperar la respuesta
		const fetchCartData = async () => {
			try {
				const cart = await getCart(user);
				setCartData(cart); // Guarda los datos del carrito en el estado
			} catch (error) {
				console.log(error);
			}
		};
		fetchCartData();
	}, [getCart, user]);

	// Comprueba si los datos del carrito están cargados y muestra el contenido
	if (!cartData) {
		return <p>Cargando el carrito...</p>;
	}

	const products = cartData.products.map(product => ({
		name: product.product.name,
		variety: product.product.variety,
		presentation: product.product.presentation,
		producer: product.product.producer,
		status: product.product.status,
		category: product.product.category,
		subcategory: product.product.subcategory,
		_id: product.product._id,
		quantity: product.quantity,
	}));

	return (
		<div className="offset-md-1 col-md-10">
			<div className="cart-list">
				<h2 className="cart-title">Mi lista</h2>
				<table className="table">
					<tbody>
						{products &&
							products.map(product => (
								<tr key={product._id}>
									<td scope="col" colSpan={4}>
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
										colSpan={3}
									>
										| {product.variety}
									</td>
									<td
										scope="col"
										className="align-middle item-classification  text-start"
										colSpan={3}
									>
										| {product.presentation}
									</td>
									<td
										scope="col"
										className="align-middle item-classification"
										colSpan={2}
									>
										<div className="d-flex align-items-center justify-content-end mx-5">
											<button className="btn-products">
												<img
													src={'../img/icons/minus-blue.png'}
													alt="minus sign"
												/>
											</button>
											<button className="btn-products">0</button>
											<button className="btn-products">
												<img
													src={'../img/icons/plus-blue.png'}
													alt="plus sign"
												/>
											</button>
										</div>
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
