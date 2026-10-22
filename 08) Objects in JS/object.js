// here we have different ways to create objects in js;

//1);
const product = {
  id: 1,
  pName: "laptop",
};

// 2);
let person = {
  name: "Adeel",
  age: 24,
  isDeveloper: true,
  greet: function () {
    console.log("Hy! Welcome Back Adeel!");
  },
};

//Accesssing the properties of the objects using dot notation and square bracket natation;
console.log(person.age);
console.log(person.isDeveloper);
console.log(person[`name`]);

// Adding and modifiying of the object properties;
person.job = "Web dev";
person.age = 23;
console.log(person);

//Accessing the methods from the object;
person.greet();

// now we can also add dynamic keys in an object;
let idType = "collegeId";

let student = {
  [idType]: "BSSE5016",
  sName: "Adeel",
  sAge: 24,
  isStudent: true,
  greet: function () {
    console.log(
      `Hy! my ${idType} is ${student[idType]} and my name is ${student.sName}`,
    );
  },
};

student.greet();

// Data Modeling;
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  start: function () {
    console.log("Engine started");
  },
};
console.log(car.brand);
car.start();

// Differnce in objects by pass by value and pass by refrencess;
// pass by refrences;
let obj = { id: 5, name: "Software Enginner" };

let obj1 = obj;

obj1.name = "Full Stack Developer";
console.log(obj1);
console.log("origial data", obj);

// solve the problem of the pass by refrences by using the assign() method;
let obje = { id: 5, name: "Software Enginner" };

let newobj = Object.assign({}, obje);

newobj.name = "Full Stack Developer";
console.log(newobj);
console.log("Original", obje);

// Comparison by Refrences;
const objj = { name: "Adeel" };
const obj2 = { name: "Adeel" };
const obj3 = obj1;

const isEqual = obj1 == obj3 ? true : false;
console.log(isEqual);

// JASON (JavaScript Object Notation);
//  let idType =  "collegeId";

let students = {
  // [idType]: "BSSE5016",
  id: 1,
  sName: "Adeel",
  sAge: 24,
  isStudent: true,
  greet: function () {
    console.log(
      `Hy! my ${idType} is ${student.id} and my name is ${student.sName}`,
    );
  },
};

let jasonData = JSON.stringify(student);
console.log(jasonData);
let parseData = JSON.parse(jasonData);
console.log(parseData);

//Thus! we can also use others things with objects like this() keyword , manipulatings, comparisons and so on...
