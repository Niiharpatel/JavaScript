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

let arr = [2, 6, 1, 9, 10];

let largest = 0;
secLarge = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }

  if (secLarge < largest) {
  }
}

console.log("largest:", largest);
