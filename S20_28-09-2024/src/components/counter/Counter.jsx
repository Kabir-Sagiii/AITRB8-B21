import "./Counter.css";
import { useState } from "react";
function Counter() {
  let myArray = useState(0); //myArray = [state,setState]
  var countValue = 0;

  function increaseCount() {
    countValue = countValue + 1;
    console.log(countValue);

    myArray[1](myArray[0] + 1);
  }

  return (
    <div className="counter">
      <h2>Count Value is : {myArray[0]}</h2>
      <button onClick={increaseCount}>IncCount</button>
    </div>
  );
}

export default Counter;
