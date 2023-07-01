// import CartWidget from '../components/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bold">
      <div className="col-md-8 px-5">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse row"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between px-5">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Quiénes somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ¿Cómo hacer un pedido?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 d-flex flex-direction-column justify-content-evenly px-5">
        <form className="d-flex col-md-10" role="search">
          <button className="btn" type="submit">
            <img src="img/icons/search-red.png" alt="search icon" />
          </button>
          <input
            className="form-control me-2 filter"
            type="search"
            aria-label="Search"
          />
        </form>
        <button className="btn col-md-2" type="submit">
          <img src="img/icons/cart-red.png" alt="cart icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
