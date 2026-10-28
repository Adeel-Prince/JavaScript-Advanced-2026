// ---------------------------------------------------
// Promise in JavaScript
// A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and cleanly by providing a way to write asynchronous code that looks synchronous.

//todo In simpler terms, a promise is like a placeholder for the result of an asynchronous operation. Or A container for the future result or value.

//* It can be in one of three states:

//  Pending: Initial state, neither fulfilled nor rejected.
//* Fulfilled(Resolved): The operation completed successfully.
//! Rejected: The operation failed or encountered an error.

// Promises have built-in methods like then and catch to handle the results of asynchronous operations when they complete or encounter errors, making it easier to write asynchronous code that is more readable and maintainable compared to traditional callback-based approaches.

//  Using the Promise Constructor (Class);

// You can create a promise using the Promise constructor. This involves creating a new
// instance of the Promise class, which takes a function as an argument. This function,
// often referred to as the "executor function," takes two parameters: resolve and reject. You call resolve when the asynchronous operation is successful and reject when it encounters an error.

// Using a Function (Promise Wrapper);

// You can also create a promise by defining a function that returns a promise. This
// function usually encapsulates some asynchronous operation. Inside this function, you
// manually create a promise and resolve or reject it based on the result of the
// asynchronous operation.

// Syntax;
function myPromiseFynction() {
  return new Promise((resolve, reject) => {
    //  write here the asynchronous operation
  });
}

// Example;
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hi, I'm done it");
  }, 2000);
});

pr.then((res) => {
  console.log(res);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Don't Worry i done it as soon as possible.");
  });

// Exmaple Usage;
const studentName = "Adeel";

const enrollStudent = (studentName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccessfull = Math.random() > 0.4;
      if (isSuccessfull) {
        resolve(`Enrollment successfull for ${studentName}`);
      } else {
        reject(`Enrollment failed for ${studentName}. Try again.`);
      }
    }, 2000);
  });
};

enrollStudent(studentName)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Enrollment process completed.");
  });

//  Promise Methods;

// Promise.all is used when you want to wait for all promises to complete successfully. Reject state will throw an error.

// Promise.allSettled is used when you want to wait for all promises to complete, regardless of success or failure, and get information about their outcomes.

// Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure.

// Example usage;
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("First"), 2000),
);

//  here one is failed;
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Failed"), 100),
);

// const promise2 = new Promise((resolve)=>
// setTimeout(()=> resolve("Second"),2000)
// );

const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third"), 1000),
);

// use of Promise.all();
Promise.all([promise1, promise3, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

// now if we feel someone is failed we use Promise.allSettled();
Promise.allSettled([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

// now we use Promise.race();
Promise.race([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
