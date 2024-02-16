// should present a...z alphabet is called pangram

function pangram(str) {
  let newStr = str.replaceAll(" ", "");

  newStr = new Set(newStr);

  if (newStr.size === 26) {
    console.log("Is pangram");
  } else {
    console.log("Is not pangram");
  }
}

pangram("Five or six big jet planes zoomed quickly by the tower");

// function fun1(name, callback) {
//   console.log(name);
//   callback();
// }

// function fun2() {
//   console.log("Patel");
// }

// fun1("Nihar", fun2);
