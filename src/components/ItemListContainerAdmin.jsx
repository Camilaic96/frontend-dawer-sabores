import { useContext, useState, useEffect } from 'react';
import { SessionContext } from '../context/SessionContext';
import ManagerAdmin from './ManagerAdmin';
import useProducts from '../hooks/useProducts';
import AddProduct from './AddProduct';

const ItemListContainerAdmin = ({ category }) => {
	const { user, products } = useContext(SessionContext);
	const { getProducts, deleteProduct } = useProducts();

	useEffect(() => {
		getProducts();
	}, [getProducts]);

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

	const onChange = async (item, quantity) => {
		// await updateProduct(user.cart, item._id, quantity);
	};

	const onDelete = async item => {
		await deleteProduct(item._id);
	};

	return (
		<div className="p-3">
			<AddProduct />
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
													<span className="name-product-classification col-md-3 p-3">
														{product.name}
													</span>
													<span className="item-classification col-md-3 p-3">
														| {product.variety}
													</span>
													<span className="item-classification col-md-3 p-3">
														| {product.presentation}
													</span>
													<span className="item-classification col-md-3 p-3">
														| ${product.price}
													</span>
												</div>
												<ManagerAdmin
													product={product}
													onChange={onChange}
													onDelete={onDelete}
												/>
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

export default ItemListContainerAdmin;
