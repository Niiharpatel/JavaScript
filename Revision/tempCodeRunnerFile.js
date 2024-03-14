user = {
  name: "Nihar",
  id: 213,
  age: 24,
};

Object.defineProperties(user, {
  id: { writable: false },
});

user.id = 123;
console.log(user);