
const obj = {
  name: 'Nihar',
  age: 24,
  city: 'Valsad',
  lname: 'Patel',
};

Object.defineProperties(obj, { name: { writable: false } });
obj.name = 'guru';

console.log(obj);