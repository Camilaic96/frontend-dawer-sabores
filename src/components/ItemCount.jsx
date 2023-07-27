import { useState, useEffect, useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

const ItemCount = ({ product, onAdd, onDelete }) => {
	const { cart } = useContext(SessionContext);
	const [counter, setCounter] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Verifica si el carrito y sus productos ya se han obtenido del SessionContext
		if (cart?.products?.length > 0) {
			const cartProduct = cart.products.find(
				item => item.product._id === product._id,
			);

			if (cartProduct) {
				setCounter(cartProduct.quantity);
			}
			setIsLoading(false); // Establece isLoading como false para renderizar el componente
		}
	}, [cart, product]);

	const increaseCounter = () => {
		if (counter < /* product.stock */ 20) {
			const newCounter = counter + 1;
			setCounter(newCounter);
			handleAddToCart(newCounter);
		}
	};

	const decreaseCounter = () => {
		if (counter > 0) {
			const newCounter = counter - 1;
			setCounter(newCounter);
			handleAddToCart(newCounter);
		}
	};

	const handleAddToCart = newCounter => {
		if (newCounter > 0) {
			onAdd(product, newCounter);
		}
	};

	const deleteProductToCart = () => {
		onDelete(product);
		setCounter(0);
	};

	// Si isLoading es true, muestra un mensaje de carga
	if (isLoading) {
		return <div>Cargando...</div>;
	}

	// Si isLoading es false, renderiza el componente normalmente
	return (
		<div className="container p-3">
			<div className="col-6 col-md-4 col-lg-2 d-flex justify-content-end">
				<button className="btn-products" onClick={decreaseCounter}>
					<img src={'../img/icons/minus-red.png'} alt="minus sign" />
				</button>
				<button className="btn-products">{counter}</button>
				<button className="btn-products" onClick={increaseCounter}>
					<img src={'../img/icons/plus-red.png'} alt="plus sign" />
				</button>
				<div>
					{counter === 0 ? (
						<button className="btn-products">
							<img src={'../img/icons/check-box-red.png'} alt="check box" />
						</button>
					) : (
						<button className="btn-products" onClick={deleteProductToCart}>
							<img
								src={'../img/icons/check-box-checked-red.png'}
								alt="check box"
							/>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemCount;
