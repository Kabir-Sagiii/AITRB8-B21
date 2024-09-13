function f1(p1) {
  p1();

  console.log("f1, First statement");

  p1();

  console.log("f1, Second Statement");

  p1();
}

f1(function f2() {
  console.log("f2 is called");
});

//f2 is called
//f1, First statement
//f2 is called
//f1, Second Statement
//f2 is called
