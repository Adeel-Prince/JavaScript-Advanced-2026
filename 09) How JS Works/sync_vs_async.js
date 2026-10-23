//  here we define sync and async concepts in JavaScript;

// sync functions;
const fun2 = () => {
  console.log("fun2 start with end");
};

const fun1 = () => {
  console.log("fun1 is started");
  fun2();
  console.log("fun1 ends");
};
fun1();

//async functions;
const fun3 = () => {
  setTimeout(() => {
    console.log("fun3 start and end");
  }, 2000);
};

const fun4 = () => {
  console.log("fun4 is started");
  fun3();
  console.log("fun4 ends");
};

fun4();
