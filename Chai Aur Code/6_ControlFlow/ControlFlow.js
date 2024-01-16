// const isUserLogged = true;

// if (isUserLogged) {
//   console.log("Success");
// }

// ========================================

// const temperature = 41;

// if (temperature != 41) {
//   console.log("less then 50");
// } else {
//   console.log("greater than 50");
// }

// ========================================
// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }

// console.log(`User power:${power} `);

// ========================================
// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test-2");

// =============================================

// if (balance < 500) {
//   console.log("less than 1000");
// } else if (balance < 750) {
//   console.log("less than 500");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

// =============================================

// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromgoogle = false;
// const loggedInFromEmail = true;

// if (userLoggedIn && debitCard && 2 == 3) {
//   console.log("allow to buy");
// }

// if (loggedInFromgoogle || loggedInFromEmail) {
//   console.log("user logged in");
// }

// ================= SWITCH ============================
// const month = 11;

// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("Mar");
//     break;
//   case 4:
//     console.log("Apr");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("Jun");
//     break;
//   case 7:
//     console.log("Jul");
//     break;
//   case 8:
//     console.log("Aug");
//     break;
//   case 9:
//     console.log("Sep");
//     break;
//   case 10:
//     console.log("Oct");
//     break;
//   case 11:
//     console.log("Nov");
//     break;
//   case 12:
//     console.log("Dec");
//     break;

//   default:
//     console.log("Enter Proper Number");
//     break;
// }

// ==================== Truthy & Falsy Value =====================

// const userEmail = "nihar@24.com";

// if (userEmail) {
//   console.log("Got UserMail");
// } else {
//   console.log("Don't UserName");
// }

// const userEmail = [];

// if (userEmail.length === 0) {
//   console.log("array is empty");
// }

// const obj = {};
// if (Object.keys(obj).length === 0) {
//   console.log("object is empty");
// }

// ======================= Nullish Coalescing Operator (??) : null undefined

// let val;
// val = 5 ?? 10;
// console.log("val:", val);  // 5
// val = null ?? 10;  // 10
// val = undefined ?? 10;  // 10

// val = null ?? 10 ?? 16; // 10

// console.log(val);

// ============== Ternary operator ===============

// const price = 100;

// price >= 80 ? console.log("less than 80") : console.log("more than 80");
