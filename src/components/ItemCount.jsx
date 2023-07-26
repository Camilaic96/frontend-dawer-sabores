import { useState, useEffect, useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

const ItemCount = ({ product, onAdd }) => {
	const { user, cart } = useContext(SessionContext);
	const [counter, setCounter] = useState(0);
	console.log(cart);

	// revisar si el producto existe en el carrito. Si existe actualizar el contador al valor del quantity del carrito

	const increaseCounter = () => {
		if (counter < product.stock) {
			setCounter(counter + 1);
			handleAddToCart();
		}
	};

	const decreaseCounter = () => {
		if (counter > 0) {
			setCounter(counter - 1);
			handleAddToCart();
		}
	};

	const handleAddToCart = () => {
		if (counter > 0) {
			const updatedProduct = { ...product, stock: product.stock - counter };
			onAdd(updatedProduct, counter);
		}
	};
	return (
		<div className="container">
			<div className="col-6 col-md-4 col-lg-2 d-flex justify-content-end">
				<button className="btn-products" onClick={decreaseCounter}>
					<img src={'../img/icons/minus-red.png'} alt="minus sign" />
				</button>
				<button className="btn-products">{counter}</button>
				<button className="btn-products" onClick={increaseCounter}>
					<img src={'../img/icons/plus-red.png'} alt="plus sign" />
				</button>
				<button className="btn-products ms-4">
					{counter === 0 ? (
						<img src={'../img/icons/check-box-red.png'} alt="check box" />
					) : (
						<img
							src={'../img/icons/check-box-checked-red.png'}
							alt="check box"
						/>
					)}
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
