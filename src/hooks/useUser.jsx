import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';
import loginService from '../services/login';
import logoutService from '../services/logout';
import Cookies from 'js-cookie';

export default function useUser() {
	const { user, setUser, idCart, setIdCart } = useContext(SessionContext);
	const [state, setState] = useState({ loading: false, error: false });

	const navigate = useNavigate();

	const login = useCallback(
		async ({ email, password }) => {
			setState({ loading: true, error: false });
			try {
				const userData = await loginService({ email, password });
				window.localStorage.setItem('dawer-sabores', JSON.stringify(userData));
				setState({ loading: false, error: false });
				setUser(userData);
				setIdCart(userData.cart);
				navigate('/productos/vinos-y-bebidas');
			} catch (err) {
				window.localStorage.removeItem('dawer-sabores');
				setState({ loading: false, error: true });
				console.error(err);
			}
		},
		[setUser, setIdCart],
	);

	const logout = useCallback(async () => {
		setState({ loading: true, error: false });

		try {
			await logoutService();
			Cookies.remove('dawer-sabores');
			setState({ loading: false, error: false });
			setUser(null);
			setIdCart(null);
			navigate('/');
		} catch (err) {
			console.error(err);
			setState({ loading: false, error: true });
		}
	}, [setUser, setIdCart]);

	return {
		isLogged: Boolean(user),
		isLoginLoading: state.loading,
		hasLoginError: state.error,
		login,
		logout,
	};
}
