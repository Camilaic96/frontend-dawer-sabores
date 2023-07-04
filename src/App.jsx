import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/productos/:id"} element={<Categories />} />
          {/* cart */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
