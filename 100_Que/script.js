// Find the longest word from a string..

// function findLongestWord(str) {
//   debugger;

//   if (str.trim().length === 0) {
//     return false;
//   }

//   let newStr = str.split(" ");

//   let ans = newStr.reduce((acc, cur) => {
//     return cur.length > acc.length ? cur : acc;
//   }, "");

//   console.log(ans);
// }
// findLongestWord("Hell my name is nihar");

//=============================================================

// convert a string into camalcase ,each word first letter should be capitalized and space shuld be removed.

// const generateHash = (str) => {
//   if (str.length > 220 || str.trim().length === 0) {
//     return false;
//   }

//   str = str.split(" ");

//   let newstr = str.map((ele) => {
//     // return ele.replace(ele[0], ele[0].toUpperCase());
//     return ele.charAt(0).toUpperCase() + ele.slice(1);
//   });

//   let ans = `#${newstr.join("")}`;

//   console.log("ans:", ans);
// };

// generateHash("hello my name is nihar");

//=============================================================
// var arr1 = "john".split("");
// console.log("arr1:", arr1);
// var arr2 = arr1.reverse();
// console.log("arr2:", arr2);
// var arr3 = "jones".split("");
// console.log("arr3:", arr3);
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

//=============================================================

// function Nos(n) {
//   if (n <= 100) {
//     console.log(n);
//     Nos(n + 1);
//   }
//   return;
// }

// Nos(1);

//===================================================================================

// => Write a function that take two parameter: a string and a character to count.

// const countChar = (word, char) => {
//   word = word.toLowerCase();
//   char = char.toLowerCase();

//   totalCount = word.split("").reduce((acc, curChar) => {
//     if (curChar === char) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
//   console.log(totalCount);
// };

// countChar("MissIssippi", "I");

//================================= Day-4 ==================================================

// const checkTriangle = (a, b, c) => {
//   if (a === b && b === c) {
//     console.log('Triangle is equilateral');
//   } else if (a === b || b === c || a === c) {
//     console.log('Triangle is isosceles');
//   } else if (a !== b && b !== c) {
//     console.log('Triangle is scalene');
//   }
// };

// checkTriangle(2, 2, 3);

//================================= Day-5 ==================================================

// const sortArr = (arr) => {
//   debugger;
//   let sort = arr.sort((a, b) => a - b);
//   console.log('sortArr  sort:', sort);
// };

// sortArr([5, 3, 1, 8]);

// if(a>b) flip the order and start again from starting

// 3, 5, 1, 8;

// 3 > 5;
// 5 > 1;

// 3, 1, 5, 8;
// 3 > 1;
// 1, 3, 5, 8;

// 1 > 3;
// 3 > 5;
// 5 > 8;

// ============================================================================

// DeepCopy

// let obj = {
//   name: 'Nihar',
//   age: 24,
//   add: {
//     city: 'valsad',
//   },
// };

// let obj2 = {};
// Object.assign(obj2, obj);

// obj2.age = 30;
// console.log('obj:', obj);
// console.log('obj2:', obj2);

// ====== or =========

// let obj2 = { ...obj };
// obj2.add.city = 'pathri';
// console.log('obj:', obj);
// console.log('obj2:', obj2);

// ================== DEEP COPY =======================

// let obj2 = JSON.parse(JSON.stringify(obj));

// obj2.add.city = 'pathrii';

// console.log('obj2:', obj);
// console.log('obj2:', obj2);

//================================= Day-6 ==================================================

// => Strings is palindrome or not

// const isPalindrome = (str) => {
//   str = str.toLowerCase().replace(/\W/g, '');
//   strRev = str.split('').reverse().join('');
//   if (str === strRev) {
//     console.log(`${str} is palindrome`);
//   } else {
//     console.log(`${str} is not palindrome`);
//   }
// };

// isPalindrome('hello');

//================================= Day-7 ==================================================
// => find max number from an array..

// const findMax = (arr) => {
//   return Math.max(...arr);
// };

// console.log(findMax([1, 5, 3, 9, 2]));
// console.log(findMax([-10, -5, -3, -9, -2]));
// console.log(findMax([5]));

// =================== OR =======================

// const findMax = (arr) => {
//   let maxnum = arr.map((ele) => {
//     let max = 0;

//     if (ele > max) {
//       max = ele;
//     }
//     return max;
//   });
//   return maxnum;
// };

// console.log(findMax([1, 5, 3, 9, 2]));
// console.log(findMax([-10, -5, -3, -9, -2]));
// console.log(findMax([5]));

//================================= Day-8 ==================================================

// const factorial = (n) => {
//   let fac = 1;

//   for (let i = n; i > 0; i--) {
//     fac *= i;
//   }
//   console.log(`Factorial of ${n} is : ${fac}`);
// };

// factorial(5);
// factorial(0);
// factorial(3);
// =========================================================
// const factorial = (n) => {
//   return n === 0 ? 1 : n * factorial(n - 1);
// };

// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(0));

// Calculating factorial for n = 5
// Calculating factorial for n - 1 = 4
// Calculating factorial for n - 1 = 3
// Calculating factorial for n - 1 = 2
// Calculating factorial for n - 1 = 1
// Calculating factorial for n - 1 = 0
// Base case reached, returning 1
// Factorial for n = 1 is 1
// Factorial for n = 2 is 2
// Factorial for n = 3 is 6
// Factorial for n = 4 is 24
// Factorial for n = 5 is 120
// Final result: 120