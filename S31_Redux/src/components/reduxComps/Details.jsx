import React from "react";
import { useSelector } from "react-redux";
function Details() {
  let reduxStoreData = useSelector((storedata) => {
    return storedata.myReducer;
  });
  return (
    <div style={{ padding: "100px" }}>
      <h2>Details Component</h2>
      <br />
      <hr />
      <br />
      <p>TEXT : {reduxStoreData}</p>
    </div>
  );
}

export default Details;
