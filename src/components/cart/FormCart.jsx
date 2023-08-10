import { useContext, useEffect, useState } from 'react';

import { SessionContext } from '../../context/SessionContext';
import useCart from '../../hooks/useCart';

const FormCart = () => {
	const { cart, user } = useContext(SessionContext);
	const { getCart, purchase } = useCart();

	const [loading, setLoading] = useState(true);

	const sendPurchase = () => {
		console.log(user.cart);
		const ticketData = purchase(user.cart);
		console.log(ticketData);
	};

	return (
		<div className="form-container">
			<h4>¡Último paso!</h4>
			<p>
				Dejanos tus datos para enviar el pedido. Serás redireccionado a Whatsapp
				para terminar de enviarlo.
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
					<button
						className="btn-cart-form btn-cart-form-delete"
						onClick={sendPurchase}
					>
						Eliminar
					</button>
					<button type="submit" className="btn-cart-form btn-cart-form-submit">
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormCart;
