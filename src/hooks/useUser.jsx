import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';
import loginService from '../services/login.service';
import logoutService from '../services/logout.service';
import Cookies from 'js-cookie';
import useCart from './useCart';

export default function useUser() {
	const { user, setUser, setCart } = useContext(SessionContext);
	const [state, setState] = useState({ loading: false, error: false });
	const { getCart } = useCart();

	const navigate = useNavigate();

	const login = useCallback(
		async ({ email, password }) => {
			setState({ loading: true, error: false });
			try {
				const userData = await loginService({ email, password });
				Cookies.set('user', JSON.stringify(userData));
				setState({ loading: false, error: false });
				setUser(userData);
				getCart(userData.cart);
				navigate('/productos/vinos-y-bebidas');
			} catch (err) {
				window.localStorage.removeItem('user');
				setState({ loading: false, error: true });
				console.error(err);
			}
		},
		[setUser],
	);

	const logout = useCallback(async () => {
		setState({ loading: true, error: false });

		try {
			await logoutService();
			Cookies.remove('user');
			setState({ loading: false, error: false });
			setUser(null);
			setCart(null);
			navigate('/');
		} catch (err) {
			console.error(err);
			setState({ loading: false, error: true });
		}
	}, [setUser, setCart]);

	return {
		isLogged: Boolean(user),
		isLoginLoading: state.loading,
		hasLoginError: state.error,
		login,
		logout,
	};
}
