import FormCart from '../components/cart/FormCart';
import ListProductsCart from '../components/cart/ListProductsCart';

const Cart = () => {
	return (
		<div className="offset-md-1 col-md-10">
			<ListProductsCart />
			<FormCart />
		</div>
	);
};

export default Cart;
