import NavBar from "./NavBar";

const Header = () => {
  return (
    <header id="header">
      <div className="banner-navbar blue-background">
        <div className="banner-content">
          <img
            src={"../img/logo.png"}
            alt="Logo Dawer Sabores"
            className="logo-header"
          />
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
