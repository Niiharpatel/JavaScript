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

const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  totalCount = word.split("").reduce((acc, curChar) => {
    if (curChar === char) {
      acc += 1;
    }
    return acc;
  }, 0);
  console.log(totalCount);
};

countChar("MissIssippi", "I");
