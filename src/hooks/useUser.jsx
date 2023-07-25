import { useCallback, useContext, useState } from 'react';
import { SessionContext } from '../context/SessionContext';
import loginService from '../services/login';

export default function useUser() {
	const { user, setUser } = useContext(SessionContext);
	const [state, setState] = useState({ loading: false, error: false });

	const login = useCallback(
		({ email, password }) => {
			setState({ loading: true, error: false });
			loginService({ email, password })
				.then(userData => {
					window.localStorage.setItem('user', userData);
					setState({ loading: false, error: false });
					setUser(userData);
				})
				.catch(err => {
					window.localStorage.removeItem('user');
					setState({ loading: false, error: true });
					console.error(err);
				});
		},
		[setUser],
	);

	return {
		isLogged: Boolean(user),
		isLoginLoading: state.loading,
		hasLoginError: state.error,
		login,
		logout,
	};
}
