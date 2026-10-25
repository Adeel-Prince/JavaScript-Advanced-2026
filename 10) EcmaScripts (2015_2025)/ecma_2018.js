// ECMAScript Features (2018) / ES9
// ----------------------------------------------------------
// List of new useful features added in ES8
// Rest/Spread Properties
//Promise.prototype.finally()

// Rest/Spread Properties;
// ES6 introduced the concepts of rest elements when working with Array destructing;
const numbers = [1, 2, 3, 4, 5];
[first, second, ...others] = numbers;

// and sepread elemnts;
const newNumbers = [1, 2, 3, 4, 5, 6];
const sum = (a, b, c, d, e, f) => a + b + c + d + e + f;
const sumOfNumbers = sum(...newNumbers);

// ES2018 introduced the same but for Objects;
// Object and Rest Operators;
const student = {
  age: 23,
  name: "Adeel",
  isStudent: true,
};

const { age, ...others } = student;
console.log(others);

// some more features are like object with spread operators;
// And Promise.finally();
