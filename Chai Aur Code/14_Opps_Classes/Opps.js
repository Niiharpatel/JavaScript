// const user = {
//   userName: "Nihar",
//   loginCount: 3,
//   signedIn: "true",

//   getUserDetails: function () {
//     // console.log("Got user details from database" + " " + this?.loginCount);
//     // console.log(`Username: ${this.userName}`);
//     // console.log(this);
//   },
// };

// console.log(user.userName);
// console.log(user.getUserDetails());

// console.log(this);

// -------------------- Constructor Function ---------------------

function user(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.userName}`);
  };

  return this;
}

// const user1 = user("Nihar", 5, true);
// console.log("user1:", user1);

// const user2 = user("guru", 33, false);
// console.log("user2:", user2);

const user1 = new user("Nihar", 5, true);
console.log("user1:", user1);

const user2 = new user("guru", 33, false);
// console.log("user2:", user2);
