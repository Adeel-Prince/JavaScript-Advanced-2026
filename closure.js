// here we define the closure concepts in javaScript;
// Closure is created when the inner function has access to the varibale of its outer function, even after the outer function has finished executing.

function outerFunction() {
  var outerVariable = "I'm from Outer";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction();
}

var closureFunction = outerFunction();
closureFunction();
