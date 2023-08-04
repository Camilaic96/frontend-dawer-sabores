import { useState, useEffect, useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const FilterSubcategories = ({ onSubcategorySelect }) => {
	const { products } = useContext(SessionContext);
	const { id } = useParams();
	const { getProducts, isLoading } = useProducts();
	const [subcategories, setSubcategories] = useState([]);
	const [allProducts, setAllProducts] = useState([]);
	const [activeSubcategory, setActiveSubcategory] = useState(null);

	useEffect(() => {
		getProducts();
	}, [getProducts]);

	useEffect(() => {
		const currentCategory = id;
		const uniqueSubcategories = [
			...new Set(
				products
					.filter(product => product.category === currentCategory)
					.map(product => product.subcategory),
			),
		];
		setSubcategories(uniqueSubcategories);

		setAllProducts(
			products.filter(product => product.category === currentCategory),
		);
	}, [id, products]);

	const handleSubcategoryClick = subcategory => {
		if (activeSubcategory === subcategory) {
			subcategory = null;
		}
		setActiveSubcategory(subcategory);
		onSubcategorySelect(subcategory);
	};

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
							className={`btn-filter-item ${
								activeSubcategory === subcategory ? 'active' : ''
							}`}
							type="button"
							onClick={() => handleSubcategoryClick(subcategory)}
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
