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
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
      </div>
      <div className="rightNav">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
