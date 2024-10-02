import Nav from "./components/nav/Nav";
import "./App.css";
import A from "./components/context-api/A";
import Map from "./components/map/Map";
import Users from "./components/map/Users";
function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <Users />
      </div>
    </div>
  );
}

export default App;
