import axios from "axios";

export const getProductsData = (setProducts, url) => {
  //axios.get() will return promise and to handle that promise
  //we have used then and catch, for more info go through promise video
  axios
    .get(url)
    .then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    })
    .catch(() => {
      alert("Something went wrong");
    });
};
