import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';
import userService from '../services/user.service';
import Cookies from 'js-cookie';
import useCart from './useCart';

export default function useUser() {
	const { user, setUser, setCart } = useContext(SessionContext);
	const [stateLogin, setStateLogin] = useState({
		loading: false,
		error: false,
	});
	const [stateLogout, setStateLogout] = useState({
		loading: false,
		error: false,
	});
	const [stateRegister, setStateRegister] = useState({
		loading: false,
		error: false,
	});
	const { getCart } = useCart();

	const navigate = useNavigate();

	const login = useCallback(
		async obj => {
			setStateLogin({ loading: true, error: false });
			try {
				const userData = await userService.login(obj);
				console.log(userData);
				if (userData) {
					Cookies.set('user', JSON.stringify(userData));
					setStateLogin({ loading: false, error: false });
					setUser(userData);
					getCart(userData.cart);
					navigate('/productos/vinos-y-bebidas');
				} else {
					setStateLogin({ loading: false, error: true });
					navigate('/login');
				}
			} catch (err) {
				window.localStorage.removeItem('user');
				setStateLogin({ loading: false, error: true });
				console.error(err);
			}
		},
		[setUser],
	);

	const logout = useCallback(async () => {
		setStateLogout({ loading: true, error: false });
		try {
			await userService.logout();
			Cookies.remove('user');
			setStateLogout({ loading: false, error: false });
			setUser(null);
			setCart(null);
			navigate('/');
		} catch (err) {
			console.error(err);
			setStateLogout({ loading: false, error: true });
		}
	}, [setUser, setCart]);

	const register = useCallback(
		async obj => {
			setStateRegister({ loading: true, error: false });
			try {
				const userData = await userService.register(obj);
				console.log(userData);
				if (userData) {
					Cookies.set('user', JSON.stringify(userData));
					setStateRegister({ loading: false, error: false });
					setUser(userData);
					getCart(userData.cart);
					navigate('/productos/vinos-y-bebidas');
				} else {
					setStateRegister({ loading: false, error: true });
					navigate('/signup');
				}
			} catch (err) {
				window.localStorage.removeItem('user');
				setStateRegister({ loading: false, error: true });
				console.error(err);
			}
		},
		[setUser],
	);

	return {
		isLogged: Boolean(user),
		isLoginLoading: stateLogin.loading,
		hasLoginError: stateLogin.error,
		isLogoutLoading: stateLogout.loading,
		hasLogoutError: stateLogout.error,
		isRegisterLoading: stateRegister.loading,
		hasRegisterError: stateRegister.error,
		login,
		logout,
		register,
	};
}
