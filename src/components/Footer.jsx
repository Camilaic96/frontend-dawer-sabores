const Footer = () => {
  return (
    <footer id="footer" className="blue-background">
      <h2 className="bold">Contacto</h2>
      <p>
        Podés conocernos y realizar tu consulta a través de nuestras redes.
        ¡Estamos para ayudarte!
      </p>
      <div className="container-redes">
        <div>
          <img src="img/icons/email-blue.png" alt="email" className="redes" />
          <p>info@dawersabores.com.ar</p>
        </div>
        <a
          href="https://www.facebook.com/dawersabores"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="img/icons/facebook-blue.png"
            alt="Facebook"
            className="redes"
          />
          <p>Dawer.sabores</p>
        </a>
        <a href="https://wa.me/+5491154998486" rel="noreferrer" target="_blank">
          <img
            src="img/icons/whatsapp-blue.png"
            alt="Whatsapp"
            className="redes"
          />
          <p>+5491154998486</p>
        </a>
        <a
          href="https://www.instagram.com/dawersabores"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="img/icons/instagram-blue.png"
            alt="Instagram"
            className="redes"
          />
          <p>@dawersabores</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
