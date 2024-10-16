import { useState } from "react";

function Map() {
  let [state, setState] = useState(["Apple", "Oneplus", "Samsung"]);
  const changeData = () => {
    setState([1, 2, 3, 4, 5, 6, 7, 8]);
  };
  return (
    <div>
      <h2>Map Concept</h2>

      <div style={{ color: "red", margin: "30px 0px" }}>
        <ol>
          <li>Apple</li>
          <li>Orange</li>
          <li>Chiku</li>
        </ol>
      </div>

      <div style={{ color: "red", margin: "30px 0px" }}>
        <ol>
          {state.map(function (element, index) {
            return <li>{element}</li>;
          })}
        </ol>
      </div>

      <button onClick={changeData}>Click</button>
    </div>
  );
}

export default Map;
