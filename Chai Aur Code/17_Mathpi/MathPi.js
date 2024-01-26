// console.log(Math.PI);

// Math.PI = 4;

// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// ----------

// Object.defineProperty(Math, "PI", {
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// -----------------------------------------------

// const newObj = Object.create(null);
// console.log("newObj:", newObj);

// const obj = {
//   name: "Nihar",
//   price: 230,
//   isAvailable: true,
// };
// console.log("obj:", obj);

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// Object.defineProperty(obj, "name", {
//   writable: false,
//   enumerable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
