import { Link } from 'react-router-dom';

const BtnLogin = () => {
	return (
		<div>
			<Link to={'/login'} className="btn btn-login-nav">
				Iniciar sesión
			</Link>
		</div>
	);
};

export default BtnLogin;
