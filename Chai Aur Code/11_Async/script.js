// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log(3);

// -------------------------
let arr = [1, 2, 3, 4];

arr.reduce(
  (acc, cur) => {
    console.log("cur:", acc + cur);
  },
  [1]
);
