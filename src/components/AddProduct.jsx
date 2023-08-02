import { useState } from 'react';
import useProducts from '../hooks/useProducts';
const AddProduct = () => {
	const [name, setName] = useState('');
	const [variety, setVariety] = useState('');
	const [presentation, setPresentation] = useState('');
	const [producer, setProducer] = useState('');
	const [category, setCategory] = useState('');
	const [subcategory, setSubcategory] = useState('');
	const [price, setPrice] = useState(0);

	const { addProduct } = useProducts();

	const handleSubmit = e => {
		e.preventDefault();
		const newProduct = {
			name,
			variety,
			presentation,
			producer,
			category,
			subcategory,
			price,
		};
		addProduct(newProduct);
	};

	return (
		<div className="container-filter">
			<div className="d-flex">
				<button
					className="btn-filter"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseAddProduct"
					aria-expanded="false"
					aria-controls="collapseAddProduct"
				>
					Agregar producto
				</button>
			</div>
			<div className="collapse d-flex flex-column" id="collapseAddProduct">
				<form onSubmit={handleSubmit} className="d-flex row">
					<div className="mb-3 col-md-6">
						<label htmlFor="name">Nombre: </label>
						<input
							type="text"
							name="name"
							placeholder="nombre del producto"
							onChange={e => setName(e.target.value)}
							value={name}
							className="col-12"
							required
						/>
					</div>
					<div className="mb-3 col-md-6">
						<label htmlFor="variety">Variedad: </label>
						<input
							type="text"
							name="variety"
							placeholder="variedad"
							onChange={e => setVariety(e.target.value)}
							value={variety}
							className="col-12"
							required
						/>
					</div>
					<div className="mb-3 col-md-6">
						<label htmlFor="presentation">Presentación: </label>
						<input
							type="text"
							name="presentation"
							placeholder="presentación"
							onChange={e => setPresentation(e.target.value)}
							value={presentation}
							className="col-12"
							required
						/>
					</div>
					<div className="mb-3 col-md-6">
						<label htmlFor="producer">Productor: </label>
						<input
							type="text"
							name="producer"
							placeholder="productor"
							onChange={e => setProducer(e.target.value)}
							value={producer}
							className="col-12"
							required
						/>
					</div>
					<div className="mb-3 col-md-6">
						<label htmlFor="category">Categoría: </label>
						<input
							type="text"
							name="category"
							placeholder="variedad"
							onChange={e => setCategory(e.target.value)}
							value={category}
							className="col-12"
							required
						/>
					</div>
					<div className="mb-3 col-md-6">
						<label htmlFor="subcategory">Subcategoría: </label>
						<input
							type="text"
							name="subcategory"
							placeholder="subcategoría"
							onChange={e => setSubcategory(e.target.value)}
							value={subcategory}
							className="col-12"
							required
						/>
					</div>
					<div className="mb-3 col-md-6">
						<label htmlFor="price">Precio: </label>
						<input
							type="number"
							name="price"
							placeholder="variedad"
							onChange={e => setPrice(e.target.value)}
							value={price}
							className="col-12"
							required
						/>
					</div>
					<button>Agregar</button>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
