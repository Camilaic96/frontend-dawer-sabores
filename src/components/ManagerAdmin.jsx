const ManagerAdmin = ({ product, onChange, onDelete }) => {
	const deleteProduct = () => {
		onDelete(product);
	};

	return (
		<div className="container p-3">
			<button>Modificar</button>
			<button onClick={deleteProduct}>Eliminar</button>
		</div>
	);
};

export default ManagerAdmin;
