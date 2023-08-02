import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
const Profile = () => {
	const { user } = useContext(SessionContext);
	console.log(user);
	return (
		<div className="col-10 col-lg-6" id="profile">
			<h2 className="bold">Mi perfil</h2>
			<div className="container-profile">
				<p>
					Nombre: <span className="bold">{user.first_name}</span>
				</p>
				<p>
					Apellido: <span className="bold">{user.last_name}</span>
				</p>
				<p>
					Edad: <span className="bold">{user.age}</span>
				</p>
				<p>
					Correo: <span className="bold">{user.email}</span>
				</p>
			</div>
		</div>
	);
};

export default Profile;
