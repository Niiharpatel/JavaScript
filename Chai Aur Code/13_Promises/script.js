// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promise1
//   .then((res) => {
//     console.log("Promise fulfilled");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ------------------------------------

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// })
//   .then(() => {
//     console.log("Task 2 fulfilled");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// -----------------------------------------

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       user: "Nihar",
//       age: 24,
//     });
//   }, 1000);
// });

// promise3
//   .then((res) => {
//     console.log(res.user);
//   })
//   .catch((err) => {
//     console.log("Error");
//   });

// ------------------------------------------------------

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         user: "Nihar",
//         age: 24,
//       });
//     } else {
//       reject("Eror...");
//     }
//   }, 1000);
// });

// promise4
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally();

// ------------------------------------------------------

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({
//         user: "Nihar",
//         age: 24,
//       });
//     } else {
//       reject("Eror...");
//     }
//   }, 1000);
// });

// async function promi5() {
//   try {
//     const response = await promise5;
//     console.log("promi5  response:", response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// promi5();

// ---------------------------------------------------------

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log("getAllUsers  data:", data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

// -------------------------

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
