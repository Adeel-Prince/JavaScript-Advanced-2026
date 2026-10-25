// ECMAScript Features (2021) / ES12;
// -------------------------------------------------------
// List of new useful features added in ES8
// String.prototype.replaceAll()
// Logical Assignment Operators (||=, &&=, ??= )
// Numeric Separators
// Promise.any()

// String.prototype.replaceAll();
//? replaceAll in JavaScript is a function that replaces all occurrences of a
// specified value with another value in a given string.

const originalString = "Hello!, world! Hello again.";
const newString = originalString.replaceAll("Hello", "Hi");
console.log(newString);

// Replacing multiple spaces with a singal space;
const text = "This     has     exta     space";
const newText = text.replaceAll(/\s+/g, " ");
console.log(newText);

// Logical Assignment Operators (||=, &&=, ??= )

//? Logical OR-Assignment (||=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a falsy value (false, null, undefined, 0, '', NaN). Otherwise, it leaves the left-hand operand unchanged.
let x = false;
x = x || true;
console.log(x);

let y = 10;
y ||= 20;
console.log(y);

//? Logical AND-Assignment (&&=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a truthy value. Otherwise, it leaves the left-hand operand unchanged.
let z = 10;
z &&= 20;
console.log(z);

// Numeric Separators;
//? This feature allows underscores (_) to be used as separators within numeric literals to improve readability.
const bigNumber = 1_000_000;
console.log(bigNumber);

// Promise.any();
// Promise.any(): This method takes an iterable of Promise objects and returns a single Promise
// that resolves as soon as any of the input Promises fulfill.
