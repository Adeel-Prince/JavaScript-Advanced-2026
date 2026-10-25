//  ECMAScript Features (2020) / ES11;
// ------------------------------------------------------
// List of new useful features added in ES8
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.
// promise.allSettled

// BigInt;
// it is data type in javaScript which is used to represent and perform oprations on large integers that exceed the limits of regular numbers.

const maxNumbers = Number.MAX_SAFE_INTEGER;
console.log(maxNumbers);

// now use the BigInt;
const anotherLargerNumber = BigInt("123456789100123456789010012345678910");
console.log(anotherLargerNumber);
console.log(typeof anotherLargerNumber);

// Nullish Coalescing Operator ??;
// In JavaScript, the nullish coalescing operator ( ?? ) is a logical
// operator that provides a concise way to handle nullish (null or undefined)
// values. It returns its right-hand operand when its left-hand operand is
// null or undefined, otherwise, it returns the left-hand operand.

let favNum = 0;
// userFavNum = favNum || 10;
userFavNum = favNum ?? 10;
console.log(userFavNum);

// Optional Chaining Operator ?. ;
// It provides a concise way to access
// properties of an object without worrying about
// the existence of intermediate properties. It's
// particularly useful when working with nested
// objects or accessing properties of objects
// that may be null or undefined.

const person = {
  name: "Adeel",
  address: {
    city: "Pak",
    zipCode: 1234,
  },
};

// Acessing the nested properties without optional chaning;
// const city = person.address ? person.address.city : "Unknown";
// console.log(city);

// by using optional chaning ?. ;
const city = person.address?.city ?? "Unknown";
console.log(city);

// some more features also promise.allSettled();
// we cna also use in our next projects;
