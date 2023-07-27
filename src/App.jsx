import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SessionContextProvider from './context/SessionContext.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Categories from './pages/Categories.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
// import ForgotPass from "./components/users/ForgotPass.jsx";

function App() {
	return (
		<SessionContextProvider>
			<div>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path={'/'} element={<Home />} />
						<Route path={'/productos/:id'} element={<Categories />} />
						<Route path={'/carrito'} element={<Cart />} />
						<Route path={'/login'} element={<Login />} />
						<Route path={'/signup'} element={<Register />} />
						{/*<Route path={"/forgotPassword"} element={<ForgotPass />} /> */}
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</SessionContextProvider>
	);
}

export default App;
