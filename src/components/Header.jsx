import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="banner-navbar blue-background">
        <div className="banner-content">
          <img src={"../img/logo.png"} alt="Logo" className="logo" />
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
