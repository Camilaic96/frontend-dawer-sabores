const FAQs = () => {
  return (
    <div className="col-md-10 col-lg-8 col-xl-6" id="faqs">
      <h2>¿Cómo realizo mi pedido?</h2>
      <div className="container-faqs">
        <div className="item-faqs">
          <img
            src="img/icons/search-blue.png"
            alt="search icon"
            className="icon-faqs"
          />
          <p>
            Buscá el producto de tu interés. Podés encontrarlo desde la lupa o
            categorías. Además, podés aplicar filtros dentro de cada una para
            que te resulte más fácil y rápido.
          </p>
        </div>
        <div className="item-faqs">
          <p>
            Una vez que lo encuentres, seleccionalo y sumalo a tu lista. Podés
            elegir cuántas unidades querés, sólo recordá que cada producto está
            sujeto a disponibilidad de stock.
          </p>
          <img
            src="img/icons/check-square-blue.png"
            alt="check square icon"
            className="icon-faqs"
          />
        </div>
        <div className="item-faqs">
          <img
            src="img/icons/send-plane-line-blue.png"
            alt="send plane line blue icon"
            className="icon-faqs"
          />
          <p>
            Finalizada la lista sólo queda enviarla. Nos llegará por Whatsapp y
            nos estaremos contactando a la brevedad para finalizar el pedido,
            acordar el medio de pago y la entrega.
          </p>
        </div>
      </div>
      <a href="https://wa.me/+5491154998486" rel="noreferrer" target="_blank">
        <p>
          ¿Tenés alguna otra duda? <span>Consultanos</span>
        </p>
      </a>
    </div>
  );
};

export default FAQs;
