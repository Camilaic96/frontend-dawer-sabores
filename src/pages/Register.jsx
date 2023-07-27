import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleChange(e) {
		const { name, value } = e.target;
		if (name === 'firstName') {
			setFirstName(value);
		}
		if (name === 'lastName') {
			setLastName(value);
		}
		if (name === 'age') {
			setAge(value);
		}
		if (name === 'email') {
			setEmail(value);
		}
		if (name === 'password') {
			setPassword(value);
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const obj = {
			first_name: firstName,
			last_name: lastName,
			age,
			email,
			password,
		};

		const url = 'http://localhost:8080/api/users';
		const headers = {
			'Content-Type': 'application/json',
		};
		const method = 'POST';
		const body = JSON.stringify(obj);

		fetch(url, {
			headers,
			method,
			body,
		})
			.then(response =>
				response.redirected
					? (window.location.href = response.url)
					: response.json(),
			)
			.then(data => console.log(data))
			.catch(error => console.log(error));
	}

	return (
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
						onChange={handleChange}
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
						onChange={handleChange}
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
						onChange={handleChange}
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
						onChange={handleChange}
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
						onChange={handleChange}
						value={password}
						className="col-12 input-with-icon pencil"
						required
					/>
				</div>
				<button className="btn-form-register">Registrarse</button>
			</form>
			<div className="col-10 col-md-8 col-lg-6 container-links-register">
				<p>
					¿Ya tienes cuenta?{' '}
					<Link to={'/login'} className="link-register">
						Inicia sesión aquí
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
