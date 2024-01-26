function multiby5(num) {
  return num * 5;
}

multiby5.power = 2;

console.log(multiby5(5));
console.log(multiby5.power);
console.log(multiby5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

const abc = new createUser("Nihar", 25);
const efg = new createUser("guru", 250);

abc.printMe();
