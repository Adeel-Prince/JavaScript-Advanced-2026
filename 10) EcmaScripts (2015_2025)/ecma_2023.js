// ECMAScript Features (2023) / ES14;
// ----------------------------------------------------
//? List of new useful features added in ES8
// Array.findLast()
// Array. findLastIndex()
// Array. prototype. toReversed()
// Array.prototype. toSorted(compareFn)
// Array.prototype. toSpliced(start, deleteCount, ... items)
// Array.prototype.with(index, value)

// Array.findLast() && Array. findLastIndex()
// This function will allow us to find element from the last to first of the array based on
// a condition.
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.findLast((elem) => elem));
console.log(array.findLastIndex((elem) => elem));

// Array.prototype.toReversed();
const myName = ["Adeel", "Ahmad", "Software", "Engineer"];
const reversedNum = myName.toReversed();
console.log("Orignal", myName);
console.log("reversed", reversedNum);

// Array.prototype. toSorted(compareFn)
const sortedArr = myName.toSorted();
console.log("Orignal", myName);
console.log("sorted", sortedArr);

// Array.prototype. toSpliced(start, deleteCount, ... items);
const splicedArr = myName.toSpliced(1, 1, "SoftwareEngineer");
console.log("Orignal", myName);
console.log("spliced", splicedArr);

// Array.prototype.with(index, value)
//* The with() method in JavaScript is used to change the value of an element at a specific
//index in an array. It takes two arguments: the index of the element to be changed and the new value. It returns a new array with the changed element, leaving the original array unchanged.
const replaceWith = myName.with(0, "SoftwareEngineer");
console.log("Orignal", myName);
console.log("replacedWith", replaceWith);

// Thus, here we have 2023 but some more ECMAScripts we have like in 2024, 2025, 2026 and In future So On so we will discussed these later.
