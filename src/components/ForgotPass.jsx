import { useState } from 'react';

const ForgotPass = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const obj = {
			email,
		};
		// login(obj);
	};

	return (
		<div id="container-forgot-pass">
			<p className="col-10 offset-1 col-md-8 offset-md-2">
				Ingresa tu correo y te enviaron un enlace para restablecer tu
				contraseña.
			</p>
			<form
				onSubmit={handleSubmit}
				className="form-forgot-pass col-10 col-md-8"
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
				<button className="btn-form-forgot-pass">Restablecer</button>
			</form>
		</div>
	);
};

export default ForgotPass;
