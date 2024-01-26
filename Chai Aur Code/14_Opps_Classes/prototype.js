// let myName = "Nihar    ";
// console.log(myName.trueLength());

let arr = ["thor", "batman"];

let heroPower = {
  thor: "Hammer",
  batman: "Fly",

  getThorPower: function () {
    console.log(`Thor power is ${this.thor}`);
  },
};

Object.prototype.nihar = function () {
  console.log(`nihar is present in all object`);
};

Array.prototype.heyNihar = function () {
  console.log(`Nihar says hello`);
};

// heroPower.nihar();

// arr.nihar();

// arr.heyNihar();
// heroPower.heyNihar();

// ====================== Inheritance =======================

const user = {
  name: "Nihar",
  emial: "abc@abc.com",
};
const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// --- Modern Syntax...

Object.setPrototypeOf(teachingSupport, teacher);

// ------------------------------------------

let user2 = "Nihar     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

user2.trueLength();

"Guru".trueLength();
