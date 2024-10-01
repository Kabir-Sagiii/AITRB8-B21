import "./Nav.css";
function Nav() {
  return (
    <div className="navContainer">
      <div className="leftNav">
        <h1>Logo</h1>
      </div>
      <div className="centerNav">
        <a href="">Home</a>
        <a href="">Electronics</a>
        <a href="">Jewelery</a>
        <a href="">Mens</a>
        <a href="">Womens</a>
      </div>
      <div className="rightNav">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
