import React from "react";

function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Parent Data :{props.data} </p>
    </div>
  );
}

export default Child;
