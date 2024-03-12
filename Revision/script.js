// ================= Arrays ==========================

// let arr = ["nihar", "raj"];

// console.log(arr[arr.length-1]);
// console.log(arr[0]);

// ================= Loops ==========================

// let arr = [1, 2, 3, 4];

// --------------- For Loop ----------------------

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// --------------- While Loop ----------------------

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// --------------- Do-While Loop ----------------------

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i<10);

// ===============================================

// let arr = [1, 2, 3, 4];

// ----------- for in --------
// for (const key in arr) {
//   console.log("elements:", key);
// }

// ------------ for of ------------
// for (const elements of arr) {
//   console.log("element:", elements);
// }

// -------------- for each -------------------
// arr.forEach((element, index, array) => {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// ==================================

// ---------------------- Map -------------------------

// let ans = arr.map((ele, ind, arr) => {
//   return console.log(Math.sqrt(ele));
// });

// ================================================

// console.log(arr.indexOf("niv"));

// console.log(arr.lastIndexOf("niv"));

// console.log(arr.includes("niv"));
// let arr = ["nihar", "raj", "niv", "dharmin"];

// arr.push("hii");
// console.log("arr:", arr);

// const myNumber = [1, 2, 3, 4, 5];

// myNumber.pop();
// console.log("myNumber:", myNumber);

// let months = ["jan", "fab", "mar", "apr", "may", "jun"];

// let ans = months.splice(1, 1);

// let ans = months.splice(months.length, 0, "dec");

// console.log("ans:", ans);
// console.log("viniun:", months);

// const arr = [1, 22, 44, 33, 55];

// let newArr = arr.map((e) => {
//   return e > 55;
// });

// let newArr = arr.map((element, index, arr) => {
//   return `${element} and ${index} and also ${arr}`;
// });
// console.log("newArr  newArr:", newArr);

// ----------------------------------------------

// let newArr = arr.map((element) => {
//   //   return element ** 2;

//   return Math.sqrt(element);
// });
// console.log("newArr  newArr:", newArr);

// ----------------------------------------------

// const arr = [1, 2, 44, 33, 55];

// let newArr = arr
//   .map((element) => {
//     return element * 2;
//   })
//   .filter((element) => {
//     return element > 10;
//   });

// let newArr = arr
//   .map((element) => element * 2)
//   .filter((element) => element > 10);

// console.log("newArr  newArr:", newArr);

// ------------------- Reduce Method ---------------------------

// let arr = [5, 6, 2];

// let newArr = arr.reduce((eccumulator, ele) => {
//   debugger;
//   return (eccumulator += ele);
// }, 7);
// console.log("  newArr:", newArr);

// ====================== IIFE ===============================

// (function (y) {
//   console.log(y + 5);
// })(2);

// ------------------ Challange -------------------------

// let str = "Nihar Patel";

// console.log(str.charCodeAt(str.length - 1)); => 108

// -----------

// let x = {
//   y: "z",
//   print: () => {
//     return this.y === "z";
//   },
// };

// console.log(x.print());  => False bcz this keyword not work in arrow function

// -------------- Property Access ----------------------

// let str = "Nihar Patel";

// console.log(str[0]);

// ===================== Promise =============================

// let promise = new Promise((resolve, reject) => {
//   let person = {
//     name: "nihar",
//     age: 16,
//   };

//   if (person.age > 18) {
//     resolve(person);
//   } else {
//     reject("you are not elligible");
//   }
// });

// promise
//   .then((result) => {
//     console.log(result.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ========================= Date Function ================

// let date = new Date();
// console.log("date:", date)

// console.log(new Date().toLocaleString());  => show exact time

// console.log(new Date().toString());

// console.log(Date.now());
// console.log(new Date().getDate());
// console.log(new Date().getDay());
// console.log(new Date().getFullYear());

// console.log(new Date().getHours());
// console.log(new Date().setTime(10, 2, 35));

// console.log(Math.PI);

// let num = 10.5;
// console.log(Math.round(num));  => 11

// console.log(Math.pow(2, 3)); => 8

// console.log(Math.sqrt(25)); => 5

// console.log(Math.abs(-23)); => 23 convert negative value in positive

// console.log(Math.ceil(4.51)); => 5

// console.log(Math.floor(4.51)); => 4

// console.log(Math.max(1, 4, 6, 3)); => 6

// console.log(Math.min(2, 3, 5, 1, 9)); => 1

// console.log(Math.random()); => give no betwn 0 - 1

// console.log(Math.floor(Math.random() * 10)); => give no betwn 0 - 9

// console.log(Math.trunc(4.6)); => 4
// console.log(Math.trunc(-99.1)); => -99

// ============================== DOM AND BOM ===========================================

// const changeFun = () => {
//   document.getElementById("head3").innerHTML = "Program is Work"; // this is dom
// };

// ================================== Async Await =======================================

// async function getData() {
//   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let data = await x.json();
//   console.log("getData  x:", data);
// }

// async function main() {
//   console.log("loading Data");

//   console.log("Load Data");

//   let data = await getData();

//   console.log("main  data:", data);
// }

// main();

// ================================== EVENTS =========================================

// const eventFun = () => {
//   alert("this is function event");
// };

// const eventFun = document.getElementById("head");
// eventFun.onclick = function () {
//   alert("this is awesome");
// };

// const addFun = document.getElementById("head").addEventListener("click", () => {
//   alert("this is addevent listener");
// });

// const abc = document.getElementById("head");

// abc.addEventListener("mouseenter", () => {
//   abc.style.color = "red";
// });

// const keyPres = () => {
//   const input = document.getElementById("para");

//   input.innerHTML = `you press ${event.key} and it's code is ${event.code}`;
// };

// ---------------------------------- Hoisting ----------------------------------------

// console.log(myName);
// var myName = "Nihar";

// -> how it works

// var myName;
// console.log(myName);
// myName = "Nihar";

// ---------------------------------- Lexical scope --------------------------------------

// let a = "Hello";

// function first() {
//   let b = " How are";

//   function second() {
//     let c = " you?";
//     console.log(a + b + c);
//   }
//   second();
//   //   console.log(a + b + c);
// }

// first();

// ---------------------------------- Closures --------------------------------------

// const outerFun = () => {
//   debugger;
//   let a = 10;

//   const innerFun = () => {
//     let b = 20;
//     console.log("sum:", a + b);
//   };
//   innerFun();
// };
// outerFun();

// ---------------------------------- Syncronous & Asyncronous --------------------------------------

// => Syncronous:

// const fun2 = () => {
//   console.log("Hello This is function 2");
// };

// const fun1 = () => {
//   console.log("Hello This is function 1");
//   fun2();
//   console.log("Hello This is function 1");
// };

// fun1();

// => Asyncronous:

// const fun2 = () => {
//   setTimeout(() => {
//     console.log("Hello This is function 2");
//   }, 2000);
// };

// const fun1 = () => {
//   console.log("Hello This is function 1");
//   fun2();
//   console.log("Hello This is function 1");
// };

// fun1();

// ---------------------------------- Currying --------------------------------------

// function sum(num1) {
//   return function (num2) {
//     return function (num3) {
//       console.log(num1 + num2 + num3);
//     };
//   };
// }
// -------------------------------
// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
// sum(5)(3)(8);

// ---------------------------------- CallBack Hell --------------------------------------

// setTimeout(() => {
//   console.log("hello");
//   setTimeout(() => {
//     console.log("hello1");
//     setTimeout(() => {
//       console.log("hello2");
//       setTimeout(() => {
//         console.log("hello3");
//         setTimeout(() => {
//           console.log("hello4");
//           setTimeout(() => {
//             console.log("hello5");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ---------------------------------- JSON --------------------------------------

// let myObject = { key_1: "some text", key_2: true, key_3: 5 };

// let obj_to_json = JSON.stringify(myObject);

// console.log(typeof obj_to_json); // convert object into JSON

// let json_to_obj = JSON.parse(obj_to_json);

// console.log(typeof json_to_obj); // convert json into object

// ---------------------------------- JSON --------------------------------------

// let text = "Mr. Blue has a blue house";

// let position = text.search("Blue");
// console.log("position:", position);

// ================================ Example ===============================

// let students = [
//   "nihar",
//   "dharmin",
//   "nivya",
//   "hemaxi",
//   "krishnanandan",
//   "ravindranath",
//   "aryan",
//   "meet",
// ];

// let house = [];

// for (const student of students) {
//   if (student.length < 6) {
//     house.push("Gyffindor");
//   } else if (student.length < 8) {
//     house.push("Huffelpuff");
//   } else if (student.length < 12) {
//     house.push("Ravenclaw");
//   } else {
//     house.push("Slytherin");
//   }
// }

// console.log("house:", house);

// --------------------------------------------------

// let data = "nihar";
// let data2 = data.split("").reverse().join("");
// console.log("data2:", data2);

// let revStr = "";

// const fun = (str) => {
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   console.log("fun  revStr:", revStr);
// };

// fun("Nihar");

// ==========================================

// let arr = ["Nihar", "Patel", "From", "Valsad"];

// let newarr = arr.map((ele, ind, arr) => {
//   console.log(ele);
// });

// let arr = [6, 3, 9, 3, 2, 1];

// let ans = arr.sort((a, b) => a - b);
// console.log("ans:", ans);

// =============== Clouser =======================

// function outer(params) {
//   let x = 10;

//   function inner(params) {
//     console.log(x);
//   }
//   inner();
// }

// outer();

// ====================== async awit ==========================

// // a promise
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise resolved");
//   }, 4000);
// });

// // async function
// async function asyncFunc() {
//   // wait until the promise resolves
//   let result = await promise;

//   console.log(result);
//   console.log("hello");
// }

// // calling the async function
// asyncFunc();

// ====================== Shallow And Deep Copy ==========================

// let obj = {
//   name: "nihar",
//   age: 23,
// };

// let newObj = obj; // newObj: { name: 'nihar', age: 23 }

// newObj.age = 24;

// console.log(obj); // { name: 'nihar', age: 24 }
// console.log(newObj); // { name: 'nihar', age: 24 }

// => if we  modify copied object it will also change in original object this is call shallow copy..

//=> Deep Copy...

// let obj = {
//   name: "nihar",
//   age: 23,
// };

// let newObj = { ...obj }; //newObj: { name: 'nihar', age: 23 }

// newObj.age = 24;

// console.log("obj:", obj); //obj: { name: 'nihar', age: 23 }
// console.log("newObj:", newObj); //newObj: { name: 'nihar', age: 24 }

// => if we  modify copied object it will not change in original object (bcz it gets new memory location) this is call Deep copy..

// ======================== Call Back Function ===============

// function fun1(name, callback) {
//   console.log("Hi" + " " + name);
//   callback();
// }

// // callback function
// function fun2() {
//   console.log("I am callback function");
// }

// // passing function as an argument
// fun1("Peter", fun2);

// ======================= Anonymous Function ==========================

// var anonymousFun = function () {
//   console.log("hello");
// };
// anonymousFun();

// ======================= Higher order Function ==========================

// Callback function, passed as a argument in the higher order function
// function callbackFunction() {
//   console.log("I am  a callback function");
// }

// // higher order function
// function higherOrderFunction(func) {
//   console.log("I am higher order function");
//   func();
// }

// higherOrderFunction(callbackFunction);

// =======================  =============================

// for (i = 100; i >= 0; i--) {
//   if (i % 5 == 0) {
//     continue;
//   }

//   console.log(i);
// }

// =====================================================

// let arr = [1, 4, 5, 3];
// let arr2;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > arr2) {
//     arr2 += arr[i];
//   }
//   console.log(arr2);
// }

// ====================================

// console.log(4 == "4");

// ====================================================

// user = {
//   name: "Nihar",
//   id: 213,
//   age: 24,
// };

// Object.defineProperties(user, {
//   id: { writable: false },
// });

// user.id = 123;
// console.log(user);

// ============================

// const user = Object.freeze({
//   name: "Nihar",
//   age: 24,
// });

// user.name = "guru";

// console.log(user);
