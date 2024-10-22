import { useRef, useState } from "react";
var myStyles = {
  textAlign: "center",
  marginTop: "100px",
  color: "blue",
};
function UseRef() {
  let [state, setState] = useState(99);
  let myRef = useRef("Mumbai");
  let h2Ref = useRef();
  let buttonRef = useRef();
  var city = "hyd";
  return (
    <div style={myStyles}>
      <h2 ref={h2Ref} style={{ margin: "20px 0px" }}>
        useRef() Hook Concept : {state}
      </h2>
      <button
        ref={buttonRef}
        onClick={() => {
          console.log(myRef.current, state);
          h2Ref.current.style.color = "red";
          buttonRef.current.style.color = "red";
        }}
      >
        Print City & State
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          city = "Pune";
          myRef.current = "Pune";
        }}
      >
        Update City
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          setState(100);
        }}
      >
        Update State
      </button>
    </div>
  );
}

export default UseRef;
