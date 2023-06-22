const FAQs = () => {
  return (
    <div className="m-5 text-center" id="faqs">
      <h2>¿Cómo realizo mi pedido?</h2>
      <div className="text-start">
        <div className="d-flex m-3">
          <img
            src="img/icons/search-blue.png"
            alt="search icon"
            className="icon-faqs mx-3"
          />
          <p className="text-justify mx-3">
            Buscá el producto de tu interés. Podés encontrarlo desde la lupa o
            categorías. Además, podés aplicar filtros dentro de cada una para
            que te resulte más fácil y rápido.
          </p>
        </div>
        <div className="d-flex m-3">
          <p className="text-justify mx-3">
            Una vez que lo encuentres, seleccionalo y sumalo a tu lista. Podés
            elegir cuántas unidades querés, sólo recordá que cada producto está
            sujeto a disponibilidad de stock.
          </p>
          <img
            src="img/icons/check-square-blue.png"
            alt="check square icon"
            className="icon-faqs mx-3"
          />
        </div>
        <div className="d-flex m-3">
          <img
            src="img/icons/send-plane-line-blue.png"
            alt="send plane line blue icon"
            className="icon-faqs mx-3"
          />
          <p className="text-justify mx-3">
            Finalizada la lista sólo queda enviarla. Nos llegará por Whatsapp y
            nos estaremos contactando a la brevedad para finalizar el pedido,
            acordar el medio de pago y la entrega.
          </p>
        </div>
      </div>
      <a href="https://wa.me/+5491154998486" rel="noreferrer" target="_blank">
        <p className="text-end">¿Tenés alguna otra duda? Consultanos</p>
      </a>
    </div>
  );
};

export default FAQs;
