import ForgotPass from '../components/ForgotPass';
import ResetPass from '../components/ResetPass';

const Profile = () => {
	const cookie = true;
	return <>{!cookie ? <ForgotPass /> : <ResetPass />}</>;
};

export default Profile;
