import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import useUser from '../hooks/useUser';

const Login = () => {
	const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		if (isLogged) {
			navigate('/');
		}
	}, [isLogged]);

	useEffect(() => {
		if (hasLoginError) {
			setEmail('');
			setPassword('');
		}
	}, [hasLoginError]);

	const handleSubmit = e => {
		e.preventDefault();
		const obj = {
			email,
			password,
		};
		login(obj);
	};

	return (
		<>
			{!isLoginLoading && (
				<div id="container-login">
					<form onSubmit={handleSubmit} className="form-login col-10 col-md-8">
						<div>
							<input
								type="email"
								name="email"
								placeholder="email"
								onChange={e => setEmail(e.target.value)}
								value={email}
								className="col-12 input-with-icon at"
								required
							/>
						</div>
						<div className="mb-3">
							<input
								type="password"
								name="password"
								placeholder="password"
								onChange={e => setPassword(e.target.value)}
								value={password}
								className="col-12 input-with-icon pencil"
								required
							/>
						</div>
						<button className="btn-form-login">Iniciar Sesión</button>
					</form>
					{isLoginLoading && <strong>Cargando ...</strong>}
					{hasLoginError && <strong>Datos inválidos</strong>}
					<div className="col-10 col-md-8 container-links-login">
						<p>
							¿Aún no tienes cuenta?{' '}
							<Link to={'/signup'} className="link-login">
								Regístrate aquí
							</Link>
						</p>
						<p>
							<Link to={'/forgotPassword'} className="link-login">
								Restablecer contraseña
							</Link>
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Login;
