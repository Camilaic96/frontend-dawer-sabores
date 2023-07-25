import React from 'react';
import { useFetch } from './useFetch';

const ItemListContainer = ({ category }) => {
	const { data, loading, error } = useFetch(
		'http://localhost:8080/api/products',
		'GET',
	);

	if (loading) {
		return <p>Loading . . .</p>;
	}

	const { payload } = data;
	const products = [...payload];

	console.log(category);
	const filteredProducts = products.filter(
		product => product.category === category,
	);

	const groupedProducts = {};
	filteredProducts.forEach(product => {
		if (!groupedProducts[product.producer]) {
			groupedProducts[product.producer] = [];
		}
		groupedProducts[product.producer].push(product);
	});

	return (
		<div className="p-3">
			{data &&
				Object.keys(groupedProducts).map(producer => (
					<div key={producer} className="container-classification">
						<h4 className="title-classification">{producer}</h4>
						<div className="body-classification">
							<table className="table">
								<tbody>
									{groupedProducts[producer].map(product => (
										<tr key={product.name}>
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
												<div className="col-6 col-md-4 col-lg-2 d-flex justify-content-end">
													<button className="btn-products">
														<img
															src={'../img/icons/minus-red.png'}
															alt="minus sign"
														/>
													</button>
													<button className="btn-products">0</button>
													<button className="btn-products">
														<img
															src={'../img/icons/plus-red.png'}
															alt="plus sign"
														/>
													</button>
													<button className="btn-products ms-4">
														<img
															src={'../img/icons/check-box-red.png'}
															alt="check box"
														/>
													</button>
												</div>
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
