import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  let { id } = useParams(); // allParams = {id:10}
  let [product, setProduct] = useState({
    id: 1,
    title: "...",
    price: "...",
    category: "...",
    description: "...",
    image: "...",
  });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        alert("Something went wrong while accessing the Product Info");
      });
  }, []);

  return (
    <div>
      <img src={product.image} width="300" height={300} />
      <p style={{ fontWeight: "bold" }}>{product.title}</p>
      <br />
      <button
        style={{
          border: "2px solid green",
          color: "green",
          padding: "7px 30px",
          fontWeight: "bold",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
