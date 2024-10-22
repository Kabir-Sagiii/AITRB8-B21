const myReducer = (state, action) => {
  var newData = "dummy Value";
  if (action.type === "NAME") {
    newData = action.data;
  }

  return newData;
};

export default myReducer;
