// First Class Functions;
// ----------------------------------------------------------------
// A language feature where functions are treated as first-class citizens.
// Functions can be assigned to variables, passed as arguments to other functions and returned from other functions.

// A "first-class function" means that functions can be treated as values,assigned to variables, and passed around as arguments.

// Function decleration;
function sayHello(name) {
  return "Hello," + name + "!";
}

var greetFunction = sayHello();
console.log(greetFunction("Adeel"));

// High Order Functions:
// Definition: A higher-order function is a function that takes one or more functions as arguments or returns a function as a result.

// CallBack Function:
// Definition: A callback function is a function passed as an argument to another function and is executed after the completion of a task.

// callback Function;
function processUserInput(name, greetUser) {
  console.log("Receievd input: " + name);
  greetUser(name);
}

// Function to be used as a callback
function greetUser(name) {
  console.log(`Hello! ${name}`);
}

processUserInput("Adeel", greetUser);
