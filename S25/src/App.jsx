import Nav from "./components/nav/Nav";
import "./App.css";
import Home from "./pages/home/Home";
import Electronics from "./pages/electronics/Electronics";
import Jewelery from "./pages/jewelery/Jewelery";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/womens/Womens";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/product-details/ProductDetails";
function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/electronics"} element={<Electronics />} />
          <Route path={"/jewelery"} element={<Jewelery />} />
          <Route path={"/mens"} element={<Mens />} />
          <Route path={"/womens"} element={<Womens />} />
          <Route path="/productdetails" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
