// ================== Encapsulation =====================

// const user = {
//   fname: 'Nihar',
//   lname: 'Patel',
//   age: 24,
//   getYear: function () {
//     return new Date().getFullYear() - user.age;
//   },
// };
b;
// ================== Abstraction =====================

// const user = {
//   fname: 'Nihar',
//   lname: 'Patel',
//   age: 24,
// };

// function getYear() {
//   return new Date().getFullYear() - user.age;
// }

// ============ Factory Function =============

// function createUser(fname, lname, age) {
//   const user = {
//     fname,
//     lname,
//     age,
//     getYear() {
//       return new Date().getFullYear() - user.age;
//     },
//   };

//   return user;
// }

// console.log(createUser('Guru', 'Patel', 24));

// const user1 = createUser('Guru', 'Patel', 24);
// const user2 = createUser('raj', 'Patel', 25);

// ==================== this Keyword=============================

// function createUser(fname, lname, age) {
//   const user = {
//     fname,
//     lname,
//     age,
//     getYear() {
//       return new Date().getFullYear() - this.age;
//     },
//   };

//   return user;
// }

// console.log(createUser('Guru', 'Patel', 24));

// const user1 = createUser('Guru', 'Patel', 24);
// const user2 = createUser('raj', 'Patel', 25);

// ==================== Polymorphism =============================

// function createUser(fname, lname, age) {
//   const user = {
//     fname,
//     lname,
//     age,
//     getYear: createUser.commonMethods.getYear,
//   };

//   return user;
// }

// createUser.commonMethods = {
//   getYear: function () {
//     return new Date().getFullYear() - this.age;
//   },
// };

// const user1 = createUser('Guru', 'Patel', 24);
// const user2 = createUser('raj', 'Patel', 25);

// ==================== Inheritance =============================

// function CreateUser(fname, lname, age) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
// }

// CreateUser.prototype.getYear = function () {
//   return new Date().getFullYear() - this.age;
// };
// CreateUser.prototype.getFullName = function () {
//   return this.fname + ' ' + this.lname;
// };

// const user1 = new CreateUser('Guru', 'Patel', 24);
// const user2 = new CreateUser('raj', 'Patel', 25);
