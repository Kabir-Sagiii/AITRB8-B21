var data = [10, 20, 30, 40, 50]; //[40,50] //[10]

var filteredArray = data.filter(function (element, index) {
  return element > 20 && element < 50; //[30,40]
});

console.log(filteredArray);
