import { useContext, useState, useEffect } from 'react';
import { SessionContext } from '../context/SessionContext';
import ItemCount from './ItemCount';

const ItemListContainer = ({ category }) => {
	const { getAllProducts, addItem, user } = useContext(SessionContext);
	const [products, setProducts] = useState(null);
	const [item, setItem] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const products = await getAllProducts();
				setProducts(products);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, [getAllProducts]);

	const filteredProducts = products?.filter(
		product => product.category === category,
	);

	const groupedProducts = {};
	filteredProducts?.forEach(product => {
		if (!groupedProducts[product.producer]) {
			groupedProducts[product.producer] = [];
		}
		groupedProducts[product.producer].push(product);
	});

	const onAdd = (item, quantity) => {
		console.log(item);
		console.log(quantity);
		console.log(user);
		addItem(item, quantity, user);
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
													<span className="name-product-classification col-md-4">
														{product.name}
													</span>
													<span className="item-classification col-md-4">
														| {product.variety}
													</span>
													<span className="item-classification col-md-4">
														| {product.presentation}
													</span>
												</div>
												<ItemCount product={product} onAdd={onAdd} />
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
