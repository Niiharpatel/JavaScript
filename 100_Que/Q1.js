// Find the longest word from a string..

function findLongestWord(str) {
  if (str.trim().length === 0) {
    return false;
  }

  let newStr = str.split(" ");

  let ans = newStr.reduce((acc, cur) => {
    return cur.length > acc.length ? cur : acc;
  }, "");

  console.log(ans);
}

findLongestWord("Hello my name is nihar");
