//  ECMAScript Features (2019) / ES10
// ----------------------------------------------------------
// List of new useful features added in ES8
// Array.prototype. {flat, flatMap}
// Object. fromEntries()
// String.prototype. {trimStart, trimEnd}
// Symbol.prototype.description
// Optional catch binding

// Array.flat and Array.flatMap;
// flat() is a new array instance method that can create a one-dimensional
// array from a multidimensional array. (nested arrays into a single, flat
// array.)

// const nestedArray = [1,2, [3,4], 5];
const nestedArray1 = [1, [2, [3, 4]], 5];

// const flattenedArray = nestedArray.flat();
const flattenedArray = nestedArray1.flat(2);
console.log(flattenedArray);

// Array.flatMap();
// flatMap() is a new Array instance method that combines flat() with map
// (). It's useful when calling a function that returns an array in the map()
// callback, but you want your resulted array to be flat:
const arr = ["MY name", "is Adeel", "Ahmad"];
const newArr = arr.flatMap((curVal) => curVal.split(" "));
console.log(newArr);

// Object.fromEntries();
// Objects have an entries() method, since ES2017.
// It returns an array containing all the object own properties, as an
// array of [key, value] pairs:
// ES2019 introduces a new Object. fromEntries() method, which can create a
// new object from such array of properties.
const person = { name: "Adeel", age: 24 };
const entries = Object.entries(person);
console.log(entries);

// use fromentries method now;
const newPerson = Object.fromEntries(entries);
console.log(newPerson);

// String.prototype.{trimStart, trimEnd};
// trimStart(): Return a new string with removed
// start of the original string
// console.log("Testing". trimStart());

console.log("    Testing".trimStart());
console.log("Testing     ".trimStart());

// trimEnd(): Return a new string with removed
// start white space from the end.
// console.log("Testing". trimEnd());
console.log("             Testing".trimEnd());

// some more features also like: Symbols;
// as well as its type;

// Optional Catch binding;
// In ECMAScript 2019 (ES10), a new feature called "optional catch
// binding" was introduced for the try ... catch statement. This feature allows
// you to omit the parameter in the catch block, making it optional.

try {
} catch (error) {
  // error handling
}

// but now we can omit the optional parameters;
try {
  5 + 10;
} catch {
  console.log("there is an error");
}
