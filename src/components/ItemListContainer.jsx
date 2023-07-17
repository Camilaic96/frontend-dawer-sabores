import React from "react";

const ItemListContainer = ({ categoria }) => {
  const products = [
    {
      nombre: "Vino Atilio",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      productor: "Bodega Atilio Avena",
      categoria: "vinos-y-bebidas",
    },
    {
      nombre: "Vino Atilio",
      variedad: "Cabernet Sauvignon",
      presentacion: "Unidad 750 cc.",
      productor: "Bodega Atilio Avena",
      categoria: "vinos-y-bebidas",
    },
    {
      nombre: "Prófugo Especias",
      variedad: "Cabernet",
      presentacion: "Unidad 750 cc.",
      productor: "Casa de la primavera bodegas y viñedos",
      categoria: "vinos-y-bebidas",
    },
    {
      nombre: "Pimientos morrones",
      variedad: "",
      presentacion: "Frasco 295 gr.",
      productor: "Línea Illapel",
      categoria: "dulces-y-encurtidos",
    },
    {
      nombre: "Nuez Chandler Mariposa Extra Light",
      variedad: "",
      presentacion: "1 kg.",
      productor: "Frutos secos, desecados y confituras",
      categoria: "frutos-y-cereales",
    },
    {
      nombre: "prod 6",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      productor: "Bodega Atilio Avena",
      categoria: "panificados-e-insumos",
    },
    {
      nombre: "Cerezas al maraschino",
      variedad: "",
      presentacion: "Frasco 170gr.",
      productor: "Línea Illapel",
      categoria: "dulces-y-encurtidos",
    },
    {
      nombre: "Aji lococo en escabeche",
      variedad: "",
      presentacion: "360 gr.",
      productor: "Linea atacopampa",
      categoria: "dulces-y-encurtidos",
    },
    {
      nombre: "prod 5",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      productor: "Bodega catalina",
      categoria: "panificados-e-insumos",
    },
    {
      nombre: "prod 6",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      productor: "Bodega Atilio Avena",
      categoria: "panificados-e-insumos",
    },
    {
      nombre: "prod 7",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      productor: "Bodega catalina",
      categoria: "especias-y-condimentos",
    },
    {
      nombre: "prod 8",
      variedad: "Malbec",
      presentacion: "Unidad 750 cc.",
      productor: "Bodega Atilio Avena",
      categoria: "especias-y-condimentos",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.categoria === categoria
  );

  const groupedProducts = {};
  filteredProducts.forEach((product) => {
    if (!groupedProducts[product.productor]) {
      groupedProducts[product.productor] = [];
    }
    groupedProducts[product.productor].push(product);
  });

  return (
    <div className="p-3">
      {Object.keys(groupedProducts).map((productor) => (
        <div key={productor} className="container-classification">
          <h4 className="title-classification">{productor}</h4>
          <div className="body-classification">
            <table className="table">
              <tbody>
                {groupedProducts[productor].map((product) => (
                  <tr key={product.nombre} className="mobile-row">
                    <td colSpan={12}>
                      <div className="mobile-info">
                        <span className="name-product-classification">
                          {product.nombre}
                        </span>
                        <span className="item-classification">
                          | {product.variedad}
                        </span>
                        <span className="item-classification">
                          | {product.presentacion}
                        </span>
                      </div>
                      <div className="mobile-buttons">
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
                        <button className="btn-products ms-4">
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
