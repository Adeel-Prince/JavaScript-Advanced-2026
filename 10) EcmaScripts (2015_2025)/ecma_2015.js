// here we define the Ecma Script 2015 to 2025;
// --------------------------------------------------------
// Object Properties - Modern JavaScript;

const name = "Adeel";
const age = 24;

// but in tradition ways we write like;
// const person = {name: name, age: age};
// using shorthand properties notations for object Property;
const person = { name, age };
console.log(person);

// Destructuring Arrays;
// Destructuring is a javaScript expressions that makes it possible to unpack the values from array or properties from object, into distinct variables.

// Extracing specific elements;
const numbers = [10, 20, 30];
// const first = numbers[0]; // traditional way;

// but in moderan javaScript offer DSAY like;
const [first, second, third] = numbers;
console.log(first);

// ignoring elements;
const [, , third] = numbers;
console.log(third);

// Now we can also Destructure Obects;
const user = { name: "Adeel", age: 24 };

// extracting properties;
console.log(user.name);

const myName = user.name; // tradtional way;
console.log(myName);

// but in modern way we write like;
const { name, age } = user;
console.log(name, age);

// Renaming properties;
const { name: fullName, age } = user;
console.log(fullName);

// now Discussed Spread Operators in Modern JS;
let fruits = ["Apple", "Orange", "Mangoes", "Banana"];
let newFruits = [...fruits];
console.log(newFruits);

//Concatenating Arrays / Combining Array;
const number1 = [1, 2, 3, 4];
const number2 = [5, 6, 7, 8];
const newNumbers = [...number1, ...number2];
console.log(newNumbers);

// One more Usecase;
// (...) oprator convert tye string into array of its individual characters;
// first we define in tradtional way;
const country = "Pakistan";
console.log(country.split(""));

// now do in modern javaScript;
const country = "Pakistan";
console.log([...country]);

// now we discussed Rest Parameters - Modern JavaScript;
//  The Rest Parameters syntax allows the function to accept an indefinite numbers of arguments as an array, providing a more flexible way to work with functions;

// traditional ways;
const sum = (a, b, c, d) => {
  return a + b + c + d;
};
console.log(sum(1, 2, 3, 4));

// with rest parameters;
const sum1 = (...numbers) => {
  return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
};
console.log(sum1(1, 2, 3, 4, 5, 5, 66, 7, 7)); // write many values;
