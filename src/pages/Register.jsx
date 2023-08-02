import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import useUser from '../hooks/useUser';

const Register = () => {
	const { isRegisterLoading, hasRegisterError, register, isLogged } = useUser();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		if (isLogged) {
			navigate('/');
		}
	}, [isLogged]);

	const handleSubmit = e => {
		e.preventDefault();
		const obj = {
			first_name: firstName,
			last_name: lastName,
			age,
			email,
			password,
		};
		register(obj);
	};

	return (
		<>
			{!isRegisterLoading && (
				<div id="container-register">
					<form
						onSubmit={handleSubmit}
						className="form-register col-10 col-md-8 col-lg-6"
					>
						<div className="m-3">
							<input
								type="text"
								name="firstName"
								placeholder="Nombre"
								onChange={e => setFirstName(e.target.value)}
								value={firstName}
								className="col-12 input-with-icon user"
								required
							/>
						</div>
						<div className="m-3">
							<input
								type="text"
								name="lastName"
								placeholder="Apellido"
								onChange={e => setLastName(e.target.value)}
								value={lastName}
								className="col-12 input-with-icon user"
								required
							/>
						</div>
						<div className="m-3">
							<input
								type="number"
								name="age"
								placeholder="Edad"
								onChange={e => setAge(e.target.value)}
								value={age}
								className="col-12 input-with-icon user"
								required
							/>
						</div>
						<div className="m-3">
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
						<div className="m-3">
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
						<button className="btn-form-register">Registrarse</button>
					</form>
					{isRegisterLoading && <strong>Cargando ...</strong>}
					{hasRegisterError && <strong>Datos inválidos</strong>}
					<div className="col-10 col-md-8 col-lg-6 container-links-register">
						<p>
							¿Ya tienes cuenta?{' '}
							<Link to={'/login'} className="link-register">
								Inicia sesión aquí
							</Link>
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Register;
