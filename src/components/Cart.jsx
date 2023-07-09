const Cart = () => {
  const products = [
    {
      nombre: "Vino Atilio",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      clasificacion: "Bodega Atilio Avena",
      categoria: "vinos-y-bebidas",
    },
    {
      nombre: "Vino Atilio",
      variedad: "Cabernet Sauvignon",
      presentacion: "Unidad 750 cc.",
      clasificacion: "Bodega Atilio Avena",
      categoria: "vinos-y-bebidas",
    },
    {
      nombre: "Prófugo Especias",
      variedad: "Cabernet",
      presentacion: "Unidad 750 cc.",
      clasificacion: "Casa de la primavera bodegas y viñedos",
      categoria: "vinos-y-bebidas",
    },
    {
      nombre: "Pimientos morrones",
      variedad: "",
      presentacion: "Frasco 295 gr.",
      clasificacion: "Línea Illapel",
      categoria: "dulces-y-encurtidos",
    },
    {
      nombre: "Nuez Chandler Mariposa Extra Light",
      variedad: "",
      presentacion: "1 kg.",
      clasificacion: "Frutos secos, desecados y confituras",
      categoria: "frutos-y-cereales",
    },
    {
      nombre: "prod 6",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      clasificacion: "Bodega Atilio Avena",
      categoria: "panificados-e-insumos",
    },
    {
      nombre: "Cerezas al maraschino",
      variedad: "",
      presentacion: "Frasco 170gr.",
      clasificacion: "Línea Illapel",
      categoria: "dulces-y-encurtidos",
    },
    {
      nombre: "Aji lococo en escabeche",
      variedad: "",
      presentacion: "360 gr.",
      clasificacion: "Linea atacopampa",
      categoria: "dulces-y-encurtidos",
    },
    {
      nombre: "prod 5",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      clasificacion: "Bodega catalina",
      categoria: "panificados-e-insumos",
    },
    {
      nombre: "prod 6",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      clasificacion: "Bodega Atilio Avena",
      categoria: "panificados-e-insumos",
    },
    {
      nombre: "prod 7",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      clasificacion: "Bodega catalina",
      categoria: "especias-y-condimentos",
    },
    {
      nombre: "prod 8",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      clasificacion: "Bodega Atilio Avena",
      categoria: "especias-y-condimentos",
    },
  ];
  return (
    <div>
      <div className="cart-list">
        <h2 className="cart-title">Mi lista</h2>
        <table className="table">
          <tbody>
            {products.map((product) => (
              <tr key={product.nombre}>
                <td scope="col" colSpan={4}>
                  <div className="d-flex align-items-center">
                    <button className="btn-products">
                      <img
                        src={"../img/icons/check-box-checked-blue.png"}
                        alt="check box"
                      />
                    </button>
                    <p className="prod-classification bold">
                      {" "}
                      {product.nombre}
                    </p>
                  </div>
                </td>
                <td
                  scope="col"
                  className="align-middle item-classification text-start"
                  colSpan={3}
                >
                  | {product.variedad}
                </td>
                <td
                  scope="col"
                  className="align-middle item-classification  text-start"
                  colSpan={3}
                >
                  | {product.presentacion}
                </td>
                <td
                  scope="col"
                  className="align-middle item-classification"
                  colSpan={2}
                >
                  <div className="d-flex align-items-center justify-content-end mx-5">
                    <button className="btn-products">
                      <img
                        src={"../img/icons/minus-blue.png"}
                        alt="minus sign"
                      />
                    </button>
                    <button className="btn-products">0</button>
                    <button className="btn-products">
                      <img src={"../img/icons/plus-blue.png"} alt="plus sign" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row form-container">
        <h4 className="bold">¡Último paso!</h4>
        <p className="bold">
          Dejanos tus datos para enviar el pedido. Serás redireccionado a
          Whatsapp para terminar de enviarlo.
        </p>
        <form action="" id="cart-form">
          <div className="body-cart-form">
            <div className="d-flex justify-content-between">
              <input
                type="text"
                placeholder="Nombre y Apellido"
                className="w-50 me-3 input-with-icon-user"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-50 ms-3 input-with-icon-at"
              />
            </div>

            <input
              type="text"
              placeholder="Dejanos tu comentario"
              className="w-100 mt-4 input-with-icon-pencil"
            />
          </div>
          <div className="container-btn-cart-form">
            <button className="btn-cart-form btn-cart-form-delete">
              Eliminar
            </button>
            <button
              type="submit"
              className="btn-cart-form btn-cart-form-submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
