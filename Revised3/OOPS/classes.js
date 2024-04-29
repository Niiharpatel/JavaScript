// class CreateUser {
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }
//   getYear() {
//     return new Date().getFullYear() - this.age;
//   }

//   getFullName() {
//     return this.fname + ' ' + this.lname;
//   }
// }

// const user1 = new CreateUser('Guru', 'Patel', 24);
// const user2 = new CreateUser('raj', 'Patel', 25);

// ================== Private class fields ==================

// class CreateUser {
//   #age;
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.#age = age;
//   }

//   #hi = 'Hello World';

//   getYear() {
//     console.log(this.#hi);
//     return new Date().getFullYear() - this.#age;
//   }

//   #getFullName() {
//     return this.fname + ' ' + this.lname;
//   }
// }

// const user1 = new CreateUser('Guru', 'Patel', 24);
// const user2 = new CreateUser('raj', 'Patel', 25);

// ================ Static Propeties and Methods ===============

// class CreateUser {
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }

//   static hi = 'Hello World';

//   static {
//     console.log('Hello');

//     this.hi2 = 'Hello World 2';
//   }

//   getYear() {
//     console.log(this.hi);
//     return new Date().getFullYear() - this.age;
//   }

//   static getFullName() {
//     return this.fname + ' ' + this.lname;
//   }
// }

// const user1 = new CreateUser('Guru', 'Patel', 24);
// const user2 = new CreateUser('raj', 'Patel', 25);

// ===================== Getter Setter ====================

// const user = {
//   fname: 'Nihar',
//   lname: 'patel',
//   get fullName() {
//     return `${this.fname} ${this.lname}`;
//   },
//   set fullName(value) {
//     console.log(value);
//   },
// };

// console.log(user.fullName);

// user.fullName = 'Nihhaarrr..';

// =================== Prototypal Inheritance using Extend nad super keyword ===========

class User {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }

  getYear() {
    console.log(this.hi);
    return new Date().getFullYear() - this.age;
  }

  get FullName() {
    return this.fname + ' ' + this.lname;
  }
}
// const user1 = new CreateUser('Guru', 'Patel', 24);
// const user2 = new CreateUser('raj', 'Patel', 25);

class Student extends User {
  constructor(fname, lname, age, standard) {
    super(fname, lname, age);
    this.standard = standard;
  }
  study() {
    console.log('Studying...');
  }
}
class Employee {}

const student1 = new User('Guru', 'Patel', 24, 'BCA');
const student2 = new User('raj', 'Patel', 25, '10');
