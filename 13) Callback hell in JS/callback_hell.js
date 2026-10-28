// -----------------------------------------------------------
// Callback Hell;
// -----------------------------------------------------------
// Callback hell, also known as the Pyramid of Doom, refers to a situation in
// asynchronous JavaScript programming where multiple nested callbacks are used to
// handle asynchronous operations. This often results in code that is difficult to
// read, understand, and maintain due to its deeply nested structure.

const getStudentData = () => {
  setTimeout(() => {
    console.log("My first name is Adeel");
    setTimeout(() => {
      console.log("My last name is Ahmad");
      setTimeout(() => {
        console.log("I like to code");
        setTimeout(() => {
          console.log("I live in Pakistan");
          setTimeout(() => {
            console.log("I am currently work as software engineer");
            setTimeout(() => {
              console.log(
                "I also looking for new roles in web and software development",
              );
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

getStudentData();
