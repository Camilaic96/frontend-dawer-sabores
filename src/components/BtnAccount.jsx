const btnAccount = () => {
	return (
		<div className="dropdown mx-3">
			<button
				className="dropdown-toggle border-0 p-2"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				<img src={'../img/icons/account.png'} alt="search icon" />
			</button>
			<ul className="dropdown-menu fs-4">
				<li>
					<a href="/api/profile" className="dropdown-item">
						Perfil
					</a>
				</li>
				<li>
					<a href="/api/auth/logout" className="dropdown-item">
						Cerrar sesión
					</a>
				</li>
			</ul>
		</div>
	);
};

export default btnAccount;
