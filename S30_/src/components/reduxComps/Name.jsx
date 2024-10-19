import { useState } from "react";
import mystore from "../../redux-store/Store";
function Name() {
  let [name, setName] = useState("");

  const getName = () => {
    var actionObj = {
      type: "NAME",
      data: name,
    };

    mystore.dispatch(actionObj);
  };

  return (
    <div style={{ padding: "100px" }}>
      <h2>Name Component</h2>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="enter text"
      />
      <button onClick={getName}>submit</button>
    </div>
  );
}

export default Name;
