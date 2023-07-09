import React from "react";

const ItemListContainer = ({ categoria }) => {
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

  const filteredProducts = products.filter(
    (product) => product.categoria === categoria
  );

  const groupedProducts = {};
  filteredProducts.forEach((product) => {
    if (!groupedProducts[product.clasificacion]) {
      groupedProducts[product.clasificacion] = [];
    }
    groupedProducts[product.clasificacion].push(product);
  });

  return (
    <div className="p-3">
      {Object.keys(groupedProducts).map((clasificacion) => (
        <div key={clasificacion} className="mb-5">
          <h4 className="title-classification bold">{clasificacion}</h4>
          <div>
            <table className="table">
              <tbody>
                {groupedProducts[clasificacion].map((product) => (
                  <tr key={product.nombre}>
                    <td
                      scope="col"
                      className="align-middle prod-classification bold"
                      colSpan={3}
                    >
                      {product.nombre}
                    </td>
                    <td
                      scope="col"
                      className="align-middle item-classification"
                      colSpan={3}
                    >
                      | {product.variedad}
                    </td>
                    <td
                      scope="col"
                      className="align-middle item-classification"
                      colSpan={3}
                    >
                      | {product.presentacion}
                    </td>
                    <td
                      scope="col"
                      className="align-middle item-classification container-name-product"
                      colSpan={3}
                    >
                      <div className="d-flex justify-content-end align-items-center">
                        <button className="btn-products">
                          <img
                            src={"../img/icons/minus-red.png"}
                            alt="minus sign"
                          />
                        </button>
                        <button className="btn-products">0</button>
                        <button className="btn-products">
                          <img
                            src={"../img/icons/plus-red.png"}
                            alt="plus sign"
                          />
                        </button>
                        <button className="btn-products">
                          <img
                            src={"../img/icons/check-box-red.png"}
                            alt="check box"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
