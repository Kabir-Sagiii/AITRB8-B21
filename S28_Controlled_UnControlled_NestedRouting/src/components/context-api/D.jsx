import { useContext } from "react";
import mycontext from "./context";

function D() {
  let data = useContext(mycontext);
  return (
    <div>
      <h2>D Component</h2>
      <br />
      <p>A Data:{data}</p>
    </div>
  );
}

export default D;
