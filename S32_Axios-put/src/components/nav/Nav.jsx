import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navContainer">
      <div className="leftNav">
        <h1>Logo</h1>
      </div>
      <div className="centerNav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
      <div className="rightNav">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
