import { NavLink } from "react-router-dom";
const NavProducts = () => {
  const categories = [
    {
      id: "vinos-y-bebidas",
      category: "Vinos y bebidas",
      image: "../img/products/vinos-y-bebidas.png",
      link: "/productos/vinos-y-bebidas",
      text: "Descubre nuestra amplia selección de vinos y bebidas de alta calidad, cuidadosamente seleccionados para satisfacer los paladares más exigentes",
    },
    {
      id: "frutos-y-cereales",
      category: "Frutos y cereales",
      image: "../img/products/frutos-y-cereales.png",
      link: "/productos/frutos-y-cereales",
      text: "Encuentra una gran variedad de frutos secos y cereales para complementar tu alimentación y satisfacer tus antojos. Nuestros productos son seleccionados cuidadosamente para asegurar su frescura y sabor.",
    },
    {
      id: "aceites-y-acetos",
      category: "Aceites y acetos",
      image: "../img/products/aceites-y-acetos.png",
      link: "/productos/aceites-y-acetos",
      text: "Descubre nuestra selección para agregar un toque de sabor y elegancia a tus comidas. Ofrecemos una amplia variedad de opciones para satisfacer cualquier paladar. Además, nuestros productos son seleccionados cuidadosamente para garantizar su calidad y frescura.",
    },
    {
      id: "especias-y-condimentos",
      category: "Especias y condimentos",
      image: "../img/products/especias-y-condimentos.png",
      link: "/productos/especias-y-condimentos",
      text: "Explorá nuestra amplia selección de especias y condimentos de alta calidad para darle sabor a tus platos favoritos. Tenemos todo lo que necesitas para transformar tus comidas en experiencias culinarias únicas.",
    },
    {
      id: "dulces-y-encurtidos",
      category: "Dulces y encurtidos",
      image: "../img/products/dulces-y-encurtidos.png",
      link: "/productos/dulces-y-encurtidos",
      text: "Selección de dulces, mermeladas y conservas con elaborados con ingredientes frescos y naturales, para ofrecerte un sabor único y delicioso. ",
    },
    {
      id: "panificados-e-insumos",
      category: "Panificados e insumos",
      image: "../img/products/panificados-e-insumos.png",
      link: "/productos/panificados-e-insumos",
      text: "Elevá tu experiencia descubriendo nuestra sección especial  de panificados para acompañar tus comidas. Cada producto es seleccionado por su calidad y sabor inigualables. Además de insumos especiales para profesionales  de la panadería.",
    },
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg bold p-3 mt-3">
        <div className="col-md-12">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-around">
              {categories.map((category) => (
                <li className="nav-item">
                  <NavLink to={category.link} className={"nav-link-products"}>
                    {category.category}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavProducts;
