import { NavLink } from "react-router-dom";
const NavBar = () => {
  const itemsNav = [
    {
      to: "../productos/vinos-y-bebidas",
      title: "Productos",
    },
    {
      to: "../about-us" /* "../#about-us" */,
      title: "Quiénes somos",
    },
    {
      to: "../faqs" /* "../#faqs" */,
      title: "¿Cómo hacer un pedido?",
    },
    {
      to: "../footer" /* "../#footer" */,
      title: "Contacto",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg row" id="navbar-header">
      <div className="col-12 col-sm-6 col-lg-9">
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
          <ul className="navbar-nav mb-lg-0">
            {itemsNav.map((item) => (
              <li className="nav-item">
                <NavLink to={item.to} className={"nav-link nav-link-header"}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3 d-flex">
        <form className="d-flex col-md-10" role="search">
          <button className="btn" type="submit">
            <img src={"../img/icons/search-red.png"} alt="search icon" />
          </button>
          <input
            className="form-control me-2 filter"
            type="search"
            aria-label="Search"
          />
        </form>
        <NavLink to={"/carrito"}>
          <img src={"../img/icons/cart-red.png"} alt="cart icon" />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
