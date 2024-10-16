import { useState } from "react";
import B from "./B";
import mycontext from "./context";
function A() {
  let [state, setState] = useState("");
  var inputData;

  const getInputData = (e) => {
    inputData = e.target.value;
  };

  const storeDataInContext = () => {
    setState(inputData);
  };
  return (
    <div style={{ margin: "30px" }}>
      <h2>A Component</h2>
      <br />
      <input type="text" onChange={getInputData} />
      <button onClick={storeDataInContext}>Submit</button>
      <br />
      <br />
      <hr />
      <br />
      <mycontext.Provider value={state}>
        <B />
      </mycontext.Provider>
    </div>
  );
}

export default A;
