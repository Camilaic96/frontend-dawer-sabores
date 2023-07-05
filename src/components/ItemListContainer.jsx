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
        <div key={clasificacion}>
          <h4 className="title-classification bold">{clasificacion}</h4>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="align-middle prod-classification">
                    Nombre de producto
                  </th>
                  <th scope="col" className="align-middle item-classification">
                    | Variedad/Varietal
                  </th>
                  <th scope="col" className="align-middle item-classification">
                    | Presentación
                  </th>
                  <th scope="col">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {groupedProducts[clasificacion].map((product) => (
                  <tr key={product.nombre}>
                    <td
                      scope="col"
                      className="align-middle prod-classification bold"
                    >
                      {product.nombre}
                    </td>
                    <td
                      scope="col"
                      className="align-middle item-classification"
                    >
                      | {product.variedad}
                    </td>
                    <td
                      scope="col"
                      className="align-middle item-classification"
                    >
                      | {product.presentacion}
                    </td>
                    <td>
                      <div>botones</div>
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
