// ================ For Loop ===================

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best number");
//   }
//   console.log(i);
// }

// ------------------------------------------------------------

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 1; j <= 10; j++) {
// console.log(`Inner loop value: ${j} and inner loop ${i}`);
// console.log("*");
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

// ------------------------------------------------------------

// let arr = ["spiderman", "ironman", "batman"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// ------------------------------------------------------------
//break and continue...

// for (let i = 0; i <= 10; i++) {
//   if (i == 5) {
//     console.log("Detected 5");
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i == 5) {
//     console.log("Detected 5");
//     continue;
//   }
//   console.log(i);
// }

//======================= While, Do While Loops ========================

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// -------------------------------------------

// let arr = ["flash", "ironman", "batman"];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// ---------------------------------------------

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// =============================== for of loop ========================

// let arr = [1, 2, 3, 4];
// for (const i of arr) {
//   console.log(i);
// }

// let str = "Hello World!";

// for (const char of str) {
//   if (char == " ") {
//     continue;
//   }
//   console.log(`each char is ${char}`);
// }

// ============================= Map ================================

// const map = new Map();
// map.set("IN", "india");
// map.set("USA", "United state of america");
// map.set("FR", "France");
// console.log("map:", map);

// for (const [key, value] of map) {
//   console.log(key, "-", value);
// }

// const obj = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// for (const [key, value] of obj) {
//   console.log(key, "-", value);
// }

// ========== for in ===========

// const Obj = {
//   js: "Javascript",
//   cpp: "C++",
//   rb: "Ruby",
// };

// for (const key in Obj) {
//   console.log(Obj[key]);
// }

//-----------------------------------

// let arr = ["js", "cpp", "java", "html"];

// for (const key in arr) {
//   console.log("key:", key);
//   console.log(arr[key]);
// }

// --------------------------------------

// const Obj = [
//   {
//     langName: "javascript",
//     langfile: "js",
//   },

//   {
//     langName: "java",
//     langfile: "java",
//   },

//   {
//     langName: "python",
//     langfile: "py",
//   },
// ];

// Obj.forEach((ele, ind, arr) => {
//   console.log(ele.langName);
// });

// ======================= Filter , Map & Reducer =========================

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ans = arr.filter((ele, ind, arr) => ele > 5);
// console.log("ans:", ans);

// -------------------------------------------------------

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let userBook = books.filter((ele, ind, arr) => ele.genre === "History");

// let userBook = books.filter((ele, ind, arr) => {
//   return ele.publish >= 1995 && ele.genre === "History";
// });

// console.log("ans:", userBook);

// ------------------------ Map --------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ans = arr
//   .map((ele, ind, arr) => ele * 10)
//   .map((ele) => ele + 1)
//   .filter((ele) => ele >= 30);

// console.log("ans  ans:", ans);

// --------------------- Reduce ----------------------------

// let arr = [1, 2, 3];

// let ans = arr.reduce((accumulator, currentValue) => {
//   console.log(`acc: ${accumulator} and currVal: ${currentValue}`);
//   return accumulator + currentValue;
// }, 2);
// console.log("Total:", ans);

// ---------- or -------------
// let ans = arr.reduce((acc, currVal) => acc + currVal, 0);
// console.log("ans:", ans);

// ==============================================

// const Cart = [
//   {
//     itemName: "js course",
//     price: 2836,
//   },
//   {
//     itemName: "py course",
//     price: 3521,
//   },
//   {
//     itemName: "Mobile dev course",
//     price: 4777,
//   },
//   {
//     itemName: "data science course",
//     price: 13829,
//   },
// ];

// let total = Cart.reduce((acc, curVal) => acc + curVal.price, 0);
// console.log("total:", total);
