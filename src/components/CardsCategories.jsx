const CardsCategories = () => {
  const cards = [
    {
      category: "Vinos y bebidas",
      image: "img/products/vinos-y-bebidas.png",
      link: "",
    },
    {
      category: "Frutos y cereales",
      image: "img/products/frutos-y-cereales.png",
      link: "",
    },
    {
      category: "Aceites y acetos",
      image: "img/products/aceites-y-acetos.png",
      link: "",
    },
    {
      category: "Especias y condimentos",
      image: "img/products/especias-y-condimentos.png",
      link: "",
    },
    {
      category: "Dulces y conservas",
      image: "img/products/dulces-y-conservas.png",
      link: "",
    },
    {
      category: "Panificados",
      image: "img/products/panificados.png",
      link: "",
    },
  ];
  return (
    <div id="container-cards">
      {cards.map((card) => (
        <a href="" className="card">
          {/* AGREGAR ENLACE A  */}
          <div className="card-body">
            <p className="bold card-text">{card.category}</p>
          </div>
          <img src={card.image} className="card-img" alt={card.category} />
        </a>
      ))}
    </div>
  );
};

export default CardsCategories;
