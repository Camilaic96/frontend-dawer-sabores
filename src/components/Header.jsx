import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="banner-navbar blue-background">
      <div className="banner-content">
        <img src="img/logo.png" alt="Logo" className="logo" />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
