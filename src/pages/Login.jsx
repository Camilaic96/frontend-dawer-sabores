import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'wouter';
import useUser from '../hooks/useUser';

const Login = ({ onLogin }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [, navigate] = useLocation();
	const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

	useEffect(() => {
		if (isLogged) {
			navigate('/');
			onLogin && onLogin();
		}
	}, [isLogged, navigate, onLogin]);

	const handleSubmit = e => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<>
			{isLoginLoading && <strong>Checking credentials...</strong>}
			{!isLoginLoading && (
				<div id="container-login">
					<form
						onSubmit={handleSubmit}
						className="form-login col-10 col-md-8 col-lg-6"
					>
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
					<div className="col-10 col-md-8 col-lg-6 container-links-login">
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
			{hasLoginError && <strong>Credentials are invalid</strong>}
		</>
	);
};

export default Login;
