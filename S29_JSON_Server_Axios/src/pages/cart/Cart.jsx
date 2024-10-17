import { useEffect, useState } from "react";
import axios from "axios";
function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getCartProducts();
  }, []);

  const getCartProducts = () => {
    axios
      .get("http://localhost:3000/addToCart")
      .then((res) => {
        // console.log(res.data);
        setCart(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Error while accessing Cart Data");
      });
  };

  const removeCart = (id) => {
    axios
      .delete(`http://localhost:3000/addToCart/${id}`)
      .then(() => {
        getCartProducts();
      })
      .catch(() => {
        alert("Failed to remove Product From Cart");
      });
  };

  return (
    <div className="cartContainer">
      <div style={{ margin: "30px 0px" }}>
        <h2 style={{ textAlign: "center", color: "blue" }}>
          Cart Products Information
        </h2>
      </div>
      <div className="row2">
        <table width={"80%"} rules="rows" cellPadding={"30px"}>
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody align="center">
            {cart.map((product) => {
              return (
                <tr>
                  <td>
                    <img src={product.image} width={50} height={50} />
                  </td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeCart(product.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
