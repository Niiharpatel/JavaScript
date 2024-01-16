// function addition(num1, num2) {
//   console.log(num1 + num2);
// }

// const result = addition(3, 2);
// console.log("result:", result); // undefined => bcz function return nothing

// ================================================

// function addition(num1, num2) {
//   return num1 + num2;
// }

// const result = addition(3, 2);
// console.log("result:", result); // 5 => bcz function return addition of two numbers

// =================================================

// function loginUserMessage(username = "sem") {
//   // here we gave default value to username
//   if (!username) {
//     console.log("Please Enter Name");
//     return;
//   }
//   return `${username} just logged in`;
// }

// // let result = loginUserMessage("Nihar");
// // console.log(loginUserMessage("Nihar"));
// console.log(loginUserMessage());

// =================================================

// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(200, 400, 500, 700));

// const user = {
//   name: "nihar",
//   price: "99",
// };

// function handleObj(anyobject) {
//   console.log(
//     `Username is ${anyobject?.name} and Price is ${anyobject?.price}`
//   );
// }

// handleObj(user);
// handleObj({
//   name: "sem",
//   price: "47",
// });

// const arr = [100, 300, 400, 27];

// function returnSecondValue(getArr) {
//   return getArr[2];
// }
// console.log(returnSecondValue(arr));

// ==================== Closure =============================

// function one() {
//   const username = "nihar";

//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   // console.log("website:", website);

//   two();
// }

// one();

// ====================== Hoisting ===========================
// console.log(add1(5));

// function add1(num) {
//   return num + 1;
// }

// console.log(add2(2));

// const add2 = function (num) {
//   return num + 2;
// };

// ====================== Arrow Function ===========================

// const user = {
//   username: "Nihar",
//   price: "888",

//   welcomeMessage: function () {
//     console.log(`${this.username} ,  Welcome to website`);
//     console.log(this);
//   },
// };
// // user.welcomeMessage();

// // user.username = "sem";

// // user.welcomeMessage();

// console.log(this); // {}

// function user() {
//   let username = "nihar";
//   console.log(this.username);
// }
// user();

// const user = () => {
//   let username = "nihar";
//   console.log(this.username);
// };

// user();

// const add2 = (num1, num2) => {
//   return num1 + num2;
// };

// const add2 = (num1, num2) => num1 + num2;

// const add2 = (num1, num2) => ({ username: "Nihar" });

// console.log(add2(3, 5));

// const arr = [3, 5, 2, 5, 8];

// arr.forEach(()=>{})

// ====================== IIFE ===========================

(function user() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

(() => {
  //Simple IIFE
  console.log("hello");
})();
