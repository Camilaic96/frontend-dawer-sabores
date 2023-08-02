import { useState, useEffect, useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import { useParams } from 'react-router-dom';

const FilterSubcategories = ({ onSubcategorySelect }) => {
	const { products } = useContext(SessionContext);
	const { id } = useParams();
	const [subcategories, setSubcategories] = useState([]);

	useEffect(() => {
		console.log(products);
		console.log(id);
		const currentCategory = id;
		const uniqueSubcategories = [
			...new Set(
				products
					.filter(product => product.category === currentCategory)
					.map(product => product.subcategory),
			),
		];

		setSubcategories(uniqueSubcategories);
	}, [id, products]);

	return (
		<div className="container-filter">
			<div className="d-flex justify-content-end">
				<button
					className="btn-filter"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseFilter"
					aria-expanded="false"
					aria-controls="collapseFilter"
				>
					Filtrar
					<img
						src="../img/icons/filter-blue.png"
						alt="filter icon"
						width="18"
					/>
				</button>
			</div>
			<div className="d-flex justify-content-start">
				<div className="collapse" id="collapseFilter">
					{subcategories.map(subcategory => (
						<button
							key={subcategory}
							className="btn-filter-item"
							type="button"
							onClick={() => onSubcategorySelect(subcategory)}
						>
							{subcategory}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default FilterSubcategories;
