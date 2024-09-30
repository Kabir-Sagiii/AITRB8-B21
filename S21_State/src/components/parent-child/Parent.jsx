import { useState } from "react";
import Child from "./Child";
function Parent() {
  var inputData;

  let [state, setState] = useState("");

  const getInputData = (event) => {
    inputData = event.target.value;
    console.log(inputData);
  };

  const getData = () => {
    setState(inputData);
    // value = inputData;
  };
  return (
    <div>
      <h2>Parent Component</h2>
      <input type="text" placeholder="enter Text" onChange={getInputData} />
      <button onClick={getData}>Submit</button>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <Child data={state} />
      {/* <Child data={value} /> */}
    </div>
  );
}

export default Parent;
