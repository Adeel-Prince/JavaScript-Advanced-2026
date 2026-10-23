//  Hoisting is the mechanasim in javaScript where varibales and functions are declared are moved to top of their scope before the code execution.
// console.log(myVar);
// greet();

var myVar = 10;
function greet() {
  console.log("Welcome in Hoisting!");
}
console.log(myVar);
greet();
