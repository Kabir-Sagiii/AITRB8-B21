var username = "Raj";

function getUsers() {
  console.log("Users info");
}

class Product {
  model = "";
  price = 0;

  display() {
    console.log(this.model, this.price);
  }
}

export { username, Product, getUsers };
