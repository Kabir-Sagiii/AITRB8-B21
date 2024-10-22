import "./Products.css";
import { useState, useEffect } from "react";
import { getProductsData } from "../../services/productsService";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Products({ title, url }) {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getProductsData(setProducts, url);
  }, []);

  const navigateToProductDetails = (id) => {
    navigate(`/productdetails/${id}`);
  };

  const modifyProductPrice = async (product) => {
    product.price = 100;
    var res = await axios.put(
      `http://localhost:3000/products/${product.id}`,
      product
    );
    if (res) {
      alert("Product Updated successfully");
      getProductsData(setProducts, url);
    }
  };

  return (
    <div className="productsContainer">
      <h2>{title} Products</h2>
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

      <div className="allProductsContainer">
        {products.map((product) => {
          return (
            <div className="card">
              <img src={product.image} width="100%" height={"200"} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              {/* <Link to={`/productdetails/${3}/${'male'}`}>
             <button onClick={navigateToProductDetails}>
                Product Details
              </button>
             </Link> */}
              <button
                onClick={() => {
                  navigateToProductDetails(product.id);
                }}
              >
                Product Details
              </button>
              <button
                onClick={() => {
                  modifyProductPrice(product);
                }}
              >
                Modify
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
