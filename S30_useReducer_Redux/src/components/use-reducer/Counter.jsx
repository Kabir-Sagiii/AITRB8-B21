import { useReducer } from "react";

const myReducer = (state, action) => {
  //Logic to update state here
  var newState;
  if (action.type === "increase") {
    newState = state + action.count;
  } else if (action.type === "decrease") {
    newState = state - action.count;
  } else {
    newState = 0;
  }

  return newState;
};

function Counter() {
  let [state, dispatch] = useReducer(myReducer, 0);
  return (
    <div style={{ padding: "100px" }}>
      <h2>useReducer Hook Concept</h2>
      <br />
      <hr />
      <br />
      <p style={{ color: "green", fontSize: "31px" }}>Count Value : {state}</p>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "increase", count: 1 });
        }}
      >
        incCount by 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increase", count: 5 });
        }}
      >
        incCount by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrease", count: 1 });
        }}
      >
        decCount by 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrease", count: 3 });
        }}
      >
        decCount by 3
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;
