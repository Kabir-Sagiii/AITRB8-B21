import Nav from "./components/nav/Nav";
import "./App.css";
import Profile from "./pages/profile/Profile";
import Counter from "./components/counter/Counter";
import Parent from "./components/parent-child/Parent";
function App() {
  return (
    <div>
      <Nav />
      <div className="App">
        <Parent />
      </div>
    </div>
  );
}

export default App;
