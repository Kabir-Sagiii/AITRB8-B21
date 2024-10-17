import "./Counter.css";
import { useState } from "react";
function Counter() {
  // let myArray = useState(0); //myArray = [state variable,setter function]

  let [state, setState] = useState(100);

  function increaseCount() {
    // myArray[1](myArray[0] + 1);
    setState(state + 1);
  }

  return (
    <div className="counter">
      {/* <h2>Count Value is : {myArray[0]}</h2> */}
      <h2>Count Value is : {state}</h2>
      <button onClick={increaseCount}>IncCount</button>
    </div>
  );
}

export default Counter;
