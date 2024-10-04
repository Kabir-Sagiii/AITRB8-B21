import Nav from "./components/nav/Nav";
import "./App.css";
import Products from "./components/axios/Products";
function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <Products />
      </div>
    </div>
  );
}

export default App;
