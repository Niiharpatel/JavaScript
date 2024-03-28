// convert a string into camalcase ,each word first letter should be capitalized and space shuld be removed.

const generateHash = (str) => {
  if (str.length > 220 || str.trim().length === 0) {
    return false;
  }

  str = str.split(" ");

  let newstr = str.map((ele) => {
    // return ele.replace(ele[0], ele[0].toUpperCase());
    return ele.charAt(0).toUpperCase() + ele.slice(1);
  });

  let ans = `#${newstr.join("")}`;

  console.log("ans:", ans);
};

generateHash("hello my name is nihar");
