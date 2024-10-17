import Nav from "./components/nav/Nav";
import "./App.css";
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
function App() {
  return (
    <div>
      <Nav />
      {/* <Controlled /> */}
      {/* <UnControlled /> */}
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/electronics"} element={<Electronics />} />
          <Route path={"/jewelery"} element={<Jewelery />} />
          <Route path={"/mens"} element={<Mens />} />
          <Route path={"/womens"} element={<Womens />} />
          <Route path={"/cart"} element={<Cart />} />

          <Route path={"/profile"} element={<Profile />}>
            <Route path="" element={<Navigate to="educational" />} />
            <Route path="personal" element={<Personal />} />
            <Route path="professional" element={<Professional />} />
            <Route path="educational" element={<Educational />} />
          </Route>

          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
