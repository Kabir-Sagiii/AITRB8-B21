import { useState } from "react";

function Controlled() {
  let [state, setState] = useState("dummy Data");
  let [inputdata, setInputData] = useState("");

  const addDataInPara = () => {
    setState(inputdata);
    setInputData("");
  };
  return (
    <div style={{ padding: "30px" }}>
      <h2>Controlled Component</h2>
      <form>
        <input
          value={inputdata}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          type="text"
          placeholder="enter text"
        />
        <button onClick={addDataInPara} type="button">
          Submit
        </button>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <p>{state}</p>
      </form>
    </div>
  );
}

export default Controlled;
