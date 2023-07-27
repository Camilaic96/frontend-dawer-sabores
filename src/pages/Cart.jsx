import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

const Cart = () => {
	const { cart } = useContext(SessionContext);

	if (!cart) {
		return <p>Cargando el carrito...</p>;
	}

	const products = cart?.products?.map(product => ({
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
									<td scope="col" className="align-middle item-classification">
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
