var data = [10, 20, 30, 40, 50];

var newArray = data.map(function (element, index) {
  var result = element + 100;
  return result; //[100,120]
});

console.log(newArray);
