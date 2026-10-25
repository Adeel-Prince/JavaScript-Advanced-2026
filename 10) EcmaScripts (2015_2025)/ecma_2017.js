// ECMAScript Features (2017) / ES8;
// ------------------------------------------------------------
// String padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// Async functions

//? List of new useful features added in ES8

// String Padding;
// In javaScript a way to add an extra characters (like spaces) to string to make it a specific length.

// using padStart() to pad from strating;
const name = "Adeel";
// const paddedName = name.padStart(5);
const paddedName = name.padStart(15);
console.log(paddedName);
console.log(paddedName.length);

//Using padEnd() to pad from ending;
const newName = "Ahmad";
// const newPaddedName = newName.padEnd(15);
const newPaddedName = newName.padEnd(15, "*");
console.log(newPaddedName);
console.log(newPaddedName.length);

//*

// trailing commas;
//This feature allows to have trailing commas in function declarations,
// functions calls, array literal & object literal:
function greet(name, age, boolean) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet("Adeel", 24, true);

// same do with Array;
const colors = ["red", "green", "bule"];

// some more additional methods are invented;
// Object.entries() and Object.values()

//  Async Await - Async Functions;
