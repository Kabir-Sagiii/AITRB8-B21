import Nav from "./components/nav/Nav";
import "./App.css";
import Counter from "./components/use-reducer/Counter";
import Home from "./pages/home/Home";
import Electronics from "./pages/electronics/Electronics";
import Jewelery from "./pages/jewelery/Jewelery";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/womens/Womens";
import { Route, Routes, Navigate } from "react-router-dom";
import UseRef from "./components/useRef/UseRef";
import ProductDetails from "./pages/product-details/ProductDetails";
import Cart from "./pages/cart/Cart";
import Controlled from "./components/Controlled_UnControlled/Controlled";
import UnControlled from "./components/Controlled_UnControlled/Uncontrolled";
import Profile from "./pages/profile/Profile";
import Personal from "./pages/profile/Personal";
import Professional from "./pages/profile/Professional";
import Educational from "./pages/profile/Educational";
import Name from "./components/reduxComps/Name";
import Details from "./components/reduxComps/Details";
import ClassComp from "./components/class-component/ClassComp";
import Products from "./components/axios/Products";
function App() {
  return (
    <div>
      <Nav />

      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route
            path={"/products"}
            element={
              <Products title="All " url="http://localhost:3000/products" />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
