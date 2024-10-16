import "./Products.css";
import { useState } from "react";
import axios from "axios";
function Products() {
  const [products, setProducts] = useState([]);
  const getProductsData = () => {
    //axios.get() will return promise and to handle that promise
    //we have used then and catch, for more info go through promise video
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return (
    <div className="productsContainer">
      <h2>Products Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
        ratione excepturi, facere consequuntur fugiat sapiente laboriosam dicta
        impedit cupiditate ut hic quia deserunt et nulla enim est adipisci ex
        eaque quibusdam temporibus aperiam illum. Facilis quo deserunt,
        cupiditate, velit nulla eius impedit laborum delectus veritatis quaerat
        consequatur, maiores nam est ratione ipsa eum. Architecto labore
        obcaecati, officia reprehenderit id fugit rerum suscipit distinctio illo
        repellendus ipsam commodi, est aperiam sapiente ullam, soluta error
        porro sint quibusdam deleniti veniam voluptatibus dolor earum? Vitae
        molestias, nostrum assumenda doloribus delectus reprehenderit
        necessitatibus corporis reiciendis ad. Dicta, quam! Porro iusto nisi
        ratione ullam.
      </p>
      <button onClick={getProductsData}>Get Products</button>

      <div className="allProductsContainer">
        {products.map((product) => {
          return (
            <div className="card">
              <img src={product.image} width="100%" height={"200"} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button>Product Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
