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

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));
