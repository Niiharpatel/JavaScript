// function abc(params) {
//   let x = 10;

//   function fun2(params) {
//     console.log(x);
//   }
//   fun2();
// }
// abc();

// ================= larget value and second largest value ================

// let arr = [0, 0, 4, 6, 1, 0, 2, 2, 2, 3, 1];

// let newArr = [...new Set(arr)].sort().reverse();
// console.log("newArr:", newArr);

// ======================================================

// let arr = [2, 6, 1, 9, 10];

// let largest = 0;
// secLarge = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }

//   if (secLarge < largest) {
//   }
// }

// console.log("largest:", largest);

// =====================================================

// for (var i = 1; i <= 4; i++) {
//   console.log("* ".repeat(i));
// }

// for (let i = 1; i <= 4; i++) {
//   console.log("1 ".repeat(i));
// }

// =====================================================

// let n = 4;
// let spc = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     spc += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     spc += "*";
//   }
//   spc += "\n";
// }
// console.log(spc);

// =====================================================

// let n = 4;
// let spc = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     spc += "*";
//   }

//   spc += "\n";
// }

// console.log(spc);

// =====================================================

// let a = 2 + ["2"];
// console.log("a:", a);
