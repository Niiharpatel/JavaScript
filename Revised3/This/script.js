// function Fun() {
//   console.log(this);
// }

// new Fun();
// ==============================

// const user = {
//   name: 'Nihar',
//   age: 24,
//   fullName() {
//     function getAge() {
//       console.log('Getting age');
//       console.log(this);
//     }
//     getAge();
//     console.log(this);
//   },
// };

// ==========================================

// const user = {
//   fname: 'Nihar',
//   lname: 'Patel',
//   tags: ['a', 'b', 'c'],
//   printTags() {
//     console.log(this.tags);
//     this.tags.forEach((tag) => {
//       console.log(tag, this.fname);
//     }, this);
//     console.log(this.fname);
//   },
// };

// =============================================
// const user = {
//   name: 'Nihar',
//   age: 24,
//   fullName() {
//     function GetAge() {
//       console.log('Getting age');
//       console.log(this);
//     }
//     new GetAge();
//     console.log(this);
//   },
// };

// ================================================

// const h1 = document.querySelector('h1');

// h1.addEventListener('click', function () {
//   console.log(this);
// });

// ==========================================

// const body = document.querySelector('body');

// body.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log('this:', this);
// });

// ==========================================

// class User {
//   constructor() {
//     this.fname = 'Nihar';
//     console.log(this);
//   }
//   getUser() {
//     console.log(this);
//   }
// }
