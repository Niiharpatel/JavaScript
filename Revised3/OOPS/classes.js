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

class CreateUser {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }

  static hi = 'Hello World';

  static {
    console.log('Hello');

    this.hi2 = 'Hello World 2';
  }

  getYear() {
    console.log(this.hi);
    return new Date().getFullYear() - this.age;
  }

  static getFullName() {
    return this.fname + ' ' + this.lname;
  }
}

const user1 = new CreateUser('Guru', 'Patel', 24);
const user2 = new CreateUser('raj', 'Patel', 25);
