// here we define sevral scope in javaScript;
// First is the Lexical Scope;

// where the scope is working with the pyshical mechanasim like as:
var a = 5;
var b = 10;
// what is the value of a?

// Second scope is Scope Chaining;
// where the value of a variable looking in the scope and second scope and then outer scope untile the value is not found!

// ! Global Variables VS Local Variables;

const globalVariable = "I'm a global variable";

function myFunction() {
  const functionVariable = "I'm a function variable";
  if (true) {
    const blockVariable = "I'm a block variable";
    console.log(blockVariable);
    console.log(functionVariable);
    console.log(globalVariable);
  }

  console.log(blockVariable);
}

myFunction();
