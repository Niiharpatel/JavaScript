// let firstName = "Nihar";
// let lastName = "Patel";
// let age = 24;
// let isHappy = true;

// let userIntro =
//   "Hi my name is " +
//   firstName +
//   " " +
//   lastName +
//   " " +
//   "i am " +
//   " " +
//   age +
//   " year old.";

// console.log("userIntro:", userIntro);

// STRING METHOD...........

// let userName = "Nihar";

// console.log(userName[0]);

// ====================================== LOGICAL OPERATORS ========================

// let name = prompt('Enter name') || 'Nihar';
// let age = prompt('Enter age') || '23';

// console.log(name);
// console.log(age);

// let name2 = 'Nihar';

// =============================== OBJECT ================================

// const obj = {
//   name: 'Nihar',
//   age: 24,
//   city: 'Valsad',
//   lname: 'Patel',
// };

// const obj2 = {
//   name: 'Nihar',
//   age: 24,
//   city: 'Valsad',
//   lastname: 'Patel',
// };

// console.log(obj.age);
// console.log(obj['age']);
// console.log(obj2['last' + 'name']);

// obj.add = 'juj';

// obj['is-student'] = true;

// Object.defineProperties(obj, { name: { writable: false } });
// obj.name = 'guru';

// console.log(obj);

// delete obj.city;
// console.log(obj);

// Object.seal(obj);

// Object.freeze(obj);

// =============================== Array ================================

// const arr = ['apple', 'banana', 'grapes', 'dates'];

// arr[2] = 'cherry';

// let i = 0;

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// =============

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i = 1; i < 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// =========================

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// ====================== FUNCTION =============================

// function introduce(username) {
//   console.log('introduce  username:', username || 'Nihar');
// }

// introduce('Guru');
// introduce();

// ===================== SETTIMEOUT & SETINTERVAL ====================

// setTimeout(() => {
//   console.log('HEllo');
// }, 2000);

// console.log('Hello');

// function hello() {
//   console.log('Hello');
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// hello();
// setTimeout(hello, 12000);

// console.log('hii-2');

// ===================== METHOD ===========================

// const maths = {
//   add: function (a, b) {
//     return a + b;
//   },
//   square: function (num) {
//     return num * num;
//   },
// };

// ================= ARROW FUNCTION ================

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 2));

// const add = (num) => num * num;

// ====================== FOR OF LOOP ==========================

// const arr = ['apple', 'banana', 'grapes', 'mango'];

// for (const fruit of arr) {
//   console.log(fruit);
// }

// =================

// const info = {
//   name: 'junas',
//   age: 23,
//   city: 'cahnoi',
// };

// for (const key in info) {
//   console.log('key:', key);
// }

// const key = Object.keys(info);
// const values = Object.values(info);
// const entries = Object.entries(info);

// console.log('key:', key);
// console.log('values:', values);
// console.log('entries:', entries);

// =================
// const arr = ['apple', 'banana', 'grapes', 'mango'];

// arr.forEach((ele, ind, arr) => {
//   console.log(ele.toUpperCase());
// });
// console.log('arr:', arr);

// =========================

// const arr = ['apple', 'banana', 'grapes', 'mango'];

// const fruits = arr.map((ele, ind, arr) => {
//   return ele;
// });
// console.log('fruits :', fruits);

// ========== Filter ===============

// const arr = ['apple', 'banana', 'grapes', 'mango'];

// const filterArr = arr.filter((ele, ind, arr) => {
//   console.log(ele.toLowerCase().includes('b'));
//   return ele.toLowerCase().includes('b');
// });
// console.log('filterArr  filterArr:', filterArr);

// =================================

// const students = [
//   {
//     name: 'nihar',
//     age: 24,
//   },
//   {
//     name: 'guru',
//     age: 18,
//   },
//   {
//     name: 'raj',
//     age: 17,
//   },
//   {
//     name: 'dharmin',
//     age: 23,
//   },
//   {
//     name: 'nivya',
//     age: 17,
//   },
// ];

// let filterData = students
//   .filter((ele, ind, arr) => {
//     return ele.age >= 18;
//   })
//   .map((ele, ind, arr) => {
//     return ele.name;
//   });
// console.log('filterData  :', filterData);

// ================== REDUCE ==============================

// const nums = [2, 1, 3, 7, 8];

// const total = nums.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);
// console.log('total  total:', total);

// =========================== SOME & EVERY ==================================

// const arr = [1, 2, 3, 4];

// let result = arr.some((ele, ind, arr) => {
//   return ele > 3;
// });
// console.log('result:', result);

// ==============================

// let result = arr.every((ele, ind, arr) => {
//   return ele > 3;
// });

// console.log(result);

// =================================================

// function addition() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   console.log('addition  sum:', sum);
// }

// addition(1, 2, 3);

// ======================= REST PARAMETER =====================

// const addition = (a, b, ...rest) => {
//   console.log(a, b, ...rest);
// };

// addition(1, 2, 3, 4, 5);

// ================== SHAllow Copy =====================

// let arr = [1, 2, 3, 4];

// let newarr = arr;

// newarr[0] = 0;

// console.log('newarr:', newarr);
// console.log('arr:', arr);

// ===================== Destructure =========================

// const colors = ['red', 'black', 'yellow', 'green'];

// const [color1, color2, othercolor] = colors;
// const [, , color3] = colors;

// console.log('color1:', color1);
// console.log('color2:', color2);
// console.log('color2:', othercolor);
// console.log('color3:', color3);

// const { 2: color } = colors;
// console.log('color:', color);
// ============================================

// const user = {
//   name: 'nihar',
//   age: 24,
//   add: {
//     city: 'valsad',
//     state: 'gujarat',
//   },
// };

// const { name, age } = user;

// console.log('name:', name);
// console.log('age:', age);

// const { name: username } = user;
// console.log('username:', username);

// => Multilevel Destructure:

// const {
//   add: { city },
// } = user;
// console.log('city:', city);

// =====================
// function userFun({ age }) {
//   console.log(age);
// }
// userFun(user);

// ====================== Selectors =======================

// const list = document.getElementById('list');
// const img = document.getElementsByClassName('img1');
// const images = document.getElementsByTagName('img');
// const list = document.querySelector('.img1');
// const img = document.querySelectorAll('#jsimg');

// let para = document.querySelector('p');
