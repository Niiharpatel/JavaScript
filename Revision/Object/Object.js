// let obj = {
//   name: "nihar",
//   age: 24,
//   getData: function () {
//     console.log("hello this is function under object");
//   },
// };
// obj.getData();

// --------------------- no need to write function ------------------------------

// let obj = {
//   name: "nihar",
//   age: 24,
//   getData() {
//     console.log("hello this is function under object");
//   },
// };
// obj.getData();

// --------------------- object in object ------------------------------

// let obj = {
//   name: {
//     realname: "Nihar",
//     city: "valsad",
//   },
//   age: 24,
//   getData() {
//     console.log("hello this is function under object");
//   },
// };

// console.log(obj.name.realname);

// ======================= this object =======================

// var myName = "Nihar";

// function fun() {
//   console.log(this.myName);
// }

// fun();

// -----------------------------------------------

// const obj = {
//   myAge: 26,
//   myName() {
//     console.log(this.myAge);
//   },
// };

// obj.myName();

// -------------------------------------------------

// const obj = {
//   myAge: 26,
//   myName: () => {
//     console.log(this.myName);
//   },
// };

// obj.myName();  => undefined bcz this is not work in arrow function

// ----------------------------------------------------------------------

// let bioData = {
//   myName: {
//     realName: "Nihar",
//     city: "Valsad",
//   },
//   myAge: 24,
//   getData() {
//     console.log(
//       `My name is ${this.myName.realName} and my age is ${this.myAge}`
//     );
//   },
// };

// bioData.getData();

// ============================ Destructering ====================================

// const arr = ["nihar", "patel", 24];

// let fName = arr[0];
// let lName = arr[1];
// let age = arr[2];

// console.log(age);

// ------------------------------
// let [fName, lName, age] = arr;
// console.log("age:", age);

// ------------- we can also add value -----------------
// let [fName, lName, age, city = "valsad"] = arr;
// console.log("city:", city);

// --------------------------------------------

// const myData = {
//   fName: "nihar",
//   lName: "patel",
//   age: 24,
// };

// let { fName, lName, age, city = "valsad" } = myData;
// console.log("age:", age);

//======================= Object Properties ===========================

// add Dynamic properties ----
// let MyName = "Nihar";

// const myBio = {
//   [MyName]: "hello",
//   [24 + 2]: "is my age",
// };
// console.log("myBio:", myBio);

// let myName = "Nihar";
// let age = 24;

// const myData = {
//   myName,
//   age,
// };
// console.log("myData:", myData);

//======================= spread Operator ===========================

// let color = ["red", "yellow", "blue", "green"];
// let color2 = ["white", "black", "pink", "grey"];

// const myColor = [...color, "pinch", "silver"];
// console.log("myColor:", myColor);

// ======================== Use StrictMode =========================================

// "use strict";
// x = 3.14;
// console.log("x:", x);

// ======================== Advance JavaScript =========================================

// Event Bubbling.....

document.querySelector(".container").addEventListener(
  "click",
  () => {
    alert("i am  container");
  },
  true
);
document.querySelector(".child-container").addEventListener(
  "click",
  () => {
    alert("i am child container");
  },
  true
);
document.querySelector(".child").addEventListener(
  "click",
  () => {
    alert("i am child ");
    event.stopPropagation();
  },
  true
);

// -> add true in argument for capture phase
