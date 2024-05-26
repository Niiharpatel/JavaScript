const user = {
  name: 'nihar',
  age: 24,
  city: 'Valsad',
  //   getFullName: function () {
  //     return user.name + user.age;
  //   },
};

console.log(user.add && user.add.city);
// ======== OR ==========
// console.log(user.add?.city);
// ===================================

console.log(user.getFullName?.());
