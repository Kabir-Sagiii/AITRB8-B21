var user = {
  id: 101,
  username: "Raj",
  gender: "male",
  city: "hyd",
};

console.log(user);
console.log("----------------------");

delete user.gender;
delete user.id;

console.log(user);
