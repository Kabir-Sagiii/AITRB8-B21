import { useContext } from "react";
import mycontext from "./context";
import D from "./D";
function C() {
  var info = useContext(mycontext);
  return (
    <div>
      <h2>C Component : {info}</h2>
      <br />
      <br />
      <hr />
      <br />
      <D />
    </div>
  );
}

export default C;
