import React from "react";
import Products from "../../components/axios/Products";
function Womens() {
  return (
    <div>
      <Products
        title={"Womens Clothing"}
        url={"https://fakestoreapi.com/products/category/women's clothing"}
      />
    </div>
  );
}

export default Womens;
