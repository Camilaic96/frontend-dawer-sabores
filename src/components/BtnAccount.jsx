import useUser from '../hooks/useUser';
import { Link } from 'react-router-dom';

const btnAccount = () => {
	const { logout } = useUser();
	return (
		<div className="dropdown btn-account mx-4">
			<button
				className="dropdown-toggle border-0 d-flex align-items-center"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				<img src={'../img/icons/account.png'} width={32} alt="search icon" />
			</button>
			<ul className="dropdown-menu dropdown-menu-end fs-4">
				<li>
					<Link to={'/profile'} className="li-btn-account">
						Perfil
					</Link>
				</li>
				<li>
					<button onClick={logout} className="li-btn-account">
						Cerrar Sesión
					</button>
				</li>
			</ul>
		</div>
	);
};

export default btnAccount;
