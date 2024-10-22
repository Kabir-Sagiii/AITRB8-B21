const cartReducer = (state = { cart: [] }, action) => {
  if (action.type === "CART") {
    state = {
      cart: [action.payload],
    };
  }
  return state;
};

export default cartReducer;
