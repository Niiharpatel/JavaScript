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
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > min) {
//       min = arr[i];
//     }
//   }
//   return max;
// };

// console.log(findMax([5, 10, 2, 8]));

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

//================================= Day-9 ==================================================
// =>calculate average

// const calAverage = (arr) => {
//   let total = arr.reduce((acc, cur) => {
//     return acc + cur;
//   });

//   let avg = total / arr.length;
//   console.log('calAverage  avg:', avg);
// };

// calAverage([2, 3, 1, 5]);

//================================= Day-10 ==================================================

// =>Check array is same or not

// const arrayCheck = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   return arr1.every((ele, ind) => ele === arr2[ind]);
// };

// console.log(arrayCheck([1, 2, 3], [1, 2, 3]));
// console.log(arrayCheck([1, 2, 3], [1, 2, 4]));
// console.log(arrayCheck([], []));

//================================= Day-11 ==================================================

// const sumOfDigits = (num) => {
//   let arr = Array.from(String(num), Number);

//   return arr.reduce((acc, cur) => (acc += cur), 0);
// };

// console.log(sumOfDigits(1234));
// console.log(sumOfDigits(124));

// =================================================
// const sumOfDigits = (num) => {
//   return num
//     .toString()
//     .split('')
//     .reduce((acc, cur) => (acc += Number(cur)), 0);

//   //   return ans;
// };

// console.log(sumOfDigits(1234));
// console.log(sumOfDigits(124));

//================================= Day-12 ==================================================

// =>Remove Duplicate

// const removeDuplicate = (arr) => {
//   let newArr = [...new Set(arr)];
//   console.log('newArr:', newArr);
// };

// removeDuplicate([1, 2, 3, 4, 2, 1]);
// removeDuplicate([5, 6, 7, 7, 8, 8, 9]);
// removeDuplicate([1, 2, 3]);
// removeDuplicate([]);

//================================= Day-13 ==================================================
// => Find the vowels..

// const countVowels = (str) => {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];

//   let arr = str.split('');

//   let count = 0;

//   for (const char of arr) {
//     if (vowels.includes(char.toLowerCase())) {
//       count++;
//     }
//   }

//   return count;
// };

// console.log(countVowels('Hello world'));

//================================= Day-14 ==================================================

// const isPowerOfTwo = (num) => {
//   return num % 2 === 0 ? true : false;
// };

// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(7));
// console.log(isPowerOfTwo(9));
// console.log(isPowerOfTwo(4));

//================================= Day-15 ==================================================

// const sumOfSquare = (arr) => {
//   return arr.reduce((acc, cur) => (acc += cur * cur), 0);
// };

// console.log(sumOfSquare([1, 2, 3]));
// console.log(sumOfSquare([1, 2, 3, 4]));

//================================= Day-16 ==================================================

// const findMin = (arr) => {
//   arr.sort((a, b) => a - b);
//   return arr[0];
// };

// console.log(findMin([5, 10, 2, 8]));
// console.log(findMin([5, -3, 2, -7]));
// console.log(findMin([]));

// =================== OR ==========================

// const findMin = (arr) => {
//   if (arr.length === 0) return 'Array is empty';
//   return Math.min(...arr);
// };

// console.log(findMin([5, 10, 2, 8]));
// console.log(findMin([5, -3, 2, -7]));
// console.log(findMin([]));

// ======================= OR ======================

// const findMinNum = (arr) => {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// };
// console.log(findMinNum([5, 10, 2, 8]));
// console.log(findMinNum([5, -3, 2, -7]));

// ======================= OR ======================

// const findMinNum = (arr) => {
//   let min = arr[0];
//   for (const ele of arr) {
//     if (ele < min) {
//       min = ele;
//     }
//   }
//   return min;
// };

// console.log(findMinNum([5, 10, 2, 8]));
// console.log(findMinNum([5, -3, 2, -7]));

//================================= Day-17 ==================================================
// => Write a function to convert a string to camelCase & snake_case

// const toCamelCase = (str) => {
//   str = str
//     .toLowerCase()
//     .split(' ')
//     .map((ele, ind) => {
//       if (ind === 0) {
//         return ele;
//       } else {
//         return ele.charAt(0).toUpperCase() + ele.slice(1);
//       }
//     })
//     .join('');

//   return str;
// };

// console.log(toCamelCase('hello world niHar'));

// ================== SNACK CASE ===================

// const toSnakeCase = (str) => {
//   return str.toLowerCase().split(' ').join('_');
// };

// console.log(toSnakeCase('hello world How aRe you'));

//================================= Day-18 ==================================================

// const isUpperCase = (char) => {
//   if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//     return true;
//   }
//   return false;
// };

// console.log(isUpperCase('s'));

// ================================= OR =======================
// const isUpperCase = (char) => {
//   return char === char.toUpperCase();
// };

// console.log(isUpperCase('s'));

// ===================== OR ========================
// const isLowerCase = (char) => {
//   return char === char.toLowerCase();
// };

// console.log(isLowerCase('A'));

//================================= Day-19 ==================================================

// const startWith = (str, subStr) => {
//   return str.toLowerCase().startsWith(subStr.toLowerCase());
// };

// console.log(startWith('Hello World', 'hello'));
// console.log(startWith('Hello World', 'World'));

// ====================== OR ============================

// const startWith = (str, subStr) => {
//   return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
// };

// console.log(startWith('Hello World', 'hello'));
// console.log(startWith('Hello World', 'World'));

//================================= Day-20 ==================================================

// =>Reverse a string without using in built methods.

// const reverseString = (str) => {
//   let revStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// };

// console.log(reverseString('Hello'));

//================================= Day-21 ==================================================

// =>calculate mean,mode,median

// const calculateMean = (arr) => {
//   if (arr.length === 0) {
//     return false;
//   }

//   let sum = arr.reduce((acc, ele) => acc + ele, 0);
//   return sum / arr.length;
// };

// console.log(calculateMean([1, 2, 3, 4, 5]));
// console.log(calculateMean([10, 20, 30]));
// console.log(calculateMean([-1, 0, 1]));

// ======= MEDIAN ==== DAY-22 ========

// const findMedian = (arr) => {
//   arr.sort((a, b) => a - b);

//   let length = arr.length;

//   let mid = Math.floor(length / 2);

//   // console.log(mid);

//   if (length % 2 === 0) {
//     return (arr[mid] + arr[mid - 1]) / 2;
//   } else {
//     return arr[mid];
//   }
// };

// console.log(findMedian([5, 3, 9, 1, 7]));
// console.log(findMedian([2, 4, 6, 8]));
// console.log(findMedian([1, 3, 5, 7, 9, 11]));

//================================= Day-23 ==================================================

// const number = [1, 2, 2, 3, 1, 4, 2];

// let counts = {};

// for (const ele of number) {
//   counts[ele] = (counts[ele] || 0) + 1;
// }

// console.log('counts:', counts);

//================================= Day-24 MODE ==================================================

// const findMode = (arr) => {
//   let counts = {};
//   let maxNum = 0;
//   let mode;
//   for (const ele of arr) {
//     counts[ele] = (counts[ele] || 0) + 1;
//     if (counts[ele] > maxNum) {
//       maxNum = counts[ele];

//       mode = ele;
//     }
//   }
//   return mode;
// };

// console.log(findMode([1, 2, 2, 3, 1, 4, 2]));

//================================= Day-25  ==================================================

// const findFactorial = (num) => {
//   return num === 0 ? 1 : num * findFactorial(num - 1);
// };
// console.log(findFactorial(5));

//================================= Day-26  ==================================================
// =>Find Fibonacci number...

// const fibonacci = (num) => {
//   if (num <= 1) {
//     return num;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// };

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));

//================================= Day-27  ==================================================

// const repeatString = (str, count) => {
//   return count > 0 ? str.repeat(count) : str;
// };

// console.log(repeatString('abc', 5));
// console.log(repeatString('abc', 0));

//================================= Day-28  ==================================================

// const truncateString = (str, maxLength) => {
// if (maxLength <= 0) {
//   return str.concat('...');
// } else if (str.length > maxLength) {
//   return str.slice(0, maxLength).concat('...');
// }

//   return maxLength <= 0 ? str : str.slice(0, maxLength).concat('...');
// };

// console.log(truncateString('hello my name is Nihar Patel', 8));
// console.log(truncateString('hello my name is Nihar Patel', 0));

//================================= Day-29  ==================================================

// const numberRange = (a, b) => {
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// ===== USING Recursion Day-30 =========

// const numberRange = (a, b, arr = []) => {
//   if (a <= b) {
//     arr.push(a);
//     return numberRange(a + 1, b, arr);
//   }

//   return arr;
// };

// console.log(numberRange(0, 5));
// console.log(numberRange(3, 7));
// console.log(numberRange(-2, 2));

//================================= Day-31  ==================================================
// =>Password Validator:

// const passwordValidator = (pass) => {
//   let hasLowerCase = false;
//   let hasUpperCase = false;
//   let hasNumber = false;

//   for (const char of pass) {
//     if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//       hasUpperCase = true;
//     } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//       hasLowerCase = true;
//     } else if (!isNaN(Number(char))) {
//       hasNumber = true;
//     }
//   }

//   if (!hasLowerCase || !hasUpperCase || !hasNumber || pass.length < 8) {
//     return false;
//   }

//   return true;
// };

// console.log(passwordValidator('afkdsfadsf'));
// console.log(passwordValidator('afkdsfadsf1'));
// console.log(passwordValidator('afkdsfadsf1A'));
// console.log(passwordValidator('afkdsfadsf1Aa'));

//================================= Day-32  ==================================================

// => Image Filter..

// const tabs = document.querySelector('.tabs');
// const gallery = document.querySelectorAll('.images');

// tabs.addEventListener('click', (e) => {
//   if (e.target.dataset.category !== undefined) {
//     filterData(e.target.dataset.category);
//   }
// });

// const filterData = (data) => {
//   gallery.forEach((ele) => {
//     if (ele.dataset.category === data || data === 'all') {
//       ele.style.display = 'block';
//     } else {
//       ele.style.display = 'none';
//     }
//   });
// };

//================================= Day-33 ==================================================
// =>Random Hax Color..

// const randomHaxColor = () => {
//   return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
// };

// console.log(randomHaxColor());

//================================= Day-34 ==================================================

// const removeDuplicate = (arr) => [...new Set(arr)];

// console.log(removeDuplicate([1, 2, 3, 3, 4, 4, 5]));
// console.log(removeDuplicate(['a', 'b', 'c', 'b', 'a']));

//================================= Day-35 ==================================================

// const isEmptyObject = (obj) => {
//   return Object.keys(obj).length === 0 ? "It's Empty" : "It's not empty";
// };

// console.log(isEmptyObject({ name: 'Nihar' }));
// console.log(isEmptyObject({}));
// console.log(isEmptyObject({ keyWithNull: null }));
// console.log(isEmptyObject({ keyWithUndefined: undefined }));

//================================= Day-36 ==================================================
// =>Objct to array and array to object

// const objToArray = (obj) => {};

// const obj = {
//   name: 'Nihar',
//   age: 24,
//   city: 'Valsad',
// };

// const arr = Object.entries(obj);
// console.log(arr);
// console.log(arr.flat());

// const newObj = Object.fromEntries(arr);
// console.log('newObj:', newObj);

//================================= Day-37 ==================================================

// P=> Price
// T=> Time
// R=> Rate

// const calculateSimpleInterest = (p, t, r) => {
//   return (p * t * r) / 100;
// };

// console.log(calculateSimpleInterest(1000, 5, 3));

//================================= Day-38 ==================================================

// const calculateDays = (d1, d2) => {
//   let date1 = new Date(d1);
//   let date2 = new Date(d2);

//   let diff = Math.abs(date2 - date1);

//   return diff / (24 * 60 * 60 * 1000);
// };

// console.log(calculateDays('2024-01-01', '2024-01-31'));

//================================= Day-39 ==================================================

// const calculateAge = (date) => {
//   let curDate = new Date();
//   let birthDate = new Date(date);

//   let age = curDate.getFullYear() - birthDate.getFullYear();

//   let monthDiff = curDate.getMonth() - birthDate.getMonth();

//   if (
//     monthDiff < 0 ||
//     (monthDiff === 0 && curDate.getDate() < birthDate.getDate())
//   ) {
//     age--;
//   }

//   return age;
// };

// console.log(calculateAge('1990-05-15'));
// console.log(calculateAge('1990-02-05'));

//================================= Day-40 ==================================================

// const generateBarChart = (arr) => {
//   const chart = arr.map((ele, ind) => {
//     let str = '';
//     for (let i = 0; i < ele; i++) {
//       str = str + '*';
//     }

//     return `${ind + 1}: ${str}`;
//   });
//   return chart.join('\n');
// };

// console.log(generateBarChart([5, 3, 9, 2]));

// ============= OR =============

// const generateBarChart = (arr) => {
//   return arr
//     .map((curEle, ind) => {
//       return `${ind + 1}: ${' *'.repeat(curEle)}`;
//     })
//     .join('\n');
// };

// console.log(generateBarChart([5, 3, 9, 2]));

//================================= Day-41  ==================================================
// const rates = {
//   USD: 1, // Base currency
//   EUR: 0.9, // 1 USD = 0.9 EUR
//   GBP: 0.8, // 1 USD = 0.8 GBP
//   INR: 82, // 1 USD = 74 INR
// };

// const convertCurrency = (amount, fC, tC) => {
//   let amountInUSD = 0;

//   if (fC !== 'USD') {
//     amountInUSD = amount / rates[fC];
//   } else {
//     amountInUSD = amount;
//   }

//   let convertedAmount = 0;

//   if (tC !== 'USD') {
//     convertedAmount = amountInUSD * rates[tC];
//   } else {
//     convertedAmount = amountInUSD;
//   }

//   return convertedAmount;
// };

// console.log(convertCurrency(100, 'GBP', 'EUR'));

//================================= Day-42  ==================================================

// const validateCreditCard = (str) => {
//   str = str.replace(/\D/g, '');
//   let revStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }

//   let doubleNum = revStr
//     .split('')
//     .map((curEle, ind) => {
//       if (ind % 2 !== 0) {
//         curEle = curEle * 2;
//         console.log('.map  curEle:', curEle);

//         if (curEle > 9) {
//           curEle = curEle - 9;
//         } else {
//           curEle = curEle;
//         }
//       }
//       return curEle;
//     })
//     .reduce((acc, curEle) => {
//       return acc + Number(curEle);
//     }, 0);

//   return doubleNum % 10 === 0;
// };

// console.log(validateCreditCard('4539 1488 0343 6467'));
// console.log(validateCreditCard('8273 1232 7352 0569'));

//================================= Day-43 ==================================================

// const fizzBuzz = (n1, n2) => {
//   let arr = [];
//   for (let i = n1; i <= n2; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push('FizzBuzz');
//     } else if (i % 3 === 0) {
//       arr.push('Fizz');
//     } else if (i % 5 === 0) {
//       arr.push('Buzz');
//     } else {
//       arr.push(i);
//     }
//   }

//   return arr;
// };

// console.log(fizzBuzz(1, 15));
// console.log(fizzBuzz(12, 20));

//================================= Day-44 ==================================================

// Regular Expression:
// const a = ^[A-Za-z\d]{1,3}$

// const validateEmail = (mail) => {
//   return /^[A-Za-z\d]+(?:[.%_+][A-Za-z\d]+)*@[A-Za-z\d]+\.[A-Za-z]{2,}$/.test(
//     mail
//   );
// };

// console.log(validateEmail('john.doe@example.com'));
// console.log(validateEmail('invalid..dot@domain.com'));
// console.log(validateEmail('missing@dotcom'));
// console.log(validateEmail('no@domain'));

//================================= Day-45 ==================================================

// const validatePassword = (pass) => {
//   const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;

//   return regex.test(pass);
// };

// console.log(validatePassword('Pass123!'));
// console.log(validatePassword('password'));
// console.log(validatePassword('1234567'));
// console.log(validatePassword('P@ssw0rd'));

//================================= Day-46 ==================================================

// function validMobileNumber(num) {
//   const regex = /^[6-9][\d]{9}$/;

//   return regex.test(num);
// }

// console.log(validMobileNumber('9876543210'));
// console.log(validMobileNumber('0123456789'));
// console.log(validMobileNumber('897654321'));
// console.log(validMobileNumber('78965432107'));

//================================= Day-47 ==================================================

// function extractNumbers(str) {
//   const regex = /\d+/g;

//   return str.match(regex);
// }

// console.log(extractNumbers('abc123de456'));
// console.log(extractNumbers('no number '));
// console.log(extractNumbers('1a2b3c4d'));
// console.log(extractNumbers('100,200 and 300'));
// console.log(extractNumbers(''));

//================================= Day-48 ==================================================

const validateHexColor = (str) => {
  return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(str);
};

console.log(validateHexColor('#a3c113'));
console.log(validateHexColor('#fff'));
console.log(validateHexColor('#1234567'));
console.log(validateHexColor('#g3c113'));
